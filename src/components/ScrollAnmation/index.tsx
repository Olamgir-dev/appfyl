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
        // <SectionStyle  >
        <div className='mt-[500px] pt-14 pb-10 h-[200vh] relative overflow-hidden bg-gradient-rotatingimages-overlay'>
            <div
                style={{
                    position: 'relative',
                    marginBottom: '100px',
                    // marginTop: '60px',
                    transform: `rotateZ(10deg) translateX(2000px) `,
                    display: "flex",
                    // marginLeft:'500px'
                    transition: "transform 0.1s ease-out",
                }} className=''>
                {/* line 1  */}
                <div className=' absolute flex h-full flex-col justify-center origin-[50%390%] will-change-transform' 
                style={{
                    transform: `rotateZ(-15deg) translateX(-${(scroll) / 2}px) `,
                    transition: "transform 0.1s ease-out",
                }}>
                    <img className='w-[300px]' style={{
                    }} src={redmi1} alt="404" />
                    <img className='w-[300px] mt-5'
                        src={redmi2} alt="" />
                </div>
                {/* line 2  */}
                <div className='absolute flex h-full flex-col justify-center origin-[50%390%] will-change-transform'
                    style={{
                        transform: `rotateZ(-10deg) translateX(-${(scroll) / 2}px)`,
                        transition: "transform 0.1s ease-out",
                    }}
                >
                    <img className='w-[300px]' src={redmi3} alt="" />
                </div>
                {/* line 3  */}
                <div className='absolute flex h-full flex-col justify-center origin-[50%390%] will-change-transform' style={{
                    transform: `rotateZ(-5deg) translateX(-${(scroll) / 2}px) `,
                    transition: "transform 0.1s ease-out",
                }}>
                    <img className='w-[300px]' src={img1} alt="404" />
                    <img className='w-[300px] mt-5' src={img2} alt="" />
                </div>
                {/* line 4  */}
                <div className=' absolute flex h-full flex-col justify-center origin-[50%390%] will-change-transform'
                    style={{
                        transform: `rotateZ(0deg) translateX(-${(scroll) / 2}px) `,
                        transition: "transform 0.1s ease-out",
                    }}
                >
                    <img className='w-[300px]' src={img3} alt="" />
                </div>
                {/* line 5  */}
                <div className='absolute flex h-full flex-col justify-center origin-[50%390%] will-change-transform' style={{
                    transform: `rotateZ(5deg) translateX(-${(scroll) / 2}px) `,
                    transition: "transform 0.1s ease-out",
                }}>
                    <img className='w-[300px]' src={img4} alt="404" />
                    <img className='w-[300px] mt-5' src={img5} alt="" />
                </div>
                {/* line 6  */}
                <div className='absolute flex h-full flex-col justify-center origin-[50%390%] will-change-transform'
                    style={{
                        transform: `rotateZ(10deg) translateX(-${(scroll) / 2}px) `,
                        transition: "transform 0.1s ease-out",
                    }}
                >
                    <img className='w-[300px]' src={img6} alt="" />
                </div>
                {/* line 7  */}
                <div className='absolute flex h-full flex-col justify-center origin-[50%390%] will-change-transform' style={{
                    position: 'relative',
                    transform: `rotateZ(15deg) translateX(-${(scroll) / 2}px) `,
                    transition: "transform 0.1s ease-out",
                }}>
                    <img className='w-[300px]' src={img7} alt="404" />
                    <img className=' w-[300px] mt-5' src={img8} alt="" />
                </div>

            </div>
        </div>
    )
}

export default Index