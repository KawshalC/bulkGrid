import React from 'react';
import Grid from './Grid';

class SecondaryGrid extends React.Component{
    constructor(props){
        super(props);  
        this.state={
            data:this.props.data,
            isOpen:false 
          }           
      }
      setDefaultProps() {
        this.setState({pos: {x: 0, y: 0}});
      }      
      toggleGridView(){
        debugger;
        this.setState({isOpen: !this.state.isOpen});
      }
      showHideSecondaryTable(){
        if(this.state.isOpen)
          return(
          <div className="secondaryGrid">
            <Grid data={this.props.data}></Grid>
          </div>);
      }
      render(){
        return(        
            <div className="secondaryContainer dropdown">
                <div className='dropdown-header' onClick={()=>this.toggleGridView()}>
                    {this.state.selectedItem ? this.state.items.find(item => item.id === this.state.selectedItem).label : "Employees"}
                    <i className={`fa fa-chevron-right icon ${this.state.isOpen && "open"}`}></i>
                </div>
                {this.showHideSecondaryTable()}
            </div>
        )
      }
}
export default SecondaryGrid;

