import React from 'react';

function Blog() {

  interface Content {
    title: string;
    description: string[];
  }
  const numbers: string[] = ["One", "Two", "Three", "Four"];
  const content: Content[] = [
    {
      title: "Categories",
      description: ["Skyler", "Jesse", "Mike", "Holly"],
    },
    {
      title: "Authors",
      description: ["Skyler", "Jesse", "Mike", "Holly"],
    },
  ];

  const pages :number[] = [1,2,3,4,12,13];

  return (
    <div>
      {/* <!-- Start Top Bar --> */}
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Yeti Agency</li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            {numbers.map((e, idx) => (
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
        </div>
      </div>

      <div className="row" id="content">
        <div className="medium-8 columns">
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <div key={index} className="blog-post">
                <h3>
                  Awesome blog post title <small>3/6/2015</small>
                </h3>
                <img
                  className="thumbnail"
                  src="https://via.placeholder.com/850x350"
                />
                <p>
                  Praesent id metus massa, ut blandit odio. Proin quis tortor
                  orci. Etiam at risus et justo dignissim congue. Donec congue
                  lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu
                  ullamcorper orci. Quisque eget odio ac lectus vestibulum
                  faucibus eget in metus. In pellentesque faucibus vestibulum.
                  Nulla at nulla justo, eget luctus.
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
        <div className="medium-3 columns" data-sticky-container>
          <div className="sticky" data-sticky data-anchor="content">
            {content.map((e, idx) => (
              <div key={idx}>
                <h4>{e.title}</h4>
                <ul>
                  {e.description.map((desc, subIdx) => (
                    <li key={subIdx}>
                      <a href="#">{desc}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="row column">
        <ul className="pagination" role="navigation" aria-label="Pagination">
          <li className="disabled">Previous</li>
          <li className="current">
            <span className="show-for-sr">You're on page</span> 1
          </li>
          {pages.slice(1,4).map((e,idx)=>(
           <li key={idx+1}>
           <a href="#" aria-label={`Page ${idx+1}`}>
             {e}
           </a>
         </li>
         ))}
          <li className="ellipsis"></li>
         {pages.slice(4).map((e,idx)=>(
           <li key={idx+4}>
           <a href="#" aria-label={`Page ${idx+1}`}>
             {e}
           </a>
         </li>
         ))}
          <li>
            <a href="#" aria-label="Next page">
              Next
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Blog;
