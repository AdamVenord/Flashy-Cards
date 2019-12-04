import React from "react";
import { Button, Table, Card, } from "semantic-ui-react";
import Flashcard from "./Flashcard";

const Cards = ({ cardsArray, remove, }) => (
  <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Question</Table.HeaderCell>
        <Table.HeaderCell>Answer</Table.HeaderCell>
        <Table.HeaderCell>Options</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
  {
    cardsArray.map ( flashcard => ( 
      <Flashcard key={flashcard.id} {...flashcard} remove={remove} />
    ))
  }
</Table.Body>
  </Table>
);

export default Cards;