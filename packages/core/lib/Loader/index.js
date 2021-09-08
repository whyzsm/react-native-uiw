"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const styles = _reactNative.StyleSheet.create({
  defalut: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: 99,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  indicator: {
    marginRight: 5
  },
  stopActivity: {
    display: 'none'
  }
});

class Loader extends _react.Component {
  render() {
    const {
      children,
      color: loaderColor,
      maskColor,
      rounded,
      loading,
      tip,
      size,
      vertical,
      ...otherProps
    } = this.props;
    let styleProps = {};

    if (maskColor) {
      styleProps.backgroundColor = maskColor;
    }

    if (rounded) {
      styleProps.borderRadius = rounded;
    }

    if (vertical) {
      styleProps.flexDirection = 'column';
    }

    if (!children && !tip) {
      return <_reactNative.ActivityIndicator animating={loading} size={size} color={loaderColor} />;
    }

    const tips = tip || loading ? <_reactNative.View style={[styles[loading ? 'defalut' : 'stopActivity'], styleProps]}>
          <_reactNative.ActivityIndicator animating={loading} size={size} color={loaderColor} />
          {tip && (typeof tip === 'string' ? <_reactNative.Text style={{
        color: loaderColor
      }}>{tip}</_reactNative.Text> : <_reactNative.View>{tip}</_reactNative.View>)}
        </_reactNative.View> : null;

    if (!children && tip) {
      return tips;
    }

    return <_reactNative.View {...otherProps}>
        {tips}
        {children}
      </_reactNative.View>;
  }

}

