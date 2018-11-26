import React, { Component } from 'react';
import FavCocktails from './FavSites';

class FavCocktailsForm extends Component{
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
            let search = i + 1
            // console.log(this.state.checkboxGroup[i])
            if(this.state.checkboxGroup[i]){
                fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?c=${search}`, {
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
                                <input type='radio' id='radio1' name='cocktailRadio' value='Ordinary Drink'
                                checked={this.state.checkboxGroup[0]}
                                onChange={this.handleChecked} />
                                &nbsp;Ordinary Drink
                            </label>
                            <br /><br />
                            <label>
                                <input type='radio' id='radio2' name='cocktailRadio' value='1'
                                checked={this.state.checkboxGroup[1]}
                                onChange={this.handleChecked} />
                                &nbsp;Cocktail
                            </label>
                            <br /><br />
                            <label>
                                <input type='radio' id='radio3' name='cocktailRadio' value='2'
                                checked={this.state.checkboxGroup[2]}
                                onChange={this.handleChecked} />
                                &nbsp;Shot
                            </label>
                            <br /><br />
                            <label>
                                <input type='radio' id='radio4' name='cocktailRadio' value='3'
                                checked={this.state.checkboxGroup[3]}
                                onChange={this.handleChecked} />
                                &nbsp;Homemade Liqueur
                            </label>
                            <br /><br />
                            <label>
                                <input type='radio' id='radio5' name='cocktailRadio' value='4'
                                checked={this.state.checkboxGroup[4]}
                                onChange={this.handleChecked} />
                                &nbsp;Beer
                            </label>
                            <br /><br />
                            <input type='submit' value='Submit' style={buttStyle} />
                        </form>
                    </fieldset>
                </div>
                ); // closes return
            } else {
                return <FavCocktails />
            }
    } // closes render
}

export default FavCocktailsForm;