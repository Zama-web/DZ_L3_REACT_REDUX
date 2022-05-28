import React from 'react';


function News(props) {

    return (
        <div>
            <button onClick={props.getPost} >Get news</button>
            <ul>
                {
                    props.propPost.map((item, i) => {
                        return (
                            <li key={i} >
                                <h1> {item.title} </h1>
                                <p> {item.body} </p>
                                <p> {item.date} </p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default News
