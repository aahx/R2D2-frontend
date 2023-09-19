export default function OutputEmail({aiGeneratedEmail}){
    return (
        <section className="OutputEmail">
            <label>
                <h2>
                    Ai Generated Marketing Email
                    </h2>
            </label>
            <div className="email-container">
                <div className="email-content">
                    {aiGeneratedEmail}
                </div>
            </div>
            {/* <button type="button">GitHub</button>
            <button type="button">LinkedIn</button> */}
        </section>
    )
}