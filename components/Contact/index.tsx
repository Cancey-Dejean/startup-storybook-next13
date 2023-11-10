import { Button } from "../atoms/Button/Button";
import Input from "../atoms/Input";
import Text from "../atoms/Text";
import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] px-8 py-11 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <Text
                as="h3"
                intent="heading-one"
                fontWeight="bold"
                className="mb-3"
              >
                Need Help? Open a Ticket
              </Text>

              <Text as="p" intent="body" className="mb-12">
                Our support team will get back to you ASAP via email.
              </Text>

              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <Input shadow={false} label="Your Name" />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                        <Input shadow={false} label="Your Email" />
                    </div>
                  </div>

                  <div className="w-full px-4">
                    <div className="mb-8">
                      <Input shadow={false} label=" Your Message" textArea />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <Button label="Submit Ticket" size="large" />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
