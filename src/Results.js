import './Results.css';
import Ranking from './Ranking';

function Results() {
    return (
        <div className="results">
            <div className='img-cont'>
                <img 
                    className="img" 
                    alt="" 
                    src='https://images.unsplash.com/photo-1553061599-86c4cfa449d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxMDE5NDU4fHxlbnwwfHx8fA%3D%3D&w=1000&q=80'
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