import { Container } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Technologies from "./Components/Technologies";
import Experience from "./Experience";
import Profile from "./Profile";

function App() {
  return (
    <Container maxW="container.sm" py={{ base: "5", md: "24", lg: "40" }}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/stack" element={<Technologies />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
