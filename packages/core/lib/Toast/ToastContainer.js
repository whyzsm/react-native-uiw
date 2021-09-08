"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _Icon = _interopRequireDefault(require("../Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class ToastContainer extends _react.Component {
  constructor(props) {
    super(props);
    this.anim = void 0;

    this.renderIcon = () => {
      const {
        type
      } = this.props;
      let icon = this.props.icon;
      let color = '';

      if (!icon) {
        switch (type) {
          case 'success':
            icon = 'circle-check';
            color = '#28a745';
            break;

          case 'warning':
            icon = 'warning';
            color = '#ffc107';
            break;

          case 'info':
            icon = 'information';
            color = '#008ef0';
            break;

          case 'error':
            icon = 'circle-close';
            color = '#dc3545';
            break;

          default:
            break;
        }
      }

      return {
        icon,
        color
      };
    };

    this.state = {
      fadeAnim: new _reactNative.Animated.Value(1)
    };
  }

  componentDidMount() {
    const {
      onClose,
      onAnimationEnd
    } = this.props;
    const duration = this.props.duration;
    const timing = _reactNative.Animated.timing;

    if (this.anim) {
      this.anim = null;
    }

    const animArr = [timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true
    }), _reactNative.Animated.delay(duration * 1000)];

    if (duration > 0) {
      animArr.push(timing(this.state.fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true
      }));
    }

    this.anim = _reactNative.Animated.sequence(animArr);
    this.anim.start(() => {
      if (duration > 0) {
        this.anim = null;

        if (onClose) {
          onClose();
        }

        if (onAnimationEnd) {
          onAnimationEnd();
        }
      }
    });
  }

  componentWillUnmount() {
    if (this.anim) {
      this.anim.stop();
      this.anim = null;
    }
  }

  render() {
    const {
      content,
      type,
      style
    } = this.props;
    return <_reactNative.View style={[styles.container, style]}>
        <_reactNative.View style={[styles.innerContainer]}>
          <_reactNative.Animated.View style={{
          opacity: this.state.fadeAnim
        }}>
            <_reactNative.View style={[styles.content, styles[type]]}>
              <_Icon.default name={this.renderIcon().icon} size={16} style={[styles.icon]} color={this.renderIcon().color} />
              <_reactNative.Text>{content}</_reactNative.Text>
            </_reactNative.View>
          </_reactNative.Animated.View>
        </_reactNative.View>
      </_reactNative.View>;
  }

}

exports.default = ToastContainer;
ToastContainer.defaultProps = {
  duration: 3,
  type: 'info'
};

const styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 100,
    right: 0
  },
  innerContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row'
  },
  icon: {
    marginRight: 5
  },
  content: {
    paddingLeft: 10,
    paddingBottom: 5,
    paddingRight: 10,
    paddingTop: 5,
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center'
  },
  info: {
    backgroundColor: '#bde4ff',
    color: '#008ef0'
  },
  success: {
    backgroundColor: '#afecbd',
    color: '#28a745'
  },
  error: {
    backgroundColor: '#fae3e5'
  },
  warning: {
    backgroundColor: '#fff4d3'
  }
});

