import React from 'react'

const Container = ({children, className}) => {
  return (
    <div className={`w-full sm:px-6  px-5 lg:px-10 xl:px-12   ${className} `}>{children}</div>
  )  
}

export default Container