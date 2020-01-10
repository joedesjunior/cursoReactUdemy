import React from 'react'

import Card from '../components/card'

import FormGroup from '../components/form-group'

class Login extends React.Component{

    state = {
        email : '', 
        senha : ''
    }

    entrar = () => {
        console.log('Email: ', this.state.email)
        console.log('Senha: ', this.state.senha)

        if (this.state. email !== 'joedes') { //Testes realizados no dia 10/01
                                    // Apenas para visualizar se está imprimindo.
            console.log('Senha Informada está Errada!')
        } else {
            console.log('Senha Informada está Correta!') 
        }
    }

    render(){
        return(
        <div className="container">
            <div className="row">
                <div className="col-md-6" style={{position : 'relative', left : '300px'}}>
                    <div className="bs-docs-section">
                        <Card title="Tela de Login">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="bs-component">
                                        <fieldset>
                                            <FormGroup label="Email: *" htmlFor="exampleInputEmail1">
                                                <input type="email" 
                                                   value={this.state.email}
                                                   onChange={e => this.setState({email: e.target.value})}  
                                                   className="form-control" 
                                                   id="exampleInputEmail1" 
                                                   aria-describedby="emailHelp"
                                                   placeholder="Digite o Email">
                                                </input>             
                                            </FormGroup>
                                            <FormGroup label="Senha: *" htmlFor="exampleInputPassword1">
                                                <input type="password"
                                                       value={this.state.senha}
                                                       onChange={e => this.setState({senha: e.target.value})}  
                                                       className="form-control"
                                                       id="exampleInputPassword1" 
                                                       placeholder="Digite a Senha">
                                                </input>
                                            </FormGroup>
                                            <button onClick={this.entrar} className="btn btn-success p-2 m-2" name="teste" id="teste">Entrar</button>
                                            <button className="btn btn-danger p-2">Cadastrar</button>
                                            <h6>* Campos obrigatórios</h6>
                                        </fieldset> 
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Login