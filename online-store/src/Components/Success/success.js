import { useNavigate } from 'react-router-dom';
import "./success.css"

 function Success() {

    const navigate = useNavigate();

    return (
        <div className='success-main'>
            <span className='success-mesg'>
                Thank you for the purchase
            </span>
            <button className='success-btn' onClick={() => navigate("/")}>Buy more games</button>
        </div>
    )
}

export default Success