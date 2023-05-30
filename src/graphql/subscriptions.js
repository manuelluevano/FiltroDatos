/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAccesorios = /* GraphQL */ `
  subscription OnCreateAccesorios(
    $filter: ModelSubscriptionAccesoriosFilterInput
  ) {
    onCreateAccesorios(filter: $filter) {
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
export const onUpdateAccesorios = /* GraphQL */ `
  subscription OnUpdateAccesorios(
    $filter: ModelSubscriptionAccesoriosFilterInput
  ) {
    onUpdateAccesorios(filter: $filter) {
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
export const onDeleteAccesorios = /* GraphQL */ `
  subscription OnDeleteAccesorios(
    $filter: ModelSubscriptionAccesoriosFilterInput
  ) {
    onDeleteAccesorios(filter: $filter) {
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
export const onCreateServicio = /* GraphQL */ `
  subscription OnCreateServicio($filter: ModelSubscriptionServicioFilterInput) {
    onCreateServicio(filter: $filter) {
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
export const onUpdateServicio = /* GraphQL */ `
  subscription OnUpdateServicio($filter: ModelSubscriptionServicioFilterInput) {
    onUpdateServicio(filter: $filter) {
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
export const onDeleteServicio = /* GraphQL */ `
  subscription OnDeleteServicio($filter: ModelSubscriptionServicioFilterInput) {
    onDeleteServicio(filter: $filter) {
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
export const onCreateMarca = /* GraphQL */ `
  subscription OnCreateMarca($filter: ModelSubscriptionMarcaFilterInput) {
    onCreateMarca(filter: $filter) {
      id
      marca
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMarca = /* GraphQL */ `
  subscription OnUpdateMarca($filter: ModelSubscriptionMarcaFilterInput) {
    onUpdateMarca(filter: $filter) {
      id
      marca
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMarca = /* GraphQL */ `
  subscription OnDeleteMarca($filter: ModelSubscriptionMarcaFilterInput) {
    onDeleteMarca(filter: $filter) {
      id
      marca
      createdAt
      updatedAt
    }
  }
`;
export const onCreateGavetaPendientes = /* GraphQL */ `
  subscription OnCreateGavetaPendientes(
    $filter: ModelSubscriptionGavetaPendientesFilterInput
  ) {
    onCreateGavetaPendientes(filter: $filter) {
      id
      ocupado
      equipoDentro
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGavetaPendientes = /* GraphQL */ `
  subscription OnUpdateGavetaPendientes(
    $filter: ModelSubscriptionGavetaPendientesFilterInput
  ) {
    onUpdateGavetaPendientes(filter: $filter) {
      id
      ocupado
      equipoDentro
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGavetaPendientes = /* GraphQL */ `
  subscription OnDeleteGavetaPendientes(
    $filter: ModelSubscriptionGavetaPendientesFilterInput
  ) {
    onDeleteGavetaPendientes(filter: $filter) {
      id
      ocupado
      equipoDentro
      createdAt
      updatedAt
    }
  }
`;
export const onCreateGavetaEntregas = /* GraphQL */ `
  subscription OnCreateGavetaEntregas(
    $filter: ModelSubscriptionGavetaEntregasFilterInput
  ) {
    onCreateGavetaEntregas(filter: $filter) {
      id
      ocupado
      equipoDentro
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGavetaEntregas = /* GraphQL */ `
  subscription OnUpdateGavetaEntregas(
    $filter: ModelSubscriptionGavetaEntregasFilterInput
  ) {
    onUpdateGavetaEntregas(filter: $filter) {
      id
      ocupado
      equipoDentro
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGavetaEntregas = /* GraphQL */ `
  subscription OnDeleteGavetaEntregas(
    $filter: ModelSubscriptionGavetaEntregasFilterInput
  ) {
    onDeleteGavetaEntregas(filter: $filter) {
      id
      ocupado
      equipoDentro
      createdAt
      updatedAt
    }
  }
`;
