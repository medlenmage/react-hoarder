import React from 'react';
import authData from '../../../helpers/data/authData';
import itemsData from '../../../helpers/data/itemsData';

class NewStuff extends React.Component {
  state = {
    itemName: '',
    itemImage: '',
    itemDescription: '',
  }

  changeItemName = (e) => {
    e.preventDefault();
    this.setState({ itemName: e.target.value });
  }

  changeItemImage = (e) => {
    e.preventDefault();
    this.setState({ itemImage: e.target.value });
  }

  changeItemDescription = (e) => {
    e.preventDefault();
    this.setState({ itemDescription: e.target.value });
  }

  hoardItem = (e) => {
    e.preventDefault();
    const { itemName, itemImage, itemDescription } = this.state;

    const newItem = {
      itemName,
      itemImage,
      itemDescription,
      uid: authData.getUid(),
    };

    itemsData.addItem(newItem)
      .then(() => {
        this.props.history.push('/stuff');
      })
      .catch((err) => console.error('could not add item', err));
  };

  render() {
    const { itemName, itemImage, itemDescription } = this.state;

    return (
      <div className="Edit">
        <h1>New Stuff</h1>
        <form className="col-6 offset-3">
          <div className="form-group">
            <label htmlFor="">Item Name</label>
            <input
            type="text"
            className="form-control"
            id="itemName"
            placeholder="Item Name Here"
            value={itemName}
            onChange={this.changeItemName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="itemImage">Item Picture</label>
            <input
            type="text"
            className="form-control"
            id="itemImage"
            placeholder="Item Picture Here"
            value={itemImage}
            onChange={this.changeItemImage}
            />
          </div>
          <div className="form-group">
            <label htmlFor="itemDescription">Describe Item</label>
            <input
            type="text"
            className="form-control"
            id="itemDescription"
            placeholder="Item Description Here"
            value={itemDescription}
            onChange={this.changeItemDescription}
            />
          </div>
          <button className="btn btn-primary" onClick={this.hoardItem}>Submit</button>
        </form>
      </div>
    );
  }
}

export default NewStuff;
