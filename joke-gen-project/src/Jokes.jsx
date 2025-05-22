
export default function Jokes ({setup, punchline, upvote, downvote, isPun}){
    return(
        <div className="joke-box">
            {setup ? <h1>Setup: {setup }</h1> : null}
            {punchline ? <h2>Punchline: {punchline}</h2> : null}
            <span>Upvote: {upvote}</span>
            <span>Downvote: {downvote}</span>
            <span>Pun: {isPun ? "Yes" : "No"}</span>
        </div>
    )
}