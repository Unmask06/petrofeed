import React from 'react'
import { renderToString } from 'react-dom/server'
import { Page } from './Page.jsx'

export function render() {
  return renderToString(<React.StrictMode><Page /></React.StrictMode>)
}
