import { useState } from 'react'
import { BACKEND_API_URL } from 'config'
import styles from '@styles/AddEvent.module.css'

export default function ImageUpload({ evtId, imageUploaded, token }) {
    const [image, setImage] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()

        const data = {}

        formData.append('data', JSON.stringify(data))

        formData.append(`files.image`, image)

        const res = await fetch(`${BACKEND_API_URL}/api/events/${evtId}`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        })

        if (res.ok) {
            imageUploaded()
        }
    }

    const handleFileChange = (e) => {
        setImage(e.target.files[0])
    }

    return (
        <div className={styles.form}>
            <h1>Upload Event Image</h1>
            <form onSubmit={handleSubmit}>
                <div className={styles.file}>
                    <input type="file" onChange={handleFileChange} />
                </div>
                <input type="submit" value="Upload" className="btn" />
            </form>
        </div>
    )
}
