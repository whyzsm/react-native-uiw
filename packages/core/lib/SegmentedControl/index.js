"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ButtonGroup = _interopRequireDefault(require("../ButtonGroup"));

var _Button = _interopRequireDefault(require("../Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class SegmentedControl extends _react.Component {
  constructor(props) {
    super(props);

    this.handlePress = (label, selectedIndex) => {
      const {
        onValueChange
      } = this.props;
      this.setState({
        selectedIndex
      }, () => {
        onValueChange && onValueChange(label, selectedIndex);
      });
    };

    this.state = {
      selectedIndex: props.selectedIndex || 0
    };
  }

  render() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {
      value,
      selectedIndex,
      renderItem,
      ...otherProps
    } = this.props;
    return <_ButtonGroup.default {...otherProps}>
        {value && value.map((label, key) => {
        const styl = {};
        const textStyle = {};

        if (this.state.selectedIndex !== key + 1) {
          styl.backgroundColor = '#fff';
          textStyle.color = otherProps.color;
        }

        const props = {
          type: 'primary',
          style: [styl, otherProps.textStyle],
          textStyle: [textStyle],
          onPress: this.handlePress.bind(this, label, key + 1)
        };

        if (renderItem) {
          return renderItem(label, key + 1, props);
        }

        return _react.default.cloneElement(<_Button.default key={key} />, { ...props
        }, label);
      })}
      </_ButtonGroup.default>;
  }

}

