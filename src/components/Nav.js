export default function Nav(){
    const img = require('../images/logo.jpg');
    const date = new Date().toDateString();

    return (
        <div>
            <div className='nav'>
                <img className='logo' src={img} alt='logo'/>
                <h1 className='title'>On a Journey</h1>
                <span className='date'>{date}</span>
            </div>
        </div>
    );
};