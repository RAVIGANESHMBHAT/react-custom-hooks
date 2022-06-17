## React Custom Hooks

#### Current commit has the duplication of codes to set the document title in different components. So, use a custom hook which will do the same task.
#### To create a custom hook, create a functional component and embed all the duplicate codes there and remove the DOM contents. Use that custom hook wherever required.

## ***************************************************

## ReactJS Rendering

#### Any console.log statement will be shown twice in the browser console(because of rendering the component twice) if we wrap the 'App' inside 'React.StrictMode' in the index.js file. it will happen only in development mode and not in production mode in order to detect any problems with your development code and warn you about them.

#### Initial render
![image](https://user-images.githubusercontent.com/41186067/174240656-67cc0a65-2b23-4a82-b6c5-b3c0c3ff1f1e.png)

#### Re-render
![image](https://user-images.githubusercontent.com/41186067/174240752-14bea255-279d-4311-bdb7-8efa22f9ebb3.png)

#### The commit pahse is very fast, but the rendering can be slow.

#### Re-render scenario
![image](https://user-images.githubusercontent.com/41186067/174241095-eaec8e99-55ee-44a6-8663-96c7ba2193be.png)

#### useState and Render
![image](https://user-images.githubusercontent.com/41186067/174248785-3fbb8168-7aac-4ef2-a7d1-069a968533f1.png)

### Rendering w.r.t useReducer Hook

#### useReducer re-rendering
![image](https://user-images.githubusercontent.com/41186067/174265234-c4462b0a-28ce-49e6-b19c-41627b0145a8.png)
![image](https://user-images.githubusercontent.com/41186067/174265157-f50dea1f-037e-43b7-9a7d-2537ee17ab10.png)
![image](https://user-images.githubusercontent.com/41186067/174265090-f19980c6-7ef4-4107-89be-72a643202759.png)

### Rendering and State Immutability

#### Usually React does not rerender the component when the new state is same as old state.
#### Current commit shows the problem of modifying the object and passing it into the set method. And also shows how to fix it by creating the copy of the Object and then pass it into set method so that the React finds change in reference of object and re-renders the component with the updated object value.
