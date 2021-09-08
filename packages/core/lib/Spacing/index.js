"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class Spacing extends _react.Component {
  render() {
    const {
      size,
      style,
      type,
      ...otherProps
    } = this.props;
    const sty = {};
    const keyName = type === 'vertical' ? 'height' : 'width';
    sty[keyName] = 10;

    if (size === 'small') {
      sty[keyName] = 5;
    } else if (size === 'large') {
      sty[keyName] = 15;
    } else if (typeof size === 'number') {
      sty[keyName] = size;
    }

    return <_reactNative.View style={[sty, style]} {...otherProps} />;
  }

}

exports.default = Spacing;
Spacing.defaultProps = {
  size: 'default',
  type: 'vertical'
};
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TcGFjaW5nL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJTcGFjaW5nIiwiQ29tcG9uZW50IiwicmVuZGVyIiwic2l6ZSIsInN0eWxlIiwidHlwZSIsIm90aGVyUHJvcHMiLCJwcm9wcyIsInN0eSIsImtleU5hbWUiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7O0FBT2UsTUFBTUEsT0FBTixTQUFzQkMsZ0JBQXRCLENBQThDO0FBSzNEQyxFQUFBQSxNQUFNLEdBQUc7QUFDUCxVQUFNO0FBQUVDLE1BQUFBLElBQUY7QUFBUUMsTUFBQUEsS0FBUjtBQUFlQyxNQUFBQSxJQUFmO0FBQXFCLFNBQUdDO0FBQXhCLFFBQXVDLEtBQUtDLEtBQWxEO0FBQ0EsVUFBTUMsR0FBMEIsR0FBRyxFQUFuQztBQUNBLFVBQU1DLE9BQU8sR0FBR0osSUFBSSxLQUFLLFVBQVQsR0FBc0IsUUFBdEIsR0FBaUMsT0FBakQ7QUFDQUcsSUFBQUEsR0FBRyxDQUFDQyxPQUFELENBQUgsR0FBZSxFQUFmOztBQUNBLFFBQUlOLElBQUksS0FBSyxPQUFiLEVBQXNCO0FBQ3BCSyxNQUFBQSxHQUFHLENBQUNDLE9BQUQsQ0FBSCxHQUFlLENBQWY7QUFDRCxLQUZELE1BRU8sSUFBSU4sSUFBSSxLQUFLLE9BQWIsRUFBc0I7QUFDM0JLLE1BQUFBLEdBQUcsQ0FBQ0MsT0FBRCxDQUFILEdBQWUsRUFBZjtBQUNELEtBRk0sTUFFQSxJQUFJLE9BQU9OLElBQVAsS0FBZ0IsUUFBcEIsRUFBOEI7QUFDbkNLLE1BQUFBLEdBQUcsQ0FBQ0MsT0FBRCxDQUFILEdBQWVOLElBQWY7QUFDRDs7QUFDRCxXQUFPLG1CQUFNLE1BQU0sQ0FBQyxDQUFDSyxHQUFELEVBQU1KLEtBQU4sQ0FBRCxDQUFaLENBQTJCLElBQUlFLFVBQUosQ0FBM0IsR0FBUDtBQUNEOztBQWxCMEQ7OztBQUF4Q04sTyxDQUNaVSxZLEdBQTZCO0FBQ2xDUCxFQUFBQSxJQUFJLEVBQUUsU0FENEI7QUFFbENFLEVBQUFBLElBQUksRUFBRTtBQUY0QixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFZpZXcsIFZpZXdQcm9wcyB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3BhY2luZ1Byb3BzIGV4dGVuZHMgVmlld1Byb3BzIHtcbiAgc2l6ZT86ICdzbWFsbCcgfCAnZGVmYXVsdCcgfCAnbGFyZ2UnIHwgbnVtYmVyO1xuICB0eXBlPzogJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BhY2luZyBleHRlbmRzIENvbXBvbmVudDxTcGFjaW5nUHJvcHM+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wczogU3BhY2luZ1Byb3BzID0ge1xuICAgIHNpemU6ICdkZWZhdWx0JyxcbiAgICB0eXBlOiAndmVydGljYWwnLFxuICB9O1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzaXplLCBzdHlsZSwgdHlwZSwgLi4ub3RoZXJQcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBzdHk6IFNwYWNpbmdQcm9wc1snc3R5bGUnXSA9IHt9O1xuICAgIGNvbnN0IGtleU5hbWUgPSB0eXBlID09PSAndmVydGljYWwnID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuICAgIHN0eVtrZXlOYW1lXSA9IDEwO1xuICAgIGlmIChzaXplID09PSAnc21hbGwnKSB7XG4gICAgICBzdHlba2V5TmFtZV0gPSA1O1xuICAgIH0gZWxzZSBpZiAoc2l6ZSA9PT0gJ2xhcmdlJykge1xuICAgICAgc3R5W2tleU5hbWVdID0gMTU7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygc2l6ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHN0eVtrZXlOYW1lXSA9IHNpemU7XG4gICAgfVxuICAgIHJldHVybiA8VmlldyBzdHlsZT17W3N0eSwgc3R5bGVdfSB7Li4ub3RoZXJQcm9wc30gLz47XG4gIH1cbn1cbiJdfQ==