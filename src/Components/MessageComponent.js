import React, {useState} from 'react';

function MessageComponent() {
    const[message, setMessage] = useState('');
    const[sent, setSent] = useState(false);

    function HandleText(event) {
        event.preventDefault();
        setMessage(event.target.value);
    }

    function HandleSubmit(event) {
        event.preventDefault();
        setSent(true);
    }

    return(
        <>
        {sent === false? 
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
        :<p>
            <p>This was your comment:</p>
            {message}
        </p>
        }
            
        </>
    )
}

export default MessageComponent;