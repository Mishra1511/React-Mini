export function Button({color,onClick}){
    return <button onClick={onClick} style={{margin:'10px',height:'30px', width:'100px',border:'none',backgroundColor:color}}>
        {color}</button>
}
