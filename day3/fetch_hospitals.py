import requests
import json
import os

def fetch_up_cities_hospitals():
    print("Fetching hospital data for major cities in UP from Overpass API...")
    
    # Overpass API URL mirror
    overpass_url = "https://overpass.kumi.systems/api/interpreter"
    
    # Combined bounding box for major cities area or a broader but limited box
    # Roughly covers a central/eastern part of UP: Lucknow to Varanasi
    overpass_query = """
    [out:json][timeout:90];
    (
      node["amenity"="hospital"](25.0, 80.0, 27.5, 83.5);
    );
    out body 1000;
    """
    
    try:
        response = requests.get(overpass_url, params={'data': overpass_query})
        response.raise_for_status()
        data = response.json()
        
        hospitals = []
        for element in data.get('elements', []):
            lat = element.get('lat')
            lon = element.get('lon')
            tags = element.get('tags', {})
            name = tags.get('name', 'Unnamed Hospital')
            city = tags.get('addr:city', 'N/A')
            
            if lat and lon:
                hospitals.append({
                    "name": name,
                    "lat": lat,
                    "lng": lon,
                    "city": city,
                    "type": tags.get('healthcare', 'N/A')
                })
        
        # Save as JSON
        with open('hospitals_UP_major.json', 'w') as f:
            json.dump(hospitals, f, indent=4)
        
        # Save as JS variable
        with open('hospital_data_UP.js', 'w') as f:
            f.write(f"const hospitalDataUP = {json.dumps(hospitals, indent=4)};")
            
        print(f"Successfully fetched {len(hospitals)} hospitals in major UP regions.")
        
    except Exception as e:
        print(f"Error fetching data: {e}")

if __name__ == "__main__":
    fetch_up_cities_hospitals()
