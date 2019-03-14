'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/welcome', 'pages/auth', 'pages/rule', 'pages/paper', 'pages/score', 'pages/detail'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
      },
      navigateToMiniProgramAppIdList: ["wxaef6d2413690047f"]
    };
    _this.globalData = {
      userInfo: null
    };

    _this.use('requestfix');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {
      wx.cloud.init({
        env: 'seu-dsgq-0',
        traceUser: true
      });
    }
  }, {
    key: 'onShow',
    value: function onShow(obj) {
      var _this2 = this;

      console.log(obj);
      if (obj.scene === 1038) {
        // 对接统一身份认证小程序
        if (obj.referrerInfo && obj.referrerInfo.extraData && obj.referrerInfo.appId === 'wxaef6d2413690047f') {
          var _obj$referrerInfo$ext = obj.referrerInfo.extraData,
              cardnum = _obj$referrerInfo$ext.cardnum,
              name = _obj$referrerInfo$ext.name,
              identity = _obj$referrerInfo$ext.identity;

          _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var result;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return wx.cloud.callFunction({
                      name: 'idsAuth',
                      data: {
                        cardnum: cardnum,
                        name: name,
                        identity: identity
                      }
                    });

                  case 2:
                    result = _context.sent;

                    wx.setStorageSync("name", result.result.result.name);
                    wx.reLaunch({ url: '/pages/rule' });

                  case 5:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee, _this2);
          }))();
        } else {
          // 没有完成认证，baby one more time
          wx.reLaunch({ url: '/pages/auth' });
        }
      }
      wx.reLaunch({ url: '/pages/welcome' });
    }
  }, {
    key: 'sleep',
    value: function sleep(s) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve('promise resolved');
        }, s * 1000);
      });
    }
  }, {
    key: 'testAsync',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.sleep(3);

              case 2:
                data = _context2.sent;

                console.log(data);

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function testAsync() {
        return _ref2.apply(this, arguments);
      }

      return testAsync;
    }()
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuYXZpZ2F0ZVRvTWluaVByb2dyYW1BcHBJZExpc3QiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ1c2UiLCJ3eCIsImNsb3VkIiwiaW5pdCIsImVudiIsInRyYWNlVXNlciIsIm9iaiIsImNvbnNvbGUiLCJsb2ciLCJzY2VuZSIsInJlZmVycmVySW5mbyIsImV4dHJhRGF0YSIsImFwcElkIiwiY2FyZG51bSIsIm5hbWUiLCJpZGVudGl0eSIsImNhbGxGdW5jdGlvbiIsImRhdGEiLCJyZXN1bHQiLCJzZXRTdG9yYWdlU3luYyIsInJlTGF1bmNoIiwidXJsIiwicyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsInNsZWVwIiwid2VweSIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBMEJFLHNCQUFlO0FBQUE7O0FBQUE7O0FBQUEsVUF0QmZBLE1Bc0JlLEdBdEJOO0FBQ1BDLGFBQU8sQ0FDTCxlQURLLEVBRUwsWUFGSyxFQUdMLFlBSEssRUFJTCxhQUpLLEVBS0wsYUFMSyxFQU1MLGNBTkssQ0FEQTtBQVNQQyxjQUFRO0FBQ05DLDZCQUFxQixPQURmO0FBRU5DLHNDQUE4QixNQUZ4QjtBQUdOQyxnQ0FBd0IsUUFIbEI7QUFJTkMsZ0NBQXdCO0FBSmxCLE9BVEQ7QUFlUEMsc0NBQWdDLENBQUMsb0JBQUQ7QUFmekIsS0FzQk07QUFBQSxVQUpmQyxVQUllLEdBSkY7QUFDWEMsZ0JBQVU7QUFEQyxLQUlFOztBQUViLFVBQUtDLEdBQUwsQ0FBUyxZQUFUO0FBRmE7QUFHZDs7OzsrQkFFVTtBQUNUQyxTQUFHQyxLQUFILENBQVNDLElBQVQsQ0FBYztBQUNWQyxhQUFLLFlBREs7QUFFVkMsbUJBQVc7QUFGRCxPQUFkO0FBSUQ7OzsyQkFFTUMsRyxFQUFLO0FBQUE7O0FBQ1ZDLGNBQVFDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBLFVBQUdBLElBQUlHLEtBQUosS0FBYyxJQUFqQixFQUFzQjtBQUNwQjtBQUNBLFlBQUlILElBQUlJLFlBQUosSUFBb0JKLElBQUlJLFlBQUosQ0FBaUJDLFNBQXJDLElBQWtETCxJQUFJSSxZQUFKLENBQWlCRSxLQUFqQixLQUEyQixvQkFBakYsRUFBdUc7QUFBQSxzQ0FDckVOLElBQUlJLFlBQUosQ0FBaUJDLFNBRG9EO0FBQUEsY0FDaEdFLE9BRGdHLHlCQUNoR0EsT0FEZ0c7QUFBQSxjQUN2RkMsSUFEdUYseUJBQ3ZGQSxJQUR1RjtBQUFBLGNBQ2pGQyxRQURpRix5QkFDakZBLFFBRGlGOztBQUVyRyxrRUFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUNvQmQsR0FBR0MsS0FBSCxDQUFTYyxZQUFULENBQXNCO0FBQ25DRiw0QkFBSyxTQUQ4QjtBQUVuQ0csNEJBQUs7QUFDREosd0NBREM7QUFFREMsa0NBRkM7QUFHREM7QUFIQztBQUY4QixxQkFBdEIsQ0FEcEI7O0FBQUE7QUFDS0csMEJBREw7O0FBU0dqQix1QkFBR2tCLGNBQUgsQ0FBa0IsTUFBbEIsRUFBMEJELE9BQU9BLE1BQVAsQ0FBY0EsTUFBZCxDQUFxQkosSUFBL0M7QUFDQWIsdUJBQUdtQixRQUFILENBQVksRUFBQ0MsS0FBSSxhQUFMLEVBQVo7O0FBVkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBRDtBQVlELFNBZEQsTUFjTztBQUNMO0FBQ0FwQixhQUFHbUIsUUFBSCxDQUFZLEVBQUNDLEtBQUksYUFBTCxFQUFaO0FBQ0Q7QUFDRjtBQUNEcEIsU0FBR21CLFFBQUgsQ0FBWSxFQUFDQyxLQUFJLGdCQUFMLEVBQVo7QUFDRDs7OzBCQUVNQyxDLEVBQUc7QUFDUixhQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENDLG1CQUFXLFlBQU07QUFDZkYsa0JBQVEsa0JBQVI7QUFDRCxTQUZELEVBRUdGLElBQUksSUFGUDtBQUdELE9BSk0sQ0FBUDtBQUtEOzs7Ozs7Ozs7Ozt1QkFHb0IsS0FBS0ssS0FBTCxDQUFXLENBQVgsQzs7O0FBQWJWLG9COztBQUNOVix3QkFBUUMsR0FBUixDQUFZUyxJQUFaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBdkV5QlcsZUFBS0MsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIHBhZ2VzOiBbXHJcbiAgICAgICdwYWdlcy93ZWxjb21lJyxcclxuICAgICAgJ3BhZ2VzL2F1dGgnLFxyXG4gICAgICAncGFnZXMvcnVsZScsXHJcbiAgICAgICdwYWdlcy9wYXBlcicsXHJcbiAgICAgICdwYWdlcy9zY29yZScsXHJcbiAgICAgICdwYWdlcy9kZXRhaWwnXHJcbiAgICBdLFxyXG4gICAgd2luZG93OiB7XHJcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ1dlQ2hhdCcsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICdibGFjaydcclxuICAgIH0sXHJcbiAgICBuYXZpZ2F0ZVRvTWluaVByb2dyYW1BcHBJZExpc3Q6IFtcInd4YWVmNmQyNDEzNjkwMDQ3ZlwiXVxyXG4gIH1cclxuXHJcbiAgZ2xvYmFsRGF0YSA9IHtcclxuICAgIHVzZXJJbmZvOiBudWxsXHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpXHJcbiAgfVxyXG5cclxuICBvbkxhdW5jaCgpIHtcclxuICAgIHd4LmNsb3VkLmluaXQoe1xyXG4gICAgICAgIGVudjogJ3NldS1kc2dxLTAnLFxyXG4gICAgICAgIHRyYWNlVXNlcjogdHJ1ZVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIG9uU2hvdyhvYmopIHtcclxuICAgIGNvbnNvbGUubG9nKG9iailcclxuICAgIGlmKG9iai5zY2VuZSA9PT0gMTAzOCl7XHJcbiAgICAgIC8vIOWvueaOpee7n+S4gOi6q+S7veiupOivgeWwj+eoi+W6j1xyXG4gICAgICBpZiggb2JqLnJlZmVycmVySW5mbyAmJiBvYmoucmVmZXJyZXJJbmZvLmV4dHJhRGF0YSAmJiBvYmoucmVmZXJyZXJJbmZvLmFwcElkID09PSAnd3hhZWY2ZDI0MTM2OTAwNDdmJykge1xyXG4gICAgICAgIGxldCB7Y2FyZG51bSwgbmFtZSwgaWRlbnRpdHl9ID0gb2JqLnJlZmVycmVySW5mby5leHRyYURhdGE7XHJcbiAgICAgICAgKGFzeW5jKCkgPT4ge1xyXG4gICAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICBuYW1lOidpZHNBdXRoJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcmRudW0sXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBpZGVudGl0eVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYyhcIm5hbWVcIiwgcmVzdWx0LnJlc3VsdC5yZXN1bHQubmFtZSlcclxuICAgICAgICAgICAgd3gucmVMYXVuY2goe3VybDonL3BhZ2VzL3J1bGUnfSkgXHJcbiAgICAgICAgfSkoKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIOayoeacieWujOaIkOiupOivge+8jGJhYnkgb25lIG1vcmUgdGltZVxyXG4gICAgICAgIHd4LnJlTGF1bmNoKHt1cmw6Jy9wYWdlcy9hdXRoJ30pIFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB3eC5yZUxhdW5jaCh7dXJsOicvcGFnZXMvd2VsY29tZSd9KVxyXG4gIH1cclxuXHJcbiAgc2xlZXAgKHMpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHJlc29sdmUoJ3Byb21pc2UgcmVzb2x2ZWQnKVxyXG4gICAgICB9LCBzICogMTAwMClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBhc3luYyB0ZXN0QXN5bmMgKCkge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuc2xlZXAoMylcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgfVxyXG59XHJcbiJdfQ==