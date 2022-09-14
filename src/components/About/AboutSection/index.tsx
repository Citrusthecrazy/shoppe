import React, { FC } from "react";

type AboutSectionProps = {
  title: string;
  image: string;
  description: string;
  description2?: string;
};

const AboutSection: FC<AboutSectionProps> = ({
  title,
  image,
  description,
  description2,
}) => {
  return (
    <section>
      <h2 className="text-xl">{title}</h2>
      <div className="mb-3" />
      <img src={image} alt="top trends" className="w-full" />
      <div className="mb-4" />
      <p className="text-xs leading-5">{description}</p>
      <div className="mb-4" />
      {description2 && <p className="text-xs leading-5">{description2}</p>}
    </section>
  );
};

export default AboutSection;
