Throttling in React is a technique used to control the frequency at which a function is executed, particularly in response to frequent events such as user inputs or scrolling. It ensures that the function is called at a steady rate, allowing it to be executed only once within a specified time interval, regardless of how frequently the event occurs.

Unlike debouncing, which delays the execution of a function until a pause in the events occurs, throttling ensures that the function is called regularly but not excessively.

Throttling is useful in scenarios where you want to limit the rate at which a function is invoked, especially for performance optimization and preventing excessive updates. It helps to avoid overwhelming resources or unnecessarily repetitive operations.

---

The Lodash library provides functions for both debouncing and throttling. These functions can be used to easily implement debouncing and throttling in your JavaScript or React applications.

1. Debouncing in Lodash:
   Lodash provides the `debounce` function, which delays the execution of a function until a specified delay has passed since the last invocation. Here's an example of using `debounce`:

   ```javascript
   import { debounce } from 'lodash';

   const debouncedFunction = debounce(() => {
     // Your function logic here
   }, 300); // Debounce delay of 300 milliseconds

   // Invoke the debounced function
   debouncedFunction();
   ```

2. Throttling in Lodash:
   Lodash provides the `throttle` function, which limits the execution of a function to a specified interval. The throttled function will be called once at the start of the interval and then at most once per interval thereafter. Here's an example of using `throttle`:

   ```javascript
   import { throttle } from 'lodash';

   const throttledFunction = throttle(() => {
     // Your function logic here
   }, 200); // Throttle interval of 200 milliseconds

   // Invoke the throttled function
   throttledFunction();
   ```

By using the debounce or throttle functions from Lodash, you can easily apply these techniques to handle events or control the frequency of function invocations in your applications. Remember to install Lodash (`npm install lodash`) and import the required functions (`debounce` or `throttle`) before using them in your code.

---

Custom implementations of the throttle and debounce functions:

```javascript
// Throttle function implementation
const throttle = (callback, delay) => {
  let lastExecuted = 0;
  let timeoutId;

  return function (...args) {
    const now = Date.now();
    const elapsed = now - lastExecuted;

    if (elapsed < delay) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        lastExecuted = now;
        callback(...args);
      }, delay - elapsed);
    } else {
      lastExecuted = now;
      callback(...args);
    }
  };
};

// Debounce function implementation
const debounce = (callback, delay) => {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};
```

You can use these functions in your code as follows:

```javascript
const throttledFunction = throttle(() => {
  // Your throttled function logic here
}, 200); // Throttle interval of 200 milliseconds

const debouncedFunction = debounce(() => {
  // Your debounced function logic here
}, 300); // Debounce delay of 300 milliseconds
```

Feel free to adjust the delay or interval values (`200` and `300` in the examples above) to fit your specific requirements.

Now, you can assign your desired logic to the `throttledFunction` or `debouncedFunction`, and invoke them as needed. The throttled function will be executed at a controlled rate, while the debounced function will wait for a pause in invocations before executing.

Remember to adapt these functions based on your specific use cases and requirements.