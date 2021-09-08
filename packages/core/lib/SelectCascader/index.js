"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactNative = require("react-native");

var _react = _interopRequireWildcard(require("react"));

var _picker = require("@react-native-picker/picker");

var _arrayTreeFilter = _interopRequireDefault(require("../utils/arrayTreeFilter"));

var _Modal = _interopRequireDefault(require("../Modal"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class SelectCascader extends _react.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      value: this.getValue(this.props.data, this.props.defaultValue || this.props.value),
      modalVisible: this.props.visible
    };

    this.outerCtrl = () => {
      this.setState({
        modalVisible: !this.state.modalVisible
      });
    };

    this.onValueChange = (itemValue, index) => {
      const value = this.state.value.concat();
      value[index] = itemValue;
      const children = (0, _arrayTreeFilter.default)(this.props.data, (c, level) => {
        return level <= index && c.value === value[level];
      });
      let data = children[index];
      let i;

      for (i = index + 1; data && data.children && data.children.length && i < this.props.cols; i++) {
        data = data.children[0];
        value[i] = data.value;
      }

      value.length = i;
      value[index] = itemValue;
      this.setState({
        value
      });

      if (this.props.onChange) {
        this.props.onChange(value, this.getSel(value));
      }
    };

    this.getCols = () => {
      const {
        data,
        cols,
        pickerItemStyle
      } = this.props;
      const {
        value
      } = this.state;
      const childrenTree = (0, _arrayTreeFilter.default)(data, (c, level) => {
        return c.value === value[level];
      }).map(c => c.children);
      const needPad = cols - childrenTree.length;

      if (needPad > 0) {
        for (let i = 0; i < needPad; i++) {
          childrenTree.push([]);
        }
      }

      childrenTree.length = cols - 1;
      childrenTree.unshift(data);
      return childrenTree.map((children = [], level) => <_picker.Picker key={level} // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1
      }} selectedValue={value[level]} onValueChange={itemValue => this.onValueChange(itemValue, level)} itemStyle={pickerItemStyle}>
        {children.map(item => <_picker.Picker.Item value={item.value} label={item.label} key={item.value} />)}
      </_picker.Picker>);
    };

    this.onDismiss = () => {
      if (this.props.onDismiss) {
        this.props.onDismiss();
      }
    };

    this.onOk = () => {
      if (this.props.onOk) {
        const {
          value
        } = this.state;
        this.props.onOk(value, this.getSel(value));
      }
    };
  }

  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({
        value: this.getValue(nextProps.data, nextProps.value)
      });
    }

    if ('visible' in nextProps) {
      this.setState({
        modalVisible: nextProps.visible
      });
    }
  }

  getSel(value) {
    if (!value) {
      return '';
    }

    const treeChildren = (0, _arrayTreeFilter.default)(this.props.data, (c, level) => {
      return c.value === value[level];
    });
    return treeChildren.map(v => {
      return v.label;
    }).join(',');
  }

  getValue(d, val) {
    let data = d || this.props.data;
    let value = val || this.props.value || this.props.defaultValue;

    if (!value || !value.length || value.indexOf(undefined) > -1) {
      value = [];

      for (let i = 0; i < this.props.cols; i++) {
        if (data && data.length) {
          value[i] = data[0].value;

          if (data[0].children) {
            data = data[0].children;
          }
        }
      }
    }

    return value;
  }

  render() {
    const {
      title,
      dismissText,
      okText,
      onDismiss,
      headerStyle
    } = this.props;
    const cols = this.getCols();
    return <_Modal.default visible={this.state.modalVisible} onClosed={() => {
      this.setState({
        modalVisible: false
      });
    }}>
        <>
          <_reactNative.View style={[styles.header, headerStyle]}>
            <_reactNative.TouchableHighlight onPress={onDismiss} style={[styles.headerItem]}>
              <_reactNative.Text>{dismissText}</_reactNative.Text>
            </_reactNative.TouchableHighlight>
            <_reactNative.View style={[styles.headerItem]}>
              <_reactNative.Text>{title}</_reactNative.Text>
            </_reactNative.View>
            <_reactNative.TouchableHighlight onPress={this.onOk} style={[styles.headerItem]}>
              <_reactNative.Text>{okText}</_reactNative.Text>
            </_reactNative.TouchableHighlight>
          </_reactNative.View>
          <_reactNative.View style={styles.list}>{cols}</_reactNative.View>
        </>
      </_Modal.default>;
  }

}

