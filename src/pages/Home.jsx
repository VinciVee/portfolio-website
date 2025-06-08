// import Header from "../components/layout/Header"
import { useState } from "react"

function Home() {
  const [message, setMessage] = useState("Yo");

  return (
    <div>
      {/* <Header /> */}
      <h1 
        className="myClass"
        style={{ backgroundColor: "darkblue", color: "pink" }}
        >{message} there!</h1>
        
      <button onClick={() => setMessage(message + " yo")}>Message Me</button>
    </div>
  )
}

export default Home