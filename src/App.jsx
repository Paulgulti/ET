import Context from './Context'
import Header from './header'
import Home from './Home'

function App() {

  return (
    <>
      <Context>
        <Header />
        <Home />
      </Context>
    </>
  )
}

export default App
