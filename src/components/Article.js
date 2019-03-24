import React from 'react';

const Article = ({title, text}) => {
    
    const styles = {
        marginTop: 40
    }

    return (
        <article styles={styles}>
            <h3 style= {{
                marginBottom: 3,
            }}> {title} </h3>
           
            <p style= {{fontSize: 15}}>{text}</p>
        </article>
    );
}

export default Article

