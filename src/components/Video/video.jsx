import './video.css'

function Video() {
    return (
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
            <iframe className="video" src="https://www.youtube.com/embed/MvVXL-vBQs0" title="Ferrari" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        </div>
    )
}

export default Video
