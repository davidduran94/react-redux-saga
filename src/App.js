
import './App.css';
import { useState } from 'react'
import { Container} from 'semantic-ui-react';
import { MainHeader } from './components/MainHeader';
import { NewEntryForm } from './components/NewEntryForm';
import { DisplayBalances } from './containers/DisplayBalances';
import { EntryLines } from './containers/EntryLines';
 

function App() {
  const [entries, setEntries] = useState(initialEntries)

  function deleteEntry(id){
    console.log("deleting..", id)
    const result = entries.filter((entry) => entry.id !== id)
    setEntries(result)
  }

  function addEntry(title, amount, isExpense){
    console.log("adding..", title, amount)
    const result = entries.concat({
      id: entries.length+1,
      title,
      amount,
      isExpense
    })
    setEntries(result)
  }

  return (
    <Container>
      <MainHeader title='Budget'  />

      <DisplayBalances balances={initial} />
      <MainHeader title="History" type="h3"/>
      <EntryLines deleteEntry={deleteEntry} initialEntries={entries} />

      <MainHeader title="Add new transaction"type="h3"></MainHeader>
      <NewEntryForm addEntry={addEntry}/>
     
    </Container>    
  );
}

export default App;

var initial = [
  {
    id:1, title:"Income", color:"green", amount:"12143.34"
  },
  {
    id:2,title:"Expenses", color:"red", amount:"1043.34"
  }
]

var initialEntries = [
  {
    id:1, title:"Income", color:"green", amount:"12143.34"
  },
  {
    id:2,title:"Expenses", color:"red", amount:"1043.34"
  },
  {
    id:3, title:"Expenses", color:"red", amount:"143.34"
}
]