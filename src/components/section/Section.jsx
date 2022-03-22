import React from 'react'

export default function Section({ backGround = 'primary', children }) {
  return (
    <>
      <div className="section--header"></div>
      <section className={backGround}>
        {
          ( backGround === 'primary')
            ? children
            : <div className="section--container">{ children }</div>
        }
      </section>
    </>
  )
}
