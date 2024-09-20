import { Col, Row } from "react-grid-system"
import logo from '../../assets/images/LogoS.png'
import { NavbarStyle } from "./style";
import Button from '../Button/index'
import { useState } from "react";
function Index() {
  const [lang, setLang] = useState<string>('En')

  return (
    <NavbarStyle justify="between" align="center">
      <div className="  mix:block md:hidden ">
        <div className="absolute w-full">
          <p className="text-3xl  cursor-pointer bg-[#fff] rounded right-[20px] text-right z-[999] px-2">☰</p>
        </div>
      </div>
      <Col className="mix:hidden md:block" xs={6} sm={6} md={4} lg={5.5} >
        <img className="logo  h-[20px] " alt="logo" src={logo} />
      </Col>
      <Col className="mix:hidden md:block" xs={6} sm={6} md={8} lg={6.5}>
        <Row className="p-0 m-0 gap-6" align="center">
          <a className="opacity-90" href="#">Cases</a>
          <a className="opacity-90" href="#">Features</a>
          <a className="opacity-90" href="#">Faq</a>
          <a className="opacity-90" href="#">Contacts</a>
          <Button className="ml-5">Book a Consultation</Button>
          {['En', 'Ru', 'De'].filter(item => item !== lang).map((item, index) => {
            return <span className="cursor-pointer" key={index} onClick={() => setLang(item)}>{item}</span>
          })}
        </Row>
      </Col>
    </NavbarStyle>
  )
}

export default Index