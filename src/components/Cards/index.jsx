function Card() {
    return (
        <>
            <div class="card" style={{ width: '18rem' }}>
                <img src="/dist/assets/imagem/imagem-perfil.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Igor Daniel</h5>
                    <figure>
                        <blockquote class="blockquote">
                            <p class="card-text">"Some quick example text to build on the card title and make up the bulk of the card's content."</p>
                        </blockquote>
                        <figcaption class="blockquote-footer">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                        </figcaption>
                    </figure>

                </div>
            </div>

        </>
    )
}

function Profile({
    image,
    name,
    profession,
    quote,
}) {
    return (
        <section className="col-md-6 col-lg-4 mb-4">
            <div class="card" style={{ width: '18rem' }}>
                <img src={image} alt={name} class="card-img-top" />
                <div class="card-body">
                    <h5 class="card-title"><strong>{name}</strong></h5>
                    <figure>
                        <blockquote class="blockquote">
                            <p class="card-text">{quote}</p>
                        </blockquote>
                        <figcaption class="blockquote-footer">
                            {profession}
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>
    );
}

export default function Gallery() {
    return (
        <div className="row">
            
            <Profile
                image="/src/public/imagem/imagem-perfil.jpg"
                name="Patrick Augusto"
                profession="Desenvolvedor na Empresa X"
                quote="“Um texto de como o embarque ajudou e tals”"
            />
            
            <Profile
                image='/src/public/imagem/imagem-perfil.jpg'
                name='Igor Daniel'
                profession='Desenvolvedor na Empresa X'
                quote="“Um texto de como o embarque ajudou e tals”"
            />
            
            <Profile
                image='/src/public/imagem/imagem-perfil.jpg'
                name='Danilo Santana'
                profession='Desenvolvedor na Empresa X'
                quote="“Um texto de como o embarque ajudou e tals”"
            />
            
        </div>
    );
}