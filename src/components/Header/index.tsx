import React, { useEffect, useState } from 'react'
import { HeaderStyle, TextStyle } from './style'
import { Col, Row } from 'react-grid-system';
import Button from '../Button/index';
import phome from '../../assets/images/headerPhone.png';
import img1 from '../../assets/images/headericon1.png';
import img2 from '../../assets/images/headericon2.png';
import img3 from '../../assets/images/headericons3.png';
function Index() {
    const [isMobile, setIsMobile] = useState(false);

    // Custom hook to track window size and set the isMobile state
    const handleResize = () => {
        setIsMobile(window.innerWidth < 768); // 768px is the threshold for 'md'
    };

    useEffect(() => {
        handleResize(); // Set initial value
        window.addEventListener('resize', handleResize); // Listen to resize events
        return () => window.removeEventListener('resize', handleResize); // Clean up
    }, []);
    return (
        <HeaderStyle className='mix: md:h-[500px]'>
            {isMobile && <Col xs={12} md={5} className='flex mix:w-[70%] mix:bg-[#FFFFFF] md:bg-[#FAFAFA] mix:h-[40%] mix:absolute mix:z-[0] ' style={{ justifyContent: 'center' }} >
                <div className=' sm:w-[100%] flex justify-center' data-aos={!isMobile && "fade-left"}>
                    <img className='sm:w-[60%]  md:relative' src={phome} alt="phome" />
                </div>
            </Col>}
            <Col className='mix:mt-[-200px]  md:mt-0  mix:absolute bg-[#FAFAFA]' xs={12} md={7}>
                <TextStyle className='md:text-[38px] mix:mt-[20px] md:mt-0 mix:text-left sm:text-[28px] mix:text-[20px] ' >
                    Development of profitable apps in one month
                </TextStyle>
                <Row className='md:mt-[40px]'>
                    <Col className='mix:flex mix:items-center md:block mix:gap-1 mix:mt-2 ' xs={12} md={4} lg={12} xl={4}>
                        <img src={img1} alt="" />
                        <p className='md:w-[150px] mix:w-[200px] mix:text-[14px]  header-texts'>50+ successfully launched web & mobile apps</p>
                    </Col>
                    <Col className='mix:flex mix:items-center md:block mix:mt-2  mix:gap-1' xs={12} md={4} lg={12} xl={4}>
                        <img src={img2} alt="" />
                        <p className='md:w-[170px] mix:w-[200px] mix:mt-2  mix:text-[14px] header-texts'>Save thousands of $ and months on every app launch</p>
                    </Col>
                    <Col className='mix:flex mix:items-center mix:mt-2 md:block mix:gap-1' xs={12} md={4} lg={12} xl={4}>
                        <img src={img3} alt="" />
                        <p className='md:w-[150px] mix:w-[200px]  mix:text-[14px] header-texts'>We have made a Top 1 AppStore Educational app</p>
                    </Col>
                </Row>
                <Row className='mix:mt-[20px] md:mt-[50px] items-center'>
                    <div data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom">
                        <Button fs='18px' padding='15px 30px'   border={true} className='px-[20px] py-[10px] ml-3' >Sign up for a consultation</Button>
                    </div>
                </Row>
            </Col>
            {!isMobile && <Col xs={12} md={5} className='absolute '>
                <div className='w-[100%] mt-3 flex justify-center -z-10' data-aos="fade-left">
                    <img className='sm:w-[90%]  relative -z-10' src={phome} alt="phome" />
                </div>
            </Col>}
        </HeaderStyle>
    )
}

export default Index