import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext';

const Service = () => {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <h1>{theme}</h1>
    </div>
  )
}

export default Service