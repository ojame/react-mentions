import React, { StrictMode } from 'react'
import { render } from 'react-dom'

import Examples from './examples'

const Demo = () => (
  <div>
    <h1>react-mentions</h1>
    <p>
      <span role="img" aria-labelledby="yay!">
        🙌
      </span>
      &nbsp; brought to you by Signavio, docs and code on Github:{' '}
      <a href="https://github.com/signavio/react-mentions">
        https://github.com/signavio/react-mentions
      </a>{' '}
      (BSD license)
    </p>
    <StrictMode>
      <Examples />
    </StrictMode>
  </div>
)

const root = document.getElementById('demo')

let shadow = root.attachShadow({ mode: 'open' })

const mountingPoint = document.createElement('div')

shadow.appendChild(mountingPoint)

render(<Demo />, mountingPoint)

// render(<Demo />, root)
