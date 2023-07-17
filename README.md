# Hops&Barley

This is a Vite/TypeScript/React application created for consideration by Devstry/Mindnow.

The web app utilizes **Vite** and **testing-library/react** for testing.

A live version of the app is available at: https://hops-barley.vercel.app/.

### Features

- Browse a list of breweries sourced from **OpenBreweryDB**.

- Add breweries to favorites for easy access.

- View detailed information about breweries, including a map generated with the **Google Maps JS API** and the brewery logo retrieved from **Clearbit**.

### State Management and Local Storage

The application utilizes **MobX** for state management, allowing for efficient handling of data. The data, including favorites and search results, is stored locally using **mobx-persist**. This ensures that the user's selections and preferences, such as adding/removing breweries to/from favorites, are preserved between sessions. Even if the page is reloaded or the tab is closed, the information will persist.
### Usage

The application is intuitive and easy to use. Users can interact with the breweries, add them to favorites, and access detailed information. The last search query is saved locally, eliminating the need to retype it when navigating between pages or closing the app.

Enjoy exploring the world of breweries with Hops&Barley!

Please note: This project is for demonstration purposes and may not reflect real-time data from OpenBreweryDB.

## Getting Started

To get started with this repository, follow the steps below:

### Prerequisites

Before you begin, ensure that you have the following installed on your machine:

    Node.js (version 12 or above)
    npm (Node Package Manager) or Yarn

### Clone the Repository

Clone this repository to your local machine using the following command:

    git clone git@github.com:snt85c/hops-barley.git

Navigate to the project directory:

    cd hops-barley

### Install Dependencies

Install the project dependencies using either npm or Yarn. Run one of the following commands based on your preferred package manager:

using Npm

    npm install

### Start the Development Server

Once the dependencies are installed, start the development server to run the React application locally. Run one of the following commands:

using Npm

    npm run dev

Using Yarn:

    yarn dev

This will start the development server and provide you with a local URL (e.g., http://localhost:5173) where you can view your React application in the browser.

### Build for Production

To build a production-ready optimized version of your application, use the following command:

Using Npm

    npm run build

Using Yarn:

     yarn build

The build artifacts will be generated in the dist directory.

## Testing

run the test on your local machine via

    npm test

this will test

    -rendering of pages
    -search elements
    -add to favourites
    -routing to other pages

This project is licensed under the MIT License.
