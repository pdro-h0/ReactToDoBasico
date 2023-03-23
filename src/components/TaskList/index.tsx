import * as C from './styles'

import { ITask } from "../../interfaces/task"

import { BiPencil, BiTrash } from 'react-icons/bi'


interface Props{
  taskList: ITask[];
  handleDelete: (id:number) => void,
  handleEditTask:(task:ITask) => void,
}

export const TaskList = ({ taskList, handleDelete, handleEditTask }:Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((item) =>(
          <C.Task key={item.id}>
            <C.Details>
              <h4>{item.title}</h4>
              <p>Dificuldade: {item.difficulty}</p>
            </C.Details> 

            <C.Actions>
              <i onClick={() => handleEditTask(item)}>
                <BiPencil 
                size={20}/>
              </i>
              <i>
                <BiTrash 
                size={20}
                onClick={() =>{
                  handleDelete(item.id)
                }}/>
              </i>
            </C.Actions>            
          </C.Task>
        ))
      ) : <p>Não há tarefas a serem cadastradas</p>}
    </>
  )
}
