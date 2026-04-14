import xml.etree.ElementTree as ET
import zipfile

def create_summary_table(file_path, output_path):
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
            
            data = {} # {country: [cases, [dead], [disp]]}
            
            rows = root.findall('.//ns:row', ns)
            for row in rows:
                cells = row.findall('ns:c', ns)
                country = None
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
                    elif col == 'K':
                        try: dead_val = int(float(val))
                        except: pass
                    elif col == 'L':
                        try: disp_val = int(float(val))
                        except: pass
                
                if country and country != "Country":
                    if country not in data: data[country] = [0, [], []]
                    data[country][0] += 1
                    if dead_val is not None: data[country][1].append(dead_val)
                    if disp_val is not None: data[country][2].append(disp_val)
            
            header = f"{'Country':<30} | {'Cases':<8} | {'Dead':<10} | {'Displaced':<12}"
            with open(output_path, 'w') as out:
                out.write(header + "\n" + "-" * len(header) + "\n")
                for c in sorted(data.keys()):
                    cases = data[c][0]
                    dead = sum(data[c][1]) if data[c][1] else "N/A"
                    disp = sum(data[c][2]) if data[c][2] else "N/A"
                    out.write(f"{c:<30} | {cases:<8} | {str(dead):<10} | {str(disp):<12}\n")

if __name__ == "__main__":
    create_summary_table('Day 2 Flood mapping/floodarchive.xlsx', 'temp_summary1')
