import React, { Component } from "react";
import Card from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json.js";
import Body from "./components/Body";


class App extends Component {
  // Setting this.state.friends to the friends json array

  
  
  constructor (props)
  {
    super (props);
    this.state={
      friends:friends,
      clickedCards:[],
      score:0,
      highScore:0
    }
  }
  

  randomizeArray=(arr)=>
{
    return arr.sort((a,b)=>Math.floor(Math.random()*1000)>500?1:-1);
}

  
  removeFriend = (props) => {
    this.randomizeArray(friends)
    if (this.state.clickedCards.includes(props))
    {
      alert("you lose!");
      this.setState({
        clickedCards:[],
        score:0,
        
      })
    }
    else
    {
      const clickedCardsCopy=this.state.clickedCards;
      clickedCardsCopy.push(props);
      this.setState({clickedCards:clickedCardsCopy, score:this.state.score +1, highScore:Math.max(this.state.score+1,this.state.highScore)})
    }
    // Set this.state.friends equal to the new friends array
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    console.log(this.state.clickedCards)
    
    return (
      <Wrapper>

        <Title>

          <div className="navbar navbar-expand-lg navbar-light" id="navbarPurple">
            <div id="navbar-text">
                  <div id="headerText">
                    Your Score: {this.state.score}
                    </div>
                  <div id="headerText">
                  High Score: {this.state.highScore}
                    </div>
            </div>
          </div>

        </Title >
        <Body>
        {
          this.state.friends.map(friend => (
            <Card
              
              id={friend.id}
              removeFriend={this.removeFriend}
              key={friend.id}
              name={friend.name}
              image={friend.image}
              
            />
          ))
        }
</Body>
<div className="navbar navbar-expand-lg navbar-light" id="navbarPurpleBottom">
            <div id="navbar-text">
                  <div id="headerText">
                    
                    Clicky Game. 2019.
                    </div>
            </div>
          </div>

       
      </Wrapper >
    );
  }
}

export default App;
