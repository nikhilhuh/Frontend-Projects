import React from 'react';

const Agency: React.FC = () => {

  const numbers: string[] = ["One","Two","Three","Four","Five","Six"];

  interface Agency{
    heading: string;
    para: string;
  }
  interface Stat{
    heading: string;
    numbers: number;
  }

  const stats : Stat[] =[
    {
      heading: "Websites",
      numbers: 28,
    },
    {
      heading: "Apps",
      numbers: 43,
    },
    {
      heading: "Ads",
      numbers: 95,
    },
    {
      heading: "Cakes",
      numbers: 59,
    },
    {
      heading: "Logos",
      numbers: 18,
    },
  ]

  const agencies : Agency[] = [
    {
      heading: "Photoshop",
      para: `Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna.`,
    },
    {
      heading: "Javascript",
      para: `Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna.`
    },
    {
      heading: "Marketing",
      para: `Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna.`,
    },
  ]

  return (
    <div>
      {/* Start Top Bar */}
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Yeti Agency</li>
            {numbers.slice(0,2).map((e,idx)=>(
              <li key={idx}><a href="#">{e}</a></li>
            ))}
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
          {numbers.slice(2).map((e,idx)=>(
              <li key={idx+2}><a href="#">{e}</a></li>
            ))}
          </ul>
        </div>
      </div>
      {/* End Top Bar */}

      <div className="callout large">
        <div className="row column text-center">
          <h1>Changing the World Through Design</h1>
          <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</p>
          <a href="#" className="button large">Learn More</a>
          <a href="#" className="button large hollow">Learn Less</a>
        </div>
      </div>

      <div className="row">
        <div className="medium-6 columns medium-push-6">
          <img className="thumbnail" src="https://via.placeholder.com/750x350" alt="Placeholder" />
        </div>
        <div className="medium-6 columns medium-pull-6">
          <h2>Our Agency, our selves.</h2>
          <p>Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu
            diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna diam porttitor mauris, quis sollicitudin
            sapien justo in libero. Vestibulum mollis mauris enim. Morbi euismod magna ac lorem rutrum elementum. Donec
            viverra auctor.</p>
        </div>
      </div>

      <div className="row">
        {agencies.map((e,idx)=>(
          <div key={idx} className="medium-4 columns">
          <h3>{e.heading}</h3>
          <p>{e.para}</p>
        </div>
        ))}
      </div>

      <hr />

      <div className="row column">
        <ul className="vertical medium-horizontal menu expanded text-center">
          {stats.map((e,idx)=>(
            <li key={idx}><a href="#">
            <div className="stat">{e.numbers}</div><span>{e.heading}</span>
          </a></li>
          ))}
        </ul>
      </div>

      <hr />

      <div className="row column">
        <h3>Our Recent Work</h3>
      </div>

      <div className="row medium-up-3 large-up-4">
        {Array(12).fill(null).map((_, index) => (
          <div key={index} className="column">
            <img className="thumbnail" src="https://via.placeholder.com/550x550" alt={`Placeholder ${index + 1}`} />
          </div>
        ))}
      </div>

      <hr />

      <div className="row column">
        <ul className="menu">
        {numbers.slice(0,4).map((e,idx)=>(
              <li key={idx+2}><a href="#">{e}</a></li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Agency;
