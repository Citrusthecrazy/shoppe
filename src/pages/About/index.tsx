import topTrends from "../../assets/top-trends.png";
import producedWithCare from "../../assets/produced-with-care.png";
import { AboutSection } from "../../components";
const About = () => {
  return (
    <main className="mx-4 lg:mx-auto lg:max-w-[672px]">
      <div className="mb-9 lg:mb-24" />
      <h1 className="text-xl lg:text-center lg:text-[33px]">About</h1>
      <div className="mb-6" />
      <p className="hidden lg:block text-center text-xl">
        Who we are and why we do what we do!
      </p>

      <div className="mb-9" />
      <p className="text-xs leading-5 lg:text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
        maximus elit ex vitae libero. Sed quis mauris eget
      </p>

      <div className="mb-9" />

      <AboutSection
        title="Top trends"
        image={topTrends}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a"
        description2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
        maximus elit ex vitae libero. Sed quis mauris eget"
      />

      <div className="mb-9" />

      <AboutSection
        title="Produced with care"
        image={producedWithCare}
        description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
        maximus elit ex vitae libero. Sed quis mauris eget"
      />
      <div className="mb-24" />
    </main>
  );
};

export default About;
