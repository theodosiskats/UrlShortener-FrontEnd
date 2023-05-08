# Frontend for URL Shortener

This is a frontend application built with Node.js and Express that triggers the URL shortener Azure Function. The app allows users to input a long URL and receive a short URL in return, which they can use to redirect to the original URL.

Azure Function Repository: [Here](https://github.com/theodosiskats/UrlShortener)

Live Demo: [Here](https://tkurl.herokuapp.com/)

## Prerequisites

Before running this app, you'll need the following:

- Node.js installed on your machine
- An Azure Function URL for your URL shortener function
- A custom URL for your app

## Getting Started

1. Clone this repository to your local machine.
2. Navigate to the project directory and run `npm install` to install the required packages.
3. Create a `.env` file in the root of the project.
4. In the `.env` file, add the following lines, replacing `AZURE_FUNCTION_URL` with the URL of your Azure Function and `MY_URL` with the custom URL for your app (if you have one for online deployment use cases):

```
AZURE_FUNCTION_URL=<your Azure Function URL>
MY_URL=<your websites url>
```

5. Run `npm start` to start the app.
6. Navigate to `http://localhost:3000` in your web browser to view the app.

## Usage

To use the app, follow these steps:

1. Enter a long URL in the input field.
2. Click the "Shorten" button.
3. The app will generate a short URL for the original and display it on the page.
4. Copy the short URL and use it to redirect to the original URL.

## Conclusion

That's it! You now have a functioning Node.js Express frontend that triggers your Azure Function URL shortener. If you have any questions or issues with the app, please refer to the official Node.js and Express documentation or reach out to the Azure support team.
