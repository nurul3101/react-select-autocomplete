import React from 'react'
import { render } from 'react-dom'
import Demo from './demo'

const rootElement = document.querySelector('#root')

const suggestion = [
  { label: 'Chair', value: 'Chair' },
  { label: 'Sofa', value: 'Sofa' },
  { label: 'Table', value: 'Table' }
]

if (rootElement) {
  render(<Demo suggestion={suggestion} />, rootElement)
}
