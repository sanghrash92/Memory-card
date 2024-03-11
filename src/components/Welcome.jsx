
const Btn = ({mode, handleClick}) => {
    const style = {
        width: '150px',
        height: '40px',
    }

    return (
        <button style={style} onClick={handleClick}>{mode}</button>
    )
}

export const Welcome = ({fetchReq}) => {
        
    const handleMode = (e) => {
        if (e.target.innerHTML === 'Easy') {
            return fetchReq(6)
        } else if (e.target.innerHTML === 'Medium') {
            return fetchReq(12)
        } else {
            return fetchReq(16)
        }
    } 

    return (
        <div className="button">
            <Btn mode='Easy' handleClick={handleMode} /> 
            <Btn mode='Medium' handleClick={handleMode} /> 
            <Btn mode='Hard' handleClick={handleMode} /> 
        </div>
    )
}