import React from "react";

const Supercharge: React.FC = () => {
    return (
        <section id="supercharge">
            <div className="section-container my-20 mb-24">
                <h3>
                    Supercharge Your Workflow
                </h3>
                <p className="max-w-3xl mx-auto mb-24 text-xl leading-9 text-center text-grayishBlue">
                    We've got the tools to boost your productivity
                </p>
                <div className="flex flex-col md:flex-row space-x-10 md:space-y-6 md:space-x-0 mx-auto items-center justify-center">
                    <div className="flex flex-col justify-center items-center w-full md:space-y-6 space-x-4 mx-auto">
                        <img src="images/icon-blacklist.svg" alt="" />
                        <h3>
                            Create blacklists
                        </h3>
                        <p className="max-w-3xl mx-auto mb-24 text-xl leading-9 text-center text-grayishBlue">
                            Easily search your snippets by content, category, web address, application and more
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center w-full md:space-y-6 space-x-4 mx-auto">
                        <img src="images/icon-text.svg" alt="" />
                        <h3>
                            Plain text snippets
                        </h3>
                        <p className="max-w-3xl mx-auto mb-24 text-xl leading-9 text-center text-grayishBlue">
                            Remove unwanted formatting from copied text for a consistent look
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center w-full md:space-y-6 space-x-4 mx-auto">
                        <img src="images/icon-preview.svg" alt="" />
                        <h3>
                            Sneak preview
                        </h3>
                        <p className="max-w-3xl mx-auto mb-24 text-xl leading-9 text-center text-grayishBlue">
                            Quick preview of all snippets on your clipboard for easy access
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Supercharge;