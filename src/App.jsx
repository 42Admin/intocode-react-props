import Header from './components/Header'
import Main from "./components/Main"
import Sidebar from './components/Sidebar'
import styles from "./App.module.css"

function App() {
  return (
    <div className={styles.mainApp}>
      <Header/>
      <Main />
      <Sidebar />
    </div>
  )
}

export default App