**Endpoint**: /data/county/{county_name} \
**Parameters**: county_name (string)

**Endpoint**: /data/date-range \
**Parameters**: start_date (YYYY-MM-DD), end_date (YYYY-MM-DD)

**Endpoint**: /data/product/{product_type}\
**Description**: Retrieve data for specific products - Cloud Cover, snowfall, their types, etc. \
**Parameters**: product_type (string)

**Endpoint**: /aggregate/monthly \
**Parameters**: columns (list of strings), county (optional), year (optional)

**Endpoint**: /aggregate/yearly  
**Parameters**: columns (list of strings), county (optional)

**Endpoint**: /predict \
**Parameters**: JSON body with feature values

**Endpoint**: /query \
**Parameters**: JSON body with filters (e.g., {"county": "X", "year": 2023}) and projection fields (e.g., ["temperature", "euros_per_mwh"])