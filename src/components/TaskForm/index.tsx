import { useState, ChangeEvent, FormEvent, FormEventHandler, useEffect } from "react";

import * as C from "./styles";

import { ITask } from "../../interfaces/task";
import { TaskList } from "../TaskList";

type TaskFormProps = {
  BtnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>,
  task?:ITask | null,
  handleUpdate?:(id:number, title:string, difficulty:number)=>void
};

export const TaskForm = ({ BtnText, taskList, setTaskList, task, handleUpdate }: TaskFormProps) =>{
  const [id, setId] = useState<number>(0)
  const [title, setTitle] = useState<string>("")
  const [difficulty, setDifficulty] = useState<number>(0)

  const handleAddTak = (e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault()

    if(handleUpdate){
      handleUpdate(id, title, difficulty)

    }else{
      const id = Math.floor((Math.random() * 9000))

      const newTask: ITask = {id, title, difficulty}
  
      setTaskList!([...taskList, newTask])
  
      setTitle("")
      setDifficulty(0)
    }
  }

  useEffect(()=>{
    if(task){
      setId(task.id)
      setTitle(task.title)
      setDifficulty(task.difficulty)
    }
  }, [task])

  const handleChange = (e: ChangeEvent<HTMLInputElement>)=>{
    if(e.target.id === "task"){
      setTitle(e.target.value)
    }else{
      setDifficulty(parseInt(e.target.value ))
    }
  }

  return (
    <C.Form onSubmit={handleAddTak}>
      <C.InputContainer>
        <label htmlFor="task">Titulo:</label>
        <input 
        type="text" 
        id="task" 
        placeholder="Títitulo da tarefa"
        onChange={handleChange}
        value={title}
         />
      </C.InputContainer>

      <C.InputContainer>
        <label htmlFor="difficult">Dificuldade:</label>
        <input 
        type="number" 
        id="difficult" 
        placeholder="Dificuldade da tarefa"
        onChange={handleChange}
        value={difficulty}
         />
      </C.InputContainer>

      <input type="submit" value={BtnText}></input>
    </C.Form>
  );
};
