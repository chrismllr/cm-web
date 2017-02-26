import React from 'react'
import MaterialIcon from '../MaterialIcon'
import format from 'date-fns/format'

export default () => (
  <div className="Footer">
    <div className="container Footer-wrapper">
      <div className="Footer-col1">
        <p>&copy; Chris Miller {format(new Date(), 'YYYY')}</p>
      </div>
      <div className="Footer-col2">
        <a><MaterialIcon icon="mail" /> E-mail</a>
        <a><MaterialIcon icon="instagram" /> Instagram</a>
        <a><MaterialIcon icon="facebook" /> Facebook</a>
      </div>
    </div>

    <style jsx>{`
      .Footer {
        padding: 2rem 0;
      }

      .Footer-wrapper {
        display: flex;
      }

      .Footer-col1, .Footer-col2 {
        width: 50%;
      }

      .Footer-col1 {
        margin-right: 1.5rem;
      }

      .Footer p, .Footer a {
        font-size: .83rem;
        display: block;
        opacity: 0.5;
      }

      .Footer a {
        transition: .5s ease-in-out;
        cursor: pointer;
      }

      .Footer i {
        margin-right: .5rem;
        padding-left: .1rem;
      }

      .Footer a:hover {
        opacity: 1;
      }
    `}</style>
  </div>
)
