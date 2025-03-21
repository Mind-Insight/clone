import React from 'react'


interface layoutProps {
    children: React.ReactNode;
}

const layout: React.FC<layoutProps> = ({ children }) => {
  return (
    <div style={{backgroundColor: "#f6f6f6"}}>
      {children}
    </div>
  )
}

export default layout
