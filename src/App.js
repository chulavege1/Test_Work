// Form registration 
import FormRegistr from './Form-Registration/index';
// App container styled
import styled from 'styled-components'; 

function App() {
  return (
    <AppContainer>
      <FormRegistr />
    </AppContainer>
  );
}



// App Container for FORM
const AppContainer = styled.div `height: 100vh; width: 100%; 
  display: flex; justify-content: center; align-items: center;`

export default App;
