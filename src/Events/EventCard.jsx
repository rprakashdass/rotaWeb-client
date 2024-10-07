import poster from '../assets/eventPoster.jpg';

const EventCard = ({ title, description }) => {
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-md-5 d-flex justify-content-center align-items-center">
                    <div className="align-items-center" style={{ maxWidth: '100%', borderRadius: '10px', }}>
                        <img
                            src={poster}
                            alt='event poster'
                            // margin: "10% 20%",
                            style={{ margin: "0% 2% 2% 10%", maxWidth: "80%", height: "auto", borderRadius: '10px' }}
                        />
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="card bg-light" style={{margin: "7%"}}>
                        <div className="card-body ">
                            <h1 className="card-title">{title}</h1>
                            <hr />
                            <h3>Description</h3>
                            <p>{description}</p>

                            <hr />

                            <h3>Instructions</h3>
                            <p className='alert alert-danger'>
                                The website has been hosted for testing purposes. Please bear with us in case of any discomforts.
                                Email us in case of any technical issues <a href='mailto:rprakashdass@gmail.com'>here</a>
                            </p>

                            <a className="btn btn-primary" href='
                            https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__mh0hwdUOU9aVkMwTTNHMTdXQzI5MDhQMVc5NlNZVi4u&origin=QRCode
                            '>
                                Enter Quiz
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventCard;