'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Defaults = require('../../utils/Defaults');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DesktopTable = function (_Component) {
  _inherits(DesktopTable, _Component);

  function DesktopTable(props) {
    _classCallCheck(this, DesktopTable);

    // note: this breaks mobileSpacerRow.tr and td!
    var _this = _possibleConstructorReturn(this, (DesktopTable.__proto__ || Object.getPrototypeOf(DesktopTable)).call(this, props));

    _this.state = {
      classes: window.Object.assign({}, _Defaults.DEFAULT_PROPS.classes, props.classes),
      styles: window.Object.assign({}, _Defaults.DEFAULT_PROPS.styles, props.styles)
    };
    return _this;
  }

  _createClass(DesktopTable, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'table',
        {
          className: this.state.classes.table,
          style: this.state.styles.table
        },
        _react2.default.createElement(
          'thead',
          {
            className: this.state.classes.thead,
            style: this.state.styles.thead
          },
          _react2.default.createElement(
            'tr',
            {
              className: this.state.classes.tr,
              style: this.state.styles.tr
            },
            this.props.headers.map(function (header, idx) {
              return _react2.default.createElement(
                'th',
                {
                  key: idx,
                  className: _this2.state.classes.th,
                  style: _this2.state.styles.th
                },
                header
              );
            })
          )
        ),
        _react2.default.createElement(
          'tbody',
          {
            className: this.state.classes.tbody,
            style: this.state.styles.tbody
          },
          this.props.data.map(function (datum, idx) {
            return _react2.default.createElement(
              'tr',
              {
                key: idx,
                className: _this2.state.classes.tr,
                style: _this2.state.styles.tr
              },
              datum.map(function (item, idx2) {
                return _react2.default.createElement(
                  'td',
                  {
                    key: idx2,
                    className: _this2.state.classes.td,
                    style: _this2.state.styles.td
                  },
                  item
                );
              })
            );
          })
        )
      );
    }
  }]);

  return DesktopTable;
}(_react.Component);

DesktopTable.propTypes = _Defaults.DEFAULT_PROPTYPES;
DesktopTable.defaultProps = _Defaults.DEFAULT_PROPS;

exports.default = DesktopTable;