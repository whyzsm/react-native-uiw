"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class FlexItem extends _react.Component {
  render() {
    return <_reactNative.View {...this.props} />;
  }

}

exports.default = FlexItem;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GbGV4L0ZsZXhJdGVtLnRzeCJdLCJuYW1lcyI6WyJGbGV4SXRlbSIsIkNvbXBvbmVudCIsInJlbmRlciIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7OztBQUllLE1BQU1BLFFBQU4sU0FBdUJDLGdCQUF2QixDQUFnRDtBQUM3REMsRUFBQUEsTUFBTSxHQUFHO0FBQ1AsV0FBTyxtQkFBTSxJQUFJLEtBQUtDLEtBQVQsQ0FBTixHQUFQO0FBQ0Q7O0FBSDREIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFZpZXcsIFZpZXdQcm9wcyB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmxleEl0ZW1Qcm9wcyBleHRlbmRzIFZpZXdQcm9wcyB7fVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbGV4SXRlbSBleHRlbmRzIENvbXBvbmVudDxGbGV4SXRlbVByb3BzPiB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPFZpZXcgey4uLnRoaXMucHJvcHN9IC8+O1xuICB9XG59XG4iXX0=