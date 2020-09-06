import React from 'react';
import itemsData from '../../../helpers/data/itemsData';
import BuildItems from '../../shared/BuildItems/BuildItems';
import authData from '../../../helpers/data/authData';

class MyStuff extends React.Component {
  state = {
    items: [],
  }

  componentDidMount() {
    itemsData.getItemsByUid(authData.getUid())
      .then((items) => this.setState({ items }))
      .catch((err) => console.error('could not retrive items', err));
  }

  render() {
    const { items } = this.state;

    const itemCards = items.map((item) => <BuildItems key={item.id} items={items} />);

    return (
      <div className="MyStuff">
        <h3>All this Junk</h3>
        <div className="mb-3">
          <div className="card-columns">
            {itemCards}
          </div>
        </div>
      </div>
    );
  }
}
export default MyStuff;
