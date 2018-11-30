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
            remainTime: 600,
            remainTimeText: '10:00',
            checkA: false,
            checkB: false,
            checkC: false,
            checkD: false,
            hasNext: true,
            hasPrev: false,
            submitted: false
        }, _this.computed = {
            multiSelect: function multiSelect() {
                if (this.quiz && this.quiz[this.current] && this.quiz[this.current].answer.length > 1) {
                    return '【多选】';
                } else {
                    return '【单选】';
                }
            },
            canSubmit: function canSubmit() {
                var flag = true;
                this.quiz.forEach(function (k) {
                    flag = flag && k.checked;
                });
                return flag && !this.submitted;
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
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.next = 2;
                                    return this.submit();

                                case 2:
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
        key: 'submit',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var result, submitResult;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                if (this.submitted) {
                                    _context2.next = 22;
                                    break;
                                }

                                console.log('提交');
                                this.submitted = true;
                                this.$apply();
                                wx.showLoading();
                                console.log(JSON.stringify(this.quiz));
                                _context2.next = 8;
                                return wx.cloud.callFunction({
                                    name: 'submit',
                                    data: {
                                        quiz: this.quiz
                                    }
                                });

                            case 8:
                                result = _context2.sent;

                                wx.hideLoading();

                                if (!result.result.success) {
                                    _context2.next = 19;
                                    break;
                                }

                                console.log('提交成功！');
                                _context2.next = 14;
                                return wx.cloud.callFunction({
                                    name: 'getScore'
                                });

                            case 14:
                                submitResult = _context2.sent;

                                console.log(submitResult);
                                if (!submitResult.result.submit) {
                                    this.$redirect('./rule');
                                } else {
                                    wx.setStorageSync('result', submitResult.result);
                                    this.$redirect('./score');
                                }
                                _context2.next = 20;
                                break;

                            case 19:
                                console.log('提交无效');

                            case 20:
                                _context2.next = 23;
                                break;

                            case 22:
                                console.log('不能重复提交');

                            case 23:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function submit() {
                return _ref3.apply(this, arguments);
            }

            return submit;
        }()
    }, {
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
                        _this3.$apply();
                        _this3.submit();
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcGVyLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwicXVpeiIsInJlYWR5IiwiY3VycmVudCIsInJlbWFpblRpbWUiLCJyZW1haW5UaW1lVGV4dCIsImNoZWNrQSIsImNoZWNrQiIsImNoZWNrQyIsImNoZWNrRCIsImhhc05leHQiLCJoYXNQcmV2Iiwic3VibWl0dGVkIiwiY29tcHV0ZWQiLCJtdWx0aVNlbGVjdCIsImFuc3dlciIsImxlbmd0aCIsImNhblN1Ym1pdCIsImZsYWciLCJmb3JFYWNoIiwiayIsImNoZWNrZWQiLCJtZXRob2RzIiwiY2hlY2siLCJvcHRpb24iLCJjb25zb2xlIiwibG9nIiwibmV4dCIsIiRhcHBseSIsInByZXYiLCJzdWJtaXQiLCJldmVudHMiLCJ3eCIsInNob3dMb2FkaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsImNsb3VkIiwiY2FsbEZ1bmN0aW9uIiwibmFtZSIsInJlc3VsdCIsImhpZGVMb2FkaW5nIiwic3VjY2VzcyIsInN1Ym1pdFJlc3VsdCIsIiRyZWRpcmVjdCIsInNldFN0b3JhZ2VTeW5jIiwidGhlbiIsInJlcyIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJtaW51dGUiLCJNYXRoIiwiZmxvb3IiLCJzZWNvbmQiLCJjbGVhckludGVydmFsIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ25CQyxNLEdBQVM7QUFDUEMsb0NBQXdCO0FBRGpCLFMsUUFHVEMsVSxHQUFhLEUsUUFHYkMsSSxHQUFPO0FBQ0hDLGtCQUFLLEVBREY7QUFFSEMsbUJBQU0sS0FGSDtBQUdIQyxxQkFBUSxDQUhMO0FBSUhDLHdCQUFZLEdBSlQ7QUFLSEMsNEJBQWUsT0FMWjtBQU1IQyxvQkFBTyxLQU5KO0FBT0hDLG9CQUFPLEtBUEo7QUFRSEMsb0JBQU8s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RVgsTUFBRixHQUFXLEtBQVg7QUFDQVcsc0JBQUVDLE9BQUYsR0FBWSxLQUFaO0FBQ0gsaUJBTkQ7QUFPQSx1QkFBS25CLEtBQUwsR0FBYSxJQUFiO0FBQ0EsdUJBQUswQixNQUFMO0FBQ0EsdUJBQUttQixLQUFMLEdBQWFDLFlBQVksWUFBTTtBQUMzQiwyQkFBSzVDLFVBQUwsR0FBa0IsT0FBS0EsVUFBTCxHQUFrQixDQUFwQztBQUNBLHdCQUFJNkMsU0FBU0MsS0FBS0MsS0FBTCxDQUFXLE9BQUsvQyxVQUFMLEdBQWtCLEVBQTdCLENBQWI7QUFDQSx3QkFBSWdELFNBQVNGLEtBQUtDLEtBQUwsQ0FBVyxPQUFLL0MsVUFBTCxHQUFrQixFQUE3QixDQUFiO0FBQ0EsMkJBQUtDLGNBQUwsU0FBeUI0QyxTQUFTLEVBQVQsR0FBYyxHQUFkLEdBQW9CLEVBQTdDLElBQWtEQSxNQUFsRCxVQUE0REcsU0FBUyxFQUFULEdBQVksR0FBWixHQUFnQixFQUE1RSxJQUFpRkEsTUFBakY7QUFDQSx3QkFBSSxPQUFLaEQsVUFBTCxJQUFtQixDQUF2QixFQUEwQjtBQUN0QiwrQkFBS3dCLE1BQUw7QUFDQSwrQkFBS0UsTUFBTDtBQUNBTCxnQ0FBUUMsR0FBUixDQUFZLE1BQVosRUFIc0IsQ0FHRjtBQUNwQiwrQkFBS3JCLGNBQUwsR0FBc0IsTUFBdEI7QUFDQWdELHNDQUFjLE9BQUtOLEtBQW5CO0FBQ0g7QUFDRCwyQkFBS25CLE1BQUw7QUFDSCxpQkFiWSxFQWFWLElBYlUsQ0FBYjtBQWNILGFBOUJEO0FBZ0NIOzs7bUNBQ1M7QUFDTnlCLDBCQUFjLEtBQUtOLEtBQW5CO0FBQ0g7Ozs7RUExS2dDTyxlQUFLQyxJOztrQkFBbkIzRCxLIiwiZmlsZSI6InBhcGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkuJzljZflpKflrablhZrlj7Llm73mg4Xnn6Xor4bnq57otZsnXG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgICAgcXVpejpbXSxcbiAgICAgICAgcmVhZHk6ZmFsc2UsXG4gICAgICAgIGN1cnJlbnQ6MCxcbiAgICAgICAgcmVtYWluVGltZTogNjAwLFxuICAgICAgICByZW1haW5UaW1lVGV4dDonMTA6MDAnLFxuICAgICAgICBjaGVja0E6ZmFsc2UsXG4gICAgICAgIGNoZWNrQjpmYWxzZSxcbiAgICAgICAgY2hlY2tDOmZhbHNlLFxuICAgICAgICBjaGVja0Q6ZmFsc2UsXG4gICAgICAgIGhhc05leHQ6IHRydWUsXG4gICAgICAgIGhhc1ByZXY6IGZhbHNlLFxuICAgICAgICBzdWJtaXR0ZWQ6IGZhbHNlXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICAgIG11bHRpU2VsZWN0KCl7XG4gICAgICAgICAgICBpZiAoIHRoaXMucXVpeiAmJiB0aGlzLnF1aXpbdGhpcy5jdXJyZW50XSAmJiB0aGlzLnF1aXpbdGhpcy5jdXJyZW50XS5hbnN3ZXIubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAn44CQ5aSa6YCJ44CRJ1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ+OAkOWNlemAieOAkSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY2FuU3VibWl0KCl7XG4gICAgICAgICAgICBsZXQgZmxhZyA9IHRydWVcbiAgICAgICAgICAgIHRoaXMucXVpei5mb3JFYWNoKGsgPT4ge1xuICAgICAgICAgICAgICAgIGZsYWcgPSBmbGFnICYmIGsuY2hlY2tlZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybiBmbGFnICYmICF0aGlzLnN1Ym1pdHRlZFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgICAgY2hlY2sob3B0aW9uKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG9wdGlvbilcbiAgICAgICAgICAgIGlmICh0aGlzLnF1aXpbdGhpcy5jdXJyZW50XS5hbnN3ZXIubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnF1aXpbdGhpcy5jdXJyZW50XVtgY2hlY2ske29wdGlvbn1gXSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnF1aXpbdGhpcy5jdXJyZW50XVtgY2hlY2ske29wdGlvbn1gXSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXNbYGNoZWNrJHtvcHRpb259YF0gPSBmYWxzZVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucXVpelt0aGlzLmN1cnJlbnRdW2BjaGVjayR7b3B0aW9ufWBdID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB0aGlzW2BjaGVjayR7b3B0aW9ufWBdID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgO1snQScsICdCJywgJ0MnLCAnRCddLmZvckVhY2goIGsgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnF1aXpbdGhpcy5jdXJyZW50XVtgY2hlY2ske2t9YF0gPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzW2BjaGVjayR7a31gXSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5xdWl6W3RoaXMuY3VycmVudF1bYGNoZWNrJHtvcHRpb259YF0gPSB0cnVlXG4gICAgICAgICAgICAgICAgdGhpc1tgY2hlY2ske29wdGlvbn1gXSA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucXVpelt0aGlzLmN1cnJlbnRdLmNoZWNrZWQgPSB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIG5leHQoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50IDwgdGhpcy5xdWl6Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMuY3VycmVudCArIDFcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrQSA9IHRoaXMucXVpelt0aGlzLmN1cnJlbnRdLmNoZWNrQSBcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrQiA9IHRoaXMucXVpelt0aGlzLmN1cnJlbnRdLmNoZWNrQlxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tDID0gdGhpcy5xdWl6W3RoaXMuY3VycmVudF0uY2hlY2tDIFxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tEID0gdGhpcy5xdWl6W3RoaXMuY3VycmVudF0uY2hlY2tEXG4gICAgICAgICAgICAgICAgdGhpcy5oYXNQcmV2ID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRoaXMuaGFzTmV4dCA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnQgPT0gdGhpcy5xdWl6Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhc05leHQgPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICB9LFxuICAgICAgICBwcmV2KCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLmN1cnJlbnQgLSAxXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0EgPSB0aGlzLnF1aXpbdGhpcy5jdXJyZW50XS5jaGVja0EgXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0IgPSB0aGlzLnF1aXpbdGhpcy5jdXJyZW50XS5jaGVja0JcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrQyA9IHRoaXMucXVpelt0aGlzLmN1cnJlbnRdLmNoZWNrQyBcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrRCA9IHRoaXMucXVpelt0aGlzLmN1cnJlbnRdLmNoZWNrRFxuICAgICAgICAgICAgICAgIHRoaXMuaGFzUHJldiA9IHRydWVcbiAgICAgICAgICAgICAgICB0aGlzLmhhc05leHQgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50ID09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhc1ByZXYgPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICB9LFxuICAgICAgICBhc3luYyBzdWJtaXQoKXtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc3VibWl0KClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIHN1Ym1pdCgpIHtcbiAgICAgICAgaWYoIXRoaXMuc3VibWl0dGVkKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5o+Q5LqkJylcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IHRydWVcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgICAgICAgd3guc2hvd0xvYWRpbmcoKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMucXVpeikpXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6J3N1Ym1pdCcsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6e1xuICAgICAgICAgICAgICAgICAgICAgICAgcXVpejp0aGlzLnF1aXpcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKVxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQucmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aPkOS6pOaIkOWKn++8gScpXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdWJtaXRSZXN1bHQgPSBhd2FpdCB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTonZ2V0U2NvcmUnXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHN1Ym1pdFJlc3VsdClcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzdWJtaXRSZXN1bHQucmVzdWx0LnN1Ym1pdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVkaXJlY3QoJy4vcnVsZScpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygncmVzdWx0Jywgc3VibWl0UmVzdWx0LnJlc3VsdClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZGlyZWN0KCcuL3Njb3JlJylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmj5DkuqTml6DmlYgnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+S4jeiDvemHjeWkjeaPkOS6pCcpXG4gICAgICAgICAgICB9XG4gICAgfVxuICAgIGV2ZW50cyA9IHtcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHd4LnNob3dMb2FkaW5nKClcbiAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcbiAgICAgICAgICAgIG5hbWU6J2dldFF1aXonXG4gICAgICAgIH0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICAgIHRoaXMucXVpeiA9IHJlcy5yZXN1bHRcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICAgIHRoaXMucXVpei5mb3JFYWNoKGs9PntcbiAgICAgICAgICAgICAgICBrLmNoZWNrQSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgay5jaGVja0IgPSBmYWxzZVxuICAgICAgICAgICAgICAgIGsuY2hlY2tDID0gZmFsc2VcbiAgICAgICAgICAgICAgICBrLmNoZWNrRCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgay5jaGVja2VkID0gZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLnJlYWR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1haW5UaW1lID0gdGhpcy5yZW1haW5UaW1lIC0gMVxuICAgICAgICAgICAgICAgIGxldCBtaW51dGUgPSBNYXRoLmZsb29yKHRoaXMucmVtYWluVGltZSAvIDYwKVxuICAgICAgICAgICAgICAgIGxldCBzZWNvbmQgPSBNYXRoLmZsb29yKHRoaXMucmVtYWluVGltZSAlIDYwKVxuICAgICAgICAgICAgICAgIHRoaXMucmVtYWluVGltZVRleHQgPSBgJHttaW51dGUgPCAxMCA/ICcwJyA6ICcnfSR7bWludXRlfToke3NlY29uZCA8IDEwPycwJzonJ30ke3NlY29uZH1gXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVtYWluVGltZSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXQoKVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5pe26Ze05Yiw5LqGJykgLy9UT0RPXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtYWluVGltZVRleHQgPSAn5pe26Ze05Yiw77yBJ1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9KVxuXG4gICAgfVxuICAgIG9uVW5sb2FkKCl7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcilcbiAgICB9XG4gIH1cbiJdfQ==