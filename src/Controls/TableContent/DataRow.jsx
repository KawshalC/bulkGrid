import React from 'react';
import Cell from './Cell';
import lodash from 'lodash';
import StickyCells from './StickyCells';

class DataRow extends React.Component{
    constructor(props){
        super(props);
        this.state={
          selected:false,
          dockedCols:props.dockedCols,
          hasDockedCols: props.dockedCols.length > 0
        }     
      }      
      selectDeselectRow(){
        debugger;
        this.setState({selected:!this.state.selected});
      }
      showCrossIcon(){
        if(this.props.showCrossButton)
          return (<div className="firstHeaderCell"></div>);
      }
      render(){
        var dockedCols = this.state.dockedCols;
        var stickyCells= lodash.filter(this.props.rowData, function(i){
          return  dockedCols.includes(i.model);
        });
        var nonStickyCellss = lodash.difference(this.props.rowData, stickyCells);
        return(          
            <div className="cellRowGroup">
              <StickyCells stickyCells={stickyCells} showCheckBox={this.props.showCheckBox} selected={this.state.selected} selectDeselectRow = {()=>this.selectDeselectRow()}></StickyCells>
              <div className={`nonStickyRowGroup ${this.state.selected ?`rowSelected`:``}`}>
                {lodash.map(nonStickyCellss, function (cellData, index) {
                  return <Cell key={index} cellData={cellData} ></Cell>;
                })}            
              </div>
              {this.showCrossIcon()}
            </div>
        )
      }
}
export default DataRow;
{/* <div className={`stickyDataGroup ${this.state.selected ?`rowSelected`:``}`}></div> */}