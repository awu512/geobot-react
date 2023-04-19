import './Results.css';
import Ranking from './Ranking';

function Results({image}) {
    return (
        <div className="results">
            <div className='img-cont'>
                <img 
                    className="img" 
                    alt="" 
                    src={URL.createObjectURL(image)}
                />
            </div>
            <Ranking
                className='ranking'
                c1='United States'
                c2='Djibouti'
                c3='Bhutan'
                c4='Montenegro'
                c5='Botswana'
            />
        </div>
    );
}

export default Results;