import React from "react";
import topTrends from "../../assets/top-trends.png";
import producedWithCare from "../../assets/produced-with-care.png";
const About = () => {
  return (
    <main className="mx-4 lg:mx-auto lg:max-w-[1248px]">
      <div className="mb-9" />
      <h1 className="text-xl">About</h1>
      <div className="mb-9" />
      <p className="text-xs leading-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
        maximus elit ex vitae libero. Sed quis mauris eget
      </p>
      <div className="mb-9" />
      <h1 className="text-xl">Top trends</h1>
      <div className="mb-3" />
      <img src={topTrends} alt="top trends" className="w-full" />
      <div className="mb-4" />
      <p className="text-xs leading-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
      </p>
      <div className="mb-4" />
      <p className="text-xs leading-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
        maximus elit ex vitae libero. Sed quis mauris eget
      </p>

      <div className="mb-9" />
      <h1 className="text-xl">Produced with care</h1>
      <div className="mb-3" />
      <img src={producedWithCare} alt="top trends" className="w-full" />
      <div className="mb-4" />
      <p className="text-xs leading-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
        maximus elit ex vitae libero. Sed quis mauris eget
      </p>
      <div className="mb-24" />
    </main>
  );
};

export default About;
