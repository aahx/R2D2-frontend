import { useState, useEffect } from "react";
import axios from "axios";

export default function Prospect(){
    const [inputValue, setInputValue] = useState();
    const [label, setLabel] = useState("Prospect Info")
    const baseURL = "https://r2d2-mike-7f8d7793b971.herokuapp.com";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${baseURL}/prospect_save`);
                setInputValue(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [baseURL])


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${baseURL}/prospect_info`, {
                updated_info: inputValue
            })
            setLabel("Prospect Info Submitted")
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <section className="Prospect">
            <div className="container">
                <label className={label === "Prospect Info Submitted" ? "green-label" : ""}>
                    {label}
                </label>
                <form onSubmit={handleSubmit}>
                    <textarea 
                        className="prospect-textarea"
                        value={inputValue}
                        onChange={handleChange}
                    />
                    <button type="submit">(2) Submit</button>
                </form>
            </div>
        </section>
    )
}