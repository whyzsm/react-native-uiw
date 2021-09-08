"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class ListItem extends _react.Component {
  render() {
    const {
      children,
      style,
      onPress,
      paddingLeft,
      underlayColor,
      extra,
      extraStyle,
      touchableStyle,
      size,
      ...otherProps
    } = this.props;
    let sizeStyle = {};

    if (size && styles[size]) {
      sizeStyle = styles[size];
    }

    const cell = <_reactNative.View style={[styles.border, sizeStyle, style]} {...otherProps}>
        <_reactNative.View style={{
        flex: 1,
        flexDirection: 'row'
      }}>
          {_react.default.Children.toArray(children).map((child, idx) => {
          if (typeof children === 'string') {
            return <_reactNative.Text key={idx}>{children}</_reactNative.Text>;
          }

          if (!_react.default.isValidElement(child)) {
            return null;
          }

          return _react.default.cloneElement(child, {
            key: idx
          });
        })}
        </_reactNative.View>
        {extra && <_reactNative.View style={{
        paddingRight: 10
      }}>
            {typeof extra === 'string' ? <_reactNative.Text style={extraStyle}>{extra}</_reactNative.Text> : <_reactNative.View style={[{
          flexDirection: 'row',
          alignItems: 'center'
        }, extraStyle]}>{extra}</_reactNative.View>}
          </_reactNative.View>}
      </_reactNative.View>;

    if (onPress) {
      return <_reactNative.TouchableHighlight underlayColor={underlayColor} style={[styles.warpper, {
        paddingLeft
      }, touchableStyle]} onPress={onPress} {...otherProps}>
          {cell}
        </_reactNative.TouchableHighlight>;
    }

    return <_reactNative.View style={[{
      paddingLeft
    }, styles.warpper]}>{cell}</_reactNative.View>;
  }

}

exports.default = ListItem;
ListItem.defaultProps = {
  underlayColor: '#DADADA' // paddingLeft: 16,

};

const styles = _reactNative.StyleSheet.create({
  warpper: {
    backgroundColor: '#fff'
  },
  border: {
    borderBottomWidth: _reactNative.StyleSheet.hairlineWidth,
    borderColor: '#CDCDCD',
    flexDirection: 'row',
    alignItems: 'center'
  },
  default: {
    paddingVertical: 12
  },
  small: {
    paddingVertical: 10
  },
  large: {
    paddingVertical: 16
  }
});

