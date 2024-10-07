
import poster from '../assets/eventPoster.jpg'

const EventCard = ({ title, description }) => {
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-md-7 justify-content-center align-items-center overflow-none">
                    <div className="bg-dark" style={{objectFit:"contain", position: "relative"}} >
                        <img 
                            src={poster}
                            alt='event poster'
                            style={{position: "relative", width: "80%", height:"50%", margin:"30%"}}
                        />
                    </div>
                </div>
                <div className="col-md-5">
                    <h1>
                        {title}
                    </h1>
                    <hr />
                    <p>
                        {description}
                    </p>

                    <p className='alert alert-danger'>
                        The website has been hosted is for the testing purposes hence please bareus incase of miscomforts.
                        mail us incase of any technical issues <a href='mailto:rprakashdass@gmail.com'>here</a>
                    </p>

                    <button>
                        Enter Quiz
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EventCard;