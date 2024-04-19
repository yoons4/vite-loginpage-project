import style from './IndividualButton.module.css';
function IndividualButton(props){
    return(
        <>
             <input {...props} className={style.button} />
        </>
    )
}

export default IndividualButton;