module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9MaXN0L0l0ZW0udHN4Il0sIm5hbWVzIjpbIkxpc3RJdGVtIiwiQ29tcG9uZW50IiwicmVuZGVyIiwiY2hpbGRyZW4iLCJzdHlsZSIsIm9uUHJlc3MiLCJwYWRkaW5nTGVmdCIsInVuZGVybGF5Q29sb3IiLCJleHRyYSIsImV4dHJhU3R5bGUiLCJ0b3VjaGFibGVTdHlsZSIsInNpemUiLCJvdGhlclByb3BzIiwicHJvcHMiLCJzaXplU3R5bGUiLCJzdHlsZXMiLCJjZWxsIiwiYm9yZGVyIiwiZmxleCIsImZsZXhEaXJlY3Rpb24iLCJSZWFjdCIsIkNoaWxkcmVuIiwidG9BcnJheSIsIm1hcCIsImNoaWxkIiwiaWR4IiwiaXNWYWxpZEVsZW1lbnQiLCJjbG9uZUVsZW1lbnQiLCJrZXkiLCJwYWRkaW5nUmlnaHQiLCJhbGlnbkl0ZW1zIiwid2FycHBlciIsImRlZmF1bHRQcm9wcyIsIlN0eWxlU2hlZXQiLCJjcmVhdGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJCb3R0b21XaWR0aCIsImhhaXJsaW5lV2lkdGgiLCJib3JkZXJDb2xvciIsImRlZmF1bHQiLCJwYWRkaW5nVmVydGljYWwiLCJzbWFsbCIsImxhcmdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7OztBQXdCZSxNQUFNQSxRQUFOLFNBQXVCQyxnQkFBdkIsQ0FBZ0Q7QUFLN0RDLEVBQUFBLE1BQU0sR0FBRztBQUNQLFVBQU07QUFDSkMsTUFBQUEsUUFESTtBQUVKQyxNQUFBQSxLQUZJO0FBR0pDLE1BQUFBLE9BSEk7QUFJSkMsTUFBQUEsV0FKSTtBQUtKQyxNQUFBQSxhQUxJO0FBTUpDLE1BQUFBLEtBTkk7QUFPSkMsTUFBQUEsVUFQSTtBQVFKQyxNQUFBQSxjQVJJO0FBU0pDLE1BQUFBLElBVEk7QUFVSixTQUFHQztBQVZDLFFBV0YsS0FBS0MsS0FYVDtBQVlBLFFBQUlDLFNBQVMsR0FBRyxFQUFoQjs7QUFDQSxRQUFJSCxJQUFJLElBQUlJLE1BQU0sQ0FBQ0osSUFBRCxDQUFsQixFQUEwQjtBQUN4QkcsTUFBQUEsU0FBUyxHQUFHQyxNQUFNLENBQUNKLElBQUQsQ0FBbEI7QUFDRDs7QUFDRCxVQUFNSyxJQUFJLEdBQ1IsbUJBQU0sTUFBTSxDQUFDLENBQUNELE1BQU0sQ0FBQ0UsTUFBUixFQUFnQkgsU0FBaEIsRUFBMkJWLEtBQTNCLENBQUQsQ0FBWixDQUFnRCxJQUFJUSxVQUFKLENBQWhEO0FBQ04sUUFBUSxtQkFBTSxNQUFNLENBQUM7QUFBRU0sUUFBQUEsSUFBSSxFQUFFLENBQVI7QUFBV0MsUUFBQUEsYUFBYSxFQUFFO0FBQTFCLE9BQUQsQ0FBWjtBQUNSLFVBQVUsQ0FBQ0MsZUFBTUMsUUFBTixDQUFlQyxPQUFmLENBQXVCbkIsUUFBdkIsRUFBaUNvQixHQUFqQyxDQUFxQyxDQUFDQyxLQUFELEVBQVFDLEdBQVIsS0FBZ0I7QUFDcEQsY0FBSSxPQUFPdEIsUUFBUCxLQUFvQixRQUF4QixFQUFrQztBQUNoQyxtQkFBTyxtQkFBTSxJQUFJLENBQUNzQixHQUFELENBQVYsQ0FBZ0IsQ0FBQ3RCLFFBQUQsQ0FBVSxvQkFBakM7QUFDRDs7QUFDRCxjQUFJLENBQUNpQixlQUFNTSxjQUFOLENBQXFCRixLQUFyQixDQUFMLEVBQWtDO0FBQ2hDLG1CQUFPLElBQVA7QUFDRDs7QUFDRCxpQkFBT0osZUFBTU8sWUFBTixDQUFtQkgsS0FBbkIsRUFBMEI7QUFBRUksWUFBQUEsR0FBRyxFQUFFSDtBQUFQLFdBQTFCLENBQVA7QUFDRCxTQVJBLENBQUQ7QUFTVixRQUFRO0FBQ1IsUUFBUSxDQUFDakIsS0FBSyxJQUNKLG1CQUFNLE1BQU0sQ0FBQztBQUFFcUIsUUFBQUEsWUFBWSxFQUFFO0FBQWhCLE9BQUQsQ0FBWjtBQUNWLFlBQVksQ0FBQyxPQUFPckIsS0FBUCxLQUFpQixRQUFqQixHQUNDLG1CQUFNLE1BQU0sQ0FBQ0MsVUFBRCxDQUFaLENBQXlCLENBQUNELEtBQUQsQ0FBTyxvQkFEakMsR0FHQyxtQkFBTSxNQUFNLENBQUMsQ0FBQztBQUFFVyxVQUFBQSxhQUFhLEVBQUUsS0FBakI7QUFBd0JXLFVBQUFBLFVBQVUsRUFBRTtBQUFwQyxTQUFELEVBQWlEckIsVUFBakQsQ0FBRCxDQUFaLENBQTJFLENBQUNELEtBQUQsQ0FBTyxvQkFIcEY7QUFLWixVQUFVLG9CQVBGO0FBU1IsTUFBTSxvQkF0QkY7O0FBeUJBLFFBQUlILE9BQUosRUFBYTtBQUNYLGFBQ0UsaUNBQ0UsY0FBYyxDQUFDRSxhQUFELENBRGhCLENBRUUsTUFBTSxDQUFDLENBQUNRLE1BQU0sQ0FBQ2dCLE9BQVIsRUFBaUI7QUFBRXpCLFFBQUFBO0FBQUYsT0FBakIsRUFBa0NJLGNBQWxDLENBQUQsQ0FGUixDQUdFLFFBQVEsQ0FBQ0wsT0FBRCxDQUhWLENBSUUsSUFBSU8sVUFBSixDQUpGO0FBTVIsVUFBVSxDQUFDSSxJQUFEO0FBQ1YsUUFBUSxrQ0FSRjtBQVVEOztBQUNELFdBQU8sbUJBQU0sTUFBTSxDQUFDLENBQUM7QUFBRVYsTUFBQUE7QUFBRixLQUFELEVBQWtCUyxNQUFNLENBQUNnQixPQUF6QixDQUFELENBQVosQ0FBZ0QsQ0FBQ2YsSUFBRCxDQUFNLG9CQUE3RDtBQUNEOztBQTVENEQ7OztBQUExQ2hCLFEsQ0FDWmdDLFksR0FBOEI7QUFDbkN6QixFQUFBQSxhQUFhLEVBQUUsU0FEb0IsQ0FFbkM7O0FBRm1DLEM7O0FBOER2QyxNQUFNUSxNQUFNLEdBQUdrQix3QkFBV0MsTUFBWCxDQUFrQjtBQUMvQkgsRUFBQUEsT0FBTyxFQUFFO0FBQ1BJLElBQUFBLGVBQWUsRUFBRTtBQURWLEdBRHNCO0FBSS9CbEIsRUFBQUEsTUFBTSxFQUFFO0FBQ05tQixJQUFBQSxpQkFBaUIsRUFBRUgsd0JBQVdJLGFBRHhCO0FBRU5DLElBQUFBLFdBQVcsRUFBRSxTQUZQO0FBR05uQixJQUFBQSxhQUFhLEVBQUUsS0FIVDtBQUlOVyxJQUFBQSxVQUFVLEVBQUU7QUFKTixHQUp1QjtBQVUvQlMsRUFBQUEsT0FBTyxFQUFFO0FBQ1BDLElBQUFBLGVBQWUsRUFBRTtBQURWLEdBVnNCO0FBYS9CQyxFQUFBQSxLQUFLLEVBQUU7QUFDTEQsSUFBQUEsZUFBZSxFQUFFO0FBRFosR0Fid0I7QUFnQi9CRSxFQUFBQSxLQUFLLEVBQUU7QUFDTEYsSUFBQUEsZUFBZSxFQUFFO0FBRFo7QUFoQndCLENBQWxCLENBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgVmlldyxcbiAgVmlld1Byb3BzLFxuICBTdHlsZVNoZWV0LFxuICBTdHlsZVByb3AsXG4gIFRleHRTdHlsZSxcbiAgVmlld1N0eWxlLFxuICBUb3VjaGFibGVIaWdobGlnaHQsXG4gIFRvdWNoYWJsZVdpdGhvdXRGZWVkYmFja1Byb3BzLFxuICBUZXh0LFxufSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExpc3RJdGVtUHJvcHMgZXh0ZW5kcyBWaWV3UHJvcHMsIFRvdWNoYWJsZVdpdGhvdXRGZWVkYmFja1Byb3BzIHtcbiAgdW5kZXJsYXlDb2xvcj86IHN0cmluZztcbiAgcGFkZGluZ0xlZnQ/OiBudW1iZXI7XG4gIGV4dHJhPzogUmVhY3QuUmVhY3ROb2RlO1xuICBleHRyYVN0eWxlPzogU3R5bGVQcm9wPFZpZXdTdHlsZT4gfCBTdHlsZVByb3A8VGV4dFN0eWxlPjtcbiAgdG91Y2hhYmxlU3R5bGU/OiBTdHlsZVByb3A8Vmlld1N0eWxlPjtcbiAgLyoqXG4gICAqIOWNleWFg+agvOWkp+Wwj1xuICAgKi9cbiAgc2l6ZT86ICdzbWFsbCcgfCAnZGVmYXVsdCcgfCAnbGFyZ2UnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0SXRlbSBleHRlbmRzIENvbXBvbmVudDxMaXN0SXRlbVByb3BzPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHM6IExpc3RJdGVtUHJvcHMgPSB7XG4gICAgdW5kZXJsYXlDb2xvcjogJyNEQURBREEnLFxuICAgIC8vIHBhZGRpbmdMZWZ0OiAxNixcbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgc3R5bGUsXG4gICAgICBvblByZXNzLFxuICAgICAgcGFkZGluZ0xlZnQsXG4gICAgICB1bmRlcmxheUNvbG9yLFxuICAgICAgZXh0cmEsXG4gICAgICBleHRyYVN0eWxlLFxuICAgICAgdG91Y2hhYmxlU3R5bGUsXG4gICAgICBzaXplLFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBzaXplU3R5bGUgPSB7fTtcbiAgICBpZiAoc2l6ZSAmJiBzdHlsZXNbc2l6ZV0pIHtcbiAgICAgIHNpemVTdHlsZSA9IHN0eWxlc1tzaXplXTtcbiAgICB9XG4gICAgY29uc3QgY2VsbCA9IChcbiAgICAgIDxWaWV3IHN0eWxlPXtbc3R5bGVzLmJvcmRlciwgc2l6ZVN0eWxlLCBzdHlsZV19IHsuLi5vdGhlclByb3BzfT5cbiAgICAgICAgPFZpZXcgc3R5bGU9e3sgZmxleDogMSwgZmxleERpcmVjdGlvbjogJ3JvdycgfX0+XG4gICAgICAgICAge1JlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pLm1hcCgoY2hpbGQsIGlkeCkgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIDxUZXh0IGtleT17aWR4fT57Y2hpbGRyZW59PC9UZXh0PjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgeyBrZXk6IGlkeCB9KTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9WaWV3PlxuICAgICAgICB7ZXh0cmEgJiYgKFxuICAgICAgICAgIDxWaWV3IHN0eWxlPXt7IHBhZGRpbmdSaWdodDogMTAgfX0+XG4gICAgICAgICAgICB7dHlwZW9mIGV4dHJhID09PSAnc3RyaW5nJyA/IChcbiAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e2V4dHJhU3R5bGV9PntleHRyYX08L1RleHQ+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8VmlldyBzdHlsZT17W3sgZmxleERpcmVjdGlvbjogJ3JvdycsIGFsaWduSXRlbXM6ICdjZW50ZXInIH0sIGV4dHJhU3R5bGVdfT57ZXh0cmF9PC9WaWV3PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICl9XG4gICAgICA8L1ZpZXc+XG4gICAgKTtcblxuICAgIGlmIChvblByZXNzKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VG91Y2hhYmxlSGlnaGxpZ2h0XG4gICAgICAgICAgdW5kZXJsYXlDb2xvcj17dW5kZXJsYXlDb2xvcn1cbiAgICAgICAgICBzdHlsZT17W3N0eWxlcy53YXJwcGVyLCB7IHBhZGRpbmdMZWZ0IH0sIHRvdWNoYWJsZVN0eWxlXX1cbiAgICAgICAgICBvblByZXNzPXtvblByZXNzfVxuICAgICAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAge2NlbGx9XG4gICAgICAgIDwvVG91Y2hhYmxlSGlnaGxpZ2h0PlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIDxWaWV3IHN0eWxlPXtbeyBwYWRkaW5nTGVmdCB9LCBzdHlsZXMud2FycHBlcl19PntjZWxsfTwvVmlldz47XG4gIH1cbn1cblxuY29uc3Qgc3R5bGVzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuICB3YXJwcGVyOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gIH0sXG4gIGJvcmRlcjoge1xuICAgIGJvcmRlckJvdHRvbVdpZHRoOiBTdHlsZVNoZWV0LmhhaXJsaW5lV2lkdGgsXG4gICAgYm9yZGVyQ29sb3I6ICcjQ0RDRENEJyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgfSxcbiAgZGVmYXVsdDoge1xuICAgIHBhZGRpbmdWZXJ0aWNhbDogMTIsXG4gIH0sXG4gIHNtYWxsOiB7XG4gICAgcGFkZGluZ1ZlcnRpY2FsOiAxMCxcbiAgfSxcbiAgbGFyZ2U6IHtcbiAgICBwYWRkaW5nVmVydGljYWw6IDE2LFxuICB9LFxufSk7XG4iXX0=