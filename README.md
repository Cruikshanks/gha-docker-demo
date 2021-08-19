# GitHub Actions Docker Demo

![Build Status](https://github.com/Cruikshanks/gha-docker-demo/workflows/CI/badge.svg?branch=main)
[![Licence](https://img.shields.io/badge/Licence-MIT-blue.svg)](https://choosealicense.com/licenses/mit/)

This project was put together to explore and test GitHub action workflows. Specifically

- retaining a CI workflow used in PR's to test changes
- a docker workflow that will build and push images to GitHub Packages when `main` is updated or when a new tag is added

The project is a _very_ simple [Hapi web server](https://hapi.dev/) that just returns `{ message: "pong" }` when `http://localhost:3000` is hit. It also includes a single [Lab test](https://hapi.dev/module/lab/) so that we have something to do in our CI workflow.

## Prerequisites

Make sure you already have:

- [Node.js v14.*](https://nodejs.org/en/)

## Installation

First clone the repository and then drop into your new local repo:

```bash
git clone https://github.com/Cruikshanks/gha-docker-demo.git && cd gha-docker-demo
```

Our preference is to run the app within Docker, so [install Docker](https://docs.docker.com/get-docker/) if you don't already have it.

## Configuration

Any configuration is expected to be driven by environment variables when the service is run in production as per [12 factor app](https://12factor.net/config).

However when running locally in development mode or in test it makes use of the [Dotenv](https://github.com/motdotla/dotenv) package. This is a shim that will load values stored in a `.env` file into the environment which the service will then pick up as though they were there all along.

Check out [.env.example](/.env.example) for details of the required things you'll need in your `.env` file.

Refer to the [config files](config) for details of all the configuration used.

## Docker

As [Docker](https://www.docker.com/) is our chosen solution for deploying and managing the app in production we also use it for local development. The following will get an environment up and running quickly ready for development. It assumes 2 things

- you have Docker installed
- you are using [VSCode](https://code.visualstudio.com/) for development

### Initial build

Open the project in VSCode and then use the [Command palette](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette) to access the tasks we have provided in [tasks.json](.vscode/tasks.json)

With the palette open search for **Run test task** and once highlighted select it. From the list that's presented select **⬆️ UP (GHA)**

You should see a new terminal open up and [Docker Compose](https://docs.docker.com/compose/) begin to start building the image. Once that is done it will switch to running the app in docker.

### Non-vscode users

If you are not a VSCode user it does not mean you cannot use Docker. Refer to [tasks.json](.vscode/tasks.json) for the commands being run and implement them in your preferred tool.

## Testing the app

To run lint checks use the command palette and the **Run test task** option to find and select

- **🔎 LINT (GHA)**

To run unit tests find and select

- **✅ TEST (GHA)**

Check out the `scripts` in [package.json](package.json) if you intend to run things locally.

## Contributing

Bug reports and pull requests are welcome on GitHub at <https://github.com/Cruikshanks/gha-docker-demo>.

## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

> If you don't add a license it's neither free or open!
