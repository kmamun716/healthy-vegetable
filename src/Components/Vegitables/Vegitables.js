import React, { useEffect, useState } from 'react';
import vegitables from '../../data/database';
import ItemDetails from '../ItemDetails/ItemDetails';
import Vegitable from '../Vegitable/Vegitable';


const Vegitables = () => {
    const [vegs, setVegs] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{        
        setVegs(vegitables)
    },[]);
    const handleClick=(selectedItem)=>{
        if(cart.length>=4){
            alert("do not able to add more item") 
        }else{
            const duplicate = cart && cart.find(item=>item.id===selectedItem.id);
            if(!duplicate){
                setCart([...cart, selectedItem]);            
            } else {   
                alert("this item alreade added")         
            }
        }
    };
    const handleRemoveItem=id=>{
        const newCart=cart.filter(item=>item.id!==id);
        setCart(newCart)
    };
    const handleRandom=()=>{
        const random = Math.floor(Math.random()*cart.length);
        const select = cart.find(item=>item.id===cart[random].id)
        setCart([select])
    }
    return (
        <div className='row'>
            <div className='col-9 gap-2 row'>
                {
                    vegs.map(veg=><Vegitable key={veg.id} handleClick={handleClick} vegitable={veg} />)
                }
            </div>
            <div className='col-3 bg-success p-2 text-dark bg-opacity-10'>
                <div className='sticky-top d-flex justify-content-center'>
                    <div>
                        <h4 >Selected Items:</h4>
                        <ul>
                            {
                              cart.length ? cart.map(item=><ItemDetails item={item} key={item.id} handleRemoveItem={handleRemoveItem} />): <p className='text-danger'>Please Selcet Some Item</p>
                            }
                        </ul>
                        {
                            cart.length > 0 && <div><button className='btn btn-info' onClick={handleRandom}>Choose 1 For Me</button> <button className="btn btn-danger" onClick={()=>setCart([])}>Choose Again</button></div>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vegitables;