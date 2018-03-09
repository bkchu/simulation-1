import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

class Bins extends Component {
  state = {
    bins: null
  };

  componentDidMount() {
    axios
      .get(`/api/shelf/${this.props.match.params.id}`)
      .then(response => {
        this.setState({ bins: response.data });
      })
      .catch(error => console.log(error));
  }
  render() {
    let { bins } = this.state;

    let displayBins = <p>Loading...</p>;
    if (bins) {
      displayBins = bins.sort((a, b) => a.id[1] - b.id[1]).map(bin => {
        let displayBin = (
          <Link className="Bins__link" key={bin.id[1]} to={`/create/${bin.id}`}>
            <p>+ Add inventory to bin</p>
          </Link>
        );
        if (bin.name && bin.price) {
          displayBin = (
            <Link className="Bins__link" key={bin.id[1]} to={`/bin/${bin.id}`}>
              <p>Bin {bin.id[1]}</p>
            </Link>
          );
        }
        return displayBin;
      });
    }

    return (
      <div className="Bins">
        <Header {...this.props} />
        {displayBins}
      </div>
    );
  }
}

export default Bins;
