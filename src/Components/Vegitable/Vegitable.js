import React from 'react';

const Vegitable = ({vegitable}) => {
    console.log(vegitable)
    const {name, photo, details} = vegitable;
    return (
       <div className="col-md-4 col-sm-12 border border-primary my-2 d-flex justify-content-center" style={{width:"300px", height:"350px"}}>
           <div className='mt-2'>
                <img className='img-fluid rounded mb-2' width="250px" src={photo} alt={name} />
                <h4>{name}</h4>
                <p>{details}</p>
                <button className='btn btn-primary'>Add To Cart </button>
           </div>
       </div>
    );
};

export default Vegitable;