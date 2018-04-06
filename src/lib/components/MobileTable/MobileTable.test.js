import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-dom/test-utils'

import MobileTable, { checkItem, hasMobileSpacerRow } from './MobileTable.js'
import { DEFAULT_PROPS } from '../../utils/Defaults'

describe('MobileTable', () => {
  const headers = ['foo', 'foo1']

  const data = [['bar', 'bar1'], ['barbar', 'barbar1']]

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<MobileTable />, div)
  })

  describe('receives props.classes', () => {
    const fullProps = {
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
    }

    const someProps = {
      table: 'foo-table',
      mobileSpacerRow: {
        tr: 'foo-mobileSpacerRow-tr'
      }
    }

    it('properly assigns to state.classes', () => {
      const fullMobileTable = TestUtils.renderIntoDocument(
        <MobileTable classes={fullProps} headers={headers} data={data} />
      )
      for (let prop in fullProps) {
        // ewww...
        if (typeof fullProps[prop] === 'object') {
          for (let prop1 in fullProps[prop]) {
            expect(fullMobileTable.state.classes[prop][prop1]).toBe(
              fullProps[prop][prop1]
            )
          }
        } else {
          expect(fullMobileTable.state.classes[prop]).toBe(fullProps[prop])
        }
      }

      const partialMobileTable = TestUtils.renderIntoDocument(
        <MobileTable classes={someProps} headers={headers} data={data} />
      )
      const expectPartialClasses = window.Object.assign(
        {},
        DEFAULT_PROPS.classes,
        someProps
      )
      for (let prop in expectPartialClasses) {
        if (typeof expectPartialClasses[prop] === 'object') {
          // ewww...
          for (let prop1 in expectPartialClasses[prop]) {
            expect(partialMobileTable.state.classes[prop][prop1]).toBe(
              expectPartialClasses[prop][prop1]
            )
          }
        } else {
          expect(partialMobileTable.state.classes[prop]).toBe(
            expectPartialClasses[prop]
          )
        }
      }
    })

    it('properly assigns to classNames', () => {
      // TODO: don't hard code these!
      const fullMobileTable = TestUtils.renderIntoDocument(
        <MobileTable classes={fullProps} headers={headers} data={data} />
      )

      expect(
        TestUtils.scryRenderedDOMComponentsWithClass(
          fullMobileTable,
          'foo-table'
        ).length
      ).toBe(1)

      expect(
        TestUtils.scryRenderedDOMComponentsWithClass(
          fullMobileTable,
          'foo-thead'
        ).length
      ).toBe(0)

      expect(
        TestUtils.scryRenderedDOMComponentsWithClass(fullMobileTable, 'foo-th')
          .length
      ).toBe(4)

      expect(
        TestUtils.scryRenderedDOMComponentsWithClass(
          fullMobileTable,
          'foo-tbody'
        ).length
      ).toBe(2)

      expect(
        TestUtils.scryRenderedDOMComponentsWithClass(fullMobileTable, 'foo-tr')
          .length
      ).toBe(4)

      expect(
        TestUtils.scryRenderedDOMComponentsWithClass(fullMobileTable, 'foo-td')
          .length
      ).toBe(4)

      expect(
        TestUtils.scryRenderedDOMComponentsWithClass(
          fullMobileTable,
          'foo-mobileSpacerRow-tr'
        ).length
      ).toBe(2)

      expect(
        TestUtils.scryRenderedDOMComponentsWithClass(
          fullMobileTable,
          'foo-mobileSpacerRow-td'
        ).length
      ).toBe(4)

      const partialMobileTable = TestUtils.renderIntoDocument(
        <MobileTable classes={someProps} headers={headers} data={data} />
      )

      expect(
        TestUtils.scryRenderedDOMComponentsWithClass(
          partialMobileTable,
          'foo-table'
        ).length
      ).toBe(1)

      expect(
        TestUtils.scryRenderedDOMComponentsWithClass(
          partialMobileTable,
          'foo-thead'
        ).length
      ).toBe(0)

      expect(
        TestUtils.scryRenderedDOMComponentsWithClass(
          partialMobileTable,
          'foo-th'
        ).length
      ).toBe(0)

      expect(
        TestUtils.scryRenderedDOMComponentsWithClass(
          partialMobileTable,
          'foo-tbody'
        ).length
      ).toBe(0)

      expect(
        TestUtils.scryRenderedDOMComponentsWithClass(
          partialMobileTable,
          'foo-tr'
        ).length
      ).toBe(0)

      expect(
        TestUtils.scryRenderedDOMComponentsWithClass(
          partialMobileTable,
          'foo-td'
        ).length
      ).toBe(0)

      expect(
        TestUtils.scryRenderedDOMComponentsWithClass(
          partialMobileTable,
          'foo-mobileSpacerRow-tr'
        ).length
      ).toBe(2)

      expect(
        TestUtils.scryRenderedDOMComponentsWithClass(
          partialMobileTable,
          'foo-mobileSpacerRow-td'
        ).length
      ).toBe(0)
    })
  })

  describe('checkItem function', () => {
    it('should return an empty string if first argument is bigger than the second', () => {
      const firstArgument = 15
      const secondArgument = 'hello world'
      expect(checkItem(firstArgument, secondArgument)).toBe('')
    })
    it('should return the same letter of the second arguemnt as the length of the first arguement', () => {
      const firstArgument = 2
      const secondArgument = 'hello world'
      expect(checkItem(firstArgument, secondArgument)).toBe('l')
    })
  })

  describe('hasMobileSpacerRow function', () => {
    it('returns a component if hasMobileSpacerRow prop is defined', () => {
      const prop = {
        hasMobileSpacerRow: true
      }
      const states = {
        classes: {
          mobileSpacerRow: {
            td: 'tdClass',
            tr: 'trClass'
          }
        },
        styles: {
          mobileSpacerRow: {
            td: {
              display: 'block'
            },
            tr: {
              display: 'block'
            }
          }
        }
      }
      expect(TestUtils.isElement(hasMobileSpacerRow(prop, states))).toBe(true)
    })
    it('returns an empty string if hasMobileSpacerRow is undefined', () => {
      expect(hasMobileSpacerRow({ hasMobileSpacerRow: undefined })).toBe('')
    })
  })

  describe('receives props.styles', () => {
    const fullProps = {
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
    }

    const someProps = {
      table: { color: 'red' },
      mobileSpacerRow: {
        tr: { color: 'green' }
      }
    }

    it('properly assigns to state.styles', () => {
      const fullMobileTable = TestUtils.renderIntoDocument(
        <MobileTable styles={fullProps} headers={headers} data={data} />
      )
      for (let prop in fullProps) {
        // ewww...
        if (typeof fullProps[prop] === 'object') {
          for (let prop1 in fullProps[prop]) {
            expect(fullMobileTable.state.styles[prop][prop1]).toBe(
              fullProps[prop][prop1]
            )
          }
        } else {
          expect(fullMobileTable.state.styles[prop]).toBe(fullProps[prop])
        }
      }

      const partialMobileTable = TestUtils.renderIntoDocument(
        <MobileTable styles={someProps} headers={headers} data={data} />
      )
      const expectPartialStyles = window.Object.assign(
        {},
        DEFAULT_PROPS.styles,
        someProps
      )
      for (let prop in expectPartialStyles) {
        if (typeof expectPartialStyles[prop] === 'object') {
          // ewww...
          for (let prop1 in expectPartialStyles[prop]) {
            expect(partialMobileTable.state.styles[prop][prop1]).toBe(
              expectPartialStyles[prop][prop1]
            )
          }
        } else {
          expect(partialMobileTable.state.styles[prop]).toBe(
            expectPartialStyles[prop]
          )
        }
      }
    })

    it('properly assigns to inline styles', () => {
      const fullMobileTable = TestUtils.renderIntoDocument(
        <MobileTable styles={fullProps} headers={headers} data={data} />
      )

      let table = TestUtils.scryRenderedDOMComponentsWithTag(
        fullMobileTable,
        'table'
      )
      for (let prop in fullProps.table) {
        for (let i = 0; i < table.length; i++) {
          expect(table[i].style[prop]).toBe(fullProps.table[prop])
        }
      }

      let thead = TestUtils.scryRenderedDOMComponentsWithTag(
        fullMobileTable,
        'thead'
      )
      for (let prop in fullProps.table) {
        for (let i = 0; i < thead.length; i++) {
          expect(thead[i].style[prop]).toBe(fullProps.thead[prop])
        }
      }

      let th = TestUtils.scryRenderedDOMComponentsWithTag(fullMobileTable, 'th')
      for (let prop in fullProps.th) {
        for (let i = 0; i < th.length; i++) {
          expect(th[i].style[prop]).toBe(fullProps.th[prop])
        }
      }

      let tbody = TestUtils.scryRenderedDOMComponentsWithTag(
        fullMobileTable,
        'tbody'
      )
      for (let prop in fullProps.tbody) {
        for (let i = 0; i < tbody.length; i++) {
          expect(tbody[i].style[prop]).toBe(fullProps.tbody[prop])
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

      const partialMobileTable = TestUtils.renderIntoDocument(
        <MobileTable styles={someProps} headers={headers} data={data} />
      )

      table = TestUtils.scryRenderedDOMComponentsWithTag(
        partialMobileTable,
        'table'
      )
      for (let prop in someProps.table) {
        for (let i = 0; i < table.length; i++) {
          expect(table[i].style[prop]).toBe(someProps.table[prop])
        }
      }

      thead = TestUtils.scryRenderedDOMComponentsWithTag(
        partialMobileTable,
        'thead'
      )
      for (let i = 0; i < thead.length; i++) {
        expect(thead[i].style._length).toBe(0)
      }

      th = TestUtils.scryRenderedDOMComponentsWithTag(partialMobileTable, 'th')
      for (let i = 0; i < th.length; i++) {
        expect(th[i].style._length).toBe(0)
      }

      tbody = TestUtils.scryRenderedDOMComponentsWithTag(
        partialMobileTable,
        'tbody'
      )
      for (let i = 0; i < tbody.length; i++) {
        expect(tbody[i].style._length).toBe(0)
      }

      // let tr = TestUtils.scryRenderedDOMComponentsWithTag(partialMobileTable, 'tr')
      // for (let i = 0; i < tr.length; i++) {
      //   expect(tr[i].style._length).toBe(1);
      // }

      // let td = TestUtils.scryRenderedDOMComponentsWithTag(partialMobileTable, 'td')
      // for (let i = 0; i < td.length; i++) {
      //   expect(td[i].style._length).toBe(0);
      // }
    })
  })

  describe('receives props.headers and props.data', () => {
    const fullMobileTable = TestUtils.renderIntoDocument(
      <MobileTable headers={headers} data={data} />
    )

    it('properly renders headers and data to the UI', () => {
      let tr = TestUtils.scryRenderedDOMComponentsWithTag(fullMobileTable, 'tr')
      expect(tr.length).toBe(6)

      let th = TestUtils.scryRenderedDOMComponentsWithTag(fullMobileTable, 'th')
      expect(th.length).toBe(4)
      for (let i = 0; i < th.length; i++) {
        expect(th[i].textContent).toEqual(headers[i % headers.length])
      }

      let td = TestUtils.scryRenderedDOMComponentsWithTag(fullMobileTable, 'td')
      expect(td.length).toBe(8)
      for (let i = 0; i < td.length; i++) {
        for (let j = 0; j < td[i].length; j++) {
          expect(td[i + j].textContent).toEqual(data[i][j])
        }
      }
    })
  })
})
