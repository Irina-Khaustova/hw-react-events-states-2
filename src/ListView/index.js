import ShopItem from "../ShopItem";
import PropTypes from 'prop-types'

export default function ListView(props) {
  const { items } = props;
  //console.log(props)
    return (
      <div className="listView">
       {items.map((item, i) => (
        <ShopItem key ={i} item={item}>
        </ShopItem>
         ))
       }
      </div>
    )
}

ListView.propTypes = {
  items: PropTypes.array
};