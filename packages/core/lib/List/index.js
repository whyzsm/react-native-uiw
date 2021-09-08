"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _Item = _interopRequireDefault(require("./Item"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const noop = () => null;
/**
 * @see https://facebook.github.io/react-native/docs/flatlist.html#props
 */


class List extends _react.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  getData(nextProps) {
    const {
      size,
      extra,
      paddingLeft,
      children
    } = nextProps || this.props;

    const dataSource = _react.default.Children.toArray(children).map(child => {
      if (!_react.default.isValidElement(child)) {
        return null;
      }

      const props = {
        size,
        ...child.props
      };
      return _react.default.cloneElement(<_Item.default paddingLeft={paddingLeft} extra={extra} {...props} />);
    }).filter(Boolean);

    this.setState({
      data: dataSource
    });
  }

  componentDidMount() {
    if (!this.props.renderItem) {
      this.getData();
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.getData(nextProps);
    }
  }

  renderItemChild(props) {
    return props.item;
  }

  render() {
    const {
      renderItem,
      data,
      children,
      titleStyle,
      paddingLeft,
      flat,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      size,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      extra,
      ListHeaderComponent,
      title,
      ...otherProps
    } = this.props;
    const props = {};

    if (!renderItem) {
      props.data = this.state.data;
      props.renderItem = this.renderItemChild.bind(this);
    } else if (typeof renderItem === 'function') {
      props.data = data;

      props.renderItem = itemProps => renderItem({ ...itemProps
      });
    }

    let header = ListHeaderComponent;

    if (title) {
      header = // eslint-disable-next-line react-native/no-inline-styles
      <_reactNative.View style={[{
        paddingLeft,
        paddingVertical: 12
      }, titleStyle]}>
          {typeof title === 'string' ? // eslint-disable-next-line react-native/no-inline-styles
        <_reactNative.Text style={{
          color: '#808080'
        }}>{title}</_reactNative.Text> : <_reactNative.View>{title}</_reactNative.View>}
        </_reactNative.View>;
    }

    if (!props.renderItem) {
      props.renderItem = noop;
    }

    if (!flat) {
      return <_reactNative.View {...otherProps}>
          {header}
          {(renderItem && (!data || data.length === 0) || !renderItem && (!children || _react.default.Children.toArray(children).length === 0)) && otherProps.ListEmptyComponent}
          {(props.data || []).map((item, idx) => _react.default.cloneElement(props.renderItem && props.renderItem({
          item,
          index: idx
        }) || <_reactNative.View />, {
          key: idx
        }))}
        </_reactNative.View>;
    }

    return <_reactNative.FlatList ListHeaderComponent={header} keyExtractor={(__, index) => index.toString()} {...otherProps} {...props} />;
  }

}

