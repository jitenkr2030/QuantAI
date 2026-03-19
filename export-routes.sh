#!/bin/bash
# Export script to pull all routes from zo.space and save to local files

SPACE_URL="https://jitenkumar.zo.space"
OUTPUT_DIR="src"

echo "Exporting QuantAI routes from zo.space..."

# List of routes to export
routes=(
  "/"
  "/dashboard"
  "/pricing"
  "/terms"
  "/disclaimer"
  "/api/signals"
  "/api/auth"
  "/api/portfolio"
  "/api/chart"
  "/api/insights"
  "/api/auto-trade"
  "/api/enterprise"
  "/api/scan-opportunities"
  "/api/execute-trade"
  "/api/prices"
  "/api/account"
  "/api/payments"
)

mkdir -p "$OUTPUT_DIR/pages" "$OUTPUT_DIR/api"

for route in "${routes[@]}"; do
  echo "Fetching $route..."
  filename=$(echo "$route" | sed 's/\//_/g' | sed 's/^_//')
  
  if [[ "$route" == /api/* ]]; then
    curl -s "${SPACE_URL}${route}" > "${OUTPUT_DIR}/api/${filename}.json" 2>/dev/null
  else
    # For pages, we need to get the source code
    # This would require admin access to the space
    echo "# Route: $route" > "${OUTPUT_DIR}/pages/${filename}.md"
    echo "# Source code available in zo.space dashboard" >> "${OUTPUT_DIR}/pages/${filename}.md"
  fi
done

echo "Export complete!"
echo "Note: Full source code is stored in zo.space. This script exports API responses."