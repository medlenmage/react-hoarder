import React from 'react';

class MyStuff extends React.Component {
  render() {
    return (
      <div className="Edit">
        <h1>MyStuff</h1>
        <button type="button" class="btn btn-primary">Edit</button>
        <button type="button" class="btn btn-success">Single</button>
      </div>
    );
  }
}

export default MyStuff;