exports.default = List;
List.Item = _Item.default;
List.defaultProps = {
  data: [],
  paddingLeft: 16,
  flat: true,
  size: 'default'
};
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9MaXN0L2luZGV4LnRzeCJdLCJuYW1lcyI6WyJub29wIiwiTGlzdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsImRhdGEiLCJnZXREYXRhIiwibmV4dFByb3BzIiwic2l6ZSIsImV4dHJhIiwicGFkZGluZ0xlZnQiLCJjaGlsZHJlbiIsImRhdGFTb3VyY2UiLCJSZWFjdCIsIkNoaWxkcmVuIiwidG9BcnJheSIsIm1hcCIsImNoaWxkIiwiaXNWYWxpZEVsZW1lbnQiLCJjbG9uZUVsZW1lbnQiLCJmaWx0ZXIiLCJCb29sZWFuIiwic2V0U3RhdGUiLCJjb21wb25lbnREaWRNb3VudCIsInJlbmRlckl0ZW0iLCJVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsInJlbmRlckl0ZW1DaGlsZCIsIml0ZW0iLCJyZW5kZXIiLCJ0aXRsZVN0eWxlIiwiZmxhdCIsIkxpc3RIZWFkZXJDb21wb25lbnQiLCJ0aXRsZSIsIm90aGVyUHJvcHMiLCJiaW5kIiwiaXRlbVByb3BzIiwiaGVhZGVyIiwicGFkZGluZ1ZlcnRpY2FsIiwiY29sb3IiLCJsZW5ndGgiLCJMaXN0RW1wdHlDb21wb25lbnQiLCJpZHgiLCJpbmRleCIsImtleSIsIl9fIiwidG9TdHJpbmciLCJJdGVtIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLE1BQU0sSUFBbkI7QUFFQTtBQUNBO0FBQ0E7OztBQXFDZSxNQUFNQyxJQUFOLFNBQW1CQyxnQkFBbkIsQ0FBbUQ7QUFRaEVDLEVBQUFBLFdBQVcsQ0FBQ0MsS0FBRCxFQUFtQjtBQUM1QixVQUFNQSxLQUFOO0FBQ0EsU0FBS0MsS0FBTCxHQUFhO0FBQ1hDLE1BQUFBLElBQUksRUFBRTtBQURLLEtBQWI7QUFHRDs7QUFDREMsRUFBQUEsT0FBTyxDQUFDQyxTQUFELEVBQXdCO0FBQzdCLFVBQU07QUFB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QU9BLGE7QUFESzlDLEksQ0FFWitDLFksR0FBMEI7QUFDL0IxQyxFQUFBQSxJQUFJLEVBQUUsRUFEeUI7QUFFL0JLLEVBQUFBLFdBQVcsRUFBRSxFQUZrQjtBQUcvQm9CLEVBQUFBLElBQUksRUFBRSxJQUh5QjtBQUkvQnRCLEVBQUFBLElBQUksRUFBRTtBQUp5QixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZsYXRMaXN0LCBGbGF0TGlzdFByb3BzLCBUZXh0LCBTdHlsZVByb3AsIFZpZXdTdHlsZSwgVmlldyB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5pbXBvcnQgSXRlbSwgeyBMaXN0SXRlbVByb3BzIH0gZnJvbSAnLi9JdGVtJztcblxuY29uc3Qgbm9vcCA9ICgpID0+IG51bGw7XG5cbi8qKlxuICogQHNlZSBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC1uYXRpdmUvZG9jcy9mbGF0bGlzdC5odG1sI3Byb3BzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTGlzdFJlbmRlckl0ZW1JbmZvQ3VzdG9tPEl0ZW1UPiB7XG4gIGl0ZW06IEl0ZW1UO1xuICBpbmRleDogbnVtYmVyO1xuICBzZXBhcmF0b3JzPzoge1xuICAgIGhpZ2hsaWdodDogKCkgPT4gdm9pZDtcbiAgICB1bmhpZ2hsaWdodDogKCkgPT4gdm9pZDtcbiAgICB1cGRhdGVQcm9wczogKHNlbGVjdDogJ2xlYWRpbmcnIHwgJ3RyYWlsaW5nJywgbmV3UHJvcHM6IGFueSkgPT4gdm9pZDtcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMaXN0UHJvcHMgZXh0ZW5kcyBPbWl0PEZsYXRMaXN0UHJvcHM8e30+LCAncmVuZGVySXRlbSc+IHtcbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGU7XG4gIHJlbmRlckl0ZW0/OiAoaW5mbzogTGlzdFJlbmRlckl0ZW1JbmZvQ3VzdG9tPHt9PikgPT4gUmVhY3QuUmVhY3RFbGVtZW50IHwgbnVsbDtcbiAgLyoqXG4gICAqIGZsYXQgZGVmYXVsdDogYHRydWVgXG4gICAqIC0gZmxhdCA9IGB0cnVlYCA9PiBgRmxhdExpc3RgXG4gICAqIC0gZmxhdCA9IGBmYWxzZWAgPT4gYDxWaWV3PmAg5LiK5ouJ5LiL5ouJ5Yi35paw5aSx5pWI77yM5piv5LiA5Liq566A5Y2V55qEIGBMaXN0YFxuICAgKi9cbiAgZmxhdD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmoIfpophcbiAgICovXG4gIHRpdGxlPzogUmVhY3QuUmVhY3ROb2RlO1xuICAvKipcbiAgICog6aKd5aSW5YaF5a6577yM5bGV56S65Y+z5L6n5YaF5a65O1xuICAgKi9cbiAgZXh0cmE/OiBSZWFjdC5SZWFjdE5vZGU7XG4gIHRpdGxlU3R5bGU/OiBTdHlsZVByb3A8Vmlld1N0eWxlPjtcbiAgcGFkZGluZ0xlZnQ/OiBMaXN0SXRlbVByb3BzWydwYWRkaW5nTGVmdCddO1xuICBzaXplPzogTGlzdEl0ZW1Qcm9wc1snc2l6ZSddO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExpc3RTdGF0ZSB7XG4gIGRhdGE6IExpc3RQcm9wc1snZGF0YSddO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IGV4dGVuZHMgQ29tcG9uZW50PExpc3RQcm9wcywgTGlzdFN0YXRlPiB7XG4gIHN0YXRpYyBJdGVtID0gSXRlbTtcbiAgc3RhdGljIGRlZmF1bHRQcm9wczogTGlzdFByb3BzID0ge1xuICAgIGRhdGE6IFtdLFxuICAgIHBhZGRpbmdMZWZ0OiAxNixcbiAgICBmbGF0OiB0cnVlLFxuICAgIHNpemU6ICdkZWZhdWx0JyxcbiAgfTtcbiAgY29uc3RydWN0b3IocHJvcHM6IExpc3RQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0YTogW10sXG4gICAgfTtcbiAgfVxuICBnZXREYXRhKG5leHRQcm9wcz86IExpc3RQcm9wcykge1xuICAgIGNvbnN0IHsgc2l6ZSwgZXh0cmEsIHBhZGRpbmdMZWZ0LCBjaGlsZHJlbiB9ID0gbmV4dFByb3BzIHx8IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZGF0YVNvdXJjZSA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pXG4gICAgICAubWFwKChjaGlsZDogUmVhY3QuUmVhY3ROb2RlKSA9PiB7XG4gICAgICAgIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJvcHMgPSB7IHNpemUsIC4uLmNoaWxkLnByb3BzIH07XG4gICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoPEl0ZW0gcGFkZGluZ0xlZnQ9e3BhZGRpbmdMZWZ0fSBleHRyYT17ZXh0cmF9IHsuLi5wcm9wc30gLz4pO1xuICAgICAgfSlcbiAgICAgIC5maWx0ZXIoQm9vbGVhbik7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IGRhdGFTb3VyY2UgYXMgTGlzdFByb3BzWydkYXRhJ10gfSk7XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLnJlbmRlckl0ZW0pIHtcbiAgICAgIHRoaXMuZ2V0RGF0YSgpO1xuICAgIH1cbiAgfVxuICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHM6IExpc3RQcm9wcykge1xuICAgIGlmIChuZXh0UHJvcHMgIT09IHRoaXMucHJvcHMpIHtcbiAgICAgIHRoaXMuZ2V0RGF0YShuZXh0UHJvcHMpO1xuICAgIH1cbiAgfVxuICByZW5kZXJJdGVtQ2hpbGQocHJvcHM6IExpc3RSZW5kZXJJdGVtSW5mb0N1c3RvbTx7fT4pOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xuICAgIHJldHVybiBwcm9wcy5pdGVtIGFzIFJlYWN0LlJlYWN0RWxlbWVudDtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgcmVuZGVySXRlbSxcbiAgICAgIGRhdGEsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIHRpdGxlU3R5bGUsXG4gICAgICBwYWRkaW5nTGVmdCxcbiAgICAgIGZsYXQsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICBzaXplLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgZXh0cmEsXG4gICAgICBMaXN0SGVhZGVyQ29tcG9uZW50LFxuICAgICAgdGl0bGUsXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgcHJvcHMgPSB7fSBhcyBMaXN0UHJvcHMgJiBGbGF0TGlzdFByb3BzPHt9PjtcbiAgICBpZiAoIXJlbmRlckl0ZW0pIHtcbiAgICAgIHByb3BzLmRhdGEgPSB0aGlzLnN0YXRlLmRhdGE7XG4gICAgICBwcm9wcy5yZW5kZXJJdGVtID0gdGhpcy5yZW5kZXJJdGVtQ2hpbGQuYmluZCh0aGlzKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiByZW5kZXJJdGVtID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9wcy5kYXRhID0gZGF0YTtcbiAgICAgIHByb3BzLnJlbmRlckl0ZW0gPSAoaXRlbVByb3BzOiBMaXN0UmVuZGVySXRlbUluZm9DdXN0b208e30+KSA9PiByZW5kZXJJdGVtKHsgLi4uaXRlbVByb3BzIH0pO1xuICAgIH1cbiAgICBsZXQgaGVhZGVyID0gTGlzdEhlYWRlckNvbXBvbmVudDtcbiAgICBpZiAodGl0bGUpIHtcbiAgICAgIGhlYWRlciA9IChcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LW5hdGl2ZS9uby1pbmxpbmUtc3R5bGVzXG4gICAgICAgIDxWaWV3IHN0eWxlPXtbeyBwYWRkaW5nTGVmdCwgcGFkZGluZ1ZlcnRpY2FsOiAxMiB9LCB0aXRsZVN0eWxlXX0+XG4gICAgICAgICAge3R5cGVvZiB0aXRsZSA9PT0gJ3N0cmluZycgPyAoXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtbmF0aXZlL25vLWlubGluZS1zdHlsZXNcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXt7IGNvbG9yOiAnIzgwODA4MCcgfX0+e3RpdGxlfTwvVGV4dD5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPFZpZXc+e3RpdGxlfTwvVmlldz5cbiAgICAgICAgICApfVxuICAgICAgICA8L1ZpZXc+XG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoIXByb3BzLnJlbmRlckl0ZW0pIHtcbiAgICAgIHByb3BzLnJlbmRlckl0ZW0gPSBub29wO1xuICAgIH1cbiAgICBpZiAoIWZsYXQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3IHsuLi5vdGhlclByb3BzfT5cbiAgICAgICAgICB7aGVhZGVyfVxuICAgICAgICAgIHsoKHJlbmRlckl0ZW0gJiYgKCFkYXRhIHx8IGRhdGEubGVuZ3RoID09PSAwKSkgfHxcbiAgICAgICAgICAgICghcmVuZGVySXRlbSAmJiAoIWNoaWxkcmVuIHx8IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pLmxlbmd0aCA9PT0gMCkpKSAmJlxuICAgICAgICAgICAgb3RoZXJQcm9wcy5MaXN0RW1wdHlDb21wb25lbnR9XG4gICAgICAgICAgeyhwcm9wcy5kYXRhIHx8IFtdKS5tYXAoKGl0ZW0sIGlkeCkgPT5cbiAgICAgICAgICAgIFJlYWN0LmNsb25lRWxlbWVudCgocHJvcHMucmVuZGVySXRlbSAmJiBwcm9wcy5yZW5kZXJJdGVtKHsgaXRlbSwgaW5kZXg6IGlkeCB9KSkgfHwgPFZpZXcgLz4sIHsga2V5OiBpZHggfSksXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9WaWV3PlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxGbGF0TGlzdFxuICAgICAgICBMaXN0SGVhZGVyQ29tcG9uZW50PXtoZWFkZXJ9XG4gICAgICAgIGtleUV4dHJhY3Rvcj17KF9fLCBpbmRleCkgPT4gaW5kZXgudG9TdHJpbmcoKX1cbiAgICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuIl19