import { useEffect } from "react";
import $ from "jquery";
import "foundation-sites"; 

function Portfolio() {
  useEffect(() => {
    // Initialize Foundation when the component mounts
    $(document).foundation();
  }, []);
  return (
    <div className="off-canvas-wrapper">
    <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>

      <div className="off-canvas position-left reveal-for-large" id="my-info" data-off-canvas data-position="left">
        <div className="row column">
          <br />
          <img className="thumbnail" src="https://via.placeholder.com/550x350" />
          <h5>Mike Mikerson</h5>
          <p>Duis aliquet egestas purus in blandit. Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus
            ornare ante, ac egestas est urna sit amet arcu. className aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos. Sed molestie augue sit amet leo.</p>
        </div>
      </div>

      <div className="off-canvas-content" data-off-canvas-content>
        <div className="title-bar hide-for-large">
          <div className="title-bar-left">
            <button className="menu-icon" type="button" data-open="my-info"></button>
            <span className="title-bar-title">Mike Mikerson</span>
          </div>
        </div>


        <div className="callout primary">
          <div className="row column">
            <h1>Hello! This is the portfolio of a very witty person.</h1>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna
              ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra.
              Nulla fringilla.</p>
          </div>
        </div>
        
        <div className="row small-up-2 medium-up-3 large-up-4">
          {Array(12).fill(null).map((_,index)=>(
            <div key={index} className="column">
            <img className="thumbnail" src="https://via.placeholder.com/550x550" />
            <h5>My Site</h5>
          </div>
          ))}
        </div>

        <hr />

        <div className="row">
          <div className="medium-6 columns">
            <h3>Contact Me</h3>
            <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh
              porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.
              Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor.</p>
            <ul className="menu">
              <li><a href="#">Dribbble</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Yo</a></li>
            </ul>
          </div>
          <div className="medium-6 columns">
            <label>Name
              <input type="text" placeholder="Name" />
            </label>
            <label>Email
              <input type="text" placeholder="Email" />
            </label>
            <label>
              Message
              <textarea placeholder="holla at a designerd"></textarea>
            </label>
            <input type="submit" className="button expanded" value="Submit" />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Portfolio