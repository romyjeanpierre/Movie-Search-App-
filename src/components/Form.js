import { useState } from "react"

export default function Form(props){

    const {getMovie} = props
    const [formData, setFormData] = useState('')

    const handleChange = (e) =>{
        e.preventDefault()
        setFormData(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        getMovie(formData)
        setFormData('')
    };

    return(
        <>
        <h1> Movie Form  </h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Type The Movie Name" value={formData} onChange={handleChange}/>
            <button>Search</button>

        </form>
        </>
    );
}