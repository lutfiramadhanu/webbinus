import { BrowserRouter, Switch, Link } from 'react-router-dom';
import Home from './component/Home';
import Sejarah from './component/Sejarah';
import Guru from './component/Guru';
import Kepalasekolah from './component/Kepalasekolah'
import Jurusan from './component/Jurusan';
import Alamatkontak from './component/Alamatkontak';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Link path="/" exact component={Home} />
        <Link path="/Sejarah" component={Sejarah} />
        <Link path="/Guru" component={Guru} />
        <Link path="/Kepalasekolah" component={Kepalasekolah} />
        <Link path="/Jurusan" component={Jurusan} />
        <Link path="/Alamatkontak" component={Alamatkontak} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;