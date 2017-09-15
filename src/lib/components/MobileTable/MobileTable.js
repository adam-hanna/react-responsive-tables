import React, { Component } from 'react'
import {
  DEFAULT_PROPS,
  DEFAULT_PROPTYPES
} from '../../utils/Defaults'

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
                    {idx2 <= datum.length - 1 ? (
                      <td
                        className={this.state.classes.td}
                        style={this.state.styles.td}
                      >
                        {datum[idx2]}
                      </td>
                    ) : (
                      <td
                        className={this.state.classes.td}
                        style={this.state.styles.td}
                      >
                        {''}
                      </td>
                    )}
                  </tr>
                )
              })}
              {this.props.hasMobileSpacerRow ? (
                <tr
                  className={this.state.classes.mobileSpacerRow.tr}
                  style={this.state.styles.mobileSpacerRow.tr}
                >
                  <td
                    className={this.state.classes.mobileSpacerRow.td}
                    style={this.state.styles.mobileSpacerRow.td}
                  ></td>
                  <td
                    className={this.state.classes.mobileSpacerRow.td}
                    style={this.state.styles.mobileSpacerRow.td}
                  ></td>
                </tr>
              ) : (
                ''
              )}
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
