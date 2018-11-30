import React, { Component } from 'react';
import FavCocktails from './FavCocktails';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'
import DRINK from './DRINK';

class FavCocktailsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm: true,
            drinks: [],
            categories: [],
            ingredients: [],
            randomD: [],
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
        this.handleSubmit = this.handleSubmit.bind(this);
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
    handleClick = (drink) => {
        console.log(drink.strDrink);
        fetch(`http://cors-anywhere.deploy.cs.camosun.bc.ca/https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink.idDrink}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Max-Age': 600
            }
        }) // closes fetch call
            .then(response => this.handleHTTPErrors(response))
            // .then(result => result.json())
            .then(result => {
                console.log(result);
                this.setState({
                    showForm: true
                });
                // console.log("strDrink value = " + drink.strDrink);
                // console.log("strCategory value = " + drink.strCategory);
                // console.log("strIngredient value = " + drink.strIngredient1);
                // console.log("randomD.strDrink value = " + this.state.randomD[0].strDrink);
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
        if (this.state.showForm) {
            return (
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