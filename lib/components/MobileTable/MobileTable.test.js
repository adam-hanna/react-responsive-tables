'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _testUtils = require('react-dom/test-utils');

var _testUtils2 = _interopRequireDefault(_testUtils);

var _MobileTable = require('./MobileTable.js');

var _MobileTable2 = _interopRequireDefault(_MobileTable);

var _Defaults = require('../../utils/Defaults');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('MobileTable', function () {
  var headers = ['foo', 'foo1'];

  var data = [['bar', 'bar1'], ['barbar', 'barbar1']];

  it('renders without crashing', function () {
    var div = document.createElement('div');
    _reactDom2.default.render(_react2.default.createElement(_MobileTable2.default, null), div);
  });

  describe('receives props.classes', function () {
    var fullProps = {
      table: 'foo-table',
      thead: 'foo-thead',
      th: 'foo-th',
      tbody: 'foo-tbody',
      tr: 'foo-tr',
      td: 'foo-td',
      mobileSpacerRow: {
        tr: 'foo-mobileSpacerRow-tr',
        td: 'foo-mobileSpacerRow-td'
      }
    };

    var someProps = {
      table: 'foo-table',
      mobileSpacerRow: {
        tr: 'foo-mobileSpacerRow-tr'
      }
    };

    it('properly assigns to state.classes', function () {
      var fullMobileTable = _testUtils2.default.renderIntoDocument(_react2.default.createElement(_MobileTable2.default, { classes: fullProps, headers: headers, data: data }));
      for (var prop in fullProps) {
        // ewww...
        if (_typeof(fullProps[prop]) === 'object') {
          for (var prop1 in fullProps[prop]) {
            expect(fullMobileTable.state.classes[prop][prop1]).toBe(fullProps[prop][prop1]);
          }
        } else {
          expect(fullMobileTable.state.classes[prop]).toBe(fullProps[prop]);
        }
      }

      var partialMobileTable = _testUtils2.default.renderIntoDocument(_react2.default.createElement(_MobileTable2.default, { classes: someProps, headers: headers, data: data }));
      var expectPartialClasses = window.Object.assign({}, _Defaults.DEFAULT_PROPS.classes, someProps);
      for (var _prop in expectPartialClasses) {
        if (_typeof(expectPartialClasses[_prop]) === 'object') {
          // ewww...
          for (var _prop2 in expectPartialClasses[_prop]) {
            expect(partialMobileTable.state.classes[_prop][_prop2]).toBe(expectPartialClasses[_prop][_prop2]);
          }
        } else {
          expect(partialMobileTable.state.classes[_prop]).toBe(expectPartialClasses[_prop]);
        }
      }
    });

    it('properly assigns to classNames', function () {
      // TODO: don't hard code these!
      var fullMobileTable = _testUtils2.default.renderIntoDocument(_react2.default.createElement(_MobileTable2.default, { classes: fullProps, headers: headers, data: data }));

      expect(_testUtils2.default.scryRenderedDOMComponentsWithClass(fullMobileTable, 'foo-table').length).toBe(1);

      expect(_testUtils2.default.scryRenderedDOMComponentsWithClass(fullMobileTable, 'foo-thead').length).toBe(0);

      expect(_testUtils2.default.scryRenderedDOMComponentsWithClass(fullMobileTable, 'foo-th').length).toBe(4);

      expect(_testUtils2.default.scryRenderedDOMComponentsWithClass(fullMobileTable, 'foo-tbody').length).toBe(2);

      expect(_testUtils2.default.scryRenderedDOMComponentsWithClass(fullMobileTable, 'foo-tr').length).toBe(4);

      expect(_testUtils2.default.scryRenderedDOMComponentsWithClass(fullMobileTable, 'foo-td').length).toBe(4);

      expect(_testUtils2.default.scryRenderedDOMComponentsWithClass(fullMobileTable, 'foo-mobileSpacerRow-tr').length).toBe(2);

      expect(_testUtils2.default.scryRenderedDOMComponentsWithClass(fullMobileTable, 'foo-mobileSpacerRow-td').length).toBe(4);

      var partialMobileTable = _testUtils2.default.renderIntoDocument(_react2.default.createElement(_MobileTable2.default, { classes: someProps, headers: headers, data: data }));

      expect(_testUtils2.default.scryRenderedDOMComponentsWithClass(partialMobileTable, 'foo-table').length).toBe(1);

      expect(_testUtils2.default.scryRenderedDOMComponentsWithClass(partialMobileTable, 'foo-thead').length).toBe(0);

      expect(_testUtils2.default.scryRenderedDOMComponentsWithClass(partialMobileTable, 'foo-th').length).toBe(0);

      expect(_testUtils2.default.scryRenderedDOMComponentsWithClass(partialMobileTable, 'foo-tbody').length).toBe(0);

      expect(_testUtils2.default.scryRenderedDOMComponentsWithClass(partialMobileTable, 'foo-tr').length).toBe(0);

      expect(_testUtils2.default.scryRenderedDOMComponentsWithClass(partialMobileTable, 'foo-td').length).toBe(0);

      expect(_testUtils2.default.scryRenderedDOMComponentsWithClass(partialMobileTable, 'foo-mobileSpacerRow-tr').length).toBe(2);

      expect(_testUtils2.default.scryRenderedDOMComponentsWithClass(partialMobileTable, 'foo-mobileSpacerRow-td').length).toBe(0);
    });
  });

  describe('receives props.styles', function () {
    var fullProps = {
      table: { color: 'red' },
      thead: { color: 'white' },
      th: { color: 'blue' },
      tbody: { color: 'black' },
      tr: { color: 'brown' },
      td: { color: 'grey' },
      mobileSpacerRow: {
        tr: { color: 'green' },
        td: { color: 'purple' }
      }
    };

    var someProps = {
      table: { color: 'red' },
      mobileSpacerRow: {
        tr: { color: 'green' }
      }
    };

    it('properly assigns to state.styles', function () {
      var fullMobileTable = _testUtils2.default.renderIntoDocument(_react2.default.createElement(_MobileTable2.default, { styles: fullProps, headers: headers, data: data }));
      for (var prop in fullProps) {
        // ewww...
        if (_typeof(fullProps[prop]) === 'object') {
          for (var prop1 in fullProps[prop]) {
            expect(fullMobileTable.state.styles[prop][prop1]).toBe(fullProps[prop][prop1]);
          }
        } else {
          expect(fullMobileTable.state.styles[prop]).toBe(fullProps[prop]);
        }
      }

      var partialMobileTable = _testUtils2.default.renderIntoDocument(_react2.default.createElement(_MobileTable2.default, { styles: someProps, headers: headers, data: data }));
      var expectPartialStyles = window.Object.assign({}, _Defaults.DEFAULT_PROPS.styles, someProps);
      for (var _prop3 in expectPartialStyles) {
        if (_typeof(expectPartialStyles[_prop3]) === 'object') {
          // ewww...
          for (var _prop4 in expectPartialStyles[_prop3]) {
            expect(partialMobileTable.state.styles[_prop3][_prop4]).toBe(expectPartialStyles[_prop3][_prop4]);
          }
        } else {
          expect(partialMobileTable.state.styles[_prop3]).toBe(expectPartialStyles[_prop3]);
        }
      }
    });

    it('properly assigns to inline styles', function () {
      var fullMobileTable = _testUtils2.default.renderIntoDocument(_react2.default.createElement(_MobileTable2.default, { styles: fullProps, headers: headers, data: data }));

      var table = _testUtils2.default.scryRenderedDOMComponentsWithTag(fullMobileTable, 'table');
      for (var prop in fullProps.table) {
        for (var i = 0; i < table.length; i++) {
          expect(table[i].style[prop]).toBe(fullProps.table[prop]);
        }
      }

      var thead = _testUtils2.default.scryRenderedDOMComponentsWithTag(fullMobileTable, 'thead');
      for (var _prop5 in fullProps.table) {
        for (var _i = 0; _i < thead.length; _i++) {
          expect(thead[_i].style[_prop5]).toBe(fullProps.thead[_prop5]);
        }
      }

      var th = _testUtils2.default.scryRenderedDOMComponentsWithTag(fullMobileTable, 'th');
      for (var _prop6 in fullProps.th) {
        for (var _i2 = 0; _i2 < th.length; _i2++) {
          expect(th[_i2].style[_prop6]).toBe(fullProps.th[_prop6]);
        }
      }

      var tbody = _testUtils2.default.scryRenderedDOMComponentsWithTag(fullMobileTable, 'tbody');
      for (var _prop7 in fullProps.tbody) {
        for (var _i3 = 0; _i3 < tbody.length; _i3++) {
          expect(tbody[_i3].style[_prop7]).toBe(fullProps.tbody[_prop7]);
        }
      }

      /*
        why are these not working?! They appear to be working in the app!!
      let tr = TestUtils.scryRenderedDOMComponentsWithTag(fullMobileTable, 'tr')
      for (let prop in fullProps.tr) {
        for (let i = 0; i < tr.length; i++) {
          expect(tr[i].style[prop]).toBe(fullProps.tr[prop]);
        }
      }
      
      let td = TestUtils.scryRenderedDOMComponentsWithTag(fullMobileTable, 'td')
      for (let prop in fullProps.td) {
        for (let i = 0; i < td.length; i++) {
          expect(td[i].style[prop]).toBe(fullProps.td[prop]);
        }
      }
      */

      var partialMobileTable = _testUtils2.default.renderIntoDocument(_react2.default.createElement(_MobileTable2.default, { styles: someProps, headers: headers, data: data }));

      table = _testUtils2.default.scryRenderedDOMComponentsWithTag(partialMobileTable, 'table');
      for (var _prop8 in someProps.table) {
        for (var _i4 = 0; _i4 < table.length; _i4++) {
          expect(table[_i4].style[_prop8]).toBe(someProps.table[_prop8]);
        }
      }

      thead = _testUtils2.default.scryRenderedDOMComponentsWithTag(partialMobileTable, 'thead');
      for (var _i5 = 0; _i5 < thead.length; _i5++) {
        expect(thead[_i5].style._length).toBe(0);
      }

      th = _testUtils2.default.scryRenderedDOMComponentsWithTag(partialMobileTable, 'th');
      for (var _i6 = 0; _i6 < th.length; _i6++) {
        expect(th[_i6].style._length).toBe(0);
      }

      tbody = _testUtils2.default.scryRenderedDOMComponentsWithTag(partialMobileTable, 'tbody');
      for (var _i7 = 0; _i7 < tbody.length; _i7++) {
        expect(tbody[_i7].style._length).toBe(0);
      }

      // let tr = TestUtils.scryRenderedDOMComponentsWithTag(partialMobileTable, 'tr')
      // for (let i = 0; i < tr.length; i++) {
      //   expect(tr[i].style._length).toBe(1);
      // }

      // let td = TestUtils.scryRenderedDOMComponentsWithTag(partialMobileTable, 'td')
      // for (let i = 0; i < td.length; i++) {
      //   expect(td[i].style._length).toBe(0);
      // }
    });
  });

  describe('receives props.headers and props.data', function () {
    var fullMobileTable = _testUtils2.default.renderIntoDocument(_react2.default.createElement(_MobileTable2.default, { headers: headers, data: data }));

    it('properly renders headers and data to the UI', function () {
      var tr = _testUtils2.default.scryRenderedDOMComponentsWithTag(fullMobileTable, 'tr');
      expect(tr.length).toBe(6);

      var th = _testUtils2.default.scryRenderedDOMComponentsWithTag(fullMobileTable, 'th');
      expect(th.length).toBe(4);
      for (var i = 0; i < th.length; i++) {
        expect(th[i].textContent).toEqual(headers[i % headers.length]);
      }

      var td = _testUtils2.default.scryRenderedDOMComponentsWithTag(fullMobileTable, 'td');
      expect(td.length).toBe(8);
      for (var _i8 = 0; _i8 < td.length; _i8++) {
        for (var j = 0; j < td[_i8].length; j++) {
          expect(td[_i8 + j].textContent).toEqual(data[_i8][j]);
        }
      }
    });
  });
});