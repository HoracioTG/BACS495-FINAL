// import './App.css';
import Header from './header.js';
import Footer from './footer.js';
// import Body from './Body';
// import Blocks from './Blocks';
// import Users from './Users';
import SubmitQuestion from './Questions/SubmitQuestion';
import Questions from './Questions/Questions';

function App() {
  return (
    <div className="App">
      <Header />
      <SubmitQuestion />
      <hr />
      <Questions />
      {/* <Question /> */}
      <Footer />
    </div>
  );
}

export default App;