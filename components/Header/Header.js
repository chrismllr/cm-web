import React from 'react'
import Link from 'next/link'

export default () => (
  <div className="Header">
    <div className="container">
      <Link prefetch href="/">
        <h1>Chris Miller</h1>
      </Link>
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
    `}</style>
  </div>
)
