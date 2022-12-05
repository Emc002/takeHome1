import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './component/button/buttonStyles.css';
import Button from './component/button/Button';
import Input from './component/input/Input';
import 'bootstrap/dist/css/bootstrap.min.css';

const Quiz = () => {
  const [math, setMath] = useState();
  const [science, setScience] = useState();
  const [physic, setPhysic] = useState();
  const [chemistry, setChemistry] = useState();
  const [biology, setBiology] = useState();
  const [average, setAverage] = useState();
  const [page, setPages] = useState(0);
  const [a, setA] = useState(0);
  const [ab1, setAB1] = useState(0);
  const [ab2, setAB2] = useState(0);
  const [b1, setB1] = useState(0);
  const [b2, setB2] = useState(0);
  const [bc1, setBC1] = useState(0);
  const [bc2, setBC2] = useState(0);
  const [c1, setC1] = useState(0);
  const [c2, setC2] = useState(0);
  const [d1, setD1] = useState(0);
  const [d2, setD2] = useState(0);
  const [e1, setE1] = useState(0);
  const [e2, setE2] = useState(0);




  const handa = (event) => {
    setA(event.target.value);
  };
  const handab1 = (event) => {
    setAB1(event.target.value);
  };
  const handab2 = (event) => {
    setAB2(event.target.value);
  };
  const handb1 = (event) => {
    setB1(event.target.value);
  };
  const handb2 = (event) => {
    setB2(event.target.value);
  };
  const handbc1 = (event) => {
    setBC1(event.target.value);
  };
  const handbc2 = (event) => {
    setBC2(event.target.value);
  };
  const handc1 = (event) => {
    setC1(event.target.value);
  };
  const handc2 = (event) => {
    setC2(event.target.value);
  };
  const handd1 = (event) => {
    setD1(event.target.value);
  };
  const handd2 = (event) => {
    setD2(event.target.value);
  };
  const hande1 = (event) => {
    setE1(event.target.value);
  };
  const hande2 = (event) => {
    setE2(event.target.value);
  };

  const AVERAGE = () => {
    setAverage((Number(math) + Number(science) + Number(physic) + Number(chemistry) + Number(biology)) / 5);
  };
  const BACK = () => {
    setPages(page-1);
  };
  const NEXT = () => {
    setPages(page+1);
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

          
              {
            page == 0 ? <div class="col-5 GBR33">
            <h1 class="judul">RANGE RAPORT </h1>
              <div class="form-group f1 BATAS">
                <a for="username">RANGE A</a>
                <div class="row">
                <div class="col-3"><Input fungsi={handa}/></div>
                </div>
              </div>
              <div class="form-group f1 BATAS">
                <a for="username">RANGE AB</a>
                <div class="row">
                <div class="col-3"><Input fungsi={handab1}/></div>
                <div class="col-1">-</div>
                <div class="col-3"><Input fungsi={handab2}/></div>
                </div>
              </div>
              <div class="form-group f1 BATAS">
                <a for="username">RANGE B</a>
                <div class="row">
                <div class="col-3"><Input fungsi={handb1}/></div>
                <div class="col-1">-</div>
                <div class="col-3"><Input fungsi={handb2}/></div>
                </div>
              </div>
              <div class="form-group f1 BATAS">
                <a for="username">RANGE BC</a>
                <div class="row">
                <div class="col-3"><Input fungsi={handbc1}/></div>
                <div class="col-1">-</div>
                <div class="col-3"><Input fungsi={handbc2}/></div>
                </div>
              </div>
              <div class="form-group f1 BATAS">
                <a for="username">RANGE C</a>
                <div class="row">
                <div class="col-3"><Input fungsi={handc1}/></div>
                <div class="col-1">-</div>
                <div class="col-3"><Input fungsi={handc2}/></div>
                </div>
              </div>
              <div class="form-group f1 BATAS">
                <a for="username">RANGE D</a>
                <div class="row">
                <div class="col-3"><Input fungsi={handd1}/></div>
                <div class="col-1">-</div>
                <div class="col-3"><Input fungsi={handd2}/></div>
                </div>
              </div>
              <div class="form-group f1 BATAS">
                <a for="username">RANGE E</a>
                <div class="row">
                <div class="col-3"><Input fungsi={hande1}/></div>
                <div class="col-1">-</div>
                <div class="col-3"><Input fungsi={hande2}/></div>
                </div>
              </div>
          <Button namaFungsi="NEXT" fungsi={NEXT} />

      </div> : null
            
          };

          {
            page == 1 ? <div class="col-5 GBR1">
            <h1 class="judul">RAPORT </h1>
              <div class="form-group f1 isian">
                <label for="username">MATHEMATIC</label>
                <Input fungsi={handleChangeMath}/>
              </div>
              <div class="form-group f1 isian">
                <label for="username">SCIENCE</label>
                <Input fungsi={handleChangeScience}/>
              </div>
              <div class="form-group f1 isian">
                <label for="username">PHYSIC</label>
                <Input fungsi={handleChangePhysic}/>
              </div>
              <div class="form-group f1 isian">
                <label for="username">CHEMISTRY</label>
                <Input fungsi={handleChangeChemistry}/>
              </div>
              <div class="form-group f1 isian">
                <label for="username">BIOLOGY</label>
                <Input fungsi={handleChangeBiologi}/>
              </div>
          
          <Button namaFungsi="SUBMIT" fungsi={AVERAGE} />
          <Button namaFungsi="BACK" fungsi={BACK} />

      </div> : null
          }

              {
                 average >= e1 && average <= e2 ? <div class="col-3 darkred"> <p>E</p> </div> : null
              }
              {
                 average >= d1 && average <= d2 ? <div class="col-3 red"> <p>D</p> </div> : null
              }
              {
                 average >= c1 && average <= c2 ? <div class="col-3 red"> <p>C</p> </div> : null
              }
              {
                 average >= bc1 && average <= bc2 ? <div class="col-3 yellow"> <p>BC</p> </div> : null
              }
              {
                 average >= b1 && average <= b2 ? <div class="col-3 yellow"> <p>B</p> </div> : null
              }
              {
                 average >= ab1 && average <= ab2  ? <div class="col-3 green"> <p>AB</p> </div> : null
              }
              {
                 average > a ?  <div class="col-3 green"> <p>A</p> </div> : null
              }
  
        </div>
        </div>
      </div>
  
  );
};
export default Quiz;

