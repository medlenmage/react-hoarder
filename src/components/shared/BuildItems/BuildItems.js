import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import itemShape from '../../../helpers/propz/itemShape';

class BuildItems extends React.Component {
  static propTypes = {
    items: itemShape.itemShape,
  }

  render() {
    const { items } = this.props;

    const editLink = `/edit/${items.id}`;
    const singleItem = `/stuffs/${items.id}`;

    return (
      <div className="card" >
        <img className="card-img-top" src={items.itemImage} alt={items.id} />
        <div className="card-body">
          <h5 className="card-title">{items.itemName}</h5>
          <p className="card-text">{items.Description}</p>
          <Link to={editLink}>Edit Me</Link>
          <Link to={singleItem}>Single me out</Link>
        </div>
      </div>
    );
  }
}

export default BuildItems;
