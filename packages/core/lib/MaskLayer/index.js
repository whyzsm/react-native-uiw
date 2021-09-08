"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _utils = require("../utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const styles = _reactNative.StyleSheet.create({
  position: {
    position: 'absolute',
    backgroundColor: 'transparent',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 9998
  },
  backdrop: {
    backgroundColor: '#000'
  },
  content: {
    backgroundColor: '#fff',
    position: 'absolute'
  }
});

var _default = (props = {}) => {
  const {
    maskClosable = true,
    children,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    visible: _vis,
    opacity = 0.6,
    onDismiss,
    animatedParallelShow = [],
    animatedParallelHide = [],
    ...otherProps
  } = props;
  const [visible, setVisible] = (0, _react.useState)(!!props.visible);
  const preVisible = (0, _utils.usePrevious)(props.visible);
  const [visibleModal, setVisibleModal] = (0, _react.useState)(false);
  const [bgOpacity] = (0, _react.useState)(new _reactNative.Animated.Value(0));
  (0, _react.useMemo)(() => {
    if (preVisible !== props.visible && props.visible) {
      setVisible(!!props.visible);
      setVisibleModal(false);

      _reactNative.Animated.parallel([_reactNative.Animated.spring(bgOpacity, {
        toValue: opacity,
        overshootClamping: true,
        useNativeDriver: true
      }), ...animatedParallelShow]).start();
    } else if (preVisible !== props.visible && !props.visible) {
      _reactNative.Animated.parallel([_reactNative.Animated.spring(bgOpacity, {
        toValue: 0,
        overshootClamping: true,
        useNativeDriver: true
      }), ...animatedParallelHide]).start(() => {
        setVisible(!!props.visible);
        setVisibleModal(true);
      });
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [props.visible]);
  const backdropContent = <_reactNative.Animated.View style={[styles.position, styles.backdrop, {
    opacity: bgOpacity
  }]} />;
  let backdrop = <_reactNative.TouchableOpacity activeOpacity={1} style={[styles.position]} onPress={() => onDismiss && onDismiss()}>
      {backdropContent}
    </_reactNative.TouchableOpacity>;
  let isTrue = visible || false;

  if (!visible && visibleModal) {
    isTrue = false;
  }

  return <_reactNative.Modal transparent={true} animationType="none" {...otherProps} visible={isTrue}>
      {maskClosable ? backdrop : backdropContent}
      {children && _react.default.Children.toArray(children).map(child => {
      if (!_react.default.isValidElement(child)) {
        return;
      }

      return _react.default.cloneElement(child, { ...child.props,
        ...{
          style: [{
            zIndex: 9999
          }, child.props.style]
        }
      });
    })}
    </_reactNative.Modal>;
};

exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9NYXNrTGF5ZXIvaW5kZXgudHN4Il0sIm5hbWVzIjpbInN0eWxlcyIsIlN0eWxlU2hlZXQiLCJjcmVhdGUiLCJwb3NpdGlvbiIsImJhY2tncm91bmRDb2xvciIsInRvcCIsImJvdHRvbSIsImxlZnQiLCJyaWdodCIsInpJbmRleCIsImJhY2tkcm9wIiwiY29udGVudCIsInByb3BzIiwibWFza0Nsb3NhYmxlIiwiY2hpbGRyZW4iLCJ2aXNpYmxlIiwiX3ZpcyIsIm9wYWNpdHkiLCJvbkRpc21pc3MiLCJhbmltYXRlZFBhcmFsbGVsU2hvdyIsImFuaW1hdGVkUGFyYWxsZWxIaWRlIiwib3RoZXJQcm9wcyIsInNldFZpc2libGUiLCJwcmVWaXNpYmxlIiwidmlzaWJsZU1vZGFsIiwic2V0VmlzaWJsZU1vZGFsIiwiYmdPcGFjaXR5IiwiQW5pbWF0ZWQiLCJWYWx1ZSIsInBhcmFsbGVsIiwic3ByaW5nIiwidG9WYWx1ZSIsIm92ZXJzaG9vdENsYW1waW5nIiwidXNlTmF0aXZlRHJpdmVyIiwic3RhcnQiLCJiYWNrZHJvcENvbnRlbnQiLCJpc1RydWUiLCJSZWFjdCIsIkNoaWxkcmVuIiwidG9BcnJheSIsIm1hcCIsImNoaWxkIiwiaXNWYWxpZEVsZW1lbnQiLCJjbG9uZUVsZW1lbnQiLCJzdHlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxNQUFNQSxNQUFNLEdBQUdDLHdCQUFXQyxNQUFYLENBQWtCO0FBQy9CQyxFQUFBQSxRQUFRLEVBQUU7QUFDUkEsSUFBQUEsUUFBUSxFQUFFLFVBREY7QUFFUkMsSUFBQUEsZUFBZSxFQUFFLGFBRlQ7QUFHUkMsSUFBQUEsR0FBRyxFQUFFLENBSEc7QUFJUkMsSUFBQUEsTUFBTSxFQUFFLENBSkE7QUFLUkMsSUFBQUEsSUFBSSxFQUFFLENBTEU7QUFNUkMsSUFBQUEsS0FBSyxFQUFFLENBTkM7QUFPUkMsSUFBQUEsTUFBTSxFQUFFO0FBUEEsR0FEcUI7QUFVL0JD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LGVBQUQ7QUFDTixJQUFJLGdDQUhGO0FBS0EsTUFBSUMsTUFBTSxHQUFHckIsT0FBTyxJQUFJLEtBQXhCOztBQUNBLE1BQUksQ0FBQ0EsT0FBRCxJQUFZUyxZQUFoQixFQUE4QjtBQUM1QlksSUFBQUEsTUFBTSxHQUFHLEtBQVQ7QUFDRDs7QUFDRCxTQUNFLG9CQUFPLFlBQVksQ0FBQyxJQUFELENBQW5CLENBQTBCLGNBQWMsTUFBeEMsQ0FBK0MsSUFBSWYsVUFBSixDQUEvQyxDQUErRCxRQUFRLENBQUNlLE1BQUQsQ0FBdkU7QUFDSixNQUFNLENBQUN2QixZQUFZLEdBQUdILFFBQUgsR0FBY3lCLGVBQTNCO0FBQ04sTUFBTSxDQUFDckIsUUFBUSxJQUNQdUIsZUFBTUMsUUFBTixDQUFlQyxPQUFmLENBQXVCekIsUUFBdkIsRUFBaUMwQixHQUFqQyxDQUFzQ0MsS0FBRCxJQUFXO0FBQzlDLFVBQUksQ0FBQ0osZUFBTUssY0FBTixDQUFxQkQsS0FBckIsQ0FBTCxFQUFrQztBQUNoQztBQUNEOztBQUNELGFBQU9KLGVBQU1NLFlBQU4sQ0FBbUJGLEtBQW5CLEVBQTBCLEVBQy9CLEdBQUdBLEtBQUssQ0FBQzdCLEtBRHNCO0FBRS9CLFdBQUc7QUFBRWdDLFVBQUFBLEtBQUssRUFBRSxDQUFDO0FBQUVuQyxZQUFBQSxNQUFNLEVBQUU7QUFBVixXQUFELEVBQW1CZ0MsS0FBSyxDQUFDN0IsS0FBTixDQUFZZ0MsS0FBL0I7QUFBVDtBQUY0QixPQUExQixDQUFQO0FBSUQsS0FSRCxDQURGO0FBVU4sSUFBSSxxQkFiRjtBQWVELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNb2RhbCwgTW9kYWxQcm9wcyBhcyBSTk1vZGFsUHJvcHMsIEFuaW1hdGVkLCBUb3VjaGFibGVPcGFjaXR5LCBTdHlsZVNoZWV0IH0gZnJvbSAncmVhY3QtbmF0aXZlJztcbmltcG9ydCB7IHVzZVByZXZpb3VzIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5jb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gIHBvc2l0aW9uOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgIHRvcDogMCxcbiAgICBib3R0b206IDAsXG4gICAgbGVmdDogMCxcbiAgICByaWdodDogMCxcbiAgICB6SW5kZXg6IDk5OTgsXG4gIH0sXG4gIGJhY2tkcm9wOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzAwMCcsXG4gIH0sXG4gIGNvbnRlbnQ6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgfSxcbn0pO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1hc2tMYXllclByb3BzIGV4dGVuZHMgUk5Nb2RhbFByb3BzIHtcbiAgLyoqXG4gICAqIOmBrue9qeWxguaYr+WQpuemgeatoueCueWHu1xuICAgKiBkZWZ1bHQ6IGB0cnVlYFxuICAgKi9cbiAgbWFza0Nsb3NhYmxlPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOaYr+WQpumakOiXj1xuICAgKi9cbiAgdmlzaWJsZT86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDpga7nvanlsYLpgI/mmI7luqZcbiAgICogZGVmdWx0OiBgMC42YFxuICAgKi9cbiAgb3BhY2l0eT86IG51bWJlcjtcbiAgLyoqXG4gICAqIOmakOiXj+a2iOmZpOWbnuiwg+S6i+S7tlxuICAgKi9cbiAgb25EaXNtaXNzPzogKCkgPT4gdm9pZDtcbiAgYW5pbWF0ZWRQYXJhbGxlbFNob3c/OiBBbmltYXRlZC5Db21wb3NpdGVBbmltYXRpb25bXTtcbiAgYW5pbWF0ZWRQYXJhbGxlbEhpZGU/OiBBbmltYXRlZC5Db21wb3NpdGVBbmltYXRpb25bXTtcbiAgY2hpbGRyZW4/OiBKU1guRWxlbWVudDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzOiBNYXNrTGF5ZXJQcm9wcyA9IHt9KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBtYXNrQ2xvc2FibGUgPSB0cnVlLFxuICAgIGNoaWxkcmVuLFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICB2aXNpYmxlOiBfdmlzLFxuICAgIG9wYWNpdHkgPSAwLjYsXG4gICAgb25EaXNtaXNzLFxuICAgIGFuaW1hdGVkUGFyYWxsZWxTaG93ID0gW10sXG4gICAgYW5pbWF0ZWRQYXJhbGxlbEhpZGUgPSBbXSxcbiAgICAuLi5vdGhlclByb3BzXG4gIH0gPSBwcm9wcztcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoISFwcm9wcy52aXNpYmxlKTtcbiAgY29uc3QgcHJlVmlzaWJsZSA9IHVzZVByZXZpb3VzPGJvb2xlYW4gfCB1bmRlZmluZWQ+KHByb3BzLnZpc2libGUpO1xuICBjb25zdCBbdmlzaWJsZU1vZGFsLCBzZXRWaXNpYmxlTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbYmdPcGFjaXR5XSA9IHVzZVN0YXRlKG5ldyBBbmltYXRlZC5WYWx1ZSgwKSk7XG4gIHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmIChwcmVWaXNpYmxlICE9PSBwcm9wcy52aXNpYmxlICYmIHByb3BzLnZpc2libGUpIHtcbiAgICAgIHNldFZpc2libGUoISFwcm9wcy52aXNpYmxlKTtcbiAgICAgIHNldFZpc2libGVNb2RhbChmYWxzZSk7XG4gICAgICBBbmltYXRlZC5wYXJhbGxlbChbXG4gICAgICAgIEFuaW1hdGVkLnNwcmluZyhiZ09wYWNpdHksIHtcbiAgICAgICAgICB0b1ZhbHVlOiBvcGFjaXR5LFxuICAgICAgICAgIG92ZXJzaG9vdENsYW1waW5nOiB0cnVlLFxuICAgICAgICAgIHVzZU5hdGl2ZURyaXZlcjogdHJ1ZSxcbiAgICAgICAgfSksXG4gICAgICAgIC4uLmFuaW1hdGVkUGFyYWxsZWxTaG93LFxuICAgICAgXSkuc3RhcnQoKTtcbiAgICB9IGVsc2UgaWYgKHByZVZpc2libGUgIT09IHByb3BzLnZpc2libGUgJiYgIXByb3BzLnZpc2libGUpIHtcbiAgICAgIEFuaW1hdGVkLnBhcmFsbGVsKFtcbiAgICAgICAgQW5pbWF0ZWQuc3ByaW5nKGJnT3BhY2l0eSwge1xuICAgICAgICAgIHRvVmFsdWU6IDAsXG4gICAgICAgICAgb3ZlcnNob290Q2xhbXBpbmc6IHRydWUsXG4gICAgICAgICAgdXNlTmF0aXZlRHJpdmVyOiB0cnVlLFxuICAgICAgICB9KSxcbiAgICAgICAgLi4uYW5pbWF0ZWRQYXJhbGxlbEhpZGUsXG4gICAgICBdKS5zdGFydCgoKSA9PiB7XG4gICAgICAgIHNldFZpc2libGUoISFwcm9wcy52aXNpYmxlKTtcbiAgICAgICAgc2V0VmlzaWJsZU1vZGFsKHRydWUpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW3Byb3BzLnZpc2libGVdKTtcbiAgY29uc3QgYmFja2Ryb3BDb250ZW50ID0gPEFuaW1hdGVkLlZpZXcgc3R5bGU9e1tzdHlsZXMucG9zaXRpb24sIHN0eWxlcy5iYWNrZHJvcCwgeyBvcGFjaXR5OiBiZ09wYWNpdHkgfV19IC8+O1xuICBsZXQgYmFja2Ryb3AgPSAoXG4gICAgPFRvdWNoYWJsZU9wYWNpdHkgYWN0aXZlT3BhY2l0eT17MX0gc3R5bGU9e1tzdHlsZXMucG9zaXRpb25dfSBvblByZXNzPXsoKSA9PiBvbkRpc21pc3MgJiYgb25EaXNtaXNzKCl9PlxuICAgICAge2JhY2tkcm9wQ29udGVudH1cbiAgICA8L1RvdWNoYWJsZU9wYWNpdHk+XG4gICk7XG4gIGxldCBpc1RydWUgPSB2aXNpYmxlIHx8IGZhbHNlO1xuICBpZiAoIXZpc2libGUgJiYgdmlzaWJsZU1vZGFsKSB7XG4gICAgaXNUcnVlID0gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8TW9kYWwgdHJhbnNwYXJlbnQ9e3RydWV9IGFuaW1hdGlvblR5cGU9XCJub25lXCIgey4uLm90aGVyUHJvcHN9IHZpc2libGU9e2lzVHJ1ZX0+XG4gICAgICB7bWFza0Nsb3NhYmxlID8gYmFja2Ryb3AgOiBiYWNrZHJvcENvbnRlbnR9XG4gICAgICB7Y2hpbGRyZW4gJiZcbiAgICAgICAgUmVhY3QuQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbikubWFwKChjaGlsZCkgPT4ge1xuICAgICAgICAgIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgICAgIC4uLmNoaWxkLnByb3BzLFxuICAgICAgICAgICAgLi4ueyBzdHlsZTogW3sgekluZGV4OiA5OTk5IH0sIGNoaWxkLnByb3BzLnN0eWxlXSB9LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KX1cbiAgICA8L01vZGFsPlxuICApO1xufTtcbiJdfQ==