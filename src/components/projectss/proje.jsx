export const Proj = ({ }) => {
    return (
        <div>
            <div className="container5 cntr" id="container5">

                <h2><span className="me">Projects</span></h2>

                <div className="container-card">

                    <div className="card">
                        <figure>
                            <a className="visitp" href="https://xabrielgonzalez.github.io/E-Comerce/" target="_blank"> <img className="imgproje" src="./src/img/ecomerce.png"/></a>

                        </figure>
                        <div className="contenido-card">
                            <h3>E-Comerce</h3>
                            <p>This E-Comm project involves a shopping site. <span className="boostrap">Bootstrap</span> and APIs used. I'll
                                upgrade it for a modern,
                                attractive look.</p>

                        </div>
                    </div>
                    <div className="card">
                        <figure>
                            <img className="imgproje" src="./src/img/EnglishtoFrench.png" />
                        </figure>
                        <div className="contenido-card">
                            <h3>English to French translator.</h3>
                            <p><span className="python">Python</span> was used for the creation of this project and corresponding testing
                                was
                                performed.</p>
                            <a className="visitp" href="https://github.com/xabrielgonzalez/EnglishToFrenchTranslator" target="_blank">Go to repositorie</a>
                        </div>
                    </div>
                    <div class="card">
                        <figure>
                            <a className="visitp" href="https://xabrielgonzalez.github.io/Planechase-MTG-beta/" target="_blank"><img className="imgproje" src="./src/img/mtg.png"/></a>

                        </figure>
                        <div className="contenido-card">
                            <h3>Planeschange</h3>
                            <p> It is an expansion to a strategy card game that involves defeating opponents. This add-on adds more
                                dynamism and fun to the gameplay.<span class="html5">HTML5</span> and <span className="css3">CSS3 </span> were
                                used.
                            </p>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}