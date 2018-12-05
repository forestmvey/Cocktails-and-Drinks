import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import DRINK from './DRINK';
import background from './photos/barBackground.jpg';

class FavDrinksForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabIndex: 0,
            showDrink: false,
            drinks: [],
            categories: [],
            ingredients: [],
            randomD: [],
            selectDrink: [],
            selectCats: [],
            selectIngs: [],
            showCats: true,
            showCatsBack: false,
            showIngs: true,
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
        this.handleCatClick = this.handleCatClick.bind(this);
        this.handleIngClick = this.handleIngClick.bind(this);
        this.handleBackClick = this.handleBackClick.bind(this);
        this.handleIngCatBack = this.handleIngCatBack.bind(this);
    }
    handleHTTPErrors(response) {
        if (!response.ok) throw Error(response.status +
            ': ' + response.statusText);
        return response;
    }
    handleIngCatBack(){
        if(!this.state.showCats){
                this.setState({
                   showCats: true
                })
        }else{
            this.setState({
                showIngs: true
            })
        }
    }
    handleBackClick() {
        if(this.state.tabIndex === 3){
            this.setState({
                showDrink: false,
                showCats: true,
                showIngs: false,
                tabIndex: 3
            })
        }else if(this.state.tabIndex === 2){
            this.setState({
                showDrink: false,
                showCats: false,
                showIngs: true,
                tabIndex: 2
            })
        }else if(this.state.tabIndex === 1){
            this.setState({
                showDrink: false,
                showCats: true,
                tabIndex: 1
            })
        }else{
            this.setState({
                showDrink: false,
                showCats: true,
                tabIndex: 0
            })
        }
    };
    handleClick = (drink) => {
        console.log("handleClick strDrink = " + drink.strDrink);
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
            console.log("handleCatClick strCategory = " + drink.strCategory);
            fetch(`http://cors-anywhere.deploy.cs.camosun.bc.ca/https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${drink.strCategory}`)
            .then(response => this.handleHTTPErrors(response))    
            .then(res => res.json())
                .then(json => {
                    // console.log(json);
                    this.setState({
                        selectCats: json.drinks,
                        showCats: false
                    })
                }).catch(error => {
                    console.log(error);
                });
    };
    handleIngClick = (drink) => {
        console.log("handleIngClick ingredient1 = " + drink.strIngredient1);
        fetch(`http://cors-anywhere.deploy.cs.camosun.bc.ca/https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${drink.strIngredient1}`)
        .then(response => this.handleHTTPErrors(response))    
        .then(res => res.json())
            .then(json => {
                // console.log(json);
                this.setState({
                    selectIngs: json.drinks,
                    showIngs: false
                })
            }).catch(error => {
                console.log(error);
            });
};
    render() {
        const imgStyle = {
            maxWidth: '100%',
            maxHeight: '80%',
            position: 'relative',
            background: 'gray',
            display: 'inlineBlock',
            textAlign: 'center',
            verticalAlign: 'top',
            width: '100%'
          }
          const spanStyle = {
              display: 'block',
              textAlign: 'center',
              height: '45px',
          }
        const imageDiv = {
            width: '100%',
            height: '100%',
            backgroundImage: 'url('+background+')',
            border: 'none',
            minHeight: '100vh',
            backgroundRepeat: 'noRepeat',
            backgroundSize: '100% 100%',
            backgroundAttachment: 'fixed',
        }
      const ingsCatsStyle = {
        display: 'inLineBlock',
        textAlign: 'center',
        height: '70px',
      }
      const tabStyle = {
         textAlign: 'center'
      }
        const randomDrink = (
            <div>
                <div>
                <h1 className='title'>Forest Lounge</h1>
                </div>        
                        {  
                            this.state.randomD.map(drink =>
                                    <input type='button' className='zoomRandom' key={drink.idDrink} name={drink.strDrink} value='Make me a random drink'
                                    onClick={() => this.handleClick(drink)}></input>
                                )
                        }
            </div>
        );
        const allDrinks = (
            <div>
                { 
                    this.state.drinks.map(drink =>
                        <div key={drink.idDrink} className='zoom' >
                        <img src={drink.strDrinkThumb} style={imgStyle} alt='' onClick={() => this.handleClick(drink)} />
                        <span style={spanStyle} value={drink} className='imgText'>{drink.strDrink}</span>
                        </div> 
                        )
                }
            </div>
        );
        const drinkCategories = (
            <div>
                    {
                    !this.state.showCats ? 
                    <div>
                    <input type='button' className='button' value='Back' name='Back'
                    onClick={this.handleIngCatBack}></input>
                    </div>:
                    null
                }
                {  
                    this.state.showCats ?
                    this.state.categories.map(drink =>
                            <input style={ingsCatsStyle} type='button' className='zoomIngsCats' key={drink.strCategory} value={drink.strCategory}
                            onClick={() => this.handleCatClick(drink)} />
                        )
                        :
                          
                        this.state.selectCats.map(drink =>
                            <div key={drink.idDrink} className='zoom'>
                            <img src={drink.strDrinkThumb} style={imgStyle} alt='' onClick={() => this.handleClick(drink)} />
                            <span style={spanStyle} className='imgText'>{drink.strDrink}</span>
                            </div> 
                            )
                }
            </div>
        );
        const drinkIngredients = (
            <div>
                    {
                        !this.state.showIngs ? 
                        <div>
                        <input type='button' className='button' value='Back' name='Back'
                        onClick={this.handleIngCatBack}></input>
                        </div>
                        :
                        null
                    }
                    {  
                        this.state.showIngs ? this.state.ingredients.map(drink =>
                                <input style={ingsCatsStyle} type='button' className='zoomIngsCats' key={drink.strIngredient1} value={drink.strIngredient1}
                                onClick={() => this.handleIngClick(drink)} />
                            )
                            :
                        this.state.selectIngs.map(drink =>
                            <div key={drink.idDrink} className='zoom'>
                            <img src={drink.strDrinkThumb} style={imgStyle} alt='' onClick={() => this.handleClick(drink)} />
                            <span style={spanStyle} className='imgText'>{drink.strDrink}</span>
                            </div> 
                            )     
                    }
            </div>
        );
        const showTheDrink = (
            <div>
                        <input type='button' className='drinkButton' value='Back' name='Back'
                        onClick={this.handleBackClick}></input>
                
            {
                this.state.selectDrink.map(drink=>
                <DRINK key={drink.idDrink} id={drink.idDrink} name={drink.strDrink} glass={drink.strGlass} alcoholic={drink.strAlcoholi}
                instructions={drink.strInstructions} ing1={drink.strIngredient1} ing2={drink.strIngredient2} ing3={drink.strIngredient3}
                ing4={drink.strIngredient4} ing5={drink.strIngredient5} measure1={drink.strMeasure1} measure2={drink.strMeasure3} 
                measure1={drink.strMeasure4} measure1={drink.strMeasure5} image={drink.strDrinkThumb}>
                </DRINK>
                )
            }
            </div>
            
        );
        const displayTabs = (
            <div style={imageDiv}>
            <Tabs style={tabStyle} selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                <TabList>
                <Tab>Home</Tab>
                <Tab>Search Drinks by Name</Tab>
                <Tab>Filter Drinks by Category</Tab>
                <Tab>Filter Drinks by Ingredient</Tab>
                </TabList>
            <TabPanel>
                {randomDrink}
            </TabPanel>
            <TabPanel>
                {allDrinks}
            </TabPanel>
            <TabPanel>
                {drinkCategories}
            </TabPanel>
            <TabPanel>
                {drinkIngredients}
            </TabPanel>
            </Tabs>
            </div>
        );
        if (!this.state.showDrink) {
            return (
                <div>
                    {displayTabs}
                </div>
            ); // closes return
        }else{
            return(
                <div  style={imageDiv}> 
                    {showTheDrink}
                </div>
            );
        }
    } // closes render
}

export default FavDrinksForm;