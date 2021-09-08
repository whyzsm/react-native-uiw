"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class Divider extends _react.Component {
  render() {
    let {
      children,
      style,
      gutter,
      label,
      lineStyle,
      labelStyle,
      type,
      ...restProps
    } = this.props;

    if (typeof children === 'string') {
      label = children;
      children = null;
    }

    const lineStyleArr = [];
    const warpperStyles = [];

    if (type === 'horizontal') {
      warpperStyles.unshift(styles.horizontal);
      lineStyleArr.unshift(styles.lineHorizontal);
      lineStyleArr.unshift({
        marginHorizontal: gutter
      });
    }

    if (type === 'vertical') {
      warpperStyles.unshift(styles.vertical);
      lineStyleArr.unshift(styles.lineVertical);
      lineStyleArr.unshift({
        marginVertical: gutter
      });
    }

    if (!children && label) {
      if (labelStyle && typeof labelStyle === 'number') {
        labelStyle = _reactNative.StyleSheet.flatten(labelStyle);
      }

      children = <_reactNative.Text style={[styles.label, labelStyle]}> {label} </_reactNative.Text>;
    }

    if (lineStyle && typeof lineStyle === 'number') {
      lineStyle = _reactNative.StyleSheet.flatten(lineStyle);
    }

    const line = <_reactNative.View style={[styles.line, ...lineStyleArr, lineStyle]} />;
    return <_reactNative.View style={[styles.warpper, ...warpperStyles, style]} {...restProps}>
        {line}
        {children}
        {children && line}
      </_reactNative.View>;
  }

}

exports.default = Divider;
Divider.defaultProps = {
  type: 'horizontal',
  gutter: 8
};

const styles = _reactNative.StyleSheet.create({
  warpper: {
    alignItems: 'center'
  },
  horizontal: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexGrow: 1,
    flexShrink: 1
  },
  vertical: {
    justifyContent: 'center',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 1
  },
  line: {
    backgroundColor: 'rgb(229, 229, 229)',
    flexDirection: 'column',
    flexShrink: 1,
    flexGrow: 1
  },
  lineHorizontal: {
    height: 1,
    minHeight: 1,
    minWidth: 16,
    marginHorizontal: 8
  },
  lineVertical: {
    width: 1,
    minHeight: 16,
    minWidth: 1,
    marginVertical: 8
  },
  label: {
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: 14
  }
});

