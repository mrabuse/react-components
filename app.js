const GroceryList = () => (
    <ul>
      {GroceryListItems()}
    </ul>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <li>{this.props.item}</li>
    )
  }
}




function GroceryListItems () {
  const groceries = ['Cucumbers', 'Kale'];

  return groceries.map((item) => <GroceryListItem key={item} item={item} />)
}

ReactDOM.render(<GroceryList />, document.getElementById("app"));
