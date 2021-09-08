"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _MaskLayer = _interopRequireDefault(require("../MaskLayer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = (props = {}) => {
  const {
    onClosed,
    visible,
    children,
    placement = 'bottom',
    ...otherProps
  } = props;
  const [display] = (0, _react.useState)('none');
  let [layoutHeight, setLayoutHeight] = (0, _react.useState)(0);
  let [layoutWidth, setLayoutWidth] = (0, _react.useState)(0);
  const [translateValue] = (0, _react.useState)(new _reactNative.Animated.Value(0));
  const isVertical = /^(top|bottom)$/.test(placement);
  const isHorizontal = /^(left|right)$/.test(placement);

  function onDismiss() {
    onClosed && onClosed();
  }

  function measureContainer(event) {
    const {
      height,
      width
    } = event.nativeEvent.layout;

    if (!layoutHeight && isVertical) {
      setLayoutHeight(height);
    }

    if (!layoutWidth && isHorizontal) {
      setLayoutWidth(width);
    }
  }

  function getTransformSize() {
    if (placement === 'top') {
      return -layoutHeight;
    }

    if (placement === 'bottom') {
      return layoutHeight;
    }

    if (placement === 'left') {
      return -layoutWidth;
    }

    if (placement === 'right') {
      return layoutWidth;
    }

    return 0;
  }

  (0, _react.useMemo)(() => {
    if (visible && (layoutHeight !== 0 || layoutWidth !== 0)) {
      translateValue.setValue(getTransformSize());

      _reactNative.Animated.parallel([_reactNative.Animated.spring(translateValue, {
        toValue: 0,
        overshootClamping: true,
        useNativeDriver: true
      })]).start();
    } else if (layoutHeight !== 0 || layoutWidth !== 0) {
      _reactNative.Animated.parallel([_reactNative.Animated.spring(translateValue, {
        toValue: getTransformSize(),
        overshootClamping: true,
        useNativeDriver: true
      })]).start();
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [visible, layoutHeight]);
  const translateStyle = {};

  if (isVertical) {
    translateStyle.translateY = translateValue;
  }

  if (isHorizontal) {
    translateStyle.translateX = translateValue;
  }

  const child = <_reactNative.Animated.View onLayout={measureContainer} style={[styles.content, placement && styles[placement], !layoutHeight && isVertical ? {
    display: display
  } : {}, !layoutWidth && isHorizontal ? {
    display: display
  } : {}, // // getTransformStyle(),
  {
    transform: [translateStyle]
  }]}>
      {children}
    </_reactNative.Animated.View>;
  return <_MaskLayer.default {...otherProps} visible={visible} onDismiss={onDismiss}>
      {child}
    </_MaskLayer.default>;
};

exports.default = _default;

const styles = _reactNative.StyleSheet.create({
  content: {
    backgroundColor: '#fff',
    position: 'absolute',
    zIndex: 9999
  },
  top: {
    top: 0,
    left: 0,
    right: 0
  },
  bottom: {
    bottom: 0,
    left: 0,
    right: 0
  },
  left: {
    bottom: 0,
    top: 0,
    left: 0
  },
  right: {
    bottom: 0,
    top: 0,
    right: 0
  }
});

module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Nb2RhbC9pbmRleC50c3giXSwibmFtZXMiOlsicHJvcHMiLCJvbkNsb3NlZCIsInZpc2libGUiLCJjaGlsZHJlbiIsInBsYWNlbWVudCIsIm90aGVyUHJvcHMiLCJkaXNwbGF5IiwibGF5b3V0SGVpZ2h0Iiwic2V0TGF5b3V0SGVpZ2h0IiwibGF5b3V0V2lkdGgiLCJzZXRMYXlvdXRXaWR0aCIsInRyYW5zbGF0ZVZhbHVlIiwiQW5pbWF0ZWQiLCJWYWx1ZSIsImlzVmVydGljYWwiLCJ0ZXN0IiwiaXNIb3Jpem9udGFsIiwib25EaXNtaXNzIiwibWVhc3VyZUNvbnRhaW5lciIsImV2ZW50IiwiaGVpZ2h0Iiwid2lkdGgiLCJuYXRpdmVFdmVudCIsImxheW91dCIsImdldFRyYW5zZm9ybVNpemUiLCJzZXRWYWx1ZSIsInBhcmFsbGVsIiwic3ByaW5nIiwidG9WYWx1ZSIsIm92ZXJzaG9vdENsYW1waW5nIiwidXNlTmF0aXZlRHJpdmVyIiwic3RhcnQiLCJ0cmFuc2xhdGVTdHlsZSIsInRyYW5zbGF0ZVkiLCJ0cmFuc2xhdGVYIiwiY2hpbGQiLCJzdHlsZXMiLCJjb250ZW50IiwidHJhbnNmb3JtIiwiU3R5bGVTaGVldCIsImNyZWF0ZSIsImJhY2tncm91bmRDb2xvciIsInBvc2l0aW9uIiwiekluZGV4IiwidG9wIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O2VBT2UsQ0FBQ0EsS0FBaUIsR0FBRyxFQUFyQixLQUE0QjtBQUN6QyxRQUFNO0FBQUVDLElBQUFBLFFBQUY7QUFBWUMsSUFBQUEsT0FBWjtBQUFxQkMsSUFBQUEsUUFBckI7QUFBK0JDLElBQUFBLFNBQVMsR0FBRyxRQUEzQztBQUFxRCxPQUFHQztBQUF4RCxNQUF1RUwsS0FBN0U7QUFDQSxRQUFNLENBQUNNLE9BQUQsSUFBWSxxQkFBMEIsTUFBMUIsQ0FBbEI7QUFDQSxNQUFJLENBQUNDLFlBQUQsRUFB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QSxHQUFHLEVBQUUsQ0FGRDtBQUdKQyxJQUFBQSxJQUFJLEVBQUU7QUFIRixHQWhCeUI7QUFxQi9CQyxFQUFBQSxLQUFLLEVBQUU7QUFDTEMsSUFBQUEsTUFBTSxFQUFFLENBREg7QUFFTEgsSUFBQUEsR0FBRyxFQUFFLENBRkE7QUFHTEUsSUFBQUEsS0FBSyxFQUFFO0FBSEY7QUFyQndCLENBQWxCLENBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBbmltYXRlZCwgU3R5bGVTaGVldCwgTGF5b3V0Q2hhbmdlRXZlbnQgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuaW1wb3J0IE1hc2tMYXllciwgeyBNYXNrTGF5ZXJQcm9wcyB9IGZyb20gJy4uL01hc2tMYXllcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9kYWxQcm9wcyBleHRlbmRzIE1hc2tMYXllclByb3BzIHtcbiAgcGxhY2VtZW50PzogJ3RvcCcgfCAncmlnaHQnIHwgJ2JvdHRvbScgfCAnbGVmdCc7XG4gIG9uQ2xvc2VkPzogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzOiBNb2RhbFByb3BzID0ge30pID0+IHtcbiAgY29uc3QgeyBvbkNsb3NlZCwgdmlzaWJsZSwgY2hpbGRyZW4sIHBsYWNlbWVudCA9ICdib3R0b20nLCAuLi5vdGhlclByb3BzIH0gPSBwcm9wcztcbiAgY29uc3QgW2Rpc3BsYXldID0gdXNlU3RhdGU8J25vbmUnIHwgJ2ZsZXgnPignbm9uZScpO1xuICBsZXQgW2xheW91dEhlaWdodCwgc2V0TGF5b3V0SGVpZ2h0XSA9IHVzZVN0YXRlKDApO1xuICBsZXQgW2xheW91dFdpZHRoLCBzZXRMYXlvdXRXaWR0aF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3RyYW5zbGF0ZVZhbHVlXSA9IHVzZVN0YXRlKG5ldyBBbmltYXRlZC5WYWx1ZSgwKSk7XG4gIGNvbnN0IGlzVmVydGljYWwgPSAvXih0b3B8Ym90dG9tKSQvLnRlc3QocGxhY2VtZW50KTtcbiAgY29uc3QgaXNIb3Jpem9udGFsID0gL14obGVmdHxyaWdodCkkLy50ZXN0KHBsYWNlbWVudCk7XG4gIGZ1bmN0aW9uIG9uRGlzbWlzcygpIHtcbiAgICBvbkNsb3NlZCAmJiBvbkNsb3NlZCgpO1xuICB9XG4gIGZ1bmN0aW9uIG1lYXN1cmVDb250YWluZXIoZXZlbnQ6IExheW91dENoYW5nZUV2ZW50KSB7XG4gICAgY29uc3QgeyBoZWlnaHQsIHdpZHRoIH0gPSBldmVudC5uYXRpdmVFdmVudC5sYXlvdXQ7XG4gICAgaWYgKCFsYXlvdXRIZWlnaHQgJiYgaXNWZXJ0aWNhbCkge1xuICAgICAgc2V0TGF5b3V0SGVpZ2h0KGhlaWdodCk7XG4gICAgfVxuICAgIGlmICghbGF5b3V0V2lkdGggJiYgaXNIb3Jpem9udGFsKSB7XG4gICAgICBzZXRMYXlvdXRXaWR0aCh3aWR0aCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGdldFRyYW5zZm9ybVNpemUoKSB7XG4gICAgaWYgKHBsYWNlbWVudCA9PT0gJ3RvcCcpIHtcbiAgICAgIHJldHVybiAtbGF5b3V0SGVpZ2h0O1xuICAgIH1cbiAgICBpZiAocGxhY2VtZW50ID09PSAnYm90dG9tJykge1xuICAgICAgcmV0dXJuIGxheW91dEhlaWdodDtcbiAgICB9XG4gICAgaWYgKHBsYWNlbWVudCA9PT0gJ2xlZnQnKSB7XG4gICAgICByZXR1cm4gLWxheW91dFdpZHRoO1xuICAgIH1cbiAgICBpZiAocGxhY2VtZW50ID09PSAncmlnaHQnKSB7XG4gICAgICByZXR1cm4gbGF5b3V0V2lkdGg7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9XG4gIHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmICh2aXNpYmxlICYmIChsYXlvdXRIZWlnaHQgIT09IDAgfHwgbGF5b3V0V2lkdGggIT09IDApKSB7XG4gICAgICB0cmFuc2xhdGVWYWx1ZS5zZXRWYWx1ZShnZXRUcmFuc2Zvcm1TaXplKCkpO1xuICAgICAgQW5pbWF0ZWQucGFyYWxsZWwoW1xuICAgICAgICBBbmltYXRlZC5zcHJpbmcodHJhbnNsYXRlVmFsdWUsIHtcbiAgICAgICAgICB0b1ZhbHVlOiAwLFxuICAgICAgICAgIG92ZXJzaG9vdENsYW1waW5nOiB0cnVlLFxuICAgICAgICAgIHVzZU5hdGl2ZURyaXZlcjogdHJ1ZSxcbiAgICAgICAgfSksXG4gICAgICBdKS5zdGFydCgpO1xuICAgIH0gZWxzZSBpZiAobGF5b3V0SGVpZ2h0ICE9PSAwIHx8IGxheW91dFdpZHRoICE9PSAwKSB7XG4gICAgICBBbmltYXRlZC5wYXJhbGxlbChbXG4gICAgICAgIEFuaW1hdGVkLnNwcmluZyh0cmFuc2xhdGVWYWx1ZSwge1xuICAgICAgICAgIHRvVmFsdWU6IGdldFRyYW5zZm9ybVNpemUoKSxcbiAgICAgICAgICBvdmVyc2hvb3RDbGFtcGluZzogdHJ1ZSxcbiAgICAgICAgICB1c2VOYXRpdmVEcml2ZXI6IHRydWUsXG4gICAgICAgIH0pLFxuICAgICAgXSkuc3RhcnQoKTtcbiAgICB9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbdmlzaWJsZSwgbGF5b3V0SGVpZ2h0XSk7XG4gIGNvbnN0IHRyYW5zbGF0ZVN0eWxlID0ge30gYXMge1xuICAgIHRyYW5zbGF0ZVk6IEFuaW1hdGVkLlZhbHVlO1xuICAgIHRyYW5zbGF0ZVg6IEFuaW1hdGVkLlZhbHVlO1xuICB9O1xuICBpZiAoaXNWZXJ0aWNhbCkge1xuICAgIHRyYW5zbGF0ZVN0eWxlLnRyYW5zbGF0ZVkgPSB0cmFuc2xhdGVWYWx1ZTtcbiAgfVxuICBpZiAoaXNIb3Jpem9udGFsKSB7XG4gICAgdHJhbnNsYXRlU3R5bGUudHJhbnNsYXRlWCA9IHRyYW5zbGF0ZVZhbHVlO1xuICB9XG4gIGNvbnN0IGNoaWxkID0gKFxuICAgIDxBbmltYXRlZC5WaWV3XG4gICAgICBvbkxheW91dD17bWVhc3VyZUNvbnRhaW5lcn1cbiAgICAgIHN0eWxlPXtbXG4gICAgICAgIHN0eWxlcy5jb250ZW50LFxuICAgICAgICBwbGFjZW1lbnQgJiYgc3R5bGVzW3BsYWNlbWVudF0sXG4gICAgICAgICFsYXlvdXRIZWlnaHQgJiYgaXNWZXJ0aWNhbCA/IHsgZGlzcGxheTogZGlzcGxheSB9IDoge30sXG4gICAgICAgICFsYXlvdXRXaWR0aCAmJiBpc0hvcml6b250YWwgPyB7IGRpc3BsYXk6IGRpc3BsYXkgfSA6IHt9LFxuICAgICAgICAvLyAvLyBnZXRUcmFuc2Zvcm1TdHlsZSgpLFxuICAgICAgICB7IHRyYW5zZm9ybTogW3RyYW5zbGF0ZVN0eWxlXSB9LFxuICAgICAgXX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9BbmltYXRlZC5WaWV3PlxuICApO1xuICByZXR1cm4gKFxuICAgIDxNYXNrTGF5ZXIgey4uLm90aGVyUHJvcHN9IHZpc2libGU9e3Zpc2libGV9IG9uRGlzbWlzcz17b25EaXNtaXNzfT5cbiAgICAgIHtjaGlsZH1cbiAgICA8L01hc2tMYXllcj5cbiAgKTtcbn07XG5cbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgY29udGVudDoge1xuICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHpJbmRleDogOTk5OSxcbiAgfSxcbiAgdG9wOiB7XG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgcmlnaHQ6IDAsXG4gIH0sXG4gIGJvdHRvbToge1xuICAgIGJvdHRvbTogMCxcbiAgICBsZWZ0OiAwLFxuICAgIHJpZ2h0OiAwLFxuICB9LFxuICBsZWZ0OiB7XG4gICAgYm90dG9tOiAwLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICB9LFxuICByaWdodDoge1xuICAgIGJvdHRvbTogMCxcbiAgICB0b3A6IDAsXG4gICAgcmlnaHQ6IDAsXG4gIH0sXG59KTtcbiJdfQ==