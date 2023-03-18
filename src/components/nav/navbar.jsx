export const Navbar = ({myname,mysurname,aboutme,exaq,skills,projects})=>{

    
    return(
        <nav>
            <h2 className="logo">{myname} <span className="surname">{mysurname}</span></h2>
            <ul>
                <li><a href="">{aboutme}</a></li>
                <li><a href="">{exaq}</a></li>
                <li><a href="">{skills}</a></li>
                <li><a href="">{projects}</a></li>
            </ul>
    
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=xabriel241195%40gmail.com" target="_blank">
            <button className="fa-regular fa-envelope envelope"></button></a>
    
            <a href="https://www.linkedin.com/in/xabrielgonzalez/" target="_blank">
              <button className="fa-brands fa-linkedin linki"></button>
            </a>
            <a href="https://github.com/xabrielgonzalez?tab=repositories" target="_blank">
              <button className="fa-brands fa-github giti"></button>
            </a>
            
        </nav>
    )
    }