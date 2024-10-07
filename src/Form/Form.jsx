import { useState } from "react";
import FormCard from "./FormCard";

import './form.css';

const questions = [
    'If you could choose any historical figure to have dinner with, who would it be and why?',
    'What is the most significant invention of the last century, in your opinion, and how has it impacted society?',
    'If you could only eat one cuisine for the rest of your life, what would it be and what does that choice say about your taste preferences?',
    'What is the difference between a DSLR and a mirrorless camera, and what advantages does each offer?',
    'What does the term "aperture" refer to in photography, and how does it affect a photograph?',
    'Which fruit has seeds on the outside?'
]

const Form = () => {

    const containerStyle = {
        color: "#000"
        // marginLeft: "20%",
    }

    const goToPrevious = () => {
        if ( index > 0)
            setIndex((index - 1) % questions.length);
        else setIndex(questions.length-1)
    }

    const goToNext = () => {
        setIndex((index + 1) % questions.length);
    }
    
    const [ index, setIndex ] = useState(1);
    return (
        <div className="container-fluid row text-white pt-5 text-black" style={containerStyle}>
            <div className="col-md-3"></div>
            <div className="col-md-6 rounded sh">
                <div className="overflow-hidden">
                    <h1 className="m-5">QR DESk - A knowledge Quest</h1>
                </div>
                <hr/>
                <FormCard question={questions[index]} placeholder={"This is an test"}/>
                <div className="row justify-content-between m-3">
                    <button className="rounded col-3" onClick={goToPrevious}> Previous </button>
                    <button className="col-6">{index+1}</button>
                    <button className="rounded col-3" onClick={goToNext}> Next </button>
                </div>
            </div>
            <div className="col-md-3"></div>
        </div>
    )
}

export default Form;
