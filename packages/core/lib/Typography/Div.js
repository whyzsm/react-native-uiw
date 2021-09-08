"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Div;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Div({
  children,
  ...otherProps
}) {
  if (!children) {
    return null;
  }

  const someStr = _react.default.Children.toArray(children).every(item => {
    return typeof item === 'string' || item && item.type && item.type.displayName === 'Text';
  });

  if (someStr) {
    return <_reactNative.Text {...otherProps} children={children} />;
  }

  return <_react.Fragment>
      {_react.default.Children.toArray(children).map((child, idx) => {
      if (typeof child === 'string') {
        return <_reactNative.Text {...otherProps} children={child} key={idx} />;
      }

      if (!_react.default.isValidElement(child)) {
        return undefined;
      }

      return _react.default.cloneElement(child, {
        key: idx,
        ...otherProps
      });
    }).filter(Boolean)}
    </_react.Fragment>;
}

module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UeXBvZ3JhcGh5L0Rpdi50c3giXSwibmFtZXMiOlsiRGl2IiwiY2hpbGRyZW4iLCJvdGhlclByb3BzIiwic29tZVN0ciIsIlJlYWN0IiwiQ2hpbGRyZW4iLCJ0b0FycmF5IiwiZXZlcnkiLCJpdGVtIiwidHlwZSIsImRpc3BsYXlOYW1lIiwibWFwIiwiY2hpbGQiLCJpZHgiLCJpc1ZhbGlkRWxlbWVudCIsInVuZGVmaW5lZCIsImNsb25lRWxlbWVudCIsImtleSIsImZpbHRlciIsIkJvb2xlYW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7O0FBTWUsU0FBU0EsR0FBVCxDQUFnQjtBQUFFQyxFQUFBQSxRQUFGO0FBQVksS0FBR0M7QUFBZixDQUFoQixFQUFtRztBQUNoSCxNQUFJLENBQUNELFFBQUwsRUFBZTtBQUNiLFdBQU8sSUFBUDtBQUNEOztBQUNELFFBQU1FLE9BQU8sR0FBR0MsZUFBTUMsUUFBTixDQUFlQyxPQUFmLENBQXVCTCxRQUF2QixFQUFpQ00sS0FBakMsQ0FBd0NDLElBQUQsSUFBVTtBQUMvRCxXQUFPLE9BQU9BLElBQVAsS0FBZ0IsUUFBaEIsSUFBNkJBLElBQUksSUFBS0EsSUFBRCxDQUFjQyxJQUF0QixJQUErQkQsSUFBRCxDQUFjQyxJQUFkLENBQW1CQyxXQUFuQixLQUFtQyxNQUFyRztBQUNELEdBRmUsQ0FBaEI7O0FBR0EsTUFBSVAsT0FBSixFQUFhO0FBQ1gsV0FBTyxtQkFBTSxJQUFJRCxVQUFKLENBQU4sQ0FBc0IsU0FBUyxDQUFDRCxRQUFELENBQS9CLEdBQVA7QUFDRDs7QUFDRCxTQUNFO0FBQ0osTUFBTSxDQUFDRyxlQUFNQyxRQUFOLENBQWVDLE9BQWYsQ0FBdUJMLFFBQXZCLEVBQ0VVLEdBREYsQ0FDTSxDQUFDQyxLQUFELEVBQVFDLEdBQVIsS0FBZ0I7QUFDbkIsVUFBSSxPQUFPRCxLQUFQLEtBQWlCLFFBQXJCLEVBQStCO0FBQzdCLGVBQU8sbUJBQU0sSUFBSVYsVUFBSixDQUFOLENBQXNCLFNBQVMsQ0FBQ1UsS0FBRCxDQUEvQixDQUF1QyxJQUFJLENBQUNDLEdBQUQsQ0FBM0MsR0FBUDtBQUNEOztBQUNELFVBQUksQ0FBQ1QsZUFBTVUsY0FBTixDQUFxQkYsS0FBckIsQ0FBTCxFQUFrQztBQUNoQyxlQUFPRyxTQUFQO0FBQ0Q7O0FBQ0QsYUFBT1gsZUFBTVksWUFBTixDQUFtQkosS0FBbkIsRUFBMEI7QUFBRUssUUFBQUEsR0FBRyxFQUFFSixHQUFQO0FBQVksV0FBR1g7QUFBZixPQUExQixDQUFQO0FBQ0QsS0FURixFQVVFZ0IsTUFWRixDQVVTQyxPQVZULENBQUQ7QUFXTixJQUFJLGtCQWJGO0FBZUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUZXh0LCBUZXh0UHJvcHMsIFZpZXdQcm9wcyB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbmludGVyZmFjZSBEaXZQcm9wcyB7XG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEaXY8VD4oeyBjaGlsZHJlbiwgLi4ub3RoZXJQcm9wcyB9OiBEaXZQcm9wcyAmIFRleHRQcm9wcyAmIFZpZXdQcm9wcyk6IEpTWC5FbGVtZW50IHwgbnVsbCB7XG4gIGlmICghY2hpbGRyZW4pIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCBzb21lU3RyID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbikuZXZlcnkoKGl0ZW0pID0+IHtcbiAgICByZXR1cm4gdHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnIHx8IChpdGVtICYmIChpdGVtIGFzIGFueSkudHlwZSAmJiAoaXRlbSBhcyBhbnkpLnR5cGUuZGlzcGxheU5hbWUgPT09ICdUZXh0Jyk7XG4gIH0pO1xuICBpZiAoc29tZVN0cikge1xuICAgIHJldHVybiA8VGV4dCB7Li4ub3RoZXJQcm9wc30gY2hpbGRyZW49e2NoaWxkcmVufSAvPjtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIHtSZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKVxuICAgICAgICAubWFwKChjaGlsZCwgaWR4KSA9PiB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiA8VGV4dCB7Li4ub3RoZXJQcm9wc30gY2hpbGRyZW49e2NoaWxkfSBrZXk9e2lkeH0gLz47XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7IGtleTogaWR4LCAuLi5vdGhlclByb3BzIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuZmlsdGVyKEJvb2xlYW4pfVxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59XG4iXX0=