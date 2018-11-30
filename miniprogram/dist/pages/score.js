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
            this.score = record.record.score;
            this.$apply();
        }
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/score'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjb3JlLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwic2NvcmUiLCJkaXNwbGF5U2NvcmUiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJzdGFydCIsIiRuYXZpZ2F0ZSIsImltYWdlTG9hZCIsImV2ZW50cyIsInJlY29yZCIsInd4IiwiZ2V0U3RvcmFnZVN5bmMiLCIkYXBwbHkiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ25CQyxNLEdBQVM7QUFDUEMsb0NBQXdCO0FBRGpCLFMsUUFHVEMsVSxHQUFhLEUsUUFHYkMsSSxHQUFPO0FBQ0hDLG1CQUFNLElBREg7QUFFSEMsMEJBQWE7QUFGVixTLFFBS1BDLFEsR0FBVyxFLFFBR1hDLE8sR0FBVTtBQUNOQyxpQkFETSxtQkFDRTtBQUNKLHFCQUFLQyxTQUFMLENBQWUsVUFBZjtBQUNILGFBSEs7QUFJTkMscUJBSk0sdUJBSU07QUFDUixxQkFBS0wsWUFBTCxHQUFvQixJQUFwQjtBQUNIO0FBTkssUyxRQVNWTSxNLEdBQVMsRTs7Ozs7aUNBR0E7QUFDTCxnQkFBSUMsU0FBU0MsR0FBR0MsY0FBSCxDQUFrQixRQUFsQixDQUFiO0FBQ0EsaUJBQUtWLEtBQUwsR0FBYVEsT0FBT0EsTUFBUCxDQUFjUixLQUEzQjtBQUNBLGlCQUFLVyxNQUFMO0FBQ0g7Ozs7RUEvQmdDQyxlQUFLQyxJOztrQkFBbkJsQixLIiwiZmlsZSI6InNjb3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkuJzljZflpKflrablhZrlj7Llm73mg4Xnn6Xor4bnq57otZsnXG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgICAgc2NvcmU6Jy0tJyxcbiAgICAgICAgZGlzcGxheVNjb3JlOmZhbHNlXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgICAgc3RhcnQoKSB7XG4gICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZSgnLi9kZXRhaWwnKVxuICAgICAgICB9LFxuICAgICAgICBpbWFnZUxvYWQoKSB7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlTY29yZSA9IHRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGxldCByZWNvcmQgPSB3eC5nZXRTdG9yYWdlU3luYygncmVzdWx0JylcbiAgICAgICAgdGhpcy5zY29yZSA9IHJlY29yZC5yZWNvcmQuc2NvcmVcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cbiAgfVxuIl19