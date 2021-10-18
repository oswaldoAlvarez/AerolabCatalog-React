import React, { FunctionComponent, useEffect, useState } from 'react'
import aerolabLogo from '../assets/aerolab-logo.svg'
import { GenericHeader } from './shared/GenericHeader'
import { PresentacionImage } from './shared/PresentacionImage'
import imagenPresentacion from '../assets/header-x1.png'
import flechaDerecha from '../assets/icons/arrow-right.svg'
import { GetUsers, GetProducts } from '../api/functions';
import { CardComponent } from './shared/CardComponent';

import '../styles/body.scss'

export const PrincipalPage: FunctionComponent = () => {
    const [name, setName] = useState<string | null>('')
    const [points, setPoints] = useState<number | null>(0)
    const [productos, setProductos] = useState<any[]>([])
    const [active, setActive] = useState<string>('')
    const [showModal, setShowModal] = useState<boolean>(false)

    useEffect(() => {
        productsInfo()
    }, [])

    const userInfo = async () => {
        const response = await GetUsers()
        if (response) {
            const name = response.name
            const points = response.points
            setName(name)
            setPoints(points)
            console.log('Información de usuario obtenida!')
        } else {
            console.log('Información de usuario sin obtener!')
        }
    }

    const productsInfo = async () => {
        const response = await GetProducts()
        if (response) {
            const producto = response.producto
            setProductos(producto)
            setActive('mostRecent')
            setShowModal(false)
            console.log('Productos obtenidos!')
        } else {
            console.log('No se pudo obtener los productos!')
        }
    }

    const orderByLowest = () => {
        const temp = [...productos]
        temp.sort((a: any, b: any) => {
            if (a.cost < b.cost) {
                return -1
            } else {
                return 1
            }
        })
        setProductos(temp)
        setActive('lowest')
        setShowModal(false)
    }

    const orderByHigher = () => {
        const temp = [...productos]
        temp.sort((a: any, b: any) => {
            if (a.cost < b.cost) {
                return 1
            } else {
                return -1
            }
        })
        setProductos(temp)
        setActive('highest')
        setShowModal(false)
    }

    return (
        <>
            <GenericHeader logo={aerolabLogo} username={name} amount={points} userInfo={userInfo} />
            <PresentacionImage image={imagenPresentacion} />
            <div className='optionsContainer'>
                <div className='options'>
                    <div className={'numberProducts'}>{productos.length} of {productos.length} produts</div>
                    <div className={'orderButtons'}>Sort by:</div>
                    <div className={active === 'mostRecent' ? 'articleOrder activeArticle' : 'articleOrder'} onClick={() => productsInfo()} >Most Recent</div>
                    <div className={active === 'lowest' ? 'articleOrder activeArticle' : 'articleOrder'} onClick={() => orderByLowest()} >Lowest price</div>
                    <div className={active === 'highest' ? 'articleOrder activeArticle' : 'articleOrder'} onClick={() => orderByHigher()} >Highest price</div>
                </div>
                <img src={flechaDerecha} alt="flechaDerecha" />
            </div>
            <div className='productosContainer'>
                {productos &&
                    productos.map((product: any, index: number) => {
                        return <CardComponent cost={product.cost} id={product._id} name={product.name} category={product.category} key={index} image={product.img.hdUrl} showModal={showModal} setShowModal={setShowModal} />
                    })
                }
            </div>
            <div className='optionsContainer'>
                <div className='options'>
                    <div className={'numberProducts'}>{productos.length} of {productos.length} produts</div>
                </div>
                <img src={flechaDerecha} alt="flechaDerecha" />
            </div>
        </>
    )
}
