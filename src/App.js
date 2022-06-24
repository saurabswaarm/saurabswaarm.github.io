import { Container } from '@chakra-ui/react';
import Navigation from './Components/Navigation';
import Profile from './Profile';

function App() {
  return (
    <Container maxW="3xl" py={{base:"20", md:"24", lg:"40"}}>
      <Profile/>
      <Navigation/>
    </Container>
  );
}

export default App;
