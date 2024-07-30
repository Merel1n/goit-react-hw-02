import css from './Options.module.css'
const Options = ({updateFeedback, totalFeedback, resetFeedback}) => {
    return (
        <div className={css.container}>
            <button type='button' className={css.button} onClick={() => { updateFeedback('good') }}>Good</button>
            <button type='button' className={css.button} onClick={() => { updateFeedback('neutral') }}>Neutral</button>
            <button type='button' className={css.button} onClick={() => { updateFeedback('bad') }}>Bad</button>
            {totalFeedback > 0 && <button type='button' className={css.button} onClick={() => {resetFeedback()}}>Reset</button>}
        </div>
    )
}
export default Options