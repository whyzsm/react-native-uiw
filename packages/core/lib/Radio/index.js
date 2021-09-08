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
  defalut: {},
  checkBg: {
    borderRadius: 999,
    borderColor: 'rgb(189, 193, 204)',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  check: {
    borderRadius: 999,
    backgroundColor: '#4DD964'
  },
  touch: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  label: {
    marginLeft: 6
  }
});

class Radio extends _react.Component {
  constructor(props) {
    super(props);

    this.handlePress = event => {
      const {
        onPress
      } = this.props;
      this.setState({
        checked: true
      }, () => {
        this.animatedStart(true);
        onPress && onPress(event);
      });
    };

    this.state = {
      checked: props.checked,
      sizeValue: new _reactNative.Animated.Value(0)
    };
  }

  componentDidMount() {
    // this.setState({
    //   checked: this.props.checked,
    // });
    this.animatedStart(this.props.checked);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.checked !== this.props.checked) {
      this.setState({
        checked: nextProps.checked
      }, () => {
        this.animatedStart(nextProps.checked);
      });
    }
  }

  animatedStart(checked) {
    if (checked) {
      _reactNative.Animated.spring(this.state.sizeValue, {
        toValue: this.props.thumbSize,
        overshootClamping: true,
        useNativeDriver: false
      }).start();
    } else {
      _reactNative.Animated.spring(this.state.sizeValue, {
        toValue: 0,
        overshootClamping: true,
        useNativeDriver: false
      }).start();
    }
  }

  render() {
    const {
      style,
      color,
      circleSize,
      thumbSize,
      disabled,
      ...otherProps
    } = this.props;
    const sizeValue = this.state.sizeValue.interpolate({
      inputRange: [0, thumbSize],
      outputRange: [0, thumbSize] // extrapolate: 'clamp',

    });
    const backgroundColor = disabled ? color : '#008EF0';
    const borderColor = disabled ? color : '#bdc1cc';
    return <_reactNative.View style={[styles.defalut, style]} {...otherProps}>
        <_reactNative.TouchableOpacity disabled={disabled} style={[styles.touch]} onPress={this.handlePress}>
          <_reactNative.Animated.View style={[styles.checkBg, {
          width: circleSize,
          height: circleSize,
          borderColor
        }]}>
            <_reactNative.Animated.View style={[styles.check, {
            width: sizeValue,
            height: sizeValue,
            backgroundColor
          }]} />
          </_reactNative.Animated.View>
          {this.props.children && <MaybeTextOrView // eslint-disable-next-line react-native/no-inline-styles
        style={[styles.label, {
          opacity: disabled ? 0.3 : 1
        }]}>
              {this.props.children}
            </MaybeTextOrView>}
        </_reactNative.TouchableOpacity>
      </_reactNative.View>;
  }

}

