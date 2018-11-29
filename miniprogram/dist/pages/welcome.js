'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.config = {
    navigationBarTitleText: '东南大学党史国情知识竞赛'
  };
  this.components = {};
  this.data = {};
  this.computed = {
    now: function now() {
      return +new Date();
    }
  };
  this.methods = {
    enter: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                wx.showLoading();
                _context.next = 3;
                return wx.cloud.callFunction({
                  name: 'idsAuth'
                });

              case 3:
                result = _context.sent;

                console.log(result);
                wx.hideLoading();
                if (!result.result.success && result.result.reason === 'unauthorized') {
                  // 未进行账号绑定，跳转到auth页面
                  this.$navigate('./auth');
                } else {
                  console.log('身份认证成功');
                  this.$redirect('./rule');
                }

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function enter() {
        return _ref2.apply(this, arguments);
      }

      return enter;
    }()
  };
  this.events = {
    'index-emit': function indexEmit() {
      var _ref3;

      var $event = (_ref3 = arguments.length - 1, arguments.length <= _ref3 ? undefined : arguments[_ref3]);
      console.log(_this2.$name + ' receive ' + $event.name + ' from ' + $event.source.$name);
    }
  };
};


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/welcome'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJ3ZXB5IiwicGFnZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZGF0YSIsImNvbXB1dGVkIiwibm93IiwiRGF0ZSIsIm1ldGhvZHMiLCJlbnRlciIsInd4Iiwic2hvd0xvYWRpbmciLCJjbG91ZCIsImNhbGxGdW5jdGlvbiIsIm5hbWUiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiaGlkZUxvYWRpbmciLCJzdWNjZXNzIiwicmVhc29uIiwiJG5hdmlnYXRlIiwiJHJlZGlyZWN0IiwiZXZlbnRzIiwiJGV2ZW50IiwibGVuZ3RoIiwiJG5hbWUiLCJzb3VyY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkEwQ1YsQ0FDUjs7OztFQTNDZ0NDLGVBQUtDLEk7Ozs7O09BQ3RDQyxNLEdBQVM7QUFDUEMsNEJBQXdCO0FBRGpCLEc7T0FHVEMsVSxHQUFhLEU7T0FHYkMsSSxHQUFPLEU7T0FHUEMsUSxHQUFXO0FBQ1RDLE9BRFMsaUJBQ0Y7QUFDTCxhQUFPLENBQUMsSUFBSUMsSUFBSixFQUFSO0FBQ0Q7QUFIUSxHO09BTVhDLE8sR0FBVTtBQUNGQyxTQURFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU5DLG1CQUFHQyxXQUFIO0FBRk07QUFBQSx1QkFHYUQsR0FBR0UsS0FBSCxDQUFTQyxZQUFULENBQXNCO0FBQ3ZDQyx3QkFBSztBQURrQyxpQkFBdEIsQ0FIYjs7QUFBQTtBQUdGQyxzQkFIRTs7QUFNTkMsd0JBQVFDLEdBQVIsQ0FBWUYsTUFBWjtBQUNBTCxtQkFBR1EsV0FBSDtBQUNBLG9CQUFJLENBQUNILE9BQU9BLE1BQVAsQ0FBY0ksT0FBZixJQUEwQkosT0FBT0EsTUFBUCxDQUFjSyxNQUFkLEtBQXlCLGNBQXZELEVBQXVFO0FBQ3JFO0FBQ0EsdUJBQUtDLFNBQUwsQ0FBZSxRQUFmO0FBQ0QsaUJBSEQsTUFHTztBQUNMTCwwQkFBUUMsR0FBUixDQUFZLFFBQVo7QUFDQSx1QkFBS0ssU0FBTCxDQUFlLFFBQWY7QUFDRDs7QUFkSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLEc7T0FtQlZDLE0sR0FBUztBQUNQLGtCQUFjLHFCQUFhO0FBQUE7O0FBQ3pCLFVBQUlDLGtCQUFjLFVBQUtDLE1BQUwsR0FBYyxDQUE1QiwyREFBSjtBQUNBVCxjQUFRQyxHQUFSLENBQWUsT0FBS1MsS0FBcEIsaUJBQXFDRixPQUFPVixJQUE1QyxjQUF5RFUsT0FBT0csTUFBUCxDQUFjRCxLQUF2RTtBQUNEO0FBSk0sRzs7O2tCQW5DVTVCLEsiLCJmaWxlIjoid2VsY29tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Lic5Y2X5aSn5a2m5YWa5Y+y5Zu95oOF55+l6K+G56ue6LWbJ1xuICAgIH1cbiAgICBjb21wb25lbnRzID0ge1xuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICBub3cgKCkge1xuICAgICAgICByZXR1cm4gK25ldyBEYXRlKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgYXN5bmMgZW50ZXIoKXtcbiAgICAgICAgd3guc2hvd0xvYWRpbmcoKVxuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcbiAgICAgICAgICBuYW1lOidpZHNBdXRoJ1xuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXG4gICAgICAgIHd4LmhpZGVMb2FkaW5nKClcbiAgICAgICAgaWYgKCFyZXN1bHQucmVzdWx0LnN1Y2Nlc3MgJiYgcmVzdWx0LnJlc3VsdC5yZWFzb24gPT09ICd1bmF1dGhvcml6ZWQnKSB7XG4gICAgICAgICAgLy8g5pyq6L+b6KGM6LSm5Y+357uR5a6a77yM6Lez6L2s5YiwYXV0aOmhtemdolxuICAgICAgICAgIHRoaXMuJG5hdmlnYXRlKCcuL2F1dGgnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCfouqvku73orqTor4HmiJDlip8nKVxuICAgICAgICAgIHRoaXMuJHJlZGlyZWN0KCcuL3J1bGUnKVxuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG4gICAgICAnaW5kZXgtZW1pdCc6ICguLi5hcmdzKSA9PiB7XG4gICAgICAgIGxldCAkZXZlbnQgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV1cbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy4kbmFtZX0gcmVjZWl2ZSAkeyRldmVudC5uYW1lfSBmcm9tICR7JGV2ZW50LnNvdXJjZS4kbmFtZX1gKVxuICAgICAgfVxuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICB9XG4gIH1cbiJdfQ==