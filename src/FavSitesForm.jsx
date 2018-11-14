import React, { Component } from 'react';
import FavSites from './FavSites';

class FavSitesForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
                checkboxGroup: [false, false, false, false, false],
                showForm: true
            };
        this.handleChecked = this.handleChecked.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    handleHTTPErrors(response) {
        if(!response.ok) throw Error(response.status + 
        ': ' + response.statusText);
        return response;
    }
    handleSubmit(event){
        event.preventDefault();
        for (let i = 0; i < this.state.checkboxGroup.length; i++){
            let id = i + 1
            // console.log(this.state.checkboxGroup[i])
            if(this.state.checkboxGroup[i]){
                fetch(`http://localhost:3004/sites/${id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "checked": true
                    })
                }) // closes fetch call
                .then(response=> this.handleHTTPErrors(response))
                .then(result=> {
                    this.setState({
                        showForm: false
                    });
                })
                .catch(error=> {
                    console.log(error);
                });
            }
        }
    }
    handleChecked(event){
        let checkboxes = this.state.checkboxGroup.slice();
        checkboxes[event.target.value] = event.target.checked;
        this.setState ({
            checkboxGroup: checkboxes
        });
    }
    render() {
        const favSitesFormStyle = {
            height: 200,
            width: 400,
            padding: 50,
            backgroundColor: '#FFF2CC',
            boxShadow: '0px 0px 5px #666',
            fontFamily: 'arial',
            fontWeight: '5px',
            color: 'black'
        }
        const buttStyle = {
            backgroundColor: '#4CAF50', /* Green */
            border: 'none',
            color: 'white',
            padding: '10px 15px',
            textAlign: 'center',
            textDecoration: 'none',
            fontSize: '14px'
        }
        if (this.state.showForm){
            return( 
                    <div style={favSitesFormStyle}>
                    <fieldset>
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                <input type='checkbox' id='check1' name='siteCheckBox' value='0'
                                checked={this.state.checkboxGroup[0]}
                                onChange={this.handleChecked} />
                                &nbsp;Google
                            </label>
                            <br /><br />
                            <label>
                                <input type='checkbox' id='check2' name='siteCheckBox' value='1'
                                checked={this.state.checkboxGroup[1]}
                                onChange={this.handleChecked} />
                                &nbsp;Gmail
                            </label>
                            <br /><br />
                            <label>
                                <input type='checkbox' id='check3' name='siteCheckBox' value='2'
                                checked={this.state.checkboxGroup[2]}
                                onChange={this.handleChecked} />
                                &nbsp;XKD
                            </label>
                            <br /><br />
                            <label>
                                <input type='checkbox' id='check4' name='siteCheckBox' value='3'
                                checked={this.state.checkboxGroup[3]}
                                onChange={this.handleChecked} />
                                &nbsp;Reddit
                            </label>
                            <br /><br />
                            <label>
                                <input type='checkbox' id='check5' name='siteCheckBox' value='4'
                                checked={this.state.checkboxGroup[4]}
                                onChange={this.handleChecked} />
                                &nbsp;Duck duck go
                            </label>
                            <br /><br />
                            <input type='submit' value='Submit' style={buttStyle} />
                        </form>
                    </fieldset>
                </div>
                ); // closes return
            } else {
                return <FavSites />
            }
    } // closes render
}

export default FavSitesForm;