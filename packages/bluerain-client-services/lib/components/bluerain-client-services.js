"use strict";

exports.__esModule = true;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactIntl = require("react-intl");

var _bluerainClientServices = require("../../src/styles/bluerain-client-services.css");

var _bluerainClientServices2 = _interopRequireDefault(_bluerainClientServices);

var _defaultMessages = require("../lang/default-messages");

var _defaultMessages2 = _interopRequireDefault(_defaultMessages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BluerainClientServices = function (_React$Component) {
  (0, _inherits3.default)(BluerainClientServices, _React$Component);

  function BluerainClientServices() {
    (0, _classCallCheck3.default)(this, BluerainClientServices);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  BluerainClientServices.prototype.render = function render() {
    return _react2.default.createElement(
      "div",
      { className: _bluerainClientServices2.default.someStyle },
      _react2.default.createElement(_reactIntl.FormattedMessage, _defaultMessages2.default.editMe)
    );
  };

  return BluerainClientServices;
}(_react2.default.Component);

exports.default = BluerainClientServices;


BluerainClientServices.displayName = "BluerainClientServices";

BluerainClientServices.propTypes = {};

BluerainClientServices.defaultProps = {};