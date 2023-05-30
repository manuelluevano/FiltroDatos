/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAccesorios = /* GraphQL */ `
  mutation CreateAccesorios(
    $input: CreateAccesoriosInput!
    $condition: ModelAccesoriosConditionInput
  ) {
    createAccesorios(input: $input, condition: $condition) {
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
export const updateAccesorios = /* GraphQL */ `
  mutation UpdateAccesorios(
    $input: UpdateAccesoriosInput!
    $condition: ModelAccesoriosConditionInput
  ) {
    updateAccesorios(input: $input, condition: $condition) {
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
export const deleteAccesorios = /* GraphQL */ `
  mutation DeleteAccesorios(
    $input: DeleteAccesoriosInput!
    $condition: ModelAccesoriosConditionInput
  ) {
    deleteAccesorios(input: $input, condition: $condition) {
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
export const createServicio = /* GraphQL */ `
  mutation CreateServicio(
    $input: CreateServicioInput!
    $condition: ModelServicioConditionInput
  ) {
    createServicio(input: $input, condition: $condition) {
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
export const updateServicio = /* GraphQL */ `
  mutation UpdateServicio(
    $input: UpdateServicioInput!
    $condition: ModelServicioConditionInput
  ) {
    updateServicio(input: $input, condition: $condition) {
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
export const deleteServicio = /* GraphQL */ `
  mutation DeleteServicio(
    $input: DeleteServicioInput!
    $condition: ModelServicioConditionInput
  ) {
    deleteServicio(input: $input, condition: $condition) {
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
export const createMarca = /* GraphQL */ `
  mutation CreateMarca(
    $input: CreateMarcaInput!
    $condition: ModelMarcaConditionInput
  ) {
    createMarca(input: $input, condition: $condition) {
      id
      marca
      createdAt
      updatedAt
    }
  }
`;
export const updateMarca = /* GraphQL */ `
  mutation UpdateMarca(
    $input: UpdateMarcaInput!
    $condition: ModelMarcaConditionInput
  ) {
    updateMarca(input: $input, condition: $condition) {
      id
      marca
      createdAt
      updatedAt
    }
  }
`;
export const deleteMarca = /* GraphQL */ `
  mutation DeleteMarca(
    $input: DeleteMarcaInput!
    $condition: ModelMarcaConditionInput
  ) {
    deleteMarca(input: $input, condition: $condition) {
      id
      marca
      createdAt
      updatedAt
    }
  }
`;
export const createGavetaPendientes = /* GraphQL */ `
  mutation CreateGavetaPendientes(
    $input: CreateGavetaPendientesInput!
    $condition: ModelGavetaPendientesConditionInput
  ) {
    createGavetaPendientes(input: $input, condition: $condition) {
      id
      ocupado
      equipoDentro
      createdAt
      updatedAt
    }
  }
`;
export const updateGavetaPendientes = /* GraphQL */ `
  mutation UpdateGavetaPendientes(
    $input: UpdateGavetaPendientesInput!
    $condition: ModelGavetaPendientesConditionInput
  ) {
    updateGavetaPendientes(input: $input, condition: $condition) {
      id
      ocupado
      equipoDentro
      createdAt
      updatedAt
    }
  }
`;
export const deleteGavetaPendientes = /* GraphQL */ `
  mutation DeleteGavetaPendientes(
    $input: DeleteGavetaPendientesInput!
    $condition: ModelGavetaPendientesConditionInput
  ) {
    deleteGavetaPendientes(input: $input, condition: $condition) {
      id
      ocupado
      equipoDentro
      createdAt
      updatedAt
    }
  }
`;
export const createGavetaEntregas = /* GraphQL */ `
  mutation CreateGavetaEntregas(
    $input: CreateGavetaEntregasInput!
    $condition: ModelGavetaEntregasConditionInput
  ) {
    createGavetaEntregas(input: $input, condition: $condition) {
      id
      ocupado
      equipoDentro
      createdAt
      updatedAt
    }
  }
`;
export const updateGavetaEntregas = /* GraphQL */ `
  mutation UpdateGavetaEntregas(
    $input: UpdateGavetaEntregasInput!
    $condition: ModelGavetaEntregasConditionInput
  ) {
    updateGavetaEntregas(input: $input, condition: $condition) {
      id
      ocupado
      equipoDentro
      createdAt
      updatedAt
    }
  }
`;
export const deleteGavetaEntregas = /* GraphQL */ `
  mutation DeleteGavetaEntregas(
    $input: DeleteGavetaEntregasInput!
    $condition: ModelGavetaEntregasConditionInput
  ) {
    deleteGavetaEntregas(input: $input, condition: $condition) {
      id
      ocupado
      equipoDentro
      createdAt
      updatedAt
    }
  }
`;
