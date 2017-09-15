'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _testUtils = require('react-dom/test-utils');

var _testUtils2 = _interopRequireDefault(_testUtils);

var _index = require('./index.js');

var _index2 = _interopRequireDefault(_index);

var _DesktopTable = require('./components/DesktopTable');

var _DesktopTable2 = _interopRequireDefault(_DesktopTable);

var _MobileTable = require('./components/MobileTable');

var _MobileTable2 = _interopRequireDefault(_MobileTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('ResponsiveTable', function () {
  it('renders without crashing', function () {
    var div = document.createElement('div');
    _reactDom2.default.render(_react2.default.createElement(_index2.default, null), div);
  });

  describe('method resizeFunc', function () {
    // TODO: how to test resizeFunc?
  });

  describe('responsive to state.windowWidth', function () {
    it('renders DesktopTable above breakpoint', function (done) {
      var responsiveTable = _testUtils2.default.renderIntoDocument(_react2.default.createElement(_index2.default, null));
      responsiveTable.setState({ windowWidth: 9999 }, function () {
        var realChild = _testUtils2.default.scryRenderedComponentsWithType(responsiveTable, _DesktopTable2.default);
        var missingChild = _testUtils2.default.scryRenderedComponentsWithType(responsiveTable, _MobileTable2.default);
        expect(realChild.length).toBe(1);
        expect(missingChild.length).toBe(0);
        done();
      });

      it('renders MobileTable below breakpoint', function (done) {
        var responsiveTable = _testUtils2.default.renderIntoDocument(_react2.default.createElement(_index2.default, null));
        responsiveTable.setState({ windowWidth: 1 }, function () {
          var realChild = _testUtils2.default.scryRenderedComponentsWithType(responsiveTable, _DesktopTable2.default);
          var missingChild = _testUtils2.default.scryRenderedComponentsWithType(responsiveTable, _MobileTable2.default);
          expect(realChild.length).toBe(0);
          expect(missingChild.length).toBe(1);
          done();
        });
      });
    });
  });
});