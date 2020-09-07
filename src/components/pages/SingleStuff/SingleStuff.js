import React from 'react';
import itemsData from '../../../helpers/data/itemsData';

class SingleStuff extends React.Component {
  state = {
    item: {},
  }

  componentDidMount() {
    const { itemId } = this.props.match.params;

    itemsData.getItemById(itemId)
      .then((res) => this.setState({ item: res.data }))
      .catch((err) => console.error('could not get item', err));
  }

  deleteItem = () => {
    const { itemId } = this.props.match.params;

    itemsData.deleteItem(itemId)
      .then(() => this.props.history.push('/stuff'))
      .catch((err) => console.error('could not delete item', err));
  }

  render() {
    const { item } = this.state;

    return (
      <div className="Single">
        <h1>Single Stuff</h1>
        <div className="card">
          <img className="card-img-top" src={item.itemImage} alt={item.id} />
          <div className="card-body">
            <h5 className="card-title">{item.itemName}</h5>
            <p className="card-text">{item.itemDescription}</p>
            <button type="button" className="btn btn-danger" onClick={this.deleteItem}>Throw Out</button>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleStuff;
