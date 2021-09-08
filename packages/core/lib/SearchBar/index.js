"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SearchBar;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _MaskLayer = _interopRequireDefault(require("../MaskLayer"));

var _List = _interopRequireDefault(require("../List"));

var _svg = require("./svg");

var _Icon = _interopRequireDefault(require("../Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// 搜索组件
function SearchBar({
  onChangeText,
  options = [],
  onChange,
  labelInValue,
  disabled,
  value,
  onFocus,
  loading,
  placeholder,
  extra
}) {
  const onHandleChangeText = val => {
    onChangeText && onChangeText(val);
  };

  const [curValue, setCurValue] = (0, _react.useState)(value);
  const [visible, setVisivble] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    setCurValue(value);
  }, [value]);
  (0, _react.useEffect)(() => {
    visible && onFocus;
  }, [visible]);

  const showSearchBar = () => {
    if (disabled) {
      return;
    }

    setVisivble(true);
  };

  const textValue = labelInValue ? curValue && curValue.label : curValue;
  return !visible ? <_reactNative.Pressable onPress={showSearchBar}>
      <_reactNative.View style={[styles.content]}>
        <_reactNative.Text style={styles.contentTitle}>{textValue ? textValue : placeholder}</_reactNative.Text>
        {_react.default.isValidElement(extra) ? extra : <_Icon.default xml={_svg.down} size={18} />}
      </_reactNative.View>
    </_reactNative.Pressable> : <_MaskLayer.default visible={visible}>
      <_reactNative.SafeAreaView style={styles.container}>
        <_reactNative.View style={styles.inputBox}>
          <_reactNative.View style={styles.leftBox}>
            <_reactNative.View style={styles.icon}>
              <_Icon.default name="search" color="#ccc" size={20} />
            </_reactNative.View>
            <_reactNative.TextInput placeholderTextColor="#000" onFocus={onFocus && onFocus} style={styles.input} placeholder="输入搜索..." onChangeText={onHandleChangeText} />
          </_reactNative.View>

          <_reactNative.TouchableWithoutFeedback onPress={() => {
          setVisivble(false);
        }}>
            <_reactNative.View style={styles.cancel}>
              <_reactNative.Text>取消</_reactNative.Text>
            </_reactNative.View>
          </_reactNative.TouchableWithoutFeedback>
        </_reactNative.View>
        {loading ? <_reactNative.ActivityIndicator color="#0A0258" size="large" style={styles.loading} /> : <_List.default style={styles.list}>
            {options.map(itm => <_List.default.Item key={itm.value} onPress={() => {
          const selectValue = labelInValue ? {
            key: itm.value,
            label: itm.label
          } : itm.value;
          onChange && onChange(selectValue);
          setCurValue(selectValue);
          setVisivble(false);
        }}>
                <_reactNative.Text style={{
            fontSize: 16
          }}>{itm.label}</_reactNative.Text>
              </_List.default.Item>)}
          </_List.default>}
      </_reactNative.SafeAreaView>
    </_MaskLayer.default>;
}

const styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  contentTitle: {
    fontSize: 16,
    color: 'black'
  },
  inputBox: {
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    height: 40
  },
  leftBox: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 8
  },
  icon: {
    backgroundColor: '#fff',
    paddingLeft: 10,
    justifyContent: 'center'
  },
  input: {
    backgroundColor: '#fff',
    fontSize: 16,
    flex: 1,
    paddingLeft: 10,
    color: '#7C7D7E',
    paddingBottom: 0,
    paddingTop: 0
  },
  cancel: {
    color: '#7C7D7E',
    paddingLeft: 10,
    justifyContent: 'center'
  },
  list: {
    marginLeft: 10,
    marginTop: 10,
    marginRight: 10
  },
  loading: {
    position: 'absolute',
    top: '20%',
    left: '45%'
  },
  content: {
    flexDirection: 'row',
    height: 35,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 5,
    backgroundColor: '#fff',
    paddingHorizontal: 16
  },
  disabled: {
    backgroundColor: '#f5f5f5'
  }
});

