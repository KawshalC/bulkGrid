import React from 'react';

class HeaderCell extends React.Component{
    constructor(props){
        super(props);
      }
      render(){
        return(
        <div className="headerCellContainer">
            <div className="headerCell">{this.props.rowHeader.headerName}</div>
        </div>);
      }
}
export default HeaderCell;
