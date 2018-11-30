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
        var result, submitResult;
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

                if (!(!result.result.success && result.result.reason === 'unauthorized')) {
                  _context.next = 10;
                  break;
                }

                // 未进行账号绑定，跳转到auth页面
                this.$navigate('./auth');
                _context.next = 16;
                break;

              case 10:
                console.log('身份认证成功');
                _context.next = 13;
                return wx.cloud.callFunction({
                  name: 'getScore'
                });

              case 13:
                submitResult = _context.sent;

                console.log(submitResult);
                if (!submitResult.result.submit) {
                  this.$redirect('./rule');
                } else {
                  console.log('已提交，不可重复答题');
                }

              case 16:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJ3ZXB5IiwicGFnZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZGF0YSIsImNvbXB1dGVkIiwibm93IiwiRGF0ZSIsIm1ldGhvZHMiLCJlbnRlciIsInd4Iiwic2hvd0xvYWRpbmciLCJjbG91ZCIsImNhbGxGdW5jdGlvbiIsIm5hbWUiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiaGlkZUxvYWRpbmciLCJzdWNjZXNzIiwicmVhc29uIiwiJG5hdmlnYXRlIiwic3VibWl0UmVzdWx0Iiwic3VibWl0IiwiJHJlZGlyZWN0IiwiZXZlbnRzIiwiJGV2ZW50IiwibGVuZ3RoIiwiJG5hbWUiLCJzb3VyY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFrRFYsQ0FDUjs7OztFQW5EZ0NDLGVBQUtDLEk7Ozs7O09BQ3RDQyxNLEdBQVM7QUFDUEMsNEJBQXdCO0FBRGpCLEc7T0FHVEMsVSxHQUFhLEU7T0FHYkMsSSxHQUFPLEU7T0FHUEMsUSxHQUFXO0FBQ1RDLE9BRFMsaUJBQ0Y7QUFDTCxhQUFPLENBQUMsSUFBSUMsSUFBSixFQUFSO0FBQ0Q7QUFIUSxHO09BTVhDLE8sR0FBVTtBQUNGQyxTQURFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU5DLG1CQUFHQyxXQUFIO0FBRk07QUFBQSx1QkFHYUQsR0FBR0UsS0FBSCxDQUFTQyxZQUFULENBQXNCO0FBQ3ZDQyx3QkFBSztBQURrQyxpQkFBdEIsQ0FIYjs7QUFBQTtBQUdGQyxzQkFIRTs7QUFNTkMsd0JBQVFDLEdBQVIsQ0FBWUYsTUFBWjtBQUNBTCxtQkFBR1EsV0FBSDs7QUFQTSxzQkFRRixDQUFDSCxPQUFPQSxNQUFQLENBQWNJLE9BQWYsSUFBMEJKLE9BQU9BLE1BQVAsQ0FBY0ssTUFBZCxLQUF5QixjQVJqRDtBQUFBO0FBQUE7QUFBQTs7QUFTSjtBQUNBLHFCQUFLQyxTQUFMLENBQWUsUUFBZjtBQVZJO0FBQUE7O0FBQUE7QUFZSkwsd0JBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBWkk7QUFBQSx1QkFhcUJQLEdBQUdFLEtBQUgsQ0FBU0MsWUFBVCxDQUFzQjtBQUM3Q0Msd0JBQUs7QUFEd0MsaUJBQXRCLENBYnJCOztBQUFBO0FBYUFRLDRCQWJBOztBQWdCSk4sd0JBQVFDLEdBQVIsQ0FBWUssWUFBWjtBQUNBLG9CQUFJLENBQUNBLGFBQWFQLE1BQWIsQ0FBb0JRLE1BQXpCLEVBQWlDO0FBQy9CLHVCQUFLQyxTQUFMLENBQWUsUUFBZjtBQUNELGlCQUZELE1BRU87QUFDTFIsMEJBQVFDLEdBQVIsQ0FBWSxZQUFaO0FBQ0Q7O0FBckJHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsRztPQTJCVlEsTSxHQUFTO0FBQ1Asa0JBQWMscUJBQWE7QUFBQTs7QUFDekIsVUFBSUMsa0JBQWMsVUFBS0MsTUFBTCxHQUFjLENBQTVCLDJEQUFKO0FBQ0FYLGNBQVFDLEdBQVIsQ0FBZSxPQUFLVyxLQUFwQixpQkFBcUNGLE9BQU9aLElBQTVDLGNBQXlEWSxPQUFPRyxNQUFQLENBQWNELEtBQXZFO0FBQ0Q7QUFKTSxHOzs7a0JBM0NVOUIsSyIsImZpbGUiOiJ3ZWxjb21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkuJzljZflpKflrablhZrlj7Llm73mg4Xnn6Xor4bnq57otZsnXG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIG5vdyAoKSB7XG4gICAgICAgIHJldHVybiArbmV3IERhdGUoKVxuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBhc3luYyBlbnRlcigpe1xuICAgICAgICB3eC5zaG93TG9hZGluZygpXG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xuICAgICAgICAgIG5hbWU6J2lkc0F1dGgnXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcbiAgICAgICAgd3guaGlkZUxvYWRpbmcoKVxuICAgICAgICBpZiAoIXJlc3VsdC5yZXN1bHQuc3VjY2VzcyAmJiByZXN1bHQucmVzdWx0LnJlYXNvbiA9PT0gJ3VuYXV0aG9yaXplZCcpIHtcbiAgICAgICAgICAvLyDmnKrov5vooYzotKblj7fnu5HlrprvvIzot7PovazliLBhdXRo6aG16Z2iXG4gICAgICAgICAgdGhpcy4kbmF2aWdhdGUoJy4vYXV0aCcpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ+i6q+S7veiupOivgeaIkOWKnycpXG4gICAgICAgICAgbGV0IHN1Ym1pdFJlc3VsdCA9IGF3YWl0IHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XG4gICAgICAgICAgICBuYW1lOidnZXRTY29yZSdcbiAgICAgICAgICB9KVxuICAgICAgICAgIGNvbnNvbGUubG9nKHN1Ym1pdFJlc3VsdClcbiAgICAgICAgICBpZiAoIXN1Ym1pdFJlc3VsdC5yZXN1bHQuc3VibWl0KSB7XG4gICAgICAgICAgICB0aGlzLiRyZWRpcmVjdCgnLi9ydWxlJylcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ+W3suaPkOS6pO+8jOS4jeWPr+mHjeWkjeetlOmimCcpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG4gICAgICAnaW5kZXgtZW1pdCc6ICguLi5hcmdzKSA9PiB7XG4gICAgICAgIGxldCAkZXZlbnQgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV1cbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy4kbmFtZX0gcmVjZWl2ZSAkeyRldmVudC5uYW1lfSBmcm9tICR7JGV2ZW50LnNvdXJjZS4kbmFtZX1gKVxuICAgICAgfVxuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICB9XG4gIH1cbiJdfQ==