module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9EaXZpZGVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJEaXZpZGVyIiwiQ29tcG9uZW50IiwicmVuZGVyIiwiY2hpbGRyZW4iLCJzdHlsZSIsImd1dHRlciIsImxhYmVsIiwibGluZVN0eWxlIiwibGFiZWxTdHlsZSIsInR5cGUiLCJyZXN0UHJvcHMiLCJwcm9wcyIsImxpbmVTdHlsZUFyciIsIndhcnBwZXJTdHlsZXMiLCJ1bnNoaWZ0Iiwic3R5bGVzIiwiaG9yaXpvbnRhbCIsImxpbmVIb3Jpem9udGFsIiwibWFyZ2luSG9yaXpvbnRhbCIsInZlcnRpY2FsIiwibGluZVZlcnRpY2FsIiwibWFyZ2luVmVydGljYWwiLCJTdHlsZVNoZWV0IiwiZmxhdHRlbiIsImxpbmUiLCJ3YXJwcGVyIiwiZGVmYXVsdFByb3BzIiwiY3JlYXRlIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZmxleERpcmVjdGlvbiIsImZsZXhHcm93IiwiZmxleFNocmluayIsImJhY2tncm91bmRDb2xvciIsImhlaWdodCIsIm1pbkhlaWdodCIsIm1pbldpZHRoIiwid2lkdGgiLCJjb2xvciIsImZvbnRTaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7OztBQVdlLE1BQU1BLE9BQU4sU0FBc0JDLGdCQUF0QixDQUE4QztBQUszREMsRUFBQUEsTUFBTSxHQUFHO0FBQ1AsUUFBSTtBQUFFQyxNQUFBQSxRQUFGO0FBQVlDLE1BQUFBLEtBQVo7QUFBbUJDLE1BQUFBLE1BQW5CO0FBQTJCQyxNQUFBQSxLQUEzQjtBQUFrQ0MsTUFBQUEsU0FBbEM7QUFBNkNDLE1BQUFBLFVBQTdDO0FBQXlEQyxNQUFBQSxJQUF6RDtBQUErRCxTQUFHQztBQUFsRSxRQUFnRixLQUFLQyxLQUF6Rjs7QUFDQSxRQUFJLE9BQU9SLFFBQVAsS0FBb0IsUUFBeEIsRUFBa0M7QUFDaENHLE1BQUFBLEtBQUssR0FBR0gsUUFBUjtBQUNBQSxNQUFBQSxRQUFRLEdBQUcsSUFB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QUFzQi9CZCxFQUFBQSxjQUFjLEVBQUU7QUFDZGlCLElBQUFBLE1BQU0sRUFBRSxDQURNO0FBRWRDLElBQUFBLFNBQVMsRUFBRSxDQUZHO0FBR2RDLElBQUFBLFFBQVEsRUFBRSxFQUhJO0FBSWRsQixJQUFBQSxnQkFBZ0IsRUFBRTtBQUpKLEdBdEJlO0FBNEIvQkUsRUFBQUEsWUFBWSxFQUFFO0FBQ1ppQixJQUFBQSxLQUFLLEVBQUUsQ0FESztBQUVaRixJQUFBQSxTQUFTLEVBQUUsRUFGQztBQUdaQyxJQUFBQSxRQUFRLEVBQUUsQ0FIRTtBQUlaZixJQUFBQSxjQUFjLEVBQUU7QUFKSixHQTVCaUI7QUFrQy9CZixFQUFBQSxLQUFLLEVBQUU7QUFDTGdDLElBQUFBLEtBQUssRUFBRSxxQkFERjtBQUVMQyxJQUFBQSxRQUFRLEVBQUU7QUFGTDtBQWxDd0IsQ0FBbEIsQ0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBWaWV3LCBUZXh0LCBWaWV3UHJvcHMsIFRleHRQcm9wcywgU3R5bGVTaGVldCB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGl2aWRlclByb3BzIGV4dGVuZHMgVmlld1Byb3BzIHtcbiAgbGFiZWw/OiBzdHJpbmc7XG4gIGd1dHRlcj86IG51bWJlcjtcbiAgc3R5bGU/OiBWaWV3UHJvcHNbJ3N0eWxlJ107XG4gIGxpbmVTdHlsZT86IFZpZXdQcm9wc1snc3R5bGUnXTtcbiAgbGFiZWxTdHlsZT86IFRleHRQcm9wc1snc3R5bGUnXTtcbiAgdHlwZT86ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpdmlkZXIgZXh0ZW5kcyBDb21wb25lbnQ8RGl2aWRlclByb3BzPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHM6IERpdmlkZXJQcm9wcyA9IHtcbiAgICB0eXBlOiAnaG9yaXpvbnRhbCcsXG4gICAgZ3V0dGVyOiA4LFxuICB9O1xuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgY2hpbGRyZW4sIHN0eWxlLCBndXR0ZXIsIGxhYmVsLCBsaW5lU3R5bGUsIGxhYmVsU3R5bGUsIHR5cGUsIC4uLnJlc3RQcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgbGFiZWwgPSBjaGlsZHJlbjtcbiAgICAgIGNoaWxkcmVuID0gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgbGluZVN0eWxlQXJyID0gW107XG4gICAgY29uc3Qgd2FycHBlclN0eWxlcyA9IFtdO1xuICAgIGlmICh0eXBlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIHdhcnBwZXJTdHlsZXMudW5zaGlmdChzdHlsZXMuaG9yaXpvbnRhbCk7XG4gICAgICBsaW5lU3R5bGVBcnIudW5zaGlmdChzdHlsZXMubGluZUhvcml6b250YWwpO1xuICAgICAgbGluZVN0eWxlQXJyLnVuc2hpZnQoeyBtYXJnaW5Ib3Jpem9udGFsOiBndXR0ZXIgfSk7XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAndmVydGljYWwnKSB7XG4gICAgICB3YXJwcGVyU3R5bGVzLnVuc2hpZnQoc3R5bGVzLnZlcnRpY2FsKTtcbiAgICAgIGxpbmVTdHlsZUFyci51bnNoaWZ0KHN0eWxlcy5saW5lVmVydGljYWwpO1xuICAgICAgbGluZVN0eWxlQXJyLnVuc2hpZnQoeyBtYXJnaW5WZXJ0aWNhbDogZ3V0dGVyIH0pO1xuICAgIH1cbiAgICBpZiAoIWNoaWxkcmVuICYmIGxhYmVsKSB7XG4gICAgICBpZiAobGFiZWxTdHlsZSAmJiB0eXBlb2YgbGFiZWxTdHlsZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgbGFiZWxTdHlsZSA9IFN0eWxlU2hlZXQuZmxhdHRlbihsYWJlbFN0eWxlKTtcbiAgICAgIH1cbiAgICAgIGNoaWxkcmVuID0gPFRleHQgc3R5bGU9e1tzdHlsZXMubGFiZWwsIGxhYmVsU3R5bGVdfT4ge2xhYmVsfSA8L1RleHQ+O1xuICAgIH1cbiAgICBpZiAobGluZVN0eWxlICYmIHR5cGVvZiBsaW5lU3R5bGUgPT09ICdudW1iZXInKSB7XG4gICAgICBsaW5lU3R5bGUgPSBTdHlsZVNoZWV0LmZsYXR0ZW4obGluZVN0eWxlKTtcbiAgICB9XG4gICAgY29uc3QgbGluZSA9IDxWaWV3IHN0eWxlPXtbc3R5bGVzLmxpbmUsIC4uLmxpbmVTdHlsZUFyciwgbGluZVN0eWxlXX0gLz47XG4gICAgcmV0dXJuIChcbiAgICAgIDxWaWV3IHN0eWxlPXtbc3R5bGVzLndhcnBwZXIsIC4uLndhcnBwZXJTdHlsZXMsIHN0eWxlXX0gey4uLnJlc3RQcm9wc30+XG4gICAgICAgIHtsaW5lfVxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIHtjaGlsZHJlbiAmJiBsaW5lfVxuICAgICAgPC9WaWV3PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3Qgc3R5bGVzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuICB3YXJwcGVyOiB7XG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIH0sXG4gIGhvcml6b250YWw6IHtcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgZmxleEdyb3c6IDEsXG4gICAgZmxleFNocmluazogMSxcbiAgfSxcbiAgdmVydGljYWw6IHtcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgZmxleEdyb3c6IDEsXG4gICAgZmxleFNocmluazogMSxcbiAgfSxcbiAgbGluZToge1xuICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigyMjksIDIyOSwgMjI5KScsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgZmxleFNocmluazogMSxcbiAgICBmbGV4R3JvdzogMSxcbiAgfSxcbiAgbGluZUhvcml6b250YWw6IHtcbiAgICBoZWlnaHQ6IDEsXG4gICAgbWluSGVpZ2h0OiAxLFxuICAgIG1pbldpZHRoOiAxNixcbiAgICBtYXJnaW5Ib3Jpem9udGFsOiA4LFxuICB9LFxuICBsaW5lVmVydGljYWw6IHtcbiAgICB3aWR0aDogMSxcbiAgICBtaW5IZWlnaHQ6IDE2LFxuICAgIG1pbldpZHRoOiAxLFxuICAgIG1hcmdpblZlcnRpY2FsOiA4LFxuICB9LFxuICBsYWJlbDoge1xuICAgIGNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjU0KScsXG4gICAgZm9udFNpemU6IDE0LFxuICB9LFxufSk7XG4iXX0=