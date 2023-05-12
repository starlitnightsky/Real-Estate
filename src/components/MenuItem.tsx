import React, { useContext } from 'react'

import { useNavigate } from 'react-router-dom'

import { AiFillPropertySafety } from 'react-icons/ai'
import { MdSpaceDashboard, MdDeveloperBoard } from 'react-icons/md'
import { IoMdWallet } from 'react-icons/io'
import { FaUserPlus } from 'react-icons/fa'
import { IoIosJournal } from 'react-icons/io'
import { MdSettings } from 'react-icons/md'
import { HiPlusCircle } from 'react-icons/hi'
import { RiArticleFill } from 'react-icons/ri'
import { ImUpload } from 'react-icons/im'
import { TfiLayoutListPost } from 'react-icons/tfi'
import { BsPersonLinesFill } from 'react-icons/bs'

import { NavigationContext } from '../App'
type ICON = 'appStore' | 'fileText' | 'calendar' | 'setting' | any

export interface MenuItemProps {
  title: string
  type: ICON
  active?: boolean
  setNavigation: (val: string) => void
}

const ICONS: Record<ICON, React.ReactNode> = {
  dashboard: (
    <MdSpaceDashboard className='w-[25px] h-[25px] ml-[15px] text-[rgba(255,255,255,0.8)]' />
  ),
  development: (
    <MdDeveloperBoard className='w-[25px] h-[25px] ml-[15px] text-[rgba(255,255,255,0.8)]' />
  ),
  payment: (
    <IoMdWallet className='w-[25px] h-[25px] ml-[15px] text-[rgba(255,255,255,0.8)]' />
  ),
  leads: (
    <AiFillPropertySafety className='w-[25px] h-[25px] ml-[15px] text-[rgba(255,255,255,0.8)]' />
  ),
  agent: (
    <FaUserPlus className='w-[25px] h-[25px] ml-[15px] text-[rgba(255,255,255,0.8)]' />
  ),
  agentlist: (
    <BsPersonLinesFill className='w-[25px] h-[25px] ml-[15px] text-[rgba(255,255,255,0.8)]' />
  ),
  property: (
    <MdSettings className='w-[25px] h-[25px] ml-[15px] text-[rgba(255,255,255,0.8)]' />
  ),
  propertyadd: (
    <HiPlusCircle className='w-[25px] h-[25px] ml-[15px] text-[rgba(255,255,255,0.8)]' />
  ),
  developmentlist: (
    <TfiLayoutListPost className='w-[25px] h-[25px] ml-[15px] text-[rgba(255,255,255,0.8)]' />
  ),
  journals: (
    <IoIosJournal className='w-[25px] h-[25px] ml-[15px] text-[rgba(255,255,255,0.8)]' />
  ),
  articles: (
    <RiArticleFill className='w-[25px] h-[25px] ml-[15px] text-[rgba(255,255,255,0.8)]' />
  ),
  uploadimages: (
    <ImUpload className='w-[25px] h-[25px] ml-[15px] text-[rgba(255,255,255,0.8)]' />
  ),
}

export const MenuItem: React.FC<MenuItemProps> = ({
  title,
  type,
  setNavigation,
}) => {
  const currentNavigation = useContext(NavigationContext)
  const active = currentNavigation === type
  const navigate = useNavigate()
  return (
    <div
      className='flex mt-1 w-[250px] h-[50px] hover:bg-[rgb(255,255,255,0.1)] rounded-[17px] items-center select-none cursor-pointer active:bg-[rgb(0,0,0,0.2)] '
      style={active ? { backgroundColor: 'rgb(255,255,255,0.1' } : {}}
      onClick={() => {
        setNavigation(type)
        navigate(type)
      }}
    >
      {ICONS[type]}
      {/* {type === 1 ? (
        <AiFillAppstore className='w-[25px] h-[25px] ml-[15px] text-[rgba(255,255,255,0.8)]' />
      ) : type === 2 ? (
        <AiFillFileText className='w-[25px] h-[25px] ml-[15px] text-[rgba(255,255,255,0.8)]' />
      ) : type === 3 ? (
        <AiFillCalendar className='w-[25px] h-[25px] ml-[15px] text-[rgba(255,255,255,0.8)]' />
      ) : (
        <AiFillSetting className='w-[25px] h-[25px] ml-[15px] text-[rgba(255,255,255,0.8)]' />
      )} */}
      <h2 className='ml-[10px] text-[rgba(255,255,255,0.8)] font-semibold'>
        {title}
      </h2>
    </div>
  )
}
