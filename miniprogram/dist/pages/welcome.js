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
    navigationBarTitleText: '党史国情知识竞赛'
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
        var checkTime, result, submitResult;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                wx.showLoading({ title: "获取竞赛状态" });
                _context.next = 3;
                return wx.cloud.callFunction({
                  name: 'timeControl'
                });

              case 3:
                checkTime = _context.sent;

                wx.hideLoading();

                if (!(checkTime.result.status === 'wait')) {
                  _context.next = 8;
                  break;
                }

                wx.showModal({ title: "提示", content: "答题尚未开始！" });
                return _context.abrupt('return');

              case 8:
                if (!(checkTime.result.status === 'end')) {
                  _context.next = 11;
                  break;
                }

                wx.showModal({ title: "提示", content: "答题已结束！" });
                return _context.abrupt('return');

              case 11:
                wx.showLoading({ title: "核对身份信息" });
                _context.next = 14;
                return wx.cloud.callFunction({
                  name: 'idsAuth'
                });

              case 14:
                result = _context.sent;

                wx.hideLoading();

                if (!(!result.result.success && result.result.reason === 'unauthorized')) {
                  _context.next = 20;
                  break;
                }

                // 未进行账号绑定，跳转到auth页面
                this.$navigate('./auth');
                _context.next = 28;
                break;

              case 20:
                console.log('身份认证成功');
                wx.showLoading({ title: "更新得分数据" });
                _context.next = 24;
                return wx.cloud.callFunction({
                  name: 'getScore'
                });

              case 24:
                submitResult = _context.sent;

                wx.hideLoading();
                console.log(submitResult);
                if (!submitResult.result.submit) {
                  this.$redirect('./rule');
                } else {
                  wx.setStorageSync('result', submitResult.result);
                  this.$navigate('./score');
                }

              case 28:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJ3ZXB5IiwicGFnZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZGF0YSIsImNvbXB1dGVkIiwibm93IiwiRGF0ZSIsIm1ldGhvZHMiLCJlbnRlciIsInd4Iiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsImNsb3VkIiwiY2FsbEZ1bmN0aW9uIiwibmFtZSIsImNoZWNrVGltZSIsImhpZGVMb2FkaW5nIiwicmVzdWx0Iiwic3RhdHVzIiwic2hvd01vZGFsIiwiY29udGVudCIsInN1Y2Nlc3MiLCJyZWFzb24iLCIkbmF2aWdhdGUiLCJjb25zb2xlIiwibG9nIiwic3VibWl0UmVzdWx0Iiwic3VibWl0IiwiJHJlZGlyZWN0Iiwic2V0U3RvcmFnZVN5bmMiLCJldmVudHMiLCIkZXZlbnQiLCJsZW5ndGgiLCIkbmFtZSIsInNvdXJjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQWlFVixDQUNSOzs7O0VBbEVnQ0MsZUFBS0MsSTs7Ozs7T0FDdENDLE0sR0FBUztBQUNQQyw0QkFBd0I7QUFEakIsRztPQUdUQyxVLEdBQWEsRTtPQUdiQyxJLEdBQU8sRTtPQUdQQyxRLEdBQVc7QUFDVEMsT0FEUyxpQkFDRjtBQUNMLGFBQU8sQ0FBQyxJQUFJQyxJQUFKLEVBQVI7QUFDRDtBQUhRLEc7T0FNWEMsTyxHQUFVO0FBQ0ZDLFNBREU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTkMsbUJBQUdDLFdBQUgsQ0FBZSxFQUFDQyxPQUFNLFFBQVAsRUFBZjtBQUZNO0FBQUEsdUJBR2dCRixHQUFHRyxLQUFILENBQVNDLFlBQVQsQ0FBc0I7QUFDMUNDLHdCQUFLO0FBRHFDLGlCQUF0QixDQUhoQjs7QUFBQTtBQUdGQyx5QkFIRTs7QUFNTk4sbUJBQUdPLFdBQUg7O0FBTk0sc0JBT0ZELFVBQVVFLE1BQVYsQ0FBaUJDLE1BQWpCLEtBQTRCLE1BUDFCO0FBQUE7QUFBQTtBQUFBOztBQVFKVCxtQkFBR1UsU0FBSCxDQUFhLEVBQUNSLE9BQU0sSUFBUCxFQUFZUyxTQUFRLFNBQXBCLEVBQWI7QUFSSTs7QUFBQTtBQUFBLHNCQVdGTCxVQUFVRSxNQUFWLENBQWlCQyxNQUFqQixLQUE0QixLQVgxQjtBQUFBO0FBQUE7QUFBQTs7QUFZSlQsbUJBQUdVLFNBQUgsQ0FBYSxFQUFDUixPQUFNLElBQVAsRUFBWVMsU0FBUSxRQUFwQixFQUFiO0FBWkk7O0FBQUE7QUFlTlgsbUJBQUdDLFdBQUgsQ0FBZSxFQUFDQyxPQUFNLFFBQVAsRUFBZjtBQWZNO0FBQUEsdUJBZ0JhRixHQUFHRyxLQUFILENBQVNDLFlBQVQsQ0FBc0I7QUFDdkNDLHdCQUFLO0FBRGtDLGlCQUF0QixDQWhCYjs7QUFBQTtBQWdCRkcsc0JBaEJFOztBQW1CTlIsbUJBQUdPLFdBQUg7O0FBbkJNLHNCQW9CRixDQUFDQyxPQUFPQSxNQUFQLENBQWNJLE9BQWYsSUFBMEJKLE9BQU9BLE1BQVAsQ0FBY0ssTUFBZCxLQUF5QixjQXBCakQ7QUFBQTtBQUFBO0FBQUE7O0FBcUJKO0FBQ0EscUJBQUtDLFNBQUwsQ0FBZSxRQUFmO0FBdEJJO0FBQUE7O0FBQUE7QUF3QkpDLHdCQUFRQyxHQUFSLENBQVksUUFBWjtBQUNBaEIsbUJBQUdDLFdBQUgsQ0FBZSxFQUFDQyxPQUFNLFFBQVAsRUFBZjtBQXpCSTtBQUFBLHVCQTBCcUJGLEdBQUdHLEtBQUgsQ0FBU0MsWUFBVCxDQUFzQjtBQUM3Q0Msd0JBQUs7QUFEd0MsaUJBQXRCLENBMUJyQjs7QUFBQTtBQTBCQVksNEJBMUJBOztBQTZCSmpCLG1CQUFHTyxXQUFIO0FBQ0FRLHdCQUFRQyxHQUFSLENBQVlDLFlBQVo7QUFDQSxvQkFBSSxDQUFDQSxhQUFhVCxNQUFiLENBQW9CVSxNQUF6QixFQUFpQztBQUMvQix1QkFBS0MsU0FBTCxDQUFlLFFBQWY7QUFDRCxpQkFGRCxNQUVPO0FBQ0xuQixxQkFBR29CLGNBQUgsQ0FBa0IsUUFBbEIsRUFBNEJILGFBQWFULE1BQXpDO0FBQ0EsdUJBQUtNLFNBQUwsQ0FBZSxTQUFmO0FBQ0Q7O0FBcENHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsRztPQTBDVk8sTSxHQUFTO0FBQ1Asa0JBQWMscUJBQWE7QUFBQTs7QUFDekIsVUFBSUMsa0JBQWMsVUFBS0MsTUFBTCxHQUFjLENBQTVCLDJEQUFKO0FBQ0FSLGNBQVFDLEdBQVIsQ0FBZSxPQUFLUSxLQUFwQixpQkFBcUNGLE9BQU9qQixJQUE1QyxjQUF5RGlCLE9BQU9HLE1BQVAsQ0FBY0QsS0FBdkU7QUFDRDtBQUpNLEc7OztrQkExRFVwQyxLIiwiZmlsZSI6IndlbGNvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WFmuWPsuWbveaDheefpeivhuernui1mydcbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHtcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgbm93ICgpIHtcbiAgICAgICAgcmV0dXJuICtuZXcgRGF0ZSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGFzeW5jIGVudGVyKCl7XG4gICAgICAgIHd4LnNob3dMb2FkaW5nKHt0aXRsZTpcIuiOt+WPluernui1m+eKtuaAgVwifSlcbiAgICAgICAgbGV0IGNoZWNrVGltZSA9IGF3YWl0IHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XG4gICAgICAgICAgbmFtZTondGltZUNvbnRyb2wnXG4gICAgICAgIH0pXG4gICAgICAgIHd4LmhpZGVMb2FkaW5nKClcbiAgICAgICAgaWYgKGNoZWNrVGltZS5yZXN1bHQuc3RhdHVzID09PSAnd2FpdCcpIHtcbiAgICAgICAgICB3eC5zaG93TW9kYWwoe3RpdGxlOlwi5o+Q56S6XCIsY29udGVudDpcIuetlOmimOWwmuacquW8gOWni++8gVwifSlcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hlY2tUaW1lLnJlc3VsdC5zdGF0dXMgPT09ICdlbmQnKSB7XG4gICAgICAgICAgd3guc2hvd01vZGFsKHt0aXRsZTpcIuaPkOekulwiLGNvbnRlbnQ6XCLnrZTpopjlt7Lnu5PmnZ/vvIFcIn0pXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgd3guc2hvd0xvYWRpbmcoe3RpdGxlOlwi5qC45a+56Lqr5Lu95L+h5oGvXCJ9KVxuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcbiAgICAgICAgICBuYW1lOidpZHNBdXRoJ1xuICAgICAgICB9KVxuICAgICAgICB3eC5oaWRlTG9hZGluZygpXG4gICAgICAgIGlmICghcmVzdWx0LnJlc3VsdC5zdWNjZXNzICYmIHJlc3VsdC5yZXN1bHQucmVhc29uID09PSAndW5hdXRob3JpemVkJykge1xuICAgICAgICAgIC8vIOacqui/m+ihjOi0puWPt+e7keWumu+8jOi3s+i9rOWIsGF1dGjpobXpnaJcbiAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZSgnLi9hdXRoJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygn6Lqr5Lu96K6k6K+B5oiQ5YqfJylcbiAgICAgICAgICB3eC5zaG93TG9hZGluZyh7dGl0bGU6XCLmm7TmlrDlvpfliIbmlbDmja5cIn0pXG4gICAgICAgICAgbGV0IHN1Ym1pdFJlc3VsdCA9IGF3YWl0IHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XG4gICAgICAgICAgICBuYW1lOidnZXRTY29yZSdcbiAgICAgICAgICB9KVxuICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICBjb25zb2xlLmxvZyhzdWJtaXRSZXN1bHQpXG4gICAgICAgICAgaWYgKCFzdWJtaXRSZXN1bHQucmVzdWx0LnN1Ym1pdCkge1xuICAgICAgICAgICAgdGhpcy4kcmVkaXJlY3QoJy4vcnVsZScpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdyZXN1bHQnLCBzdWJtaXRSZXN1bHQucmVzdWx0KVxuICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGUoJy4vc2NvcmUnKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgICAgJ2luZGV4LWVtaXQnOiAoLi4uYXJncykgPT4ge1xuICAgICAgICBsZXQgJGV2ZW50ID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdXG4gICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuJG5hbWV9IHJlY2VpdmUgJHskZXZlbnQubmFtZX0gZnJvbSAkeyRldmVudC5zb3VyY2UuJG5hbWV9YClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgfVxuICB9XG4iXX0=