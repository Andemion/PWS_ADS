function Button(props){



    return(
        <div>
            {props.onClick ?
                <button
                    className={"btn " + props.className}
                    type="button"
                    onClick={props.onClick}
                >
                    {props.name || "click me"} {props.yelling && "!!!"}
                </button>
            :
                <a
                    className={"btn " + (props.className || "btn-secondary")}
                    href={props.link}
                    target="_blank"
                >
                    {props.name || "click me"} {props.yelling && "!!!"}
                </a>
            }
        </div>
    )
}

export default Button