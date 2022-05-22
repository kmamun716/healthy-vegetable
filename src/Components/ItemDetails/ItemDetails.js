import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const ItemDetails = ({item, handleRemoveItem}) => {
    const {photo, name, id} = item;
    return (
        <li className='d-block'>
            <img src={photo} alt={name} width="70px" className='img-fluid img-thumbnail rounded-circle' />
            <span className='px-2'>{name}</span>
            <FontAwesomeIcon onClick={()=>handleRemoveItem(id)} icon={faTrashCan} />
        </li>
    );
};

export default ItemDetails;