import React, {useState} from 'react';

function MessageComponent() {
    const[preM, setPreM] = useState('')
    const[message, setMessage] = useState('');
    const[sent, setSent] = useState(false);

    function HandleText(event) {
        event.preventDefault();
        setPreM(event.target.value);
    }

    function HandleSubmit(event) {
        event.preventDefault();
        setMessage(preM);
        setSent(true);
    }

    return(
        <>
        <div>
            <h4>Type your comment below</h4>
            <form>
                <textarea name="comment" form="usrform" cols="40" onChange={HandleText}>Enter text here...</textarea>
                <br/>

                <p>
                <input type="submit" onClick={HandleSubmit} />
                </p>
            </form>
        </div>        

        <div>
            <p>Comments:</p>
            <p>{message}</p>
        </div>
            
        </>
    )
}

export default MessageComponent;