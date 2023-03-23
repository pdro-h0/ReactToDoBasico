import { TaskForm } from '../TaskForm'
import { TaskList } from '../TaskList'

import * as C from './styles'

import { ITask } from '../../interfaces/task'
import { useState } from 'react'
import { Task } from '../TaskList/styles'
import { Modal } from '../Modal'

export const Content = () => {
  const [taskList, setTaskList] = useState<ITask[]>([])
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null)

  const deleteTask = (id:number) =>{
    setTaskList(
      taskList.filter((item) =>{
        return item.id !== id
      })
    )
  }

  const hideOrShowModal = (display:boolean) =>{
    const modal = document.querySelector("#modal")
    if(display){
      modal!.classList.remove("hide")
    }else{
      modal!.classList.add("hide")
    }
  }

  const updateTask = (id:number, title:string, difficulty:number) =>{
    const updatedTask:ITask = {id, title, difficulty}

    const updatedItems = taskList.map((item) =>{
      return item.id === updatedTask.id ? updateTask : item
    })

    setTaskList(updatedItems)

    hideOrShowModal(false)
  }

  const editTask = (task:ITask)=>{
    hideOrShowModal(true)
    setTaskToUpdate(task)
  }
  return (
    <C.Main>
      <Modal 
      children={<TaskForm 
        BtnText="Editar Tarefa" 
        taskList={taskList} 
        task={taskToUpdate}
        handleUpdate={updateTask}/>}/>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm 
          BtnText='Criar Tarefa' 
          taskList={taskList}
          setTaskList={setTaskList}/>
        </div>

        <div>
          <h2>Suas Tarefas:</h2>
          <TaskList taskList={taskList} handleDelete={deleteTask} handleEditTask={editTask}/>
        </div>
    </C.Main>
  )
}
