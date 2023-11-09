import Text from "../atoms/Text";

const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <Text as="h2" intent="display-two" fontWeight="bold" className="mb-4">
          {title}
        </Text>

        <Text as="p" intent="body-medium" className="mb-4">
          {paragraph}
        </Text>
      </div>
    </>
  );
};

export default SectionTitle;
