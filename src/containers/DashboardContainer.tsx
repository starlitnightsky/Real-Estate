import React from 'react'
import {
  SiteTraffic,
  Report,
  AgentsRegistered,
  NewProperties,
  WebScore,
  OnlineVisitors,
} from '../components'

export interface DashboardContainerProps {}

export const DashboardContainer: React.FC<DashboardContainerProps> = () => {
  return (
    <div className='gap-x-[60px] gap-y-[50px] flex flex-wrap pt-0 pb-0 w-[100%] gap'>
      <SiteTraffic />
      <Report />
      <AgentsRegistered />
      <NewProperties />
      <WebScore />
      <OnlineVisitors />
    </div>
  )
}
