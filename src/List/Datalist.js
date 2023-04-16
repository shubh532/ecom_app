function Datalist(props){
    return(
        <li id={props.id}>
            {props.id}-{props.SellPrice}-{props.ProductName}-{props.Category} <button onClick={props.DeletBtn} type="button">DELETE</button>
        </li>
    )
}

export default Datalist;