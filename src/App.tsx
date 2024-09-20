import './App.css';
import { Container } from 'react-grid-system';
import { Header, Navbar, Scrooll, Skels } from './components';
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
        <Scrooll />
        <Container>
          <div style={{
            marginTop: '1800px',
            height: '400px',

          }}>
            <h1 className='text-[30px] text-center'>hello world</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odio, deleniti facilis eos tempora voluptatibus, perferendis numquam laudantium non molestias autem ducimus enim cumque saepe minima commodi cupiditate reiciendis? Et porro, voluptatem vel laudantium necessitatibus quasi labore doloribus temporibus quo consequatur tempore fugiat, sit ipsam, optio similique neque! Praesentium quis asperiores, tenetur dignissimos quae velit, repellat perferendis provident, aliquam voluptate rerum corrupti debitis animi. Est similique rem reiciendis atque illo officiis doloremque dolore nulla laboriosam non tenetur eos ex quae, quis harum modi quia eum soluta ea hic quasi inventore? Debitis, laboriosam. Eos, laboriosam. Cupiditate dicta corrupti molestiae illum fugiat voluptate autem reprehenderit quo ex nihil animi vel numquam quisquam, neque nulla explicabo impedit error aliquid praesentium! Unde, magnam odit omnis nemo voluptatibus tenetur ullam nobis possimus sunt a eaque iste, facilis illum soluta? Illo exercitationem adipisci distinctio ex recusandae cum eaque ullam consequuntur hic perferendis, incidunt facere doloremque odit quidem ipsum at corrupti ut, rem doloribus! Velit, et! Reprehenderit natus sunt dolores a, veniam autem veritatis ipsum accusantium dicta velit earum voluptatem iusto rerum tenetur, exercitationem culpa! Sit, iure delectus quas aut impedit non natus voluptatibus eius ullam inventore. Fugiat doloribus sunt cumque illum veritatis minus quas, ipsam id reprehenderit laboriosam molestiae, quidem voluptate ex nisi rerum hic! Ipsam ad rerum repellat consequatur voluptas iure voluptatibus explicabo dolorem mollitia quas facere nulla cupiditate odio exercitationem porro, iusto nobis totam laboriosam illum non beatae temporibus? Temporibus debitis ipsum voluptatibus. Enim eaque reiciendis nemo accusamus odit, commodi similique fugiat earum alias rem, illum veritatis quis labore provident tempore iusto fugit iure. Fugiat quas excepturi natus distinctio doloribus ut sit vitae id suscipit rerum quod facilis iusto quae animi soluta quam, incidunt officia quia similique. Consequatur tempora, odit voluptates quia at voluptas minima! Non, nam neque! Nisi praesentium impedit perferendis alias laboriosam commodi quis sed. Magnam porro dolor labore, quae, voluptas asperiores beatae molestias tempora adipisci, doloribus magni ex eos voluptate illum corporis temporibus voluptatibus dolorem quas. Doloremque distinctio velit ducimus esse quam magnam, ratione placeat, maiores provident quibusdam inventore molestiae amet. Porro ut eveniet deleniti facere consectetur culpa, vitae consequuntur, quis, voluptas praesentium at? Quidem sapiente labore maxime, quae, dignissimos adipisci necessitatibus reprehenderit vitae perferendis officia ducimus modi vel ipsa atque obcaecati nihil nulla debitis laborum. Esse dolorum tenetur molestiae modi, incidunt suscipit minus magnam explicabo est omnis adipisci. Magni alias quae, debitis doloribus in architecto nesciunt officia veritatis consectetur minima earum? Ad quisquam laudantium, ratione sit nesciunt quod nisi voluptatibus ea vitae dolorum nostrum fugit eveniet fuga suscipit obcaecati aliquid placeat deserunt impedit enim ipsa molestias omnis? Consequatur harum porro architecto cupiditate ullam animi, rerum repudiandae omnis nostrum nihil fuga laudantium nesciunt dolorum odio, hic eum labore aut debitis voluptate consectetur ipsa nemo at repellendus. Aliquid assumenda vel nesciunt fugiat, corrupti quos velit nostrum rem placeat vero adipisci. Quae totam, at rerum aperiam est beatae ut, blanditiis dolorem hic quo minima saepe delectus animi mollitia. Doloremque nobis at eligendi reprehenderit repellat eius vel fugiat aliquam modi rem neque accusantium omnis debitis tempore, adipisci, totam distinctio ducimus ut atque? Repellat quas expedita dolorum quis esse, quod consectetur impedit! Alias sunt sapiente aliquid veniam repellendus. Animi corporis quod quisquam, ut modi omnis delectus exercitationem voluptatem incidunt voluptatibus odit expedita error quia harum blanditiis, et fugit! Inventore quaerat iure ad temporibus est, voluptate repellendus! Fuga dolorem sequi, quia, eligendi, ut maiores harum voluptates totam impedit id magni placeat ratione? Eligendi recusandae dolorum sint ab suscipit tenetur reiciendis impedit vel minima reprehenderit eum quam officia, quas qui perferendis ipsa expedita eius animi eaque placeat voluptatum aspernatur. Adipisci quo dolores labore rem autem a earum nemo at quasi non exercitationem natus in nesciunt laudantium quidem modi saepe alias laboriosam, reprehenderit commodi beatae ex, perferendis omnis! Rerum quod cupiditate quam eos dignissimos cum tempore hic. Necessitatibus ex cupiditate ad molestias hic sint iure tempora, odit consectetur, alias aspernatur recusandae? Eaque dolorem repudiandae saepe qui similique, aliquid magni eum nulla impedit voluptatibus veritatis, aut nostrum fugit quisquam obcaecati labore voluptates adipisci blanditiis unde consequuntur cumque. Iste, aliquam hic nisi animi molestiae maxime accusantium perferendis nostrum reiciendis vel tempora sed expedita dolores, id cupiditate in asperiores repellat! Animi illum esse saepe ex eos, vel repellendus blanditiis necessitatibus. Dolores velit quasi maxime natus modi minima aut illo, suscipit perspiciatis. Ratione, eum earum nam odit ab repellendus optio quod quo! Officiis a commodi quos dignissimos libero nisi expedita ad voluptatem accusamus, excepturi asperiores eligendi veritatis ut aliquid quod nemo consequuntur iste sint, vitae quae! Architecto error, nihil voluptatum officiis obcaecati, reiciendis eaque, provident distinctio corporis odit totam ullam! Saepe facere maxime et voluptas vel eius maiores minus consectetur doloremque, praesentium minima obcaecati corporis blanditiis velit at nihil incidunt similique. Ut voluptatum deserunt, sint cumque labore ipsum vero maiores tenetur perspiciatis provident fuga minus cupiditate tempore, nam libero. Vero corporis, libero doloremque consequuntur ea magni eos. In ab voluptate, omnis nulla eius laborum ex, pariatur dignissimos aspernatur maiores delectus necessitatibus. Nulla excepturi, numquam rerum magnam et dolorum beatae quam incidunt quaerat exercitationem, ab voluptatibus neque iure natus ad doloribus, ut qui asperiores quis? Laboriosam beatae dolores sequi magnam explicabo voluptatibus earum. Omnis a ducimus suscipit sit, fuga dignissimos perspiciatis odio animi adipisci rerum porro iure deserunt, optio in ex neque facere doloribus. Magnam alias commodi deleniti in expedita beatae ad aliquid! Ipsum odit porro sunt cum laborum excepturi unde inventore perferendis voluptates, debitis fugit quia sint officiis repellat quam nisi nulla omnis illo, et possimus commodi architecto nihil? Ex iusto quos velit quam quasi aperiam at numquam recusandae dolores nesciunt expedita molestias assumenda eaque perspiciatis sint rem consequatur doloremque placeat, commodi eum. Adipisci, totam id. Aliquid laboriosam nihil, quidem in beatae quam eaque laudantium quaerat tempora voluptate et quis nostrum fuga aut. Ipsam quis, corrupti dolorum reprehenderit repudiandae id possimus libero vitae doloremque. Aspernatur labore distinctio dolorem. Suscipit maxime magnam omnis qui laborum explicabo perferendis minima fuga expedita excepturi, sapiente quis illo laboriosam? Atque, placeat? Dolorem dicta explicabo eaque, dolores ab, repudiandae pariatur incidunt enim qui, neque sint at earum?
          </div>
        </Container>
      </div>
    </>
  );
}

export default App;
