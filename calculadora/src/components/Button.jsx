import './Button.css'

export default ({ label, func }) => {
    function click() {
        if(label == 'AC') {
            console.log('limpar')
            return
        }
        console.log(label)
    }

    return (
        <button className={`button ${func}`} onClick={click}>
            { label }
        </button>
    )
}
    
