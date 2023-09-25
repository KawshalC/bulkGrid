import React from 'react';

class DropDown extends React.Component{
  constructor(props){
    super(props);   
    this.state  = {
      isOpen:false,
      items:this.props.data,
      selectedItem:this.props.value
    };  
  };
  
  toggleDropdown(){
    this.setState({isOpen: !this.state.isOpen})
  };
  
  handleItemClick(id){
    this.setState({selectedItem:this.state.selectedItem === id ? null : id});
    this.toggleDropdown();
  };
  
  render(){
    return (
      <div className='dropdown'>
        <div className='dropdown-header' onClick={()=>this.toggleDropdown()}>
          <div className="dropdown-header-name">
            {this.state.selectedItem ? this.state.items.find(item => item.id === this.state.selectedItem).label : "Select your destination"}
          </div>
          <i className={`fa fa-chevron-right icon ${this.state.isOpen && "open"}`}></i>
        </div>
        <div className={`dropdown-body ${this.state.isOpen && 'open'}`}>
          {this.state.items.map((item, index) => (
            <div key={index}  className="dropdown-item" onClick={e => this.handleItemClick(e.target.id)} id={item.id}>
              <span className={`dropdown-item-dot ${item.id === this.state.selectedItem && 'selected'}`}>• </span>
              {item.label}
            </div>
          ))}
        </div>
      </div>
        );
  }
}

export default DropDown;
