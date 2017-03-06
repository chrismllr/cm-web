import React from 'react'

export default () => (
  <div className="Header">
    <div className="container">
      <h1>Chris Miller</h1>
      <h4>Web developer</h4>
    </div>

    <style jsx>{`
      .Header {
        padding: 2rem 0;
      }

      .Header h4 {
        opacity: 0.5;
        letter-spacing: .03rem;
      }

      @media (min-width: 630px) {
        .Header {
          padding: 4rem 0;
        }
      }
    `}</style>
  </div>
)
