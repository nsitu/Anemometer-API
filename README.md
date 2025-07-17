# NodeJS Template for CapRover
This is a template for a simple NodeJS app including a simple structure both a static frontend and an [Express](https://expressjs.com) backend. The static frontend is stored in the `/public` folder, while the NodeJS server is defined in `/index.js`. This template may be used as a starting point for a new NodeJS project, where the intention is to deploy it to CapRover on every push.

# Deployment and Build Process
A simple GitHub Action is configured under `.github/workflows/main.yml`. On every push, GitHub Actions makes a tarball from the repo and sends this to CapRover. The build process itself happens on CapRover according to the configuration in the `Dockerfile`. Once the build process is complete, CapRover runs the container via `npm start`, as specified in the `Dockerfile`.

## CapRover Setup
- In Caprover create a new `APP`, and record its name, e.g.  "my-app"
- Also in CapRover, create a secret `TOKEN` for the app (in the Deployment Tab)
- Make Note of the `SERVER` domain of your caprover (e.g. https://captain.mydomain.com )

## GitHub Setup
- In GitHub Make a new repository from this template
- Once created, go to the Settings > Secrets and Variables > Actions
- Under `Repository secrets` and add `APP`, `TOKEN`, and `SERVER` as secrets, as defined above.
- Push an update and the app should deploy build and deploy automatically
