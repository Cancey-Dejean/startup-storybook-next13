import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";

export const blogData = [
  {
    id: 1,
    title: "Best UI components for modern websites",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-01.jpg",
    authorName: "Samuyl Joshi",
    authorImage: "/images/blog/author-01.png",
    authorDesignation: "Graphic Designer",
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "9 simple ways to improve your design skills",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-02.jpg",
    authorName: "Musharof Chy",
    authorImage: "/images/blog/author-02.png",
    authorDesignation: "Content Writer",
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Tips to quickly improve your coding speed.",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-03.jpg",
    authorName: "Lethium Deo",
    authorImage: "/images/blog/author-03.png",
    authorDesignation: "Graphic Designer",
    tags: ["design"],
    publishDate: "2025",
  },
];



const Blog = () => {
  return (
    <section id="blog" className="bg-primary/5 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Our Latest Blogs"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog title= {blog.title} image={blog.image} paragraph={blog.paragraph} authorImage={blog.authorImage} authorDesignation={blog.authorDesignation} authorName={blog.authorName} tags={blog.tags[0]} publishDate={blog.publishDate} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
