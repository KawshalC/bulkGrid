import React from 'react';
import HeaderCell from './HeaderCell';
import lodash from 'lodash';
import StickyHeader from './StickyHeader';

class HeaderRow extends React.Component{
    constructor(props){
        super(props);
        this.state={
          hasDockedCols: props.dockedCols.length > 0,
          dockedCols:props.dockedCols,
        }       
      }      
      showCrossIcon(){
        if(this.props.showCrossButton)
          return (<div className="lastHeaderCell"><i className="fa fa-times"></i></div>);        
      }
      render(){
        var dockedCols = this.state.dockedCols;
        var stickyHeaders= lodash.filter(this.props.rowHeaders, function(i){
          return  dockedCols.includes(i.model);
        });
        var nonStickyHeaders = lodash.difference(this.props.rowHeaders, stickyHeaders);
        return(
          <div className="headerRowGroup">
            <StickyHeader showCheckBox={this.props.showCheckBox} headers={stickyHeaders}></StickyHeader>
            <div className="nonStickyHeaderGroup">
            {lodash.map(nonStickyHeaders, function (rowHeader, index) {
                return <HeaderCell key={rowHeader.headerName} rowHeader={rowHeader} ></HeaderCell>;
              })}
              </div>
            {this.showCrossIcon()}
        </div>
        )
      }
}
export default HeaderRow;
