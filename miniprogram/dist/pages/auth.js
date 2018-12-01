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
                                    wx.showLoading({ title: "正在认证" });
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
                                        this.$redirect('./rule');
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJjYXJkbnVtIiwicGFzc3dvcmQiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJhdXRoIiwid3giLCJzaG93TG9hZGluZyIsInRpdGxlIiwiY2xvdWQiLCJjYWxsRnVuY3Rpb24iLCJuYW1lIiwicmVzdWx0IiwiaGlkZUxvYWRpbmciLCJjb25zb2xlIiwibG9nIiwic3VjY2VzcyIsInNob3dUb2FzdCIsImljb24iLCJyZWFzb24iLCJzZXRTdG9yYWdlIiwia2V5IiwiJHJlZGlyZWN0IiwiYmluZENhcmRudW0iLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJiaW5kUGFzc3dvcmQiLCJldmVudHMiLCJnZXRTZXR0aW5nIiwicmVzIiwiYXV0aFNldHRpbmciLCJnZXRVc2VySW5mbyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNuQkMsTSxHQUFTO0FBQ1BDLG9DQUF3QjtBQURqQixTLFFBR1RDLFUsR0FBYSxFLFFBR2JDLEksR0FBTztBQUNIQyxxQkFBUSxFQURMO0FBRUhDLHNCQUFTO0FBRk4sUyxRQUtQQyxRLEdBQVcsRSxRQUdYQyxPLEdBQVU7QUFDQUMsZ0JBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFRkMsdUNBQUdDLFdBQUgsQ0FBZSxFQUFDQyxPQUFNLE1BQVAsRUFBZjtBQUZFO0FBQUEsMkNBR2lCRixHQUFHRyxLQUFILENBQVNDLFlBQVQsQ0FBc0I7QUFDckNDLDhDQUFLLFNBRGdDO0FBRXJDWCw4Q0FBSztBQUNEQyxxREFBUSxLQUFLQSxPQURaO0FBRURDLHNEQUFTLEtBQUtBO0FBRmI7QUFGZ0MscUNBQXRCLENBSGpCOztBQUFBO0FBR0VVLDBDQUhGOztBQVVGTix1Q0FBR08sV0FBSDtBQUNBQyw0Q0FBUUMsR0FBUixDQUFZSCxNQUFaO0FBQ0Esd0NBQUcsQ0FBQ0EsT0FBT0EsTUFBUCxDQUFjSSxPQUFsQixFQUEwQjtBQUN0QjtBQUNBViwyQ0FBR1csU0FBSCxDQUFhO0FBQ1RDLGtEQUFLLE1BREk7QUFFVFYsbURBQU1JLE9BQU9BLE1BQVAsQ0FBY087QUFGWCx5Q0FBYjtBQUlILHFDQU5ELE1BTU87QUFDSGIsMkNBQUdjLFVBQUgsQ0FBYyxFQUFDQyxLQUFJLE1BQUwsRUFBYXJCLE1BQUtZLE9BQU9BLE1BQVAsQ0FBY0EsTUFBZCxDQUFxQkQsSUFBdkMsRUFBZDtBQUNBLDZDQUFLVyxTQUFMLENBQWUsUUFBZjtBQUNIOztBQXJCQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQXVCTkMsdUJBdkJNLHVCQXVCTUMsQ0F2Qk4sRUF1QlM7QUFDWCxxQkFBS3ZCLE9BQUwsR0FBZXVCLEVBQUVDLE1BQUYsQ0FBU0MsS0FBeEI7QUFDSCxhQXpCSztBQTBCTkMsd0JBMUJNLHdCQTBCT0gsQ0ExQlAsRUEwQlU7QUFDWixxQkFBS3RCLFFBQUwsR0FBZ0JzQixFQUFFQyxNQUFGLENBQVNDLEtBQXpCO0FBQ0g7QUE1QkssUyxRQStCVkUsTSxHQUFTLEU7Ozs7O2lDQUdBO0FBQ1B0QixlQUFHdUIsVUFBSCxDQUFjO0FBQ1ZiLHVCQURVLG1CQUNGYyxHQURFLEVBQ0c7QUFDYix3QkFBSUEsSUFBSUMsV0FBSixDQUFnQixnQkFBaEIsQ0FBSixFQUF1QztBQUNyQ3pCLDJCQUFHMEIsV0FBSDtBQUNEO0FBQ0Y7QUFMVyxhQUFkO0FBT0Q7Ozs7RUF6RGdDQyxlQUFLQyxJOztrQkFBbkJ0QyxLIiwiZmlsZSI6ImF1dGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S4nOWNl+Wkp+WtpuWFmuWPsuWbveaDheefpeivhuernui1mydcbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHtcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgICBjYXJkbnVtOicnLFxuICAgICAgICBwYXNzd29yZDonJ1xuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICAgIGFzeW5jIGF1dGgoKSB7XG4gICAgICAgICAgICB3eC5zaG93TG9hZGluZyh7dGl0bGU6XCLmraPlnKjorqTor4FcIn0pXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcbiAgICAgICAgICAgICAgICBuYW1lOidpZHNBdXRoJyxcbiAgICAgICAgICAgICAgICBkYXRhOntcbiAgICAgICAgICAgICAgICAgICAgY2FyZG51bTp0aGlzLmNhcmRudW0sXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOnRoaXMucGFzc3dvcmRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKVxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxuICAgICAgICAgICAgaWYoIXJlc3VsdC5yZXN1bHQuc3VjY2Vzcyl7XG4gICAgICAgICAgICAgICAgLy8g6Lqr5Lu96K6k6K+B5Ye6546w6Zeu6aKYXG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjonbm9uZScsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOnJlc3VsdC5yZXN1bHQucmVhc29uXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7a2V5OlwibmFtZVwiLCBkYXRhOnJlc3VsdC5yZXN1bHQucmVzdWx0Lm5hbWV9KVxuICAgICAgICAgICAgICAgIHRoaXMuJHJlZGlyZWN0KCcuL3J1bGUnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBiaW5kQ2FyZG51bShlKSB7XG4gICAgICAgICAgICB0aGlzLmNhcmRudW0gPSBlLmRldGFpbC52YWx1ZVxuICAgICAgICB9LFxuICAgICAgICBiaW5kUGFzc3dvcmQoZSkge1xuICAgICAgICAgICAgdGhpcy5wYXNzd29yZCA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgd3guZ2V0U2V0dGluZyh7XG4gICAgICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICBpZiAocmVzLmF1dGhTZXR0aW5nWydzY29wZS51c2VySW5mbyddKSB7XG4gICAgICAgICAgICB3eC5nZXRVc2VySW5mbygpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuIl19