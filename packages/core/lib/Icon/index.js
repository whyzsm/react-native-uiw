"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));

var _wIcon = _interopRequireDefault(require("@uiw/icons/fonts/w-icon.json"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Icons extends _react.default.Component {
  render() {
    const {
      name,
      size,
      fill = '#000000',
      stroke,
      xml,
      paths,
      color,
      ...otherProps
    } = this.props;

    if (xml) {
      return <_reactNativeSvg.SvgXml xml={xml} height={size} width={size} {...otherProps} />;
    }

    let pathData = paths;

    if (!pathData) {
      if (!name || !_wIcon.default[name]) {
        return null;
      }

      pathData = _wIcon.default[name];
    }

    return <_reactNativeSvg.default fill={color || fill} stroke={stroke} height={size} width={size} viewBox="0 0 20 20" {...otherProps}>
        {pathData.map((d, i) => <_reactNativeSvg.Path key={i} d={d} fillRule="evenodd" />)}
      </_reactNativeSvg.default>;
  }

}

exports.default = Icons;
Icons.displayName = 'uiwm.Icon';
Icons.defaultProps = {
  size: 26
};
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JY29uL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJJY29ucyIsIlJlYWN0IiwiQ29tcG9uZW50IiwicmVuZGVyIiwibmFtZSIsInNpemUiLCJmaWxsIiwic3Ryb2tlIiwieG1sIiwicGF0aHMiLCJjb2xvciIsIm90aGVyUHJvcHMiLCJwcm9wcyIsInBhdGhEYXRhIiwic3ZnUGF0aHMiLCJtYXAiLCJkIiwiaSIsImRpc3BsYXlOYW1lIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBbUJlLE1BQU1BLEtBQU4sU0FBb0JDLGVBQU1DLFNBQTFCLENBQWdEO0FBSzdEQyxFQUFBQSxNQUFNLEdBQUc7QUFDUCxVQUFNO0FBQUVDLE1BQUFBLElBQUY7QUFBUUMsTUFBQUEsSUFBUjtBQUFjQyxNQUFBQSxJQUFJLEdBQUcsU0FBckI7QUFBZ0NDLE1BQUFBLE1BQWhDO0FBQXdDQyxNQUFBQSxHQUF4QztBQUE2Q0MsTUFBQUEsS0FBN0M7QUFBb0RDLE1BQUFBLEtBQXBEO0FBQTJELFNBQUdDO0FBQTlELFFBQTZFLEtBQUtDLEtBQXhGOztBQUNBLFFBQUlKLEdBQUosRUFBUztBQUNQLGFBQU8sd0JBQVEsSUFBSSxDQUFDQSxHQUFELENBQVosQ0FBa0IsT0FBTyxDQUFDSCxJQUFELENBQXpCLENBQWdDLE1BQU0sQ0FBQ0EsSUFBRCxDQUF0QyxDQUE2QyxJQUFJTSxVQUFKLENBQTdDLEdBQVA7QUFDRDs7QUFDRCxRQUFJRSxRQUFRLEdBQUdKLEtBQWY7O0FBQ0EsUUFBSSxDQUFDSSxRQUFMLEVBQWU7QUFDYixVQUFJLENBQUNULElBQUQsSUFBUyxDQUFDVSxlQUFTVixJQUFULENBQWQsRUFBOEI7QUFDNUIsZUFBTyxJQUFQO0FBQ0Q7O0FBQ0RTLE1BQUFBLFFBQVEsR0FBR0MsZUFBU1YsSUFBVCxDQUFYO0FBQ0Q7O0FBQ0QsV0FDRSx5QkFBSyxLQUFLLENBQUNNLEtBQUssSUFBSUosSUFBVixDQUFWLENBQTBCLE9BQU8sQ0FBQ0MsTUFBRCxDQUFqQyxDQUEwQyxPQUFPLENBQUNGLElBQUQsQ0FBakQsQ0FBd0QsTUFBTSxDQUFDQSxJQUFELENBQTlELENBQXFFLFFBQVEsV0FBN0UsQ0FBeUYsSUFBSU0sVUFBSixDQUF6RjtBQUNOLFFBQVEsQ0FBQ0UsUUFBUSxDQUFDRSxHQUFULENBQWEsQ0FBQ0MsQ0FBRCxFQUFZQyxDQUFaLEtBQ1osc0JBQU0sSUFBSSxDQUFDQSxDQUFELENBQVYsQ0FBYyxFQUFFLENBQUNELENBQUQsQ0FBaEIsQ0FBb0IsU0FBUyxTQUE3QixHQURELENBQUQ7QUFHUixNQUFNLDBCQUxGO0FBT0Q7O0FBeEI0RDs7O0FBQTFDaEIsSyxDQUNaa0IsVyxHQUFjLFc7QUFERmxCLEssQ0FFWm1CLFksR0FBMkI7QUFDaENkLEVBQUFBLElBQUksRUFBRTtBQUQwQixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTdmcsIHsgU3ZnWG1sLCBTdmdQcm9wcywgUGF0aCB9IGZyb20gJ3JlYWN0LW5hdGl2ZS1zdmcnO1xuaW1wb3J0IHN2Z1BhdGhzIGZyb20gJ0B1aXcvaWNvbnMvZm9udHMvdy1pY29uLmpzb24nO1xuXG5leHBvcnQgdHlwZSBJY29uc05hbWUgPSBrZXlvZiB0eXBlb2Ygc3ZnUGF0aHM7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSWNvbnNQcm9wcyBleHRlbmRzIFN2Z1Byb3BzIHtcbiAgbmFtZT86IEljb25zTmFtZTtcbiAgc2l6ZT86IG51bWJlcjtcbiAgZmlsbD86IHN0cmluZztcbiAgc3Ryb2tlPzogc3RyaW5nO1xuICAvKipcbiAgICogU1ZHIHBhdGggZD1gcGF0aHNgXG4gICAqL1xuICBwYXRocz86IHN0cmluZ1tdO1xuICAvKipcbiAgICogU3ZnIOWbvuagh+Wtl+espuS4slxuICAgKi9cbiAgeG1sPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJY29ucyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJY29uc1Byb3BzPiB7XG4gIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICd1aXdtLkljb24nO1xuICBzdGF0aWMgZGVmYXVsdFByb3BzOiBJY29uc1Byb3BzID0ge1xuICAgIHNpemU6IDI2LFxuICB9O1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBuYW1lLCBzaXplLCBmaWxsID0gJyMwMDAwMDAnLCBzdHJva2UsIHhtbCwgcGF0aHMsIGNvbG9yLCAuLi5vdGhlclByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICh4bWwpIHtcbiAgICAgIHJldHVybiA8U3ZnWG1sIHhtbD17eG1sfSBoZWlnaHQ9e3NpemV9IHdpZHRoPXtzaXplfSB7Li4ub3RoZXJQcm9wc30gLz47XG4gICAgfVxuICAgIGxldCBwYXRoRGF0YSA9IHBhdGhzO1xuICAgIGlmICghcGF0aERhdGEpIHtcbiAgICAgIGlmICghbmFtZSB8fCAhc3ZnUGF0aHNbbmFtZV0pIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICBwYXRoRGF0YSA9IHN2Z1BhdGhzW25hbWVdIGFzIHN0cmluZ1tdO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPFN2ZyBmaWxsPXtjb2xvciB8fCBmaWxsfSBzdHJva2U9e3N0cm9rZX0gaGVpZ2h0PXtzaXplfSB3aWR0aD17c2l6ZX0gdmlld0JveD1cIjAgMCAyMCAyMFwiIHsuLi5vdGhlclByb3BzfT5cbiAgICAgICAge3BhdGhEYXRhLm1hcCgoZDogc3RyaW5nLCBpOiBudW1iZXIpID0+IChcbiAgICAgICAgICA8UGF0aCBrZXk9e2l9IGQ9e2R9IGZpbGxSdWxlPVwiZXZlbm9kZFwiIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9Tdmc+XG4gICAgKTtcbiAgfVxufVxuIl19