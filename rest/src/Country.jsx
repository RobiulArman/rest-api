// / import PropTypes from 'prop-types';
import { useState } from 'react';
import './Country.css';
const Country = ({country, handleVisitedCountires}) => {
      console.log(country)
    const {name,flags,population,area,cca3} = country;
    const[visited,setVisited] = useState(false);
    const handleVsisted = () => {
        setVisited(!visited);
    }

    // const passWithparams = () =>{
    //     handleVisitedCountires(country);
    // }
    console.log(handleVisitedCountires);
    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{color:visited ? 'purple':'white' }}>Name: {name.common}</h3>
           <img src={flags.png} alt=""></img>
           <p>Population : {population}</p>
           <p>Area: {area}</p>
           <p><small>Code: {cca3}</small></p>
           <button onClick={() => handleVisitedCountires(country)}>Mark Visited</button> <br></br> <br></br>
           <button onClick={handleVsisted}>{visited ? 'Visited' : 'Going'}</button> <br></br>
           {
            visited ? 'I have Visited this Country':'I want to visit'
           }

        </div>
    );
};

export default Country;
// export default Country;
// import './Country.css';

// const Country = ({ country }) => {
//     console.log(country)
//     const { name, flags } = country;

//     return (
//         <div className='country'>
//             <h3>Name: {name.common}</h3>
//             <img src={flags.png} alt={`Flag of ${name.common}`} />
//         </div>
//     );
// };

// // Adding prop types validation
// Country.propTypes = {
//     country: PropTypes.shape({
//         name: PropTypes.shape({
//             common: PropTypes.string.isRequired
//         }).isRequired,
//         flags: PropTypes.shape({
//             png: PropTypes.string.isRequired
//         }).isRequired
//     }).isRequired
// };

// export default Country;