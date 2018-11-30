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
        value: function onLoad() {}
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/auth'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJjYXJkbnVtIiwicGFzc3dvcmQiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJhdXRoIiwid3giLCJzaG93TG9hZGluZyIsImNsb3VkIiwiY2FsbEZ1bmN0aW9uIiwibmFtZSIsInJlc3VsdCIsImhpZGVMb2FkaW5nIiwiY29uc29sZSIsImxvZyIsInN1Y2Nlc3MiLCJzaG93VG9hc3QiLCJpY29uIiwidGl0bGUiLCJyZWFzb24iLCJzZXRTdG9yYWdlIiwia2V5IiwiJG5hdmlnYXRlIiwiYmluZENhcmRudW0iLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJiaW5kUGFzc3dvcmQiLCJldmVudHMiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDbkJDLE0sR0FBUztBQUNQQyxvQ0FBd0I7QUFEakIsUyxRQUdUQyxVLEdBQWEsRSxRQUdiQyxJLEdBQU87QUFDSEMscUJBQVEsRUFETDtBQUVIQyxzQkFBUztBQUZOLFMsUUFLUEMsUSxHQUFXLEUsUUFHWEMsTyxHQUFVO0FBQ0FDLGdCQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUZDLHVDQUFHQyxXQUFIOztBQUZFO0FBQUEsMkNBSWlCRCxHQUFHRSxLQUFILENBQVNDLFlBQVQsQ0FBc0I7QUFDckNDLDhDQUFLLFNBRGdDO0FBRXJDViw4Q0FBSztBQUNEQyxxREFBUSxLQUFLQSxPQURaO0FBRURDLHNEQUFTLEtBQUtBO0FBRmI7QUFGZ0MscUNBQXRCLENBSmpCOztBQUFBO0FBSUVTLDBDQUpGOzs7QUFZRkwsdUNBQUdNLFdBQUg7QUFDQUMsNENBQVFDLEdBQVIsQ0FBWUgsTUFBWjtBQUNBLHdDQUFHLENBQUNBLE9BQU9BLE1BQVAsQ0FBY0ksT0FBbEIsRUFBMEI7QUFDdEI7QUFDQVQsMkNBQUdVLFNBQUgsQ0FBYTtBQUNUQyxrREFBSyxNQURJO0FBRVRDLG1EQUFNUCxPQUFPQSxNQUFQLENBQWNRO0FBRlgseUNBQWI7QUFJSCxxQ0FORCxNQU1PO0FBQ0hiLDJDQUFHYyxVQUFILENBQWMsRUFBQ0MsS0FBSSxNQUFMLEVBQWFyQixNQUFLVyxPQUFPQSxNQUFQLENBQWNBLE1BQWQsQ0FBcUJELElBQXZDLEVBQWQ7QUFDQSw2Q0FBS1ksU0FBTCxDQUFlLFFBQWY7QUFDSDs7QUF2QkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUF5Qk5DLHVCQXpCTSx1QkF5Qk1DLENBekJOLEVBeUJTO0FBQ1gscUJBQUt2QixPQUFMLEdBQWV1QixFQUFFQyxNQUFGLENBQVNDLEtBQXhCO0FBQ0gsYUEzQks7QUE0Qk5DLHdCQTVCTSx3QkE0Qk9ILENBNUJQLEVBNEJVO0FBQ1oscUJBQUt0QixRQUFMLEdBQWdCc0IsRUFBRUMsTUFBRixDQUFTQyxLQUF6QjtBQUNIO0FBOUJLLFMsUUFpQ1ZFLE0sR0FBUyxFOzs7OztpQ0FHQSxDQUNSOzs7O0VBcERnQ0MsZUFBS0MsSTs7a0JBQW5CbEMsSyIsImZpbGUiOiJhdXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkuJzljZflpKflrablhZrlj7Llm73mg4Xnn6Xor4bnq57otZsnXG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgICAgY2FyZG51bTonJyxcbiAgICAgICAgcGFzc3dvcmQ6JydcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgICBhc3luYyBhdXRoKCkge1xuICAgICAgICAgICAgd3guc2hvd0xvYWRpbmcoKVxuXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcbiAgICAgICAgICAgICAgICBuYW1lOidpZHNBdXRoJyxcbiAgICAgICAgICAgICAgICBkYXRhOntcbiAgICAgICAgICAgICAgICAgICAgY2FyZG51bTp0aGlzLmNhcmRudW0sXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOnRoaXMucGFzc3dvcmRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXG4gICAgICAgICAgICBpZighcmVzdWx0LnJlc3VsdC5zdWNjZXNzKXtcbiAgICAgICAgICAgICAgICAvLyDouqvku73orqTor4Hlh7rnjrDpl67pophcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICBpY29uOidub25lJyxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6cmVzdWx0LnJlc3VsdC5yZWFzb25cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtrZXk6XCJuYW1lXCIsIGRhdGE6cmVzdWx0LnJlc3VsdC5yZXN1bHQubmFtZX0pXG4gICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGUoJy4vcnVsZScpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGJpbmRDYXJkbnVtKGUpIHtcbiAgICAgICAgICAgIHRoaXMuY2FyZG51bSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICAgIH0sXG4gICAgICAgIGJpbmRQYXNzd29yZChlKSB7XG4gICAgICAgICAgICB0aGlzLnBhc3N3b3JkID0gZS5kZXRhaWwudmFsdWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgfVxuICB9XG4iXX0=