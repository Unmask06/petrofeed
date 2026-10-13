import React from 'react'
import ReactDOM from 'react-dom/client'
import { Page } from './Page.jsx'
import './index.css'

const root = document.getElementById('root')
const page = (
  <React.StrictMode>
    <Page />
  </React.StrictMode>
)

if (root.querySelector('[data-prerendered]')) {
  ReactDOM.hydrateRoot(root, page)
} else {
  ReactDOM.createRoot(root).render(page)
}
