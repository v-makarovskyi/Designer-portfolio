import './menu.scss'

export const Menu = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={"menu " + (menuOpen && "active")}>
           <ul>
               <li onClick={() => setMenuOpen(false)}>
                   <a href="#intro">Домой</a>
               </li>
               <li onClick={() => setMenuOpen(false)}>
                  <a href="#portfolio">Портфолио</a> 
               </li>
               <li onClick={() => setMenuOpen(false)}>
                   <a href="#works">Почему я?</a>
               </li>
               <li onClick={() => setMenuOpen(false)}>
                  <a href="#testimonials">Отзывы</a> 
               </li>
               <li onClick={() => setMenuOpen(false)}>
                   <a href="#contact">Контакты</a>
               </li>
           </ul> 
        </div>
    )
}
