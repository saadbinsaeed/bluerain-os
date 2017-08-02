"use strict";

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _reactIntl = require("react-intl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $tenant = process.env.ELECTRODE_TENANT;
var tenantMessages = void 0;

try {
  tenantMessages = require("./tenants/" + $tenant + "/default-messages"); //eslint-disable-line
} catch (err) {
  tenantMessages = {};
}

var messages = (0, _reactIntl.defineMessages)({
  editMe: {
    "id": "BluerainOs.defaultTenant.editMe",
    "defaultMessage": "Edit me!"
  }
});

module.exports = (0, _assign2.default)({}, messages, tenantMessages);