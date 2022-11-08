import './video.css'
import video from '../../assets/ferrari.mp4'
function Video() {
    return (
        <>
            <div className="video-background-holder">
                <div className="video-background-overlay"></div>
                <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                    <source src={video} type="video/mp4" />
                </video>
                <div className="video-background-content container h-100">
                    <div className="d-flex h-100 text-center align-items-center">
                        <div className="w-100 text-white">
                            <h1 className="display-4">Apresentamos</h1>
                            <p className="lead mb-0"> nossa nova linha de automóveis.</p>
{/*                             <p className="lead">Snippet by <a href="https://bootstrapious.com/snippets" className="text-white">
                                <u>Bootstrapious</u></a>
                            </p>  */}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Video
