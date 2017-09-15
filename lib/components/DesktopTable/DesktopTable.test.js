'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _testUtils = require('react-dom/test-utils');

var _testUtils2 = _interopRequireDefault(_testUtils);

var _DesktopTable = require('./DesktopTable.js');

var _DesktopTable2 = _interopRequireDefault(_DesktopTable);

var _Defaults = require('../../utils/Defaults');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('DesktopTable', function () {
  var headers = ['foo', 'foo1'];

  var data = [['bar', 'bar1'], ['barbar', 'barbar1']];

  it('renders without crashing', function () {
    var div = document.createElement('div');
    _reactDom2.default.render(_react2.default.createElement(_DesktopTable2.default, null), div);
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
      var fullDesktopTable = _testUtils2.default.renderIntoDocument(_react2.default.createElement(_DesktopTable2.default, { classes: fullProps, headers: headers, data: data }));
      for (var prop in fullProps) {
        // ewww...
        if (_typeof(fullProps[prop]) === 'object') {
          for (var prop1 in fullProps[prop]) {
            expect(fullDesktopTable.state.classes[prop][prop1]).toBe(fullProps[prop][prop1]);
          }
        } else {
          expect(fullDesktopTable.state.classes[prop]).toBe(fullProps[prop]);
        }
      }

      var partialDesktopTable = _testUtils2.default.renderIntoDocument(_react2.default.createElement(_DesktopTable2.default, { classes: someProps, headers: headers, data: data }));
      var expectPartialClasses = window.Object.assign({}, _Defaults.DEFAULT_PROPS.classes, someProps);
      for (var _prop in expectPartialClasses) {
        if (_typeof(expectPartialClasses[_prop]) === 'object') {
          // ewww...
          for (var _prop2 in expectPartialClasses[_prop]) {
            expect(partialDesktopTable.state.classes[_prop][_prop2]).toBe(expectPartialClasses[_prop][_prop2]);
          }
        } else {
          expect(partialDesktopTable.state.classes[_prop]).toBe(expectPartialClasses[_prop]);
        }
      }
    });

    it('properly assigns to classNames', function () {
      // TODO: don't hard code these!
      var fullDesktopTable = _testUtils2.default.renderIntoDocument(_react2.default.createElement(_DesktopTable2.default, { classes: fullProps, headers: headers, data: data }));

      expect(_testUtils2.default.scryRenderedDOMComponentsWithClass(fullDesktopTable, 'foo-table').length).toBe(1);

      expect(_testUtils2.default.scryRenderedDOMComponentsWithClass(fullDesktopTable, 'foo-thead').length).toBe(1);

      expect(_testUtils2.default.scryRenderedDOMComponentsWithClass(fullDesktopTable, 'foo-th').length).toBe(2);

      expect(_testUtils2.default.scryRenderedDOMComponentsWithClass(fullDesktopTable, 'foo-tbody').length).toBe(1);

      expect(_testUtils2.default.scryRenderedDOMComponentsWithClass(fullDesktopTable, 'foo-tr').length).toBe(3);

      expect(_testUtils2.default.scryRenderedDOMComponentsWithClass(fullDesktopTable, 'foo-td').length).toBe(4);

      expect(_testUtils2.default.scryRenderedDOMComponentsWithClass(fullDesktopTable, 'foo-mobileSpacerRow-tr').length).toBe(0);

      expect(_testUtils2.default.scryRenderedDOMComponentsWithClass(fullDesktopTable, 'foo-mobileSpacerRow-td').length).toBe(0);

      var partialDesktopTable = _testUtils2.default.renderIntoDocument(_react2.default.createElement(_DesktopTable2.default, { classes: someProps, headers: headers, data: data }));

      expect(_testUtils2.default.scryRenderedDOMComponentsWithClass(partialDesktopTable, 'foo-table').length).toBe(1);

      expect(_testUtils2.default.scryRenderedDOMComponentsWithClass(partialDesktopTable, 'foo-thead').length).toBe(0);

      expect(_testUtils2.default.scryRenderedDOMComponentsWithClass(partialDesktopTable, 'foo-th').length).toBe(0);

      expect(_testUtils2.default.scryRenderedDOMComponentsWithClass(partialDesktopTable, 'foo-tbody').length).toBe(0);

      expect(_testUtils2.default.scryRenderedDOMComponentsWithClass(partialDesktopTable, 'foo-tr').length).toBe(0);

      expect(_testUtils2.default.scryRenderedDOMComponentsWithClass(partialDesktopTable, 'foo-td').length).toBe(0);

      expect(_testUtils2.default.scryRenderedDOMComponentsWithClass(partialDesktopTable, 'foo-mobileSpacerRow-tr').length).toBe(0);

      expect(_testUtils2.default.scryRenderedDOMComponentsWithClass(partialDesktopTable, 'foo-mobileSpacerRow-td').length).toBe(0);
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
      var fullDesktopTable = _testUtils2.default.renderIntoDocument(_react2.default.createElement(_DesktopTable2.default, { styles: fullProps, headers: headers, data: data }));
      for (var prop in fullProps) {
        // ewww...
        if (_typeof(fullProps[prop]) === 'object') {
          for (var prop1 in fullProps[prop]) {
            expect(fullDesktopTable.state.styles[prop][prop1]).toBe(fullProps[prop][prop1]);
          }
        } else {
          expect(fullDesktopTable.state.styles[prop]).toBe(fullProps[prop]);
        }
      }

      var partialDesktopTable = _testUtils2.default.renderIntoDocument(_react2.default.createElement(_DesktopTable2.default, { styles: someProps, headers: headers, data: data }));
      var expectPartialStyles = window.Object.assign({}, _Defaults.DEFAULT_PROPS.styles, someProps);
      for (var _prop3 in expectPartialStyles) {
        if (_typeof(expectPartialStyles[_prop3]) === 'object') {
          // ewww...
          for (var _prop4 in expectPartialStyles[_prop3]) {
            expect(partialDesktopTable.state.styles[_prop3][_prop4]).toBe(expectPartialStyles[_prop3][_prop4]);
          }
        } else {
          expect(partialDesktopTable.state.styles[_prop3]).toBe(expectPartialStyles[_prop3]);
        }
      }
    });

    it('properly assigns to inline styles', function () {
      var fullDesktopTable = _testUtils2.default.renderIntoDocument(_react2.default.createElement(_DesktopTable2.default, { styles: fullProps, headers: headers, data: data }));

      var table = _testUtils2.default.scryRenderedDOMComponentsWithTag(fullDesktopTable, 'table');
      for (var prop in fullProps.table) {
        for (var i = 0; i < table.length; i++) {
          expect(table[i].style[prop]).toBe(fullProps.table[prop]);
        }
      }

      var thead = _testUtils2.default.scryRenderedDOMComponentsWithTag(fullDesktopTable, 'thead');
      for (var _prop5 in fullProps.table) {
        for (var _i = 0; _i < thead.length; _i++) {
          expect(thead[_i].style[_prop5]).toBe(fullProps.thead[_prop5]);
        }
      }

      var th = _testUtils2.default.scryRenderedDOMComponentsWithTag(fullDesktopTable, 'th');
      for (var _prop6 in fullProps.th) {
        for (var _i2 = 0; _i2 < th.length; _i2++) {
          expect(th[_i2].style[_prop6]).toBe(fullProps.th[_prop6]);
        }
      }

      var tbody = _testUtils2.default.scryRenderedDOMComponentsWithTag(fullDesktopTable, 'tbody');
      for (var _prop7 in fullProps.tbody) {
        for (var _i3 = 0; _i3 < tbody.length; _i3++) {
          expect(tbody[_i3].style[_prop7]).toBe(fullProps.tbody[_prop7]);
        }
      }

      /*
        why are these not working?! They appear to be working in the app!!
      let tr = TestUtils.scryRenderedDOMComponentsWithTag(fullDesktopTable, 'tr')
      for (let prop in fullProps.tr) {
        for (let i = 0; i < tr.length; i++) {
          expect(tr[i].style[prop]).toBe(fullProps.tr[prop]);
        }
      }
      
      let td = TestUtils.scryRenderedDOMComponentsWithTag(fullDesktopTable, 'td')
      for (let prop in fullProps.td) {
        for (let i = 0; i < td.length; i++) {
          expect(td[i].style[prop]).toBe(fullProps.td[prop]);
        }
      }
      */

      var partialDesktopTable = _testUtils2.default.renderIntoDocument(_react2.default.createElement(_DesktopTable2.default, { styles: someProps, headers: headers, data: data }));

      table = _testUtils2.default.scryRenderedDOMComponentsWithTag(partialDesktopTable, 'table');
      for (var _prop8 in someProps.table) {
        for (var _i4 = 0; _i4 < table.length; _i4++) {
          expect(table[_i4].style[_prop8]).toBe(someProps.table[_prop8]);
        }
      }

      thead = _testUtils2.default.scryRenderedDOMComponentsWithTag(partialDesktopTable, 'thead');
      for (var _i5 = 0; _i5 < thead.length; _i5++) {
        expect(thead[_i5].style._length).toBe(0);
      }

      th = _testUtils2.default.scryRenderedDOMComponentsWithTag(partialDesktopTable, 'th');
      for (var _i6 = 0; _i6 < th.length; _i6++) {
        expect(th[_i6].style._length).toBe(0);
      }

      tbody = _testUtils2.default.scryRenderedDOMComponentsWithTag(partialDesktopTable, 'tbody');
      for (var _i7 = 0; _i7 < tbody.length; _i7++) {
        expect(tbody[_i7].style._length).toBe(0);
      }

      var tr = _testUtils2.default.scryRenderedDOMComponentsWithTag(partialDesktopTable, 'tr');
      for (var _i8 = 0; _i8 < tr.length; _i8++) {
        expect(tr[_i8].style._length).toBe(0);
      }

      var td = _testUtils2.default.scryRenderedDOMComponentsWithTag(partialDesktopTable, 'td');
      for (var _i9 = 0; _i9 < td.length; _i9++) {
        expect(td[_i9].style._length).toBe(0);
      }
    });
  });

  describe('receives props.headers and props.data', function () {
    var fullDesktopTable = _testUtils2.default.renderIntoDocument(_react2.default.createElement(_DesktopTable2.default, { headers: headers, data: data }));

    it('properly renders headers and data to the UI', function () {
      var tr = _testUtils2.default.scryRenderedDOMComponentsWithTag(fullDesktopTable, 'tr');
      expect(tr.length).toBe(3);

      var th = _testUtils2.default.scryRenderedDOMComponentsWithTag(fullDesktopTable, 'th');
      expect(th.length).toBe(2);
      for (var i = 0; i < th.length; i++) {
        expect(th[i].textContent).toEqual(headers[i]);
      }

      var td = _testUtils2.default.scryRenderedDOMComponentsWithTag(fullDesktopTable, 'td');
      expect(td.length).toBe(4);
      for (var _i10 = 0; _i10 < td.length; _i10++) {
        for (var j = 0; j < td[_i10].length; j++) {
          expect(td[_i10 + j].textContent).toEqual(data[_i10][j]);
        }
      }
    });
  });
});