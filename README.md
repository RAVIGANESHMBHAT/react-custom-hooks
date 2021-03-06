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

#### Mutating an object or an array as state will not cause a re-render when used with the useState or useReducer hook. To re-render, make a copy of the existing state, modify as necessary and then pass the new state to the setter function or while returning from a reducer function.

### Rendering in Parent and Child components

#### For the first time, both parent and child components will be rendered. Next time, if the state value doesn't change, then both the components will not be re-rendered.
#### After the first re-rendering of the components, because of some action if the state value doesn't change, then the only parent component will be re-rendered once for the safety mesaure ,but the child component will not be re-rendered.

![image](https://user-images.githubusercontent.com/41186067/174302327-5e7ca3a4-0c24-4721-9f67-b1769b1c913d.png)

### Prevent unnecessary renders

#### When a parent component renders, React will recursively render all of it's child components. Sometimes, child component goes through the render phase but not through the commit phase(if none of the state values are changed in child component).

#### In the current commit, we are not passing the ChildOne component as a child component rather we are passing it as a prop to the ParentOne component. Actually, we can modify the states but not the props. In the current commit, when the React prepares for re-rendering, it gets to know that the current state change is happening from the ParentOne component. But ChildOne is the prop of ParentOne and ParentOne doesn't have permission to modify the prop, ChildOne. So, React will only re-render the ParentOne component and uses the previously created ChildOne component itself. (This technique is called as Same Element Reference technique)

#### Current commit has  GrandParent component which uses the ParentOne component and the ParentOne component has the prop as ChildOne component. If the re-rendering happens because of state change in GrandParent component, now both ParentOne and ChildOne components will be re-rendered.

## React memo

#### Wrapping the Component in React.memo() while exporting will make the component to re-render only if it's props are changed. React does the shallow comparision of old and new values. Custom compare function can be passed as thye second argument to React.memo()

### When to use Same Element Reference technique and when to use React.memo() ?

|Same Element Reference | React.memo |
|------------------------|-----------|
|When your parent component re-renders because of state change in parent component |When your child component is being asked to re-render due to changes in the parent's state which do not affect the child component props in anyways| 
|This technique does not work if the parent component re-renders because of chnages in its props | |
|state changes? YES, props changes? NO | |

### If React.memo does optimized re-rendering, why can't we use it for all the components?

#### It does the shallow comparision of values. Shallow comparisions aren't free. Ther are O(prop count). Common scenario is there will be always change in the props of components. SO, it is unnecessary to compare for the props (take 2 ms for say) and then re-render the component (take 10 ms for say). So, all the time it will take 12 ms if we use the React.memo unnecessarily. So, use it only wherever it is necessary.

### Incorrect memoization with children props

#### In the current commit, we have the ChildThree component which takes the children as props. So, it is unnecessary to export the ChildThree with React.memo since the children.prop itself is a new reference and the React will anyhow re-render the ChildThree component.

### Incorrect memo with impure components

#### Impure component means, the component where JSX can change even though the props are not changed. (Eg: Update current time on screen)

### Incorrect memo with props reference

#### In the current commit, the ChildFive is getting passed with a prop 'person' which is an object defined in ParentFour. Even if the ChildFive is wrapped with React.memo, when the ParentFour re-renders, the ChildFive will also be re-rendered since, the person object passed as prop to ChildFive is created with a new reference when the ParentFour gets re-rendered. So, React thinks that the person object is pudated and it will re-render the ChildFive component which is using the person object.

### Optimize re-render of child component using useMemo, useCallback hooks

#### Current commit has the optimization while re-rendering the components. Create the memoized object from the object using useMemo hook which will prevent unnecessary re-render which happens because of passing object as props to child components. Memoize the function by using useCallback which will prevent the unnecessary re-render of child component which happens because of passing function as props to child components. 

### Ways to cause a re-render

#### A component re-renders if it calls useState setter function or usereduceer dispatch function.
#### A component re-renders if parent component re-renders.
#### react context


### Context and render

#### If the context provider receives a new value, then the components consuming the context value will also get updated. In current commit, whenContextParent gets new value, the ChildC component inside ContextChildren.js will also get re-rendered. But along with that the ChildA and ChildB also get re-rendered. It is because, when the parent component re-rendered, all its child components will be sequencially re-rendered. The current commit doesn't have a good context performance.

### Context and memo
#### ...