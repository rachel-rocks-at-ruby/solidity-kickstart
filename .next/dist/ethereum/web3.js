'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = require('../config/vars'),
    rinkebyNetwork = _require.rinkebyNetwork;

var web3 = void 0;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
	// we are in the browser and MetaMask is running
	web3 = new _web2.default(window.web3.currentProvider);
} else {
	// we are on the server OR the user is not running MetaMask
	var provider = new _web2.default.providers.HttpProvider(rinkebyNetwork);
	web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsInJlcXVpcmUiLCJyaW5rZWJ5TmV0d29yayIsIndlYjMiLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQOzs7Ozs7ZUFDMkIsUUFBUSxBQUFSLEE7SUFBbkIsQSwwQkFBQSxBOztBQUVSLElBQUksWUFBSjs7QUFFQSxJQUFLLE9BQU8sQUFBUCxXQUFrQixBQUFsQixlQUFpQyxPQUFPLE9BQU8sQUFBZCxTQUF1QixBQUE3RCxhQUEyRSxBQUMxRTtBQUNBO1FBQU8sQUFBSSxBQUFKLGtCQUFTLE9BQU8sQUFBUCxLQUFZLEFBQXJCLEFBQVAsQUFDQTtBQUhELE9BR08sQUFDTjtBQUNBO0tBQU0sV0FBVyxJQUFJLGNBQUssQUFBTCxVQUFlLEFBQW5CLGFBQ2hCLEFBRGdCLEFBQWpCLEFBR0E7UUFBTyxBQUFJLEFBQUosa0JBQVMsQUFBVCxBQUFQLEFBQ0E7QUFFRDs7a0JBQWUsQUFBZiIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9yYWNoZWxiaXJkL0NvZGUvRXRoZXJldW0gYW5kIFNvbGlkaXR5IENsYXNzIFByb2plY3RzL2tpY2tzdGFydCJ9