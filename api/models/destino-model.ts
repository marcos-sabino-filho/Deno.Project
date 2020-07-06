interface IDestino{
    id: number,
    nome:string,
    slug:string,
    link:string
}

let destinos: Array<IDestino>=[{
    "id":1,
    "nome":"São Paulo",
    "slug":"sao-paulo",
    "link":"https://www.saopaulo.sp.gov.br/"
},
{
    "id":2,
    "nome":"Rio de Janeiro",
    "slug":"rio-janeiro",
    "link":"http://www.rj.gov.br/"
},{
    "id":3,
    "nome":"Minas Gerais",
    "slug":"minas-gerais",
    "link":"https://www.mg.gov.br/"
},
{
    "id":4,
    "nome":"Bahia",
    "slug":"bahia",
    "link":"http://www.ba.gov.br/"
}]

const getDestinosData = () =>{
    return destinos
};

export {IDestino, getDestinosData};