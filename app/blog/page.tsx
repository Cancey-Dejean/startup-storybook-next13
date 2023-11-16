import SingleBlog from "@/components/Blog/SingleBlog";
import { blogData } from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/BreadCrumb";
import Pagination from "@/components/Common/Pagination/Pagination";

interface BlogProps {}
const Blog = ({}: BlogProps) => {
  return (
    <>
      <Breadcrumb
        pageName="Blog Grid"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogData.map((item, i) => (
              <div
                key={item.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog  />
              </div>
            ))}
          </div>

          <div className="wow fadeInUp -mx-4 flex flex-wrap" data-wow-delay=".15s">
            <div className="w-full px-4">
              <Pagination />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
