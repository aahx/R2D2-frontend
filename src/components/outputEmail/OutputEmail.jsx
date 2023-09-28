export default function OutputEmail({ aiGeneratedEmail }) {
    return (
        <section className="OutputEmail">
            <div className="container">

                <label className="title">
                    A.I. Generated Marketing Email: 
                </label>

                <div className="email-container">
                    <div className="email-content">
                        {aiGeneratedEmail}
                    </div>
                </div>
                <div className="link-container">
                    <a href="https://github.com/aahx/R2D2-frontend" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>

                    <a href="https://r2d2-mike-7f8d7793b971.herokuapp.com/docs" target="_blank" rel="noopener noreferrer">
                        Backend Swagger
                    </a>
                </div>
            </div>
        </section>
    )
}