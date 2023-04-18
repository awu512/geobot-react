import './Ranking.css';

function Ranking({className, c1,c2,c3,c4,c5}) {
    return (
        <div className={`rcontainer ${className}`}>
            <div className='rhdr'>RESULTS</div>
            <div className='rline r1'>
                <div className='rnum'>1</div>
                <div className='rcountry'>{c1}</div>
            </div>
            <div className='rline r2'>
                <div className='rnum'>2</div>
                <div className='rcountry'>{c2}</div>
            </div>
            <div className='rline r3'>
                <div className='rnum'>3</div>
                <div className='rcountry'>{c3}</div>
            </div>
            <div className='rline r4'>
                <div className='rnum'>4</div>
                <div className='rcountry'>{c4}</div>
            </div>
            <div className='rline r5'>
                <div className='rnum'>5</div>
                <div className='rcountry'>{c5}</div>
            </div>
        </div>
    )
}

export default Ranking;