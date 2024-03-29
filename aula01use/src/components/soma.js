import React,{useState} from 'react'

function CalculadoraDeSoma(){
    const[numero1,setNumero1]=useState('')
    const[numero2,setNumero2]=useState('')
    const[soma,setSoma]=useState(null)

    const calcularSoma=()=>{
        const resultado=Number(numero1)+Number(numero2);
        setSoma(resultado)
    }

    return(
        <div className='Calculadora'>
            <input type='number' value={numero1} onChange={(e)=>setNumero1(e.target.value)} placeholder='Digite o primeiro número'></input>
            <input type='number' value={numero2} onChange={(e)=>setNumero2(e.target.value)} placeholder='Digite o segundo número'></input>

            <button onClick={calcularSoma}>Calcular soma</button>
            {soma!==null&&<p>Resultado:{soma}</p>}

        </div>
    )

}



export default CalculadoraDeSoma;