import React from 'react';
import './Interview.css'

const Interview = () => {
    return (
        <div className='mb-5 interview-container'>
            <div className="accordion accordion-flush w-75 mx-auto shadow-lg mt-5" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header  py-3" id="flush-headingOne">
                        <button className="accordion-button collapsed fs-5 heading-color heading-font"
                            type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                            aria-expanded="false" aria-controls="flush-collapseOne">
                            How does react work?
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <p>
                                A React app usually has a single root DOM node. Rendering an element into the DOM will change the user interface of the page. React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM. Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header  py-3" id="flush-headingTwo">
                        <button className="accordion-button collapsed fs-5 heading-color heading-font"
                            type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                            aria-expanded="false" aria-controls="flush-collapseTwo">
                            What's the difference between 'props' and 'state'?
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <strong>Props:</strong>
                            <ol>
                                <li>Props are used to pass data from One compOnent to another.</li>
                                <li>It is Immutable (cannot be modified).</li>
                                <li>Props can be used with state and functional compOnents.</li>
                            </ol>
                            <strong>State:</strong>
                            <ol>
                                <li>The state is a local data storage that is local to the compOnent only and cannot be passed to other compOnents.</li>
                                <li>It is Mutable ( can be modified).</li>
                                <li>State can be used only with the state compOnents/class compOnent (Before 16.0).</li>
                            </ol>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header  py-3" id="flush-headingThree">
                        <button className="accordion-button collapsed fs-5 heading-color heading-font"
                            type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                            aria-expanded="false" aria-controls="flush-collapseThree">
                            In what cases is useEffect used in React expect fetct API data?
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <strong>There are many cases is useEffect used in React.</strong>
                            <ol>
                                <li>Running on state change: validating input field.</li>
                                <li>Running on state change: live filtering.</li>
                                <li>Running on state change: trigger animation on new array value.</li>
                                <li>Running on props change: update paragraph list on fetched API data update.</li>
                                <li>Running on props change: updating fetched API data to get BTC updated price.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Interview;