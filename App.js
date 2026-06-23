
import { useState } from 'react';
import Banner from './componentes/Banner/banner';
import Botao from './componentes/Botao';
import Formulario from './componentes/Formulario';
import Time from './componentes/Times/Times';
import Colaborador from './componentes/colaborador/colaborador';
import Rodape from './componentes/rodape/rodape';



function App() {

  const times = [
    {
       nome: 'Programação',
       corPrimaria: '#57c278',
       corSecundaria: '#d9f7e9',

    }, {
       nome: 'Front-End',
       corPrimaria: '#82cffa',
       corSecundaria: '#e8f8ff',

    }, {
       nome: 'Data Science',
       corPrimaria: '#a6d157',
       corSecundaria: '#f0f8e2',

    }, {
       nome: 'DevOps',
       corPrimaria: '#e06b69',
       corSecundaria: '#fde7e8',

    }, {
       nome: 'UX&UI',
       corPrimaria: '#db6ebf',
       corSecundaria: '#fae9f5',

    }, {
       nome: 'Mobile',
       corPrimaria: '#ffba05',
       corSecundaria: '#fff5d9',

    }, {
       nome: 'Inovação e Gestao',
       corPrimaria: '#ff8a29',
       corSecundaria: '#ffeedf',

    },
    
     
  ]

  const [colaboradores, setColaboradores] = useState([])
  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores,colaborador])
  }
  return (
    <div className="App">
      <Banner />
      <Formulario
        times={times.map(time => time.nome)}
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
      />
   {times.map(time => (
  <Time  
    key={time.nome} 
    nome={time.nome} 
    corPrimaria={time.corPrimaria} 
    corSecundaria={time.corSecundaria}
    colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
  />
))}  
   <Rodape />
    </div>
  );
}

export default App;
