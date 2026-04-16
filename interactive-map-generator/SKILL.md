name: interactive-map-generator
description: Generates an interactive Leaflet map displaying flood markers and various types of hospital markers (all, 10km risk, 5km risk) with specified icons and sizes. Use when a dynamic map visualization is needed for disaster preparedness data.

# Interactive Map Generator Skill

This skill provides a template for generating an interactive Leaflet map. It integrates flood data and hospital data, including at-risk hospitals within specific radii of flood sites.

## Features

-   **Flood Markers:** Displays flood events with severity-based markers.
-   **Hospital Markers:**
    -   All Hospitals: Displayed with a tiny blue plus icon.
    -   At-Risk Hospitals (10km radius): Displayed with an orange plus icon (1.5x size).
    -   High-Risk Hospitals (5km radius): Displayed with a red plus icon (2x size).
-   **Data Sources:** Relies on `india_points.js`, `hospital_data_UP.js`, and `hospitals_at_risk_UP.js`.

## Usage

1.  **Ensure Data Files Exist:** Make sure `Day 2 Flood mapping/india_points.js`, `Day 3 at-risk Hospitals mapping (UP)/hospital_data_UP.js`, and `Day 3 at-risk Hospitals mapping (UP)/hospitals_at_risk_UP.js` are present in the project.
2.  **Copy Template:** Copy the contents of `assets/map_template.html` into a new HTML file (e.g., `my_map.html`) in your project.
3.  **Adjust Viewport (Optional):** Modify the `map.setView` parameters in the HTML file if a different initial map focus is desired.
4.  **Serve the HTML:** Host the generated HTML file using a local web server or deploy it to GitHub Pages to view the interactive map.

## Bundled Resources

-   `assets/map_template.html`: The HTML template for the Leaflet map.
