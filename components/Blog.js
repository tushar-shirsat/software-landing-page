import Blog_card from "./blog_card";

const Blog = () => {
  return (
    <section className="blog">
      <div className="blog-container">
        <h1 style={{ marginBottom: "20px" }}>
          Have A Look Creative <span>Blogs</span>{" "}
        </h1>
        <p>
          Softino Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderi
        </p>

        <div className="blog-container_section">
          <div className="blog-container_section-left">
            <Blog_card src="http://themeht.com/softino/html/ltr/images/blog/01.jpg" title="Softino Performance Based Software" />
            <Blog_card src="http://themeht.com/softino/html/ltr/images/blog/02.jpg" title="latest Software design in features" />
          </div>
          <div className="blog-container_section-right">
            <Blog_card src="http://themeht.com/softino/html/ltr/images/blog/01.jpg" title="Softino Performance Based Software" />
            <Blog_card src="http://themeht.com/softino/html/ltr/images/blog/02.jpg" title="latest Software design in features" />
            <Blog_card src="http://themeht.com/softino/html/ltr/images/blog/blog-thumb/03.jpg" title="All Powerful Design feature In Softino" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
