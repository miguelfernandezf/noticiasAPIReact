import { Grid, Typography, Pagination, Stack } from "@mui/material"
import Noticia from "./Noticia"
import useNoticias from "../hooks/useNoticias"

const ListadoNoticias = () => {

    const {noticias, totalNoticias, handleChangePagina, pagina} = useNoticias()

    const totalPaginas = Math.ceil(totalNoticias / 20) 

  return (

    <>
        <Typography 
            textAlign={'center'}
            marginY={5}
            variant="h3"
            component={'h2'}
        >
            Ultimas noticias
        </Typography>
        <Grid container 
            spacing={2}
        >
            {noticias.map(noticia => (
                <Noticia 
                    key={noticia.url}
                    noticia={noticia} 
                />
            ))}
        </Grid>

        <Stack 
            spacing={2} 
            alignItems={'center'}
            marginY={5}
        >
            <Pagination 
                count={totalPaginas} 
                color="primary" 
                onChange={handleChangePagina}
                page={pagina}
            />
        </Stack>
    </>
  )
}

export default ListadoNoticias