import { useState, useEffect } from "react";

export default function Company({ companyInfo, setCompanyInfo }) {
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setLoading(true);
        setCompanyInfo(e.target.value);

        clearTimeout(window.loadingTimeout);

        window.loadingTimeout = setTimeout(() => {
            setLoading(false);
        }, 600);
    }

    return (
        <section className="Company">
            <div className="container">
                <label className={loading ? "green-label" : ""}>
                    {loading ? "Updating Company Info" : "Your Company Info"}
                </label>
                <form>
                    <textarea
                        className="company-textarea"
                        value={companyInfo}
                        onChange={handleChange}
                    />
                </form>
            </div>
        </section>
    )
}
