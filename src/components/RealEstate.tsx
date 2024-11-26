function RealEstate() {

  interface SocialLink {
    name: string;
    icon: string;
    url: string;
  }

  interface FooterSection {
    title: string;
    items: any[];
  }
  const numbers: string[] = ["One", "Two", "Three", "Four"];
  const socialLinks: SocialLink[] = [
    { name: "Twitter", icon: "fi-social-twitter", url: "#" },
    { name: "Facebook", icon: "fi-social-facebook", url: "#" },
    { name: "Instagram", icon: "fi-social-instagram", url: "#" },
    { name: "Pinterest", icon: "fi-social-pinterest", url: "#" },
  ];

  const footerSections: FooterSection[] = [
    { title: "Offices", items: numbers },
    { title: "Solar Systems", items: numbers },
    { title: "Contact", items: socialLinks.map((link) => `${link.name}`) },
    { title: "Offices", items: numbers },
  ];

  const footerLinks: string[] = ["Legal", "Partner", "Explore"];

  return (
    <div>
      {/* Navigation */}
      <div className="title-bar" data-responsive-toggle="realEstateMenu" data-hide-for="small">
        <button className="menu-icon" type="button" data-toggle></button>
        <div className="title-bar-title">Menu</div>
      </div>

      <div className="top-bar" id="realEstateMenu">
        <div className="top-bar-left">
          <ul className="menu" data-responsive-menu="accordion">
            <li className="menu-text">Interplanetary</li>
            {numbers.map((number, index) => (
              <li key={index}>
                <a href="#">{number}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li>
              <a href="#">My Account</a>
            </li>
            <li>
              <a className="button">Login</a>
            </li>
          </ul>
        </div>
      </div>
      {/* /Navigation */}

      <br />

      <div className="row">
        <div className="medium-7 large-6 columns">
          <h1>Close Your Eyes and Open Your Mind</h1>
          <p className="subheader">
            There is beauty in space, and it is orderly. There is no weather,
            and there is regularity. It is predictable. Everything in space
            obeys the laws of physics. If you know these laws, and obey them,
            space will treat you kindly.
          </p>
          <button className="button">Take a Tour</button>
          <button className="button">Start a free trial</button>
        </div>

        <div className="show-for-large large-3 columns">
          <img src="https://via.placeholder.com/400x370&text=PSR1257 + 12 C" alt="picture of space" />
        </div>

        <div className="medium-5 large-3 columns">
          <div className="callout secondary">
            <form>
              <div className="row">
                <div className="small-12 columns">
                  <label>
                    Find Your Dream Planet
                    <input type="text" placeholder="Search destinations" />
                  </label>
                </div>
                <div className="small-12 columns">
                  <label>
                    Number of Moons
                    <input type="number" placeholder="Moons required" />
                  </label>
                  <button type="submit" className="button">
                    Search Now!
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="row column">
        <hr />
      </div>

      <div className="row column">
        <p className="lead">Trending Planetary Destinations</p>
      </div>

      <div className="row small-up-1 medium-up-2 large-up-3">
        {Array(6).fill(null).map((_, index) => (
          <div key={index} className="column">
            <div className="callout">
              <p>Pegasi B</p>
              <p>
                <img src="https://via.placeholder.com/400x370&text=Pegasi B" alt="image of a planet called Pegasi B" />
              </p>
              <p className="lead">Copernican Revolution caused an uproar</p>
              <p className="subheader">
                Find Earth-like planets life outside the Solar System
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="row column">
        <a className="button hollow expanded">Load More</a>
      </div>

      <footer>
        <div className="row expanded callout secondary">
          {footerSections.map((section, index) => (
            <div key={index} className="small-6 large-3 columns">
              <p className="lead">{section.title}</p>
              <ul className="menu vertical">
                {section.items.map((item, idx) => (
                  <li key={idx}>
                    <a href={item.url || "#"}>{item.name || item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="medium-6 columns">
            <ul className="menu">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="medium-6 columns">
            <ul className="menu float-right">
              <li className="menu-text">Copyright</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default RealEstate;
