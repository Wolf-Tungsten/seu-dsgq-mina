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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '东南大学党史国情知识竞赛'
        }, _this.components = {}, _this.data = {
            cardnum: '',
            password: ''
        }, _this.computed = {}, _this.methods = {
            auth: function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    var result;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    wx.showLoading();

                                    _context.next = 3;
                                    return wx.cloud.callFunction({
                                        name: 'idsAuth',
                                        data: {
                                            cardnum: this.cardnum,
                                            password: this.password
                                        }
                                    });

                                case 3:
                                    result = _context.sent;


                                    wx.hideLoading();
                                    console.log(result);
                                    if (!result.result.success) {
                                        // 身份认证出现问题
                                        wx.showToast({
                                            icon: 'none',
                                            title: result.result.reason
                                        });
                                    } else {
                                        wx.setStorage({ key: "name", data: result.result.result.name });
                                        this.$navigate('./rule');
                                    }

                                case 7:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));

                function auth() {
                    return _ref2.apply(this, arguments);
                }

                return auth;
            }(),
            bindCardnum: function bindCardnum(e) {
                this.cardnum = e.detail.value;
            },
            bindPassword: function bindPassword(e) {
                this.password = e.detail.value;
            }
        }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function onLoad() {
            wx.getSetting({
                success: function success(res) {
                    if (res.authSetting['scope.userInfo']) {
                        wx.getUserInfo();
                    }
                }
            });
        }
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/auth'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJjYXJkbnVtIiwicGFzc3dvcmQiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJhdXRoIiwid3giLCJzaG93TG9hZGluZyIsImNsb3VkIiwiY2FsbEZ1bmN0aW9uIiwibmFtZSIsInJlc3VsdCIsImhpZGVMb2FkaW5nIiwiY29uc29sZSIsImxvZyIsInN1Y2Nlc3MiLCJzaG93VG9hc3QiLCJpY29uIiwidGl0bGUiLCJyZWFzb24iLCJzZXRTdG9yYWdlIiwia2V5IiwiJG5hdmlnYXRlIiwiYmluZENhcmRudW0iLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJiaW5kUGFzc3dvcmQiLCJldmVudHMiLCJnZXRTZXR0aW5nIiwicmVzIiwiYXV0aFNldHRpbmciLCJnZXRVc2VySW5mbyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNuQkMsTSxHQUFTO0FBQ1BDLG9DQUF3QjtBQURqQixTLFFBR1RDLFUsR0FBYSxFLFFBR2JDLEksR0FBTztBQUNIQyxxQkFBUSxFQURMO0FBRUhDLHNCQUFTO0FBRk4sUyxRQUtQQyxRLEdBQVcsRSxRQUdYQyxPLEdBQVU7QUFDQUMsZ0JBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFRkMsdUNBQUdDLFdBQUg7O0FBRkU7QUFBQSwyQ0FJaUJELEdBQUdFLEtBQUgsQ0FBU0MsWUFBVCxDQUFzQjtBQUNyQ0MsOENBQUssU0FEZ0M7QUFFckNWLDhDQUFLO0FBQ0RDLHFEQUFRLEtBQUtBLE9BRFo7QUFFREMsc0RBQVMsS0FBS0E7QUFGYjtBQUZnQyxxQ0FBdEIsQ0FKakI7O0FBQUE7QUFJRVMsMENBSkY7OztBQVlGTCx1Q0FBR00sV0FBSDtBQUNBQyw0Q0FBUUMsR0FBUixDQUFZSCxNQUFaO0FBQ0Esd0NBQUcsQ0FBQ0EsT0FBT0EsTUFBUCxDQUFjSSxPQUFsQixFQUEwQjtBQUN0QjtBQUNBVCwyQ0FBR1UsU0FBSCxDQUFhO0FBQ1RDLGtEQUFLLE1BREk7QUFFVEMsbURBQU1QLE9BQU9BLE1BQVAsQ0FBY1E7QUFGWCx5Q0FBYjtBQUlILHFDQU5ELE1BTU87QUFDSGIsMkNBQUdjLFVBQUgsQ0FBYyxFQUFDQyxLQUFJLE1BQUwsRUFBYXJCLE1BQUtXLE9BQU9BLE1BQVAsQ0FBY0EsTUFBZCxDQUFxQkQsSUFBdkMsRUFBZDtBQUNBLDZDQUFLWSxTQUFMLENBQWUsUUFBZjtBQUNIOztBQXZCQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQXlCTkMsdUJBekJNLHVCQXlCTUMsQ0F6Qk4sRUF5QlM7QUFDWCxxQkFBS3ZCLE9BQUwsR0FBZXVCLEVBQUVDLE1BQUYsQ0FBU0MsS0FBeEI7QUFDSCxhQTNCSztBQTRCTkMsd0JBNUJNLHdCQTRCT0gsQ0E1QlAsRUE0QlU7QUFDWixxQkFBS3RCLFFBQUwsR0FBZ0JzQixFQUFFQyxNQUFGLENBQVNDLEtBQXpCO0FBQ0g7QUE5QkssUyxRQWlDVkUsTSxHQUFTLEU7Ozs7O2lDQUdBO0FBQ1B0QixlQUFHdUIsVUFBSCxDQUFjO0FBQ1ZkLHVCQURVLG1CQUNGZSxHQURFLEVBQ0c7QUFDYix3QkFBSUEsSUFBSUMsV0FBSixDQUFnQixnQkFBaEIsQ0FBSixFQUF1QztBQUNyQ3pCLDJCQUFHMEIsV0FBSDtBQUNEO0FBQ0Y7QUFMVyxhQUFkO0FBT0Q7Ozs7RUEzRGdDQyxlQUFLQyxJOztrQkFBbkJ0QyxLIiwiZmlsZSI6ImF1dGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S4nOWNl+Wkp+WtpuWFmuWPsuWbveaDheefpeivhuernui1mydcbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHtcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgICBjYXJkbnVtOicnLFxuICAgICAgICBwYXNzd29yZDonJ1xuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICAgIGFzeW5jIGF1dGgoKSB7XG4gICAgICAgICAgICB3eC5zaG93TG9hZGluZygpXG5cbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xuICAgICAgICAgICAgICAgIG5hbWU6J2lkc0F1dGgnLFxuICAgICAgICAgICAgICAgIGRhdGE6e1xuICAgICAgICAgICAgICAgICAgICBjYXJkbnVtOnRoaXMuY2FyZG51bSxcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6dGhpcy5wYXNzd29yZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcbiAgICAgICAgICAgIGlmKCFyZXN1bHQucmVzdWx0LnN1Y2Nlc3Mpe1xuICAgICAgICAgICAgICAgIC8vIOi6q+S7veiupOivgeWHuueOsOmXrumimFxuICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgIGljb246J25vbmUnLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTpyZXN1bHQucmVzdWx0LnJlYXNvblxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe2tleTpcIm5hbWVcIiwgZGF0YTpyZXN1bHQucmVzdWx0LnJlc3VsdC5uYW1lfSlcbiAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZSgnLi9ydWxlJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYmluZENhcmRudW0oZSkge1xuICAgICAgICAgICAgdGhpcy5jYXJkbnVtID0gZS5kZXRhaWwudmFsdWVcbiAgICAgICAgfSxcbiAgICAgICAgYmluZFBhc3N3b3JkKGUpIHtcbiAgICAgICAgICAgIHRoaXMucGFzc3dvcmQgPSBlLmRldGFpbC52YWx1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgIHd4LmdldFNldHRpbmcoe1xuICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgaWYgKHJlcy5hdXRoU2V0dGluZ1snc2NvcGUudXNlckluZm8nXSkge1xuICAgICAgICAgICAgd3guZ2V0VXNlckluZm8oKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiJdfQ==