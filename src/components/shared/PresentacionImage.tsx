import React, { FunctionComponent } from 'react'

import '../../styles/imagenPresentacion.scss'

interface Props {
    image: any;
}

export const PresentacionImage: FunctionComponent<Props> = ({ image }) => {

    return (
        <div className='presentacionContainer'>
            <img className='imagenPresentacion' src={image} alt="imagenPresentacion" />
        </div>
    )
}
