import './Results.css';
import Ranking from './Ranking';

function Results({image, results}) {
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
                c1={results['0']['name']}
                c2={results['1']['name']}
                c3={results['2']['name']}
                c4={results['3']['name']}
                c5={results['4']['name']}
            />
        </div>
    );
}

export default Results;