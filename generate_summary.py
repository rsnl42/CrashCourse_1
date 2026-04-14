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
            
            summary_data = {} # {country: [cases, dead, displaced]}
            
            rows = root.findall('.//ns:row', ns)
            for row in rows:
                cells = row.findall('ns:c', ns)
                country = None
                dead = 0
                displaced = 0
                
                for cell in cells:
                    r = cell.get('r')
                    if not r: continue
                    col = "".join([c for c in r if not c.isdigit()])
                    
                    v_elem = cell.find('ns:v', ns)
                    if v_elem is None: continue
                    val = v_elem.text
                    
                    if col == 'C': # Country
                        t = cell.get('t')
                        if t == 's':
                            country = shared_strings[int(val)].strip()
                    elif col == 'K': # Dead
                        try: dead = int(float(val))
                        except: dead = 0
                    elif col == 'L': # Displaced
                        try: displaced = int(float(val))
                        except: displaced = 0
                
                if country and country != "Country":
                    if country not in summary_data:
                        summary_data[country] = [0, 0, 0]
                    summary_data[country][0] += 1
                    summary_data[country][1] += dead
                    summary_data[country][2] += displaced
            
            # Sort by country name
            sorted_countries = sorted(summary_data.items())
            
            # Format as a table
            header = f"{'Country':<30} | {'Cases':<8} | {'Dead':<10} | {'Displaced':<12}"
            separator = "-" * len(header)
            
            with open(output_path, 'w') as out:
                out.write(header + "\n")
                out.write(separator + "\n")
                for country, stats in sorted_countries:
                    out.write(f"{country:<30} | {stats[0]:<8} | {stats[1]:<10} | {stats[2]:<12}\n")

if __name__ == "__main__":
    create_summary_table('Day 2 Flood mapping/floodarchive.xlsx', 'temp_summary1')
    print("Summary table created in temp_summary1")
