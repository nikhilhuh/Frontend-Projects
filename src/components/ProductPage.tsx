function ProductPage() {
  
  return (
    <div>  
      {/* <!-- Start Top Bar --> */}
    <div className="top-bar">
      <div className="row">
        <div className="top-bar-left">
          <ul className="dropdown menu" data-dropdown-menu>
            <li className="menu-text">Yeti Store</li>
            <li className="has-submenu">
              <a href="#">One</a>
              <ul className="submenu menu vertical" data-submenu>
                <li><a href="#">One</a></li>
                <li><a href="#">Two</a></li>
                <li><a href="#">Three</a></li>
              </ul>
            </li>
            <li><a href="#">Two</a></li>
            <li><a href="#">Three</a></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li><input type="search" placeholder="Search" /></li>
            <li><button type="button" className="button">Search</button></li>
          </ul>
        </div>
      </div>
    </div>
    {/* <!-- End Top Bar --> */}
    <br />
    {/* <!-- You can now combine a row and column if you just need a 12 column row --> */}
    <div className="row columns">
      <nav aria-label="You are here:" role="navigation">
        <ul className="breadcrumbs">
          <li><a href="#">Home</a></li>
          <li><a href="#">Features</a></li>
          <li className="disabled">Gene Splicing</li>
          <li>
            <span className="show-for-sr">Current: </span> Cloning
          </li>
        </ul>
      </nav>
    </div>
  
    <div className="row">
      <div className="medium-6 columns">
        <img className="thumbnail" src="https://via.placeholder.com/650x350" />
        <div className="row small-up-4">
          {Array(4).fill(null).map((_,index)=>(
            <div key={index} className="column">
            <img className="thumbnail" src="https://via.placeholder.com/250x200" />
          </div>
          ))}
        </div>
      </div>
      <div className="medium-6 large-5 columns">
        <h3>My Awesome Product</h3>
        <p>Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque
          faucibus vestibulum. Nulla at nulla justo, eget luctus tortor. Nulla facilisi. Duis aliquet egestas purus in.
        </p>
  
        <label>Size
          <select>
            <option value="husker">Small</option>
            <option value="starbuck">Medium</option>
            <option value="hotdog">Large</option>
            <option value="apollo">Yeti</option>
          </select>
        </label>
  
        <div className="row">
          <div className="small-3 columns">
            <label htmlFor="middle-label" className="middle">Quantity</label>
          </div>
          <div className="small-9 columns">
            <input type="text" id="middle-label" placeholder="One fish two fish" />
          </div>
        </div>
  
        <a href="#" className="button large expanded">Buy Now</a>
  
        <div className="small secondary expanded button-group">
          <a className="button">Facebook</a>
          <a className="button">Twitter</a>
          <a className="button">Yo</a>
        </div>
      </div>
    </div>
  
    <div className="column row">
      <hr />
      <ul className="tabs" data-tabs id="example-tabs">
        <li className="tabs-title is-active"><a href="#panel1" aria-selected="true">Reviews</a></li>
        <li className="tabs-title"><a href="#panel2">Similar Products</a></li>
      </ul>
      <div className="tabs-content" data-tabs-content="example-tabs">
        <div className="tabs-panel is-active" id="panel1">
          <h4>Reviews</h4>
          {Array(3).fill(null).map((_,index)=>(
            <div key={index} className="media-object stack-for-small">
            <div className="media-object-section">
              <img className="thumbnail" src="https://via.placeholder.com/200x200" />
            </div>
            <div className="media-object-section">
              <h5>Mike Stevenson</h5>
              <p>I'm going to improvise. Listen, there's something you should know about me... about inception. An idea is
                like a virus, resilient, highly contagious. The smallest seed of an idea can grow. It can grow to define
                or destroy you.</p>
            </div>
          </div>
          ))}
          <label>
            My Review
            <textarea placeholder="None"></textarea>
          </label>
          <button className="button">Submit Review</button>
        </div>
        <div className="tabs-panel" id="panel2">
          <div className="row medium-up-3 large-up-5">
            {Array(5).fill(null).map((_,index)=>(
              <div key={index} className="column">
              <img className="thumbnail" src="https://via.placeholder.com/350x200" />
              <h5>Other Product <small>$22</small></h5>
              <p>In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod
                semper, magna diam.</p>
              <a href="#" className="button hollow tiny expanded">Buy Now</a>
            </div>
            ))} 
          </div>
        </div>
      </div>
    </div>
  
    <div className="row column">
      <hr />
      <ul className="menu">
        <li>Yeti Store</li>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li className="float-right">Copyright 2016</li>
      </ul>
    </div></div>
  )
}

export default ProductPage;