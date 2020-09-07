import React from 'react';

class Edit extends React.Component {
  render() {
    const { itemId } = this.props.match.params;
    return (
      <div className="Edit">
        <h1>Edit</h1>
        <p>this is {itemId}</p>
      </div>
    );
  }
}

export default Edit;
