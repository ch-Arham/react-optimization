# react-optimization

1. Memoization (Not Covered in this repo)
- useMemo to memoize a value, reduce unnecessary recomputations
- useCallback to memoize a function to avoid unnecessary rerenders
- React.memo to memoize a component which only change when there is a change in props.
  (Note: If component subscribes to Context API state then it
  will rerender even if you memoize)
  
2. Code Splitting
- Dynamic Imports (Dividing code into chunks and importing only when needed)
- lazy loading to further improve optimization
- useTransition Hook and Suspense to handle state update and displaying/handling state data

3. Debouncing
- Technique to control the frequency at which a funciton is executed. Execute after a pause
- AutoComplete, window resize, user input

4. Throttling
- Technique to limit the execution of a function to set intervals.
- AutoComplete, window resize, scrolling, button click handling.

5. Imgae Optimization
- Covered in other repo. (image-optimization)
