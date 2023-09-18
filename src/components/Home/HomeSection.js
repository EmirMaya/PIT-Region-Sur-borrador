import { Link } from 'react-router-dom';
import './HomeSection.scss'
import { Fade } from "react-awesome-reveal";
const HomeSection = () => {
    return (
        <>
            <section className='us-section'>
                <div className='us-div-section'>
                    <h2 className='us-title'>
                        SOBRE NOSOTROS
                    </h2>
                    <p>El Polo de Innovación Tecnológica de la Región Sur de Mendoza es un proyecto asociativo que comprende a los departamentos de General Alvear, Malargüe y San Rafael y en el que participan empresas de base tecnológica, universidades e institutos de investigación, el gobierno provincial y los gobiernos municipales.</p>
                </div>
                <img className='us-img' src="./img/carousel1.jpg" alt='sobre-nosotros' />
            </section>

            <section className='digital-culture'>
                <h2 className='digital-culture-title'>
                    Formando la cultura digital
                </h2>
                <div className='dig-box'>
                    <Fade cascade direction='left' triggerOnce={true}>
                        <div className='dig-container'>
                            <p><b>MISIÓN</b></p>
                            <p>Posicionar la Región Sur de Mendoza como referente a nivel nacional e internacional en materia de tecnologías innovadoras.</p>
                        </div>
                        <div className='dig-container'>
                            <p><b>VISIÓN</b></p>
                            <p>Contribuir al desarrollo sostenible de la Región Sur de Mendoza, enfocándonos en la generación de talento tecnológico.</p>
                        </div>
                        <div className='dig-container'>
                            <p><b>VALORES</b></p>
                            <p>Nuestro proyecto se basa en cuatro valores fundamentales: ética y profesionalismo, asociatividad, innovación y mejora continua.</p>
                        </div>
                    </Fade>
                </div>

            </section >

            <section className='us-section'>
                <img className='us-img' src="./img/carousel1.jpg" alt='sobre-nosotros' />
                <div className='us-div-section text-end'>
                    <h2 className='us-title'>
                        ¿QUIÉNES LO FORMAMOS?
                    </h2>
                    <p>El Polo de Innovación Tecnológica Región Sur Mendoza nació el 22 de noviembre de 2018 es una Asociación Civil sin fines de lucro que nuclea a empresas de General Alvear, Malargüe y San Rafael proveedoras de productos y servicios basados en el desarrollo del conocimiento.</p>
                </div>
            </section>
            <section>
                <div className='py-title-div text-center'>
                    <p>Conoce en qué estamos trabajando</p>
                    <h3>Proyectos</h3>
                </div>
                <Fade direction='left' triggerOnce='true'>
                    <div className='proyect-container'>
                        <div className='proyect-info'>
                            <h4>
                                INTRODUCCIÓN A PYTHON
                            </h4>
                            <p>
                                Curso de introducción a la programación en Python online, con una duración de 3 meses.
                            </p>

                            <Link className='proyect-link' to="/parque-tecnologico.zip">Más info</Link>

                        </div>
                        <img className='proyect-img' src='./img/carousel3.jpg' alt='python' />
                    </div>
                </Fade>
                <Fade direction='right' triggerOnce='true'>
                    <div className='proyect-container text-end'>
                        <img className='proyect-img' src='./img/carousel3.jpg' alt='parque-tecnologico' />
                        <div className='proyect-info'>
                            <h4>
                                PARQUE TECNOLÓGICO
                            </h4>
                            <p>
                                Toda la documentación correspondiente al Parque Tecnológico de San Rafael la podés descargar haciendo clic en el botón debajo. Incluye plan estratégico, presupuesto y planos.
                            </p>
                            <Link className='proyect-link' to="/parque-tecnologico.zip" >Descargar</Link>
                        </div>
                    </div>
                </Fade>
            </section>
        </>
    )
}

export default HomeSection