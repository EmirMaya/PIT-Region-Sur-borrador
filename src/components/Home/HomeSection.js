import './HomeSection.scss'

const HomeSection = () => {
    return (
        <>
            <section className='us-section'>
                <div className='us-div-section'>
                    <h3 className='us-title'>
                        SOBRE NOSOTROS
                    </h3>
                    <p>El Polo de Innovación Tecnológica de la Región Sur de Mendoza es un proyecto asociativo que comprende a los departamentos de General Alvear, Malargüe y San Rafael y en el que participan empresas de base tecnológica, universidades e institutos de investigación, el gobierno provincial y los gobiernos municipales.</p>
                </div>
                <img className='us-img' src="./img/carousel1.jpg" alt='sobre-nosotros' />
            </section>

            <section className='digital-culture'>
                <h3>
                    Formando la cultura digital
                </h3>
                <div>
                    <h4>MISIÓN</h4>
                    <p>Posicionar la Región Sur de Mendoza como referente a nivel nacional e internacional en materia de tecnologías innovadoras.</p>
                </div>
                <div>
                    <h4>VISIÓN</h4>
                    <p>Contribuir al desarrollo sostenible de la Región Sur de Mendoza, enfocándonos en la generación de talento tecnológico.</p>
                </div>
                <div>
                    <h4>VALORES</h4>
                    <p>Nuestro proyecto se basa en cuatro valores fundamentales: ética y profesionalismo, asociatividad, innovación y mejora continua.</p>
                </div>
            </section>

            <section >
                <h3>
                    ¿QUIÉNES LO FORMAMOS?
                </h3>
                <p>El Polo de Innovación Tecnológica Región Sur Mendoza nació el 22 de noviembre de 2018 es una Asociación Civil sin fines de lucro que nuclea a empresas de General Alvear, Malargüe y San Rafael proveedoras de productos y servicios basados en el desarrollo del conocimiento.</p>
            </section>
        </>
    )
}

export default HomeSection