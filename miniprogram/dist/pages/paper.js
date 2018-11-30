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
            quiz: [],
            ready: false,
            current: 0,
            remainTime: 180,
            remainTimeText: '03:00',
            checkA: false,
            checkB: false,
            checkC: false,
            checkD: false,
            hasNext: true,
            hasPrev: false,
            submit: false
        }, _this.computed = {
            multiSelect: function multiSelect() {
                if (this.quiz && this.quiz[this.current] && this.quiz[this.current].answer.length > 1) {
                    return '（多选）';
                } else {
                    return '（单选）';
                }
            },
            canSubmit: function canSubmit() {
                var flag = true;
                this.quiz.forEach(function (k) {
                    flag = flag && k.checked;
                });
                return flag;
            }
        }, _this.methods = {
            check: function check(option) {
                var _this2 = this;

                console.log(option);
                if (this.quiz[this.current].answer.length > 1) {
                    if (this.quiz[this.current]['check' + option]) {
                        this.quiz[this.current]['check' + option] = false;
                        this['check' + option] = false;
                    } else {
                        this.quiz[this.current]['check' + option] = true;
                        this['check' + option] = true;
                    }
                } else {
                    ;['A', 'B', 'C', 'D'].forEach(function (k) {
                        _this2.quiz[_this2.current]['check' + k] = false;
                        _this2['check' + k] = false;
                    });
                    this.quiz[this.current]['check' + option] = true;
                    this['check' + option] = true;
                }
                this.quiz[this.current].checked = true;
            },
            next: function next() {
                if (this.current < this.quiz.length) {
                    this.current = this.current + 1;
                    this.checkA = this.quiz[this.current].checkA;
                    this.checkB = this.quiz[this.current].checkB;
                    this.checkC = this.quiz[this.current].checkC;
                    this.checkD = this.quiz[this.current].checkD;
                    this.hasPrev = true;
                    this.hasNext = true;
                }

                if (this.current == this.quiz.length - 1) {
                    this.hasNext = false;
                }
                this.$apply();
            },
            prev: function prev() {
                if (this.current > 0) {
                    this.current = this.current - 1;
                    this.checkA = this.quiz[this.current].checkA;
                    this.checkB = this.quiz[this.current].checkB;
                    this.checkC = this.quiz[this.current].checkC;
                    this.checkD = this.quiz[this.current].checkD;
                    this.hasPrev = true;
                    this.hasNext = true;
                }

                if (this.current == 0) {
                    this.hasPrev = false;
                }
                this.$apply();
            },
            submit: function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    var result;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    if (this.submit) {
                                        _context.next = 13;
                                        break;
                                    }

                                    console.log('提交');
                                    this.submit = true;
                                    this.$apply();
                                    wx.showLoading();
                                    console.log(JSON.stringify(this.quiz));
                                    _context.next = 8;
                                    return wx.cloud.callFunction({
                                        name: 'submit',
                                        data: {
                                            quiz: this.quiz
                                        }
                                    });

                                case 8:
                                    result = _context.sent;

                                    wx.hideLoading();
                                    if (result.result.success) {
                                        console.log('提交成功！');
                                    } else {
                                        console.log('提交无效');
                                    }
                                    _context.next = 14;
                                    break;

                                case 13:
                                    console.log('不能重复提交');

                                case 14:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));

                function submit() {
                    return _ref2.apply(this, arguments);
                }

                return submit;
            }()
        }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function onLoad() {
            var _this3 = this;

            wx.showLoading();
            wx.cloud.callFunction({
                name: 'getQuiz'
            }).then(function (res) {
                wx.hideLoading();
                console.log(res);
                _this3.quiz = res.result;
                _this3.$apply();
                _this3.quiz.forEach(function (k) {
                    k.checkA = false;
                    k.checkB = false;
                    k.checkC = false;
                    k.checkD = false;
                    k.checked = false;
                });
                _this3.ready = true;
                _this3.$apply();
                _this3.timer = setInterval(function () {
                    _this3.remainTime = _this3.remainTime - 1;
                    var minute = Math.floor(_this3.remainTime / 60);
                    var second = Math.floor(_this3.remainTime % 60);
                    _this3.remainTimeText = '' + (minute < 10 ? '0' : '') + minute + ':' + (second < 10 ? '0' : '') + second;
                    if (_this3.remainTime <= 0) {
                        console.log('时间到了'); //TODO
                        _this3.remainTimeText = '时间到！';
                        clearInterval(_this3.timer);
                    }
                    _this3.$apply();
                }, 1000);
            });
        }
    }, {
        key: 'onUnload',
        value: function onUnload() {
            clearInterval(this.timer);
        }
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/paper'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcGVyLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwicXVpeiIsInJlYWR5IiwiY3VycmVudCIsInJlbWFpblRpbWUiLCJyZW1haW5UaW1lVGV4dCIsImNoZWNrQSIsImNoZWNrQiIsImNoZWNrQyIsImNoZWNrRCIsImhhc05leHQiLCJoYXNQcmV2Iiwic3VibWl0IiwiY29tcHV0ZWQiLCJtdWx0aVNlbGVjdCIsImFuc3dlciIsImxlbmd0aCIsImNhblN1Ym1pdCIsImZsYWciLCJmb3JFYWNoIiwiayIsImNoZWNrZWQiLCJtZXRob2RzIiwiY2hlY2siLCJvcHRpb24iLCJjb25zb2xlIiwibG9nIiwibmV4dCIsIiRhcHBseSIsInByZXYiLCJ3eCIsInNob3dMb2FkaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsImNsb3VkIiwiY2FsbEZ1bmN0aW9uIiwibmFtZSIsInJlc3VsdCIsImhpZGVMb2FkaW5nIiwic3VjY2VzcyIsImV2ZW50cyIsInRoZW4iLCJyZXMiLCJ0aW1lciIsInNldEludGVydmFsIiwibWludXRlIiwiTWF0aCIsImZsb29yIiwic2Vjb25kIiwiY2xlYXJJbnRlcnZhbCIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNuQkMsTSxHQUFTO0FBQ1BDLG9DQUF3QjtBQURqQixTLFFBR1RDLFUsR0FBYSxFLFFBR2JDLEksR0FBTztBQUNIQyxrQkFBSyxFQURGO0FBRUhDLG1CQUFNLEtBRkg7QUFHSEMscUJBQVEsQ0FITDtBQUlIQyx3QkFBWSxHQUpUO0FBS0hDLDRCQUFlLE9BTFo7QUFNSEMsb0JBQU8sS0FOSjtBQU9IQyxvQkFBTyxLQVBKO0FBUUhDLG9CQUFPLEtBUko7QUFTSEMsb0JBQU8sS0FUSjtBQVVIQyxxQkFBUyxJQVZOO0FBV0hDLHFCQUFTLEtBWE47QUFZSEMsb0JBQVE7QUFaTCxTLFFBZVBDLFEsR0FBVztBQUNQQyx1QkFETyx5QkFDTTtBQUNULG9CQUFLLEtBQUtiLElBQUwsSUFBYSxLQUFLQSxJQUFMLENBQVUsS0FBS0UsT0FBZixDQUFiLElBQXdDLEtBQUtGLElBQUwsQ0FBVSxLQUFLRSxPQUFmLEVBQXdCWSxNQUF4QixDQUErQkMsTUFBL0IsR0FBd0MsQ0FBckYsRUFBd0Y7QUFDcEYsMkJBQU8sTUFBUDtBQUNILGlCQUZELE1BRU87QUFDSCwyQkFBTyxNQUFQO0FBQ0g7QUFDSixhQVBNO0FBUVBDLHFCQVJPLHVCQVFJO0FBQ1Asb0JBQUlDLE9BQU8sSUFBWDtBQUNBLHFCQUFLakIsSUFBTCxDQUFVa0IsT0FBVixDQUFrQixhQUFLO0FBQ25CRCwyQkFBT0EsUUFBUUUsRUFBRUMsT0FBakI7QUFDSCxpQkFGRDtBQUdBLHVCQUFPSCxJQUFQO0FBQ0g7QUFkTSxTLFFBaUJYSSxPLEdBQVU7QUFDTkMsaUJBRE0saUJBQ0FDLE1BREEsRUFDTztBQUFBOztBQUNUQyx3QkFBUUMsR0FBUixDQUFZRixNQUFaO0FBQ0Esb0JBQUksS0FBS3ZCLElBQUwsQ0FBVSxLQUFLRSxPQUFmLEVBQXdCWSxNQUF4QixDQUErQkMsTUFBL0IsR0FBd0MsQ0FBNUMsRUFBK0M7QUFDM0Msd0JBQUksS0FBS2YsSUFBTCxDQUFVLEtBQUtFLE9BQWYsWUFBZ0NxQixNQUFoQyxDQUFKLEVBQStDO0FBQzNDLDZCQUFLdkIsSUFBTCxDQUFVLEtBQUtFLE9BQWYsWUFBZ0NxQixNQUFoQyxJQUE0QyxLQUE1QztBQUNBLHVDQUFhQSxNQUFiLElBQXlCLEtBQXpCO0FBQ0gscUJBSEQsTUFHTztBQUNILDZCQUFLdkIsSUFBTCxDQUFVLEtBQUtFLE9BQWYsWUFBZ0NxQixNQUFoQyxJQUE0QyxJQUE1QztBQUNBLHVDQUFhQSxNQUFiLElBQXlCLElBQXpCO0FBQ0g7QUFDSixpQkFSRCxNQVFPO0FBQ0gscUJBQUMsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUJMLE9BQXJCLENBQThCLGFBQUs7QUFDaEMsK0JBQUtsQixJQUFMLENBQVUsT0FBS0UsT0FBZixZQUFnQ2lCLENBQWhDLElBQXVDLEtBQXZDO0FBQ0EseUNBQWFBLENBQWIsSUFBb0IsS0FBcEI7QUFDSCxxQkFIQTtBQUlELHlCQUFLbkIsSUFBTCxDQUFVLEtBQUtFLE9BQWYsWUFBZ0NxQixNQUFoQyxJQUE0QyxJQUE1QztBQUNBLG1DQUFhQSxNQUFiLElBQXlCLElBQXpCO0FBQ0g7QUFDRCxxQkFBS3ZCLElBQUwsQ0FBVSxLQUFLRSxPQUFmLEVBQXdCa0IsT0FBeEIsR0FBa0MsSUFBbEM7QUFDSCxhQXBCSztBQXFCTk0sZ0JBckJNLGtCQXFCQztBQUNILG9CQUFJLEtBQUt4QixPQUFMLEdBQWUsS0FBS0YsSUFBTCxDQUFVZSxNQUE3QixFQUFxQztBQUNqQyx5QkFBS2IsT0FBTCxHQUFlLEtBQUtBLE9BQUwsR0FBZSxDQUE5QjtBQUNBLHlCQUFLRyxNQUFMLEdBQWMsS0FBS0wsSUFBTCxDQUFVLEtBQUtFLE9BQWYsRUFBd0JHLE1BQXRDO0FBQ0EseUJBQUtDLE1BQUwsR0FBYyxLQUFLTixJQUFMLENBQVUsS0FBS0UsT0FBZixFQUF3QkksTUFBdEM7QUFDQSx5QkFBS0MsTUFBTCxHQUFjLEtBQUtQLElBQUwsQ0FBVSxLQUFLRSxPQUFmLEVBQXdCSyxNQUF0QztBQUNBLHlCQUFLQyxNQUFMLEdBQWMsS0FBS1IsSUFBTCxDQUFVLEtBQUtFLE9BQWYsRUFBd0JNLE1BQXRDO0FBQ0EseUJBQUtFLE9BQUwsR0FBZSxJQUFmO0FBQ0EseUJBQUtELE9BQUwsR0FBZSxJQUFmO0FBQ0g7O0FBRUQsb0JBQUksS0FBS1AsT0FBTCxJQUFnQixLQUFLRixJQUFMLENBQVVlLE1BQVYsR0FBbUIsQ0FBdkMsRUFBMEM7QUFDdEMseUJBQUtOLE9BQUwsR0FBZSxLQUFmO0FBQ0g7QUFDRCxxQkFBS2tCLE1BQUw7QUFDSCxhQXBDSztBQXFDTkMsZ0JBckNNLGtCQXFDQztBQUNILG9CQUFJLEtBQUsxQixPQUFMLEdBQWUsQ0FBbkIsRUFBc0I7QUFDbEIseUJBQUtBLE9BQUwsR0FBZSxLQUFLQSxPQUFMLEdBQWUsQ0FBOUI7QUFDQSx5QkFBS0csTUFBTCxHQUFjLEtBQUtMLElBQUwsQ0FBVSxLQUFLRSxPQUFmLEVBQXdCRyxNQUF0QztBQUNBLHlCQUFLQyxNQUFMLEdBQWMsS0FBS04sSUFBTCxDQUFVLEtBQUtFLE9BQWYsRUFBd0JJLE1BQXRDO0FBQ0EseUJBQUtDLE1BQUwsR0FBYyxLQUFLUCxJQUFMLENBQVUsS0FBS0UsT0FBZixFQUF3QkssTUFBdEM7QUFDQSx5QkFBS0MsTUFBTCxHQUFjLEtBQUtSLElBQUwsQ0FBVSxLQUFLRSxPQUFmLEVBQXdCTSxNQUF0QztBQUNBLHlCQUFLRSxPQUFMLEdBQWUsSUFBZjtBQUNBLHlCQUFLRCxPQUFMLEdBQWUsSUFBZjtBQUNIOztBQUVELG9CQUFJLEtBQUtQLE9BQUwsSUFBZ0IsQ0FBcEIsRUFBdUI7QUFDbkIseUJBQUtRLE9BQUwsR0FBZSxLQUFmO0FBQ0g7QUFDRCxxQkFBS2lCLE1BQUw7QUFDSCxhQXBESztBQXFEQWhCLGtCQXJEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdDQXNERSxLQUFLQSxNQXREUDtBQUFBO0FBQUE7QUFBQTs7QUF1REVhLDRDQUFRQyxHQUFSLENBQVksSUFBWjtBQUNBLHlDQUFLZCxNQUFMLEdBQWMsSUFBZDtBQUNBLHlDQUFLZ0IsTUFBTDtBQUNBRSx1Q0FBR0MsV0FBSDtBQUNBTiw0Q0FBUUMsR0FBUixDQUFZTSxLQUFLQyxTQUFMLENBQWUsS0FBS2hDLElBQXBCLENBQVo7QUEzREY7QUFBQSwyQ0E0RHFCNkIsR0FBR0ksS0FBSCxDQUFTQyxZQUFULENBQXNCO0FBQ3JDQyw4Q0FBSyxRQURnQztBQUVyQ3BDLDhDQUFLO0FBQ0RDLGtEQUFLLEtBQUtBO0FBRFQ7QUFGZ0MscUNBQXRCLENBNURyQjs7QUFBQTtBQTRETW9DLDBDQTVETjs7QUFrRUVQLHVDQUFHUSxXQUFIO0FBQ0Esd0NBQUlELE9BQU9BLE1BQVAsQ0FBY0UsT0FBbEIsRUFBMkI7QUFDdkJkLGdEQUFRQyxHQUFSLENBQVksT0FBWjtBQUNILHFDQUZELE1BRU87QUFDSEQsZ0RBQVFDLEdBQVIsQ0FBWSxNQUFaO0FBQ0g7QUF2RUg7QUFBQTs7QUFBQTtBQXlFRUQsNENBQVFDLEdBQVIsQ0FBWSxRQUFaOztBQXpFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLFMsUUE4RVZjLE0sR0FBUyxFOzs7OztpQ0FHQTtBQUFBOztBQUNMVixlQUFHQyxXQUFIO0FBQ0FELGVBQUdJLEtBQUgsQ0FBU0MsWUFBVCxDQUFzQjtBQUNsQkMsc0JBQUs7QUFEYSxhQUF0QixFQUVHSyxJQUZILENBRVEsVUFBQ0MsR0FBRCxFQUFPO0FBQ1haLG1CQUFHUSxXQUFIO0FBQ0FiLHdCQUFRQyxHQUFSLENBQVlnQixHQUFaO0FBQ0EsdUJBQUt6QyxJQUFMLEdBQVl5QyxJQUFJTCxNQUFoQjtBQUNBLHVCQUFLVCxNQUFMO0FBQ0EsdUJBQUszQixJQUFMLENBQVVrQixPQUFWLENBQWtCLGFBQUc7QUFDakJDLHNCQUFFZCxNQUFGLEdBQVcsS0FBWDtBQUNBYyxzQkFBRWIsTUFBRixHQUFXLEtBQVg7QUFDQWEsc0JBQUVaLE1BQUYsR0FBVyxLQUFYO0FBQ0FZLHNCQUFFWCxNQUFGLEdBQVcsS0FBWDtBQUNBVyxzQkFBRUMsT0FBRixHQUFZLEtBQVo7QUFDSCxpQkFORDtBQU9BLHVCQUFLbkIsS0FBTCxHQUFhLElBQWI7QUFDQSx1QkFBSzBCLE1BQUw7QUFDQSx1QkFBS2UsS0FBTCxHQUFhQyxZQUFZLFlBQU07QUFDM0IsMkJBQUt4QyxVQUFMLEdBQWtCLE9BQUtBLFVBQUwsR0FBa0IsQ0FBcEM7QUFDQSx3QkFBSXlDLFNBQVNDLEtBQUtDLEtBQUwsQ0FBVyxPQUFLM0MsVUFBTCxHQUFrQixFQUE3QixDQUFiO0FBQ0Esd0JBQUk0QyxTQUFTRixLQUFLQyxLQUFMLENBQVcsT0FBSzNDLFVBQUwsR0FBa0IsRUFBN0IsQ0FBYjtBQUNBLDJCQUFLQyxjQUFMLFNBQXlCd0MsU0FBUyxFQUFULEdBQWMsR0FBZCxHQUFvQixFQUE3QyxJQUFrREEsTUFBbEQsVUFBNERHLFNBQVMsRUFBVCxHQUFZLEdBQVosR0FBZ0IsRUFBNUUsSUFBaUZBLE1BQWpGO0FBQ0Esd0JBQUksT0FBSzVDLFVBQUwsSUFBbUIsQ0FBdkIsRUFBMEI7QUFDdEJxQixnQ0FBUUMsR0FBUixDQUFZLE1BQVosRUFEc0IsQ0FDRjtBQUNwQiwrQkFBS3JCLGNBQUwsR0FBc0IsTUFBdEI7QUFDQTRDLHNDQUFjLE9BQUtOLEtBQW5CO0FBQ0g7QUFDRCwyQkFBS2YsTUFBTDtBQUNILGlCQVhZLEVBV1YsSUFYVSxDQUFiO0FBWUgsYUE1QkQ7QUE4Qkg7OzttQ0FDUztBQUNOcUIsMEJBQWMsS0FBS04sS0FBbkI7QUFDSDs7OztFQTNKZ0NPLGVBQUtDLEk7O2tCQUFuQnZELEsiLCJmaWxlIjoicGFwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S4nOWNl+Wkp+WtpuWFmuWPsuWbveaDheefpeivhuernui1mydcbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHtcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgICBxdWl6OltdLFxuICAgICAgICByZWFkeTpmYWxzZSxcbiAgICAgICAgY3VycmVudDowLFxuICAgICAgICByZW1haW5UaW1lOiAxODAsXG4gICAgICAgIHJlbWFpblRpbWVUZXh0OicwMzowMCcsXG4gICAgICAgIGNoZWNrQTpmYWxzZSxcbiAgICAgICAgY2hlY2tCOmZhbHNlLFxuICAgICAgICBjaGVja0M6ZmFsc2UsXG4gICAgICAgIGNoZWNrRDpmYWxzZSxcbiAgICAgICAgaGFzTmV4dDogdHJ1ZSxcbiAgICAgICAgaGFzUHJldjogZmFsc2UsXG4gICAgICAgIHN1Ym1pdDogZmFsc2VcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgICAgbXVsdGlTZWxlY3QoKXtcbiAgICAgICAgICAgIGlmICggdGhpcy5xdWl6ICYmIHRoaXMucXVpelt0aGlzLmN1cnJlbnRdICYmIHRoaXMucXVpelt0aGlzLmN1cnJlbnRdLmFuc3dlci5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICfvvIjlpJrpgInvvIknXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAn77yI5Y2V6YCJ77yJJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjYW5TdWJtaXQoKXtcbiAgICAgICAgICAgIGxldCBmbGFnID0gdHJ1ZVxuICAgICAgICAgICAgdGhpcy5xdWl6LmZvckVhY2goayA9PiB7XG4gICAgICAgICAgICAgICAgZmxhZyA9IGZsYWcgJiYgay5jaGVja2VkXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIGZsYWdcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICAgIGNoZWNrKG9wdGlvbil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhvcHRpb24pXG4gICAgICAgICAgICBpZiAodGhpcy5xdWl6W3RoaXMuY3VycmVudF0uYW5zd2VyLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5xdWl6W3RoaXMuY3VycmVudF1bYGNoZWNrJHtvcHRpb259YF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWl6W3RoaXMuY3VycmVudF1bYGNoZWNrJHtvcHRpb259YF0gPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzW2BjaGVjayR7b3B0aW9ufWBdID0gZmFsc2VcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnF1aXpbdGhpcy5jdXJyZW50XVtgY2hlY2ske29wdGlvbn1gXSA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tgY2hlY2ske29wdGlvbn1gXSA9IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIDtbJ0EnLCAnQicsICdDJywgJ0QnXS5mb3JFYWNoKCBrID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWl6W3RoaXMuY3VycmVudF1bYGNoZWNrJHtrfWBdID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tgY2hlY2ske2t9YF0gPSBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMucXVpelt0aGlzLmN1cnJlbnRdW2BjaGVjayR7b3B0aW9ufWBdID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRoaXNbYGNoZWNrJHtvcHRpb259YF0gPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnF1aXpbdGhpcy5jdXJyZW50XS5jaGVja2VkID0gdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBuZXh0KCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudCA8IHRoaXMucXVpei5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLmN1cnJlbnQgKyAxXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0EgPSB0aGlzLnF1aXpbdGhpcy5jdXJyZW50XS5jaGVja0EgXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0IgPSB0aGlzLnF1aXpbdGhpcy5jdXJyZW50XS5jaGVja0JcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrQyA9IHRoaXMucXVpelt0aGlzLmN1cnJlbnRdLmNoZWNrQyBcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrRCA9IHRoaXMucXVpelt0aGlzLmN1cnJlbnRdLmNoZWNrRFxuICAgICAgICAgICAgICAgIHRoaXMuaGFzUHJldiA9IHRydWVcbiAgICAgICAgICAgICAgICB0aGlzLmhhc05leHQgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50ID09IHRoaXMucXVpei5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYXNOZXh0ID0gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgfSxcbiAgICAgICAgcHJldigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5jdXJyZW50IC0gMVxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tBID0gdGhpcy5xdWl6W3RoaXMuY3VycmVudF0uY2hlY2tBIFxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tCID0gdGhpcy5xdWl6W3RoaXMuY3VycmVudF0uY2hlY2tCXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0MgPSB0aGlzLnF1aXpbdGhpcy5jdXJyZW50XS5jaGVja0MgXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0QgPSB0aGlzLnF1aXpbdGhpcy5jdXJyZW50XS5jaGVja0RcbiAgICAgICAgICAgICAgICB0aGlzLmhhc1ByZXYgPSB0cnVlXG4gICAgICAgICAgICAgICAgdGhpcy5oYXNOZXh0ID0gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYXNQcmV2ID0gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgc3VibWl0KCl7XG4gICAgICAgICAgICBpZighdGhpcy5zdWJtaXQpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmj5DkuqQnKVxuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0ID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICAgICAgICB3eC5zaG93TG9hZGluZygpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5xdWl6KSlcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTonc3VibWl0JyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTp7XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWl6OnRoaXMucXVpelxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5yZXN1bHQuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5o+Q5Lqk5oiQ5Yqf77yBJylcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5o+Q5Lqk5peg5pWIJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfkuI3og73ph43lpI3mj5DkuqQnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgd3guc2hvd0xvYWRpbmcoKVxuICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xuICAgICAgICAgICAgbmFtZTonZ2V0UXVpeidcbiAgICAgICAgfSkudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKVxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgICAgdGhpcy5xdWl6ID0gcmVzLnJlc3VsdFxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgICAgdGhpcy5xdWl6LmZvckVhY2goaz0+e1xuICAgICAgICAgICAgICAgIGsuY2hlY2tBID0gZmFsc2VcbiAgICAgICAgICAgICAgICBrLmNoZWNrQiA9IGZhbHNlXG4gICAgICAgICAgICAgICAgay5jaGVja0MgPSBmYWxzZVxuICAgICAgICAgICAgICAgIGsuY2hlY2tEID0gZmFsc2VcbiAgICAgICAgICAgICAgICBrLmNoZWNrZWQgPSBmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMucmVhZHkgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbWFpblRpbWUgPSB0aGlzLnJlbWFpblRpbWUgLSAxXG4gICAgICAgICAgICAgICAgbGV0IG1pbnV0ZSA9IE1hdGguZmxvb3IodGhpcy5yZW1haW5UaW1lIC8gNjApXG4gICAgICAgICAgICAgICAgbGV0IHNlY29uZCA9IE1hdGguZmxvb3IodGhpcy5yZW1haW5UaW1lICUgNjApXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1haW5UaW1lVGV4dCA9IGAke21pbnV0ZSA8IDEwID8gJzAnIDogJyd9JHttaW51dGV9OiR7c2Vjb25kIDwgMTA/JzAnOicnfSR7c2Vjb25kfWBcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yZW1haW5UaW1lIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aXtumXtOWIsOS6hicpIC8vVE9ET1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbWFpblRpbWVUZXh0ID0gJ+aXtumXtOWIsO+8gSdcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfSlcblxuICAgIH1cbiAgICBvblVubG9hZCgpe1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpXG4gICAgfVxuICB9XG4iXX0=