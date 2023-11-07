import Text from "../atoms/Text";
import { Button } from "../atoms/Button/Button";
import { HeroImageBottomLeft, HeroImageRight } from "./HeroImages";

export type HeroProps = {
  /**
   * Description goes here
   */
  title?: string;
  /**
   * Description goes here
   */
  subText?: string;
  /**
   * Description goes here
   */
  showImageTopRight?: boolean;
  /**
   * Description goes here
   */
  showImageBottomLeft?: boolean;
  /**
   * Description goes here
   */
  btnOneLabel?: string;
  /**
   * Description goes here
   */
  btnOneLink?: string;
  /**
   * Description goes here
   */
  btnTwoLabel?: string;
  /**
   * Description goes here
   */
  btnTwoLink?: string;
};

const Hero = ({
  title = "Free and Open-Source Next.js Template for Startup & SaaS",
  subText = "Startup is free Next.js template for startups and SaaS business websites comes with all the essential pages,  components, and sections you need to launch a complete business website, built-with Next 13.x and Tailwind CSS.",
  showImageTopRight = true,
  showImageBottomLeft = true,
  btnOneLabel = "🔥 Get Pro",
  btnOneLink = "https://nextjstemplates.com/templates/startup",
  btnTwoLabel = "Star on GitHub",
  btnTwoLink = "https://nextjstemplates.com/templates/saas",
}: HeroProps) => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                {title !== "" && (
                  <Text
                    as="h1"
                    intent="display-one"
                    className="mb-5"
                    fontWeight="bold"
                  >
                    {title}
                  </Text>
                )}

                {subText !== "" && (
                  <Text
                    as="p"
                    intent="body-large"
                    fontWeight="medium"
                    className="mb-12"
                  >
                    {subText}
                  </Text>
                )}

                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  {btnOneLabel !== "" && (
                    <Button
                      label={btnOneLabel}
                      size="large"
                      linkUrl={btnOneLink}
                      fontWeight="semibold"
                    />
                  )}

                  {btnTwoLabel !== "" && (
                    <Button
                      intent="secondary"
                      label={btnTwoLabel}
                      size="large"
                      linkUrl={btnTwoLink}
                      fontWeight="semibold"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {showImageTopRight && (
          <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
            <HeroImageRight />
          </div>
        )}

        {showImageBottomLeft && (
          <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
            <HeroImageBottomLeft />
          </div>
        )}
      </section>
    </>
  );
};

export default Hero;
