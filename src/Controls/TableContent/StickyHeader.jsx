import React from 'react';
import lodash from 'lodash';
import HeaderCell from './HeaderCell';

class StickyHeader extends React.Component{
    constructor(props){
        super(props);  
        this.state={
            data:this.props.data,
            isOpen:false 
          }           
      }
      
      showDeleteIcon(){
        if(this.props.showCheckBox)
          return (<div className="firstHeaderCell"><i className="fa fa-trash"></i></div>);
        return (<div className="firstHeaderCell"></div>);
      }
      render(){
        return(    
            <div className="stickyheaderGroup">    
            {this.showDeleteIcon()}            
              {lodash.map(this.props.headers, function (header, index) {              
                return <HeaderCell key={header.headerName} rowHeader={header} ></HeaderCell>;
              })}      
            </div> 
        )
      }
}
export default StickyHeader;

