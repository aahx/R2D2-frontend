import { useState, useEffect } from "react";

export default function Company({ companyInfo, setCompanyInfo }) {
    const [label, setLabel] = useState("Enter Your Company Info");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setCompanyInfo(e.target.value);
        setLoading(true);
        setLabel("Updating Company Info");
    }

    useEffect(() => {
        const updateLoading = setTimeout(() => {
            setLoading(false);
        }, 400);

        const updateLabel = setTimeout(() => {
            setLabel("Enter Your Company Info")
        }, 300);

        return () => {
            clearTimeout(updateLabel);
            clearTimeout(updateLabel);
        }
    }, [loading])

    return (
        <section className="Company">
            <div className="container">
                <label className={loading ? "green-label" : ""}>
                    {label}
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