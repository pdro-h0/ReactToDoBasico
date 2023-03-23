import { Content } from "./components/Content"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Modal } from "./components/Modal"
import { TaskForm } from "./components/TaskForm"
import { GlobalStyle } from "./styles/global"

export const App = () => {
  return (
    <div>
      <Header />
      <GlobalStyle />
      <Content />
      <Footer />
    </div>
  )
}
