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
    backgroundColor: '#e4e4e4',
    overflow: 'hidden'
  },
  logo: {
    width: 66,
    height: 58
  }
});

const defaultImage = require('./assets/user.png');

class Avatar extends _react.Component {
  render() {
    const {
      style,
      src,
      size,
      shape,
      rounded,
      imageProps,
      ...otherProps
    } = this.props;
    return <_reactNative.View style={[styles.defalut, style, {
      width: size,
      height: size
    }, {
      borderRadius: shape === 'circle' ? size / 2 : rounded
    }]} {...otherProps}>
        <_reactNative.Image style={{
        width: size,
        height: size
      }} source={typeof src === 'number' ? src : {
        uri: src
      }} {...imageProps} />
      </_reactNative.View>;
  }

}

exports.default = Avatar;
Avatar.defaultProps = {
  src: defaultImage,
  shape: 'square',
  rounded: 3,
  size: 40
};
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdmF0YXIvaW5kZXgudHN4Il0sIm5hbWVzIjpbInN0eWxlcyIsIlN0eWxlU2hlZXQiLCJjcmVhdGUiLCJkZWZhbHV0IiwiYmFja2dyb3VuZENvbG9yIiwib3ZlcmZsb3ciLCJsb2dvIiwid2lkdGgiLCJoZWlnaHQiLCJkZWZhdWx0SW1hZ2UiLCJyZXF1aXJlIiwiQXZhdGFyIiwiQ29tcG9uZW50IiwicmVuZGVyIiwic3R5bGUiLCJzcmMiLCJzaXplIiwic2hhcGUiLCJyb3VuZGVkIiwiaW1hZ2VQcm9wcyIsIm90aGVyUHJvcHMiLCJwcm9wcyIsImJvcmRlclJhZGl1cyIsInVyaSIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7QUFFQSxNQUFNQSxNQUFNLEdBQUdDLHdCQUFXQyxNQUFYLENBQWtCO0FBQy9CQyxFQUFBQSxPQUFPLEVBQUU7QUFDUEMsSUFBQUEsZUFBZSxFQUFFLFNBRFY7QUFFUEMsSUFBQUEsUUFBUSxFQUFFO0FBRkgsR0FEc0I7QUFLL0JDLEVBQUFBLElBQUksRUFBRTtBQUNKQyxJQUFBQSxLQUFLLEVBQUUsRUFESDtBQUVKQyxJQUFBQSxNQUFNLEVBQUU7QUFGSjtBQUx5QixDQUFsQixDQUFmOztBQVdBLE1BQU1DLFlBQVksR0FBR0MsT0FBTyxDQUFDLG1CQUFELENBQTVCOztBQVVlLE1BQU1DLE1BQU4sU0FBcUJDLGdCQUFyQixDQUE0QztBQU96REMsRUFBQUEsTUFBTSxHQUFHO0FBQ1AsVUFBTTtBQUFFQyxNQUFBQSxLQUFGO0FBQVNDLE1BQUFBLEdBQVQ7QUFBY0MsTUFBQUEsSUFBZDtBQUFvQkMsTUFBQUEsS0FBcEI7QUFBMkJDLE1BQUFBLE9BQTNCO0FBQW9DQyxNQUFBQSxVQUFwQztBQUFnRCxTQUFHQztBQUFuRCxRQUFrRSxLQUFLQyxLQUE3RTtBQUNBLFdBQ0UsbUJBQ0UsTUFBTSxDQUFDLENBQ0xyQixNQUFNLENBQUNHLE9BREYsRUFFTFcsS0FGSyxFQUdMO0FBQUVQLE1BQUFBLEtBQUssRUFBRVMsSUFBVDtBQUFlUixNQUFBQSxNQUFNLEVBQUVRO0FBQXZCLEtBSEssRUFJTDtBQUFFTSxNQUFBQSxZQUFZLEVBQUVMLEtBQUssS0FBSyxRQUFWLEdBQXFCRCxJQUFJLEdBQUksQ0FBN0IsR0FBaUNFO0FBQWpELEtBSkssQ0FBRCxDQURSLENBT0UsSUFBSUUsVUFBSixDQVBGO0FBU04sUUFBUSxvQkFDRSxNQUFNLENBQUM7QUFBRWIsUUFBQUEsS0FBSyxFQUFFUyxJQUFUO0FBQWVSLFFBQUFBLE1BQU0sRUFBRVE7QUFBdkIsT0FBRCxDQURSLENBRUUsT0FBTyxDQUFDLE9BQU9ELEdBQVAsS0FBZSxRQUFmLEdBQTBCQSxHQUExQixHQUFnQztBQUFFUSxRQUFBQSxHQUFHLEVBQUVSO0FBQVAsT0FBakMsQ0FGVCxDQUdFLElBQUlJLFVBQUosQ0FIRjtBQUtSLE1BQU0sb0JBZkY7QUFpQkQ7O0FBMUJ3RDs7O0FBQXRDUixNLENBQ1phLFksR0FBNEI7QUFDakNULEVBQUFBLEdBQUcsRUFBRU4sWUFENEI7QUFFakNRLEVBQUFBLEtBQUssRUFBRSxRQUYwQjtBQUdqQ0MsRUFBQUEsT0FBTyxFQUFFLENBSHdCO0FBSWpDRixFQUFBQSxJQUFJLEVBQUU7QUFKMkIsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBWaWV3LCBWaWV3UHJvcHMsIEltYWdlLCBJbWFnZVByb3BzLCBTdHlsZVNoZWV0IH0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuY29uc3Qgc3R5bGVzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuICBkZWZhbHV0OiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2U0ZTRlNCcsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICB9LFxuICBsb2dvOiB7XG4gICAgd2lkdGg6IDY2LFxuICAgIGhlaWdodDogNTgsXG4gIH0sXG59KTtcblxuY29uc3QgZGVmYXVsdEltYWdlID0gcmVxdWlyZSgnLi9hc3NldHMvdXNlci5wbmcnKTtcblxuZXhwb3J0IGludGVyZmFjZSBBdmF0YXJQcm9wcyBleHRlbmRzIFZpZXdQcm9wcyB7XG4gIGltYWdlUHJvcHM/OiBJbWFnZVByb3BzO1xuICBzcmM/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHNpemU/OiBudW1iZXI7XG4gIHJvdW5kZWQ/OiBudW1iZXI7XG4gIHNoYXBlPzogJ2NpcmNsZScgfCAnc3F1YXJlJztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXZhdGFyIGV4dGVuZHMgQ29tcG9uZW50PEF2YXRhclByb3BzPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHM6IEF2YXRhclByb3BzID0ge1xuICAgIHNyYzogZGVmYXVsdEltYWdlLFxuICAgIHNoYXBlOiAnc3F1YXJlJyxcbiAgICByb3VuZGVkOiAzLFxuICAgIHNpemU6IDQwLFxuICB9O1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzdHlsZSwgc3JjLCBzaXplLCBzaGFwZSwgcm91bmRlZCwgaW1hZ2VQcm9wcywgLi4ub3RoZXJQcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFZpZXdcbiAgICAgICAgc3R5bGU9e1tcbiAgICAgICAgICBzdHlsZXMuZGVmYWx1dCxcbiAgICAgICAgICBzdHlsZSxcbiAgICAgICAgICB7IHdpZHRoOiBzaXplLCBoZWlnaHQ6IHNpemUgfSxcbiAgICAgICAgICB7IGJvcmRlclJhZGl1czogc2hhcGUgPT09ICdjaXJjbGUnID8gc2l6ZSEgLyAyIDogcm91bmRlZCB9LFxuICAgICAgICBdfVxuICAgICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICAgID5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IHNpemUsIGhlaWdodDogc2l6ZSB9fVxuICAgICAgICAgIHNvdXJjZT17dHlwZW9mIHNyYyA9PT0gJ251bWJlcicgPyBzcmMgOiB7IHVyaTogc3JjIGFzIHN0cmluZyB9fVxuICAgICAgICAgIHsuLi5pbWFnZVByb3BzfVxuICAgICAgICAvPlxuICAgICAgPC9WaWV3PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==