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
            navigationBarTitleText: '答题结果'
        }, _this.components = {}, _this.data = {
            score: '--',
            displayScore: false
        }, _this.computed = {}, _this.methods = {
            start: function start() {
                this.$navigate('./detail');
            },
            imageLoad: function imageLoad() {
                this.displayScore = true;
            }
        }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function onLoad() {
            var record = wx.getStorageSync('result');
            var score = record.record.score;
            if (score >= 90) {
                this.score = '优秀！哇，成绩斐然，向您致敬！';
            } else if (80 <= score && score < 90) {
                this.score = '良好，相当不容易啊，您的竞赛成绩超过了大部分党员同志！';
            } else if (70 <= score && score < 80) {
                this.score = '中等，还行吧，这个成绩也是不容易呢，继续加油！';
            } else if (60 <= score && score < 70) {
                this.score = '及格，作为党员，现在这个成绩不值得骄傲哦';
            } else {
                this.score = '需要引起足够重视啦！现在您相信党性修养不是一蹴而就的了吧，谦虚低调，努力学习吧！';
            }
            this.$apply();
        }
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/score'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjb3JlLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwic2NvcmUiLCJkaXNwbGF5U2NvcmUiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJzdGFydCIsIiRuYXZpZ2F0ZSIsImltYWdlTG9hZCIsImV2ZW50cyIsInJlY29yZCIsInd4IiwiZ2V0U3RvcmFnZVN5bmMiLCIkYXBwbHkiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ25CQyxNLEdBQVM7QUFDUEMsb0NBQXdCO0FBRGpCLFMsUUFHVEMsVSxHQUFhLEUsUUFHYkMsSSxHQUFPO0FBQ0hDLG1CQUFNLElBREg7QUFFSEMsMEJBQWE7QUFGVixTLFFBS1BDLFEsR0FBVyxFLFFBR1hDLE8sR0FBVTtBQUNOQyxpQkFETSxtQkFDRTtBQUNKLHFCQUFLQyxTQUFMLENBQWUsVUFBZjtBQUNILGFBSEs7QUFJTkMscUJBSk0sdUJBSU07QUFDUixxQkFBS0wsWUFBTCxHQUFvQixJQUFwQjtBQUNIO0FBTkssUyxRQVNWTSxNLEdBQVMsRTs7Ozs7aUNBR0E7QUFDTCxnQkFBSUMsU0FBU0MsR0FBR0MsY0FBSCxDQUFrQixRQUFsQixDQUFiO0FBQ0EsZ0JBQUlWLFFBQVFRLE9BQU9BLE1BQVAsQ0FBY1IsS0FBMUI7QUFDQSxnQkFBSUEsU0FBUyxFQUFiLEVBQWlCO0FBQ2IscUJBQUtBLEtBQUwsR0FBYSxpQkFBYjtBQUNILGFBRkQsTUFFTyxJQUFLLE1BQU1BLEtBQU4sSUFBZUEsUUFBUSxFQUE1QixFQUFnQztBQUNuQyxxQkFBS0EsS0FBTCxHQUFhLDZCQUFiO0FBQ0gsYUFGTSxNQUVBLElBQUssTUFBTUEsS0FBTixJQUFlQSxRQUFRLEVBQTVCLEVBQWdDO0FBQ25DLHFCQUFLQSxLQUFMLEdBQWEseUJBQWI7QUFDSCxhQUZNLE1BRUEsSUFBSyxNQUFNQSxLQUFOLElBQWVBLFFBQVEsRUFBNUIsRUFBZ0M7QUFDbkMscUJBQUtBLEtBQUwsR0FBYSxzQkFBYjtBQUNILGFBRk0sTUFFQTtBQUNILHFCQUFLQSxLQUFMLEdBQWEsMENBQWI7QUFDSDtBQUNELGlCQUFLVyxNQUFMO0FBQ0g7Ozs7RUExQ2dDQyxlQUFLQyxJOztrQkFBbkJsQixLIiwiZmlsZSI6InNjb3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnrZTpopjnu5PmnpwnXG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgICAgc2NvcmU6Jy0tJyxcbiAgICAgICAgZGlzcGxheVNjb3JlOmZhbHNlXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgICAgc3RhcnQoKSB7XG4gICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZSgnLi9kZXRhaWwnKVxuICAgICAgICB9LFxuICAgICAgICBpbWFnZUxvYWQoKSB7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlTY29yZSA9IHRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGxldCByZWNvcmQgPSB3eC5nZXRTdG9yYWdlU3luYygncmVzdWx0JylcbiAgICAgICAgbGV0IHNjb3JlID0gcmVjb3JkLnJlY29yZC5zY29yZVxuICAgICAgICBpZiAoc2NvcmUgPj0gOTApIHtcbiAgICAgICAgICAgIHRoaXMuc2NvcmUgPSAn5LyY56eA77yB5ZOH77yM5oiQ57up5paQ54S277yM5ZCR5oKo6Ie05pWs77yBJ1xuICAgICAgICB9IGVsc2UgaWYgKCA4MCA8PSBzY29yZSAmJiBzY29yZSA8IDkwKSB7XG4gICAgICAgICAgICB0aGlzLnNjb3JlID0gJ+iJr+Wlve+8jOebuOW9k+S4jeWuueaYk+WViu+8jOaCqOeahOernui1m+aIkOe7qei2hei/h+S6huWkp+mDqOWIhuWFmuWRmOWQjOW/l++8gSdcbiAgICAgICAgfSBlbHNlIGlmICggNzAgPD0gc2NvcmUgJiYgc2NvcmUgPCA4MCkge1xuICAgICAgICAgICAgdGhpcy5zY29yZSA9ICfkuK3nrYnvvIzov5jooYzlkKfvvIzov5nkuKrmiJDnu6nkuZ/mmK/kuI3lrrnmmJPlkaLvvIznu6fnu63liqDmsrnvvIEnXG4gICAgICAgIH0gZWxzZSBpZiAoIDYwIDw9IHNjb3JlICYmIHNjb3JlIDwgNzApIHtcbiAgICAgICAgICAgIHRoaXMuc2NvcmUgPSAn5Y+K5qC877yM5L2c5Li65YWa5ZGY77yM546w5Zyo6L+Z5Liq5oiQ57up5LiN5YC85b6X6aqE5YKy5ZOmJ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zY29yZSA9ICfpnIDopoHlvJXotbfotrPlpJ/ph43op4bllabvvIHnjrDlnKjmgqjnm7jkv6HlhZrmgKfkv67lhbvkuI3mmK/kuIDoubTogIzlsLHnmoTkuoblkKfvvIzosKbomZrkvY7osIPvvIzliqrlipvlrabkuaDlkKfvvIEnXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cbiAgfVxuIl19