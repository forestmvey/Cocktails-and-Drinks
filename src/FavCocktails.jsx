import React, { Component } from 'react';
import TITLE from './Title/ICS211';
import COCKTAILS from './SITES';

class FavCocktails extends Component {
    constructor(props) {
        super(props); 
            this.state = {
                sites: [],
            };
    }
    handleHTTPErrors(response) {
        if(!response.ok) throw Error(response.status + 
        ': ' + response.statusText);
        return response;
    }
    componentDidMount() {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
        .then(response=> this.handleHTTPErrors(response))
        .then(response=> response.json())
        .then(result=> {
            this.setState({
                sites: result
            });
        })
        .catch(error=> {
            console.log(error);
        });
    }
    render() {
        // let titleStyle = {
        //     color: 'red',
        //     fontSize: 'small',
        //     fontWeight: 'bold',
        //     padding: 20
        // }
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
                    <TITLE title='Forest Vey Lab 5' subtitle='Web Applications' />
                    
                </div>
                    <div style={siteStyle}>
                        <ol>
                            {
                                this.state.sites.map(site=>
                                <COCKTAILS key={site.id} id={site.id} name={site.name} website={site.link} style={site.color} checked={site.checked}>
                                </COCKTAILS>
                                )
                            }
                        </ol>
                    </div>
            </div>

        )
    }
}

export default FavCocktails;