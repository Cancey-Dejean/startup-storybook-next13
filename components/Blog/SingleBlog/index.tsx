import Avatar from "../../../components/atoms/Avatar";
import Image from "next/image";
import Link from "next/link";

// type Author = {

export type Blog = {
  id: number;
  title: string;
  paragraph: string;
  image: string;
  // author: Author;
  authorName: string;
  authorImage: string;
  authorDesignation: string;
  tags: string[];
  publishDate: string;
};

const SingleBlog = ({
  title = "Hello",
  image = "/images/blog/blog-01.jpg",
  paragraph,
  authorImage,
  authorName,
  authorDesignation,
  // author,
  tags,
  publishDate,
}: Blog) => {
  // const { title, image, paragraph, author, tags, publishDate } = blog;
  return (
    <>
      <div
        className="wow fadeInUp relative overflow-hidden rounded-md bg-white shadow-one dark:bg-dark"
        data-wow-delay=".1s"
      >
        <Link href="/" className="relative block h-[220px] w-full">
          <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
            {tags}
          </span>
          <Image
            src={image}
            alt="image"
            width={434}
            height={220}
            className="h-full w-full object-fill"
          />
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <Link
              href="/"
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {title}
            </Link>
          </h3>
          <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
            {paragraph}
          </p>
          <div className="flex items-center">
            <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
              <div className="mr-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  {/* <Image
                    src={authorImage}
                    alt="author"
                    height={40}
                    width={40}
                    className="h-[40px] w-[40px] "
                  /> */}
                  <Avatar image={authorImage} name="" size="small" />
                </div>
              </div>
              <div className="w-full">
                <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                  By {authorName}
                </h4>
                <p className="text-xs text-body-color">{authorDesignation}</p>
              </div>
            </div>
            <div className="inline-block">
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                Date
              </h4>
              <p className="text-xs text-body-color">{publishDate}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
