"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class WingBlank extends _react.Component {
  render() {
    const {
      style,
      size,
      ...restProps
    } = this.props;
    let sizeStyle = {};

    if (typeof size === 'number') {
      sizeStyle.marginHorizontal = size;
    } else if (size && styles[size]) {
      sizeStyle = styles[size];
    }

    return <_reactNative.View {...restProps} style={[sizeStyle, style]} />;
  }

}

exports.default = WingBlank;
WingBlank.defaultProps = {
  size: 'default'
};

const styles = _reactNative.StyleSheet.create({
  default: {
    marginHorizontal: 12
  },
  small: {
    marginHorizontal: 6
  },
  large: {
    marginHorizontal: 16
  }
});

module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9XaW5nQmxhbmsvaW5kZXgudHN4Il0sIm5hbWVzIjpbIldpbmdCbGFuayIsIkNvbXBvbmVudCIsInJlbmRlciIsInN0eWxlIiwic2l6ZSIsInJlc3RQcm9wcyIsInByb3BzIiwic2l6ZVN0eWxlIiwibWFyZ2luSG9yaXpvbnRhbCIsInN0eWxlcyIsImRlZmF1bHRQcm9wcyIsIlN0eWxlU2hlZXQiLCJjcmVhdGUiLCJkZWZhdWx0Iiwic21hbGwiLCJsYXJnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7QUFTZSxNQUFNQSxTQUFOLFNBQXdCQyxnQkFBeEIsQ0FBa0Q7QUFJL0RDLEVBQUFBLE1BQU0sR0FBRztBQUNQLFVBQU07QUFBRUMsTUFBQUEsS0FBRjtBQUFTQyxNQUFBQSxJQUFUO0FBQWUsU0FBR0M7QUFBbEIsUUFBZ0MsS0FBS0MsS0FBM0M7QUFDQSxRQUFJQyxTQUFrQyxHQUFHLEVBQXpDOztBQUNBLFFBQUksT0FBT0gsSUFBUCxLQUFnQixRQUFwQixFQUE4QjtBQUM1QkcsTUFBQUEsU0FBUyxDQUFDQyxnQkFBVixHQUE2QkosSUFBN0I7QUFDRCxLQUZELE1BRU8sSUFBSUEsSUFBSSxJQUFJSyxNQUFNLENBQUNMLElBQUQsQ0FBbEIsRUFBMEI7QUFDL0JHLE1BQUFBLFNBQVMsR0FBR0UsTUFBTSxDQUFDTCxJQUFELENBQWxCO0FBQ0Q7O0FBQ0QsV0FBTyxtQkFBTSxJQUFJQyxTQUFKLENBQU4sQ0FBcUIsTUFBTSxDQUFDLENBQUNFLFNBQUQsRUFBWUosS0FBWixDQUFELENBQTNCLEdBQVA7QUFDRDs7QUFiOEQ7OztBQUE1Q0gsUyxDQUNaVSxZLEdBQStCO0FBQ3BDTixFQUFBQSxJQUFJLEVBQUU7QUFEOEIsQzs7QUFleEMsTUFBTUssTUFBTSxHQUFHRSx3QkFBV0MsTUFBWCxDQUFrQjtBQUMvQkMsRUFBQUEsT0FBTyxFQUFFO0FBQ1BMLElBQUFBLGdCQUFnQixFQUFFO0FBRFgsR0FEc0I7QUFJL0JNLEVBQUFBLEtBQUssRUFBRTtBQUNMTixJQUFBQSxnQkFBZ0IsRUFBRTtBQURiLEdBSndCO0FBTy9CTyxFQUFBQSxLQUFLLEVBQUU7QUFDTFAsSUFBQUEsZ0JBQWdCLEVBQUU7QUFEYjtBQVB3QixDQUFsQixDQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFZpZXcsIFZpZXdQcm9wcywgU3R5bGVTaGVldCB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2luZ0JsYW5rUHJvcHMgZXh0ZW5kcyBWaWV3UHJvcHMge1xuICAvKipcbiAgICog5oyJ6ZKu5bC65a+4XG4gICAqL1xuICBzaXplPzogJ3NtYWxsJyB8ICdkZWZhdWx0JyB8ICdsYXJnZScgfCBudW1iZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpbmdCbGFuayBleHRlbmRzIENvbXBvbmVudDxXaW5nQmxhbmtQcm9wcz4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzOiBXaW5nQmxhbmtQcm9wcyA9IHtcbiAgICBzaXplOiAnZGVmYXVsdCcsXG4gIH07XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHN0eWxlLCBzaXplLCAuLi5yZXN0UHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IHNpemVTdHlsZTogV2luZ0JsYW5rUHJvcHNbJ3N0eWxlJ10gPSB7fTtcbiAgICBpZiAodHlwZW9mIHNpemUgPT09ICdudW1iZXInKSB7XG4gICAgICBzaXplU3R5bGUubWFyZ2luSG9yaXpvbnRhbCA9IHNpemU7XG4gICAgfSBlbHNlIGlmIChzaXplICYmIHN0eWxlc1tzaXplXSkge1xuICAgICAgc2l6ZVN0eWxlID0gc3R5bGVzW3NpemVdO1xuICAgIH1cbiAgICByZXR1cm4gPFZpZXcgey4uLnJlc3RQcm9wc30gc3R5bGU9e1tzaXplU3R5bGUsIHN0eWxlXX0gLz47XG4gIH1cbn1cblxuY29uc3Qgc3R5bGVzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuICBkZWZhdWx0OiB7XG4gICAgbWFyZ2luSG9yaXpvbnRhbDogMTIsXG4gIH0sXG4gIHNtYWxsOiB7XG4gICAgbWFyZ2luSG9yaXpvbnRhbDogNixcbiAgfSxcbiAgbGFyZ2U6IHtcbiAgICBtYXJnaW5Ib3Jpem9udGFsOiAxNixcbiAgfSxcbn0pO1xuIl19