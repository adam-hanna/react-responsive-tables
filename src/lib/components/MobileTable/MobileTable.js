import React, { Component } from 'react'
import { DEFAULT_PROPS, DEFAULT_PROPTYPES } from '../../utils/Defaults'

export const checkItem = (one, two) => {
  return one < two.length ? two[one] : ''
}

export const hasMobileSpacerRow = (properties, componentStates) => {
  return properties.hasMobileSpacerRow ? (
    <tr
      className={componentStates.classes.mobileSpacerRow.tr}
      style={componentStates.styles.mobileSpacerRow.tr}
    >
      <td
        className={componentStates.classes.mobileSpacerRow.td}
        style={componentStates.styles.mobileSpacerRow.td}
      />
      <td
        className={componentStates.classes.mobileSpacerRow.td}
        style={componentStates.styles.mobileSpacerRow.td}
      />
    </tr>
  ) : (
    ''
  )
}

class MobileTable extends Component {
  constructor(props) {
    super(props)

    // note: this breaks mobileSpacerRow.tr and td!
    this.state = {
      classes: window.Object.assign({}, DEFAULT_PROPS.classes, props.classes),
      styles: window.Object.assign({}, DEFAULT_PROPS.styles, props.styles)
    }
  }

  render() {
    return (
      <table
        className={this.state.classes.table}
        style={this.state.styles.table}
      >
        {this.props.data.map((datum, idx) => {
          return (
            <tbody
              key={idx}
              className={this.state.classes.tbody}
              style={this.state.styles.tbody}
            >
              {this.props.headers.map((header, idx2) => {
                let item = checkItem(idx2, datum)
                return (
                  <tr
                    key={idx2}
                    className={this.state.classes.tr}
                    style={this.state.styles.tr}
                  >
                    <th
                      className={this.state.classes.th}
                      style={this.state.styles.th}
                    >
                      {header}
                    </th>
                    <td
                      className={this.state.classes.td}
                      style={this.state.styles.td}
                    >
                      {item}
                    </td>
                  </tr>
                )
              })}
              {hasMobileSpacerRow(this.props, this.state)}
            </tbody>
          )
        })}
      </table>
    )
  }
}

MobileTable.propTypes = DEFAULT_PROPTYPES
MobileTable.defaultProps = DEFAULT_PROPS

export default MobileTable
