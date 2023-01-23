import { useState } from "react"

const Poll = ({question, answer1, answer2}) => {

    const [vote1, setVote1] = useState(0)
    const [vote2, setVote2] = useState(0)
    const [voted, setVoted] = useState(false)

    const answer1Clicked = () => {
        if(!voted) setVote1(vote1+1);
        setVoted(!voted)
    }

    const answer2Clicked = () => {
        if(!voted) setVote2(vote2+1)
        setVoted(!voted)
    }


  return (
    <div className="poll">
        <h3 className="question">{question}</h3>

        {
            !voted ? <div className="vote-button-container">
                <button className="answer1-button" onClick={answer1Clicked}>{answer1}</button> <br />
                <button className="answer2-button" onClick={answer2Clicked}>{answer2}</button>
            </div>: <p>vote1: {vote1}, vote2: {vote2}</p>
        }
        
        
        
    </div>
  )
}

export default Poll