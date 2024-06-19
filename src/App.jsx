import Footer from "./components/Footer/Footer"
import Navigation from "./components/Navigation/Navigation"
import AppRoutes from "./routes/AppRoutes"
import "./App.css"

const App = () => {

  return (
    <>

      <Navigation />

      <div id="content">
        <AppRoutes />
      </div>

      <Footer />

    </>
  )
}

export default App
