import "./ImgNav.css"

export default function ImgNav({title}){
    return(
        <>
        <div className="box">
         <img  className="imgNav" src={title}></img>
        </div>
        </>
    )
}