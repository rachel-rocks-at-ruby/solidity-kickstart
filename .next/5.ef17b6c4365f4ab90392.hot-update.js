webpackHotUpdate(5,{

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _factory = __webpack_require__(392);

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/rachelbird/Code/Ethereum and Solidity Class Projects/kickstart/pages/index.js?entry';


var CampaignIndex = function (_Component) {
	(0, _inherits3.default)(CampaignIndex, _Component);

	function CampaignIndex() {
		(0, _classCallCheck3.default)(this, CampaignIndex);

		return (0, _possibleConstructorReturn3.default)(this, (CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).apply(this, arguments));
	}

	(0, _createClass3.default)(CampaignIndex, [{
		key: 'componentDidMount',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
				var campaigns;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return _factory2.default.methods.getDeployedCampaigns().call();

							case 2:
								campaigns = _context.sent;

								console.log(campaigns);

							case 4:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function componentDidMount() {
				return _ref.apply(this, arguments);
			}

			return componentDidMount;
		}()
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 12
				}
			}, 'Campaigns Index');
		}
	}]);

	return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZmFjdG9yeSIsIkNhbXBhaWduSW5kZXgiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRDYW1wYWlnbnMiLCJjYWxsIiwiY2FtcGFpZ25zIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQWE7Ozs7Ozs7OztJQUVkLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFFb0Isa0JBQUEsQUFBUSxRQUFSLEFBQWdCLHVCQUFoQixBQUF1QyxBOztZQUF6RDtBLDZCQUVOOztnQkFBQSxBQUFRLElBQVIsQUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQUdKLEFBQ1I7MEJBQU8sY0FBQTs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsSUFBQSxFQUFQLEFBQU8sQUFDUDs7Ozs7QUFUMEIsQSxBQVk1Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcmFjaGVsYmlyZC9Db2RlL0V0aGVyZXVtIGFuZCBTb2xpZGl0eSBDbGFzcyBQcm9qZWN0cy9raWNrc3RhcnQifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/rachelbird/Code/Ethereum and Solidity Class Projects/kickstart/pages/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/rachelbird/Code/Ethereum and Solidity Class Projects/kickstart/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5lZjE3YjZjNDM2NWY0YWI5MDM5Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/NTYzNDY2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGZhY3RvcnkgZnJvbSAnLi4vZXRoZXJldW0vZmFjdG9yeSc7XG5cbmNsYXNzIENhbXBhaWduSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuXHRhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRjb25zdCBjYW1wYWlnbnMgPSBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMuZ2V0RGVwbG95ZWRDYW1wYWlnbnMoKS5jYWxsKCk7XG5cdFx0XG5cdFx0Y29uc29sZS5sb2coY2FtcGFpZ25zKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gPGRpdj5DYW1wYWlnbnMgSW5kZXg8L2Rpdj5cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYW1wYWlnbkluZGV4O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=