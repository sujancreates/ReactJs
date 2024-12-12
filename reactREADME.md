# Why React?
- We can use states which means that once we update the state variable, it changes across the page
- We can split our app into multiple components and reuse those components 
- React uses a virtual DOM to efficiently update the UI which is better than updating content using DOM Manipulation
- Debugginh and maintainance is easy

# Component-Based Architecture
  React's design is based on reusable components, allowing developers to build encapsulated UI elements that manage their state. This     
  modularity makes it easier to develop, test, and maintain code.
  
# Props
  Props are like parameters you pass to a function. They allow the parent component to give information to the child component.
  Props cannot be changed by the child component—they are read-only.
  They help make components dynamic and reusable by allowing different values to be passed to them.
  
# JSX Syntax
  React's use of JSX allows developers to write HTML-like syntax within JavaScript, making it easier to visualize and develop components.

# Hooks
  Hooks are functions that let you use state and other React features in functional components. You can either use the built-in hooks or       combine them to build your own.  {useState:declares a state variable that you can update directly.,
      useEffect: is a React Hook that lets you synchronize a component with an external system.}
        The useEffect hook in React is used to handle side effects in functional components. Side effects are operations that can affect           outside components or systems, such as fetching data, updating the DOM, or subscribing to events.

# State
  State refers to the data or values that can change over time within a component.

  
