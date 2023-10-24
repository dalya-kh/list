
import { ListGroup } from "./ListGroup";
import 'bootstrap/dist/css/bootstrap.css'
function App(props) {

  return (
    <>
 
     <ListGroup items={['Ajloun','Irbid']}  heading="Cities" />
     <ListGroup items={['Pink','Blue']}  heading="colors" />
    </>
  );
}
export default App;

