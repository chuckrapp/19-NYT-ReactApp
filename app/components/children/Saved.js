// Include React
var React = require("react");

var Saved = React.createClass({
  render: function () {
    return (
      <div className="container">






        <div className="main-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h1 className="panel-title"><strong><i className="fa fa-download" aria-hidden="true"></i> Saved Articles </strong></h1>
                </div>
                <div className="panel-body">
                  <ul className="list-group">
                    <div>
                      {/*<li className="list-group-item">
                        <h3><span><em>Foo Fighters, Recruited by Viral Video, Play Unplanned Concert in Italy</em></span>
                          <span
                            className="btn-group pull-right"><a href="https://www.nytimes.com/2015/11/05/arts/foo-fighters-recruited-by-viral-video-play-unplanned-concert-in-italy.html"
                              rel="noopener noreferrer" target="_blank"><button className="btn btn-default ">View Article</button></a>
                            <button
                              className="btn btn-primary">Delete</button>
                          </span>
                        </h3>
                        <p>
                          {/*<!-- react-text: 911 -->Date Published:
                                                    <!-- /react-text -->
                                                    <!-- react-text: 912 -->2015-11-05T00:00:00.000Z
                                                    <!-- /react-text -->
                        </p>
                      </li>*/}
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>








      </div>
    );
  }
});

module.exports = Saved;
