import '../box-styles.css'

import * as React from 'react'

function Box({style, size, ...props}) {
  return (
    <div
      className={'box box--' + size}
      style={{fontStyle: 'italic', ...style}}

      {...props}
    >
    </div>
  )
}

function App() {
  return (
    <div>
      <Box size="small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box size="medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box size="large" style={{backgroundColor: 'orange'}}>
        large orange box
      </Box>
    </div>
  )
}

export default App
