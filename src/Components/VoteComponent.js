import React, {useState} from 'react';

function VoteComponent() {
    const[vote, setVote] = useState(false);
    const[voteUp, setVoteUp] = useState(false);
    const[voteDown, setVoteDown] = useState(false);

    function HandleUp() {
        setVote(true);
        setVoteUp(true);
    }

    function HandleDown(){
        setVote(true);
        setVoteDown(true);
    }

    return (
        <>
            <div className="VoteDiv">
                {vote === false? 
                <div>
                    Vote the blog above
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg" onClick={HandleDown} className="VoteTick">
                    <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                </svg>
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg" onClick={HandleUp} className="VoteTick">
                    <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
                </svg>

                </div>
                :
                <div>
                    {voteUp === true && <p>You upvoted this post</p>}
                    {voteDown === true && <p>You downvoted this post</p>}
                </div>
                }
                
            </div>

        </>
    )
}

export default VoteComponent;