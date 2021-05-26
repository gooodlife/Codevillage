import React from 'react'
import { NavLink } from 'react-router-dom';
import bar from'../icons/bar.svg';
import student from '../icons/student.svg';
import teachers from '../icons/teachers.svg';
import parents from '../icons/parents.svg';
import academics from '../icons/academics.svg';
import examination from '../icons/examination.svg';
import payments from '../icons/payments.svg';
import notifications from '../icons/notifications.svg';
import website from '../icons/website.svg';
import prefrences from '../icons/prefrences.svg';
import Footer from '../components/Footer';
import AppRouter from '../AppRouter';
import direction from '../icons/direction.svg'


const Sidebar = () => {
    return (
     
            <aside className="Sidebar">
                <div>
                        <ul className ='App'>
                            <li>
                                <div className='codeVillageCon'>
                                <div>
                                <h1 className='codeVillage1'>CodeVillage</h1>
                                </div>
                                <div>
                                <img src ={direction} alt='direction'/>
                                </div>
                                </div>
                            </li>
                            <li>
                                <h6 className='mainMenu'>mainmenu</h6> 
                            </li>
                       </ul>
                </div>
            <div>
   
     </div>
        
       
         <div className='sideBarContainer1' >
             <ul className='sidebar'>
            <li> <img  src={bar} alt="store "/>
            <NavLink to="/">Dashboard /</NavLink>
            </li>
            <li><img   src={student} alt="student"/>
            <NavLink to="/a">Students /a</NavLink>
            </li>
            <li><img   src={teachers} alt="teachers"/>
            <NavLink to="/b">Teachers /b</NavLink>
            </li>
            <li><img   src={parents} alt="parents"/>
            <NavLink to="/c">Parents /c</NavLink>
            </li>
            <li><img   src={academics} alt="academics"/>
            <NavLink to="/d">academics /d</NavLink>
            </li>
            <li><img   src={examination} alt="examination"/>
            <NavLink to="/e">examination /e</NavLink>
            </li>
            <li><img   src={payments} alt="payments"/>
            <NavLink to="/f">payments/finances /f</NavLink>
            </li>
            <li><img   src={notifications} alt="notifications"/>
            <NavLink to="/g">Notifications /g</NavLink>
            </li>
            <li><img   src={website} alt="website"/>
            <NavLink to="/h">website & blogs</NavLink>
            </li>
            <li><img   src={prefrences} alt="notifications"/>
            <NavLink to="/i">Prefrences /i</NavLink>
            </li>
            </ul>
        
          <Footer/>
     </div>

     
      
        </aside>
     
    )
}

export default Sidebar
