import { useEffect } from "react";
import $ from "jquery";
import "foundation-sites";

function BlogSimple() {
  useEffect(() => {
    // Initialize Foundation when the component mounts
    $(document).foundation();
  }, []);

  const numbers : string[] = ["One","Two","Three"];

  return (
    <div>
      {/* <!-- Start Top Bar --> */}
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Blog</li>
            {numbers.map((e,idx)=>(
              <li key={idx}>
              <a href="#">{e}</a>
            </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <!-- End Top Bar --> */}

      <div className="callout large primary">
        <div className="row column text-center">
          <h1>Our Blog</h1>
          <h2 className="subheader">Such a Simple Blog Layout</h2>
        </div>
      </div>

      {/* <!-- We can now combine rows and columns when there's only one column in that row --> */}
      <div className="row medium-8 large-7 columns">
        {Array(4).fill(null).map((_ , index)=>(
          <div key={index} className="blog-post">
          <h3>
            Awesome blog post title <small>3/6/2015</small>
          </h3>
          <img
            className="thumbnail"
            src="https://via.placeholder.com/850x350"
          />
          <p>
            Praesent id metus massa, ut blandit odio. Proin quis tortor orci.
            Etiam at risus et justo dignissim congue. Donec congue lacinia dui,
            a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci.
            Quisque eget odio ac lectus vestibulum faucibus eget in metus. In
            pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus.
          </p>
          <div className="callout">
            <ul className="menu simple">
              <li>
                <a href="#">Author: Mike Mikers</a>
              </li>
              <li>
                <a href="#">Comments: 3</a>
              </li>
            </ul>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default BlogSimple;