exports.default = SelectCascader;
SelectCascader.defaultProps = {
  dismissText: '取消',
  okText: '确定',
  title: '请选择',
  disabled: false,
  cols: 3
};

const styles = _reactNative.StyleSheet.create({
  header: {
    height: 44,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: _utils.colors.blue
  },
  headerItem: {
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  list: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TZWxlY3RDYXNjYWRlci9pbmRleC50c3giXSwibmFtZXMiOlsiU2VsZWN0Q2FzY2FkZXIiLCJDb21wb25lbnQiLCJzdGF0ZSIsInZhbHVlIiwiZ2V0VmFsdWUiLCJwcm9wcyIsImRhdGEiLCJkZWZhdWx0VmFsdWUiLCJtb2RhbFZpc2libGUiLCJ2aXNpYmxlIiwib3V0ZXJDdHJsIiwic2V0U3RhdGUiLCJvblZhbHVlQ2hhbmdlIiwiaXRlbVZhbHVlIiwiaW5kZXgiLCJjb25jYXQiLCJjaGlsZHJlbiIsImMiLCJsZXZlbCIsImkiLCJsZW5ndGgiLCJjb2xzIiwib25DaGFuZ2UiLCJnZXRTZWwiLCJnZXRDb2xzIiwicGlja2VySXRlbVN0eWxlIiwiY2hpbGRyZW5UcmVlIiwibWFwIiwibmVlZFBhZCIsInB1c2giLCJ1bnNoaWZ0IiwiZmxleCIsIml0ZW0iLCJsYWJlbCIsIm9uRGlzbWlzcyIsIm9uT2siLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwibmV4dFByb3BzIiwidHJlZUNoaWxkcmVuIiwidiIsImpvaW4iLCJkIiwidmFsIiwiaW5kZXhPZiIsInVuZGVmaW5lZCIsInJlbmRlciIsInRpdGxlIiwiZGlzbWlzc1RleHQiLCJva1RleHQiLCJoZWFkZXJTdHlsZSIsInN0eWxlcyIsImhlYWRlciIsImhlYWRlckl0ZW0iLCJsaXN0IiwiZGVmYXVsdFByb3BzIiwiZGlzYWJsZWQiLCJTdHlsZVNoZWV0IiwiY3JlYXRlIiwiaGVpZ2h0IiwiYWxpZ25JdGVtcyIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImJvcmRlckJvdHRvbVdpZHRoIiwiYm9yZGVyQm90dG9tQ29sb3IiLCJjb2xvcnMiLCJibHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBa0NlLE1BQU1BLGNBQU4sU0FBNkJDLGdCQUE3QixDQUFxRTtBQUFBO0FBQUE7QUFBQSxTQVFsRkMs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QkFBaUIsRUFBRSxDQUxiO0FBTU5DLElBQUFBLGlCQUFpQixFQUFFQyxjQUFPQztBQU5wQixHQUR1QjtBQVMvQmIsRUFBQUEsVUFBVSxFQUFFO0FBQ1ZNLElBQUFBLE1BQU0sRUFBRSxFQURFO0FBRVZDLElBQUFBLFVBQVUsRUFBRSxRQUZGO0FBR1ZFLElBQUFBLGNBQWMsRUFBRSxRQUhOO0FBSVY5QixJQUFBQSxJQUFJLEVBQUU7QUFKSSxHQVRtQjtBQWUvQnNCLEVBQUFBLElBQUksRUFBRTtBQUNKTyxJQUFBQSxhQUFhLEVBQUUsS0FEWDtBQUVKRCxJQUFBQSxVQUFVLEVBQUU7QUFGUjtBQWZ5QixDQUFsQixDQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmlldywgVGV4dCwgU3R5bGVTaGVldCwgVG91Y2hhYmxlSGlnaGxpZ2h0LCBTdHlsZVByb3AsIFRleHRTdHlsZSwgVmlld1N0eWxlIH0gZnJvbSAncmVhY3QtbmF0aXZlJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQaWNrZXIgfSBmcm9tICdAcmVhY3QtbmF0aXZlLXBpY2tlci9waWNrZXInO1xuaW1wb3J0IGFycmF5VHJlZUZpbHRlciBmcm9tICcuLi91dGlscy9hcnJheVRyZWVGaWx0ZXInO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4uL01vZGFsJztcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlY2xhcmUgdHlwZSBDYXNjYWRlck9uZVZhbHVlID0gc3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkO1xuZXhwb3J0IGRlY2xhcmUgdHlwZSBDYXNjYWRlclZhbHVlID0gQ2FzY2FkZXJPbmVWYWx1ZVtdO1xuXG5leHBvcnQgaW50ZXJmYWNlIElDYXNjYWRlckRhdGFJdGVtIHtcbiAgbGFiZWw6IFJlYWN0LlJlYWN0Tm9kZTtcbiAgdmFsdWU6IENhc2NhZGVyT25lVmFsdWU7XG4gIGNoaWxkcmVuPzogSUNhc2NhZGVyRGF0YUl0ZW1bXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU2VsZWN0Q2FzY2FkZXJQcm9wcyB7XG4gIG9uRGlzbWlzcz86ICgpID0+IHZvaWQ7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBkaXNtaXNzVGV4dD86IHN0cmluZztcbiAgb2tUZXh0Pzogc3RyaW5nO1xuICB2YWx1ZT86IENhc2NhZGVyVmFsdWU7XG4gIG9uQ2hhbmdlPzogKHZhbHVlOiBDYXNjYWRlclZhbHVlLCBsYWJlbDogc3RyaW5nKSA9PiB2b2lkO1xuICB2aXNpYmxlOiBib29sZWFuO1xuICBvblZpc2libGVDaGFuZ2U/OiAoKSA9PiB7fTtcbiAgZGF0YTogSUNhc2NhZGVyRGF0YUl0ZW1bXTtcbiAgZGVmYXVsdFZhbHVlPzogQ2FzY2FkZXJWYWx1ZSB8IHVuZGVmaW5lZDtcbiAgb25Paz86ICh2YWx1ZTogQ2FzY2FkZXJWYWx1ZSwgbGFiZWw6IHN0cmluZykgPT4gdm9pZDtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBjb2xzPzogbnVtYmVyO1xuICBwaWNrZXJJdGVtU3R5bGU/OiBTdHlsZVByb3A8VGV4dFN0eWxlPjtcbiAgaGVhZGVyU3R5bGU/OiBTdHlsZVByb3A8Vmlld1N0eWxlPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJc3RhdGUge1xuICBtb2RhbFZpc2libGU6IGJvb2xlYW47XG4gIHZhbHVlOiBDYXNjYWRlclZhbHVlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3RDYXNjYWRlciBleHRlbmRzIENvbXBvbmVudDxJU2VsZWN0Q2FzY2FkZXJQcm9wcywgSXN0YXRlPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZGlzbWlzc1RleHQ6ICflj5bmtognLFxuICAgIG9rVGV4dDogJ+ehruWumicsXG4gICAgdGl0bGU6ICfor7fpgInmi6knLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBjb2xzOiAzLFxuICB9O1xuICBzdGF0ZSA9IHtcbiAgICB2YWx1ZTogdGhpcy5nZXRWYWx1ZSh0aGlzLnByb3BzLmRhdGEsIHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlIHx8IHRoaXMucHJvcHMudmFsdWUpLFxuICAgIG1vZGFsVmlzaWJsZTogdGhpcy5wcm9wcy52aXNpYmxlLFxuICB9O1xuXG4gIG91dGVyQ3RybCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1vZGFsVmlzaWJsZTogIXRoaXMuc3RhdGUubW9kYWxWaXNpYmxlLFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzOiBJU2VsZWN0Q2FzY2FkZXJQcm9wcykge1xuICAgIGlmICgndmFsdWUnIGluIG5leHRQcm9wcykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHZhbHVlOiB0aGlzLmdldFZhbHVlKG5leHRQcm9wcy5kYXRhLCBuZXh0UHJvcHMudmFsdWUpLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICgndmlzaWJsZScgaW4gbmV4dFByb3BzKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbW9kYWxWaXNpYmxlOiBuZXh0UHJvcHMudmlzaWJsZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldFNlbCh2YWx1ZTogQ2FzY2FkZXJWYWx1ZSkge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgY29uc3QgdHJlZUNoaWxkcmVuID0gYXJyYXlUcmVlRmlsdGVyKHRoaXMucHJvcHMuZGF0YSwgKGMsIGxldmVsKSA9PiB7XG4gICAgICByZXR1cm4gYy52YWx1ZSA9PT0gdmFsdWVbbGV2ZWxdO1xuICAgIH0pO1xuICAgIHJldHVybiB0cmVlQ2hpbGRyZW5cbiAgICAgIC5tYXAoKHYpID0+IHtcbiAgICAgICAgcmV0dXJuIHYubGFiZWw7XG4gICAgICB9KVxuICAgICAgLmpvaW4oJywnKTtcbiAgfVxuXG4gIG9uVmFsdWVDaGFuZ2UgPSAoaXRlbVZhbHVlOiBDYXNjYWRlck9uZVZhbHVlLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlLmNvbmNhdCgpO1xuICAgIHZhbHVlW2luZGV4XSA9IGl0ZW1WYWx1ZTtcbiAgICBjb25zdCBjaGlsZHJlbiA9IGFycmF5VHJlZUZpbHRlcih0aGlzLnByb3BzLmRhdGEsIChjLCBsZXZlbCkgPT4ge1xuICAgICAgcmV0dXJuIGxldmVsIDw9IGluZGV4ICYmIGMudmFsdWUgPT09IHZhbHVlW2xldmVsXTtcbiAgICB9KTtcbiAgICBsZXQgZGF0YSA9IGNoaWxkcmVuW2luZGV4XTtcbiAgICBsZXQgaTtcbiAgICBmb3IgKGkgPSBpbmRleCArIDE7IGRhdGEgJiYgZGF0YS5jaGlsZHJlbiAmJiBkYXRhLmNoaWxkcmVuLmxlbmd0aCAmJiBpIDwgdGhpcy5wcm9wcy5jb2xzITsgaSsrKSB7XG4gICAgICBkYXRhID0gZGF0YS5jaGlsZHJlblswXTtcblxuICAgICAgdmFsdWVbaV0gPSBkYXRhLnZhbHVlO1xuICAgIH1cbiAgICB2YWx1ZS5sZW5ndGggPSBpO1xuICAgIHZhbHVlW2luZGV4XSA9IGl0ZW1WYWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWUgfSk7XG4gICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodmFsdWUsIHRoaXMuZ2V0U2VsKHZhbHVlKSk7XG4gICAgfVxuICB9O1xuXG4gIGdldFZhbHVlKGQ6IElDYXNjYWRlckRhdGFJdGVtW10sIHZhbDogQ2FzY2FkZXJWYWx1ZSB8IHVuZGVmaW5lZCkge1xuICAgIGxldCBkYXRhID0gZCB8fCB0aGlzLnByb3BzLmRhdGE7XG4gICAgbGV0IHZhbHVlID0gdmFsIHx8IHRoaXMucHJvcHMudmFsdWUgfHwgdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWU7XG4gICAgaWYgKCF2YWx1ZSB8fCAhdmFsdWUubGVuZ3RoIHx8IHZhbHVlLmluZGV4T2YodW5kZWZpbmVkKSA+IC0xKSB7XG4gICAgICB2YWx1ZSA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BzLmNvbHMhOyBpKyspIHtcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICB2YWx1ZVtpXSA9IGRhdGFbMF0udmFsdWU7XG4gICAgICAgICAgaWYgKGRhdGFbMF0uY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGRhdGEgPSBkYXRhWzBdLmNoaWxkcmVuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBnZXRDb2xzID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZGF0YSwgY29scywgcGlja2VySXRlbVN0eWxlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgY2hpbGRyZW5UcmVlID0gYXJyYXlUcmVlRmlsdGVyKGRhdGEsIChjLCBsZXZlbCkgPT4ge1xuICAgICAgcmV0dXJuIGMudmFsdWUgPT09IHZhbHVlW2xldmVsXTtcbiAgICB9KS5tYXAoKGMpID0+IGMuY2hpbGRyZW4pO1xuICAgIGNvbnN0IG5lZWRQYWQgPSBjb2xzISAtIGNoaWxkcmVuVHJlZS5sZW5ndGg7XG4gICAgaWYgKG5lZWRQYWQgPiAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5lZWRQYWQ7IGkrKykge1xuICAgICAgICBjaGlsZHJlblRyZWUucHVzaChbXSk7XG4gICAgICB9XG4gICAgfVxuICAgIGNoaWxkcmVuVHJlZS5sZW5ndGggPSBjb2xzISAtIDE7XG4gICAgY2hpbGRyZW5UcmVlLnVuc2hpZnQoZGF0YSk7XG4gICAgcmV0dXJuIGNoaWxkcmVuVHJlZS5tYXAoKGNoaWxkcmVuOiBhbnlbXSA9IFtdLCBsZXZlbCkgPT4gKFxuICAgICAgPFBpY2tlclxuICAgICAgICBrZXk9e2xldmVsfVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtbmF0aXZlL25vLWlubGluZS1zdHlsZXNcbiAgICAgICAgc3R5bGU9e3sgZmxleDogMSB9fVxuICAgICAgICBzZWxlY3RlZFZhbHVlPXt2YWx1ZVtsZXZlbF19XG4gICAgICAgIG9uVmFsdWVDaGFuZ2U9eyhpdGVtVmFsdWUpID0+IHRoaXMub25WYWx1ZUNoYW5nZShpdGVtVmFsdWUsIGxldmVsKX1cbiAgICAgICAgaXRlbVN0eWxlPXtwaWNrZXJJdGVtU3R5bGV9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbi5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICA8UGlja2VyLkl0ZW0gdmFsdWU9e2l0ZW0udmFsdWV9IGxhYmVsPXtpdGVtLmxhYmVsfSBrZXk9e2l0ZW0udmFsdWV9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9QaWNrZXI+XG4gICAgKSk7XG4gIH07XG5cbiAgb25EaXNtaXNzID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLm9uRGlzbWlzcykge1xuICAgICAgdGhpcy5wcm9wcy5vbkRpc21pc3MoKTtcbiAgICB9XG4gIH07XG4gIG9uT2sgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMub25Paykge1xuICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIHRoaXMucHJvcHMub25Payh2YWx1ZSwgdGhpcy5nZXRTZWwodmFsdWUpKTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGl0bGUsIGRpc21pc3NUZXh0LCBva1RleHQsIG9uRGlzbWlzcywgaGVhZGVyU3R5bGUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY29scyA9IHRoaXMuZ2V0Q29scygpO1xuICAgIHJldHVybiAoXG4gICAgICA8TW9kYWxcbiAgICAgICAgdmlzaWJsZT17dGhpcy5zdGF0ZS5tb2RhbFZpc2libGV9XG4gICAgICAgIG9uQ2xvc2VkPXsoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1vZGFsVmlzaWJsZTogZmFsc2UgfSk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDw+XG4gICAgICAgICAgPFZpZXcgc3R5bGU9e1tzdHlsZXMuaGVhZGVyLCBoZWFkZXJTdHlsZV19PlxuICAgICAgICAgICAgPFRvdWNoYWJsZUhpZ2hsaWdodCBvblByZXNzPXtvbkRpc21pc3N9IHN0eWxlPXtbc3R5bGVzLmhlYWRlckl0ZW1dfT5cbiAgICAgICAgICAgICAgPFRleHQ+e2Rpc21pc3NUZXh0fTwvVGV4dD5cbiAgICAgICAgICAgIDwvVG91Y2hhYmxlSGlnaGxpZ2h0PlxuICAgICAgICAgICAgPFZpZXcgc3R5bGU9e1tzdHlsZXMuaGVhZGVySXRlbV19PlxuICAgICAgICAgICAgICA8VGV4dD57dGl0bGV9PC9UZXh0PlxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgPFRvdWNoYWJsZUhpZ2hsaWdodCBvblByZXNzPXt0aGlzLm9uT2t9IHN0eWxlPXtbc3R5bGVzLmhlYWRlckl0ZW1dfT5cbiAgICAgICAgICAgICAgPFRleHQ+e29rVGV4dH08L1RleHQ+XG4gICAgICAgICAgICA8L1RvdWNoYWJsZUhpZ2hsaWdodD5cbiAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5saXN0fT57Y29sc308L1ZpZXc+XG4gICAgICAgIDwvPlxuICAgICAgPC9Nb2RhbD5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgaGVhZGVyOiB7XG4gICAgaGVpZ2h0OiA0NCxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgYm9yZGVyQm90dG9tV2lkdGg6IDEsXG4gICAgYm9yZGVyQm90dG9tQ29sb3I6IGNvbG9ycy5ibHVlLFxuICB9LFxuICBoZWFkZXJJdGVtOiB7XG4gICAgaGVpZ2h0OiA0NCxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgZmxleDogMSxcbiAgfSxcbiAgbGlzdDoge1xuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICB9LFxufSk7XG4iXX0=