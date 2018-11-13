import React, { Component } from 'react';
import ICS211 from './ICS211';
import SITES from './SITES';

class FavSites extends Component {
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
        fetch('http://localhost:3000/sites')
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
        let titleStyle = {
            color: 'red',
            fontSize: 'small',
            fontWeight: 'bold',
            padding: 20
        }
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
                <div style={titleStyle}>
                    <ICS211 title='Forest Vey Lab 5' subtitle='Web Applications' />
                    
                </div>
                    <div style={siteStyle}>
                        <ol>
                            {
                                this.state.sites.map(site=>
                                <SITES key={site.id} id={site.id} name={site.name} website={site.link} style={site.color} checked={site.checked}>
                                </SITES>
                                )
                            }
                        </ol>
                    </div>
            </div>

        )
    }
}

export default FavSites;