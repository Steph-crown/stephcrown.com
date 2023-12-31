import { APP_ROUTES } from 'Constants'
import { Link } from 'react-router-dom'
import React from 'react'
import { stephcrown } from 'Assets/Pngs'

const DpNameTitle = () => {
  return (
    <Link className='flex items-center ' to={APP_ROUTES.Home}>
      <img src={stephcrown} alt='Steph Crown' className='h-10' />
      <div className='ml-4'>
        <p className='font-MSMediumWide leading-[160%] dark:text-fg/100-dark text-fg/100-light  text-sm xs:text-base'>Stephen Emmanuel</p>
        <p className='leading-[160%] text-fg/50-light dark:text-fg/50-dark font-MSMedium text-xs xs:text-sm'>Software Engineer</p>
      </div>
    </Link>
  )
}

export default DpNameTitle
