import xml.etree.ElementTree as ET
import zipfile
import json

def get_country_coordinates(file_path):
    with zipfile.ZipFile(file_path, 'r') as zip_ref:
        # Load shared strings
        with zip_ref.open('xl/sharedStrings.xml') as f:
            tree = ET.parse(f)
            root = tree.getroot()
            ns = {'ns': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
            shared_strings = [t.text for t in root.findall('.//ns:t', ns)]

        # Load sheet1.xml
        with zip_ref.open('xl/worksheets/sheet1.xml') as f:
            tree = ET.parse(f)
            root = tree.getroot()
            
            country_data = {} # {country: [sum_lat, sum_long, cases, dead, displaced]}
            
            # Column mapping: C=Country, E=Long, F=Lat, K=Dead, L=Displaced
            rows = root.findall('.//ns:row', ns)
            for row in rows:
                cells = row.findall('ns:c', ns)
                country = None
                lon = None
                lat = None
                dead = 0
                displaced = 0
                
                for cell in cells:
                    r = cell.get('r')
                    if not r: continue
                    col = "".join([c for c in r if not c.isdigit()])
                    
                    v_elem = cell.find('ns:v', ns)
                    if v_elem is None: continue
                    val = v_elem.text
                    t = cell.get('t')
                    
                    if col == 'C': # Country
                        if t == 's':
                            country = shared_strings[int(val)].strip()
                    elif col == 'E': # Long
                        try: lon = float(val)
                        except: pass
                    elif col == 'F': # Lat
                        try: lat = float(val)
                        except: pass
                    elif col == 'K': # Dead
                        try: dead = int(float(val))
                        except: dead = 0
                    elif col == 'L': # Displaced
                        try: displaced = int(float(val))
                        except: displaced = 0
                
                if country and country != "Country" and lat is not None and lon is not None:
                    if country not in country_data:
                        country_data[country] = [0, 0, 0, 0, 0] # [sum_lat, sum_long, cases, dead, displaced]
                    country_data[country][0] += lat
                    country_data[country][1] += lon
                    country_data[country][2] += 1
                    country_data[country][3] += dead
                    country_data[country][4] += displaced
            
            # Calculate final data
            final_data = []
            for country, values in country_data.items():
                final_data.append({
                    "name": country,
                    "lat": values[0] / values[2],
                    "lng": values[1] / values[2],
                    "cases": values[2],
                    "dead": values[3],
                    "displaced": values[4]
                })
            
            return final_data

if __name__ == "__main__":
    data = get_country_coordinates('Day 2 Flood mapping/floodarchive.xlsx')
    with open('Day 2 Flood mapping/map_data.js', 'w') as f:
        f.write("const floodData = " + json.dumps(data, indent=2) + ";")
    print(f"Extracted {len(data)} countries with full statistics.")
