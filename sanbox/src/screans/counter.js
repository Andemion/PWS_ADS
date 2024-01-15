import Button from "../container/button";
import {useState} from 'react'

function Counter(props){

    const [number, setNumber] = useState(0);
    const [swtiched, setSwtiched] = useState(false);

    function changementBord(){
        setSwtiched()
    }

    function Increment(){
        setNumber(number + 1);
    }
    return(
        <div>
            <h3>Counter</h3>
            <div>
                <h4>{number}</h4>
                <div>
                <Button 
                    name="Incrementor" 
                    className="btn-danger" 
                    onClick={Increment}
                />
                <Button 
                    name="Decrementor" 
                    className="btn-dark" 
                    onClick={()=> setNumber( number - 1)}
                />
                </div>
            </div>
        </div>
    )
}

export default Counter