exports.default = SegmentedControl;
SegmentedControl.defaultProps = {
  value: [],
  size: 'small',
  selectedIndex: 0,
  color: '#108ee9'
};
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TZWdtZW50ZWRDb250cm9sL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJTZWdtZW50ZWRDb250cm9sIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImhhbmRsZVByZXNzIiwibGFiZWwiLCJzZWxlY3RlZEluZGV4Iiwib25WYWx1ZUNoYW5nZSIsInNldFN0YXRlIiwic3RhdGUiLCJyZW5kZXIiLCJ2YWx1ZSIsInJlbmRlckl0ZW0iLCJvdGhlclByb3BzIiwibWFwIiwia2V5Iiwic3R5bCIsInRleHRTdHlsZSIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwidHlwZSIsInN0eWxlIiwib25QcmVzcyIsImJpbmQiLCJSZWFjdCIsImNsb25lRWxlbWVudCIsImRlZmF1bHRQcm9wcyIsInNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7QUFhZSxNQUFNQSxnQkFBTixTQUFrQ0MsZ0JBQWxDLENBQTZGO0FBQzFHQyxFQUFBQSxXQUFXLENBQUNDLEtBQUQsRUFBa0M7QUFDM0MsVUFBTUEsS0FBTjs7QUFEMkMsU0FZN0NDLFdBWjZDLEdBWS9CLENBQUNDLEtBQUQsRUFBb0JDLGFBQXBCLEtBQThDO0FBQzFELFlBQU07QUFBRUMsUUFBQUE7QUFBRixVQUFvQixLQUFLSixLQUEvQjtBQUNBLFdBQUtLLFFBQUwsQ0FBYztBQUFFRixRQUFBQTtBQUFGLE9BQWQsRUFBaUMsTUFBTTtBQUNyQ0MsUUFBQUEsYUFBYSxJQUFJQSxhQUFhLENBQUNGLEtBQUQsRUFBUUMsYUFBUixDQUE5QjtBQUNELE9BRkQ7QUFHRCxLQWpCNEM7O0FBRTNDLFNBQUtHLEtBQUwsR0FBYTtBQUNYSCxNQUFBQSxhQUFhLEVBQUVILEtBQUssQ0FBQ0csYUFBTixJQUF1QjtBQUQzQixLQUFiO0FBR0Q7O0FBYURJLEVBQUFBLE1BQU0sR0FBRztBQUNQO0FBQ0EsVUFBTTtBQUFFQyxNQUFBQSxLQUFGO0FBQVNMLE1BQUFBLGFBQVQ7QUFBd0JNLE1BQUFBLFVBQXhCO0FBQW9DLFNBQUdDO0FBQXZDLFFBQXNELEtBQUtWLEtBQWpFO0FBQ0EsV0FDRSxzQkFBYSxJQUFJVSxVQUFKLENBQWI7QUFDTixRQUFRLENBQUNGLEtBQUssSUFDSEEsS0FBRCxDQUEwQkcsR0FBMUIsQ0FBOEIsQ0FBQ1QsS0FBRCxFQUFvQlUsR0FBcEIsS0FBb0M7QUFDaEUsY0FBTUMsSUFBZSxHQUFHLEVBQXhCO0FBQ0EsY0FBTUMsU0FBb0IsR0FBRyxFQUE3Qjs7QUFDQSxZQUFJLEtBQUtSLEtBQUwsQ0FBV0gsYUFBWCxLQUE2QlMsR0FBRyxHQUFHLENBQXZDLEVBQTBDO0FBQ3hDQyxVQUFBQSxJQUFJLENBQUNFLGVBQUwsR0FBdUIsTUFBdkI7QUFDQUQsVUFBQUEsU0FBUyxDQUFDRSxLQUFWLEdBQWtCTixVQUFVLENBQUNNLEtBQTdCO0FBQ0Q7O0FBQ0QsY0FBTWhCLEtBQXVCLEdBQUc7QUFDOUJpQixVQUFBQSxJQUFJLEVBQUUsU0FEd0I7QUFFOUJDLFVBQUFBLEtBQUssRUFBRSxDQUFDTCxJQUFELEVBQU9ILFVBQVUsQ0FBQ0ksU0FBbEIsQ0FGdUI7QUFHOUJBLFVBQUFBLFNBQVMsRUFBRSxDQUFDQSxTQUFELENBSG1CO0FBSTlCSyxVQUFBQSxPQUFPLEVBQUUsS0FBS2xCLFdBQUwsQ0FBaUJtQixJQUFqQixDQUFzQixJQUF0QixFQUE0QmxCLEtBQTVCLEVBQW1DVSxHQUFHLEdBQUcsQ0FBekM7QUFKcUIsU0FBaEM7O0FBTUEsWUFBSUgsVUFBSixFQUFnQjtBQUNkLGlCQUFPQSxVQUFVLENBQUNQLEtBQUQsRUFBUVUsR0FBRyxHQUFHLENBQWQsRUFBaUJaLEtBQWpCLENBQWpCO0FBQ0Q7O0FBQ0QsZUFBT3FCLGVBQU1DLFlBQU4sQ0FBbUIsaUJBQVEsSUFBSSxDQUFDVixHQUFELENBQVosR0FBbkIsRUFBeUMsRUFBRSxHQUFHWjtBQUFMLFNBQXpDLEVBQXVERSxLQUF2RCxDQUFQO0FBQ0QsT0FqQkQsQ0FERjtBQW1CUixNQUFNLHVCQXJCRjtBQXVCRDs7QUE3Q3lHOzs7QUFBdkZMLGdCLENBT1owQixZLEdBQTBDO0FBQy9DZixFQUFBQSxLQUFLLEVBQUUsRUFEd0M7QUFFL0NnQixFQUFBQSxJQUFJLEVBQUUsT0FGeUM7QUFHL0NyQixFQUFBQSxhQUFhLEVBQUUsQ0FIZ0M7QUFJL0NhLEVBQUFBLEtBQUssRUFBRTtBQUp3QyxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFZpZXdTdHlsZSwgVGV4dFN0eWxlIH0gZnJvbSAncmVhY3QtbmF0aXZlJztcbmltcG9ydCBCdXR0b25Hcm91cCwgeyBCdXR0b25Hcm91cFByb3BzIH0gZnJvbSAnLi4vQnV0dG9uR3JvdXAnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9CdXR0b24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlZ21lbnRlZENvbnRyb2xQcm9wczxUPiBleHRlbmRzIEJ1dHRvbkdyb3VwUHJvcHMge1xuICB2YWx1ZT86IHN0cmluZ1tdIHwgVFtdO1xuICBzZWxlY3RlZEluZGV4PzogbnVtYmVyO1xuICByZW5kZXJJdGVtPzogKGxhYmVsOiBzdHJpbmcgfCBULCBzZWxlY3RlZEluZGV4OiBudW1iZXIsIHByb3BzOiBCdXR0b25Hcm91cFByb3BzKSA9PiBKU1guRWxlbWVudDtcbiAgb25WYWx1ZUNoYW5nZT86IChsYWJlbDogc3RyaW5nIHwgVCwgc2VsZWN0ZWRJbmRleDogbnVtYmVyKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlZ21lbnRlZENvbnRyb2xTdGF0ZSB7XG4gIHNlbGVjdGVkSW5kZXg6IG51bWJlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VnbWVudGVkQ29udHJvbDxUPiBleHRlbmRzIENvbXBvbmVudDxTZWdtZW50ZWRDb250cm9sUHJvcHM8VD4sIFNlZ21lbnRlZENvbnRyb2xTdGF0ZT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogU2VnbWVudGVkQ29udHJvbFByb3BzPFQ+KSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWxlY3RlZEluZGV4OiBwcm9wcy5zZWxlY3RlZEluZGV4IHx8IDAsXG4gICAgfTtcbiAgfVxuICBzdGF0aWMgZGVmYXVsdFByb3BzOiBTZWdtZW50ZWRDb250cm9sUHJvcHM8e30+ID0ge1xuICAgIHZhbHVlOiBbXSxcbiAgICBzaXplOiAnc21hbGwnLFxuICAgIHNlbGVjdGVkSW5kZXg6IDAsXG4gICAgY29sb3I6ICcjMTA4ZWU5JyxcbiAgfTtcbiAgaGFuZGxlUHJlc3MgPSAobGFiZWw6IHN0cmluZyB8IFQsIHNlbGVjdGVkSW5kZXg6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHsgb25WYWx1ZUNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRJbmRleCB9LCAoKSA9PiB7XG4gICAgICBvblZhbHVlQ2hhbmdlICYmIG9uVmFsdWVDaGFuZ2UobGFiZWwsIHNlbGVjdGVkSW5kZXgpO1xuICAgIH0pO1xuICB9O1xuICByZW5kZXIoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgIGNvbnN0IHsgdmFsdWUsIHNlbGVjdGVkSW5kZXgsIHJlbmRlckl0ZW0sIC4uLm90aGVyUHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCdXR0b25Hcm91cCB7Li4ub3RoZXJQcm9wc30+XG4gICAgICAgIHt2YWx1ZSAmJlxuICAgICAgICAgICh2YWx1ZSBhcyAoc3RyaW5nIHwgVClbXSkubWFwKChsYWJlbDogc3RyaW5nIHwgVCwga2V5OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0eWw6IFZpZXdTdHlsZSA9IHt9O1xuICAgICAgICAgICAgY29uc3QgdGV4dFN0eWxlOiBUZXh0U3R5bGUgPSB7fTtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkSW5kZXggIT09IGtleSArIDEpIHtcbiAgICAgICAgICAgICAgc3R5bC5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmZic7XG4gICAgICAgICAgICAgIHRleHRTdHlsZS5jb2xvciA9IG90aGVyUHJvcHMuY29sb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwcm9wczogQnV0dG9uR3JvdXBQcm9wcyA9IHtcbiAgICAgICAgICAgICAgdHlwZTogJ3ByaW1hcnknLFxuICAgICAgICAgICAgICBzdHlsZTogW3N0eWwsIG90aGVyUHJvcHMudGV4dFN0eWxlXSxcbiAgICAgICAgICAgICAgdGV4dFN0eWxlOiBbdGV4dFN0eWxlXSxcbiAgICAgICAgICAgICAgb25QcmVzczogdGhpcy5oYW5kbGVQcmVzcy5iaW5kKHRoaXMsIGxhYmVsLCBrZXkgKyAxKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAocmVuZGVySXRlbSkge1xuICAgICAgICAgICAgICByZXR1cm4gcmVuZGVySXRlbShsYWJlbCwga2V5ICsgMSwgcHJvcHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudCg8QnV0dG9uIGtleT17a2V5fSAvPiwgeyAuLi5wcm9wcyB9LCBsYWJlbCk7XG4gICAgICAgICAgfSl9XG4gICAgICA8L0J1dHRvbkdyb3VwPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==