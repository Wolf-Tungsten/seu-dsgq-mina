'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
            hasPrev: false
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
            }
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcGVyLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwicXVpeiIsInJlYWR5IiwiY3VycmVudCIsInJlbWFpblRpbWUiLCJyZW1haW5UaW1lVGV4dCIsImNoZWNrQSIsImNoZWNrQiIsImNoZWNrQyIsImNoZWNrRCIsImhhc05leHQiLCJoYXNQcmV2IiwiY29tcHV0ZWQiLCJtdWx0aVNlbGVjdCIsImFuc3dlciIsImxlbmd0aCIsImNhblN1Ym1pdCIsImZsYWciLCJmb3JFYWNoIiwiayIsImNoZWNrZWQiLCJtZXRob2RzIiwiY2hlY2siLCJvcHRpb24iLCJjb25zb2xlIiwibG9nIiwibmV4dCIsIiRhcHBseSIsInByZXYiLCJldmVudHMiLCJ3eCIsInNob3dMb2FkaW5nIiwiY2xvdWQiLCJjYWxsRnVuY3Rpb24iLCJuYW1lIiwidGhlbiIsInJlcyIsImhpZGVMb2FkaW5nIiwicmVzdWx0IiwidGltZXIiLCJzZXRJbnRlcnZhbCIsIm1pbnV0ZSIsIk1hdGgiLCJmbG9vciIsInNlY29uZCIsImNsZWFySW50ZXJ2YWwiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ25CQyxNLEdBQVM7QUFDUEMsb0NBQXdCO0FBRGpCLFMsUUFHVEMsVSxHQUFhLEUsUUFHYkMsSSxHQUFPO0FBQ0hDLGtCQUFLLEVBREY7QUFFSEMsbUJBQU0sS0FGSDtBQUdIQyxxQkFBUSxDQUhMO0FBSUhDLHdCQUFZLEdBSlQ7QUFLSEMsNEJBQWUsT0FMWjtBQU1IQyxvQkFBTyxLQU5KO0FBT0hDLG9CQUFPLEtBUEo7QUFRSEMsb0JBQU8sS0FSSjtBQVNIQyxvQkFBTyxLQVRKO0FBVUhDLHFCQUFTLElBVk47QUFXSEMscUJBQVM7QUFYTixTLFFBY1BDLFEsR0FBVztBQUNQQyx1QkFETyx5QkFDTTtBQUNULG9C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S0FBTCxHQUFhQyxZQUFZLFlBQU07QUFDM0IsMkJBQUtwQyxVQUFMLEdBQWtCLE9BQUtBLFVBQUwsR0FBa0IsQ0FBcEM7QUFDQSx3QkFBSXFDLFNBQVNDLEtBQUtDLEtBQUwsQ0FBVyxPQUFLdkMsVUFBTCxHQUFrQixFQUE3QixDQUFiO0FBQ0Esd0JBQUl3QyxTQUFTRixLQUFLQyxLQUFMLENBQVcsT0FBS3ZDLFVBQUwsR0FBa0IsRUFBN0IsQ0FBYjtBQUNBLDJCQUFLQyxjQUFMLFNBQXlCb0MsU0FBUyxFQUFULEdBQWMsR0FBZCxHQUFvQixFQUE3QyxJQUFrREEsTUFBbEQsVUFBNERHLFNBQVMsRUFBVCxHQUFZLEdBQVosR0FBZ0IsRUFBNUUsSUFBaUZBLE1BQWpGO0FBQ0Esd0JBQUksT0FBS3hDLFVBQUwsSUFBbUIsQ0FBdkIsRUFBMEI7QUFDdEJvQixnQ0FBUUMsR0FBUixDQUFZLE1BQVosRUFEc0IsQ0FDRjtBQUNwQiwrQkFBS3BCLGNBQUwsR0FBc0IsTUFBdEI7QUFDQXdDLHNDQUFjLE9BQUtOLEtBQW5CO0FBQ0g7QUFDRCwyQkFBS1osTUFBTDtBQUNILGlCQVhZLEVBV1YsSUFYVSxDQUFiO0FBWUgsYUE1QkQ7QUE4Qkg7OzttQ0FDUztBQUNOa0IsMEJBQWMsS0FBS04sS0FBbkI7QUFDSDs7OztFQW5JZ0NPLGVBQUtDLEk7O2tCQUFuQm5ELEsiLCJmaWxlIjoicGFwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S4nOWNl+Wkp+WtpuWFmuWPsuWbveaDheefpeivhuernui1mydcbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHtcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgICBxdWl6OltdLFxuICAgICAgICByZWFkeTpmYWxzZSxcbiAgICAgICAgY3VycmVudDowLFxuICAgICAgICByZW1haW5UaW1lOiAxODAsXG4gICAgICAgIHJlbWFpblRpbWVUZXh0OicwMzowMCcsXG4gICAgICAgIGNoZWNrQTpmYWxzZSxcbiAgICAgICAgY2hlY2tCOmZhbHNlLFxuICAgICAgICBjaGVja0M6ZmFsc2UsXG4gICAgICAgIGNoZWNrRDpmYWxzZSxcbiAgICAgICAgaGFzTmV4dDogdHJ1ZSxcbiAgICAgICAgaGFzUHJldjogZmFsc2VcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgICAgbXVsdGlTZWxlY3QoKXtcbiAgICAgICAgICAgIGlmICggdGhpcy5xdWl6ICYmIHRoaXMucXVpelt0aGlzLmN1cnJlbnRdICYmIHRoaXMucXVpelt0aGlzLmN1cnJlbnRdLmFuc3dlci5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICfvvIjlpJrpgInvvIknXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAn77yI5Y2V6YCJ77yJJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjYW5TdWJtaXQoKXtcbiAgICAgICAgICAgIGxldCBmbGFnID0gdHJ1ZVxuICAgICAgICAgICAgdGhpcy5xdWl6LmZvckVhY2goayA9PiB7XG4gICAgICAgICAgICAgICAgZmxhZyA9IGZsYWcgJiYgay5jaGVja2VkXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIGZsYWdcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICAgIGNoZWNrKG9wdGlvbil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhvcHRpb24pXG4gICAgICAgICAgICBpZiAodGhpcy5xdWl6W3RoaXMuY3VycmVudF0uYW5zd2VyLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5xdWl6W3RoaXMuY3VycmVudF1bYGNoZWNrJHtvcHRpb259YF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWl6W3RoaXMuY3VycmVudF1bYGNoZWNrJHtvcHRpb259YF0gPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzW2BjaGVjayR7b3B0aW9ufWBdID0gZmFsc2VcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnF1aXpbdGhpcy5jdXJyZW50XVtgY2hlY2ske29wdGlvbn1gXSA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tgY2hlY2ske29wdGlvbn1gXSA9IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIDtbJ0EnLCAnQicsICdDJywgJ0QnXS5mb3JFYWNoKCBrID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWl6W3RoaXMuY3VycmVudF1bYGNoZWNrJHtrfWBdID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tgY2hlY2ske2t9YF0gPSBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMucXVpelt0aGlzLmN1cnJlbnRdW2BjaGVjayR7b3B0aW9ufWBdID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRoaXNbYGNoZWNrJHtvcHRpb259YF0gPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnF1aXpbdGhpcy5jdXJyZW50XS5jaGVja2VkID0gdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBuZXh0KCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudCA8IHRoaXMucXVpei5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLmN1cnJlbnQgKyAxXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0EgPSB0aGlzLnF1aXpbdGhpcy5jdXJyZW50XS5jaGVja0EgXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0IgPSB0aGlzLnF1aXpbdGhpcy5jdXJyZW50XS5jaGVja0JcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrQyA9IHRoaXMucXVpelt0aGlzLmN1cnJlbnRdLmNoZWNrQyBcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrRCA9IHRoaXMucXVpelt0aGlzLmN1cnJlbnRdLmNoZWNrRFxuICAgICAgICAgICAgICAgIHRoaXMuaGFzUHJldiA9IHRydWVcbiAgICAgICAgICAgICAgICB0aGlzLmhhc05leHQgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50ID09IHRoaXMucXVpei5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYXNOZXh0ID0gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgfSxcbiAgICAgICAgcHJldigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5jdXJyZW50IC0gMVxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tBID0gdGhpcy5xdWl6W3RoaXMuY3VycmVudF0uY2hlY2tBIFxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tCID0gdGhpcy5xdWl6W3RoaXMuY3VycmVudF0uY2hlY2tCXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0MgPSB0aGlzLnF1aXpbdGhpcy5jdXJyZW50XS5jaGVja0MgXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0QgPSB0aGlzLnF1aXpbdGhpcy5jdXJyZW50XS5jaGVja0RcbiAgICAgICAgICAgICAgICB0aGlzLmhhc1ByZXYgPSB0cnVlXG4gICAgICAgICAgICAgICAgdGhpcy5oYXNOZXh0ID0gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYXNQcmV2ID0gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHd4LnNob3dMb2FkaW5nKClcbiAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcbiAgICAgICAgICAgIG5hbWU6J2dldFF1aXonXG4gICAgICAgIH0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICAgIHRoaXMucXVpeiA9IHJlcy5yZXN1bHRcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICAgIHRoaXMucXVpei5mb3JFYWNoKGs9PntcbiAgICAgICAgICAgICAgICBrLmNoZWNrQSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgay5jaGVja0IgPSBmYWxzZVxuICAgICAgICAgICAgICAgIGsuY2hlY2tDID0gZmFsc2VcbiAgICAgICAgICAgICAgICBrLmNoZWNrRCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgay5jaGVja2VkID0gZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLnJlYWR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1haW5UaW1lID0gdGhpcy5yZW1haW5UaW1lIC0gMVxuICAgICAgICAgICAgICAgIGxldCBtaW51dGUgPSBNYXRoLmZsb29yKHRoaXMucmVtYWluVGltZSAvIDYwKVxuICAgICAgICAgICAgICAgIGxldCBzZWNvbmQgPSBNYXRoLmZsb29yKHRoaXMucmVtYWluVGltZSAlIDYwKVxuICAgICAgICAgICAgICAgIHRoaXMucmVtYWluVGltZVRleHQgPSBgJHttaW51dGUgPCAxMCA/ICcwJyA6ICcnfSR7bWludXRlfToke3NlY29uZCA8IDEwPycwJzonJ30ke3NlY29uZH1gXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVtYWluVGltZSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfml7bpl7TliLDkuoYnKSAvL1RPRE9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1haW5UaW1lVGV4dCA9ICfml7bpl7TliLDvvIEnXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH0pXG5cbiAgICB9XG4gICAgb25VbmxvYWQoKXtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKVxuICAgIH1cbiAgfVxuIl19