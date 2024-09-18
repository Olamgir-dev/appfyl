import './App.css';
import { Container } from 'react-grid-system';
import { Header, Navbar, Skels } from './components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <>
      <div style={{
        backgroundColor: '#fafafa',
        height: '750px'
      }} className='mix:h-[900px] md:h-[750px]'>
        <Container style={{
          maxWidth: '1200px',
          height: 'max-content'
        }} className='md:bg-[#fafafa] mix:bg-[#ffffff]'>
          <Navbar />
          <Header />
        </Container>
      </div>
      <div style={{
        backgroundColor: '#ffffff',
      }} className='mix:pl-4 md:px-0'>
        <Container style={{
          maxWidth: '1200px',
          height: 'max-content'
        }} className='bg-[#ffffff] mix:mt-[40px] md:mt-0'>
          <Skels />
        </Container>
      </div>
      {/* <Container style={{
        height: '10vh'
      }}></Container> */}
    </>
  );
}

export default App;
