import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Vegitable = ({vegitable, handleClick}) => {
    const {name, photo, details} = vegitable;
    return (
       <div className="col-md-4 col-sm-12 border rounded border-primary my-2 d-flex justify-content-center" style={{width:"300px", height:"400px"}}>
           <div className='mt-2'>
                <img className='img-fluid rounded mb-2' width="250px" src={photo} alt={name} />
                <h4>{name}</h4>
                <p>{details}</p>
                <button className='btn btn-primary' onClick={()=>handleClick(vegitable)}>Add To Cart <FontAwesomeIcon icon={faCartPlus}/></button>
           </div>
       </div>
    );
};

export default Vegitable;