import xml.etree.ElementTree as ET
import zipfile
import json

def get_country_coordinates(file_path):
    with zipfile.ZipFile(file_path, 'r') as zip_ref:
        with zip_ref.open('xl/sharedStrings.xml') as f:
            tree = ET.parse(f)
            root = tree.getroot()
            ns = {'ns': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
            shared_strings = [t.text for t in root.findall('.//ns:t', ns)]

        with zip_ref.open('xl/worksheets/sheet1.xml') as f:
            tree = ET.parse(f)
            root = tree.getroot()
            country_data = {} # {country: [sum_lat, sum_long, count, [dead], [disp]]}
            
            rows = root.findall('.//ns:row', ns)
            for row in rows:
                cells = row.findall('ns:c', ns)
                country, lon, lat = None, None, None
                dead_val, disp_val = None, None
                
                for cell in cells:
                    r = cell.get('r')
                    if not r: continue
                    col = "".join([c for c in r if not c.isdigit()])
                    v_elem = cell.find('ns:v', ns)
                    if v_elem is None: continue
                    val = v_elem.text
                    t = cell.get('t')
                    
                    if col == 'C' and t == 's':
                        country = shared_strings[int(val)].strip()
                    elif col == 'E':
                        try: lon = float(val)
                        except: pass
                    elif col == 'F':
                        try: lat = float(val)
                        except: pass
                    elif col == 'K':
                        try: dead_val = int(float(val))
                        except: pass
                    elif col == 'L':
                        try: disp_val = int(float(val))
                        except: pass
                
                if country and country != "Country" and lat is not None and lon is not None:
                    if country not in country_data:
                        country_data[country] = [0, 0, 0, [], []]
                    country_data[country][0] += lat
                    country_data[country][1] += lon
                    country_data[country][2] += 1
                    if dead_val is not None: country_data[country][3].append(dead_val)
                    if disp_val is not None: country_data[country][4].append(disp_val)
            
            final_data = []
            max_stats = {"cases": 0, "dead": 0, "displaced": 0}
            for country, values in country_data.items():
                dead_total = sum(values[3]) if values[3] else None
                disp_total = sum(values[4]) if values[4] else None
                
                max_stats["cases"] = max(max_stats["cases"], values[2])
                if dead_total: max_stats["dead"] = max(max_stats["dead"], dead_total)
                if disp_total: max_stats["displaced"] = max(max_stats["displaced"], disp_total)

                final_data.append({
                    "name": country, "lat": values[0] / values[2], "lng": values[1] / values[2],
                    "cases": values[2], "dead": dead_total, "displaced": disp_total
                })
            return {"countries": final_data, "stats": max_stats}

if __name__ == "__main__":
    result = get_country_coordinates('Day 2 Flood mapping/floodarchive.xlsx')
    with open('Day 2 Flood mapping/map_data.js', 'w') as f:
        f.write("const floodData = " + json.dumps(result["countries"], indent=2) + ";\n")
        f.write("const floodMaxes = " + json.dumps(result["stats"], indent=2) + ";")
