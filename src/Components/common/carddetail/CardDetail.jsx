import React from 'react';
import './CardDetail.css';

const CardDetail = ({ dentista }) => {
  return (
    <div className='card-detalles'>
      <div className='container-img'>
        <img src={dentista.imagenUrl} alt={dentista.name} className='img' />
      </div>
      <div className='card-detalles-text'>
        <h2>{dentista.name}</h2>
        <p><strong>Username:</strong> {dentista.username}</p>
        <p><strong>Email:</strong> {dentista.email}</p>
        <p><strong>Phone:</strong> {dentista.phone}</p>
        <p><strong>Website:</strong> {dentista.website}</p>
        <details className='details'>
          <summary><strong>Address</strong></summary>
          <ul className='address-list'>
            {dentista.address && (
              <>
                <li><strong>Street:</strong> {dentista.address.street}</li>
                <li><strong>Suite:</strong> {dentista.address.suite}</li>
                <li><strong>City:</strong> {dentista.address.city}</li>
                <li><strong>Zipcode:</strong> {dentista.address.zipcode}</li>
              </>
            )}
          </ul>
        </details>
        <details className='details'>
          <summary><strong>Company</strong></summary>
          <ul className='company-list'>
            {dentista.company && (
              <>
                <li><strong>Name:</strong> {dentista.company.name}</li>
                <li><strong>Catch Phrase:</strong> {dentista.company.catchPhrase}</li>
                <li><strong>Business:</strong> {dentista.company.bs}</li>
              </>
            )}
          </ul>
        </details>
      </div>
    </div>
  );
};

export default CardDetail;