import React from 'react';
import lodash from 'lodash';
import HeaderCell from './HeaderCell';
import Cell from './Cell';

class StickyCells extends React.Component{
    constructor(props){
        super(props);  
        this.state={
            data:this.props.data,
            isOpen:false 
          }           
      }
      
      showCheckBox(){
        if(this.props.showCheckBox)
          return(<div className="gridCheckbox">
            <input type="checkbox"onClick={this.props.selectDeselectRow}></input>
            </div> );
        else
          return(<div></div> );
      }
      showDeleteIcon(){
        if(this.props.showCheckBox)
          return (<div className="firstHeaderCell"><i className="fa fa-trash"></i></div>);
        return (<div className="firstHeaderCell"></div>);
      }
      render(){
        return(
            <div className={`stickyDataGroup ${this.props.selected ?`rowSelected`:``}`}>            
              {this.showCheckBox()}
                {lodash.map(this.props.stickyCells, function (cellData, index) {              
                  return <Cell key={index} cellData={cellData} ></Cell>;
                })}    
            </div>
        )
      }
}
export default StickyCells;

