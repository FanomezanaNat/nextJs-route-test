import React from 'react'

export default function Footer(props: { className: string }) {

  const {className}=props
  return (
    <div className={className}>
      <p>footer</p>
    </div>
  )
}
