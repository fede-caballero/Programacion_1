import React from 'react'
import IPA from './images/IPA.png'

export const Card = (props) => {
  return (
<div>
    <div className= "row">
      <div className='col'>
        <div className="card" style={{width: '18rem', backgroundColor: 'rgba(50, 200, 0, 0.1)' }}>
          <img src={require(`../components/images/${props.imagen}`)} className="card-img-top" alt=".." />
            <div className="card-body">
              <h1 className='titulo'>{ props.titulo }</h1>
              <p className="texto">{ props.texto }</p>
              <a href="#" class="btn btn-primary">+Info</a>
            </div>
        </div>
    </div>
  </div>
</div>
  )
}

