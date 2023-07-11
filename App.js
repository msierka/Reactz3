const People = props => {
  return (
    <li>
      <span>{props.name}</span>
      <button onClick={props.delete}>Usuń</button>
    </li>
  )
}


class List extends React.Component {
  state = {
    people: [
      {
        id: 0,
        name: "Jan K."
      },
      {
        id: 1,
        name: "Piotr C."
      },
      {
        id: 2,
        name: "Marysia W."
      },
      {
        id: 3,
        name: "Jan W."
      },
    ]
  }
  handleDelete(id){
    const people = [...this.state.people];
    const index = people.findIndex(p => p.id === id);
    people.splice(index,1);
    this.setState({
      people
    })
  }
  render(){
    const people = this.state.people.map(p =>(
      <People 
      key = {p.id}
      name = {p.name}
      delete = {this.handleDelete.bind(this,p.id)}
      />
    ))
    return (
      <ul>
        {people}
      </ul>
    )
  }
}

ReactDOM.render(<List />, document.getElementById('root'))