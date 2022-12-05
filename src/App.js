import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './component/button/buttonStyles.css';
import Button from './component/button/Button';
import Input from './component/input/Input';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [math, setMath] = useState(0);
  const [science, setScience] = useState(0);
  const [physic, setPhysic] = useState(0);
  const [chemistry, setChemistry] = useState(0);
  const [biology, setBiology] = useState(0);
  const [average, setAverage] = useState(0);

  const AVERAGE = () => {
    setAverage((Number(math) + Number(science) + Number(physic) + Number(chemistry) + Number(biology)) / 5);
  };

  const handleChangeMath = (event) => {
    setMath(event.target.value);
  };
  const handleChangeScience = (event) => {
    setScience(event.target.value);
  };
  const handleChangePhysic = (event) => {
    setPhysic(event.target.value);
  };
  const handleChangeChemistry = (event) => {
    setChemistry(event.target.value);
  };
  const handleChangeBiologi = (event) => {
    setBiology(event.target.value);
  };

  return (
      <div className="App">
        <div class="container-fluid my-5">
              <div class="row">
              <div class="col-5 GBR1">
                <h1 class="judul">RAPORT </h1>
                  <div class="form-group f1 BATAS">
                    <label for="username">MATHEMATIC</label>
                    <Input fungsi={handleChangeMath}/>
                  </div>
                  <div class="form-group f1 BATAS">
                    <label for="username">SCIENCE</label>
                    <Input fungsi={handleChangeScience}/>
                  </div>
                  <div class="form-group f1 BATAS">
                    <label for="username">PHYSIC</label>
                    <Input fungsi={handleChangePhysic}/>
                  </div>
                  <div class="form-group f1 BATAS">
                    <label for="username">CHEMISTRY</label>
                    <Input fungsi={handleChangeChemistry}/>
                  </div>
                  <div class="form-group f1 BATAS">
                    <label for="username">BIOLOGY</label>
                    <Input fungsi={handleChangeBiologi}/>
                  </div>
              <p>{average}</p>
              <Button namaFungsi="SUBMIT" fungsi={AVERAGE} />
          </div>
              {
                 average >= 0 && average <= 40 ? <div class="col-3 darkred"> <p>E</p> </div> : null
              }
              {
                 average >= 40.01 && average <= 48 ? <div class="col-3 red"> <p>D</p> </div> : null
              }
              {
                 average >= 48.01 && average <= 56 ? <div class="col-3 red"> <p>C</p> </div> : null
              }
              {
                 average >= 56.01 && average <= 64 ? <div class="col-3 yellow"> <p>BC</p> </div> : null
              }
              {
                 average >= 64.01 && average <= 72 ? <div class="col-3 yellow"> <p>B</p> </div> : null
              }
              {
                 average >= 72.01 && average <= 80  ? <div class="col-3 green"> <p>AB</p> </div> : null
              }
              {
                 average > 80.1 ?  <div class="col-3 green"> <p>A</p> </div> : null
              }
  
        </div>
        </div>
      </div>
  
  );
}
export default App;
