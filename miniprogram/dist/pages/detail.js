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
            navigationBarTitleText: '具体答题结果'
        }, _this.components = {}, _this.data = {
            quiz: []
        }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function onLoad() {
            var record = wx.getStorageSync('result');
            this.quiz = record.record.quiz;
            this.quiz.forEach(function (k) {
                ;['A', 'B', 'C', 'D'].forEach(function (option) {
                    if (k.answer.indexOf(option) != -1) {
                        k['answer' + option] = true;
                    }
                });
            });
            console.log(record);
            this.$apply();
        }
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZGF0YSIsInF1aXoiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJldmVudHMiLCJyZWNvcmQiLCJ3eCIsImdldFN0b3JhZ2VTeW5jIiwiZm9yRWFjaCIsIm9wdGlvbiIsImsiLCJhbnN3ZXIiLCJpbmRleE9mIiwiY29uc29sZSIsImxvZyIsIiRhcHBseSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDbkJDLE0sR0FBUztBQUNQQyxvQ0FBd0I7QUFEakIsUyxRQUdUQyxVLEdBQWEsRSxRQUdiQyxJLEdBQU87QUFDSEMsa0JBQUs7QUFERixTLFFBSVBDLFEsR0FBVyxFLFFBR1hDLE8sR0FBVSxFLFFBR1ZDLE0sR0FBUyxFOzs7OztpQ0FHQTtBQUNMLGdCQUFJQyxTQUFTQyxHQUFHQyxjQUFILENBQWtCLFFBQWxCLENBQWI7QUFDQSxpQkFBS04sSUFBTCxHQUFZSSxPQUFPQSxNQUFQLENBQWNKLElBQTFCO0FBQ0EsaUJBQUtBLElBQUwsQ0FBVU8sT0FBVixDQUFrQixhQUFLO0FBQ25CLGlCQUFDLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLEVBQXFCQSxPQUFyQixDQUE2QixVQUFDQyxNQUFELEVBQVU7QUFDcEMsd0JBQUlDLEVBQUVDLE1BQUYsQ0FBU0MsT0FBVCxDQUFpQkgsTUFBakIsS0FBNEIsQ0FBQyxDQUFqQyxFQUFvQztBQUNoQ0MscUNBQVdELE1BQVgsSUFBdUIsSUFBdkI7QUFDSDtBQUNKLGlCQUpBO0FBS0osYUFORDtBQU9BSSxvQkFBUUMsR0FBUixDQUFZVCxNQUFaO0FBQ0EsaUJBQUtVLE1BQUw7QUFDSDs7OztFQWhDZ0NDLGVBQUtDLEk7O2tCQUFuQnJCLEsiLCJmaWxlIjoiZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflhbfkvZPnrZTpopjnu5PmnpwnXG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgICAgcXVpejpbXVxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgbGV0IHJlY29yZCA9IHd4LmdldFN0b3JhZ2VTeW5jKCdyZXN1bHQnKVxuICAgICAgICB0aGlzLnF1aXogPSByZWNvcmQucmVjb3JkLnF1aXpcbiAgICAgICAgdGhpcy5xdWl6LmZvckVhY2goayA9PiB7XG4gICAgICAgICAgICA7WydBJywgJ0InLCAnQycsICdEJ10uZm9yRWFjaCgob3B0aW9uKT0+e1xuICAgICAgICAgICAgICAgIGlmIChrLmFuc3dlci5pbmRleE9mKG9wdGlvbikgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAga1tgYW5zd2VyJHtvcHRpb259YF0gPSB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2cocmVjb3JkKVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuICB9XG4iXX0=