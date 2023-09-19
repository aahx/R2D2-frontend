import { useState, useEffect } from "react";
import axios from "axios";

export default function GenerateEmail({setAiGeneratedEmail}) {
    const [companyName, setCompanyName] = useState("RapidRoad");
    const [companyInfo, setCompanyInfo] = useState("");
    const [prospectName, setProspectName] = useState("GitLab");
    const [prospectInfo, setProspectInfo] = useState("");
    const [salesRep, setSalesRep] = useState("Michael Kim");
    const [loading, setLoading] = useState(false);
    const baseURL = "https://r2d2-mike-7f8d7793b971.herokuapp.com";


    // Setting Propsect Info
    useEffect(() => {
        const fetchProspectData = async () => {
            try {
                const response = await axios.get(`${baseURL}/prospect_info`);
                setProspectInfo(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProspectData();
    }, [baseURL])

    // Setting Company Info
    useEffect(() => {
        const fetchCompanyData = async () => {
            try {
                const response = await axios.get(`${baseURL}/company_info`);
                setCompanyInfo(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchCompanyData();
    }, [baseURL])


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

            const response = await axios.post(`${baseURL}/generate_email`, requestPayload);

            setAiGeneratedEmail(response.data.output_text);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="GenerateEmail">
            <div className="container">
                <label className={loading ? "green-label" : ""}>
                    {loading ? "Loading..." : "Generate Email"}
                </label>
                <div className="instruction">
                    Fill out all info
                </div>

                <form onSubmit={handleSubmit}>
                    <label>Enter Your Company Name</label>
                    <input
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                    />
                    <br/>

                    <label>Enter Prospect Company Name</label>
                    <input
                        type="text"
                        value={prospectName}
                        onChange={(e) => setProspectName(e.target.value)}
                    />
                    <br/>

                    <label>Enter Your Sales Rep Name</label>
                    <input
                        type="text"
                        value={salesRep}
                        onChange={(e) => setSalesRep(e.target.value)}
                    />
                    <br/>
                    <div className="button-container">
                        <button id="test" type="submit">(3) Submit</button>
                    </div>
                </form>
            </div>
        </section>
    )
}