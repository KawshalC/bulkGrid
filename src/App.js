import './App.css';
import React from 'react';
import Grid from './Controls/TableContent/Grid';
import data from './data.json';

class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {};
        }
        componentWillMount(){
            localStorage.setItem('currentData', JSON.stringify(data));
            var items = JSON.parse(localStorage.getItem("currentData"));
            this.setState({data:items});
        }
        render() {            
            return ( <div className = "App" id="mainApp">
                {
                    this.state.data.map((datum,index) => {
                        return <Grid key = {index} data = {datum} > </Grid>})
                }                
                </div >);
            }
        }

        export default App;