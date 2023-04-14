function Datalist(props){
    
    const delbtn=(event)=>{
        localStorage.removeItem(event.target.id)
        document.getElementById("list").removeChild(event.target.parentNode)
    }

    return(
        <li id={props.id}>
            {props.id}-{props.SellPrice}-{props.ProductName}-{props.Category} <button onClick={delbtn} type="button">DELETE</button>
        </li>
    )
}

export default Datalist;