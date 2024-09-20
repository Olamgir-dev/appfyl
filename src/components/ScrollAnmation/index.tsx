import React from 'react'
import redmi1 from '../../assets/images/Remini_1.webp';
import redmi2 from '../../assets/images/Remini_2.webp';
import redmi3 from '../../assets/images/Remini_3.webp';
import img1 from '../../assets/images/Evernote_1.webp';
import img2 from '../../assets/images/Evernote_2.webp';
import img3 from '../../assets/images/Evernote_3.webp';
import img4 from '../../assets/images/Splice_1.webp';
import img5 from '../../assets/images/Splice_3.webp';
import img6 from '../../assets/images/Meetup_1.webp';
import img7 from '../../assets/images/Meetup_2.webp';
import img8 from '../../assets/images/Meetup_3.webp';

import { SectionStyle } from './style';
function Index() {
    const [scroll, setScroll] = React.useState(0)

    React.useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                setScroll(window.scrollY - 619)
            }
        })

    }, [window.scrollY]);
    // console.log("scroll", scroll)
    return (
        <SectionStyle  >

            <div
                style={{
                    position: 'relative',
                    // marginTop: '60px',
                    // transform: `rtranslateX(200px) `,
                    // display: "flex",
                    // marginLeft:'500px'
                    // transition: "transform 0.1s ease-out",
                }} className='flex'>
                <div className='flex-col ' style={{
                    // transform: `translateX(${scroll-619}px) `,
                    transform: `rotateZ(-15deg) translateX(-${(scroll) / 2}px) `,
                    transition: "transform 0.1s ease-out",
                    // position: 'absolute',
                    width: '400px'
                    // transform: `rotateX(-${(scroll)/2 / 180}deg)`,
                }}>
                    <img className='w-[400px]' src={redmi1} alt="404" />
                    <img className='w-[400px] mt-5' src={redmi2} alt="" />
                </div>
                <div className='flex-col'
                    style={{
                        marginLeft: '80px',
                        marginTop: '200px',
                        // position: 'absolute',
                        transform: `rotateZ(-10deg) translateX(-${(scroll) / 2}px)`,
                        transition: "transform 0.1s ease-out",
                    }}
                >
                    <img className='w-[300px]' src={redmi3} alt="" />
                </div>
                <div className='flex-col' style={{
                    marginLeft: '80px',
                    // position: 'absolute',
                    transform: `rotateZ(-5deg) translateX(-${(scroll) / 2}px) `,
                    transition: "transform 0.1s ease-out",
                    // transform: `rotateX(-${(scroll) / 180}deg)`,
                }}>
                    <img className='w-[300px]' src={img1} alt="404" />
                    <img className='w-[300px] mt-5' src={img2} alt="" />
                </div>
                <div className='flex-col'
                    style={{
                        marginLeft: '80px',
                        marginTop: '200px',
                        // position: 'absolute',
                        transform: `rotateZ(0deg) translateX(-${(scroll) / 2}px) `,
                        transition: "transform 0.1s ease-out",
                    }}
                >
                    <img className='w-[300px]' src={img3} alt="" />
                </div>
                <div className='flex-col' style={{
                    marginLeft: '80px',
                    // position: 'absolute',
                    transform: `rotateZ(5deg) translateX(-${(scroll) / 2}px) `,
                    transition: "transform 0.1s ease-out",
                    // transform: `rotateX(-${(scroll) / 180}deg)`,
                }}>
                    <img className='w-[300px]' src={img4} alt="404" />
                    <img className='w-[300px] mt-5' src={img5} alt="" />
                </div>
                <div className='flex-col'
                    style={{
                        marginLeft: '80px',
                        marginTop: '200px',
                        // position: 'absolute',
                        transform: `rotateZ(10deg) translateX(-${(scroll) / 2}px) `,
                        transition: "transform 0.1s ease-out",
                    }}
                >
                    <img className='w-[300px]' src={img6} alt="" />
                </div>
                <div className='flex-col' style={{
                    marginLeft: '80px',
                    // position: 'absolute',
                    transform: `rotateZ(15deg) translateX(-${(scroll) / 2}px) `,
                    transition: "transform 0.1s ease-out",
                    // transform: `rotateX(-${(scroll) / 180}deg)`,
                }}>
                    <img className='w-[300px]' src={img7} alt="404" />
                    <img className='w-[300px] mt-5' src={img8} alt="" />
                </div>
                {/* <div
                    style={{
                        marginLeft: '80px',
                        marginTop: '200px',
                        transform: `rotateZ(20deg) translateX(-${(scroll)/2}px)`,
                        transition: "transform 0.1s ease-out",
                    }}
                >
                    <img className='w-[300px]' src={redmi3} alt="" />
                </div> */}
            </div>
        </SectionStyle>
    )
}

export default Index