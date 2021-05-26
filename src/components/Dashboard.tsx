import React, { Component } from 'react';
import income from '../icons/income.svg';
import direction from '../icons/direction.svg';
import vector from '../icons/vector.svg';
import clock from '../icons/clock.svg';a
import sign from '../icons/sign.svg';


export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <div className='firstFlexContainer'>
                               
                                <div className='firstCon'>
                                     <div className='ultimateCon'>
                                        <div className='population'>
                                            <h1 className='pop'>
                                                Population
                                            </h1>
                                            <div className="staffFlex">
                                                <div className='staffFlexTotal'>
                                                <big className='text'>
                                                    Total
                                                </big>
                                                <br/>
                                                <span className='firstNumber'> 9,800</span> 
                                                </div>
                                                <div  id='staff80'>
                                                    <big className='text'>
                                                        Staff
                                                    </big>
                                                    <br/>
                                                    <span className='firstNumber'> 800</span> 
                                                </div>
                                                <div>
                                                <big className='text'>
                                                    Student
                                                </big>
                                                    <br/>
                                                    <span className='firstNumber'> 9000</span> 
                                                </div>
                                            
                                            </div>
                                        </div>
                                        <div className='finance'>
                                            <h1 className='fin'>
                                                Finance
                                            </h1>
                                            <div className='income'>

                                            <div className='image12'>
                                                
                                                <div className='incomeImage1'>
                                                        <img src={income} alt='income' width='15px'/> 
                                                </div>
                                                    <div className='DashBoardTitle'>
                                                
                                                        Income
                                                        <br/>
                                                        <big className='DashBoardNumber'>
                                                        N1,018,420
                                                        </big>
                                                </div>
                                                </div>
                                            
                                            <div className='image11'>
                                                    <div className='incomeImage2'>
                                                            <img src={income} alt='income' width='15px'/> 
                                                    </div>
                                                        
                                                        <div className='DashBoardTitle'>
                                                        
                                                                Expenses
                                                                <br/>

                                                            <big className='DashBoardNumber'>
                                                            N1,018,420
                                                            </big>
                                                        </div>
                                                    </div>
                                        </div>
                                    
                                    </div> 
                                     </div>
                                     <div className='calenderContainer'>
                                         <div>
                                             Calender
                                         </div>
                                         <div>
                                             Timetable
                                         </div>
                                     </div>
                                </div>
                            
                                
                                    
                        
                                    
                      {/* third container */}

                    <div className='secondCon'>
                        <div className='dailyScheduleContainer'>
                           <div className='dialySchedule'>
                                <h3>Daily schedule</h3>
                            </div>
                            <div className='direct'>
                                <h5>ALL</h5>
                                 
                            </div>
                            <div className='pics'><img src={direction} alt='directon'/></div>
                        </div>
                       
                       <ul>
                            <li> 
                                       
                                <div className='parentCon'>
                                    <div className='English'>
                                                <div>
                                                    <img src={sign} alt='sign' width='15px'/> 
                                                    </div>
                                                <div>
                                                    <div>
                                                        English
                                                    </div>
                                                    <div>
                                                        SS3A
                                                    </div>    
                                                
                                                </div>
                                            </div>
                                            <div className='clockDashboard'>
                                                <div>
                                                    <img src ={clock} alt='clock'/>
                                                    
                                                </div>
                                                <div>
                                                    8:00am-8:40am
                                                </div>
                                    </div>
                                </div>
                                        
                              
                            </li>
                            <li> 
                                       
                                       <div className='parentCon1'>
                                           <div className='English'>
                                                       <div>
                                                           <img src={sign} alt='sign' width='15px'/> 
                                                        </div>
                                                       <div>
                                                           <div>
                                                               English
                                                           </div>
                                                           <div>
                                                               SS3A
                                                           </div>
                                                       </div>
                                                   </div>
                                                   <div className='clockDashboard'>
                                                       <div>
                                                           <img src ={clock} alt='clock'/>
                                                           
                                                       </div>
                                                       <div>
                                                       8:40am-9:30am
                                                       </div>
                                                   </div>
                                       </div>
                                               
                                     
                                   </li>
                                   <li> 
                                       
                                       <div className='parentCon'>
                                           <div className='English'>
                                                       <div>
                                                           <img src={sign} alt='sign' width='15px'/> 
                                                           </div>
                                                       <div>
                                                            <div>
                                                                English
                                                            </div>
                                                            <div>
                                                                SS3A
                                                            </div>
                                                       </div>
                                                   </div>
                                                   <div className='clockDashboard'>
                                                       <div>
                                                           <img src ={clock} alt='clock'/>
                                                           
                                                       </div>
                                                       <div>
                                                       9:20am-10:00am
                                                       </div>
                                                   </div>
                                       </div>
                                               
                                     
                                   </li>
                                   <li> 
                                       
                                       <div className='parentCon1'>
                                           <div className='English'>
                                                       <div>
                                                           <img src={sign} alt='sign' width='15px'/> 
                                                           </div>
                                                       <div>
                                                           <div>
                                                               English
                                                           </div>
                                                           <div>
                                                               SS3A
                                                           </div>
                                                       </div>
                                                   </div>
                                                   <div className='clockDashboard'>
                                                       <div>
                                                           <img src ={clock} alt='clock'/>
                                                           
                                                       </div>
                                                       <div>
                                                         10:30am-11:00am
                                                       </div>
                                                   </div>
                                       </div>
                                               
                                     
                                   </li>
                           
                       </ul>
                            <div className='UpComingTaskContainer'>
                                <div className='upComingTask'>
                                        <h3>Upcoming Task</h3>
                                    </div>
                                    <div className='direct'>
                                        <h5>ALL</h5>
                                        
                                    </div>
                                    <div className='pics'>
                                        <img src={direction} alt='directon'/>
                                    
                                   </div>

                             </div>   
                            <ul>
                                <li>
                                <div className='gDashboard'>
                                 <div className='Topic'>
                                        <div>
                                            Group Discussion
                                        </div>
                                        <div>
                                            10:15am
                                        </div>
                                 </div>
                                    <div className='timeContainer'>
                                            
                                            <div >
                                                <img src={clock} alt='clock'/>
                                            </div>

                                            <div>
                                                Hall B
                                            </div>
                                    </div>
                                    
                             </div>
                                </li>
                                <li>
                                <div className='gDashboard'>
                                 <div  className='Topic'>
                                        <div>
                                           Science Experiment
                                        </div>
                                        <div>
                                            10:15am
                                        </div>
                                 </div>
                                    <div className='timeContainer'>
                                            
                                            <div >
                                                <img src={clock} alt='clock'/>
                                            </div>

                                            <div>
                                            Science Lab
                                            </div>
                                    </div>
                                 
                             </div>
                                </li>
                                <li>
                                <div className='gDashboard'>
                                 <div  className='Topic'>
                                        <div>
                                           physics Assignment
                                        </div>
                                        <div>
                                          thursday latest
                                        </div>
                                        
                                 </div>
                                    <div className='timeContainer'>
                                            
                                            <div><img src={clock} alt='clock'/>
                                            </div>

                                    </div>
                                    
                             </div>
                                </li>
                                <li>
                                      <div className='gDashboard'>
                                 <div  className='Topic'>
                                        <div>
                                            Group Discussion
                                        </div>
                                        <div>
                                            10:15am
                                        </div>
                                 </div>
                                    <div className='timeContainer'>
                                        
                                        <div >
                                            <img src={clock} alt='clock'/>
                                        </div>

                                            <div>
                                                10:16am
                                            </div>
                                    </div>
                                 
                             </div>
                                </li>
                            </ul>
                      
                      
                     </div>
                </div>
            </div>
        )
    }
}