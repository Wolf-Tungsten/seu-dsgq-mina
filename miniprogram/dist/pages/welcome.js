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
                  wx.setStorageSync('result', submitResult.result);
                  this.$navigate('./score');
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJ3ZXB5IiwicGFnZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZGF0YSIsImNvbXB1dGVkIiwibm93IiwiRGF0ZSIsIm1ldGhvZHMiLCJlbnRlciIsInd4Iiwic2hvd0xvYWRpbmciLCJjbG91ZCIsImNhbGxGdW5jdGlvbiIsIm5hbWUiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiaGlkZUxvYWRpbmciLCJzdWNjZXNzIiwicmVhc29uIiwiJG5hdmlnYXRlIiwic3VibWl0UmVzdWx0Iiwic3VibWl0IiwiJHJlZGlyZWN0Iiwic2V0U3RvcmFnZVN5bmMiLCJldmVudHMiLCIkZXZlbnQiLCJsZW5ndGgiLCIkbmFtZSIsInNvdXJjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQW1EVixDQUNSOzs7O0VBcERnQ0MsZUFBS0MsSTs7Ozs7T0FDdENDLE0sR0FBUztBQUNQQyw0QkFBd0I7QUFEakIsRztPQUdUQyxVLEdBQWEsRTtPQUdiQyxJLEdBQU8sRTtPQUdQQyxRLEdBQVc7QUFDVEMsT0FEUyxpQkFDRjtBQUNMLGFBQU8sQ0FBQyxJQUFJQyxJQUFKLEVBQVI7QUFDRDtBQUhRLEc7T0FNWEMsTyxHQUFVO0FBQ0ZDLFNBREU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTkMsbUJBQUdDLFdBQUg7QUFGTTtBQUFBLHVCQUdhRCxHQUFHRSxLQUFILENBQVNDLFlBQVQsQ0FBc0I7QUFDdkNDLHdCQUFLO0FBRGtDLGlCQUF0QixDQUhiOztBQUFBO0FBR0ZDLHNCQUhFOztBQU1OQyx3QkFBUUMsR0FBUixDQUFZRixNQUFaO0FBQ0FMLG1CQUFHUSxXQUFIOztBQVBNLHNCQVFGLENBQUNILE9BQU9BLE1BQVAsQ0FBY0ksT0FBZixJQUEwQkosT0FBT0EsTUFBUCxDQUFjSyxNQUFkLEtBQXlCLGNBUmpEO0FBQUE7QUFBQTtBQUFBOztBQVNKO0FBQ0EscUJBQUtDLFNBQUwsQ0FBZSxRQUFmO0FBVkk7QUFBQTs7QUFBQTtBQVlKTCx3QkFBUUMsR0FBUixDQUFZLFFBQVo7QUFaSTtBQUFBLHVCQWFxQlAsR0FBR0UsS0FBSCxDQUFTQyxZQUFULENBQXNCO0FBQzdDQyx3QkFBSztBQUR3QyxpQkFBdEIsQ0FickI7O0FBQUE7QUFhQVEsNEJBYkE7O0FBZ0JKTix3QkFBUUMsR0FBUixDQUFZSyxZQUFaO0FBQ0Esb0JBQUksQ0FBQ0EsYUFBYVAsTUFBYixDQUFvQlEsTUFBekIsRUFBaUM7QUFDL0IsdUJBQUtDLFNBQUwsQ0FBZSxRQUFmO0FBQ0QsaUJBRkQsTUFFTztBQUNMZCxxQkFBR2UsY0FBSCxDQUFrQixRQUFsQixFQUE0QkgsYUFBYVAsTUFBekM7QUFDQSx1QkFBS00sU0FBTCxDQUFlLFNBQWY7QUFDRDs7QUF0Qkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxHO09BNEJWSyxNLEdBQVM7QUFDUCxrQkFBYyxxQkFBYTtBQUFBOztBQUN6QixVQUFJQyxrQkFBYyxVQUFLQyxNQUFMLEdBQWMsQ0FBNUIsMkRBQUo7QUFDQVosY0FBUUMsR0FBUixDQUFlLE9BQUtZLEtBQXBCLGlCQUFxQ0YsT0FBT2IsSUFBNUMsY0FBeURhLE9BQU9HLE1BQVAsQ0FBY0QsS0FBdkU7QUFDRDtBQUpNLEc7OztrQkE1Q1UvQixLIiwiZmlsZSI6IndlbGNvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S4nOWNl+Wkp+WtpuWFmuWPsuWbveaDheefpeivhuernui1mydcbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHtcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgbm93ICgpIHtcbiAgICAgICAgcmV0dXJuICtuZXcgRGF0ZSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGFzeW5jIGVudGVyKCl7XG4gICAgICAgIHd4LnNob3dMb2FkaW5nKClcbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XG4gICAgICAgICAgbmFtZTonaWRzQXV0aCdcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxuICAgICAgICB3eC5oaWRlTG9hZGluZygpXG4gICAgICAgIGlmICghcmVzdWx0LnJlc3VsdC5zdWNjZXNzICYmIHJlc3VsdC5yZXN1bHQucmVhc29uID09PSAndW5hdXRob3JpemVkJykge1xuICAgICAgICAgIC8vIOacqui/m+ihjOi0puWPt+e7keWumu+8jOi3s+i9rOWIsGF1dGjpobXpnaJcbiAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZSgnLi9hdXRoJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygn6Lqr5Lu96K6k6K+B5oiQ5YqfJylcbiAgICAgICAgICBsZXQgc3VibWl0UmVzdWx0ID0gYXdhaXQgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcbiAgICAgICAgICAgIG5hbWU6J2dldFNjb3JlJ1xuICAgICAgICAgIH0pXG4gICAgICAgICAgY29uc29sZS5sb2coc3VibWl0UmVzdWx0KVxuICAgICAgICAgIGlmICghc3VibWl0UmVzdWx0LnJlc3VsdC5zdWJtaXQpIHtcbiAgICAgICAgICAgIHRoaXMuJHJlZGlyZWN0KCcuL3J1bGUnKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygncmVzdWx0Jywgc3VibWl0UmVzdWx0LnJlc3VsdClcbiAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlKCcuL3Njb3JlJylcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICAgICdpbmRleC1lbWl0JzogKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgbGV0ICRldmVudCA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXVxuICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLiRuYW1lfSByZWNlaXZlICR7JGV2ZW50Lm5hbWV9IGZyb20gJHskZXZlbnQuc291cmNlLiRuYW1lfWApXG4gICAgICB9XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgIH1cbiAgfVxuIl19