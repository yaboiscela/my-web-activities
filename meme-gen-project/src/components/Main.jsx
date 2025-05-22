import {useState, useEffect} from "react"

export default function Main() {

    const [meme, setMeme] = useState({
        topText: "*Insert Top Text*",
        bottomText: "*Insert Bottom Text*",
        image: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = useState([])

    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes", { mode: 'cors' })
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function handleChange(event){
        const {value, name} = event.currentTarget
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    
    function handleRandomMeme(){
        const rand = 1 + Math.floor(Math.random() * 100)
        console.log(rand)
        console.log(allMemes[rand].url)
        setMeme(prevMeme => ({
            ...prevMeme,
            image: allMemes[rand].url
        }))
    }    

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="*Insert Top Text*"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="*Insert Bottom Text*"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>
                <button onClick={handleRandomMeme}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.image} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}