import React from 'react';

class TextBox extends React.Component{
    constructor(props){
        super(props); 
        this.state = {
          rows: 1
        };       
      }
      onBlurChange({target}){
        debugger;
      }
      render(){
        return(
          <div>
              <textarea rows={this.state.rows} defaultValue={this.props.value}	placeholder={'Enter Text'} onBlur={this.onBlurChange()} ></textarea>
              <div></div>
          </div>
        )
      }
}
export default TextBox;
