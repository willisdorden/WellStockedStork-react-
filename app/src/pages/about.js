import React from 'react';

const styles = {
    display: 'flex',
    justifyContent: "center"
};


const Content ={
        padding: 10,
        margin: 10,
        backgroundColor: "",
        color: "",
        display: "inline-block",
        fontFamily: "monospace",
        fontSize: "32",
        textAlign: "center",
};

const About = () => {
        return(
            <div className="about" style={styles}>
                <h1>About:</h1>
                <p style={Content}>We’re parents, just like you. We recently had a baby and we quickly came to this realization:
                    The problem with baby stuff isn’t that you don’t know what to get.  You know exactly what you need, but there are so many choices. For everything. Hundreds of bottles. Just as many nipples. Bibs. Pacifiers. Countless car seats. Strollers that range in price from $50 to thousands. Diapers galore. Bouncers, swings, and chairs that’ll make your head spin. Toys of all types. Cribs. Bassinets. Co-sleepers. And that’s just the start! The options seem endless, so we’re here to help.
                    The Well-Stocked Stork is our brainchild. We’re Willis and Darcy, a real-life couple with a newborn son who was born the summer of 2017, more than nine years after his older sister arrived on the scene. Boy oh boy, have things changed in a decade!
                    We’ve combed through product reviews, ratings and old-fashioned recommendations from actual moms and dads to bring you the best products from a wide-array of retailers. The best part? We’ll tailor our suggestions to match your personality, budget and style.
                    When you use our recommendations, we’re confident that The Well-Stocked Stork will help you make the best selections to suit your family.
                    Here’s to your next special delivery,

                    Willis and Darcy
                </p>
            </div>
        )
};

export default About
