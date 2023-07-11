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

  render(){
    return (
      <div>Działa</div>
    )
  }
}

ReactDOM.render(<List />, document.getElementById('root'))