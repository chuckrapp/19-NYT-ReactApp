// Include React
var React = require("react");

var Search = React.createClass({
  render: function () {
    return (
      <div className="container">

        <div className="main-container">
          <div className="main-container">
            <div className="row">
              <div className="col-lg-12">
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h1 className="panel-title"><strong><i className="fa fa-newspaper-o" aria-hidden="true"></i>Query</strong></h1>
                  </div>
                  <div className="panel-body">
                    <form>
                      <div className="form-group">
                        <h4 className=""><strong>Topic</strong></h4>
                        <input type="text" defaultValue="" className="form-control" id="search-term" required="" />
                        <h4><strong>Start Year</strong></h4>
                        <input type="number" defaultValue="" className="form-control" id="start-year" required="" />
                        <h4><strong>End Year</strong></h4>
                        <input type="number" defaultValue="" className="form-control" id="end-year" required="" />
                      </div>
                      <div className="pull-right"><button id="run-search" type="submit" className="btn btn-danger"><h4>Submit</h4></button></div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <div id="well-section"></div>
          <li className="list-group-item">
            <h3><span><em>Enter search terms to begin...</em></span></h3>
          </li>
        </div>
      </div>

    );
  }
});

module.exports = Search;
