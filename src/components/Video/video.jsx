import './video.css'

function Video() {
    return (
        <>
            <h1>Apresentamos nossa nova linha de automóveis.</h1>
            <div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <iframe className="video" src="https://www.youtube.com/embed/MvVXL-vBQs0" title="Ferrari"  ></iframe>
                </div>
            </div>
        </>
    )
}

export default Video
