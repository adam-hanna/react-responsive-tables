'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_PROPTYPES = exports.DEFAULT_PROPS = exports.DEFAULT_HASMOBILESPACERROW = exports.DEFAULT_DATA = exports.DEFAULT_HEADERS = exports.DEFAULT_BREAKPOINT = exports.DEFAULT_STYLES = exports.DEFAULT_CLASSES = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_CLASSES = exports.DEFAULT_CLASSES = {
  table: '',
  thead: '',
  th: '',
  tbody: '',
  tr: '',
  td: '',
  mobileSpacerRow: {
    tr: '',
    td: ''
  }
};

var DEFAULT_STYLES = exports.DEFAULT_STYLES = {
  table: {},
  thead: {},
  th: {},
  tbody: {},
  tr: {},
  td: {},
  mobileSpacerRow: {
    tr: {},
    td: {}
  }
};

var DEFAULT_BREAKPOINT = exports.DEFAULT_BREAKPOINT = 480;

var DEFAULT_HEADERS = exports.DEFAULT_HEADERS = [];

var DEFAULT_DATA = exports.DEFAULT_DATA = [[]];

var DEFAULT_HASMOBILESPACERROW = exports.DEFAULT_HASMOBILESPACERROW = true;

var DEFAULT_PROPS = exports.DEFAULT_PROPS = {
  breakpoint: DEFAULT_BREAKPOINT,
  classes: DEFAULT_CLASSES,
  styles: DEFAULT_STYLES,
  headers: DEFAULT_HEADERS,
  data: DEFAULT_DATA,
  hasMobileSpacerRow: DEFAULT_HASMOBILESPACERROW
};

var DEFAULT_PROPTYPES = exports.DEFAULT_PROPTYPES = {
  breakpoint: _propTypes2.default.number,
  classes: _propTypes2.default.shape({
    table: _propTypes2.default.string,
    thead: _propTypes2.default.string,
    th: _propTypes2.default.string,
    tbody: _propTypes2.default.string,
    tr: _propTypes2.default.string,
    td: _propTypes2.default.string,
    mobileSpacerRow: _propTypes2.default.shape({
      tr: _propTypes2.default.string,
      td: _propTypes2.default.string
    })
  }),
  styles: _propTypes2.default.shape({
    table: _propTypes2.default.objectOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])),
    thead: _propTypes2.default.objectOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])),
    th: _propTypes2.default.objectOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])),
    tbody: _propTypes2.default.objectOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])),
    tr: _propTypes2.default.objectOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])),
    td: _propTypes2.default.objectOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])),
    mobileSpacerRow: _propTypes2.default.shape({
      tr: _propTypes2.default.objectOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])),
      td: _propTypes2.default.objectOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]))
    })
  }),
  headers: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.bool, _propTypes2.default.symbol])),
  data: _propTypes2.default.arrayOf(_propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.bool, _propTypes2.default.symbol, _propTypes2.default.element]))),
  hasMobileSpacerRow: _propTypes2.default.bool
};