import anime1 from './anime1.gif';
import './Loading.css'

export default function Loading() {
    return (
        <>
            <div className="loading"></div>
            <img alt='Loading...' src={anime1} className='LoaderGif' />
        </>
    );
}