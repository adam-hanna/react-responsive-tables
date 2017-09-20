import React, { Component } from 'react'
import {
  DEFAULT_PROPS,
  DEFAULT_PROPTYPES
} from './utils/Defaults'

import MobileTable from './components/MobileTable'
import DesktopTable from './components/DesktopTable'

class ResponsiveTable extends Component {
  constructor(props) {
    super(props)

    this.state = {
      resizeTimer: undefined,
      windowWidth: undefined
    }

    this.resizeFunc = this.resizeFunc.bind(this)
  }

  resizeFunc() {
    let resizeTimer = this.state.resizeTimer
    window.clearTimeout(resizeTimer)
    resizeTimer = setTimeout(() => {
      this.setState({windowWidth: window.innerWidth})
    }, 150)

    this.setState({resizeTimer})
  }

  componentDidMount() {
    this.setState({windowWidth: window.innerWidth})
    window.addEventListener('resize', this.resizeFunc)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeFunc)
  }

  render() {
    let Elem = this.state.windowWidth && this.state.windowWidth > this.props.breakpoint ? DesktopTable : MobileTable
    return (
      <Elem {...this.props} />
    )
  }
}

ResponsiveTable.propTypes = DEFAULT_PROPTYPES
ResponsiveTable.defaultProps = DEFAULT_PROPS

export default ResponsiveTable
