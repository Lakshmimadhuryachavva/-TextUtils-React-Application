import React from 'react';

export default function About(props) {
    const darkModeStyles = {
        backgroundColor: props.mode === "dark" ? '#192734' : "white",
        color: props.mode === "dark" ? 'white' : "#333",
    };

    return (
        <div className='container'>
            <h1>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                            style={darkModeStyles}
                        >
                            TeamWork
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" >
                            <strong>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione numquam quasi debitis accusamus dolorum?</strong>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                            style={darkModeStyles}
                        >
                            Relaibility
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" >
                            <strong>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas asperiores minima corrupti facere expedita?</strong>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                            style={darkModeStyles}
                        >
                            Responsible
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" >
                            <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores consectetur cum deserunt quae? Ab.</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
