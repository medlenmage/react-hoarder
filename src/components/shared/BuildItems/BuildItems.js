import React from 'react';
// import PropTypes from 'prop-types';
import itemShape from '../../../helpers/propz/itemShape';

class BuildItems extends React.Component {
  static propTypes = {
    items: itemShape.itemShape,
  }

  render() {
    const { items } = this.props;

    return (
      <div class="card" >
        <img class="card-img-top" src={items.itemImage} alt={items.id} />
        <div class="card-body">
          <h5 class="card-title">{items.itemName}</h5>
          <p class="card-text">{items.Description}</p>
        </div>
      </div>
    );
  }
}

export default BuildItems;
