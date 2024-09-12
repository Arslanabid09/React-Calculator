import React from 'react'

const button = ({
    text,
    className,
    onClick
}) =>  <button
     onClick={onClick}
     className={`bg-gray-700 text-white p-4 rounded-lg font-bold ${className}`}>{text}</button>
    
    
  


export default button