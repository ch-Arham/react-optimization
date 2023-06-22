 - Code splitting in React is a technique used to optimize the loading
   and performance of web applications built with React. It involves
   breaking down a JavaScript bundle into smaller, more manageable
   chunks called "split points" or "chunks". Each chunk typically
   corresponds to a different route, component, or feature of the
   application.
 - By splitting the code into smaller chunks, you can reduce the initial
   bundle size that needs to be downloaded by the client's browser. This
   helps to improve the application's loading time and overall
   performance, especially in scenarios where the bundle size is large.
 - React code splitting is typically achieved using dynamic imports or a
   feature called "lazy loading" introduced in React 16.6. With dynamic
   imports, you can import components or modules asynchronously at
   runtime, allowing you to split the code into separate chunks. Lazy
   loading, on the other hand, is a feature that allows you to load
   components or routes only when they are needed, which further
   enhances the efficiency of code splitting.
 - When implementing code splitting in React, you can use various tools
   and libraries such as React Router, React.lazy, and the Suspense
   component. React Router helps with managing different routes and
   their corresponding code chunks. React.lazy is a built-in React
   feature that enables lazy loading of components. The Suspense
   component is used to handle loading states while the code chunk is
   being fetched.
 - Overall, code splitting in React enables a more efficient and
   optimized loading process for web applications, improving user
   experience and performance by reducing the initial bundle size and
   loading time.

Q: What is the difference between React.lazy and React.Suspense?
A: React.lazy is a built-in React feature that enables lazy loading of
   components. React.Suspense is a React component that is used to
   handle loading states while the code chunk is being fetched.

Q: What is the difference between dynamic imports and lazy loading?
A: Dynamic imports are a JavaScript feature that allows you to import
   components or modules asynchronously at runtime, allowing you to
   split the code into separate chunks. Lazy loading, on the other hand,
   is a feature that allows you to load components or routes only when
   they are needed, which further enhances the efficiency of code
   splitting.

Q: What is useTransition Hook?
A: The useTransition hook is a React Hook that allows you to add
   transitions to your application. It is used to create a transition
   between two states of a component, such as when a component is
   loading or when it is ready to be rendered.

   - Basically it lets you update the state without blocking UI

   - It keeps the old state and the new state in memory and then
     transitions between them

   - We update state in useTransition and wrap the component in Suspense.


Q: What is the difference between useTransition and Suspense?
A: The useTransition hook is a React Hook that allows you to add
   transitions to your application. It is used to create a transition
   between two states of a component, such as when a component is
   loading or when it is ready to be rendered. Suspense is a React
   component that is used to handle loading states while the code chunk
   is being fetched.

      import React, { Suspense, useState, useTransition } from 'react';
    
    const MyComponent = () => {
      const [startTransition, isPending] = useTransition();
      const [data, setData] = useState(null);
    
      const fetchData = () => {
        startTransition(() => {
          // Perform some asynchronous operation, e.g., API request
          fetch('https://api.example.com/data')
            .then(response => response.json())
            .then(data => {
              setData(data);
            });
        });
      };
    
      return (
        <div>
          <button onClick={fetchData}>Fetch Data</button>
          <Suspense fallback={<div>Loading...</div>} mode="blocking">
            {isPending ? <div>Loading...</div> : <DataComponent data={data} />}
          </Suspense>
        </div>
      );
    };
    
    const DataComponent = ({ data }) => {
      return <div>{data}</div>;
    };

