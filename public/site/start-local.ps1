$port = 8080

Write-Host "Serving site-clone at http://localhost:$port"
Write-Host "Press Ctrl+C to stop."

python -m http.server $port
