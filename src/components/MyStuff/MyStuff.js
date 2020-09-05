import React from 'react';

class MyStuff extends React.Component {
  editPileEvent = (e) => {
    e.preventDefault();
    const pileId = 12345;
    this.props.history.push(`/edit/${pileId}`);
  };

  singlePileEvent = (e) => {
    e.preventDefault();
    const pileId = 12345;
    this.props.history.push(`/stuff/${pileId}`);
  };

  render() {
    return (
      <div className="Edit">
        <h1>MyStuff</h1>
        <button className="btn btn-primary" onClick={this.editPileEvent}>Edit</button>
        <button className="btn btn-success" onClick={this.singlePileEvent}>Single</button>
      </div>
    );
  }
}

export default MyStuff;
