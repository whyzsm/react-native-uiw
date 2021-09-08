"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ExpandableSection(props) {
  const {
    expanded = false,
    sectionHeader,
    children,
    top = false
  } = props;

  const onPress = () => {
    var _props$onPress;

    (_props$onPress = props.onPress) === null || _props$onPress === void 0 ? void 0 : _props$onPress.call(props); // 动画效果

    _reactNative.LayoutAnimation.configureNext({ ..._reactNative.LayoutAnimation.Presets.easeInEaseOut,
      duration: 300
    });
  };

  return <_reactNative.View style={styles.container}>
      {top && expanded && children}
      <_reactNative.TouchableOpacity onPress={onPress}>{sectionHeader}</_reactNative.TouchableOpacity>
      {!top && expanded && children}
    </_reactNative.View>;
}

var _default = ExpandableSection;
exports.default = _default;

const styles = _reactNative.StyleSheet.create({
  container: {
    overflow: 'hidden'
  }
});

module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9FeHBhbmRhYmxlU2VjdGlvbi9pbmRleC50c3giXSwibmFtZXMiOlsiRXhwYW5kYWJsZVNlY3Rpb24iLCJwcm9wcyIsImV4cGFuZGVkIiwic2VjdGlvbkhlYWRlciIsImNoaWxkcmVuIiwidG9wIiwib25QcmVzcyIsIkxheW91dEFuaW1hdGlvbiIsImNvbmZpZ3VyZU5leHQiLCJQcmVzZXRzIiwiZWFzZUluRWFzZU91dCIsImR1cmF0aW9uIiwic3R5bGVzIiwiY29udGFpbmVyIiwiU3R5bGVTaGVldCIsImNyZWF0ZSIsIm92ZXJmbG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUF5QkEsU0FBU0EsaUJBQVQsQ0FBMkJDLEtBQTNCLEVBQTBEO0FBQ3hELFFBQU07QUFBRUMsSUFBQUEsUUFBUSxHQUFHLEtBQWI7QUFBb0JDLElBQUFBLGFBQXBCO0FBQW1DQyxJQUFBQSxRQUFuQztBQUE2Q0MsSUFBQUEsR0FBRyxHQUFHO0FBQW5ELE1BQTZESixLQUFuRTs7QUFFQSxRQUFNSyxPQUFPLEdBQUcsTUFBTTtBQUFBOztBQUNwQixzQkFBQUwsS0FBSyxDQUFDSyxPQUFOLHVFQUFBTCxLQUFLLEVBRGUsQ0FFcEI7O0FBQ0FNLGlDQUFnQkMsYUFBaEIsQ0FBOEIsRUFBRSxHQUFHRCw2QkFBZ0JFLE9BQWhCLENBQXdCQyxhQUE3QjtBQUE0Q0MsTUFBQUEsUUFBUSxFQUFFO0FBQXRELEtBQTlCO0FBQ0QsR0FKRDs7QUFNQSxTQUNFLG1CQUFNLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxTQUFSLENBQVo7QUFDSixNQUFNLENBQUNSLEdBQUcsSUFBSUgsUUFBUCxJQUFtQkUsUUFBcEI7QUFDTixNQUFNLCtCQUFrQixRQUFRLENBQUNFLE9BQUQsQ0FBMUIsQ0FBb0MsQ0FBQ0gsYUFBRCxDQUFlO0FBQ3pELE1BQU0sQ0FBQyxDQUFDRSxHQUFELElBQVFILFFBQVIsSUFBb0JFLFFBQXJCO0FBQ04sSUFBSSxvQkFMRjtBQU9EOztlQUVjSixpQjs7O0FBRWYsTUFBTVksTUFBTSxHQUFHRSx3QkFBV0MsTUFBWCxDQUFrQjtBQUMvQkYsRUFBQUEsU0FBUyxFQUFFO0FBQ1RHLElBQUFBLFFBQVEsRUFBRTtBQUREO0FBRG9CLENBQWxCLENBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGF5b3V0QW5pbWF0aW9uLCBTdHlsZVNoZWV0LCBWaWV3LCBUb3VjaGFibGVPcGFjaXR5IH0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuZXhwb3J0IHR5cGUgRXhwYW5kYWJsZVNlY3Rpb25Qcm9wcyA9IHtcbiAgLyoqXG4gICAqIOagh+mimFxuICAgKi9cbiAgc2VjdGlvbkhlYWRlcj86IEpTWC5FbGVtZW50O1xuICAvKipcbiAgICog5oqY5Y+g5YaF5a65XG4gICAqL1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZTtcbiAgLyoqXG4gICAqIOaYr+WQpuWxleW8gFxuICAgKi9cbiAgZXhwYW5kZWQ/OiBib29sZWFuO1xuICAvKipcbiAgICog5bGV5byA5ZCO5pi+56S65L2N572uIOagh+mimOS4iuaIluagh+mimOS4i1xuICAgKi9cbiAgdG9wPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOeCueWHu+S6i+S7tlxuICAgKi9cbiAgb25QcmVzcz86ICgpID0+IHZvaWQ7XG59O1xuXG5mdW5jdGlvbiBFeHBhbmRhYmxlU2VjdGlvbihwcm9wczogRXhwYW5kYWJsZVNlY3Rpb25Qcm9wcykge1xuICBjb25zdCB7IGV4cGFuZGVkID0gZmFsc2UsIHNlY3Rpb25IZWFkZXIsIGNoaWxkcmVuLCB0b3AgPSBmYWxzZSB9ID0gcHJvcHM7XG5cbiAgY29uc3Qgb25QcmVzcyA9ICgpID0+IHtcbiAgICBwcm9wcy5vblByZXNzPy4oKTtcbiAgICAvLyDliqjnlLvmlYjmnpxcbiAgICBMYXlvdXRBbmltYXRpb24uY29uZmlndXJlTmV4dCh7IC4uLkxheW91dEFuaW1hdGlvbi5QcmVzZXRzLmVhc2VJbkVhc2VPdXQsIGR1cmF0aW9uOiAzMDAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8VmlldyBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICB7dG9wICYmIGV4cGFuZGVkICYmIGNoaWxkcmVufVxuICAgICAgPFRvdWNoYWJsZU9wYWNpdHkgb25QcmVzcz17b25QcmVzc30+e3NlY3Rpb25IZWFkZXJ9PC9Ub3VjaGFibGVPcGFjaXR5PlxuICAgICAgeyF0b3AgJiYgZXhwYW5kZWQgJiYgY2hpbGRyZW59XG4gICAgPC9WaWV3PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBFeHBhbmRhYmxlU2VjdGlvbjtcblxuY29uc3Qgc3R5bGVzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuICBjb250YWluZXI6IHtcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gIH0sXG59KTtcbiJdfQ==