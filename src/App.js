import React, { Component } from 'react';
// import './App.css';
import { Container, Header, Button, Icon, Segment, } from "semantic-ui-react"; 
import Cards from "./Cards";
import CardForm from "./CardForm";


class App extends Component {
  state = { 
    cards: [
      { id: 1, question: "Is cheese lit", answer: "Yesh", },
      { id: 2, question: "Is life lit", answer: "No", },
      { id: 3, question: "Is beans the dogs knees", answer: "Maybe", },
      { id: 4, question: "what is the meaning of life", answer: "42", },
    ], showForm: true,
  };
  getId = () => {
    return Math.floor((1 + Math.random()) * 10000);
  };
  
  addFlashcard = (flashcardData) => {
    let flashcard = { id: this.getId(), ...flashcardData, };
    this.setState({ cards: [flashcard, ...this.state.cards], });
  }

  removeFlashcards = (id) => {
    const cards = this.state.contacts.filter( flashcard => {
      if (flashcard.id !== id)
        return flashcard
    });
    this.setState({ cards: [...cards], });
  };
  
  render() {
    const { showForm, } = this.state;
    return (
      <>
      <Container style={{ paddingTop: "25px" }}>
        <Header as="h1">React Flashy Cards</Header>
        <br />
        <Segment basic>
          <Button icon color="blue" onClick={this.toggleForm}>
          <Icon name={showForm ? 'angle double up' : 'angle double down'} />
          </Button>
          { showForm ? <CardForm add={this.addFlashcard} /> : null }
        </Segment>
        <br />
        <Cards cardsArray={this.state.cards} remove={this.removeFlashcard} />
      </Container>
      </>
    );
  };
};

export default App;
