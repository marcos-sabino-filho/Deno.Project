import { IDestino, getDestinosData } from "../models/destino-model.ts";

let destinos = getDestinosData();

/**
 * MÉTODO PARA LISTA TODOS OS DESTINOS, SEM FILTRO
 * @param param0 
 */
const getDestinos = (
  { response }: { response: any },
) => {
  response.status = 200;
  response.body = destinos;
};

const procuraPorId = (id: number): (IDestino | undefined) =>
  destinos.filter((item) => item.id === id)[0];

/**
 * MÉTODO PARA LISTA UM DESTINO ESPECÍFICO
 * @param param0 
 */
const getDestino = (
  { params, response }: { params: { id: string }; response: any },
) => {
  const destino: IDestino | undefined = procuraPorId(parseInt(params.id));

  if (destino) {
    response.status = 200;
    response.body = destino;
  } else {
    response.status = 404;
    response.body = { message: `Destino não encontrado :(` };
  }
};

/**
 * MÉTODO DE CRIAÇÃO
 * @param param0 
 */
const addDestino = async (
  { request, response }: {
    request: any;
    response: any;
  },
) => {
  const body = await request.body();
  const novoDestino: IDestino = body.value;

  const destino: IDestino | undefined = procuraPorId(novoDestino.id);

  if (destino) {
    response.status = 200;
    response.body = {
      message:
        `Destino não foi cadastrado, já existe na lista um destino com essas características`,
    };
  } else {
    destinos.push(novoDestino);
    response.status = 201;
    response.body = { message: `Destino cadastrado com sucesso :)` };
  }
};

/**
 * MÉTODO DE ATUALIZAÇÃO
 * @param param0 
 */
const updateDestino = async (
  { request, response }: {
    request: any;
    response: any;
  },
) => {
  const body = await request.body();
  const destinoUpdate: IDestino = body.value;

  const destino: IDestino | undefined = procuraPorId(destinoUpdate.id);

  if (destino) {
    let index = destinos.indexOf(destino);
    destinos[index] = destinoUpdate;

    response.status = 200;
    response.body = { message: `Destino foi atualizado :)` };
  } else {
    response.status = 404;
    response.body = { message: `Destino não encontrado para atualizar :(` };
  }
};

/**
 * MÉTODO DE REMOÇÃO DE UM ITEM POR ID
 */
const removeDestino = async (
  { params, response }: { params: { id: string }; response: any },
) => {
  const destino: IDestino | undefined = procuraPorId(parseInt(params.id));

  if (destino) {
    let index = destinos.indexOf(destino);
    destinos.splice(index, 1);
    response.status = 200;
    response.body = { message: `Destino removido :)` };
  } else {
    response.status = 404;
    response.body = { message: `Destino não encontrado para remoção :(` };
  }
};

export { getDestinos, getDestino, addDestino, updateDestino, removeDestino };
