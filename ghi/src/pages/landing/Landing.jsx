import {
  LandContainer,
  Title,
  Div,
  LandBackground,
  OurStory,
  AboutUs,
  Slider
} from "./style";
import Surfboard1 from "../../images/Surfboard1.webp";
import Surfboard2 from "../../images/Surfboard2.webp";
import Surfboard3 from "../../images/Surfboard3.webp";
import Surfboard4 from "../../images/Surfboard4.webp";
import Surfboard5 from "../../images/SurfBoard5.webp";
import SurfVan from "../../images/SurfVan.jpg";
import Shaper from "../../images/Shaper.jpg";
import SliderComponent from '../landing/slider';

const Landing = () => {
  return (
    <LandContainer>
      <LandBackground>
        <Title>Welcome to Quivr</Title>
      </LandBackground>
      <AboutUs>
        <div>
          <h1>About Us</h1>
          <p>
            From the moment you step into our shop, you'll embark on a
            collaborative journey with our skilled shapers. They take the time
            to listen, understand your unique surfing needs, and translate that
            understanding into a design that captures the essence of your
            surfing soul.
          </p>
          <p>
            {" "}
            Whether you're after the speed and agility of a shortboard or the
            graceful glide of a longboard, our shapers possess the knowledge and
            finesse to bring your vision to life. The shaping process at [Shop
            Name] is a fusion of art and science.
          </p>
          <p>
            {" "}
            Our shapers meticulously consider factors such as board dimensions,
            rocker, rails, and concave to create a bespoke surfboard that not
            only performs flawlessly on the waves but also feels like an
            extension of your body.
          </p>
          <p>
            {" "}
            Each subtle curve and contour is crafted with precision, reflecting
            years of experience and a commitment to pushing the boundaries of
            surfboard design.In addition to our dedication to customization, we
            take pride in our commitment to sustainability.
          </p>
          <p>
            Our shapers embrace eco-friendly materials and responsible
            manufacturing practices, ensuring that your custom board not only
            elevates your surfing experience but also contributes to the
            preservation of our oceans.
          </p>
        </div>
        <img src={Shaper} alt="Custom board a shaper made for a client" />
      </AboutUs>
      <SliderComponent />
      <Div>
        <h1>Recently Made</h1>
        <img src={Surfboard1} alt="" />
        <img src={Surfboard2} alt="" />
        <img src={Surfboard3} alt="" />
        <img src={Surfboard5} alt="" />
        <img src={Surfboard4} alt="" />
      </Div>
      <OurStory>
        <div>
          <h1>Our Story</h1>
          <p>
            Nestled in Southern California, Quivr is more than a surfboard shop
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
      </OurStory>
    </LandContainer>
  );
};

export default Landing;
