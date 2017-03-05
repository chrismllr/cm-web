import React from 'react'
import Link from 'next/link'

export default () => (
  <div className="Header">
    <div className="container">
      <Link prefetch href="/">
        <h2>Chris Miller</h2>
      </Link>
      <h5>Web developer</h5>
    </div>

    <style jsx>{`
      .Header {
        padding: 2rem 0;
      }

      .Header h5 {
        opacity: 0.5;
        letter-spacing: .02rem;
      }
    `}</style>
  </div>
)
