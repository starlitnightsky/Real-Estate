import React from 'react'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import './App.css'

import { SideBarContainer } from './containers/SideBarContainer'
import { TopBarContainer } from './containers/TopBarContainer'
import { DashboardContainer } from './containers/DashboardContainer'
import { PaymentContainer } from './containers/PaymentContainer'
import { DevelopmentContainer } from './containers/DevelopmentContainer'
import { AddAgentContainer } from './containers/AddAgentContainer'

function App() {
  return (
    <div className='App flex flex-row'>
      <BrowserRouter>
        <SideBarContainer />
        <div className='w-[100%] flex flex-col justify-center items-center h-[100vh]'>
          <TopBarContainer />
          <div className='h-[100%] overflow-auto mr-[20px] mb-[20px] scroll1'>
            <Routes>
              <Route
                path='*'
                element={
                  <Navigate
                    to='/dashboard'
                    replace
                  />
                }
              />
              <Route
                index={true}
                path='/dashboard'
                element={<DashboardContainer />}
              />
              <Route
                path='/payment'
                element={<PaymentContainer />}
              />
              <Route
                path='/development'
                element={<DevelopmentContainer />}
              />
              <Route
                path='/agent'
                element={<AddAgentContainer />}
              />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
