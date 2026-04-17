import json
import time
import urllib.request
import urllib.parse

def reverse_geocode(lat, lng):
    url = f"https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat={lat}&lon={lng}"
    headers = {
        'User-Agent': 'Gemini-CLI-Flood-Project/1.0 (Educational Research)'
    }
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            address = data.get('address', {})
            
            # Try to get the most specific place name
            place = address.get('city') or address.get('town') or address.get('village') or address.get('suburb') or address.get('county') or 'Unknown Place'
            state = address.get('state', 'Unknown State')
            
            return f"{place}, {state}"
    except Exception as e:
        print(f"Error geocoding {lat}, {lng}: {e}")
        return None

def main():
    file_path = 'Day 2 Flood mapping/india_points.js'
    
    # Read the current JS file
    with open(file_path, 'r') as f:
        content = f.read()
        json_str = content.replace('const indiaData = ', '').rstrip(';')
        data = json.loads(json_str)

    append_count = 0
    total_to_process = sum(1 for p in data if p.get('severity') == 2.0)
    print(f"Starting reverse geocoding for {total_to_process} events...")

    for i, p in enumerate(data):
        if p.get('severity') == 2.0:
            lat = p.get('lat')
            lng = p.get('lng')
            
            if lat and lng:
                # Respect Nominatim's usage policy (1 request/second)
                if append_count > 0:
                    time.sleep(1.1)
                
                result = reverse_geocode(lat, lng)
                if result:
                    p['Place'] = result
                    append_count += 1
                    print(f"[{append_count}/{total_to_process}] Found: {result}")
                else:
                    p['Place'] = "Geocoding Failed"

    # Save the updated data back to the JS file
    with open(file_path, 'w') as f:
        f.write("const indiaData = " + json.dumps(data, indent=2) + ";")
    
    print(f"\nFinished! Total successful appends: {append_count}")

if __name__ == "__main__":
    main()
