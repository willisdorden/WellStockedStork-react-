import React  from 'react';

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
    fontSize: "20",
    textAlign: "center",
};


const Ecomom =() => {
    return(
        <div className="Ecomom" style={styles}>
            <h1>Eco Earth Mom</h1>
            <p style={Content}> You’re a mom who wants the best environment for your baby – both at home and in nature. You don’t need excess and you understand that our actions and consumption have an impact on the world we live in. You want your baby to grow up with strong values and an appreciation for what’s truly important; not things, but making memories, spending time with loved ones and taking advantage of each day. While we could certainly recommend that you buy everything new, there are some things that you can find at your local children’s consignment store, often in barely-used condition: bouncers, swings and similar “nice to haves” fit the bill. For other necessities, check out the list we’ve put together just for you – we think you’ll agree that these items will make life with your baby even more enjoyable!</p>
        </div>
    )
};


export default Ecomom;
