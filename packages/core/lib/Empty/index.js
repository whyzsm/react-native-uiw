"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _Icon = _interopRequireDefault(require("../Icon"));

var _Flex = _interopRequireDefault(require("../Flex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const iconStr = `
<svg width="64" height="41" viewBox="0 0 64 41">
  <g transform="translate(0 1)" fill="none" fill-rule="evenodd">
    <ellipse fill="#F5F5F5" cx="32" cy="33" rx="32" ry="7"></ellipse>
    <g fill-rule="nonzero" stroke="#D9D9D9">
      <path fill="#FFF" d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"></path>
      <path fill="#FAFAFA" d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z"></path>
    </g>
  </g>
</svg>
`;

class Empty extends _react.Component {
  render() {
    const {
      size,
      label,
      xml,
      labelStyle,
      children,
      ...props
    } = this.props;
    return <_Flex.default direction="column" justify="center" align="center" {...props}>
        {xml && <_Icon.default xml={xml} size={size} />}
        {!!children ? children : label && typeof label === 'string' && <_reactNative.Text style={_reactNative.StyleSheet.flatten([styles.label, labelStyle])}>{label}</_reactNative.Text>}
      </_Flex.default>;
  }

}

exports.default = Empty;
Empty.defaultProps = {
  size: 64,
  label: '暂无数据',
  xml: iconStr
};

const styles = _reactNative.StyleSheet.create({
  label: {
    color: 'rgba(0,0,0,0.25)'
  }
});

module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9FbXB0eS9pbmRleC50c3giXSwibmFtZXMiOlsiaWNvblN0ciIsIkVtcHR5IiwiQ29tcG9uZW50IiwicmVuZGVyIiwic2l6ZSIsImxhYmVsIiwieG1sIiwibGFiZWxTdHlsZSIsImNoaWxkcmVuIiwicHJvcHMiLCJTdHlsZVNoZWV0IiwiZmxhdHRlbiIsInN0eWxlcyIsImRlZmF1bHRQcm9wcyIsImNyZWF0ZSIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRUEsTUFBTUEsT0FBTyxHQUFJO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBVkE7O0FBbUNlLE1BQU1DLEtBQU4sU0FBb0JDLGdCQUFwQixDQUEwQztBQU12REMsRUFBQUEsTUFBTSxHQUFHO0FBQ1AsVUFBTTtBQUFFQyxNQUFBQSxJQUFGO0FBQVFDLE1BQUFBLEtBQVI7QUFBZUMsTUFBQUEsR0FBZjtBQUFvQkMsTUFBQUEsVUFBcEI7QUFBZ0NDLE1BQUFBLFFBQWhDO0FBQTBDLFNBQUdDO0FBQTdDLFFBQXVELEtBQUtBLEtBQWxFO0FBQ0EsV0FDRSxlQUFNLFVBQVUsUUFBaEIsQ0FBeUIsUUFBUSxRQUFqQyxDQUEwQyxNQUFNLFFBQWhELENBQXlELElBQUlBLEtBQUosQ0FBekQ7QUFDTixRQUFRLENBQUNILEdBQUcsSUFBSSxlQUFNLElBQUksQ0FBQ0EsR0FBRCxDQUFWLENBQWdCLEtBQUssQ0FBQ0YsSUFBRCxDQUFyQixHQUFSO0FBQ1IsUUFBUSxDQUFDLENBQUMsQ0FBQ0ksUUFBRixHQUNHQSxRQURILEdBRUdILEtBQUssSUFDTCxPQUFPQSxLQUFQLEtBQWlCLFFBRGpCLElBQzZCLG1CQUFNLE1BQU0sQ0FBQ0ssd0JBQVdDLE9BQVgsQ0FBbUIsQ0FBQ0MsTUFBTSxDQUFDUCxLQUFSLEVBQWVFLFVBQWYsQ0FBbkIsQ0FBRCxDQUFaLENBQTZELENBQUNGLEtBQUQsQ0FBTyxvQkFIckc7QUFJUixNQUFNLGdCQVBGO0FBU0Q7O0FBakJzRDs7O0FBQXBDSixLLENBQ1pZLFksR0FBMkI7QUFDaENULEVBQUFBLElBQUksRUFBRSxFQUQwQjtBQUVoQ0MsRUFBQUEsS0FBSyxFQUFFLE1BRnlCO0FBR2hDQyxFQUFBQSxHQUFHLEVBQUVOO0FBSDJCLEM7O0FBbUJwQyxNQUFNWSxNQUFNLEdBQUdGLHdCQUFXSSxNQUFYLENBQWtCO0FBQy9CVCxFQUFBQSxLQUFLLEVBQUU7QUFDTFUsSUFBQUEsS0FBSyxFQUFFO0FBREY7QUFEd0IsQ0FBbEIsQ0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTdHlsZVNoZWV0LCBUZXh0LCBUZXh0UHJvcHMgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuaW1wb3J0IEljb24gZnJvbSAnLi4vSWNvbic7XG5pbXBvcnQgRmxleCwgeyBGbGV4UHJvcHMgfSBmcm9tICcuLi9GbGV4JztcblxuY29uc3QgaWNvblN0ciA9IGBcbjxzdmcgd2lkdGg9XCI2NFwiIGhlaWdodD1cIjQxXCIgdmlld0JveD1cIjAgMCA2NCA0MVwiPlxuICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCAxKVwiIGZpbGw9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPlxuICAgIDxlbGxpcHNlIGZpbGw9XCIjRjVGNUY1XCIgY3g9XCIzMlwiIGN5PVwiMzNcIiByeD1cIjMyXCIgcnk9XCI3XCI+PC9lbGxpcHNlPlxuICAgIDxnIGZpbGwtcnVsZT1cIm5vbnplcm9cIiBzdHJva2U9XCIjRDlEOUQ5XCI+XG4gICAgICA8cGF0aCBmaWxsPVwiI0ZGRlwiIGQ9XCJNNTUgMTIuNzZMNDQuODU0IDEuMjU4QzQ0LjM2Ny40NzQgNDMuNjU2IDAgNDIuOTA3IDBIMjEuMDkzYy0uNzQ5IDAtMS40Ni40NzQtMS45NDcgMS4yNTdMOSAxMi43NjFWMjJoNDZ2LTkuMjR6XCI+PC9wYXRoPlxuICAgICAgPHBhdGggZmlsbD1cIiNGQUZBRkFcIiBkPVwiTTQxLjYxMyAxNS45MzFjMC0xLjYwNS45OTQtMi45MyAyLjIyNy0yLjkzMUg1NXYxOC4xMzdDNTUgMzMuMjYgNTMuNjggMzUgNTIuMDUgMzVoLTQwLjFDMTAuMzIgMzUgOSAzMy4yNTkgOSAzMS4xMzdWMTNoMTEuMTZjMS4yMzMgMCAyLjIyNyAxLjMyMyAyLjIyNyAyLjkyOHYuMDIyYzAgMS42MDUgMS4wMDUgMi45MDEgMi4yMzcgMi45MDFoMTQuNzUyYzEuMjMyIDAgMi4yMzctMS4zMDggMi4yMzctMi45MTN2LS4wMDd6XCI+PC9wYXRoPlxuICAgIDwvZz5cbiAgPC9nPlxuPC9zdmc+XG5gO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVtcHR5UHJvcHMgZXh0ZW5kcyBGbGV4UHJvcHMge1xuICAvKipcbiAgICog6K6+572u5o+Q56S66K+tXG4gICAqL1xuICBsYWJlbD86IHN0cmluZztcbiAgLyoqXG4gICAqIOiuvue9ruaPkOekuumfs+agt+W8j1xuICAgKi9cbiAgbGFiZWxTdHlsZT86IFRleHRQcm9wc1snc3R5bGUnXTtcbiAgLyoqXG4gICAqIOiuvue9riDlm77moIflsLrlr7hcbiAgICovXG4gIHNpemU/OiBudW1iZXI7XG4gIC8qKlxuICAgKiDmm7/mjaLpu5jorqTnmoTlm77moIcg6L+Z6YeM5pivIFNWRyBzdHJpbmdcbiAgICovXG4gIHhtbD86IHN0cmluZztcbiAgLyoqXG4gICAqIOepuuaPkOekuuabtOWkmuWGheWuuVxuICAgKi9cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtcHR5IGV4dGVuZHMgQ29tcG9uZW50PEVtcHR5UHJvcHM+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wczogRW1wdHlQcm9wcyA9IHtcbiAgICBzaXplOiA2NCxcbiAgICBsYWJlbDogJ+aaguaXoOaVsOaNricsXG4gICAgeG1sOiBpY29uU3RyLFxuICB9O1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzaXplLCBsYWJlbCwgeG1sLCBsYWJlbFN0eWxlLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGbGV4IGRpcmVjdGlvbj1cImNvbHVtblwiIGp1c3RpZnk9XCJjZW50ZXJcIiBhbGlnbj1cImNlbnRlclwiIHsuLi5wcm9wc30+XG4gICAgICAgIHt4bWwgJiYgPEljb24geG1sPXt4bWx9IHNpemU9e3NpemV9IC8+fVxuICAgICAgICB7ISFjaGlsZHJlblxuICAgICAgICAgID8gY2hpbGRyZW5cbiAgICAgICAgICA6IGxhYmVsICYmXG4gICAgICAgICAgICB0eXBlb2YgbGFiZWwgPT09ICdzdHJpbmcnICYmIDxUZXh0IHN0eWxlPXtTdHlsZVNoZWV0LmZsYXR0ZW4oW3N0eWxlcy5sYWJlbCwgbGFiZWxTdHlsZV0pfT57bGFiZWx9PC9UZXh0Pn1cbiAgICAgIDwvRmxleD5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgbGFiZWw6IHtcbiAgICBjb2xvcjogJ3JnYmEoMCwwLDAsMC4yNSknLFxuICB9LFxufSk7XG4iXX0=