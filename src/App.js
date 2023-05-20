import 'bootstrap.min.css' 
import { useState } from 'react';
function App() {
  const [a,setA]=useState();
  const [b,setB]=useState();
  const[op,setop]=useState("+");
  const [r,setR]=useState();
  const changeA=(e)=>{
    setA(e.target.value);
  }
  const changeB=(e)=>{
    setB(e.target.value);
  }
  const changeOp=(e)=>{
    setop(e.target.value);
  }
  const calculer =()=>{
    setR(parseInt(a)+parseInt(b));
    switch(op){
        case "+":
            setR(parseInt(a)+parseInt(b));
            break;
        case "-":
            setR(parseInt(a)-parseInt(b));
            break;
        case "/":
            if(b===0){
                
                setR("impossible");
            }else{
                setR(parseInt(a)/parseInt(b));
            }
            break;
        case "%":
            setR(parseInt(a)%parseInt(b));
            break;
        case "*":
            setR(parseInt(a)*parseInt(b));
            break;
        default:
          setR(parseInt(a)+parseInt(b));
          break;
    }
  }
    return(
      <div className='row main'>
        <h1>Calculatrice</h1>
          <div className='col-2'>
              <input type='text' className='form-control'onChange={changeA} value={a} />
          </div>
          <div className='col-1'>
            <select className='form-control' onChange={changeOp}>
            <option value={"+"}>+</option>
            <option value={"-"}>-</option>
            <option value={"/"}>/</option>
            <option value={"%"}>%</option>
            <option value={"*"}>*</option>
            </select>
          </div>
          <div className='col-2'>
              <input type='text' className='form-control'onChange={changeB} value={b} />
          </div>
          <div className='col-1 eg'> = </div>
          <div className='col-3'>
              <input type='text' className='form-control' value={r} disabled="disabled" />
          </div>
          <div className='col-1'>
              <button className='btn btn-dark'
              onClick={calculer}
              >Calculer</button>
          </div>
      </div>
  );
}
export default App;
