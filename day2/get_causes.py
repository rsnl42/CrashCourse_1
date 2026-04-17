import xml.etree.ElementTree as ET
import zipfile

def get_flood_causes(file_path):
    with zipfile.ZipFile(file_path, 'r') as zip_ref:
        # Load shared strings
        with zip_ref.open('xl/sharedStrings.xml') as f:
            tree = ET.parse(f)
            root = tree.getroot()
            # Shared strings are in <t> tags within <si> tags
            # The namespace is usually http://schemas.openxmlformats.org/spreadsheetml/2006/main
            ns = {'ns': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
            shared_strings = [t.text for t in root.findall('.//ns:t', ns)]

        # Load sheet1.xml
        with zip_ref.open('xl/worksheets/sheet1.xml') as f:
            tree = ET.parse(f)
            root = tree.getroot()
            
            causes = set()
            # MainCause is in column M (index 12)
            # Find cells where the reference starts with 'M'
            for row in root.findall('.//ns:row', ns):
                for cell in row.findall('ns:c', ns):
                    r = cell.get('r')
                    if r and r.startswith('M') and r[1:].isdigit():
                        # The cell value is an index into shared_strings if t="s"
                        t = cell.get('t')
                        v = cell.find('ns:v', ns)
                        if t == 's' and v is not None:
                            idx = int(v.text)
                            cause = shared_strings[idx]
                            if cause and cause != "MainCause":
                                causes.add(cause.strip())
            
            return sorted(list(causes))

if __name__ == "__main__":
    causes = get_flood_causes('floodarchive.xlsx')
    print(f"Total unique causes: {len(causes)}")
    for cause in causes:
        print(f"- {cause}")
