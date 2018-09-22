import React , {Component} from 'react';
import './Marksheet.css';
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import c from './05.jpg';
import {
    Step,
    Stepper,
    StepButton,
    StepContent,
  } from 'material-ui/Stepper';
  import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';

const styles = {
    headline: {
      fontSize: 24,
      paddingTop: 16,
      marginBottom: 12,
      fontWeight: 400,
    },
  };
  
  function handleActive(tab) {
    alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
  }

class Marksheet extends Component{
    state = {
        stepIndex: 0,
      };
    
      handleNext = () => {
        const {stepIndex} = this.state;
        if (stepIndex < 2) {
          this.setState({stepIndex: stepIndex + 1});
        }
      };
    
      handlePrev = () => {
        const {stepIndex} = this.state;
        if (stepIndex > 0) {
          this.setState({stepIndex: stepIndex - 1});
        }
      };
    render(){
        return(
            <div>
                {/* Appbar code */}

                <AppBar title="Academics"
                        iconElementRight={<img src={c} alt='userpic' style={{borderRadius:'40px', width:'40px', height:'40px' }}/>}
                        className='colorbar3'
                >
                    
                </AppBar>

                {/* Tabs Code */}
                <Tabs style={{backgroundImage:'#114cc8'}}>
                    <Tab  label="Item One"  className='tabscolor'>
                        <div>
                            {/* Accordion code */}
                            <div className='accordion'>
                                <Stepper
                                    activeStep={this.state.stepIndex}
                                    linear={
                                        false}
                                    orientation="vertical"
                                >
                                    <Step>
                                        <StepButton style={{backgroundColor:'#8FC549'}} onClick={() => this.setState({stepIndex: 0})}>
                                        <p style={{margin:'auto', fontWeight:'bold', fontSize:'18px', color:'white'}}>Mid Term I</p>
                                        </StepButton>
                                        <StepContent>
                                        <p>Mark data will be here</p>
                                
                                        </StepContent>
                                    </Step>
                                    <Step>
                                        <StepButton style={{backgroundColor:'#00A99D'}} onClick={() => this.setState({stepIndex: 1})}>
                                            <p style={{margin:'auto', fontWeight:'bold', fontSize:'18px', color:'white'}}>Quarterly</p>
                                        </StepButton>
                                        <StepContent>
                                            <p>Mark data will be here</p>
                                
                                        </StepContent>
                                    </Step>
                                    <Step>
                                        <StepButton  style={{backgroundColor:'#B25EA1'}} onClick={() => this.setState({stepIndex: 2})}>
                                            <p style={{margin:'auto', fontWeight:'bold', fontSize:'18px', color:'white'}}>Half Yearly</p>
                                        </StepButton>
                                        <StepContent style={{padding:'0',margin:'0'}}>
                                            {/* Table code */}
                                            <div className='tablediv'>
                                            <table style={{width:"100%", marginTop:'20px'}}>
                                                <tr>
                                                    <th>Subject</th>
                                                    <th>Marks</th>
                                                    <th>Grade</th>
                                                    <th>Remarks</th>

                                                </tr>
                                                <tr>
                                                    <td>English</td>
                                                    <td>48/50</td>
                                                    <td>A</td>
                                                    <td>Good</td>
                                                </tr>
                                                <tr>
                                                    <td>Malayalam</td>
                                                    <td>49/50</td>
                                                    <td>A</td>
                                                    <td>Good</td>
                                                </tr>
                                                <tr>
                                                    <td>Maths</td>
                                                    <td>49/50</td>
                                                    <td>A</td>
                                                    <td>Good</td>
                                                </tr>
                                                <tr>
                                                    <td>Science</td>
                                                    <td>46.5/50</td>
                                                    <td>A</td>
                                                    <td>Good</td>
                                                </tr>
                                                
                                            </table> 
                                            </div>
                                            
                                
                                        </StepContent>
                                    </Step>
                                </Stepper>
                            </div>
                        </div>
                    </Tab>
                    <Tab label="Item Two" >
                        <div>
                            
                        </div>
                    </Tab>
    
                </Tabs>
                {/* footer codde */}
                    {/* Footer is not sticking to the bottom. */}
                 
                    <footer style={{textAlign:'center'}} className='footercolor'>
                    <p style={{ color:'white', fontWeight:'bold'}}>appscook.com</p>
                </footer> 
            </div>
        )
    }
}

export default Marksheet;