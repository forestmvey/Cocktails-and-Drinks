import React, { Component } from 'react';
import TITLE from './Title/TITLE';
import COCKTAILS from './COCKTAILS';

class FavCocktails extends Component {
    constructor(props) {
        super(props); 
            this.state = {
                drinks: [],
            };
    }
    handleHTTPErrors(response) {
        if(!response.ok) throw Error(response.status + 
        ': ' + response.statusText);
        return response;
    }
    componentDidMount() {
        fetch('http://cors-anywhere.deploy.cs.camosun.bc.ca/https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink')
        .then(response => this.handleHTTPErrors(response))    
        .then(res => res.json())
            .then(json => {
                // console.log(json);
                this.setState({
                    isLoaded: true,
                    drinks: json.drinks
                })
            });
    }
    // componentDidMount() {
    //     fetch('http://cors-anywhere.deploy.cs.camosun.bc.ca/https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink')
    //     // .then(response=> this.handleHTTPErrors(response))
    //     .then(response=> response.json())
    //     .then(result=> {
    //         this.setState({
    //             drinks: result.drinks
    //         });
    //     })
    //     .catch(error=> {
    //         console.log(error);
    //     });
    // }
    render() {
        const favSitesStyle = {
            height: 600,
            width: 400,
            padding: 50,
            backgroundColor: '#FFF2CC',
            boxShadow: '0px 0px 5px #666'
        }
        let siteStyle = {
            backgroundColor: 'green',
            fontFamily: 'arial'
        }

        return (
            <div style={favSitesStyle}>
                <div>
                    <TITLE title='Forest Vey' subtitle='Web Applications cocktails project' />
                    
                </div>
                    <div style={siteStyle}>
                        <ul>
                            {
                                this.state.drinks.map(drink=>
                                <COCKTAILS key={drink.idDrink} id={drink.idDrink} name={drink.strDrink} >
                                </COCKTAILS>
                                )
                            }
                        </ul>
                    </div>
            </div>

        )
    }
}

export default FavCocktails;