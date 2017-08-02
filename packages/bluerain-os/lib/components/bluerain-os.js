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

var _bluerainOs = require("../../src/styles/bluerain-os.css");

var _bluerainOs2 = _interopRequireDefault(_bluerainOs);

var _defaultMessages = require("../lang/default-messages");

var _defaultMessages2 = _interopRequireDefault(_defaultMessages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BluerainOs = function (_React$Component) {
  (0, _inherits3.default)(BluerainOs, _React$Component);

  function BluerainOs() {
    (0, _classCallCheck3.default)(this, BluerainOs);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  BluerainOs.prototype.render = function render() {
    return _react2.default.createElement(
      "div",
      { className: _bluerainOs2.default.someStyle },
      _react2.default.createElement(_reactIntl.FormattedMessage, _defaultMessages2.default.editMe)
    );
  };

  return BluerainOs;
}(_react2.default.Component);

exports.default = BluerainOs;


BluerainOs.displayName = "BluerainOs";

BluerainOs.propTypes = {};

BluerainOs.defaultProps = {};