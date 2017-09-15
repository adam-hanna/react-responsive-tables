import React, { Component } from 'react'
import {
  DEFAULT_PROPS,
  DEFAULT_PROPTYPES
} from '../../utils/Defaults'

class DesktopTable extends Component {
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
        <thead
          className={this.state.classes.thead}
          style={this.state.styles.thead}
        >
          <tr
            className={this.state.classes.tr}
            style={this.state.styles.tr}
          >
            {this.props.headers.map((header, idx) => {
              return (
                <th
                  key={idx}
                  className={this.state.classes.th}
                  style={this.state.styles.th}
                >
                  {header}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody
          className={this.state.classes.tbody}
          style={this.state.styles.tbody}
        >
          {this.props.data.map((datum, idx) => {
            return (
              <tr
                key={idx}
                className={this.state.classes.tr}
                style={this.state.styles.tr}
              >
                {datum.map((item, idx2) => {
                  return (  
                    <td
                      key={idx2}
                      className={this.state.classes.td}
                      style={this.state.styles.td}
                    >
                      {item}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}

DesktopTable.propTypes = DEFAULT_PROPTYPES
DesktopTable.defaultProps = DEFAULT_PROPS
  
export default DesktopTable
