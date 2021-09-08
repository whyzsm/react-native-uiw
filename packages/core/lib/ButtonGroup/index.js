"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _Flex = _interopRequireDefault(require("../Flex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const styles = _reactNative.StyleSheet.create({
  default: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});

class ButtonGroup extends _react.Component {
  render() {
    const {
      children,
      gutter,
      inline,
      size,
      rounded,
      // Button Props
      color,
      type,
      bordered,
      disabled,
      textStyle,
      // Button Props
      direction,
      justify,
      align,
      wrap,
      // Flex Props
      ...otherProps
    } = this.props;
    const porps = {
      color,
      type,
      bordered,
      disabled,
      textStyle
    };
    const flexProps = {
      direction,
      justify,
      align,
      wrap
    };

    const childs = _react.default.Children.toArray(children);

    if (inline) {
      flexProps.direction = 'row';
      flexProps.wrap = 'wrap';
    }

    return <_Flex.default style={styles.default} {...flexProps} {...otherProps}>
        {childs.map((child, idx) => {
        if (!_react.default.isValidElement(child)) {
          return null;
        }

        const childStyle = {
          flex: inline ? 0 : 1
        };

        if (inline && gutter) {
          childStyle.marginVertical = gutter / 2;
        }

        if (!gutter) {
          if (childs.length !== 1 && (idx === 0 || idx < childs.length - 1)) {
            childStyle.borderTopRightRadius = 0;
            childStyle.borderBottomRightRadius = 0;
          }

          if (childs.length > 0 && idx !== 0) {
            childStyle.borderTopLeftRadius = 0;
            childStyle.borderBottomLeftRadius = 0;
          }
        }

        if (!bordered) {
          childStyle.borderWidth = 0;
        }

        if (bordered && !gutter) {
          if (idx > 0 && idx < children.length - 1 || idx === 0) {
            childStyle.borderRightWidth = _reactNative.StyleSheet.hairlineWidth;
          }

          if (idx > 0 && idx < children.length) {
            childStyle.borderLeftWidth = _reactNative.StyleSheet.hairlineWidth;
          }
        }

        if (gutter && inline) {
          childStyle.marginHorizontal = gutter / 2;
        } else if (gutter && idx !== 0) {
          childStyle.marginLeft = gutter / 2;
        }

        return _react.default.cloneElement(child, { ...porps,
          ...child.props,
          size,
          rounded,
          style: [childStyle, child.props.style]
        });
      })}
      </_Flex.default>;
  }

}

