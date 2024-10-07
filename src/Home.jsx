import img from './assets/favicon.png';
import './styles/home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className="">
                <div className="container-fluid p-5 card-bg-color">
                    <h1 className="display-3" style={{ color: "#f57388" }}>Rotaract Club of Sri Shakthi Institute of Engineering & Technology</h1>
                    <p className="lead">
                        This is an Test application which is running on onreader.com
                    </p>
                </div>

                {/* ongoing events */}

                <div className='m-5'>
                    <h3>Ongoing Events</h3>
                    <div className='card bg-light' style={{maxWidth: "18rem"}}>
                        <div className='card-header'>
                            QR Desk
                        </div>
                        <p className='card-body'>
                            A professional Service Initiative <br/>
                                <Link to={'/qr-desk'}>
                                    <button className='btn btn-primary' >
                                        Attend the event
                                    </button>
                                </Link>
                        </p>
                    </div>
                </div>

                {/* ongoing projects */}
                <div className='m-5'>
                    <h3>Ongoing Projects</h3>
                    <div className='card bg-light' style={{maxWidth: "18rem"}}>
                        <div className='card-header'>
                            Arivukoodam
                        </div>
                        <p className='card-body'>
                            A District Priority Project Initiative <br/>
                            <button className='btn btn-primary'>Know more</button>
                        </p>
                    </div>
                </div>

                <div className='m-3 mt-5 row  justify-content-center gap-5'>
                    {/*  */}
                    <div className="col-md-2 card" style={{ width: "18rem" }}>
                        <img className="card-img-top" src={img} alt="Card image cap" style={{ width: "100%", margin: "auto auto" }} />
                        <div className="card-body">
                            <p className="lead">Charter</p>
                        </div>
                    </div>

                    {/*  */}
                    <div className="card" style={{ width: "18rem" }}>
                        <img className="card-img-top" src={img} alt="Card image cap" style={{ width: "100%", margin: "auto auto" }} />
                        <div className="card-body">
                            <p className="lead">Events</p>
                        </div>
                    </div>

                    {/*  */}
                    <div className="card" style={{ width: "18rem" }}>
                        <img className="card-img-top" src={img} alt="Card image cap" style={{ width: "100%", margin: "auto auto" }} />
                        <div className="card-body">
                            <p className="lead">Awards</p>
                        </div>
                    </div>

                    {/*  */}
                    <div className="card" style={{ width: "18rem" }}>
                        <img className="card-img-top" src={img} alt="Card image cap" style={{ width: "100%", margin: "auto auto" }} />
                        <div className="card-body">
                            <p className="lead">Recognitions</p>
                        </div>
                    </div>

                    {/*  */}
                    <div className="card" style={{ width: "18rem" }}>
                        <img className="card-img-top" src={img} alt="Card image cap" style={{ width: "100%", margin: "auto auto" }} />
                        <div className="card-body">
                            <p className="lead">Members</p>
                        </div>
                    </div>

                    <p className='alert alert-danger'>
                                The website has been hosted for testing purposes. Please bear with us in case of any discomforts.
                                Email us in case of any technical issues <a href='mailto:rprakashdass@gmail.com'>here</a>
                    </p>

                </div>
            </div>
        </>
    )
}

export default Home;