import { useEffect } from "react";
import $ from "jquery";
import "foundation-sites"; 
import './NewsMagazine.css';

function NewsMagazine() {
  useEffect(() => {
    // Initialize Foundation when the component mounts
    $(document).foundation();
  }, []);

  const numbers: string[] = ["One","Two","Three","Four"];
  const breakingNews: string[] = ['Look at me!', 'Look at me!', 'Look at me!', 'Look at me!', 'Look at me!'];
  const latestNews: string[] = ["Death Star","NASA's SLS Rocket","Ingredients for Life Were Always Present on Earth","Astronaut's Watch on the Moon","Interstellar Dust on the Galaxy's Magnetic Field","Explore the Moon"];
  return (
    <div>

      <header>
        {/* Sub Navigation */}
        <div className="top-bar">
          <div className="top-bar-left">
            <ul className="menu">
              {numbers.map((e,idx)=>(
                <li key={idx}><a href="#">{e}</a></li>
              ))}
            </ul>
          </div>
          <div className="top-bar-right">
            <ul className="menu">
              <li><input type="search" placeholder="Search" /></li>
              <li><button type="button" className="button">Search</button></li>
            </ul>
          </div>
        </div>

        {/* Logo and ad break */}
        <div className="row">
          <div className="medium-4 columns">
            <img src="https://via.placeholder.com/450x183&text=LOGO" alt="company logo" />
          </div>
          <div className="medium-8 columns">
            <img 
              src="https://via.placeholder.com/900x175&text=Responsive+Ads+-+ZURB+Playground/333"
              alt="advertisement for deep fried Twinkies" 
            />
          </div>
        </div>

        {/* Social media icons */}
        <div className="social-icons">
          <i className="fi-social-facebook"></i>
          <i className="fi-social-youtube"></i>
          <i className="fi-social-pinterest"></i>
          <i className="fi-social-instagram"></i>
          <i className="fi-social-tumblr"></i>
          <i className="fi-social-twitter"></i>
        </div>
      </header>

      {/* Content and layout */}
      <br />
      <div className="title-bar" data-responsive-toggle="main-menu" data-hide-for="medium">
        <button className="menu-icon" type="button" data-toggle></button>
        <div className="title-bar-title">Menu</div>
      </div>

      <div className="top-bar" id="main-menu">
        <ul className="menu vertical medium-horizontal expanded medium-text-center" data-responsive-menu="drilldown medium-dropdown">
          {['Tech', 'Energy', 'Space', 'Medicine', 'Robotics', 'Tesla'].map((category) => (
            <li key={category} className="has-submenu">
              <a href="#">{category}</a>
              <ul className="submenu menu vertical" data-submenu>
                {numbers.slice(0,3).map((e,idx)=>(
                  <li key={idx}><a href="#">{e}</a></li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      {/* Main article and breaking news */}
      <div className="row">
        <div className="medium-8 columns">
          <p>
            <img 
              src="https://via.placeholder.com/900x450&text=Promoted+Article" 
              alt="main article image" 
            />
          </p>
        </div>
        <div className="medium-4 columns">
          <p>
            <img 
              src="https://via.placeholder.com/400x200&text=Other+cool+article" 
              alt="article promo image" 
            />
          </p>
          <p>
            <img 
              src="https://via.placeholder.com/400x200&text=Other+cool+article" 
              alt="article promo image" 
            />
          </p>
        </div>
      </div>

      {/* Latest stories */}
      <div className="row column">
        <h4 className="text-center" style={{ margin: 0 }}>BREAKING NEWS</h4>
      </div>

      <hr />

      <div className="row small-up-3 medium-up-4 large-up-5">
        {breakingNews.map((text, index) => (
          <div key={index} className="column">
            <img 
              src={`https://via.placeholder.com/400x370&text=${text}`} 
              alt="image for article" 
            />
          </div>
        ))}
      </div>

      <hr />

      <div className="row column">
        <h4 className="text-center" style={{ margin: 0 }}>LATEST STORIES</h4>
      </div>

      <hr />

      <div className="row">
        <div className="large-8 columns" style={{ borderRight: '1px solid #E3E5E8' }}>
          <article>
            {['Death Star', 'NASA\'s SLS Rocket', 'Ingredients for Life Were Always Present on Earth', 
              'Astronaut\'s Watch on the Moon', 'Interstellar Dust on the Galaxy\'s Magnetic Field', 
              'Explore the Moon'].map((title, index) => (
              <div key={index}>
                <div className="row">
                  <div className="large-6 columns">
                    <p>
                      <img 
                        src="https://via.placeholder.com/600x370&text=Look+at+me!" 
                        alt={`article preview image ${title}`} 
                      />
                    </p>
                  </div>
                  <div className="large-6 columns">
                    <h5><a href="#">{title}</a></h5>
                    <p>
                      <span><i className="fi-torso"> By Thadeus &nbsp;&nbsp;</i></span>
                      <span><i className="fi-calendar"> 11/23/16 &nbsp;&nbsp;</i></span>
                      <span><i className="fi-comments"> 6 comments</i></span>
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae impedit beatae, ipsum delectus aperiam nesciunt magni facilis ullam.</p>
                  </div>
                </div>
                {index < 5 && <hr />}
              </div>
            ))}
          </article>
        </div>
      </div>
    </div>
  );
}

export default NewsMagazine;
