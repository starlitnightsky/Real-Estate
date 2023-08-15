import React, { useState, createContext } from 'react'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import './App.css'

import { 
  SideBarContainer,
  TopBarContainer,
  DashboardContainer,
  PaymentContainer,
  DevelopmentContainer,
  AddAgentContainer,
  AddPropertyContainer,
  LeadsContainer,
  AgentListContainer,
  ListDevelopmentContainer,
  PropertyContainer
} from './containers'

export const NavigationContext = createContext('dashboard')
function App() {
  const [currentNavigation, setCurrentNavigation] = useState('dashboard')

  const changeNavigationValue = (val: string) => {
    setCurrentNavigation(val)
  }
  return (
    <NavigationContext.Provider value={currentNavigation}>
      <div className='App flex flex-row'>
        <BrowserRouter>
          <SideBarContainer setNavigation={changeNavigationValue} />
          <div className='w-[100%] flex flex-col justify-center items-center h-[100vh]'>
            <TopBarContainer setNavigation={changeNavigationValue} />
            <div className='h-[100%] overflow-auto mr-[20px] scroll1 w-full mb-[40px] px-[100px]'>
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
                <Route
                  path='/leads'
                  element={<LeadsContainer />}
                />
                <Route
                  path='/agentlist'
                  element={<AgentListContainer />}
                />
                <Route
                  path='/developmentlist'
                  element={<ListDevelopmentContainer />}
                />
                <Route
                  path='/development'
                  element={<DevelopmentContainer />}
                />
                <Route
                  path='/agent'
                  element={<AddAgentContainer />}
                />
                <Route
                  path='/propertyadd'
                  element={<AddPropertyContainer />}
                />
                <Route
                  path='/property'
                  element={<PropertyContainer />}
                />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </NavigationContext.Provider>
  )
}

export default App
