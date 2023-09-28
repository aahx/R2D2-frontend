import { useState, useEffect } from "react";
import axios from "axios";

export default function Prospect({ prospectInfo , setProspectInfo}){
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setLoading(true);
        setProspectInfo(e.target.value);

        clearTimeout(window.loadingTimeout);

        window.loadingTimeout = setTimeout(() => {
            setLoading(false);
        }, 600);
    }

    return (
        <section className="Prospect">
            <div className="container">
                <label className={loading ? "green-label" : ""}>
                    {loading ? "Updating Prospect Info" : "Enter Prospect Company Information:"}
                </label>
                <form>
                    <textarea 
                        className="prospect-textarea"
                        value={prospectInfo}
                        onChange={handleChange}
                    />
                </form>
            </div>
        </section>
    )
}