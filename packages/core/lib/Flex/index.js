"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _FlexItem = _interopRequireDefault(require("./FlexItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class Flex extends _react.Component {
  render() {
    const {
      direction,
      justify,
      align,
      wrap,
      children,
      style
    } = this.props;
    const sty = {};

    if (direction) {
      sty.flexDirection = direction;
    }

    if (wrap) {
      sty.flexWrap = wrap;
    }

    if (justify) {
      sty.justifyContent = justify.replace(/^start$/g, 'flex-start').replace(/^end$/g, 'flex-end').replace(/^between$/g, 'space-between').replace(/^around$/g, 'space-around').replace(/^evenly$/g, 'space-evenly');
    }

    if (align) {
      sty.alignItems = align.replace(/^start$/g, 'flex-start').replace(/^end$/g, 'flex-end');
    }

    return <_reactNative.View style={[sty, style]}>
        {children && _react.default.Children.map(children, child => {
        if (!_react.default.isValidElement(child)) {
          return null;
        }

        if (child.type && child.type.displayName === 'FlexItem') {
          return _react.default.cloneElement(<_FlexItem.default />, { ...child.props,
            style: [{
              flex: 1
            }, child.props.style]
          });
        }

        return child;
      })}
      </_reactNative.View>;
  }

}