exports.default = ButtonGroup;
ButtonGroup.defaultProps = {
  bordered: true,
  inline: false
};
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9CdXR0b25Hcm91cC9pbmRleC50c3giXSwibmFtZXMiOlsic3R5bGVzIiwiU3R5bGVTaGVldCIsImNyZWF0ZSIsImRlZmF1bHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImZsZXhXcmFwIiwiQnV0dG9uR3JvdXAiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJjaGlsZHJlbiIsImd1dHRlciIsImlubGluZSIsInNpemUiLCJyb3VuZGVkIiwiY29sb3IiLCJ0eXBlIiwiYm9yZGVyZWQiLCJkaXNhYmxlZCIsInRleHRTdHlsZSIsImRpcmVjdGlvbiIsImp1c3RpZnkiLCJhbGlnbiIsIndyYXAiLCJvdGhlclByb3BzIiwicHJvcHMiLCJwb3JwcyIsImZsZXhQcm9wcyIsImNoaWxkcyIsIlJlYWN0IiwiQ2hpbGRyZW4iLCJ0b0FycmF5IiwibWFwIiwiY2hpbGQiLCJpZHgiLCJpc1ZhbGlkRWxlbWVudCIsImNoaWxkU3R5bGUiLCJmbGV4IiwibWFyZ2luVmVydGljYWwiLCJsZW5ndGgiLCJib3JkZXJUb3BSaWdodFJhZGl1cyIsImJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzIiwiYm9yZGVyVG9wTGVmdFJhZGl1cyIsImJvcmRlckJvdHRvbUxlZnRSYWRpdXMiLCJib3JkZXJXaWR0aCIsImJvcmRlclJpZ2h0V2lkdGgiLCJoYWlybGluZVdpZHRoIiwiYm9yZGVyTGVmdFdpZHRoIiwibWFyZ2luSG9yaXpvbnRhbCIsIm1hcmdpbkxlZnQiLCJjbG9uZUVsZW1lbnQiLCJzdHlsZSIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUVBOzs7Ozs7OztBQUVBLE1BQU1BLE1BQU0sR0FBR0Msd0JBQVdDLE1BQVgsQ0FBa0I7QUFDL0JDLEVBQUFBLE9BQU8sRUFBRTtBQUNQQyxJQUFBQSxPQUFPLEVBQUUsTUFERjtBQUVQQyxJQUFBQSxhQUFhLEVBQUUsS0FGUjtBQUdQQyxJQUFBQSxRQUFRLEVBQUU7QUFISDtBQURz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LENBQUNTLGdCQUFYLEdBQThCNUMsd0JBQVc2QyxhQUF6QztBQUNEOztBQUNELGNBQUlaLEdBQUcsR0FBRyxDQUFOLElBQVdBLEdBQUcsR0FBSXhCLFFBQUQsQ0FBNEI2QixNQUFqRCxFQUF5RDtBQUN2REgsWUFBQUEsVUFBVSxDQUFDVyxlQUFYLEdBQTZCOUMsd0JBQVc2QyxhQUF4QztBQUNEO0FBQ0Y7O0FBQ0QsWUFBSW5DLE1BQU0sSUFBSUMsTUFBZCxFQUFzQjtBQUNwQndCLFVBQUFBLFVBQVUsQ0FBQ1ksZ0JBQVgsR0FBOEJyQyxNQUFNLEdBQUcsQ0FBdkM7QUFDRCxTQUZELE1BRU8sSUFBSUEsTUFBTSxJQUFJdUIsR0FBRyxLQUFLLENBQXRCLEVBQXlCO0FBQzlCRSxVQUFBQSxVQUFVLENBQUNhLFVBQVgsR0FBd0J0QyxNQUFNLEdBQUcsQ0FBakM7QUFDRDs7QUFDRCxlQUFPa0IsZUFBTXFCLFlBQU4sQ0FBbUJqQixLQUFuQixFQUEwQixFQUMvQixHQUFHUCxLQUQ0QjtBQUUvQixhQUFHTyxLQUFLLENBQUNSLEtBRnNCO0FBRy9CWixVQUFBQSxJQUgrQjtBQUkvQkMsVUFBQUEsT0FKK0I7QUFLL0JxQyxVQUFBQSxLQUFLLEVBQUUsQ0FBQ2YsVUFBRCxFQUFhSCxLQUFLLENBQUNSLEtBQU4sQ0FBWTBCLEtBQXpCO0FBTHdCLFNBQTFCLENBQVA7QUFPRCxPQTNDQSxDQUFEO0FBNENSLE1BQU0sZ0JBOUNGO0FBZ0REOztBQWhGa0U7OztBQUFoRDVDLFcsQ0FDWjZDLFksR0FBaUM7QUFDdENuQyxFQUFBQSxRQUFRLEVBQUUsSUFENEI7QUFFdENMLEVBQUFBLE1BQU0sRUFBRTtBQUY4QixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFN0eWxlU2hlZXQgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuaW1wb3J0IHsgQnV0dG9uUHJvcHMgfSBmcm9tICcuLi9CdXR0b24nO1xuaW1wb3J0IEZsZXgsIHsgRmxleFByb3BzIH0gZnJvbSAnLi4vRmxleCc7XG5cbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgZGVmYXVsdDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICB9LFxufSk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnV0dG9uR3JvdXBQcm9wcyBleHRlbmRzIEJ1dHRvblByb3BzLCBGbGV4UHJvcHMge1xuICAvKipcbiAgICog5oyJ6ZKu6Ze06ZqU6Ze06LedXG4gICAqL1xuICBndXR0ZXI/OiBudW1iZXI7XG4gIC8qKlxuICAgKiDmjaLooYzlsZXnpLpcbiAgICovXG4gIGlubGluZT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbkdyb3VwIGV4dGVuZHMgQ29tcG9uZW50PEJ1dHRvbkdyb3VwUHJvcHM+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wczogQnV0dG9uR3JvdXBQcm9wcyA9IHtcbiAgICBib3JkZXJlZDogdHJ1ZSxcbiAgICBpbmxpbmU6IGZhbHNlLFxuICB9O1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sXG4gICAgICBndXR0ZXIsXG4gICAgICBpbmxpbmUsXG4gICAgICBzaXplLFxuICAgICAgcm91bmRlZCwgLy8gQnV0dG9uIFByb3BzXG4gICAgICBjb2xvcixcbiAgICAgIHR5cGUsXG4gICAgICBib3JkZXJlZCxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgdGV4dFN0eWxlLCAvLyBCdXR0b24gUHJvcHNcbiAgICAgIGRpcmVjdGlvbixcbiAgICAgIGp1c3RpZnksXG4gICAgICBhbGlnbixcbiAgICAgIHdyYXAsIC8vIEZsZXggUHJvcHNcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBwb3JwcyA9IHsgY29sb3IsIHR5cGUsIGJvcmRlcmVkLCBkaXNhYmxlZCwgdGV4dFN0eWxlIH07XG4gICAgY29uc3QgZmxleFByb3BzID0geyBkaXJlY3Rpb24sIGp1c3RpZnksIGFsaWduLCB3cmFwIH07XG4gICAgY29uc3QgY2hpbGRzID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbik7XG5cbiAgICBpZiAoaW5saW5lKSB7XG4gICAgICBmbGV4UHJvcHMuZGlyZWN0aW9uID0gJ3Jvdyc7XG4gICAgICBmbGV4UHJvcHMud3JhcCA9ICd3cmFwJztcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEZsZXggc3R5bGU9e3N0eWxlcy5kZWZhdWx0fSB7Li4uZmxleFByb3BzfSB7Li4ub3RoZXJQcm9wc30+XG4gICAgICAgIHtjaGlsZHMubWFwKChjaGlsZDogUmVhY3QuUmVhY3ROb2RlLCBpZHg6IG51bWJlcikgPT4ge1xuICAgICAgICAgIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgY2hpbGRTdHlsZTogQnV0dG9uUHJvcHNbJ3N0eWxlJ10gPSB7XG4gICAgICAgICAgICBmbGV4OiBpbmxpbmUgPyAwIDogMSxcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmIChpbmxpbmUgJiYgZ3V0dGVyKSB7XG4gICAgICAgICAgICBjaGlsZFN0eWxlLm1hcmdpblZlcnRpY2FsID0gZ3V0dGVyIC8gMjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFndXR0ZXIpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZHMubGVuZ3RoICE9PSAxICYmIChpZHggPT09IDAgfHwgaWR4IDwgY2hpbGRzLmxlbmd0aCAtIDEpKSB7XG4gICAgICAgICAgICAgIGNoaWxkU3R5bGUuYm9yZGVyVG9wUmlnaHRSYWRpdXMgPSAwO1xuICAgICAgICAgICAgICBjaGlsZFN0eWxlLmJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaGlsZHMubGVuZ3RoID4gMCAmJiBpZHggIT09IDApIHtcbiAgICAgICAgICAgICAgY2hpbGRTdHlsZS5ib3JkZXJUb3BMZWZ0UmFkaXVzID0gMDtcbiAgICAgICAgICAgICAgY2hpbGRTdHlsZS5ib3JkZXJCb3R0b21MZWZ0UmFkaXVzID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFib3JkZXJlZCkge1xuICAgICAgICAgICAgY2hpbGRTdHlsZS5ib3JkZXJXaWR0aCA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChib3JkZXJlZCAmJiAhZ3V0dGVyKSB7XG4gICAgICAgICAgICBpZiAoKGlkeCA+IDAgJiYgaWR4IDwgKGNoaWxkcmVuIGFzIEJ1dHRvblByb3BzW10pLmxlbmd0aCAtIDEpIHx8IGlkeCA9PT0gMCkge1xuICAgICAgICAgICAgICBjaGlsZFN0eWxlLmJvcmRlclJpZ2h0V2lkdGggPSBTdHlsZVNoZWV0LmhhaXJsaW5lV2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaWR4ID4gMCAmJiBpZHggPCAoY2hpbGRyZW4gYXMgQnV0dG9uUHJvcHNbXSkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGNoaWxkU3R5bGUuYm9yZGVyTGVmdFdpZHRoID0gU3R5bGVTaGVldC5oYWlybGluZVdpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZ3V0dGVyICYmIGlubGluZSkge1xuICAgICAgICAgICAgY2hpbGRTdHlsZS5tYXJnaW5Ib3Jpem9udGFsID0gZ3V0dGVyIC8gMjtcbiAgICAgICAgICB9IGVsc2UgaWYgKGd1dHRlciAmJiBpZHggIT09IDApIHtcbiAgICAgICAgICAgIGNoaWxkU3R5bGUubWFyZ2luTGVmdCA9IGd1dHRlciAvIDI7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgICAgIC4uLnBvcnBzLFxuICAgICAgICAgICAgLi4uY2hpbGQucHJvcHMsXG4gICAgICAgICAgICBzaXplLFxuICAgICAgICAgICAgcm91bmRlZCxcbiAgICAgICAgICAgIHN0eWxlOiBbY2hpbGRTdHlsZSwgY2hpbGQucHJvcHMuc3R5bGVdLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KX1cbiAgICAgIDwvRmxleD5cbiAgICApO1xuICB9XG59XG4iXX0=