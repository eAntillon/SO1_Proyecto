import React from 'react';
import classnames from 'clsx';

export const NewsletterForm = ({ className}) => {
  return (
    <form className={classnames('newsletter-form is-revealing md:flex', className)}>
      <div className="mr-2 flex-shrink flex-grow">
        <label className="hidden" htmlFor="email" aria-hidden="true">
          Email
        </label>
      </div>

      <div className="control">
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Carnet</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Josué David Zea Herrera</td>
              <td>201807159</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Evelyn Alejandra Navarro Ozorio</td>
              <td>201902046</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Erick Daniel Antillón Chinchilla</td>
              <td>201906552</td>
            </tr>
          </tbody>
        </table>
      </div>
    </form>
  )
}
