import React, { useEffect, useState } from 'react';
import vegitables from '../../data/database';
import ItemDetails from '../ItemDetails/ItemDetails';
import Vegitable from '../Vegitable/Vegitable';


const Vegitables = () => {
    const [vegs, setVegs] = useState([]);
    useEffect(()=>{        
        setVegs(vegitables)
    },[]);
    return (
        <div className='row'>
            <div className='col-9 gap-2 row'>
                {
                    vegs.map(veg=><Vegitable key={veg.id} vegitable={veg} />)
                }
            </div>
            <div className='col-3 bg-success p-2 text-dark bg-opacity-10'>
                <ItemDetails />
            </div>
        </div>
    );
};

export default Vegitables;