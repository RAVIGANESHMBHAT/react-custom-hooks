## React Custom Hooks

#### Current commit has the duplication of codes to set the document title in different components. So, use a custom hook which will do the same task.
#### To create a custom hook, create a functional component and embed all the duplicate codes there and remove the DOM contents. Use that custom hook wherever required.

## ***************************************************

## React render

## Any console.log statement will be shown twice in the browser console if we wrap the <App/> inside <React.StrictMode> in the index.js file. it will happen only in development mode and not in production mode.