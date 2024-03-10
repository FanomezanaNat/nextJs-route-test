import React from 'react'

export default function Header(props:{className:string}) {

    const {className}=props;
  return (
    <div className={className}>
      <p>Header</p>
    </div>
  )
}
