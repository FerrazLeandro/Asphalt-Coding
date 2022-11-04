import { Card, Row, Col, Form, FloatingLabel } from "react-bootstrap";
import { Container } from "./styles";
import Btn from "../../components/LoginButton";
import {useNavigate} from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'

import Logo from "../../img/Logo.png";

function Login() {
  const MySwal = withReactContent(Swal);

  const navigation=useNavigate()
  function handleSubmit(event) {
    event.preventDefault();

   let userName=document.getElementById("nomeUsuario").value;
   let password=document.getElementById("senha").value;

   let users = JSON.parse(localStorage.getItem("pessoas")) || []
   let usuarioExistente= users.map(user=> {
      if (user.nomeUsuario === userName && user.senha === password){

        localStorage.setItem("usuarioLogado",JSON.stringify(user))
        
        navigation("/home")
        return user;
      };
   })

    if(usuarioExistente[0] === undefined){
      MySwal.fire({
        icon: "error", 
        timer: 1500,
        title: <p>Usuário ou Senha Inválidos!!</p>,
        footer: 'Copyright grupo 06',
      })
    }
  }
  return (
    <Container>
    
      <img src={Logo} alt="Fifi Filmes" className="img-fluid mb-5" />
      <Card className="content-box content-box-login borda-arredondada">
        <Card.Body>
          <h2 className="mb-3 titulo">Digite seu nome de usuário</h2>
          <Row>
            <Col md>
              <FloatingLabel controlId="nomeUsuario" label="Usuário" className="mb-3" >
                <Form.Control type="text" id="nomeUsuario" placeholder=" " />
              </FloatingLabel>
            </Col>
          </Row>
          <h2 className="mb-3 titulo">Digite sua senha</h2>
          <Row>
            <Col md>
              <FloatingLabel controlId="senha" label="Senha" className="mb-3">
                <Form.Control type="password" id="senha" placeholder=" " />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col md>
              <Btn title="Acessar" url=" " className="mb-3" handleFunction={e =>{handleSubmit(e)}} ></Btn>
            </Col>
            <Col md>
              <Btn title="Cadastrar" url="/cliente/cadastro"></Btn>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Login;
