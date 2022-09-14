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
      <h2 className="text-xl lg:text-[36px]">{title}</h2>
      <div className="mb-3" />
      <img src={image} alt="top trends" className="w-full object-cover" />
      <div className="mb-4" />
      <p className="text-xs leading-5 lg:text-base">{description}</p>
      <div className="mb-4" />
      {description2 && (
        <p className="text-xs leading-5 lg:text-base  ">{description2}</p>
      )}
    </section>
  );
};

export default AboutSection;
