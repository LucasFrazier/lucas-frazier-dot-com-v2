import { useState, useEffect } from 'react'
import styles from '@styles/Meme.module.css'

export default function Meme() {
    const [meme, setMeme] = useState(
        JSON.parse(localStorage.getItem('meme')) || {
            topText: '',
            bottomText: '',
            altText: 'One Does Not Simply',
            randomImage: 'https://i.imgflip.com/1bij.jpg',
        }
    )
    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        localStorage.setItem('meme', JSON.stringify(meme))
    }, [meme])

    useEffect(() => {
        async function getMemes() {
            const res = await fetch('https://api.imgflip.com/get_memes')
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])

    const getMemeImage = () => {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        const altText = allMemes[randomNumber].name

        setMeme((prevMeme) => ({
            ...prevMeme,
            altText: altText,
            randomImage: url,
        }))
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setMeme((prevMeme) => ({
            ...prevMeme,
            [name]: value,
        }))
    }

    return (
        <main className={styles.main}>
            <h1
                className={`section__title ${styles['section__title--meme-maker']}`}
            >
                Meme Maker
            </h1>
            <div className={styles.form}>
                <label>
                    Top text
                    <input
                        type="text"
                        className={styles['form__input']}
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="bottomText">
                    Bottom text
                    <input
                        type="text"
                        className={styles['form__input']}
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                </label>
                <button
                    className={styles['form__button']}
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className={styles.meme}>
                <img
                    src={meme.randomImage}
                    alt={meme.altText}
                    className="meme__image"
                />
                <h2 className={`top ${styles['meme__text']}`}>
                    {meme.topText}
                </h2>
                <h2 className={`bottom ${styles['meme__text']}`}>
                    {meme.bottomText}
                </h2>
            </div>
        </main>
    )
}
