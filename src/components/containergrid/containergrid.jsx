export const Containergrid = ({profile, gretting, myname, me, webdeveloper}) =>{
    return(
        <div className="boxgrid">
        <div className="box-1">
            <img className="ava" src={profile} alt="Avatar" />
        </div>
        <div className="box-2">
            <h1>{gretting} <span className="name">{myname}</span></h1>
            <h4 className="machine">{me} <span className="webdev">{webdeveloper}</span></h4>
            <p className="wexp">With experience in <span className="html5">HTML5</span>, <span className="css3">CSS3</span>, <span
              className="js">JavaScript</span>,
            <span className="react">React</span>, and <span className="node">Node.js</span>. I am currently expanding my
            knowledge in
            other technologies to continue growing in my career.
            I am passionate about solving technical problems and working on
            projects that allow me to apply my programming skills. I strive to
            stay up to date with the latest trends and tools in the field of web
            development to provide effective and efficient solutions.
          </p>
        </div>
       </div>
    )
  
}