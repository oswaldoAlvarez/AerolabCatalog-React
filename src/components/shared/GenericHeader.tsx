import React, { FunctionComponent } from 'react'
import coin from '../../assets/icons/coin.svg'

import '../../styles/genericHeader.scss'

interface Props {
    logo: any;
    username: string | null;
    amount: number | null;
    userInfo: () => void;
}

export const GenericHeader: FunctionComponent<Props> = ({ logo, username, amount, userInfo }) => {
    return (
        <div className='headerContainer'>
            <img className='logo' alt='aerolab-logo' src={logo} />
            {username && amount ?
                <div className='userContainer'>
                    <div className='username'>{username}</div>
                    <div className='amountContainer'>
                        {amount}
                        <img src={coin} />
                    </div>
                </div>
                :
                <div className='logIn' onClick={() => userInfo()}>Iniciar Sesión</div>
            }
        </div>
    )
}
