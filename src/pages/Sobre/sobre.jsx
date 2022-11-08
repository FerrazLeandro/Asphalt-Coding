import Footer from "../../components/Footer/footer"
import Header from "../../components/Header/header"
import './sobre.css'

function Sobre() {
    return (
        <>
            <Header />
            <div className="fundo">
                <div className="divisao"></div>
                <div className="container align-items-start">
                    <div className="row align-items-start">
                        <div className="col w-100 align-items-start ">
                            <div id="accordion" >
                                <div className="card w-100" >
                                    <div className="card-header"  >
                                        <a className="btn btn-dark w-100 " data-bs-toggle="collapse" href="#collapseOne">
                                            <h2>Asphalt Coding</h2>
                                        </a>
                                    </div>
                                    <div id="collapseOne" className="collapse show w-100" data-bs-parent="#accordion">
                                        <div className="card-body">
                                            <h3 className="text-center fw-normal">Nossas soluções para os desafios globais são impulsionadas pela nossa missão de gerar prosperidade por meio de soluções de transporte e pela nossa visão de sermos o fornecedor de soluções de transporte mais desejado e bem-sucedido do mundo.</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="card w-100">
                                    <div className="card-header">
                                        <a className="collapsed btn btn-dark w-100" data-bs-toggle="collapse" href="#collapseTwo">
                                            <h2>Alessandra Pinheiro</h2>
                                        </a>
                                    </div>
                                    <div id="collapseTwo" className="collapse " data-bs-parent="#accordion">
                                        <div className="card-body">
                                            <h3 className="text-center fw-normal">Alessandra tem sua carreira ligada diretamente a Atlana, empresa da qual possui todas as ações. Ela ainda é conhecida por sua participação na BMW, montadora fundada por seu pai no início do século XX. Além de possuir participação em negócios voltados para o setor de energia, ainda é uma das pessoas mais ricas do mundo.</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="card w-100">
                                    <div className="card-header">
                                        <a className="collapsed btn btn-dark w-100" data-bs-toggle="collapse" href="#collapseThree">
                                            <h2>Anthony Barbosa</h2>
                                        </a>
                                    </div>
                                    <div id="collapseThree" className="collapse" data-bs-parent="#accordion">
                                        <div className="card-body">
                                            <h3 className="text-center fw-normal">Anthony é um self-made man de 20 anos de idade. Ele construiu uma fortuna a partir de negócios com commodities e portos, assim como diversos investimentos nos setores de energia, transporte e mídia.</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="card w-100">
                                    <div className="card-header">
                                        <a className="collapsed btn btn-dark w-100" data-bs-toggle="collapse" href="#collapseFour">
                                            <h2>Cleiver Soares</h2>
                                        </a>
                                    </div>
                                    <div id="collapseFour" className="collapse" data-bs-parent="#accordion">
                                        <div className="card-body">
                                            <h3 className="text-center fw-normal">Cleiver, empreendedor carioca, mundialmente conhecido por ser um dos maiores inventores e empreendedores do século XXI, com atuação em diversas áreas, como produção de energia limpa, internet, desenvolvimento de projetos aeroespaciais, inovações automobilísticas, pesquisas na área de inteligência artificial e neurotecnologia.</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="card w-100">
                                    <div className="card-header">
                                        <a className="collapsed btn btn-dark w-100" data-bs-toggle="collapse" href="#collapseFive">
                                            <h2>Leandro Ferraz</h2>
                                        </a>
                                    </div>
                                    <div id="collapseFive" className="collapse" data-bs-parent="#accordion">
                                        <div className="card-body">
                                            <h3 className="text-center fw-normal">Leandro, empresário e pioneiro do comércio eletrônico, é o proprietário do The Carioca Post, o criador da empresa de exploração espacial Blue Original, e o fundador e antigo CEO da empresa de comércio eletrônico Amazonas. Graças aos seus prósperos empreendimentos comerciais, ele é uma das pessoas mais ricas do mundo.</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="card w-100">
                                    <div className="card-header">
                                        <a className="collapsed btn btn-dark w-100" data-bs-toggle="collapse" href="#collapseSix">
                                            <h2>Rivania Gomes</h2>
                                        </a>
                                    </div>
                                    <div id="collapseSix" className="collapse" data-bs-parent="#accordion">
                                        <div className="card-body">
                                            <h3 className="text-center fw-normal">Rivania administra o blog “Mulheres na Computação”, que incentiva  mulheres a entrar na área da tecnologia e empreender. Segundo ela, o blog surgiu quando se deparou com uma foto da primeira turma de ciência da computação da USP com 70% de mulheres. Ela está listada pela Forbes como under40 em Tecnologia e Educação. .</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <Footer />
        </>
    )
}

export default Sobre;