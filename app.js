const GroceryList = () => (
    <ul>
      {GroceryListItems()}
    </ul>
)

class GroceryListItem extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      done: false
    }
  }

  onListItemHover () {
    this.setState({
      done: !this.state.done
    });
  }

  render () {

    let style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };

    return (
      <li style={style} onMouseEnter={this.onListItemHover.bind(this)} onMouseLeave={this.onListItemHover.bind(this)}>{this.props.item}</li>
    )
  }
}

function GroceryListItems () {
  const groceries = ['Cucumbers', 'Kale'];

  return groceries.map((item) => <GroceryListItem key={item} item={item} />)
}

ReactDOM.render(<GroceryList />, document.getElementById("app"));
