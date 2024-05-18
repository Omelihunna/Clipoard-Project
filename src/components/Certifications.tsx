import React from "react";

const Certs: React.FC = () => {
    return (
        <section id="certs">
            <div className="section-container my-20">
                <div className="flex flex-col md:flex-row mx-auto mt-24">
                    <div className="flex flex-col md:flex-row mx-auto space-x-10">
                        <img src="images/logo-google.png" alt="" />
                    </div>
                    <div className="flex flex-col md:flex-row mx-auto space-x-10">
                        <img src="images/logo-ibm.png" alt="" />
                    </div>
                    <div className="flex flex-col md:flex-row mx-auto space-x-10">
                        <img src="images/logo-microsoft.png" alt="" />
                    </div>
                    <div className="flex flex-col md:flex-row mx-auto space-x-10">
                        <img src="images/logo-hp.png" alt="" />
                    </div>

                    <img src="images/logo-vector-graphics.png" alt="" />
                </div>

            </div>
        </section>
    )
}

export default Certs;