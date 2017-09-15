import PropTypes from 'prop-types'

export const DEFAULT_CLASSES = {
  table: '',
  thead: '',
  th: '',
  tbody: '',
  tr: '',
  td: '',
  mobileSpacerRow: {
    tr: '',
    td: ''
  }
}

export const DEFAULT_STYLES = {
  table: {},
  thead: {},
  th: {},
  tbody: {},
  tr: {},
  td: {},
  mobileSpacerRow: {
    tr: {},
    td: {}
  }
}

export const DEFAULT_BREAKPOINT = 480

export const DEFAULT_HEADERS = []

export const DEFAULT_DATA = [[]]

export const DEFAULT_HASMOBILESPACERROW = true

export const DEFAULT_PROPS = {
  breakpoint: DEFAULT_BREAKPOINT,
  classes: DEFAULT_CLASSES,
  styles: DEFAULT_STYLES,
  headers: DEFAULT_HEADERS,
  data: DEFAULT_DATA,
  hasMobileSpacerRow: DEFAULT_HASMOBILESPACERROW
}

export const DEFAULT_PROPTYPES = {
  breakpoint: PropTypes.number,
  classes: PropTypes.shape({
    table: PropTypes.string,
    thead: PropTypes.string,
    th: PropTypes.string,
    tbody: PropTypes.string,
    tr: PropTypes.string,
    td: PropTypes.string,
    mobileSpacerRow:  PropTypes.shape({
      tr: PropTypes.string,
      td: PropTypes.string
    })
  }),
  styles: PropTypes.shape({
    table: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string,PropTypes.number])),
    thead: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string,PropTypes.number])),
    th: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string,PropTypes.number])),
    tbody: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string,PropTypes.number])),
    tr: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string,PropTypes.number])),
    td: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string,PropTypes.number])),
    mobileSpacerRow:  PropTypes.shape({
      tr: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string,PropTypes.number])),
      td: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string,PropTypes.number]))
    })
  }),
  headers: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
      PropTypes.symbol
    ])
  ),
  data: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
        PropTypes.symbol
      ])
    )
  ),
  hasMobileSpacerRow: PropTypes.bool
}
