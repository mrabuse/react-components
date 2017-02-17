const GroceryList = () => (
    <ul>
      <Cucumbers />
      <Kale />
    </ul>
);

const Cucumbers = () => (
  <li>Cucumbers</li>
)

const Kale = () => (
  <li>Kale</li>
)
// function GroceryListItem (props) {
//   return <li>{props.item}</li>;
// }
//
//
// function GroceryListItems () {
//   const groceries = ['Cucumbers', 'Kale'];
//
//   return groceries.map((item) => <GroceryListItem key={item} item={item} />)
// }

ReactDOM.render(<GroceryList />, document.getElementById("app"));
