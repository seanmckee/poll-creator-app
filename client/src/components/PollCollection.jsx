
import Poll from './Poll'


const PollCollection = ({polls}) => {
  return (
    <ul className="poll-collection">
        {polls ? polls.sort((a,b)=>b.id-a.id).map(poll => (
           <Poll 
                key={poll.id}
                question={poll.question}
                answer1={poll.answer1}
                answer2={poll.answer2}
           />
        )): console.log("no polls")}
    </ul>
  )
}

export default PollCollection