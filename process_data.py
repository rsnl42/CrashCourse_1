import csv
import json
from collections import Counter, defaultdict

def process_flood_data():
    countries = Counter()
    years = Counter()
    categories = Counter()
    displaced_by_severity = defaultdict(float)

    with open('floodarchive_cleaned.csv', mode='r', encoding='utf-8') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            # 1. Events by country
            countries[row['Country']] += 1
            
            # 2. Events by year
            years[row['Year']] += 1
            
            # 3. Events by category
            categories[row['categorised_reason']] += 1
            
            # 4. Total displaced by severity
            try:
                severity = row['Severity']
                displaced = float(row['Displaced']) if row['Displaced'] else 0
                displaced_by_severity[severity] += displaced
            except ValueError:
                pass

    # Sort and format for the dashboard
    top_20_countries = dict(sorted(countries.items(), key=lambda item: item[1], reverse=True)[:20])
    sorted_years = dict(sorted(years.items()))
    sorted_categories = dict(sorted(categories.items(), key=lambda item: item[1], reverse=True))
    # Severity is usually numeric (1.0, 2.0, etc.), sort by key
    sorted_severity = dict(sorted(displaced_by_severity.items()))

    data = {
        "events_by_country": top_20_countries,
        "events_by_year": sorted_years,
        "events_by_category": sorted_categories,
        "displaced_by_severity": sorted_severity
    }

    with open('dashboard_data.js', 'w', encoding='utf-8') as f:
        f.write(f"const dashboardData = {json.dumps(data, indent=4)};")

if __name__ == "__main__":
    process_flood_data()
