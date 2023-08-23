# Simple Fetch Function Documentation

## Overview

The `simpFetch` function is a utility function designed to simplify making HTTP requests using the Fetch API in JavaScript. It abstracts away some of the complexities of constructing and handling fetch requests, making it easier to perform common HTTP operations.

## Usage

To use the `simpFetch` function, you need to provide at least the `url` parameter, which specifies the URL you want to send the HTTP request to. Additionally, you can provide an `options` object that can include properties such as `method`, `headers`, and `body`.

### If body is a JSON object, it will automatically be converted to a string using JSON.stringify() and the Content-Type header will be set to application/json.

```javascript
import { simpFetch } from "./path-to-simpFetch";

const url = "https://api.example.com/data";
const options = {
  method: "GET", // Optional: HTTP method (GET, POST, PUT, DELETE, PATCH)
  body: { key: "value" }, // Optional: Request body (JSON format)
};

// Call the simpFetch function
try {
  const response = await simpFetch(url, options);
  console.log("Response:", response.res);
  console.log("Data:", response.data);
} catch (error) {
  console.error("Error:", error.message);
}
```

## Tracking Loading Progress

To monitor the progress of your request loading, you can utilize the following code example in JavaScript:

```js
// Invoke simpFetch to initiate the request and retrieve the loading status and data
const { loading, data, res } = await simpFetch(...);
```

Observe that the "loading" status is initially set to true upon sending the request and is subsequently set to false once the request is finished. This can be effectively leveraged to showcase a loading indicator during the request's execution phas
