const weekDays = [
    "lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"
]

function Agenda(props){

   const capitalizedWeekDays = weekDays.map((days) => {
    return days.toUpperCase();
   })

   console.log(capitalizedWeekDays)

    return(
        <div className="m-3">
            <ul>
                {weekDays.map((day)=>(
                    <li key={day}>
                    {props.day == day ?
                       <b>{day.toUpperCase()}</b> 
                    :
                        day.toUpperCase()
                    }
                    </li>
                ))}
            </ul>
        </div>
    )

}

export default Agenda