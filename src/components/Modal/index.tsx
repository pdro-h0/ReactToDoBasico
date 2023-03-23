import * as C from './styles'

    interface Props{
        children:React.ReactNode,
        
    }

export const Modal = ({ children }:Props) => {
  const closeModal = (e:React.MouseEvent)=>{
    const modal = document.querySelector("#modal")
    modal!.classList.add("hide")
  }

  return (
    <C.Container id="modal" className='hide'>
        <C.Fade onClick={closeModal}></C.Fade>

        <C.Modal>
            <h2>Texto</h2>
            {children}
        </C.Modal>
    </C.Container>
  )
}
