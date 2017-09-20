'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Defaults = require('./utils/Defaults');

var _MobileTable = require('./components/MobileTable');

var _MobileTable2 = _interopRequireDefault(_MobileTable);

var _DesktopTable = require('./components/DesktopTable');

var _DesktopTable2 = _interopRequireDefault(_DesktopTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResponsiveTable = function (_Component) {
  _inherits(ResponsiveTable, _Component);

  function ResponsiveTable(props) {
    _classCallCheck(this, ResponsiveTable);

    var _this = _possibleConstructorReturn(this, (ResponsiveTable.__proto__ || Object.getPrototypeOf(ResponsiveTable)).call(this, props));

    _this.state = {
      resizeTimer: undefined,
      windowWidth: undefined
    };

    _this.resizeFunc = _this.resizeFunc.bind(_this);
    return _this;
  }

  _createClass(ResponsiveTable, [{
    key: 'resizeFunc',
    value: function resizeFunc() {
      var _this2 = this;

      var resizeTimer = this.state.resizeTimer;
      window.clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        _this2.setState({ windowWidth: window.innerWidth });
      }, 150);

      this.setState({ resizeTimer: resizeTimer });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ windowWidth: window.innerWidth });
      window.addEventListener('resize', this.resizeFunc);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.resizeFunc);
    }
  }, {
    key: 'render',
    value: function render() {
      var Elem = this.state.windowWidth && this.state.windowWidth > this.props.breakpoint ? _DesktopTable2.default : _MobileTable2.default;
      return _react2.default.createElement(Elem, this.props);
    }
  }]);

  return ResponsiveTable;
}(_react.Component);

ResponsiveTable.propTypes = _Defaults.DEFAULT_PROPTYPES;
ResponsiveTable.defaultProps = _Defaults.DEFAULT_PROPS;

exports.default = ResponsiveTable;