exports.default = Radio;
Radio.defaultProps = {
  checked: false,
  circleSize: 20,
  color: '#c3c5c7',
  thumbSize: 12
};
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9SYWRpby9pbmRleC50c3giXSwibmFtZXMiOlsiTWF5YmVUZXh0T3JWaWV3IiwiY2hpbGRyZW4iLCJvdGhlclByb3BzIiwidHlwZSIsImRpc3BsYXlOYW1lIiwic3R5bGVzIiwiU3R5bGVTaGVldCIsImNyZWF0ZSIsImRlZmFsdXQiLCJjaGVja0JnIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJXaWR0aCIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImNoZWNrIiwiYmFja2dyb3VuZENvbG9yIiwidG91Y2giLCJmbGV4RGlyZWN0aW9uIiwibGFiZWwiLCJtYXJnaW5MZWZ0IiwiUmFkaW8iLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiaGFuZGxlUHJlc3MiLCJldmVudCIsIm9uUHJlc3MiLCJzZXRTdGF0ZSIsImNoZWNrZWQiLCJhbmltYXRlZFN0YXJ0Iiwic3RhdGUiLCJzaXplVmFsdWUiLCJBbmltYXRlZCIsIlZhbHVlIiwiY29tcG9uZW50RGlkTW91bnQiLCJVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIm5leHRQcm9wcyIsInNwcmluZyIsInRvVmFsdWUiLCJ0aHVtYlNpemUiLCJvdmVyc2hvb3RDbGFtcGluZyIsInVzZU5hdGl2ZURyaXZlciIsInN0YXJ0IiwicmVuZGVyIiwic3R5bGUiLCJjb2xvciIsImNpcmNsZVNpemUiLCJkaXNhYmxlZCIsImludGVycG9sYXRlIiwiaW5wdXRSYW5nZSIsIm91dHB1dFJhbmdlIiwid2lkdGgiLCJoZWlnaHQiLCJvcGFjaXR5IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7OztBQWVBLFNBQVNBLGVBQVQsQ0FBeUI7QUFBRUMsRUFBQUEsUUFBRjtBQUFZLEtBQUdDO0FBQWYsQ0FBekIsRUFBb0c7QUFDbEcsTUFBSSxPQUFPRCxRQUFQLEtBQW9CLFFBQXBCLElBQWlDQSxRQUFRLElBQUtB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QUFyQjtBQUNWLFlBQVksQ0FBQyxzQkFBUyxJQUFWLENBQWUsTUFBTSxDQUFDLENBQUNOLE1BQU0sQ0FBQ1UsS0FBUixFQUFlO0FBQUVxQyxZQUFBQSxLQUFLLEVBQUVwQixTQUFUO0FBQW9CcUIsWUFBQUEsTUFBTSxFQUFFckIsU0FBNUI7QUFBdUNoQixZQUFBQTtBQUF2QyxXQUFmLENBQUQsQ0FBckI7QUFDWixVQUFVLEVBQUUsc0JBQVMsSUFBWDtBQUNWLFVBQVUsQ0FBQyxLQUFLUSxLQUFMLENBQVd2QixRQUFYLElBQ0MsQ0FBQyxlQUFELENBQ0U7QUFDQSxjQUFNLENBQUMsQ0FBQ0ksTUFBTSxDQUFDYyxLQUFSLEVBQWU7QUFBRW1DLFVBQUFBLE9BQU8sRUFBRU4sUUFBUSxHQUFHLEdBQUgsR0FBUztBQUE1QixTQUFmLENBQUQsQ0FGUjtBQUlaLGNBQWMsQ0FBQyxLQUFLeEIsS0FBTCxDQUFXdkIsUUFBWjtBQUNkLFlBQVksRUFBRSxlQUFGLENBTkY7QUFRVixRQUFRO0FBQ1IsTUFBTSxvQkFmRjtBQWlCRDs7QUEzRWtFOzs7QUFBaERvQixLLENBQ1prQyxZLEdBQTJCO0FBQ2hDMUIsRUFBQUEsT0FBTyxFQUFFLEtBRHVCO0FBRWhDa0IsRUFBQUEsVUFBVSxFQUFFLEVBRm9CO0FBR2hDRCxFQUFBQSxLQUFLLEVBQUUsU0FIeUI7QUFJaENOLEVBQUFBLFNBQVMsRUFBRTtBQUpxQixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIFZpZXcsXG4gIFZpZXdQcm9wcyxcbiAgQW5pbWF0ZWQsXG4gIFRleHQsXG4gIFRleHRQcm9wcyxcbiAgVG91Y2hhYmxlT3BhY2l0eSxcbiAgR2VzdHVyZVJlc3BvbmRlckV2ZW50LFxuICBTdHlsZVNoZWV0LFxufSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG5pbnRlcmZhY2UgTWF5YmVUZXh0T3JWaWV3UHJvcHMge1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZTtcbn1cblxuZnVuY3Rpb24gTWF5YmVUZXh0T3JWaWV3KHsgY2hpbGRyZW4sIC4uLm90aGVyUHJvcHMgfTogTWF5YmVUZXh0T3JWaWV3UHJvcHMgJiBUZXh0UHJvcHMgJiBWaWV3UHJvcHMpIHtcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycgfHwgKGNoaWxkcmVuICYmIChjaGlsZHJlbiBhcyBhbnkpLnR5cGUuZGlzcGxheU5hbWUgPT09ICdUZXh0JykpIHtcbiAgICByZXR1cm4gPFRleHQgey4uLm90aGVyUHJvcHN9PntjaGlsZHJlbn08L1RleHQ+O1xuICB9XG4gIHJldHVybiA8VmlldyB7Li4ub3RoZXJQcm9wc30+e2NoaWxkcmVufTwvVmlldz47XG59XG5cbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgZGVmYWx1dDoge30sXG4gIGNoZWNrQmc6IHtcbiAgICBib3JkZXJSYWRpdXM6IDk5OSxcbiAgICBib3JkZXJDb2xvcjogJ3JnYigxODksIDE5MywgMjA0KScsXG4gICAgYm9yZGVyV2lkdGg6IDEsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICB9LFxuICBjaGVjazoge1xuICAgIGJvcmRlclJhZGl1czogOTk5LFxuICAgIGJhY2tncm91bmRDb2xvcjogJyM0REQ5NjQnLFxuICB9LFxuICB0b3VjaDoge1xuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICB9LFxuICBsYWJlbDoge1xuICAgIG1hcmdpbkxlZnQ6IDYsXG4gIH0sXG59KTtcblxuZXhwb3J0IGludGVyZmFjZSBSYWRpb1Byb3BzIGV4dGVuZHMgVmlld1Byb3BzIHtcbiAgY2hlY2tlZD86IGJvb2xlYW47XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgY2lyY2xlU2l6ZT86IG51bWJlcjtcbiAgY29sb3I/OiBzdHJpbmc7XG4gIHRodW1iU2l6ZT86IG51bWJlcjtcbiAgb25QcmVzcz86IChldmVudDogR2VzdHVyZVJlc3BvbmRlckV2ZW50KSA9PiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJhZGlvU3RhdGUge1xuICBzaXplVmFsdWU6IEFuaW1hdGVkLlZhbHVlO1xuICBjaGVja2VkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFkaW8gZXh0ZW5kcyBDb21wb25lbnQ8UmFkaW9Qcm9wcywgUmFkaW9TdGF0ZT4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzOiBSYWRpb1Byb3BzID0ge1xuICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgIGNpcmNsZVNpemU6IDIwLFxuICAgIGNvbG9yOiAnI2MzYzVjNycsXG4gICAgdGh1bWJTaXplOiAxMixcbiAgfTtcbiAgY29uc3RydWN0b3IocHJvcHM6IFJhZGlvUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNoZWNrZWQ6IHByb3BzLmNoZWNrZWQsXG4gICAgICBzaXplVmFsdWU6IG5ldyBBbmltYXRlZC5WYWx1ZSgwKSxcbiAgICB9O1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIHRoaXMuc2V0U3RhdGUoe1xuICAgIC8vICAgY2hlY2tlZDogdGhpcy5wcm9wcy5jaGVja2VkLFxuICAgIC8vIH0pO1xuICAgIHRoaXMuYW5pbWF0ZWRTdGFydCh0aGlzLnByb3BzLmNoZWNrZWQpO1xuICB9XG4gIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogUmFkaW9Qcm9wcykge1xuICAgIGlmIChuZXh0UHJvcHMuY2hlY2tlZCAhPT0gdGhpcy5wcm9wcy5jaGVja2VkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgY2hlY2tlZDogbmV4dFByb3BzLmNoZWNrZWQgfSwgKCkgPT4ge1xuICAgICAgICB0aGlzLmFuaW1hdGVkU3RhcnQobmV4dFByb3BzLmNoZWNrZWQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGFuaW1hdGVkU3RhcnQoY2hlY2tlZD86IGJvb2xlYW4pIHtcbiAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgQW5pbWF0ZWQuc3ByaW5nKHRoaXMuc3RhdGUuc2l6ZVZhbHVlLCB7XG4gICAgICAgIHRvVmFsdWU6IHRoaXMucHJvcHMudGh1bWJTaXplISxcbiAgICAgICAgb3ZlcnNob290Q2xhbXBpbmc6IHRydWUsXG4gICAgICAgIHVzZU5hdGl2ZURyaXZlcjogZmFsc2UsXG4gICAgICB9KS5zdGFydCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBBbmltYXRlZC5zcHJpbmcodGhpcy5zdGF0ZS5zaXplVmFsdWUsIHtcbiAgICAgICAgdG9WYWx1ZTogMCxcbiAgICAgICAgb3ZlcnNob290Q2xhbXBpbmc6IHRydWUsXG4gICAgICAgIHVzZU5hdGl2ZURyaXZlcjogZmFsc2UsXG4gICAgICB9KS5zdGFydCgpO1xuICAgIH1cbiAgfVxuICBoYW5kbGVQcmVzcyA9IChldmVudDogR2VzdHVyZVJlc3BvbmRlckV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBvblByZXNzIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjaGVja2VkOiB0cnVlIH0sICgpID0+IHtcbiAgICAgIHRoaXMuYW5pbWF0ZWRTdGFydCh0cnVlKTtcbiAgICAgIG9uUHJlc3MgJiYgb25QcmVzcyhldmVudCk7XG4gICAgfSk7XG4gIH07XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHN0eWxlLCBjb2xvciwgY2lyY2xlU2l6ZSwgdGh1bWJTaXplLCBkaXNhYmxlZCwgLi4ub3RoZXJQcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBzaXplVmFsdWUgPSB0aGlzLnN0YXRlLnNpemVWYWx1ZS5pbnRlcnBvbGF0ZSh7XG4gICAgICBpbnB1dFJhbmdlOiBbMCwgdGh1bWJTaXplIV0sXG4gICAgICBvdXRwdXRSYW5nZTogWzAsIHRodW1iU2l6ZSFdLFxuICAgICAgLy8gZXh0cmFwb2xhdGU6ICdjbGFtcCcsXG4gICAgfSk7XG4gICAgY29uc3QgYmFja2dyb3VuZENvbG9yID0gZGlzYWJsZWQgPyBjb2xvciA6ICcjMDA4RUYwJztcbiAgICBjb25zdCBib3JkZXJDb2xvciA9IGRpc2FibGVkID8gY29sb3IgOiAnI2JkYzFjYyc7XG4gICAgcmV0dXJuIChcbiAgICAgIDxWaWV3IHN0eWxlPXtbc3R5bGVzLmRlZmFsdXQsIHN0eWxlXX0gey4uLm90aGVyUHJvcHN9PlxuICAgICAgICA8VG91Y2hhYmxlT3BhY2l0eSBkaXNhYmxlZD17ZGlzYWJsZWR9IHN0eWxlPXtbc3R5bGVzLnRvdWNoXX0gb25QcmVzcz17dGhpcy5oYW5kbGVQcmVzc30+XG4gICAgICAgICAgPEFuaW1hdGVkLlZpZXcgc3R5bGU9e1tzdHlsZXMuY2hlY2tCZywgeyB3aWR0aDogY2lyY2xlU2l6ZSwgaGVpZ2h0OiBjaXJjbGVTaXplLCBib3JkZXJDb2xvciB9XX0+XG4gICAgICAgICAgICA8QW5pbWF0ZWQuVmlldyBzdHlsZT17W3N0eWxlcy5jaGVjaywgeyB3aWR0aDogc2l6ZVZhbHVlLCBoZWlnaHQ6IHNpemVWYWx1ZSwgYmFja2dyb3VuZENvbG9yIH1dfSAvPlxuICAgICAgICAgIDwvQW5pbWF0ZWQuVmlldz5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbiAmJiAoXG4gICAgICAgICAgICA8TWF5YmVUZXh0T3JWaWV3XG4gICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1uYXRpdmUvbm8taW5saW5lLXN0eWxlc1xuICAgICAgICAgICAgICBzdHlsZT17W3N0eWxlcy5sYWJlbCwgeyBvcGFjaXR5OiBkaXNhYmxlZCA/IDAuMyA6IDEgfV19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9NYXliZVRleHRPclZpZXc+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Ub3VjaGFibGVPcGFjaXR5PlxuICAgICAgPC9WaWV3PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==