module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TZWFyY2hCYXIvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlNlYXJjaEJhciIsIm9uQ2hhbmdlVGV4dCIsIm9wdGlvbnMiLCJvbkNoYW5nZSIsImxhYmVsSW5WYWx1ZSIsImRpc2FibGVkIiwidmFsdWUiLCJvbkZvY3VzIiwibG9hZGluZyIsInBsYWNlaG9sZGVyIiwiZXh0cmEiLCJvbkhhbmRsZUNoYW5nZVRleHQiLCJ2YWwiLCJjdXJWYWx1ZSIsInNldEN1clZhbHVlIiwidmlzaWJsZSIsInNldFZpc2l2YmxlIiwic2hvd1NlYXJjaEJhciIsInRleHRWYWx1ZSIsImxhYmVsIiwic3R5bGVzIiwiY29udGVudCIsImNvbnRlbnRUaXRsZSIsIlJlYWN0IiwiaXNWYWxpZEVsZW1lbnQiLCJkb3duIiwiY29udGFpbmVyIiwiaW5wdXRCb3giLCJsZWZ0Qm94IiwiaWNvbiIsImlucHV0IiwiY2FuY2VsIiwibGlzdCIsIm1hcCIsIml0bSIsInNlbGVjdFZhbHVlIiwia2V5IiwiZm9udFNpemUiLCJTdHlsZVNoZWV0IiwiY3JlYXRlIiwiZmxleCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJtYXJnaW5Ub3AiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImhlaWdodCIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJwYWRkaW5nSG9yaXpvbnRhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQVVBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQW9CQTtBQUNlLFNBQVNBLFNBQVQsQ0FBbUI7QUFDaENDLEVBQUFBLFlBRGdDO0FBRWhDQyxFQUFBQSxPQUFPLEdBQUcsRUFGc0I7QUFHaENDLEVBQUFBLFFBSGdDO0FBSWhDQyxFQUFBQSxZQUpn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REg7QUFFUEMsSUFBQUEsR0FBRyxFQUFFLEtBRkU7QUFHUEMsSUFBQUEsSUFBSSxFQUFFO0FBSEMsR0FqRHNCO0FBc0QvQm5DLEVBQUFBLE9BQU8sRUFBRTtBQUNQeUIsSUFBQUEsYUFBYSxFQUFFLEtBRFI7QUFFUEUsSUFBQUEsTUFBTSxFQUFFLEVBRkQ7QUFHUEQsSUFBQUEsVUFBVSxFQUFFLFFBSEw7QUFJUEksSUFBQUEsY0FBYyxFQUFFLGVBSlQ7QUFLUFAsSUFBQUEsWUFBWSxFQUFFLENBTFA7QUFNUEgsSUFBQUEsZUFBZSxFQUFFLE1BTlY7QUFPUGdCLElBQUFBLGlCQUFpQixFQUFFO0FBUFosR0F0RHNCO0FBK0QvQnBELEVBQUFBLFFBQVEsRUFBRTtBQUNSb0MsSUFBQUEsZUFBZSxFQUFFO0FBRFQ7QUEvRHFCLENBQWxCLENBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIFZpZXcsXG4gIFRleHQsXG4gIFRleHRJbnB1dCxcbiAgU2FmZUFyZWFWaWV3LFxuICBTdHlsZVNoZWV0LFxuICBUb3VjaGFibGVXaXRob3V0RmVlZGJhY2ssXG4gIEFjdGl2aXR5SW5kaWNhdG9yLFxuICBQcmVzc2FibGUsXG59IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5pbXBvcnQgTWFza0xheWVyIGZyb20gJy4uL01hc2tMYXllcic7XG5pbXBvcnQgTGlzdCBmcm9tICcuLi9MaXN0JztcbmltcG9ydCB7IGRvd24gfSBmcm9tICcuL3N2Zyc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi9JY29uJztcblxuaW50ZXJmYWNlIFNlYXJjaEJhclByb3BzIHtcbiAgb25DaGFuZ2VUZXh0PzogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XG4gIG9wdGlvbnM/OiBBcnJheTxPcHRpb25zU3RhdGU+O1xuICBvbkNoYW5nZT86ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkO1xuICBvbkZvY3VzPzogKGU6IGFueSB8IHN0cmluZykgPT4gdm9pZDtcbiAgbGFiZWxJblZhbHVlPzogQm9vbGVhbjtcbiAgZGlzYWJsZWQ/OiBCb29sZWFuO1xuICB2YWx1ZT86IFN0cmluZztcbiAgbG9hZGluZz86IEJvb2xlYW47XG4gIHBsYWNlaG9sZGVyPzogU3RyaW5nO1xuICBleHRyYT86IEpTWC5FbGVtZW50O1xufVxuXG5pbnRlcmZhY2UgT3B0aW9uc1N0YXRlIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgdmFsdWU6IHN0cmluZyB8IG51bWJlcjtcbn1cblxuLy8g5pCc57Si57uE5Lu2XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2hCYXIoe1xuICBvbkNoYW5nZVRleHQsXG4gIG9wdGlvbnMgPSBbXSxcbiAgb25DaGFuZ2UsXG4gIGxhYmVsSW5WYWx1ZSxcbiAgZGlzYWJsZWQsXG4gIHZhbHVlLFxuICBvbkZvY3VzLFxuICBsb2FkaW5nLFxuICBwbGFjZWhvbGRlcixcbiAgZXh0cmEsXG59OiBTZWFyY2hCYXJQcm9wcykge1xuICBjb25zdCBvbkhhbmRsZUNoYW5nZVRleHQgPSAodmFsOiBzdHJpbmcpID0+IHtcbiAgICBvbkNoYW5nZVRleHQgJiYgb25DaGFuZ2VUZXh0KHZhbCk7XG4gIH07XG4gIGNvbnN0IFtjdXJWYWx1ZSwgc2V0Q3VyVmFsdWVdID0gdXNlU3RhdGU8YW55Pih2YWx1ZSk7XG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpdmJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Q3VyVmFsdWUodmFsdWUpO1xuICB9LCBbdmFsdWVdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHZpc2libGUgJiYgb25Gb2N1cztcbiAgfSwgW3Zpc2libGVdKTtcblxuICBjb25zdCBzaG93U2VhcmNoQmFyID0gKCkgPT4ge1xuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRWaXNpdmJsZSh0cnVlKTtcbiAgfTtcbiAgY29uc3QgdGV4dFZhbHVlID0gbGFiZWxJblZhbHVlID8gY3VyVmFsdWUgJiYgY3VyVmFsdWUubGFiZWwgOiBjdXJWYWx1ZTtcbiAgcmV0dXJuICF2aXNpYmxlID8gKFxuICAgIDxQcmVzc2FibGUgb25QcmVzcz17c2hvd1NlYXJjaEJhcn0+XG4gICAgICA8VmlldyBzdHlsZT17W3N0eWxlcy5jb250ZW50XX0+XG4gICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuY29udGVudFRpdGxlfT57dGV4dFZhbHVlID8gdGV4dFZhbHVlIDogcGxhY2Vob2xkZXJ9PC9UZXh0PlxuICAgICAgICB7UmVhY3QuaXNWYWxpZEVsZW1lbnQoZXh0cmEpID8gZXh0cmEgOiA8SWNvbiB4bWw9e2Rvd259IHNpemU9ezE4fSAvPn1cbiAgICAgIDwvVmlldz5cbiAgICA8L1ByZXNzYWJsZT5cbiAgKSA6IChcbiAgICA8TWFza0xheWVyIHZpc2libGU9e3Zpc2libGV9PlxuICAgICAgPFNhZmVBcmVhVmlldyBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuaW5wdXRCb3h9PlxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMubGVmdEJveH0+XG4gICAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmljb259PlxuICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwic2VhcmNoXCIgY29sb3I9XCIjY2NjXCIgc2l6ZT17MjB9IC8+XG4gICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyVGV4dENvbG9yPVwiIzAwMFwiXG4gICAgICAgICAgICAgIG9uRm9jdXM9e29uRm9jdXMgJiYgb25Gb2N1c31cbiAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5pbnB1dH1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLovpPlhaXmkJzntKIuLi5cIlxuICAgICAgICAgICAgICBvbkNoYW5nZVRleHQ9e29uSGFuZGxlQ2hhbmdlVGV4dH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9WaWV3PlxuXG4gICAgICAgICAgPFRvdWNoYWJsZVdpdGhvdXRGZWVkYmFja1xuICAgICAgICAgICAgb25QcmVzcz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRWaXNpdmJsZShmYWxzZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuY2FuY2VsfT5cbiAgICAgICAgICAgICAgPFRleHQ+5Y+W5raIPC9UZXh0PlxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgIDwvVG91Y2hhYmxlV2l0aG91dEZlZWRiYWNrPlxuICAgICAgICA8L1ZpZXc+XG4gICAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICAgIDxBY3Rpdml0eUluZGljYXRvciBjb2xvcj1cIiMwQTAyNThcIiBzaXplPVwibGFyZ2VcIiBzdHlsZT17c3R5bGVzLmxvYWRpbmd9IC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPExpc3Qgc3R5bGU9e3N0eWxlcy5saXN0fT5cbiAgICAgICAgICAgIHtvcHRpb25zLm1hcCgoaXRtKSA9PiAoXG4gICAgICAgICAgICAgIDxMaXN0Lkl0ZW1cbiAgICAgICAgICAgICAgICBrZXk9e2l0bS52YWx1ZX1cbiAgICAgICAgICAgICAgICBvblByZXNzPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RWYWx1ZTpcbiAgICAgICAgICAgICAgICAgICAgfCBhbnlcbiAgICAgICAgICAgICAgICAgICAgfCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgfSA9IGxhYmVsSW5WYWx1ZSA/IHsga2V5OiBpdG0udmFsdWUsIGxhYmVsOiBpdG0ubGFiZWwgfSA6IGl0bS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlICYmIG9uQ2hhbmdlKHNlbGVjdFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgIHNldEN1clZhbHVlKHNlbGVjdFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgIHNldFZpc2l2YmxlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3sgZm9udFNpemU6IDE2IH19PntpdG0ubGFiZWx9PC9UZXh0PlxuICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgKX1cbiAgICAgIDwvU2FmZUFyZWFWaWV3PlxuICAgIDwvTWFza0xheWVyPlxuICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gIGNvbnRhaW5lcjoge1xuICAgIGZsZXg6IDEsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI0Y1RjVGNScsXG4gIH0sXG4gIGNvbnRlbnRUaXRsZToge1xuICAgIGZvbnRTaXplOiAxNixcbiAgICBjb2xvcjogJ2JsYWNrJyxcbiAgfSxcbiAgaW5wdXRCb3g6IHtcbiAgICBwYWRkaW5nTGVmdDogMTAsXG4gICAgcGFkZGluZ1JpZ2h0OiAxMCxcbiAgICBtYXJnaW5Ub3A6IDUsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgaGVpZ2h0OiA0MCxcbiAgfSxcbiAgbGVmdEJveDoge1xuICAgIGZsZXg6IDEsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgcGFkZGluZ1RvcDogOCxcbiAgICBwYWRkaW5nQm90dG9tOiA4LFxuICB9LFxuICBpY29uOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgcGFkZGluZ0xlZnQ6IDEwLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgfSxcbiAgaW5wdXQ6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICBmb250U2l6ZTogMTYsXG4gICAgZmxleDogMSxcbiAgICBwYWRkaW5nTGVmdDogMTAsXG4gICAgY29sb3I6ICcjN0M3RDdFJyxcbiAgICBwYWRkaW5nQm90dG9tOiAwLFxuICAgIHBhZGRpbmdUb3A6IDAsXG4gIH0sXG4gIGNhbmNlbDoge1xuICAgIGNvbG9yOiAnIzdDN0Q3RScsXG4gICAgcGFkZGluZ0xlZnQ6IDEwLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgfSxcbiAgbGlzdDoge1xuICAgIG1hcmdpbkxlZnQ6IDEwLFxuICAgIG1hcmdpblRvcDogMTAsXG4gICAgbWFyZ2luUmlnaHQ6IDEwLFxuICB9LFxuICBsb2FkaW5nOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAnMjAlJyxcbiAgICBsZWZ0OiAnNDUlJyxcbiAgfSxcbiAgY29udGVudDoge1xuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGhlaWdodDogMzUsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICBwYWRkaW5nUmlnaHQ6IDUsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgcGFkZGluZ0hvcml6b250YWw6IDE2LFxuICB9LFxuICBkaXNhYmxlZDoge1xuICAgIGJhY2tncm91bmRDb2xvcjogJyNmNWY1ZjUnLFxuICB9LFxufSk7XG4iXX0=