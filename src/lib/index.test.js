import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';

import ResponsiveTable from './index.js';
import DesktopTable from './components/DesktopTable';
import MobileTable from './components/MobileTable';

describe('ResponsiveTable', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ResponsiveTable />, div);
  });

  describe('method resizeFunc', () => {
    // TODO: how to test resizeFunc?
  });

  describe('responsive to state.windowWidth', () => {
    it('renders DesktopTable above breakpoint', done => {
      const responsiveTable = TestUtils.renderIntoDocument(<ResponsiveTable/>)
      responsiveTable.setState({windowWidth: 9999}, () => {
        const realChild = TestUtils.scryRenderedComponentsWithType(responsiveTable, DesktopTable);
        const missingChild = TestUtils.scryRenderedComponentsWithType(responsiveTable, MobileTable);
        expect(realChild.length).toBe(1);
        expect(missingChild.length).toBe(0);
        done()
      });

      it('renders MobileTable below breakpoint', done => {
        const responsiveTable = TestUtils.renderIntoDocument(<ResponsiveTable/>)
        responsiveTable.setState({windowWidth: 1}, () => {
          const realChild = TestUtils.scryRenderedComponentsWithType(responsiveTable, DesktopTable);
          const missingChild = TestUtils.scryRenderedComponentsWithType(responsiveTable, MobileTable);
          expect(realChild.length).toBe(0);
          expect(missingChild.length).toBe(1);
          done()
        });
      });
    });
  });
});
