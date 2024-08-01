import React from 'react';
import { Link } from 'react-router-dom';

const CTA = ({ title, margin }) => {
    return (
        <Link>
            <button style={{ margin: margin }} className='bg-[rgb(182,142,116)] text-white text-[13px] rounded-sm px-5 py-[10px] tracking-wider' type="button">{title}</button>
        </Link>
    );
}

export default CTA;
