import xml.etree.ElementTree as ET
import zipfile
import json

def extract_india_points(file_path):
    with zipfile.ZipFile(file_path, 'r') as zip_ref:
        with zip_ref.open('xl/sharedStrings.xml') as f:
            tree = ET.parse(f)
            root = tree.getroot()
            ns = {'ns': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
            shared_strings = [t.text for t in root.findall('.//ns:t', ns)]

        with zip_ref.open('xl/worksheets/sheet1.xml') as f:
            tree = ET.parse(f)
            root = tree.getroot()
            
            india_points = []
            
            rows = root.findall('.//ns:row', ns)
            for row in rows:
                cells = row.findall('ns:c', ns)
                country, lon, lat = None, None, None
                cause, dead, began = None, None, None
                
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
                    elif col == 'M' and t == 's':
                        cause = shared_strings[int(val)].strip()
                    elif col == 'K':
                        try: dead = int(float(val))
                        except: pass
                    elif col == 'H' and t == 's':
                        began = shared_strings[int(val)].strip()
                
                if country == "India" and lat is not None and lon is not None:
                    india_points.append({
                        "lat": lat,
                        "lng": lon,
                        "cause": cause if cause else "Unknown",
                        "dead": dead if dead is not None else "N/A",
                        "date": began if began else "Unknown"
                    })
            
            return india_points

if __name__ == "__main__":
    points = extract_india_points('Day 2 Flood mapping/floodarchive.xlsx')
    with open('Day 2 Flood mapping/india_points.js', 'w') as f:
        f.write("const indiaData = " + json.dumps(points, indent=2) + ";")
    print(f"Extracted {len(points)} flood events for India.")
