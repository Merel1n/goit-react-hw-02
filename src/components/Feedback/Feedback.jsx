import css from './Feedback.module.css'
const Feedback = ({ good, neutral, bad, total, positive}) => { 
    return (
        <ul className={css.list}>
            <li >Good: {good}</li>
            <li >Neutral: {neutral}</li>
            <li >Bad: {bad}</li>
            <li ><b>Total:</b> {total}</li>
            <li ><b>Positive:</b> {positive}%</li>
        </ul>
    )
}
export default Feedback