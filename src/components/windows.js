import Textholders from "./textholders";

const Windows = (props) => {

    var isHidden   
    const OpenPopUp = (e) =>{
        
        var textHolders = e.target.firstChild;
        console.log(textHolders)
        if(!textHolders.classList.contains("act")){
            textHolders.classList.add("act");
       }       
    }
    const closePopUp = (e) =>{
        var textHolders = e.currentTarget;
        
        if(textHolders.classList.contains("act")){
            textHolders.classList.remove("act");
            console.log(textHolders.classList);
       }    
    }
    var titleText=props.title
    const imgstyle1={
        backgroundImage : "url("+props.media+")",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat"
    }
    const imgstyle2={
        backgroundImage : "none"
    }
    var imgstyling;
    if (props.media==null){
        imgstyling=imgstyle2;
    }
    else if(props.media!=null){
        imgstyling=imgstyle1;
        titleText=' ';

    }
    
   
    return (
        <div onClick = {OpenPopUp} className="window" style={imgstyling} >
            <Textholders 
            text={props.text} 
            isHidden={isHidden}
            close={closePopUp}
            />
            {titleText}
        </div>
    );
}

export default Windows