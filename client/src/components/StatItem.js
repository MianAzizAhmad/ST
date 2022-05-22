
import Wrapper from '../assets/wrappers/StatItem'
import React from 'react';

const StatsItem = ({ count, title, icon, color, bcg }) => {
  
  return (
<header>
        <span className='count'>{count}</span>
        <span className='icon'>{icon}</span>
      </header>

  )
}

export default StatsItem;
