import React from 'react'
import { SkelsStyle, TitleSkels } from './style'
import img1 from '../../assets/icons/business-payment1.svg';
import img2 from '../../assets/icons/business-video-prese2.svg';
import img3 from '../../assets/icons/business-presentatio3.svg';
import img4 from '../../assets/icons/business-sales-growt4.svg';
import { Card } from './components';
function Index() {
  const cards = [
    {
      title:'Quick application development',
      text:'We will tell you about the bottlenecks, optimize the functionality, compile a roadmap and launch an application',
      img:img1
    },
    {
      title:'Quick business process automatisation',
      text:"Earning will become faster and easier by minimizing manual work and human errors",
      img:img2
    },
    {
      title:'Quick hypotheses generation & testing',
      text:"The speed of verification is a critical factor of multiple business growth. We have the greatest expertise in speed",
      img:img3
    },
    {
      title:'Increasing monetization and LTV in media projects',
      text:'A lot of advertising and info products provoke a drop in outreach. An application brings a stable profit without the outflow of the audience',
      img:img4
    }
  ]
  return (
    <SkelsStyle >
       <TitleSkels className='px-4'>We are experts in these tasks</TitleSkels>
       {/* <div className='my-5'></div> */}
       {
        cards.map((item, index) => {
          return (
            <Card index={index} key={index} title={item.title} text={item.text} img={item.img}/>
          )
        })
       }
       {/* </div> */}

    </SkelsStyle>
  )
}

export default Index