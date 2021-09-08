"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePrevious = usePrevious;

var _react = require("react");

/**
 * 获取上一轮的 props 或 state
 * How to get the previous props or state?
 * https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state
 * @example
 * ```js
 * function Counter() {
 *   const [count, setCount] = useState(0);
 *   const prevCount = usePrevious(count);
 *   return <h1>Now: {count}, before: {prevCount}</h1>;
 * }
 * ```
 */
function usePrevious(value) {
  const ref = (0, _react.useRef)();
  (0, _react.useEffect)(() => {
    ref.current = value;
  });
  return ref.current;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9ob29rcy50cyJdLCJuYW1lcyI6WyJ1c2VQcmV2aW91cyIsInZhbHVlIiwicmVmIiwiY3VycmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBU0EsV0FBVCxDQUF3QkMsS0FBeEIsRUFBa0M7QUFDdkMsUUFBTUMsR0FBRyxHQUFHLG9CQUFaO0FBQ0Esd0JBQVUsTUFBTTtBQUNkQSxJQUFBQSxHQUFHLENBQUNDLE9BQUosR0FBY0YsS0FBZDtBQUNELEdBRkQ7QUFHQSxTQUFPQyxHQUFHLENBQUNDLE9BQVg7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG4vKipcbiAqIOiOt+WPluS4iuS4gOi9rueahCBwcm9wcyDmiJYgc3RhdGVcbiAqIEhvdyB0byBnZXQgdGhlIHByZXZpb3VzIHByb3BzIG9yIHN0YXRlP1xuICogaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL2hvb2tzLWZhcS5odG1sI2hvdy10by1nZXQtdGhlLXByZXZpb3VzLXByb3BzLW9yLXN0YXRlXG4gKiBAZXhhbXBsZVxuICogYGBganNcbiAqIGZ1bmN0aW9uIENvdW50ZXIoKSB7XG4gKiAgIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMCk7XG4gKiAgIGNvbnN0IHByZXZDb3VudCA9IHVzZVByZXZpb3VzKGNvdW50KTtcbiAqICAgcmV0dXJuIDxoMT5Ob3c6IHtjb3VudH0sIGJlZm9yZToge3ByZXZDb3VudH08L2gxPjtcbiAqIH1cbiAqIGBgYFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlUHJldmlvdXM8VD4odmFsdWU6IFQpIHtcbiAgY29uc3QgcmVmID0gdXNlUmVmPFQ+KCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmVmLmN1cnJlbnQgPSB2YWx1ZTtcbiAgfSk7XG4gIHJldHVybiByZWYuY3VycmVudDtcbn1cbiJdfQ==