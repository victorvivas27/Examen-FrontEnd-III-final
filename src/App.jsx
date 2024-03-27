import MyRouter from "./Routes/MyRouter";
import { useMyContextGlobal } from "./context/global.context";

function App() {
  const { state } = useMyContextGlobal()
  //console.log(state);
  const getThemeClass = () => {
    return state.theme ? 'light' : 'dark';
  };


  return (

    <main className={`App ${getThemeClass()}`}>
      <MyRouter />
    </main>

  );
}

export default App;
