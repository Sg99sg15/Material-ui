import React,{useState, useEffect} from 'react';
import { Box, Button, Container, Fab, Grid, Paper, CardActionArea, CardMedia, CardContent, CardActions } from '@mui/material';
import Typography from '@mui/material/Typography/Typography'
import { ThemeProvider } from '@mui/material/styles';
import { makeStyles} from '@material-ui/core/styles';
import { AccountBalance, AccountBalanceOutlined, ArrowLeft, ArrowRight} from '@mui/icons-material'
import AddIcon from '@mui/icons-material/Add';
import theme from './Theme';
import axios from 'axios';


const useStyle = makeStyles((theme) => ({
  container: {
    width: "100vw",
    height: "100hv",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
  mybox: {
    width: 300,
    backgroundColor: theme.palette.info.light,
    // padding:50,
    padding: theme.spacing(3),
    borderRadius: 5,
    // boxShadow: "0px 10px 10px rgba(0,0,0,0.1)",
    boxShadow: theme.shadows[10],
  },
  add: {
    position:"fixed",
    bottom: "5%",
    right: "5%",
  }
}));





function App() {

  const classes = useStyle();

  const [user, setUser] = useState([]);

  const result = async() =>{
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUser(result.data);
  };

  useEffect(()=>{
    // loadUsers();
  },[]);

  return (
    <>
      <div>
        <Box width={500} boxShadow={5} m={10} p={5} component="section">
          <h1>This is a Box component</h1>
          <p>Lorem ntrypoint main 1.85 MiB (1.82 MiB) = static/js/bundle.jes [emitted] [immutable] [hmr]s 1.85 MiB main.c279d520fead81aa4ba8.hot-update.js 3.28
            KiB 2 auxiliary assets</p>
        </Box>
        <hr />
        <hr />
        <Typography variant='h1'>This is a heading h1 tag with Typography</Typography>
        <Typography variant='h2'>This is a heading h2 tag with Typography</Typography>
        <Typography variant='h3'>This is a heading h3 tag with Typography</Typography>
        <Typography variant='h4'>This is a heading h4 tag with Typography</Typography>
        <Typography variant="h5">This is a heading h5 tag with Typography</Typography>
        <Typography variant="h6">This is a heading h6 tag with Typography</Typography>
        <Typography variant="body1">This is a  body 1</Typography>
        <Typography variant="body12">This is a  body 2</Typography>
        <Typography variant="subtitle1">This is a  Subtitle 1</Typography>
        <Typography variant="subtitle2">This is a  Subtitle 2</Typography>
        <hr />
        <hr />
        <div>
          <Typography variant='h3' align='center' color='secondary' gutterBottom>
            Heading
          </Typography>
          <Typography variant='subtitle1' align='justify'>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Typography>
        </div>
        <hr />
        <hr />
        <Container maxWidth="md"> {/* use disableGutter is dont want any space b/w container and box */}
          <Box>
            <Typography variant='h4' align='center' color="primary"> What is Lorem?</Typography>
            <Typography variant='subtitle1' align='justify'>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>
          </Box>
        </Container>
        <hr />
        <hr />
        <Box className={classes.container}>
          <Box className={classes.mybox}>
            <Typography variant='h4'>Heading A</Typography>
            <Typography variant='subtitle2'>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>
          </Box>
          <Box className={classes.mybox}>
            <Typography variant='h4'>Heading B</Typography>
            <Typography variant='subtitle2'>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>
          </Box>
          <Box className={classes.mybox}>
            <Typography variant='h4'>Heading C</Typography>
            <Typography variant='subtitle2'>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>
          </Box>
        </Box>
        <hr />
        <hr />
        <Container maxWidth="sm">
          <Paper mt={5} elevation={5} component={Box} p={2}>
            <Box>
              <Typography variant="h4"> Read Paper
                <Typography variant="subtitle1">
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Typography>
                <Button variant='outlined' fullWidth size='large' startIcon={<ArrowLeft />} endIcon={<ArrowRight />} color='secondary'>
                  Read More
                </Button>
              </Typography>
            </Box>
          </Paper>
        </Container>
        <hr />
        <hr />
        <Container>
          <Paper component={Box} p={3}>
            <AccountBalance style={{ fontSize: 70 }} />
            <AccountBalanceOutlined style={{ fontSize: 70, color: "red" }} />
          </Paper>
        </Container>
        <hr />
        <hr />
        <ThemeProvider theme={theme}>
          <Container>
            <Paper component={Box}
              width={"40%"}
              p={5}
              elevation={5}
              ml={5}
              borderLeft={5}
              // boxShadow={5}
              borderColor="primary.main">
              <Typography variant='h4' gutterBottom>Get Started</Typography>
              <Typography variant='subtitle2' gutterBottom>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions.</Typography>
              <Button variant='contained' color='primary'>Read More</Button>
            </Paper>
          </Container>
        </ThemeProvider>
        <hr />
        <hr />
        <Container>
          <Grid container
            //  justifyContent="space-evenly"
            spacing={4}
          >
            <Grid item lg={3} md={6} sm={6}>
              <Paper
                elevation={5}>
                <Box p={2}>
                  <Typography>
                    Read Doc 1
                  </Typography>
                  <Typography>
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                  </Typography>
                  <Button>Read More</Button>
                </Box>
              </Paper>
            </Grid>
            <Grid item lg={3} md={6} sm={6}>
              <Paper
                elevation={5}>
                <Box p={2}>
                  <Typography>
                    Read Doc 2
                  </Typography>
                  <Typography>
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                  </Typography>
                  <Button>Read More</Button>
                </Box>
              </Paper>
            </Grid>
            <Grid item lg={3} md={6} sm={6}>
              <Paper
                elevation={5}>
                <Box p={2}>
                  <Typography>
                    Read Doc 3
                  </Typography>
                  <Typography>
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                  </Typography>
                  <Button>Read More</Button>
                </Box>
              </Paper>
            </Grid>
            <Grid item lg={3} md={6} sm={6}>
              <Paper
                elevation={5}>
                <Box p={2}>
                  <Typography>
                    Read Doc 4
                  </Typography>
                  <Typography>
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                  </Typography>
                  <Button>Read More</Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
        <hr/>
        <hr/>
        <Container>
          <Fab color='secondary' className={classes.add}>
            <AddIcon />
          </Fab>
        </Container>
      </div>
    </>
  );
}

export default App;
