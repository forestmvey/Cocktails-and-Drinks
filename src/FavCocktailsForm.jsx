import React, { Component } from 'react';
import FavCocktails from './FavCocktails';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'

class FavCocktailsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkboxGroup: [false, true, false, false, false],
            showForm: true,
            category: '',
            tabButton: [false, false, false, false],
            tabPanels: [false, false, false, false]
        };
        this.handleChecked = this.handleChecked.bind(this);
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
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.category + " = this.state.category");
        let search = this.state.category;
        this.setState({
            showForm: false
        });
        console.log("showform = " + this.state.showForm)
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?c=${search}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            }
        }) // closes fetch call
            .then(response => this.handleHTTPErrors(response))
            .then(result => {
                this.setState({
                    showForm: false
                });
                console.log("this.state.showForm = " + this.state.showForm);
            })
            .catch(error => {
                console.log(error);
            });
    }
    cChange = e => {
        e.preventDefault();
        this.setState({
            category: e.target.value
        });
        console.log("this.state.category= " + e.target.category);
    };
    handleChecked(event) {
        let checkboxes = this.state.checkboxGroup.slice();
        checkboxes[event.target.value] = event.target.checked;
        this.setState({
            category: event.target.value
        });
    }
    handleTab = e => {
        e.preventDefault();
    };
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
        const tabStyle = {
            width: '100%',
            height: '350px'
        }
        const buttContainer = {
            height: '15%'
        }
        const tabButt = {
            width: '25%',
            height: '100%',
            float: 'left',
            border: 'none',
            outline: 'none',
            cursor: 'pointer',
            padding: '10px',
            fontFamily: 'sans-serif',
            fontSize: '10px',
            backgroundColor: '#eee'
        }
        const displayTabs = (
            <Tabs defaultIndex={1} onSelect={index => console.log(index)}>
                <TabList>
                <Tab>Title 1</Tab>
                <Tab>Category</Tab>
                <Tab>Title 3</Tab>
                <Tab>Title 4</Tab>
                    </TabList>
            <TabPanel>Text for 1</TabPanel>
            <TabPanel>
            <div>
                        <fieldset>
                            <form onSubmit={e => this.onSubmit(e)}>
                                <label>
                                    <input type='radio' id='radio1' name='cocktailRadio' value='Ordinary Drink'
                                        // checked={this.state.checkboxGroup[0]}
                                        onChange={e => this.cChange(e)} />
                                    &nbsp;Ordinary Drink
                        </label>
                                <br /><br />
                                <label>
                                    <input type='radio' id='radio2' name='cocktailRadio' value='Cocktail'
                                        // checked={this.state.checkboxGroup[1]}
                                        onChange={this.handleChecked} />
                                    &nbsp;Cocktail
                        </label>
                                <br /><br />
                                <label>
                                    <input type='radio' id='radio3' name='cocktailRadio' value='Shot'
                                        // checked={this.state.checkboxGroup[2]}
                                        onChange={this.handleChecked} />
                                    &nbsp;Shot
                        </label>
                                <br /><br />
                                <label>
                                    <input type='radio' id='radio4' name='cocktailRadio' value='Homemade Liqueur'
                                        // checked={this.state.checkboxGroup[3]}
                                        onChange={this.handleChecked} />
                                    &nbsp;Homemade Liqueur
                        </label>
                                <br /><br />
                                <label>
                                    <input type='radio' id='radio5' name='cocktailRadio' value='Beer'
                                        // checked={this.state.checkboxGroup[4]}
                                        onChange={this.handleChecked} />
                                    &nbsp;Beer
                        </label>
                                <br /><br />
                                <input type='submit' value='Submit' style={buttStyle} />
                            </form>
                        </fieldset>
                        </div>
            </TabPanel>
            <TabPanel>Text for 3</TabPanel>
            <TabPanel>Text for 4</TabPanel>
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
                    <h2>About this</h2>
                    {displayTabs}
                </div>

            ); // closes return
        } else {
            return <FavCocktails />
        }
    } // closes render
}

export default FavCocktailsForm;