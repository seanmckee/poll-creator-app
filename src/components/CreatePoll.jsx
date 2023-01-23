import { useState } from "react"

const CreatePoll = ({addPoll}) => {

    const [showForm, setShowForm] = useState(false)
    //const [poll, setPoll] = useState(0)

    const [questionState, setQuestionState] = useState("")
    const [answer1State, setAnswer1State] = useState("")
    const [answer2State, setAnswer2State] = useState("")
    

    const handleFormSubmit = (e) => {
        e.preventDefault()
        setShowForm(false)
        console.log("submitted form")
        
        addPoll({
            question: questionState,
            answer1: answer1State,
            answer2: answer2State,
            id: Date.now()
        })

        setQuestionState("")
        setAnswer1State("")
        setAnswer2State("")
    }

  return (
    <div className="create-poll">
        
        {
            showForm ? <form onSubmit={handleFormSubmit} action="">
                    
                    <div className="form-container">
                        <textarea 
                            type="text" 
                            name="question" 
                            placeholder="Enter a Question"
                            required
                            value={questionState}
                            onInput={(e)=>setQuestionState(e.target.value)}
                            className="question-input"
                        /> <br />

                        <input 
                            type="text" 
                            name="answer1" 
                            placeholder="Enter First Answer"
                            required
                            value={answer1State}
                            onInput={(e)=>setAnswer1State(e.target.value)}
                            className="answer1-input"
                        /> <br />

                        <input 
                            type="text" 
                            name="answer2" 
                            placeholder="Enter Second Answer"
                            required
                            value={answer2State}
                            onInput={(e)=>setAnswer2State(e.target.value)}
                            className="answer2-input"
                        /> <br />


                    </div>
                    
                    <div className="form-button-container">
                        <button 
                            type="submit" 
                            className="post-button"   
                        >
                            Post
                        </button>
                        
                        <button className="cancel-button" onClick={() => setShowForm(false)}>Cancel</button>
                    </div>
                    
                </form> : 
                
                <button className= "create-button" onClick={() => setShowForm(true)}>Create a Poll</button>
        }
        

        

        
    </div>
  )
}

export default CreatePoll