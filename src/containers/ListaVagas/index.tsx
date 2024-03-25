import React, { useState } from 'react'
import FormVagas from '../../components/FormVagas'
import Vaga from '../../components/Vaga'
import styled from 'styled-components'

const ListaVagas = () => {
  const [filtro, setFiltro] = useState<string>('')

  const vagasFiltradas = vagas.filter(
    (x) => x.titulo.toLocaleLowerCase().search(filtro) >= 0
  )

  return (
    <Container>
      <FormVagas aoPesquisar={(termo: string) => setFiltro(termo)} />
      <VagasGrid>
        {vagasFiltradas.map((vag) => (
          <Vaga
            key={vag.id}
            titulo={vag.titulo}
            localizacao={vag.localizacao}
            nivel={vag.nivel}
            modalidade={vag.modalidade}
            salarioMin={vag.salarioMin}
            salarioMax={vag.salarioMax}
            requisitos={vag.requisitos}
          />
        ))}
      </VagasGrid>
    </Container>
  )
}

export default ListaVagas

const Container = styled.div`
  /* Adicione estilos conforme necessário */
`

const VagasGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 16px;
  row-gap: 16px;
  margin-top: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
