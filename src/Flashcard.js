import React from "react";
import { Button, Table, } from "semantic-ui-react";

class Flashcard extends React.Component {
  state = { show: false }

  toggleShow = () => {
    this.setState( state => {
      return { showtoggleshow: !state.show, }
    })
  }
  
  render() {
    const { id, question, answer, remove } = this.props
    return (
      <Table.Row>
    <Table.Cell>{question}</Table.Cell>
    <Table.Cell>{answer}</Table.Cell>
    <Table.Cell>
      <Button color="red" onClick={() => this.toggleShow()}>
        Show
      </Button>
    </Table.Cell>
    <Table.Cell>
      <Button color="blue" onClick={() => remove(id)}>
        Delete
      </Button>
    </Table.Cell>
  </Table.Row> 
      
      )
    }
  }
  

export default Flashcard;