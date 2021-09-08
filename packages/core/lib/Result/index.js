"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function MaybeTextOrView({
  children,
  ...otherProps
}) {
  if (typeof children === 'string' || children && children.type.displayName === 'Text') {
    return <_reactNative.Text {...otherProps}>{children}</_reactNative.Text>;
  }

  return <_reactNative.View {...otherProps}>{children}</_reactNative.View>;
}

const styles = _reactNative.StyleSheet.create({
  defalut: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 30,
    paddingBottom: 21
  },
  title: {
    fontSize: 21,
    marginTop: 15,
    paddingHorizontal: 15
  },
  message: {
    fontSize: 16,
    marginTop: 9,
    paddingHorizontal: 15,
    lineHeight: 18,
    color: '#888'
  }
});

class Result extends _react.Component {
  render() {
    const {
      style,
      title,
      message,
      img,
      ...otherProps
    } = this.props;
    return <_reactNative.View style={[styles.defalut, style]} {...otherProps}>
        {img}
        {title && <MaybeTextOrView style={styles.title}>{title}</MaybeTextOrView>}
        {message && <MaybeTextOrView style={styles.message}>{message}</MaybeTextOrView>}
      </_reactNative.View>;
  }

}

exports.default = Result;
Result.defaultProps = {};
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9SZXN1bHQvaW5kZXgudHN4Il0sIm5hbWVzIjpbIk1heWJlVGV4dE9yVmlldyIsImNoaWxkcmVuIiwib3RoZXJQcm9wcyIsInR5cGUiLCJkaXNwbGF5TmFtZSIsInN0eWxlcyIsIlN0eWxlU2hlZXQiLCJjcmVhdGUiLCJkZWZhbHV0IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJ0aXRsZSIsImZvbnRTaXplIiwibWFyZ2luVG9wIiwicGFkZGluZ0hvcml6b250YWwiLCJtZXNzYWdlIiwibGluZUhlaWdodCIsImNvbG9yIiwiUmVzdWx0IiwiQ29tcG9uZW50IiwicmVuZGVyIiwic3R5bGUiLCJpbWciLCJwcm9wcyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7QUFNQSxTQUFTQSxlQUFULENBQXlCO0FBQUVDLEVBQUFBLFFBQUY7QUFBWSxLQUFHQztBQUFmLENBQXpCLEVBQW9HO0FBQ2xHLE1BQUksT0FBT0QsUUFBUCxLQUFvQixRQUFwQixJQUFpQ0EsUUFBUSxJQUFLQSxRQUFELENBQWtCRSxJQUFsQixDQUF1QkMsV0FBdkIsS0FBdUMsTUFBeEYsRUFBaUc7QUFDL0YsV0FBTyxtQkFBTSxJQUFJRixVQUFKLENBQU4sQ0FBc0IsQ0FBQ0QsUUFBRCxDQUFVLG9CQUF2QztBQUNEOztBQUNELFNBQU8sbUJBQU0sSUFBSUMsVUFBSixDQUFOLENBQXNCLENBQUNELFFBQUQsQ0FBVSxvQkFBdkM7QUFDRDs7QUFFRCxNQUFNSSxNQUFNLEdBQUdDLHdCQUFXQyxNQUFYLENBQWtCO0FBQy9CQyxFQUFBQSxPQUFPLEVBQUU7QUFDUEMsSUFBQUEsY0FBYyxFQUFFLFFBRFQ7QUFFUEMsSUFBQUEsVUFBVSxFQUFFLFFBRkw7QUFHUEMsSUFBQUEsZUFBZSxFQUFFLE1BSFY7QUFJUEMsSUFBQUEsVUFBVSxFQUFFLEVBSkw7QUFLUEMsSUFBQUEsYUFBYSxFQUFFO0FBTFIsR0FEc0I7QUFRL0JDLEVBQUFBLEtBQUssRUFBRTtBQUNMQyxJQUFBQSxRQUFRLEVBQUUsRUFETDtBQUVMQyxJQUFBQSxTQUFTLEVBQUUsRUFGTjtBQUdMQyxJQUFBQSxpQkFBaUIsRUFBRTtBQUhkLEdBUndCO0FBYS9CQyxFQUFBQSxPQUFPLEVBQUU7QUFDUEgsSUFBQUEsUUFBUSxFQUFFLEVBREg7QUFFUEMsSUFBQUEsU0FBUyxFQUFFLENBRko7QUFHUEMsSUFBQUEsaUJBQWlCLEVBQUUsRUFIWjtBQUlQRSxJQUFBQSxVQUFVLEVBQUUsRUFKTDtBQUtQQyxJQUFBQSxLQUFLLEVBQUU7QUFMQTtBQWJzQixDQUFsQixDQUFmOztBQXFDZSxNQUFNQyxNQUFOLFNBQXFCQyxnQkFBckIsQ0FBNEM7QUFFekRDLEVBQUFBLE1BQU0sR0FBRztBQUNQLFVBQU07QUFBRUMsTUFBQUEsS0FBRjtBQUFTVixNQUFBQSxLQUFUO0FBQWdCSSxNQUFBQSxPQUFoQjtBQUF5Qk8sTUFBQUEsR0FBekI7QUFBOEIsU0FBR3ZCO0FBQWpDLFFBQWdELEtBQUt3QixLQUEzRDtBQUNBLFdBQ0UsbUJBQU0sTUFBTSxDQUFDLENBQUNyQixNQUFNLENBQUNHLE9BQVIsRUFBaUJnQixLQUFqQixDQUFELENBQVosQ0FBc0MsSUFBSXRCLFVBQUosQ0FBdEM7QUFDTixRQUFRLENBQUN1QixHQUFEO0FBQ1IsUUFBUSxDQUFDWCxLQUFLLElBQUksQ0FBQyxlQUFELENBQWlCLE1BQU0sQ0FBQ1QsTUFBTSxDQUFDUyxLQUFSLENBQXZCLENBQXNDLENBQUNBLEtBQUQsQ0FBTyxFQUFFLGVBQUYsQ0FBdkQ7QUFDUixRQUFRLENBQUNJLE9BQU8sSUFBSSxDQUFDLGVBQUQsQ0FBaUIsTUFBTSxDQUFDYixNQUFNLENBQUNhLE9BQVIsQ0FBdkIsQ0FBd0MsQ0FBQ0EsT0FBRCxDQUFTLEVBQUUsZUFBRixDQUE3RDtBQUNSLE1BQU0sb0JBTEY7QUFPRDs7QUFYd0Q7OztBQUF0Q0csTSxDQUNaTSxZLEdBQTRCLEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVmlldywgVmlld1Byb3BzLCBUZXh0LCBUZXh0UHJvcHMsIFN0eWxlU2hlZXQgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG5pbnRlcmZhY2UgTWF5YmVUZXh0T3JWaWV3UHJvcHMge1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZTtcbn1cblxuZnVuY3Rpb24gTWF5YmVUZXh0T3JWaWV3KHsgY2hpbGRyZW4sIC4uLm90aGVyUHJvcHMgfTogTWF5YmVUZXh0T3JWaWV3UHJvcHMgJiBUZXh0UHJvcHMgJiBWaWV3UHJvcHMpIHtcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycgfHwgKGNoaWxkcmVuICYmIChjaGlsZHJlbiBhcyBhbnkpLnR5cGUuZGlzcGxheU5hbWUgPT09ICdUZXh0JykpIHtcbiAgICByZXR1cm4gPFRleHQgey4uLm90aGVyUHJvcHN9PntjaGlsZHJlbn08L1RleHQ+O1xuICB9XG4gIHJldHVybiA8VmlldyB7Li4ub3RoZXJQcm9wc30+e2NoaWxkcmVufTwvVmlldz47XG59XG5cbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgZGVmYWx1dDoge1xuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICBwYWRkaW5nVG9wOiAzMCxcbiAgICBwYWRkaW5nQm90dG9tOiAyMSxcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICBmb250U2l6ZTogMjEsXG4gICAgbWFyZ2luVG9wOiAxNSxcbiAgICBwYWRkaW5nSG9yaXpvbnRhbDogMTUsXG4gIH0sXG4gIG1lc3NhZ2U6IHtcbiAgICBmb250U2l6ZTogMTYsXG4gICAgbWFyZ2luVG9wOiA5LFxuICAgIHBhZGRpbmdIb3Jpem9udGFsOiAxNSxcbiAgICBsaW5lSGVpZ2h0OiAxOCxcbiAgICBjb2xvcjogJyM4ODgnLFxuICB9LFxufSk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzdWx0UHJvcHMgZXh0ZW5kcyBWaWV3UHJvcHMge1xuICAvKipcbiAgICog5o+S5Zu+5YWD57SgICjlj6/ku6XkuLo8aW1nIHNyYz1cIlwiIC8+LzxJY29uIHR5cGU9XCJcIiAvPuetiSlcbiAgICovXG4gIGltZz86IFJlYWN0LlJlYWN0Tm9kZTtcbiAgLyoqXG4gICAqIHRpdGxlIOaWh+ahiFxuICAgKi9cbiAgdGl0bGU/OiBSZWFjdC5SZWFjdE5vZGU7XG4gIC8qKlxuICAgKiBtZXNzYWdlIOaWh+ahiFxuICAgKi9cbiAgbWVzc2FnZT86IFJlYWN0LlJlYWN0Tm9kZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzdWx0IGV4dGVuZHMgQ29tcG9uZW50PFJlc3VsdFByb3BzPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHM6IFJlc3VsdFByb3BzID0ge307XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHN0eWxlLCB0aXRsZSwgbWVzc2FnZSwgaW1nLCAuLi5vdGhlclByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8VmlldyBzdHlsZT17W3N0eWxlcy5kZWZhbHV0LCBzdHlsZV19IHsuLi5vdGhlclByb3BzfT5cbiAgICAgICAge2ltZ31cbiAgICAgICAge3RpdGxlICYmIDxNYXliZVRleHRPclZpZXcgc3R5bGU9e3N0eWxlcy50aXRsZX0+e3RpdGxlfTwvTWF5YmVUZXh0T3JWaWV3Pn1cbiAgICAgICAge21lc3NhZ2UgJiYgPE1heWJlVGV4dE9yVmlldyBzdHlsZT17c3R5bGVzLm1lc3NhZ2V9PnttZXNzYWdlfTwvTWF5YmVUZXh0T3JWaWV3Pn1cbiAgICAgIDwvVmlldz5cbiAgICApO1xuICB9XG59XG4iXX0=