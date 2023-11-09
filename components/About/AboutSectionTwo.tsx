import Image from "next/image";
import Text from "../atoms/Text";
import { perks2Data } from "./aboutData";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
              />
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="flex flex-col gap-9">
                {perks2Data.map((perk) => (
                  <div className="flex flex-col" key={perk.title}>
                    <Text
                      as="h3"
                      intent="heading-two"
                      fontWeight="bold"
                      className="mb-4"
                    >
                      {perk.title}
                    </Text>

                    <Text as="p" intent="body-medium">
                      {perk.description}
                    </Text>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
