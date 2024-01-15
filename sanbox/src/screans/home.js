import Button from '../container/button';

function Home(props){
    function onValidate(){
        alert("Salut")
    }
    return(
        <div>
            Hello world
            <br/>
            <Button 
                name="Mon Boutton" 
                className="btn-primary" 
                onClick={onValidate}
                yelling
            />
            <br/>
            <Button 
                className="btn-warning" 
                link="https://google.fr/"
            />
        </div>
    )
}

export default Home