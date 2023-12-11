import {
  LandContainer,
  Title,
  Div,
  LandBackground,
  // OurStory,
  AboutUs,
} from "./style";
import Surfboard1 from "../../images/Surfboard1.webp";
import Surfboard2 from "../../images/Surfboard2.webp";
import Surfboard3 from "../../images/Surfboard3.webp";
import Surfboard5 from "../../images/SurfBoard5.webp";
// import SurfVan from "../../images/SurfVan.jpg";
import Shaper from "../../images/Shaper.jpg";
import Carousel from "../../components/carousel/Carousel";
import Slider1 from "../../images/Slider1.png";
import Slider2 from "../../images/Slider2.png";
import Slider3 from "../../images/Slider3.png";

const Landing = () => {
  const items = [Slider1, Slider2, Slider3];
  return (
    <LandContainer>
      <LandBackground>{/* <Title>Welcome to Quivr</Title> */}</LandBackground>
      <AboutUs>
        <div>
          <Title>We make ordering surfboards fun!</Title>
          <p>
            Now you can order a custom surfboard directly with a shaper of your
            choice, and receive real-time updates on the current status of your
            order.
          </p>
          <p>
            Gone are the days of placing an order with a random burnout from the
            shop down the street. Orders are submitted directly to the shaper of
            your choice, removing the likelihood of your order coming back
            messed up.
          </p>
          <p>
            {" "}
            We bring much needed transparency to a process that has been flawed
            for too long. Curious what the status of your order is? Log in to
            find out.
          </p>
        </div>
        <img src={Shaper} alt="Custom board a shaper made for a client" />
      </AboutUs>
      <Carousel items={items} />
      <Div>
        <h1>Recent Orders</h1>
        <img src={Surfboard1} alt="" />
        <img src={Surfboard2} alt="" />
        <img src={Surfboard3} alt="" />
        <img src={Surfboard5} alt="" />
      </Div>
      {/* <OurStory>
        <div>
          <h1>Our Story</h1>
          <p>
            Nestled in Northern California, Quivr is more than a surfboard shop
            - it's a passion project born from the love of the waves. Founded by
            Ian Norstad,Jessica Dickerson, and Micheal Aguilar, it began in a
            modest workshop and quickly grew into a haven for surfers seeking
            personalized boards. Each surfboard at Quivr is a masterpiece,
            carefully crafted from premium materials with a blend of tradition
            and innovation. The shop isn't just about boards; it's a community
            hub, hosting events and workshops that bring surfers together.
            Adapting to changing times, Quivr embraces eco-friendly practices
            and collaborates with local artists, staying true to authenticity.
            Today, it stands as a testament to enduring passion and the pursuit
            of the perfect ride. As the sun sets, the workshop lights flicker,
            illuminating boards waiting to ride the waves. Quivr continues its
            journey - crafting waves, shaping dreams, and celebrating the
            timeless connection between surfers and the sea.
          </p>
        </div>
        <img src={SurfVan} alt="" />
      </OurStory> */}
    </LandContainer>
  );
};

export default Landing;
