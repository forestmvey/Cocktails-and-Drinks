import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'
import DRINK from './DRINK';

class FavDrinksForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDrink: false,
            drinks: [],
            categories: [],
            ingredients: [],
            randomD: [],
            selectDrink: [],
           search: ''
        };
        fetch('http://cors-anywhere.deploy.cs.camosun.bc.ca/https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
        .then(response => this.handleHTTPErrors(response))    
        .then(res => res.json())
            .then(json => {
                // console.log(json);
                this.setState({
                    drinks: json.drinks
                })
            });
        fetch('http://cors-anywhere.deploy.cs.camosun.bc.ca/https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
        .then(response => this.handleHTTPErrors(response))    
        .then(res => res.json())
            .then(json => {
                // console.log(json);
                this.setState({
                   categories: json.drinks
                })
            });
        fetch('http://cors-anywhere.deploy.cs.camosun.bc.ca/https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
        .then(response => this.handleHTTPErrors(response))    
        .then(res => res.json())
            .then(json => {
                // console.log(json);
                this.setState({
                    ingredients: json.drinks
                })
            });
            fetch('http://cors-anywhere.deploy.cs.camosun.bc.ca/https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(response => this.handleHTTPErrors(response))    
        .then(res => res.json())
            .then(json => {
                // console.log(json);
                this.setState({
                    randomD: json.drinks
                })
            });
        this.handleClick = this.handleClick.bind(this);
    }
    handleHTTPErrors(response) {
        if (!response.ok) throw Error(response.status +
            ': ' + response.statusText);
        return response;
    }
    // componentDidMount() {
    //     fetch('http://cors-anywhere.deploy.cs.camosun.bc.ca/https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
    //     .then(response => this.handleHTTPErrors(response))    
    //     .then(res => res.json())
    //         .then(json => {
    //             // console.log(json);
    //             this.setState({
    //                 drinks: json.drinks,
    //                 alcTypes: json.drinks
    //             })
    //         });
    // }
    handleCSearch = (drink) => {

    }
    handleClick = (drink) => {
        console.log(drink.strDrink);
        fetch(`http://cors-anywhere.deploy.cs.camosun.bc.ca/https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink.idDrink}`)
        .then(response => this.handleHTTPErrors(response))    
        .then(res => res.json())
            .then(json => {
                // console.log(json);
                this.setState({
                    selectDrink: json.drinks,
                    showDrink: true
                })
            }).catch(error => {
                console.log(error);
            });
    };
    handleCatClick = (drink) => {
        console.log(drink.strDrink);
        fetch(`http://cors-anywhere.deploy.cs.camosun.bc.ca/https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink.idDrink}`)
        .then(response => this.handleHTTPErrors(response))    
        .then(res => res.json())
            .then(json => {
                // console.log(json);
                this.setState({
                    Categories: json.drinks,
                })
            }).catch(error => {
                console.log(error);
            });
    };
    render() {
        // const buttStyle = {
        //     backgroundColor: '#4CAF50', /* Green */
        //     border: 'none',
        //     color: 'white',
        //     padding: '10px 15px',
        //     textAlign: 'center',
        //     textDecoration: 'none',
        //     fontSize: '14px'
        // }
        const displayTabs = (
            <Tabs onSelect={index => console.log(index)}>
                <TabList>
                <Tab>Home</Tab>
                <Tab>Search Drinks by Name</Tab>
                <Tab>Filter Drinks by Category</Tab>
                <Tab>Filter Drinks by Ingredient</Tab>
                </TabList>
            <TabPanel>
            <fieldset>
                <h1>Make me a random drink!</h1>
                                <label>
                                {  
                                    this.state.randomD.map(drink =>
                                            <input type='button' key={drink.idDrink} name={drink.strDrink} value='Click Me!'
                                            onClick={() => this.handleClick(drink)} />
                                        )
                                }
                        </label>
            </fieldset>
            </TabPanel>
            <TabPanel>
            <fieldset>
                                <label>
                                    <input type='search' id='cocktailSearch' name='cocktailSearch' aria-label='Search for Cocktail Name'
                                        onChange={this.change} />
                                    &nbsp;<br />Drink Name
                        </label>
                                <br /><br />
                                {  
                                    this.state.drinks.map(drink =>
                                            <input type='button' key={drink.idDrink} value={drink.strDrink}
                                            onClick={() => this.handleClick(drink)} />
                                        )
                                }
                </fieldset>
            </TabPanel>
            <TabPanel>
                    <fieldset>
                                {  
                                    this.state.categories.map(drink =>
                                            <input type='button' key={drink.strCategory} value={drink.strCategory}
                                            onClick={() => this.handleClick(drink)} />
                                        )
                                }
                    </fieldset>
            </TabPanel>
            <TabPanel>
         
            <fieldset>
                           
                            <label>
                                    <input type='search' id='ingredientSearch' name='ingredientSearch' aria-label='Search for Ingredient'
                                        onChange={this.handleChange} />
                                    &nbsp;<br />Ingredient Type
                        </label>
                                <br /><br />
                                {  
                                    this.state.ingredients.map(drink =>
                                            <input type='button' key={drink.strIngredient1} value={drink.strIngredient1}
                                            onClick={() => this.handleClick(drink)} />
                                        )
                                }
                        </fieldset>
            </TabPanel>
            </Tabs >
        );
        if (!this.state.showDrink) {
            return (
                <div>
                    {displayTabs}
                </div>

            ); // closes return
        } else {
            return(
                <div>
                        {
                            this.state.selectDrink.map(drink=>
                            <DRINK key={drink.idDrink} id={drink.idDrink} name={drink.strDrink} glass={drink.strGlass} alcoholic={drink.strAlcoholi}
                            instructions={drink.strInstructions} ing1={drink.strIngredient1} ing2={drink.strIngredient2} ing3={drink.strIngredient3}
                            ing4={drink.strIngredient4} ing5={drink.strIngredient5}>
                            </DRINK>
                            )
                        }
                </div>
            );
        }
    } // closes render
}

export default FavDrinksForm;