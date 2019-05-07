import React from 'react'
import App from '../home-page/homePageRoutes'
import { Provider } from 'react-redux'
import setupStore from './store'

export const TradingApp = () =>
{
  return (
    <Provider store={setupStore()}>
      <App />
    </Provider>
  )
}
