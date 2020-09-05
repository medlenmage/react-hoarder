import React from 'react';
import itemsData from '../../../helpers/data/itemsData';
import BuildItems from '../../shared/BuildItems/BuildItems';
import authData from '../../../helpers/data/authData';

class MyStuff extends React.Component {
  state = {
    items: [],
  }

  componentDidMount() {
    itemsData.getItemsByUid(authData.getUid)
      .then((items) => this.setState({ items }))
      .catch((err) => console.error('could not retrive items', err));
  }

  // editPileEvent = (e) => {
  //   e.preventDefault();
  //   const pileId = 12345;
  //   this.props.history.push(`/edit/${pileId}`);
  // };

  // singlePileEvent = (e) => {
  //   e.preventDefault();
  //   const pileId = 12345;
  //   this.props.history.push(`/stuff/${pileId}`);
  // };

  render() {
    const { items } = this.state;

    const itemCards = items.map((item) => <BuildItems key={item.id} item={item} />);

    return (
      <div className="Edit">
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
