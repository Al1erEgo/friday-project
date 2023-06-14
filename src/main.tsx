import React from 'react'

import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import { App } from './app/App'

import { store } from '@/store'

createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
)
