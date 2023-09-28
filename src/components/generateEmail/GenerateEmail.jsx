import { useState, useEffect } from "react";
import axios from "axios";

export default function GenerateEmail({ companyInfo, prospectInfo, setAiGeneratedEmail }) {
    // Default Values
    const DEFAULT_COMPANY_NAME = "RapidRoad";
    const DEFAULT_PROSPECT_NAME = "GitLab";
    const DEFAULT_SALES_REP = "Michael Kim";
    const BASE_URL = "https://r2d2-mike-7f8d7793b971.herokuapp.com";

    // useStates
    const [companyName, setCompanyName] = useState(DEFAULT_COMPANY_NAME);
    const [prospectName, setProspectName] = useState(DEFAULT_PROSPECT_NAME);
    const [salesRep, setSalesRep] = useState(DEFAULT_SALES_REP);
    const [loading, setLoading] = useState(false);
    const [loadingScrollIndex, setLoadingScrollIndex] = useState(0);

    // Loading messages
    const loadingMessages = [
        "Sending data...",
        "Communicating with OpenAI...",
        "Analyzing prompts...",
        "Fetching results...",
        "Generating...",
        "Generating.",
        "Generating..",
        "Generating...",
        "Wait for it...",
    ];


    // Generating Email
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const requestPayload = {
                prospect_info: prospectInfo,
                prospect_name: prospectName,
                company_info: companyInfo,
                company_name: companyName,
                sales_rep: salesRep
            };
            const response = await axios.post(`${BASE_URL}/generate_email`, requestPayload);
            setAiGeneratedEmail(response.data.output_text);
            
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        let interval;
        if (loading) {
            interval = setInterval(() => {
                setLoadingScrollIndex((prevIndex) => (prevIndex + 1) % loadingMessages.length);
            }, 1550);
        }

        return () => {
            clearInterval(interval);
            setLoadingScrollIndex(0);
        };
    }, [loading]);


    return (
        <section className="GenerateEmail">
            <div className="container">
                <div className="instruction-container">
                    <span className="instruction">
                        {companyName && prospectName && salesRep ? "" : "Please Fill in All Fields"}
                    </span>
                </div>

                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <label>Enter Your Company Name: </label>
                        <input
                            type="text"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            />
                        <br/>
                        <label>Enter Prospect Company Name: </label>
                        <input
                            type="text"
                            value={prospectName}
                            onChange={(e) => setProspectName(e.target.value)}
                            />
                        <br/>
                        <label>Enter Your Sales Rep Name: </label>
                        <input
                            type="text"
                            value={salesRep}
                            onChange={(e) => setSalesRep(e.target.value)}
                            />
                        <br/>
                        <div className="button-container">
                            <button id="test" type="submit" disabled={loading}>
                                {loading ? loadingMessages[loadingScrollIndex] : "Generate Email"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}