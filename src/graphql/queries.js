/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAccesorios = /* GraphQL */ `
  query GetAccesorios($id: ID!) {
    getAccesorios(id: $id) {
      id
      name
      cantidad
      precioLocal
      precioFinal
      imagen
      createdAt
      updatedAt
    }
  }
`;
export const listAccesorios = /* GraphQL */ `
  query ListAccesorios(
    $filter: ModelAccesoriosFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccesorios(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        cantidad
        precioLocal
        precioFinal
        imagen
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getServicio = /* GraphQL */ `
  query GetServicio($id: ID!) {
    getServicio(id: $id) {
      id
      fecha
      folio
      numeroGaveta
      nombreCliente
      numeroTelefono
      servicio
      modelo
      marca
      numeroSerie
      imei
      accesorioEquipo
      observaciones
      gastoLocal
      abono
      precioFinal
      status
      createdAt
      updatedAt
    }
  }
`;
export const listServicios = /* GraphQL */ `
  query ListServicios(
    $filter: ModelServicioFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listServicios(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        fecha
        folio
        numeroGaveta
        nombreCliente
        numeroTelefono
        servicio
        modelo
        marca
        numeroSerie
        imei
        accesorioEquipo
        observaciones
        gastoLocal
        abono
        precioFinal
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMarca = /* GraphQL */ `
  query GetMarca($id: ID!) {
    getMarca(id: $id) {
      id
      marca
      createdAt
      updatedAt
    }
  }
`;
export const listMarcas = /* GraphQL */ `
  query ListMarcas(
    $filter: ModelMarcaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMarcas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        marca
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGavetaPendientes = /* GraphQL */ `
  query GetGavetaPendientes($id: ID!) {
    getGavetaPendientes(id: $id) {
      id
      ocupado
      equipoDentro
      createdAt
      updatedAt
    }
  }
`;
export const listGavetaPendientes = /* GraphQL */ `
  query ListGavetaPendientes(
    $filter: ModelGavetaPendientesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGavetaPendientes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        ocupado
        equipoDentro
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGavetaEntregas = /* GraphQL */ `
  query GetGavetaEntregas($id: ID!) {
    getGavetaEntregas(id: $id) {
      id
      ocupado
      equipoDentro
      createdAt
      updatedAt
    }
  }
`;
export const listGavetaEntregases = /* GraphQL */ `
  query ListGavetaEntregases(
    $filter: ModelGavetaEntregasFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGavetaEntregases(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        ocupado
        equipoDentro
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
