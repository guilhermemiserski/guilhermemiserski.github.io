import { FaPython, FaAngular, FaReact } from 'react-icons/fa'
import { SiTypescript, SiTwitter, SiInstagram, SiGithub } from 'react-icons/si'
import { IconContext } from "react-icons";

function App() {

    return (
        <div className="container">
            <div className='wrapper-hand'></div>
            <div className='wrapper-hand-end'></div>
            <div className="row m-0">
                <div className="col-md-8">
                    <h1 className="text-white">transformar <span className="animated">ideias</span> em <span className="animated">produtos</span> da vida real é a minha vocação.</h1>
                </div>
                <div className="col-md-4 align-self-center text-center">
                    <a href='https://api.whatsapp.com/send?phone=5546991108130' target={'_blank'} className="btn">encontre-me</a>
                </div>
            </div>
            <div className="row m-0 titulo">
                <div className="col-md-8">
                    <h3>olá, visitante! 👋🏽</h3>
                    <h2>me chamo <span className='animated'>@guilherme_miserski</span> 🧒🏽</h2>
                    <p>sou dev jr, tenho 23 anos e sou natural do interior do paraná.
                        possuo experiência nas linguagens typescript e python, além dos frameworks angular, react e django.
                    </p>
                </div>
                <div className="col-md-4">
                    <div className='col-md-12 text-center icons'>
                        <IconContext.Provider value={{ className: 'mr-10' }}>
                            <FaPython size={48} color='#fff'></FaPython>
                            <FaAngular size={48} color='#8500db'></FaAngular>
                            <FaReact size={48} color='#fff'></FaReact>
                            <SiTypescript size={48} color='#8500db'></SiTypescript>
                        </IconContext.Provider>
                    </div>
                </div>
            </div>

            <div className="row m-0">
                <div className="wrapper col-md-12 text-center">
                    <a href="https://twitter.com/g7miserski" target={'_blank'} className="icon twitter">
                        <div className="tooltip">Twitter</div>
                        <span><SiTwitter size={26} color='#46c1f6'></SiTwitter></span>
                    </a>
                    <a href="https://www.instagram.com/g7miserski/" target={'_blank'} className="icon instagram">
                        <div className="tooltip">Instagram</div>
                        <span><SiInstagram size={26} color='#e1306c'></SiInstagram></span>
                    </a>
                    <a href="https://github.com/guilhermemiserski" target={'_blank'} className="icon github">
                        <div className="tooltip">Github</div>
                        <span><SiGithub size={26} color='#fff'></SiGithub></span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default App
