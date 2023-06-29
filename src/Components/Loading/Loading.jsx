import anime1 from './anime1.gif';

export default function Loading() {
    return (
        <div className="loading">
            <img alt='gif' src={anime1} className='LoaderGif' />
        </div>
    );
}