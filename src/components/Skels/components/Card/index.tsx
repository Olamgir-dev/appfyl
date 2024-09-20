import React from 'react'
import { Col, Row } from 'react-grid-system'
import { ReactSVG } from 'react-svg'

function index({
    title,
    text,
    img,
    index
}: {
    title: string,
    text: string,
    img: string,
    index: number
}) {
    return (
        <Col className='w-[100%] mix:my-3 md:my-7   md:h-[230px]' xs={12} sm={12} md={6}  >
            <div className=' p-4 mix:block md:flex md:m-4  md:absolute rounded-[15px]  bg-[#f6f6f6]'>
                <div className='py-5 pl-4'>
                    <h1 className={`text-[24px] font-[700]  mix:leading-6 ${index == 3 ? 'md:w-[300px]' : ''} `} style={{ lineHeight: '30px' }}>{title}</h1>
                    <p className='text-[18px] mt-3 text-[#7a7a7a] mix:leading-5 text-[300]'>{text}</p>
                </div>
                {/* <Col xs={index == 3 ? 4 : 5} className='absolute w-[230px] h-full'> */}
                <img className={` md:relative bottom-0  
                        ${index == 0 ? 'md:bottom-[-25px]' : index == 3 ? 'md:bottom-[-35px] md:right-[10px]' : index == 2 ? 'md:bottom-[-48px] md:right-[-20px]' : 'md:bottom-[-35px]'}
                         md:w-[230px] mix:w-[200px] mix:mx-auto  mix:mt-[-20px] mix:mb-[-20px] md:mb-0 block`} src={img} />
                {/* </Col>
                <ReactSVG src={img} /> */}
            </div>
        </Col>
    )
}

export default index