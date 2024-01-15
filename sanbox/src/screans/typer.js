import {useState, useEffect} from 'react'
import Button from "../container/button";

const LOREM_IPSUM = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;

function Typer(props){

    const [started, setStarted] = useState(false)
    const [chrono, setChrono] = useState(0);
    const [text, setText] = useState("")
    const [finish, setFinish] = useState(null)

    function startTimer(){
        if(started){
            setInterval(timer, 1000)
        }
    }

    function timer(){
        setChrono(currentTimer => currentTimer + 1 )
    }

    function stoper(){
        if (text == LOREM_IPSUM){
            setFinish(chrono)
        }
    }

    useEffect(startTimer,[started])
    useEffect(stoper,[text])

    if(finish){
        return <h1>{finish} secondes !</h1>
    }

  return (
    <div className="m-5 d-flex">
      <div className="p-2 flex-grow-1 border">
        {LOREM_IPSUM}
      </div>
      <div className="p-2 flex-grow-2 border">
            {started ? (
                <textarea 
                    value={text}
                    onChange={ev => setText(ev.target.value)}
                    autoFocus
                />
            ):(
                <Button
                    className="btn-primary"
                    onClick={()=> setStarted(true)}
                    name = "Start !"
                >
                </Button>
            )}    
      </div>
      {started && <h2 className="text-center flex-grow-1">{chrono} secondes</h2>}
    </div>
  )
}
export default Typer;