exports.default = Loader;
Loader.defaultProps = {
  maskColor: 'rgba(255, 255, 255, 0.85)',
  loading: true,
  color: 'gray',
  size: 'small'
};
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Mb2FkZXIvaW5kZXgudHN4Il0sIm5hbWVzIjpbInN0eWxlcyIsIlN0eWxlU2hlZXQiLCJjcmVhdGUiLCJkZWZhbHV0IiwicG9zaXRpb24iLCJoZWlnaHQiLCJ3aWR0aCIsInpJbmRleCIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJpbmRpY2F0b3IiLCJtYXJnaW5SaWdodCIsInN0b3BBY3Rpdml0eSIsImRpc3BsYXkiLCJMb2FkZXIiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJjaGlsZHJlbiIsImNvbG9yIiwibG9hZGVyQ29sb3IiLCJtYXNrQ29sb3IiLCJyb3VuZGVkIiwibG9hZGluZyIsInRpcCIsInNpemUiLCJ2ZXJ0aWNhbCIsIm90aGVyUHJvcHMiLCJwcm9wcyIsInN0eWxlUHJvcHMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJ0aXBzIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7OztBQUVBLE1BQU1BLE1BQU0sR0FBR0Msd0JBQVdDLE1BQVgsQ0FBa0I7QUFDL0JDLEVBQUFBLE9BQU8sRUFBRTtBQUNQQyxJQUFBQSxRQUFRLEVBQUUsVUFESDtBQUVQQyxJQUFBQSxNQUFNLEVBQUUsTUFGRDtBQUdQQyxJQUFBQSxLQUFLLEVBQUUsTUFIQTtBQUlQQyxJQUFBQSxNQUFNLEVBQUUsRUFKRDtBQUtQQyxJQUFBQSxhQUFhLEVBQUUsS0FMUjtBQU1QQyxJQUFBQSxVQUFVLEVBQUUsUUFOTDtBQU9QQyxJQUFBQSxjQUFjLEVBQUU7QUFQVCxHQURzQjtBQVUvQkMsRUFBQUEsU0FBUyxFQUFFO0FBQ1RDLElBQUFBLFdBQVcsRUFBRTtBQURKLEdBVm9CO0FBYS9CQyxFQUFBQSxZQUFZLEVBQUU7QUFDWkMsSUFBQUEsT0FBTyxFQUFFO0FBREc7QUFiaUIsQ0FBbEIsQ0FBZjs7QUFpRGUsTUFBTUMsTUFBTixTQUFxQkMsZ0JBQXJCLENBQTRDO0FBT3pEQyxFQUFBQSxNQUFNLEdBQUc7QUFDUCxVQUFNO0FBQ0pDLE1BQUFBLFFBREk7QUFFSkMsTUFBQUEsS0FBSyxFQUFFQyxXQUZIO0FBR0pDLE1BQUFBLFNBSEk7QUFJSkMsTUFBQUEsT0FKSTtBQUtKQyxNQUFBQSxPQUxJO0FBTUpDLE1BQUFBLEdBTkk7QUFPSkMsTUFBQUEsSUFQSTtBQVFKQyxNQUFBQSxRQVJJO0FBU0osU0FBR0M7QUFUQyxRQVVGLEtBQUtDLEtBVlQ7QUFXQSxRQUFJQyxVQUEyQyxHQUFHLEVBQWxEOztBQUNBLFFBQUlSLFNBQUosRUFBZTtBQUNiUSxNQUFBQSxVQUFVLENBQUNDLGVBQVgsR0FBNkJULFNBQTdCO0FBQ0Q7O0FBQ0QsUUFBSUMsT0FBSixFQUFhO0FBQ1hPLE1BQUFBLFVBQVUsQ0FBQ0UsWUFBWCxHQUEwQlQsT0FBMUI7QUFDRDs7QUFDRCxRQUFJSSxRQUFKLEVBQWM7QUFDWkcsTUFBQUEsVUFBVSxDQUFDckIsYUFBWCxHQUEyQixRQUEzQjtBQUNEOztBQUNELFFBQUksQ0FBQ1UsUUFBRCxJQUFhLENBQUNNLEdBQWxCLEVBQXVCO0FBQ3JCLGFBQU8sZ0NBQW1CLFVBQVUsQ0FBQ0QsT0FBRCxDQUE3QixDQUF1QyxLQUFLLENBQUNFLElBQUQsQ0FBNUMsQ0FBbUQsTUFBTSxDQUFDTCxXQUFELENBQXpELEdBQVA7QUFDRDs7QUFDRCxVQUFNWSxJQUFJLEdBQ1JSLEdBQUcsSUFBSUQsT0FBUCxHQUNFLG1CQUFNLE1BQU0sQ0FBQyxDQUFDdkIsTUFBTSxDQUFDdUIsT0FBTyxHQUFHLFNBQUgsR0FBZSxjQUF2QixDQUFQLEVBQStDTSxVQUEvQyxDQUFELENBQVo7QUFDUixVQUFVLGdDQUFtQixVQUFVLENBQUNOLE9BQUQsQ0FBN0IsQ0FBdUMsS0FBSyxDQUFDRSxJQUFELENBQTVDLENBQW1ELE1BQU0sQ0FBQ0wsV0FBRCxDQUF6RDtBQUNWLFVBQVUsQ0FBQ0ksR0FBRyxLQUFLLE9BQU9BLEdBQVAsS0FBZSxRQUFmLEdBQTBCLG1CQUFNLE1BQU0sQ0FBQztBQUFFTCxRQUFBQSxLQUFLLEVBQUVDO0FBQVQsT0FBRCxDQUFaLENBQXFDLENBQUNJLEdBQUQsQ0FBSyxvQkFBcEUsR0FBOEUsbUJBQU0sQ0FBQ0EsR0FBRCxDQUFLLG9CQUE5RixDQUFKO0FBQ1YsUUFBUSxvQkFKRixHQUtJLElBTk47O0FBT0EsUUFBSSxDQUFDTixRQUFELElBQWFNLEdBQWpCLEVBQXNCO0FBQ3BCLGFBQU9RLElBQVA7QUFDRDs7QUFDRCxXQUNFLG1CQUFNLElBQUlMLFVBQUosQ0FBTjtBQUNOLFFBQVEsQ0FBQ0ssSUFBRDtBQUNSLFFBQVEsQ0FBQ2QsUUFBRDtBQUNSLE1BQU0sb0JBSkY7QUFNRDs7QUFoRHdEOzs7QUFBdENILE0sQ0FDWmtCLFksR0FBNEI7QUFDakNaLEVBQUFBLFNBQVMsRUFBRSwyQkFEc0I7QUFFakNFLEVBQUFBLE9BQU8sRUFBRSxJQUZ3QjtBQUdqQ0osRUFBQUEsS0FBSyxFQUFFLE1BSDBCO0FBSWpDTSxFQUFBQSxJQUFJLEVBQUU7QUFKMkIsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBWaWV3LCBWaWV3UHJvcHMsIFRleHQsIFN0eWxlU2hlZXQsIEFjdGl2aXR5SW5kaWNhdG9yLCBBY3Rpdml0eUluZGljYXRvclByb3BzIH0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuY29uc3Qgc3R5bGVzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuICBkZWZhbHV0OiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICB6SW5kZXg6IDk5LFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgfSxcbiAgaW5kaWNhdG9yOiB7XG4gICAgbWFyZ2luUmlnaHQ6IDUsXG4gIH0sXG4gIHN0b3BBY3Rpdml0eToge1xuICAgIGRpc3BsYXk6ICdub25lJyxcbiAgfSxcbn0pO1xuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlclByb3BzIGV4dGVuZHMgVmlld1Byb3BzIHtcbiAgLyoqXG4gICAqIOWbvuagh+eahOWkp+WwjyAoZGVmYXVsdCBpcyBgc21hbGxgKVxuICAgKi9cbiAgc2l6ZT86ICdzbWFsbCcgfCAnbGFyZ2UnO1xuICAvKipcbiAgICogVGhlIGZvcmVncm91bmQgY29sb3Igb2YgdGhlIHNwaW5uZXIgKGRlZmF1bHQgaXMgYGdyYXlgKS5cbiAgICovXG4gIGNvbG9yPzogc3RyaW5nO1xuICAvKipcbiAgICog6YGu572p5bGC6aKc6ImyIChkZWZhdWx0IGlzIGByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpYClcbiAgICovXG4gIG1hc2tDb2xvcj86IHN0cmluZztcbiAgLyoqXG4gICAqIOaYr+aYvuekumBJbmRpY2F0b3Jg77yI6buY6K6k5YC85pivdHJ1Ze+8iei/mOaYr+makOiXj2BJbmRpY2F0b3Jg77yIZmFsc2XvvInjgIJcbiAgICovXG4gIGxvYWRpbmc/OiBib29sZWFuO1xuICAvKipcbiAgICog5Yqo55S75Zu+5qCH5LiO5paH5a2X5Z6C55u05pi+56S6XG4gICAqL1xuICB2ZXJ0aWNhbD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDorr7nva7mjInpkq7lnIbop5LvvIznlKjkuo7liqDovb3lhoXlrrnkuLrlnIbop5LnmoTmg4XlhrVcbiAgICovXG4gIHJvdW5kZWQ/OiBudW1iZXI7XG4gIC8qKlxuICAgKiDlvZPkvZzkuLrljIXoo7nlhYPntKDml7bvvIzlj6/ku6Xoh6rlrprkuYnmj4/ov7DmlofmoYhcbiAgICovXG4gIHRpcD86IFJlYWN0LlJlYWN0Tm9kZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZGVyIGV4dGVuZHMgQ29tcG9uZW50PExvYWRlclByb3BzPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHM6IExvYWRlclByb3BzID0ge1xuICAgIG1hc2tDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSknLFxuICAgIGxvYWRpbmc6IHRydWUsXG4gICAgY29sb3I6ICdncmF5JyxcbiAgICBzaXplOiAnc21hbGwnLFxuICB9O1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sXG4gICAgICBjb2xvcjogbG9hZGVyQ29sb3IsXG4gICAgICBtYXNrQ29sb3IsXG4gICAgICByb3VuZGVkLFxuICAgICAgbG9hZGluZyxcbiAgICAgIHRpcCxcbiAgICAgIHNpemUsXG4gICAgICB2ZXJ0aWNhbCxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgc3R5bGVQcm9wczogQWN0aXZpdHlJbmRpY2F0b3JQcm9wc1snc3R5bGUnXSA9IHt9O1xuICAgIGlmIChtYXNrQ29sb3IpIHtcbiAgICAgIHN0eWxlUHJvcHMuYmFja2dyb3VuZENvbG9yID0gbWFza0NvbG9yO1xuICAgIH1cbiAgICBpZiAocm91bmRlZCkge1xuICAgICAgc3R5bGVQcm9wcy5ib3JkZXJSYWRpdXMgPSByb3VuZGVkO1xuICAgIH1cbiAgICBpZiAodmVydGljYWwpIHtcbiAgICAgIHN0eWxlUHJvcHMuZmxleERpcmVjdGlvbiA9ICdjb2x1bW4nO1xuICAgIH1cbiAgICBpZiAoIWNoaWxkcmVuICYmICF0aXApIHtcbiAgICAgIHJldHVybiA8QWN0aXZpdHlJbmRpY2F0b3IgYW5pbWF0aW5nPXtsb2FkaW5nfSBzaXplPXtzaXplfSBjb2xvcj17bG9hZGVyQ29sb3J9IC8+O1xuICAgIH1cbiAgICBjb25zdCB0aXBzID1cbiAgICAgIHRpcCB8fCBsb2FkaW5nID8gKFxuICAgICAgICA8VmlldyBzdHlsZT17W3N0eWxlc1tsb2FkaW5nID8gJ2RlZmFsdXQnIDogJ3N0b3BBY3Rpdml0eSddLCBzdHlsZVByb3BzXX0+XG4gICAgICAgICAgPEFjdGl2aXR5SW5kaWNhdG9yIGFuaW1hdGluZz17bG9hZGluZ30gc2l6ZT17c2l6ZX0gY29sb3I9e2xvYWRlckNvbG9yfSAvPlxuICAgICAgICAgIHt0aXAgJiYgKHR5cGVvZiB0aXAgPT09ICdzdHJpbmcnID8gPFRleHQgc3R5bGU9e3sgY29sb3I6IGxvYWRlckNvbG9yIH19Pnt0aXB9PC9UZXh0PiA6IDxWaWV3Pnt0aXB9PC9WaWV3Pil9XG4gICAgICAgIDwvVmlldz5cbiAgICAgICkgOiBudWxsO1xuICAgIGlmICghY2hpbGRyZW4gJiYgdGlwKSB7XG4gICAgICByZXR1cm4gdGlwcztcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxWaWV3IHsuLi5vdGhlclByb3BzfT5cbiAgICAgICAge3RpcHN9XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvVmlldz5cbiAgICApO1xuICB9XG59XG4iXX0=