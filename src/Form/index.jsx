import { useRef } from "react";
import { Link } from "react-router-dom";

const FormStarter = () => {
    
    const {username} = useRef(null);

    const handleOnChange = () => {
        console.log(username)
    }

    return (
        <>
            <div className="container-fluid" style={{color: ""}}>

                <h1 style={{color: ""}}>OR DESK</h1>
                <hr className="me-5"></hr>

                <h3>Idea Description : </h3>
                <hr className="me-5"></hr>

                <p className="align-content-center">
                    Weekly asking the question on the notice board with the help of QR.It contains GK, code debug, engineering concept, current affairs and so on
                    Unlock your knowledge and test your skills in our weekly challenge! Scan the QR code on the notice board to access a series of engaging questions on a variety of topics, including general knowledge, code debugging, engineering concepts, and current affairs. The questions will be updated every week, so stay sharp and active! The participant with the highest engagement and accuracy each week will be crowned the winner. Keep checking in to prove your expertise and rise to the top!
                </p>

                <form className="form-group">
                    <label className="form-control">
                        <h3>Username</h3>
                        <input ref={username} type="username" placeholder="ex.. maran" onChange={handleOnChange}></input>
                    </label>
                </form>

                <Link to={'/form/1'} className="btn btn-primary">
                        Attend the Quiz
                </Link>

            </div>
        </> 
    )
}

export default FormStarter;