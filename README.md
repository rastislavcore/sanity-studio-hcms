# Sanity Headless CMS

CMS Digest is a powerful headless CMS template, that allows you to create and work with structured content. Your content is stored in the cloud and can be distributed anywhere, for example, on a website or in an app.

## Table of Contents

- [Sanity Headless CMS](#sanity-headless-cms)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
  - [Schema Configuration](#schema-configuration)
  - [Contributing](#contributing)
  - [License](#license)

## Getting Started

### Prerequisites

You need to have Node.js and npm installed on your machine. If you haven't installed them yet, please refer to the official [Node.js](https://nodejs.org/en/download/) and [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installation guides.

### Installation

1. Clone this repository
   ```
   git clone https://github.com/rastislavcore/sanity-studio-hcms.git
   ```
2. Navigate to the project directory
   ```
   cd cms-digest
   ```
3. Install the dependencies
   ```
   npm install
   ```
4. You need to setup projectId and dataset in `sanity.config.json` and `sanity.cli.js` files respectively:

   * In `sanity.config.json`:
     ```json
     {
       "name": "<your-name>",
       "title": "<your title>",
       "projectId": "<your-project-id>",
       "dataset": "<your-dataset>"
     }
     ```
   * In `sanity.cli.js`:
     ```json
     {
       "projectId": "<your-project-id>",
       "dataset": "<your-dataset>"
     }
     ```

**Note:** Please replace `<your-project-id>`, `<your-dataset>` with your actual project ID in the `sanity.config.json` and `sanity.cli.js` files before running the application. And specify name and title.

## Usage

1. Run the development server
   ```
   npm run dev
   ```
2. To build and deploy the application
   ```
   npm run deploy
   ```

## Schema Configuration

Sanity uses JSON to define the structure of the content and its validation rules. This means that you can model your content as you like and still benefit from Sanity's features. The schema configuration can be found in the `index.js` file in the `./schemas` directory. You can design a custom content model with a fully-hosted backend in minutes. Please refer to the [Sanity.io's official guide](https://www.sanity.io/docs/schema-types) to learn more about schema configuration.

## Contributing

Feel free to contribute, and the process for submitting pull requests to us.

## License

This project is licensed under the [CORE License](LICENSE).
