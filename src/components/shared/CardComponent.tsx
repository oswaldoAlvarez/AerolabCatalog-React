import React, { FunctionComponent } from 'react'
import buyIconWhite from '../../assets/icons/buy-white.svg'
import buyIconBlue from '../../assets/icons/buy-blue.svg'
import coin from '../../assets/icons/coin.svg'

import '../../styles/cardComponent.scss'

interface Props {
    name: string;
    category: string;
    image: any;
    setShowModal: any;
    showModal: any;
    id: string;
    cost: number;
}

export const CardComponent: FunctionComponent<Props> = ({ name, category, image, showModal, setShowModal, id, cost }) => {

    const showBuyIcon = showModal === id ? buyIconWhite : buyIconBlue;
    const changeModal = () => showModal === id ? setShowModal(false) : setShowModal(id);

    return (
        <div className='cardContainer' onClick={changeModal}>
            <div className='iconContainer'>
                <img className='buyIcon' src={showBuyIcon} alt='BuyIcon' />
            </div>
            <img className='cardImage' src={image} alt='imagenProducto' />
            <div>
                <div className='tipoProducto' key={category}>{category}</div>
                <div className='tituloProducto' key={name}>{name}</div>
            </div>
            {
                showModal === id ?
                    <div className='modal'>
                        <div className='costoTotal'>
                            {cost}
                            <img className='coinModal' src={coin} alt='imagenCoin' />
                        </div>
                        <div className='redeemBtn' >Redeem now</div>
                    </div>
                    :
                    null
            }
        </div>
    )
}