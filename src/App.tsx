import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { CreateForm } from './components/CreateForm';
import { Details } from './components/Details';
import { Error } from './components/Error';
import { Home } from './components/Home';
import { CustomSnackbar } from './components/SnackbarContext/CastomSnackbar';
import { RoutesEnum } from './routes';

function App() {
  return (
    <Box>
      <CustomSnackbar />
      <Routes>
        <Route path={RoutesEnum.home} element={<Home />} />
        <Route path={RoutesEnum.create} element={<CreateForm />} />
        <Route path={RoutesEnum.details} element={<Details />} />
        <Route path="*" element={<Error />}
    />
      </Routes>
    </Box>
  );
}

export default App;
