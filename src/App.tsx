import React,{useState} from 'react';
import { Button , Divider, Input  } from 'antd';

const App: React.FC = () => {

  const [inputText, setInputText] = useState('')
  const [arrayOfToDos, setArrayOfToDos] = useState([{todo:"Requrement Gathering", isInProgress:false}, {todo:"Analysing", isInProgress:true}, {todo:"Designing", isInProgress:true}, {todo:"Development", isInProgress:false} ]);

  const itemsInToDosArray = arrayOfToDos.map((toDos, index) => (
    <li key={index} className="flex flex-row">
      {toDos.todo}
      {!toDos.isInProgress ? <p className="text-green-500 ml-8">Job Done</p> : <p className="text-red-500 ml-8">Procesing</p>}
      <br/>
        <Button className="ml-20" onClick={() => changeState(index)}>{toDos.isInProgress ? "Mark as Job Done" : "Mark as Procesing"}</Button>
        <Button danger onClick={() => deleteFromArray(index)}>Delete</Button>
    </li>
  ))

  const addToDoList = () => {
    const copyOfToDos = [...arrayOfToDos, {todo:inputText, isInProgress:true}];
    setArrayOfToDos(copyOfToDos);
    setInputText("");
  }

  const changeState = (index:any) => {
    const indexGoingToChange = [...arrayOfToDos];
    indexGoingToChange[index].isInProgress ? indexGoingToChange[index].isInProgress=false : indexGoingToChange[index].isInProgress=true
    setArrayOfToDos(indexGoingToChange);
  }

  const deleteFromArray = (index:any) => {
    const copyOfToDos = [...arrayOfToDos];
    copyOfToDos.splice(index, 1);
    setArrayOfToDos(copyOfToDos);
  }

  return (
    <div className="container mx-auto">
      <p className="flex flex-col md:flex-row justify-center m-5 text-3xl font-bold">To-Do Application</p>

      <Divider />

      <div className="flex flex-col md:flex-row justify-center m-5 text-lg font-bold">
        <Input size="small" placeholder="Add to To-Do List" value={inputText} onChange={event => setInputText(event.target.value)}/>
        <Button type="primary" size='large' onClick={addToDoList}>Add to List</Button>
      </div>

      <Divider />

      <ol className="m-5 text-lg font-bold">
        {itemsInToDosArray}
      </ol>

    </div>
  );
}

export default App;