module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Ub2FzdC9Ub2FzdENvbnRhaW5lci50c3giXSwibmFtZXMiOlsiVG9hc3RDb250YWluZXIiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiYW5pbSIsInJlbmRlckljb24iLCJ0eXBlIiwiaWNvbiIsImNvbG9yIiwic3RhdGUiLCJmYWRlQW5pbSIsIkFuaW1hdGVkIiwiVmFsdWUiLCJjb21wb25lbnREaWRNb3VudCIsIm9uQ2xvc2UiLCJvbkFuaW1hdGlvbkVuZCIsImR1cmF0aW9uIiwidGltaW5nIiwiYW5pbUFyciIsInRvVmFsdWUiLCJ1c2VOYXRpdmVEcml2ZXIiLCJkZWxheSIsInB1c2giLCJzZXF1ZW5jZSIsInN0YXJ0IiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJzdG9wIiwicmVuZGVyIiwiY29udGVudCIsInN0eWxlIiwic3R5bGVzIiwiY29udGFpbmVyIiwiaW5uZXJDb250YWluZXIiLCJvcGFjaXR5IiwiZGVmYXVsdFByb3BzIiwiU3R5bGVTaGVldCIsImNyZWF0ZSIsImZsZXgiLCJwb3NpdGlvbiIsImxlZnQiLCJ0b3AiLCJyaWdodCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduQ29udGVudCIsImZsZXhEaXJlY3Rpb24iLCJtYXJnaW5SaWdodCIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdUb3AiLCJpbmZvIiwiYmFja2dyb3VuZENvbG9yIiwic3VjY2VzcyIsImVycm9yIiwid2FybmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7OztBQWFlLE1BQU1BLGNBQU4sU0FBNkJDLGdCQUE3QixDQUF3RDtBQVFyRUMsRUFBQUEsV0FBVyxDQUFDQyxLQUFELEVBQW9CO0FBQzdCLFVBQU1BLEtBQU47QUFENkIsU0FGL0JDLElBRStCOztBQUFBLFNBbUQvQkMsVUFuRCtCLEdBbURsQixNQUFNO0FBQ2pCLFlBQU07QUFBRUMsUUFBQUE7QUFBRixVQUFXLEtBQUtILEtBQXRCO0FBQ0EsVUFBSUksSUFBSSxHQUFHLEtBQUtKLEtBQUwsQ0FBV0ksSUFBdEI7QUFDQSxVQUFJQyxLQUFLLEdBQUcsRUFBWjs7QUFDQSxVQUFJLENBQUNELElBQUwsRUFBVztBQUNULGdCQUFRRCxJQUFSO0FBQ0UsZUFBSyxTQUFMO0FBQ0VDLFlBQUFBLElBQUksR0FBRyxjQUFQO0FBQ0FDLFlBQUFBLEtBQUssR0FBRyxTQUFSO0FBQ0E7O0FBQ0YsZUFBSyxTQUFMO0FBQ0VELFlBQUFBLElBQUksR0FBRyxTQUFQO0FBQ0FDLFlBQUFBLEtBQUssR0FBRyxTQUFSO0FBQ0E7O0FBQ0YsZUFBSyxNQUFMO0FBQ0VELFlBQUFBLElBQUksR0FBRyxhQUFQO0FBQ0FDLFlBQUFBLEtBQUssR0FBRyxTQUFSO0FBQ0E7O0FBQ0YsZUFBSyxPQUFMO0FBQ0VELFlBQUFBLElBQUksR0FBRyxjQUFQO0FBQ0FDLFlBQUFBLEtBQUssR0FBRyxTQUFSO0FBQ0E7O0FBQ0Y7QUFDRTtBQWxCSjtBQW9CRDs7QUFDRCxhQUFPO0FBQUVELFFBQUFBLElBQUY7QUFBUUMsUUFBQUE7QUFBUixPQUFQO0FBQ0QsS0E5RThCOztBQUU3QixTQUFLQyxLQUFMLEdBQWE7QUFDWEMsTUFBQUEsUUFBUSxFQUFFLElBQUlDLHNCQUFTQyxLQUFiLENBQW1CLENBQW5CO0FBREMsS0FBYjtBQUdEOztBQUNEQyxFQUFBQSxpQkFBaUIsR0FBRztBQUNsQixVQUFNO0FBQUVDLE1BQUFBLE9BQUY7QUFBV0MsTUFBQUE7QUFBWCxRQUE4QixLQUFLWixLQUF6QztBQUNBLFVBQU1hLFFBQVEsR0FBRyxLQUFLYixLQUFMLENBQVdhLFFBQTVCO0FBQ0EsVUFBTUMsTUFBTSxHQUFHTixzQkFBU00sTUFBeEI7O0FBQ0EsUUFBSSxLQUFLYixJQUFULEVBQWU7QUFDYixXQUFLQSxJQUFMLEdBQVksSUFBWjtBQUNEOztBQUNELFVBQU1jLE9BQU8sR0FBRyxDQUNkRCxNQUFNLENBQUMsS0FBS1IsS0FBTCxDQUFXQyxRQUFaLEVBQXNCO0FBQzFCUyxNQUFBQSxPQUFPLEVBQUUsQ0FEaUI7QUFFMUJILE1BQUFBLFFBQVEsRUFBRSxHQUZnQjtBQUcxQkksTUFBQUEsZUFBZSxFQUFFO0FBSFMsS0FBdEIsQ0FEUSxFQU1kVCxzQkFBU1UsS0FBVCxDQUFlTCxRQUFRLEdBQUcsSUFBMUIsQ0FOYyxDQUFoQjs7QUFRQSxRQUFJQSxRQUFRLEdBQUcsQ0FBZixFQUFrQjtBQUNoQkUsTUFBQUEsT0FBTyxDQUFDSSxJQUFSLENBQ0VMLE1BQU0sQ0FBQyxLQUFLUixLQUFMLENBQVdDLFFBQVosRUFBc0I7QUFDMUJTLFFBQUFBLE9BQU8sRUFBRSxDQURpQjtBQUUxQkgsUUFBQUEsUUFBUSxFQUFFLEdBRmdCO0FBRzFCSSxRQUFBQSxlQUFlLEVBQUU7QUFIUyxPQUF0QixDQURSO0FBT0Q7O0FBQ0QsU0FBS2hCLElBQUwsR0FBWU8sc0JBQVNZLFFBQVQsQ0FBa0JMLE9BQWxCLENBQVo7QUFDQSxTQUFLZCxJQUFMLENBQVVvQixLQUFWLENBQWdCLE1BQU07QUFDcEIsVUFBSVIsUUFBUSxHQUFHLENBQWYsRUFBa0I7QUFDaEIsYUFBS1osSUFBTCxHQUFZLElBQVo7O0FBQ0EsWUFBSVUsT0FBSixFQUFhO0FBQ1hBLFVBQUFBLE9BQU87QUFDUjs7QUFDRCxZQUFJQyxjQUFKLEVBQW9CO0FBQ2xCQSxVQUFBQSxjQUFjO0FBQ2Y7QUFDRjtBQUNGLEtBVkQ7QUFXRDs7QUFFRFUsRUFBQUEsb0JBQW9CLEdBQUc7QUFDckIsUUFBSSxLQUFLckIsSUFBVCxFQUFlO0FBQ2IsV0FBS0EsSUFBTCxDQUFVc0IsSUFBVjtBQUNBLFdBQUt0QixJQUFMLEdBQVksSUFBWjtBQUNEO0FBQ0Y7O0FBK0JEdUIsRUFBQUEsTUFBTSxHQUFHO0FBQ1AsVUFBTTtBQUFFQyxNQUFBQSxPQUFGO0FBQVd0QixNQUFBQSxJQUFYO0FBQWlCdUIsTUFBQUE7QUFBakIsUUFBMkIsS0FBSzFCLEtBQXRDO0FBRUEsV0FDRSxtQkFBTSxNQUFNLENBQUMsQ0FBQzJCLE1BQU0sQ0FBQ0MsU0FBUixFQUFtQkYsS0FBbkIsQ0FBRCxDQUFaO0FBQ04sUUFBUSxtQkFBTSxNQUFNLENBQUMsQ0FBQ0MsTUFBTSxDQUFDRSxjQUFSLENBQUQsQ0FBWjtBQUNSLFVBQVUsQ0FBQyxzQkFBUyxJQUFWLENBQWUsTUFBTSxDQUFDO0FBQUVDLFVBQUFBLE9BQU8sRUFBRSxLQUFLeEIsS0FBTCxDQUFXQztBQUF0QixTQUFELENBQXJCO0FBQ1YsWUFBWSxtQkFBTSxNQUFNLENBQUMsQ0FBQ29CLE1BQU0sQ0FBQ0YsT0FBUixFQUFpQkUsTUFBTSxDQUFDeEIsSUFBRCxDQUF2QixDQUFELENBQVo7QUFDWixjQUFjLGVBQU0sS0FBSyxDQUFDLEtBQUtELFVBQUwsR0FBa0JFLElBQW5CLENBQVgsQ0FBb0MsS0FBSyxDQUFDLEVBQUQsQ0FBekMsQ0FBOEMsTUFBTSxDQUFDLENBQUN1QixNQUFNLENBQUN2QixJQUFSLENBQUQsQ0FBcEQsQ0FBb0UsTUFBTSxDQUFDLEtBQUtGLFVBQUwsR0FBa0JHLEtBQW5CLENBQTFFO0FBQ2QsY0FBYyxtQkFBTSxDQUFDb0IsT0FBRCxDQUFTO0FBQzdCLFlBQVk7QUFDWixVQUFVLEVBQUUsc0JBQVMsSUFBWDtBQUNWLFFBQVE7QUFDUixNQUFNLG9CQVZGO0FBWUQ7O0FBdkdvRTs7O0FBQWxENUIsYyxDQUNaa0MsWSxHQUFlO0FBQ3BCbEIsRUFBQUEsUUFBUSxFQUFFLENBRFU7QUFFcEJWLEVBQUFBLElBQUksRUFBRTtBQUZjLEM7O0FBeUd4QixNQUFNd0IsTUFBTSxHQUFHSyx3QkFBV0MsTUFBWCxDQUFrQjtBQUMvQkwsRUFBQUEsU0FBUyxFQUFFO0FBQ1RNLElBQUFBLElBQUksRUFBRSxDQURHO0FBRVRDLElBQUFBLFFBQVEsRUFBRSxVQUZEO0FBR1RDLElBQUFBLElBQUksRUFBRSxDQUhHO0FBSVRDLElBQUFBLEdBQUcsRUFBRSxHQUpJO0FBS1RDLElBQUFBLEtBQUssRUFBRTtBQUxFLEdBRG9CO0FBUS9CVCxFQUFBQSxjQUFjLEVBQUU7QUFDZFUsSUFBQUEsT0FBTyxFQUFFLE1BREs7QUFFZEwsSUFBQUEsSUFBSSxFQUFFLENBRlE7QUFHZE0sSUFBQUEsY0FBYyxFQUFFLFFBSEY7QUFJZEMsSUFBQUEsWUFBWSxFQUFFLFFBSkE7QUFLZEMsSUFBQUEsYUFBYSxFQUFFO0FBTEQsR0FSZTtBQWUvQnRDLEVBQUFBLElBQUksRUFBRTtBQUNKdUMsSUFBQUEsV0FBVyxFQUFFO0FBRFQsR0FmeUI7QUFrQi9CbEIsRUFBQUEsT0FBTyxFQUFFO0FBQ1BtQixJQUFBQSxXQUFXLEVBQUUsRUFETjtBQUVQQyxJQUFBQSxhQUFhLEVBQUUsQ0FGUjtBQUdQQyxJQUFBQSxZQUFZLEVBQUUsRUFIUDtBQUlQQyxJQUFBQSxVQUFVLEVBQUUsQ0FKTDtBQUtQUixJQUFBQSxPQUFPLEVBQUUsTUFMRjtBQU1QRyxJQUFBQSxhQUFhLEVBQUUsS0FOUjtBQU9QRCxJQUFBQSxZQUFZLEVBQUU7QUFQUCxHQWxCc0I7QUEyQi9CTyxFQUFBQSxJQUFJLEVBQUU7QUFDSkMsSUFBQUEsZUFBZSxFQUFFLFNBRGI7QUFFSjVDLElBQUFBLEtBQUssRUFBRTtBQUZILEdBM0J5QjtBQStCL0I2QyxFQUFBQSxPQUFPLEVBQUU7QUFDUEQsSUFBQUEsZUFBZSxFQUFFLFNBRFY7QUFFUDVDLElBQUFBLEtBQUssRUFBRTtBQUZBLEdBL0JzQjtBQW1DL0I4QyxFQUFBQSxLQUFLLEVBQUU7QUFDTEYsSUFBQUEsZUFBZSxFQUFFO0FBRFosR0FuQ3dCO0FBc0MvQkcsRUFBQUEsT0FBTyxFQUFFO0FBQ1BILElBQUFBLGVBQWUsRUFBRTtBQURWO0FBdENzQixDQUFsQixDQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFZpZXcsIFRleHQsIFN0eWxlU2hlZXQsIEFuaW1hdGVkLCBTdHlsZVByb3AsIFZpZXdTdHlsZSB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5pbXBvcnQgSWNvbiwgeyBJY29uc05hbWUgfSBmcm9tICcuLi9JY29uJztcblxuZXhwb3J0IGludGVyZmFjZSBUb2FzdFByb3BzIHtcbiAgdHlwZTogJ2luZm8nIHwgJ3N1Y2Nlc3MnIHwgJ3dhcm5pbmcnIHwgJ2Vycm9yJztcbiAgY29udGVudDogc3RyaW5nO1xuICBkdXJhdGlvbj86IG51bWJlcjtcbiAgc2hvd0ljb24/OiBib29sZWFuO1xuICBpY29uPzogSWNvbnNOYW1lO1xuICBvbkNsb3NlPzogKCkgPT4gdm9pZDtcbiAgb25BbmltYXRpb25FbmQ/OiAoKSA9PiB2b2lkO1xuICBzdHlsZT86IFN0eWxlUHJvcDxWaWV3U3R5bGU+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2FzdENvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudDxUb2FzdFByb3BzLCBhbnk+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkdXJhdGlvbjogMyxcbiAgICB0eXBlOiAnaW5mbycsXG4gIH07XG5cbiAgYW5pbTogQW5pbWF0ZWQuQ29tcG9zaXRlQW5pbWF0aW9uIHwgbnVsbCB8IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogVG9hc3RQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZmFkZUFuaW06IG5ldyBBbmltYXRlZC5WYWx1ZSgxKSxcbiAgICB9O1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgb25DbG9zZSwgb25BbmltYXRpb25FbmQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZHVyYXRpb24gPSB0aGlzLnByb3BzLmR1cmF0aW9uIGFzIG51bWJlcjtcbiAgICBjb25zdCB0aW1pbmcgPSBBbmltYXRlZC50aW1pbmc7XG4gICAgaWYgKHRoaXMuYW5pbSkge1xuICAgICAgdGhpcy5hbmltID0gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgYW5pbUFyciA9IFtcbiAgICAgIHRpbWluZyh0aGlzLnN0YXRlLmZhZGVBbmltLCB7XG4gICAgICAgIHRvVmFsdWU6IDEsXG4gICAgICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgICAgIHVzZU5hdGl2ZURyaXZlcjogdHJ1ZSxcbiAgICAgIH0pLFxuICAgICAgQW5pbWF0ZWQuZGVsYXkoZHVyYXRpb24gKiAxMDAwKSxcbiAgICBdO1xuICAgIGlmIChkdXJhdGlvbiA+IDApIHtcbiAgICAgIGFuaW1BcnIucHVzaChcbiAgICAgICAgdGltaW5nKHRoaXMuc3RhdGUuZmFkZUFuaW0sIHtcbiAgICAgICAgICB0b1ZhbHVlOiAwLFxuICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgICAgICAgdXNlTmF0aXZlRHJpdmVyOiB0cnVlLFxuICAgICAgICB9KSxcbiAgICAgICk7XG4gICAgfVxuICAgIHRoaXMuYW5pbSA9IEFuaW1hdGVkLnNlcXVlbmNlKGFuaW1BcnIpO1xuICAgIHRoaXMuYW5pbS5zdGFydCgoKSA9PiB7XG4gICAgICBpZiAoZHVyYXRpb24gPiAwKSB7XG4gICAgICAgIHRoaXMuYW5pbSA9IG51bGw7XG4gICAgICAgIGlmIChvbkNsb3NlKSB7XG4gICAgICAgICAgb25DbG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvbkFuaW1hdGlvbkVuZCkge1xuICAgICAgICAgIG9uQW5pbWF0aW9uRW5kKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLmFuaW0pIHtcbiAgICAgIHRoaXMuYW5pbS5zdG9wKCk7XG4gICAgICB0aGlzLmFuaW0gPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlckljb24gPSAoKSA9PiB7XG4gICAgY29uc3QgeyB0eXBlIH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBpY29uID0gdGhpcy5wcm9wcy5pY29uO1xuICAgIGxldCBjb2xvciA9ICcnO1xuICAgIGlmICghaWNvbikge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICAgIGljb24gPSAnY2lyY2xlLWNoZWNrJztcbiAgICAgICAgICBjb2xvciA9ICcjMjhhNzQ1JztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnd2FybmluZyc6XG4gICAgICAgICAgaWNvbiA9ICd3YXJuaW5nJztcbiAgICAgICAgICBjb2xvciA9ICcjZmZjMTA3JztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnaW5mbyc6XG4gICAgICAgICAgaWNvbiA9ICdpbmZvcm1hdGlvbic7XG4gICAgICAgICAgY29sb3IgPSAnIzAwOGVmMCc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgICBpY29uID0gJ2NpcmNsZS1jbG9zZSc7XG4gICAgICAgICAgY29sb3IgPSAnI2RjMzU0NSc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IGljb24sIGNvbG9yIH07XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY29udGVudCwgdHlwZSwgc3R5bGUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFZpZXcgc3R5bGU9e1tzdHlsZXMuY29udGFpbmVyLCBzdHlsZV19PlxuICAgICAgICA8VmlldyBzdHlsZT17W3N0eWxlcy5pbm5lckNvbnRhaW5lcl19PlxuICAgICAgICAgIDxBbmltYXRlZC5WaWV3IHN0eWxlPXt7IG9wYWNpdHk6IHRoaXMuc3RhdGUuZmFkZUFuaW0gfX0+XG4gICAgICAgICAgICA8VmlldyBzdHlsZT17W3N0eWxlcy5jb250ZW50LCBzdHlsZXNbdHlwZV1dfT5cbiAgICAgICAgICAgICAgPEljb24gbmFtZT17dGhpcy5yZW5kZXJJY29uKCkuaWNvbn0gc2l6ZT17MTZ9IHN0eWxlPXtbc3R5bGVzLmljb25dfSBjb2xvcj17dGhpcy5yZW5kZXJJY29uKCkuY29sb3J9IC8+XG4gICAgICAgICAgICAgIDxUZXh0Pntjb250ZW50fTwvVGV4dD5cbiAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICA8L0FuaW1hdGVkLlZpZXc+XG4gICAgICAgIDwvVmlldz5cbiAgICAgIDwvVmlldz5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgY29udGFpbmVyOiB7XG4gICAgZmxleDogMSxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBsZWZ0OiAwLFxuICAgIHRvcDogMTAwLFxuICAgIHJpZ2h0OiAwLFxuICB9LFxuICBpbm5lckNvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4OiAxLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBhbGlnbkNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICB9LFxuICBpY29uOiB7XG4gICAgbWFyZ2luUmlnaHQ6IDUsXG4gIH0sXG4gIGNvbnRlbnQ6IHtcbiAgICBwYWRkaW5nTGVmdDogMTAsXG4gICAgcGFkZGluZ0JvdHRvbTogNSxcbiAgICBwYWRkaW5nUmlnaHQ6IDEwLFxuICAgIHBhZGRpbmdUb3A6IDUsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGFsaWduQ29udGVudDogJ2NlbnRlcicsXG4gIH0sXG4gIGluZm86IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjYmRlNGZmJyxcbiAgICBjb2xvcjogJyMwMDhlZjAnLFxuICB9LFxuICBzdWNjZXNzOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2FmZWNiZCcsXG4gICAgY29sb3I6ICcjMjhhNzQ1JyxcbiAgfSxcbiAgZXJyb3I6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmFlM2U1JyxcbiAgfSxcbiAgd2FybmluZzoge1xuICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmY0ZDMnLFxuICB9LFxufSk7XG4iXX0=