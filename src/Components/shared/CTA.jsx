
import { Link } from 'react-router-dom';

const CTA = ({ title, margin }) => {
    return (
        <Link>
            <button style={{ margin: margin }} className='bg-[rgb(182,142,116)] text-white text-lg rounded-sm px-10 py-3 tracking-wider' type="button">{title}</button>
        </Link>
    );
}

export default CTA;
