import { useState, useEffect } from "react";
import axios from "axios";

export default function Company(){
    const [inputValue, setInputValue] = useState();
    const [label, setLabel] = useState("Your Company Info")
    const baseURL = "https://r2d2-mike-7f8d7793b971.herokuapp.com";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${baseURL}/company_save`);
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
            const response = await axios.post(`${baseURL}/company_info`, {
                updated_info: inputValue
            })
            setLabel("Company Info Submitted")
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <section className="Company">
            <div className="container">
                <label className={label === "Company Info Submitted" ? "green-label" : ""}>
                    {label}
                </label>
                <form onSubmit={handleSubmit}>
                    <textarea 
                        className="company-textarea"
                        value={inputValue}
                        onChange={handleChange}
                    />
                    <button type="submit">(1) Submit</button>
                </form>
            </div>
        </section>
    )
}