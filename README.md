# Initial Build Out for Treasure Hunt

## Setup
- Delete boiler plate code
- Set App.js
- Add components file
- Set Board, import to App.js
- Set Square, import to Board

## Board
- Holds state
- Map over the `<Square />` component call
- Render the variable holding the map functionality in the Board JSX <div></div>

## Square
- Add a nested div with styling
- Add an onClick that calls a method in `<Square />` (handleClick)

## Back in Board
- Create a method (handleLocation) that logs (start with an alert) the index
- Pass the method (handleLocation) and the index (from map) into the `<Square />` component call

## Back in Square
- Call the method passed to the component as props within the local Square method
- Pass the index value coming as props (this.props.index) as an argument to the method call (handleLocation) within the method (handleClick): `this.props.handleLocation(this.props.index)`


# Treasure Hunt Challenge

## User Stories
- As a player, I can see a web page with a 3 by 3 grid board game with question marks in each square.
- As a player, when I click on one of the question marks the space turns into a tree icon.
- As a player, I can click on the question marks and behind one of the question marks is a treasure box icon.
- As a player, I can see a counter that shows how many guesses I have left.
- As a player, I am notified when the game is won or lost.
- As a player, I can click on a “Play Again” button to restart the game.

## Stretch Challenges
- As a player, I can click on the question marks and behind one of the question marks is a bomb icon.
- As a player, I cannot continue playing the game once I have won or lost.
- As a player, I can see a counter that decrements for every click.
- As a player, I can see a losing message if the counter reaches 0.
