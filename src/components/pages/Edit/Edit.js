import React from 'react';
import itemsData from '../../../helpers/data/itemsData';

class Edit extends React.Component {
  state = {
    item: {
      itemName: '',
      itemImage: '',
      itemDescription: '',
    },
  }

  componentDidMount() {
    itemsData.getItemById(this.props.match.params.itemId)
      .then((res) => {
        const item = res.data;
        this.setState({ item });
      })
      .catch((err) => console.error('err in single item', err));
  }

  changeItemName = (e) => {
    e.preventDefault();
    const { item } = this.state;
    item.itemName = e.target.value;
    this.setState({ item });
  }

  changeItemImage = (e) => {
    e.preventDefault();
    const { item } = this.state;
    item.itemImage = e.target.value;
    this.setState({ item });
  }

  changeItemDescription = (e) => {
    e.preventDefault();
    const { item } = this.state;
    item.itemDescription = e.target.value;
    this.setState({ item });
  }

  changeItem = (e) => {
    e.preventDefault();
    const { itemId } = this.props.match.params;

    itemsData.updateItem(itemId, this.state.item)
      .then(() => {
        this.props.history.push('/stuff');
      })
      .catch((err) => console.error('could not add item', err));
  };

  render() {
    const { itemName, itemImage, itemDescription } = this.state.item;

    return (
      <div className="Edit">
        <h1>Edit Item</h1>
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
          <button className="btn btn-primary" onClick={this.changeItem}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Edit;
