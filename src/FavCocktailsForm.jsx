import React, { Component } from 'react';
import FavCocktails from './FavCocktails';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'

class FavCocktailsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm: true,
            drinks: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleHTTPErrors(response) {
        if (!response.ok) throw Error(response.status +
            ': ' + response.statusText);
        return response;
    }
    // handleSubmit(event){
    //     event.preventDefault();
    //     for (let i = 0; i < this.state.checkboxGroup.length; i++){
    //         let search = 'Cocktail';
    //         console.log(this.state.checkboxGroup[i])
    //         if(this.state.checkboxGroup[i]){
    //             fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?c=${search}`, {
    //                 method: 'PATCH',
    //                 headers: {
    //                     'Content-Type': 'application/json'
    //                 },
    //                 body: JSON.stringify({
    //                     "checked": true
    //                 })
    //             }) // closes fetch call
    //             .then(response=> this.handleHTTPErrors(response))
    //             .then(result=> {
    //                 this.setState({
    //                     showForm: false
    //                 });
    //             })
    //             .catch(error=> {
    //                 console.log(error);
    //             });
    //         }
    //     }
    // }
    handleSubmit = () => {
        // this.preventDefault();
        // console.log(this.target.category + " = this.state.category");
        // let search = this.state.category;
        // this.setState({
        //     showForm: false
        // });
        // fetch(`http://cors-anywhere.deploy.cs.camosun.bc.ca/https://www.thecocktaildb.com/api/json/v1/1/search.php?c=${search}`, {
        //     method: 'PATCH',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // }) // closes fetch call
        //     .then(response => this.handleHTTPErrors(response))
        //     .then(result => {
        //         this.setState({
        //             showForm: false
        //         });
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });
    }
    cClick = () => {
        fetch(`http://cors-anywhere.deploy.cs.camosun.bc.ca/https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }) // closes fetch call
            .then(response => this.handleHTTPErrors(response))
            // .then(result => result.json())
            .then(result => {
                // console.log(result);
                this.setState({
                    showForm: false
                });
            })
            .catch(error => {
                console.log(error);
            });
    };
    render() {
        const buttStyle = {
            backgroundColor: '#4CAF50', /* Green */
            border: 'none',
            color: 'white',
            padding: '10px 15px',
            textAlign: 'center',
            textDecoration: 'none',
            fontSize: '14px'
        }
        const displayTabs = (
            <Tabs onSelect={index => console.log(index)}>
                <TabList>
                <Tab>Home</Tab>
                <Tab>Search Cocktail by Name</Tab>
                <Tab>Filter Drinks by Category</Tab>
                <Tab>Filter Drinks by Ingredient</Tab>
                <Tab>Search for an Ingredient</Tab>
                    </TabList>
            <TabPanel>
            <fieldset>
                <h1>Make me a random drink!</h1>
                                <label>
                                    <input type='button' id='rButt' name='rButt' value='Click' style={buttStyle}
                                        onChange={this.cChange} />
                                    &nbsp;
                        </label>
            </fieldset>
            </TabPanel>
            <TabPanel>
            <fieldset>
                            <form onSubmit={this.onSubmit}>
                                <label>
                                    <input type='search' id='cocktailSearch' name='cocktailSearch' aria-label='Search for Cocktail Name'
                                        onChange={this.change} />
                                    &nbsp;<br />Drink Name
                        </label>
                                <br /><br />
                                <input type='submit' value='Submit' style={buttStyle} />
                            </form>
                        </fieldset>
            </TabPanel>
            <TabPanel>
            <div>
                        <fieldset>
                                <label>
                                    <input type='button' id='oDButt' name='ordinaryDrink' value='Ordinary Drink'
                                        onChange={this.cChange} />
                                    &nbsp;
                        </label>
                        <label>
                                <br /><br />
                                    <input type='button' id='cButt' name='cocktail' value='Cocktail'
                                        onChange={this.handleChecked} />
                                    &nbsp;
                        </label>
                                <br /><br />
                                <label>
                                    <input type='button' id='sButt' name='shot' value='Shot'
                                        onChange={this.handleChecked} />
                                    &nbsp;
                        </label>
                                <br /><br />
                                <label>
                                    <input type='button' id='hLButt' name='homemadeLiqueur' value='Homemade Liqueur'
                                        onChange={this.handleChecked} />
                                    &nbsp;
                        </label>
                                <br /><br />
                                <label>
                                    <input type='button' id='bButt' name='beer' value='Beer'
                                        onChange={this.handleChecked} />
                                    &nbsp;
                        </label>
                                <br /><br />
                        </fieldset>
                        </div>
            </TabPanel>
            <TabPanel>
            <fieldset>
                            <form>
                                <label>
                                    <input type='button' id='gin' name='ginButt' value={'Gin'}
                                        onClick={this.cClick} />
                                    &nbsp;
                        </label>
                                <br /><br />
                                <label>
                                    <input type='button' id='vodka' name='vodkaButt' value='Vodka'
                                        onClick={this.cClick} />
                                    &nbsp;
                        </label>
                                <br /><br />
                                <label>
                                    <input type='button' id='bourbon' name='bourbonButt' value='Bourbon'
                                        onClick={this.cClick} />
                                    &nbsp;
                        </label>
                                <br /><br />
                                <label>
                                    <input type='button' id='rum' name='rumButt' value='Rum'
                                        onClick={this.cClick} />
                                    &nbsp;
                        </label>
                                <br /><br />
                                <label>
                                    <input type='button' id='whiskey' name='whiskeyButt' value='Whiskey'
                                        onClick={this.cClick} />
                                    &nbsp;
                        </label>
                                <br /><br />
                            </form>
                        </fieldset>
            </TabPanel>
            <TabPanel>
            <fieldset>
                            <form onSubmit={this.onSubmit}>
                                <label>
                                    <input type='search' id='ingredientSearch' name='ingredientSearch' aria-label='Search for Ingredient'
                                        onChange={this.cChange} />
                                    &nbsp;<br />Ingredient Type
                        </label>
                                <br /><br />
                                <input type='submit' value='Submit' style={buttStyle} />
                            </form>
                        </fieldset>
            </TabPanel>
            </Tabs >
        );
        if (this.state.showForm) {
            return (

                //     <h1 class="title">Tabs</h1>
                //     <div class="tabContainer" style={tabStyle}>
                //         <div class="buttonContainer" style={buttContainer}>
                //             <button>Tab1</button>
                //             <button>Tab2</button>
                //             <button>Tab3</button>
                //             <button>Tab4</button>
                //         </div>
                //         <div class="tabPanel1" style={buttContainer} onClick={this.handleTab}>Tab 1: content
                //         <div style={favSitesFormStyle}>
                //     <fieldset>
                //         <form onSubmit={e => this.onSubmit(e)}>
                //             <label>
                //                 <input type='radio' id='radio1' name='cocktailRadio' value='Ordinary Drink'
                //                 // checked={this.state.checkboxGroup[0]}
                //                 onChange={e => this.cChange(e)} />
                //                 &nbsp;Ordinary Drink
                //             </label>
                //             <br /><br />
                //             <label>
                //                 <input type='radio' id='radio2' name='cocktailRadio' value='Cocktail'
                //                 // checked={this.state.checkboxGroup[1]}
                //                 onChange={this.handleChecked} />
                //                 &nbsp;Cocktail
                //             </label>
                //             <br /><br />
                //             <label>
                //                 <input type='radio' id='radio3' name='cocktailRadio' value='Shot'
                //                 // checked={this.state.checkboxGroup[2]}
                //                 onChange={this.handleChecked} />
                //                 &nbsp;Shot
                //             </label>
                //             <br /><br />
                //             <label>
                //                 <input type='radio' id='radio4' name='cocktailRadio' value='Homemade Liqueur'
                //                 // checked={this.state.checkboxGroup[3]}
                //                 onChange={this.handleChecked} />
                //                 &nbsp;Homemade Liqueur
                //             </label>
                //             <br /><br />
                //             <label>
                //                 <input type='radio' id='radio5' name='cocktailRadio' value='Beer'
                //                 // checked={this.state.checkboxGroup[4]}
                //                 onChange={this.handleChecked} />
                //                 &nbsp;Beer
                //             </label>
                //             <br /><br />
                //             <input type='submit' value='Submit' style={buttStyle} />
                //         </form>
                //     </fieldset>
                // </div>
                //         </div>
                //         <div class="tabPanel2" style={buttContainer} onClick={e => this.handleTab(e)}>Tab 2: content</div>
                //         <div class="tabPanel3" style={buttContainer} onClick={e => this.handleTab(e)}>Tab 3: content</div>
                //         <div class="tabPanel4" style={buttContainer} onClick={e => this.handleTab(e)}>Tab 4: content</div>
                //     </div>
                <div>
                    {displayTabs}
                </div>

            ); // closes return
        } else {
            return <FavCocktails />
        }
    } // closes render
}

export default FavCocktailsForm;