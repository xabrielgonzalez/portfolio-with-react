import {Navbar} from './components/nav/navbar'
import { Containergrid } from './components/containergrid/containergrid'
import { Aboutme } from './components/about/about'
import { Expandqua } from './components/expandqua/expandqua'
import { Skills } from './components/skills/skill'
import { Proj } from './components/projectss/proje'
import './components/nav/navbar.css'
import './components/containergrid/containergrid.css'
import './components/about/about.css'
import './components/expandqua/expandqua.css'
import './components/skills/skill.css'
import'./components/projectss/proje.css'
import './index.css'



function App() {


  return (
    <div className="App">
      <Navbar myname='Xabriel' mysurname='Gonzalez' aboutme='About me' exaq='Experience and Qualifications' skills='Skills' projects='Projects'></Navbar>
      <Containergrid profile='./src/img/profile.png' gretting='Hi, my name is' myname='Xabriel' me='Im a' webdeveloper='Web Developer' ></Containergrid>
      <Aboutme></Aboutme>
      <Expandqua></Expandqua>
      <Skills></Skills>
      <Proj></Proj>
    </div>
  )
}

export default App
