# Run

- docker build -t wkf:[version] .
- docker run -v 1.0:/app -v /app/node_modules -p 9090:9090 --rm wkf:[version]
