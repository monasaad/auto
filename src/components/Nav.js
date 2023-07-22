import { NavLink } from "react-router-dom";

function Navs(probs) {
    return (
        <NavLink end to={probs.to} class="nav" style={{ display: 'flex', justifyContent: 'flex-start', padding: '0 3vw', textDecoration: 'none', color: 'white' }}>
            <img src={probs.img} width='15px' />
            {/* <p id={probs.id} style={{ marginRight: '2vw' }}>{probs.para}</p> */}
            <p id={probs.id} style={{ marginRight: '2vw' }}>{probs.para}</p>
        </NavLink>

    );
}

export default Navs;



