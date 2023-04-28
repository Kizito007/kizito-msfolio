import React from "react";

const Education = () => {
    return(
        <section className="light" id="portfolio">
            <h2>Education</h2>
            {/* grid of four education cells */}
            <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
                {/* education cell */}
                <div style={{ flex: 1, margin: "0 1rem" }}>
                    <h3>Federal University of Technology Owerri</h3>
                    <p>Industrial and Applied Mathematics</p>
                    <p>2018 - 2023</p>
                </div>
                {/* education cell */}
                <div style={{ flex: 1, margin: "0 1rem" }}>
                    <h3>Deploy a website to Azure</h3>    
                    <p>Web Dev</p>

                    <p>2023</p>  
                </div>
                {/* education cell */}
                {/* <div style={{ flex: 1, margin: "0 1rem" }}>
                    <h3>University of Lagos</h3>
                    <p>Computer Science</p>
                    <p>2016 - 2021</p>
                </div> */}
                {/* education cell */}
                {/* <div style={{ flex: 1, margin: "0 1rem" }}>
                    <h3>University of Lagos</h3>
                    <p>Computer Science</p>
                    <p>2016 - 2021</p>
                </div>    */}
            </div>
        </section>
    )
}

export default Education;