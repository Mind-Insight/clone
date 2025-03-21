import React from 'react'


interface layoutProps {
    children: React.ReactNode;
}

const layout: React.FC<layoutProps> = ({ children }) => {
  return (
    <div style={{backgroundColor: "white", height: "100%"}}>
      {children}
    </div>
  )
}

export default layout
