const acaoCarro = ()=>{
    console.log('movimento do carro')
}
const andar = () => {
    console.log ( "O carro está andando." )
}

const parar =  () => {
    console.log ( "O carro parou." )
}
acaoCarro (andar, parar,() =>{
    console.log('carro')
})
andar();
parar();
