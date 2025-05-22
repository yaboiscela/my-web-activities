
import Jokes from "./Jokes"

function App() {
  return (
    <>
      <Jokes 
      setup="I got my daughter a fridge for her birthday." 
      punchline="I can't wait to see her face light up when she opens it."
      upvote={0}
      downvote={0}
      isPun={true}
      />
      <Jokes 
      setup="How did the hacker escape the police?" 
      punchline="He just ransomware!"
      upvote={0}
      downvote={0}
      isPun={true}
      />
      <Jokes 
      setup="Why don't pirates travel on mountain roads?" 
      punchline="Scurvy."
      upvote={0}
      downvote={0}
      isPun={true}
      />
      <Jokes 
      setup="Why do bees stay in the hive in the winter?" 
      punchline="Swarm"
      upvote={0}
      downvote={0}
      isPun={true}
      />
      <Jokes 
      setup="What's the best thing about Switzerland?" 
      punchline="I don't know, but the flag is a big plus!"
      upvote={0}
      downvote={0}
      isPun={true}
      />
      <Jokes 
      setup="this is just a setup" 
      punchline=""
      upvote={0}
      downvote={0}
      isPun={true}
      />
      <Jokes 
      setup="" 
      punchline="this is just a punchline"
      upvote={0}
      downvote={0}
      isPun={true}
      />
    </>
  )
}

export default App
