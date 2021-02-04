import React, { Component } from "react";

class Portfolio extends Component {
  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects, index) {
        var projectImage = "images/portfolio/" + projects.image;
        // original
        // return <div key={projects.title} className="columns portfolio-item">
        //  clear float after 3rd item, restart new line
        return (
          <div
            key={projects.title}
            className='columns portfolio-item'
            style={index === 3 ? { clear: "both" } : {}}
          >
            <div className='item-wrap'>
              <a href={projects.url} title={projects.title} target='_blank'>
                <img alt={projects.title} src={projectImage} />
                <div className='overlay'>
                  <div className='portfolio-item-meta'>
                    <h5
                      style={{
                        position: "absolute",
                        top: "15px",
                        left: "15px",
                        fontSize: "30px",
                      }}
                    >
                      {projects.title}
                    </h5>
                    <div
                      style={{
                        position: "absolute",
                        bottom: "15px",
                        right: "15px",
                      }}
                    >
                      {projects.category.map((pc) => (
                        <p
                          style={{
                            textAlign: "right",
                            fontSize: "20px",
                            margin: "5px",
                          }}
                        >
                          {pc}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
                <div className='link-icon'>
                  <i className='fa fa-link'></i>
                </div>
              </a>
            </div>
          </div>
        );
      });
    }

    return (
      <section id='portfolio'>
        <div className='row'>
          <div className='twelve columns collapsed '>
            <h1>Check Out Some of My Projects</h1>

            {/* change bgrid-_____ for number items per row */}
            {/* <div id="portfolio-wrapper" className="bgrid-halves s-bgrid-halves cf"> */}
            <div
              id='portfolio-wrapper'
              className='bgrid-thirds s-bgrid-thirds cf'
            >
              {/* <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-quarters cf"> */}
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
