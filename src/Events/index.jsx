import EventCard from "./EventCard"
import '../styles/events.css'

const Events = () => {
    return (
        <>
            <div>
                <EventCard title={"QR Desk"} 
                    description={`Weekly asking the question on the notice board with the help of QR.
                        It contains GK, code debug, engineering concept, current affairs and so on
                        Unlock your knowledge and test your skills in our weekly challenge! 
                        Scan the QR code on the notice board to access a series of engaging questions on a variety of topics, including general knowledge, code debugging, engineering concepts, and current affairs. 
                        The questions will be updated every week, so stay sharp and active! The participant with the highest engagement and accuracy each week will be crowned the winner. Keep checking in to prove your expertise and rise to the top!
                    `}
                />
            </div>
        </>
    )
}

export default Events;