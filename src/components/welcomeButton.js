
const WButton = (props) => {
    const openApp=(e)=>{
        var element = e.target.parentNode.parentNode;
        element.classList.add("transition");
        setTimeout(()=>{element.style.display="none"},1000)
        
    }
  return (
    <div onClick={openApp} className="entryButton">
        <h1>
            {props.text}
        </h1>
    </div>
  )
}

export default WButton