exports.default = Flex;
Flex.Item = _FlexItem.default;
Flex.defaultProps = {
  direction: 'row',
  justify: 'start',
  wrap: 'nowrap',
  align: 'start'
};
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GbGV4L2luZGV4LnRzeCJdLCJuYW1lcyI6WyJGbGV4IiwiQ29tcG9uZW50IiwicmVuZGVyIiwiZGlyZWN0aW9uIiwianVzdGlmeSIsImFsaWduIiwid3JhcCIsImNoaWxkcmVuIiwic3R5bGUiLCJwcm9wcyIsInN0eSIsImZsZXhEaXJlY3Rpb24iLCJmbGV4V3JhcCIsImp1c3RpZnlDb250ZW50IiwicmVwbGFjZSIsImFsaWduSXRlbXMiLCJSZWFjdCIsIkNoaWxkcmVuIiwibWFwIiwiY2hpbGQiLCJpc1ZhbGlkRWxlbWVudCIsInR5cGUiLCJkaXNwbGF5TmFtZSIsImNsb25lRWxlbWVudCIsImZsZXgiLCJJdGVtIiwiRmxleEl0ZW0iLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFTZSxNQUFNQSxJQUFOLFNBQW1CQyxnQkFBbkIsQ0FBd0M7QUFRckRDLEVBQUFBLE1BQU0sR0FBRztBQUNQLFVBQU07QUFBRUMsTUFBQUEsU0FBRjtBQUFhQyxNQUFBQSxPQUFiO0FBQXNCQyxNQUFBQSxLQUF0QjtBQUE2QkMsTUFBQUEsSUFBN0I7QUFBbUNDLE1BQUFBLFFBQW5DO0FBQTZDQyxNQUFBQTtBQUE3QyxRQUF1RCxLQUFLQyxLQUFsRTtBQUNBLFVBQU1DLEdBQXVCLEdBQUcsRUFBaEM7O0FBQ0EsUUFBSVAsU0FBSixFQUFlO0FBQ2JPLE1BQUFBLEdBQUcsQ0FBQ0MsYUFBSixHQUFvQlIsU0FBcEI7QUFDRDs7QUFDRCxRQUFJRyxJQUFKLEVBQVU7QUFDUkksTUFBQUEsR0FBRyxDQUFDRSxRQUFKLEdBQWVOLElBQWY7QUFDRDs7QUFDRCxRQUFJRixPQUFKLEVBQWE7QUFDWE0sTUFBQUEsR0FBRyxDQUFDRyxjQUFKLEdBQXFCVCxPQUFPLENBQ3pCVSxPQURrQixDQUNWLFVBRFUsRUFDRSxZQURGLEVBRWxCQSxPQUZrQixDQUVWLFFBRlUsRUFFQSxVQUZBLEVBR2xCQSxPQUhrQixDQUdWLFlBSFUsRUFHSSxlQUhKLEVBSWxCQSxPQUprQixDQUlWLFdBSlUsRUFJRyxjQUpILEVBS2xCQSxPQUxrQixDQUtWLFdBTFUsRUFLRyxjQUxILENBQXJCO0FBTUQ7O0FBQ0QsUUFBSVQsS0FBSixFQUFXO0FBQ1RLLE1BQUFBLEdBQUcsQ0FBQ0ssVUFBSixHQUFpQlYsS0FBSyxDQUFDUyxPQUFOLENBQWMsVUFBZCxFQUEwQixZQUExQixFQUF3Q0EsT0FBeEMsQ0FBZ0QsUUFBaEQsRUFBMEQsVUFBMUQsQ0FBakI7QUFDRDs7QUFDRCxXQUNFLG1CQUFNLE1BQU0sQ0FBQyxDQUFDSixHQUFELEVBQU1GLEtBQU4sQ0FBRCxDQUFaO0FBQ04sUUFBUSxDQUFDRCxRQUFRLElBQ1BTLGVBQU1DLFFBQU4sQ0FBZUMsR0FBZixDQUFtQlgsUUFBbkIsRUFBOEJZLEtBQUQsSUFBNEI7QUFDdkQsWUFBSSxDQUFDSCxlQUFNSSxjQUFOLENBQXFCRCxLQUFyQixDQUFMLEVBQWtDO0FBQ2hDLGlCQUFPLElBQVA7QUFDRDs7QUFDRCxZQUFJQSxLQUFLLENBQUNFLElBQU4sSUFBZUYsS0FBSyxDQUFDRSxJQUFQLENBQW9CQyxXQUFwQixLQUFvQyxVQUF0RCxFQUFrRTtBQUNoRSxpQkFBT04sZUFBTU8sWUFBTixDQUFtQixxQkFBbkIsRUFBaUMsRUFDdEMsR0FBR0osS0FBSyxDQUFDVixLQUQ2QjtBQUV0Q0QsWUFBQUEsS0FBSyxFQUFFLENBQUM7QUFBRWdCLGNBQUFBLElBQUksRUFBRTtBQUFSLGFBQUQsRUFBY0wsS0FBSyxDQUFDVixLQUFOLENBQVlELEtBQTFCO0FBRitCLFdBQWpDLENBQVA7QUFJRDs7QUFDRCxlQUFPVyxLQUFQO0FBQ0QsT0FYRCxDQURGO0FBYVIsTUFBTSxvQkFmRjtBQWlCRDs7QUE3Q29EOzs7QUFBbENuQixJLENBQ1p5QixJLEdBQU9DLGlCO0FBREsxQixJLENBRVoyQixZLEdBQTBCO0FBQy9CeEIsRUFBQUEsU0FBUyxFQUFFLEtBRG9CO0FBRS9CQyxFQUFBQSxPQUFPLEVBQUUsT0FGc0I7QUFHL0JFLEVBQUFBLElBQUksRUFBRSxRQUh5QjtBQUkvQkQsRUFBQUEsS0FBSyxFQUFFO0FBSndCLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVmlldywgVmlld1Byb3BzLCBGbGV4U3R5bGUgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuaW1wb3J0IEZsZXhJdGVtIGZyb20gJy4vRmxleEl0ZW0nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZsZXhQcm9wcyBleHRlbmRzIFZpZXdQcm9wcyB7XG4gIGRpcmVjdGlvbj86IEZsZXhTdHlsZVsnZmxleERpcmVjdGlvbiddO1xuICBqdXN0aWZ5PzogJ3N0YXJ0JyB8ICdlbmQnIHwgJ2NlbnRlcicgfCAnYmV0d2VlbicgfCAnYXJvdW5kJztcbiAgYWxpZ24/OiAnc3RhcnQnIHwgJ2VuZCcgfCAnY2VudGVyJyB8ICdzdHJldGNoJyB8ICdiYXNlbGluZSc7XG4gIHdyYXA/OiAnd3JhcCcgfCAnbm93cmFwJyB8ICd3cmFwLXJldmVyc2UnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbGV4IGV4dGVuZHMgQ29tcG9uZW50PEZsZXhQcm9wcz4ge1xuICBzdGF0aWMgSXRlbSA9IEZsZXhJdGVtO1xuICBzdGF0aWMgZGVmYXVsdFByb3BzOiBGbGV4UHJvcHMgPSB7XG4gICAgZGlyZWN0aW9uOiAncm93JyxcbiAgICBqdXN0aWZ5OiAnc3RhcnQnLFxuICAgIHdyYXA6ICdub3dyYXAnLFxuICAgIGFsaWduOiAnc3RhcnQnLFxuICB9O1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkaXJlY3Rpb24sIGp1c3RpZnksIGFsaWduLCB3cmFwLCBjaGlsZHJlbiwgc3R5bGUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgc3R5OiBGbGV4UHJvcHNbJ3N0eWxlJ10gPSB7fTtcbiAgICBpZiAoZGlyZWN0aW9uKSB7XG4gICAgICBzdHkuZmxleERpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICB9XG4gICAgaWYgKHdyYXApIHtcbiAgICAgIHN0eS5mbGV4V3JhcCA9IHdyYXA7XG4gICAgfVxuICAgIGlmIChqdXN0aWZ5KSB7XG4gICAgICBzdHkuanVzdGlmeUNvbnRlbnQgPSBqdXN0aWZ5XG4gICAgICAgIC5yZXBsYWNlKC9ec3RhcnQkL2csICdmbGV4LXN0YXJ0JylcbiAgICAgICAgLnJlcGxhY2UoL15lbmQkL2csICdmbGV4LWVuZCcpXG4gICAgICAgIC5yZXBsYWNlKC9eYmV0d2VlbiQvZywgJ3NwYWNlLWJldHdlZW4nKVxuICAgICAgICAucmVwbGFjZSgvXmFyb3VuZCQvZywgJ3NwYWNlLWFyb3VuZCcpXG4gICAgICAgIC5yZXBsYWNlKC9eZXZlbmx5JC9nLCAnc3BhY2UtZXZlbmx5JykgYXMgRmxleFN0eWxlWydqdXN0aWZ5Q29udGVudCddO1xuICAgIH1cbiAgICBpZiAoYWxpZ24pIHtcbiAgICAgIHN0eS5hbGlnbkl0ZW1zID0gYWxpZ24ucmVwbGFjZSgvXnN0YXJ0JC9nLCAnZmxleC1zdGFydCcpLnJlcGxhY2UoL15lbmQkL2csICdmbGV4LWVuZCcpIGFzIEZsZXhTdHlsZVsnYWxpZ25JdGVtcyddO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPFZpZXcgc3R5bGU9e1tzdHksIHN0eWxlXX0+XG4gICAgICAgIHtjaGlsZHJlbiAmJlxuICAgICAgICAgIFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgKGNoaWxkOiBSZWFjdC5SZWFjdE5vZGUpID0+IHtcbiAgICAgICAgICAgIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNoaWxkLnR5cGUgJiYgKGNoaWxkLnR5cGUgYXMgYW55KS5kaXNwbGF5TmFtZSA9PT0gJ0ZsZXhJdGVtJykge1xuICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KDxGbGV4SXRlbSAvPiwge1xuICAgICAgICAgICAgICAgIC4uLmNoaWxkLnByb3BzLFxuICAgICAgICAgICAgICAgIHN0eWxlOiBbeyBmbGV4OiAxIH0sIGNoaWxkLnByb3BzLnN0eWxlXSxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgICAgICAgfSl9XG4gICAgICA8L1ZpZXc+XG4gICAgKTtcbiAgfVxufVxuIl19