import React, { Component } from 'react'
import Square from './Square'

class Board extends Component{
  constructor(props){
    super(props)
    this.state = {
      board: ["?", "☠️", 0, 0, 0, 0, 0, 0, 0]
    }
  }

  handleLocation = (index) => {
    alert(index)
  }

  render(){
    let square = this.state.board.map((value, index) => {
      return(
        <Square
          handleLocation={ this.handleLocation }
          index={ index }
          value={ value }
        />
      )
    })
    return(
      <div id="board">
        { square }
      </div>
    )
  }
}

export default Board
