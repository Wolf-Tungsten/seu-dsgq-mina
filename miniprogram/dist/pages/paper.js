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
            navigationBarTitleText: '答题中'
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
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(timeout) {
                var uncheckedList, result, submitResult;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                if (timeout) {
                                    _context2.next = 6;
                                    break;
                                }

                                // 如果非超时提交
                                uncheckedList = [];

                                this.quiz.forEach(function (v, i) {
                                    if (!v.checked) {
                                        uncheckedList.push(i + 1);
                                    }
                                });

                                if (!(uncheckedList.length > 0)) {
                                    _context2.next = 6;
                                    break;
                                }

                                wx.showModal({
                                    title: '提示',
                                    content: '\u9898\u76EE\u3010' + uncheckedList.join('】、【') + '\u3011\u8FD8\u6CA1\u6709\u4F5C\u7B54\uFF0C\u8BF7\u5B8C\u6574\u4F5C\u7B54\u540E\u518D\u63D0\u4EA4\u54E6\uFF01',
                                    showCancel: false,
                                    success: function success(res) {
                                        if (res.confirm) {
                                            console.log('用户点击确定');
                                        } else if (res.cancel) {
                                            console.log('用户点击取消');
                                        }
                                    }
                                });
                                return _context2.abrupt('return');

                            case 6:
                                if (this.submitted) {
                                    _context2.next = 30;
                                    break;
                                }

                                console.log('提交');
                                this.submitted = true;
                                this.$apply();
                                wx.showLoading({ title: "正在提交试卷" });
                                console.log(JSON.stringify(this.quiz));
                                _context2.next = 14;
                                return wx.cloud.callFunction({
                                    name: 'submit',
                                    data: {
                                        quiz: this.quiz
                                    }
                                });

                            case 14:
                                result = _context2.sent;

                                wx.hideLoading();

                                if (!result.result.success) {
                                    _context2.next = 27;
                                    break;
                                }

                                console.log('提交成功！');
                                wx.showLoading({ title: "获取得分情况" });
                                _context2.next = 21;
                                return wx.cloud.callFunction({
                                    name: 'getScore'
                                });

                            case 21:
                                submitResult = _context2.sent;

                                wx.hideLoading();
                                console.log(submitResult);
                                if (!submitResult.result.submit) {
                                    this.$redirect('./rule');
                                } else {
                                    wx.setStorageSync('result', submitResult.result);
                                    this.$redirect('./score');
                                }
                                _context2.next = 28;
                                break;

                            case 27:
                                console.log('提交无效');

                            case 28:
                                _context2.next = 31;
                                break;

                            case 30:
                                console.log('不能重复提交');

                            case 31:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function submit(_x) {
                return _ref3.apply(this, arguments);
            }

            return submit;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad() {
            var _this3 = this;

            wx.showLoading({ title: "获取试题" });
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
                        _this3.submit(true);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcGVyLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwicXVpeiIsInJlYWR5IiwiY3VycmVudCIsInJlbWFpblRpbWUiLCJyZW1haW5UaW1lVGV4dCIsImNoZWNrQSIsImNoZWNrQiIsImNoZWNrQyIsImNoZWNrRCIsImhhc05leHQiLCJoYXNQcmV2Iiwic3VibWl0dGVkIiwiY29tcHV0ZWQiLCJtdWx0aVNlbGVjdCIsImFuc3dlciIsImxlbmd0aCIsImNhblN1Ym1pdCIsImZsYWciLCJmb3JFYWNoIiwiayIsImNoZWNrZWQiLCJtZXRob2RzIiwiY2hlY2siLCJvcHRpb24iLCJjb25zb2xlIiwibG9nIiwibmV4dCIsIiRhcHBseSIsInByZXYiLCJzdWJtaXQiLCJldmVudHMiLCJ0aW1lb3V0IiwidW5jaGVja2VkTGlzdCIsInYiLCJpIiwicHVzaCIsInd4Iiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50Iiwiam9pbiIsInNob3dDYW5jZWwiLCJzdWNjZXNzIiwicmVzIiwiY29uZmlybSIsImNhbmNlbCIsInNob3dMb2FkaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsImNsb3VkIiwiY2FsbEZ1bmN0aW9uIiwibmFtZSIsInJlc3VsdCIsImhpZGVMb2FkaW5nIiwic3VibWl0UmVzdWx0IiwiJHJlZGlyZWN0Iiwic2V0U3RvcmFnZVN5bmMiLCJ0aGVuIiwidGltZXIiLCJzZXRJbnRlcnZhbCIsIm1pbnV0ZSIsIk1hdGgiLCJmbG9vciIsInNlY29uZCIsImNsZWFySW50ZXJ2YWwiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDbkJDLE0sR0FBUztBQUNQQyxvQ0FBd0I7QUFEakIsUyxRQUdUQyxVLEdBQWEsRSxRQUdiQyxJLEdBQU87QUFDSEMsa0JBQUssRUFERjtBQUVI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VUFBTCxHQUFrQixPQUFLQSxVQUFMLEdBQWtCLENBQXBDO0FBQ0Esd0JBQUl5RCxTQUFTQyxLQUFLQyxLQUFMLENBQVcsT0FBSzNELFVBQUwsR0FBa0IsRUFBN0IsQ0FBYjtBQUNBLHdCQUFJNEQsU0FBU0YsS0FBS0MsS0FBTCxDQUFXLE9BQUszRCxVQUFMLEdBQWtCLEVBQTdCLENBQWI7QUFDQSwyQkFBS0MsY0FBTCxTQUF5QndELFNBQVMsRUFBVCxHQUFjLEdBQWQsR0FBb0IsRUFBN0MsSUFBa0RBLE1BQWxELFVBQTRERyxTQUFTLEVBQVQsR0FBWSxHQUFaLEdBQWdCLEVBQTVFLElBQWlGQSxNQUFqRjtBQUNBLHdCQUFJLE9BQUs1RCxVQUFMLElBQW1CLENBQXZCLEVBQTBCO0FBQ3RCLCtCQUFLd0IsTUFBTDtBQUNBLCtCQUFLRSxNQUFMLENBQVksSUFBWjtBQUNBTCxnQ0FBUUMsR0FBUixDQUFZLE1BQVosRUFIc0IsQ0FHRjtBQUNwQiwrQkFBS3JCLGNBQUwsR0FBc0IsTUFBdEI7QUFDQTRELHNDQUFjLE9BQUtOLEtBQW5CO0FBQ0g7QUFDRCwyQkFBSy9CLE1BQUw7QUFDSCxpQkFiWSxFQWFWLElBYlUsQ0FBYjtBQWNILGFBOUJEO0FBZ0NIOzs7bUNBQ1M7QUFDTnFDLDBCQUFjLEtBQUtOLEtBQW5CO0FBQ0g7Ozs7RUFwTWdDTyxlQUFLQyxJOztrQkFBbkJ2RSxLIiwiZmlsZSI6InBhcGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnrZTpopjkuK0nXG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgICAgcXVpejpbXSxcbiAgICAgICAgcmVhZHk6ZmFsc2UsXG4gICAgICAgIGN1cnJlbnQ6MCxcbiAgICAgICAgcmVtYWluVGltZTogNjAwLFxuICAgICAgICByZW1haW5UaW1lVGV4dDonMTA6MDAnLFxuICAgICAgICBjaGVja0E6ZmFsc2UsXG4gICAgICAgIGNoZWNrQjpmYWxzZSxcbiAgICAgICAgY2hlY2tDOmZhbHNlLFxuICAgICAgICBjaGVja0Q6ZmFsc2UsXG4gICAgICAgIGhhc05leHQ6IHRydWUsXG4gICAgICAgIGhhc1ByZXY6IGZhbHNlLFxuICAgICAgICBzdWJtaXR0ZWQ6IGZhbHNlXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICAgIG11bHRpU2VsZWN0KCl7XG4gICAgICAgICAgICBpZiAoIHRoaXMucXVpeiAmJiB0aGlzLnF1aXpbdGhpcy5jdXJyZW50XSAmJiB0aGlzLnF1aXpbdGhpcy5jdXJyZW50XS5hbnN3ZXIubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAn44CQ5aSa6YCJ44CRJ1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ+OAkOWNlemAieOAkSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY2FuU3VibWl0KCl7XG4gICAgICAgICAgICBsZXQgZmxhZyA9IHRydWVcbiAgICAgICAgICAgIHRoaXMucXVpei5mb3JFYWNoKGsgPT4ge1xuICAgICAgICAgICAgICAgIGZsYWcgPSBmbGFnICYmIGsuY2hlY2tlZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybiBmbGFnICYmICF0aGlzLnN1Ym1pdHRlZFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgICAgY2hlY2sob3B0aW9uKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG9wdGlvbilcbiAgICAgICAgICAgIGlmICh0aGlzLnF1aXpbdGhpcy5jdXJyZW50XS5hbnN3ZXIubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnF1aXpbdGhpcy5jdXJyZW50XVtgY2hlY2ske29wdGlvbn1gXSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnF1aXpbdGhpcy5jdXJyZW50XVtgY2hlY2ske29wdGlvbn1gXSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXNbYGNoZWNrJHtvcHRpb259YF0gPSBmYWxzZVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucXVpelt0aGlzLmN1cnJlbnRdW2BjaGVjayR7b3B0aW9ufWBdID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB0aGlzW2BjaGVjayR7b3B0aW9ufWBdID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgO1snQScsICdCJywgJ0MnLCAnRCddLmZvckVhY2goIGsgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnF1aXpbdGhpcy5jdXJyZW50XVtgY2hlY2ske2t9YF0gPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzW2BjaGVjayR7a31gXSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5xdWl6W3RoaXMuY3VycmVudF1bYGNoZWNrJHtvcHRpb259YF0gPSB0cnVlXG4gICAgICAgICAgICAgICAgdGhpc1tgY2hlY2ske29wdGlvbn1gXSA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucXVpelt0aGlzLmN1cnJlbnRdLmNoZWNrZWQgPSB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIG5leHQoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50IDwgdGhpcy5xdWl6Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMuY3VycmVudCArIDFcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrQSA9IHRoaXMucXVpelt0aGlzLmN1cnJlbnRdLmNoZWNrQSBcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrQiA9IHRoaXMucXVpelt0aGlzLmN1cnJlbnRdLmNoZWNrQlxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tDID0gdGhpcy5xdWl6W3RoaXMuY3VycmVudF0uY2hlY2tDIFxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tEID0gdGhpcy5xdWl6W3RoaXMuY3VycmVudF0uY2hlY2tEXG4gICAgICAgICAgICAgICAgdGhpcy5oYXNQcmV2ID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRoaXMuaGFzTmV4dCA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnQgPT0gdGhpcy5xdWl6Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhc05leHQgPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICB9LFxuICAgICAgICBwcmV2KCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLmN1cnJlbnQgLSAxXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0EgPSB0aGlzLnF1aXpbdGhpcy5jdXJyZW50XS5jaGVja0EgXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0IgPSB0aGlzLnF1aXpbdGhpcy5jdXJyZW50XS5jaGVja0JcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrQyA9IHRoaXMucXVpelt0aGlzLmN1cnJlbnRdLmNoZWNrQyBcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrRCA9IHRoaXMucXVpelt0aGlzLmN1cnJlbnRdLmNoZWNrRFxuICAgICAgICAgICAgICAgIHRoaXMuaGFzUHJldiA9IHRydWVcbiAgICAgICAgICAgICAgICB0aGlzLmhhc05leHQgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50ID09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhc1ByZXYgPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICB9LFxuICAgICAgICBhc3luYyBzdWJtaXQoKXtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc3VibWl0KClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIHN1Ym1pdCh0aW1lb3V0KSB7XG4gICAgICAgIGlmKCF0aW1lb3V0KXtcbiAgICAgICAgICAgIC8vIOWmguaenOmdnui2heaXtuaPkOS6pFxuICAgICAgICAgICAgbGV0IHVuY2hlY2tlZExpc3QgPSBbXVxuICAgICAgICAgICAgdGhpcy5xdWl6LmZvckVhY2goKHYsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBpZighdi5jaGVja2VkKXtcbiAgICAgICAgICAgICAgICAgICAgdW5jaGVja2VkTGlzdC5wdXNoKGkrMSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaWYodW5jaGVja2VkTGlzdC5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGDpopjnm67jgJAke3VuY2hlY2tlZExpc3Quam9pbign44CR44CB44CQJyl944CR6L+Y5rKh5pyJ5L2c562U77yM6K+35a6M5pW05L2c562U5ZCO5YaN5o+Q5Lqk5ZOm77yBYCxcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vnoa7lrponKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXMuY2FuY2VsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn55So5oi354K55Ye75Y+W5raIJylcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYoIXRoaXMuc3VibWl0dGVkKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5o+Q5LqkJylcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IHRydWVcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgICAgICAgd3guc2hvd0xvYWRpbmcoe3RpdGxlOlwi5q2j5Zyo5o+Q5Lqk6K+V5Y23XCJ9KVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMucXVpeikpXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6J3N1Ym1pdCcsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6e1xuICAgICAgICAgICAgICAgICAgICAgICAgcXVpejp0aGlzLnF1aXpcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKVxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQucmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aPkOS6pOaIkOWKn++8gScpXG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKHt0aXRsZTpcIuiOt+WPluW+l+WIhuaDheWGtVwifSlcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN1Ym1pdFJlc3VsdCA9IGF3YWl0IHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOidnZXRTY29yZSdcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzdWJtaXRSZXN1bHQpXG4gICAgICAgICAgICAgICAgICAgIGlmICghc3VibWl0UmVzdWx0LnJlc3VsdC5zdWJtaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZGlyZWN0KCcuL3J1bGUnKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ3Jlc3VsdCcsIHN1Ym1pdFJlc3VsdC5yZXN1bHQpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWRpcmVjdCgnLi9zY29yZScpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5o+Q5Lqk5peg5pWIJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfkuI3og73ph43lpI3mj5DkuqQnKVxuICAgICAgICAgICAgfVxuICAgIH1cbiAgICBldmVudHMgPSB7XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB3eC5zaG93TG9hZGluZyh7dGl0bGU6XCLojrflj5bor5XpophcIn0pXG4gICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XG4gICAgICAgICAgICBuYW1lOidnZXRRdWl6J1xuICAgICAgICB9KS50aGVuKChyZXMpPT57XG4gICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICB0aGlzLnF1aXogPSByZXMucmVzdWx0XG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgICB0aGlzLnF1aXouZm9yRWFjaChrPT57XG4gICAgICAgICAgICAgICAgay5jaGVja0EgPSBmYWxzZVxuICAgICAgICAgICAgICAgIGsuY2hlY2tCID0gZmFsc2VcbiAgICAgICAgICAgICAgICBrLmNoZWNrQyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgay5jaGVja0QgPSBmYWxzZVxuICAgICAgICAgICAgICAgIGsuY2hlY2tlZCA9IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy5yZWFkeSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtYWluVGltZSA9IHRoaXMucmVtYWluVGltZSAtIDFcbiAgICAgICAgICAgICAgICBsZXQgbWludXRlID0gTWF0aC5mbG9vcih0aGlzLnJlbWFpblRpbWUgLyA2MClcbiAgICAgICAgICAgICAgICBsZXQgc2Vjb25kID0gTWF0aC5mbG9vcih0aGlzLnJlbWFpblRpbWUgJSA2MClcbiAgICAgICAgICAgICAgICB0aGlzLnJlbWFpblRpbWVUZXh0ID0gYCR7bWludXRlIDwgMTAgPyAnMCcgOiAnJ30ke21pbnV0ZX06JHtzZWNvbmQgPCAxMD8nMCc6Jyd9JHtzZWNvbmR9YFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlbWFpblRpbWUgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0KHRydWUpXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfml7bpl7TliLDkuoYnKSAvL1RPRE9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1haW5UaW1lVGV4dCA9ICfml7bpl7TliLDvvIEnXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH0pXG5cbiAgICB9XG4gICAgb25VbmxvYWQoKXtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKVxuICAgIH1cbiAgfVxuIl19