import React, { Component } from 'react';
import "./Overview.css"

class Overview extends Component {
    constructor(props){
        super(props)

        this.state = {
            expand:false,
            hide: false,
        }

        this.expandContent = this.expandContent.bind(this);
        this.hideEntry = this.hideEntry.bind(this);
    }

    expandContent(){
        this.setState({
          expand: true,
        })
      }

      hideEntry(){
        this.setState({
            hide: true,
        })
    }
    

  render() {
   
    return (

      <div className="overview-wrapper">

        <div className="header-image">
            <img src="bsmall_6114-180416145818.png" alt="Logo" />
        </div> 

        <div className="overview-headline">
        <a href=""><h1>Werkstudent Webdesign (m/w) Grafikdesign, Webentwicklung - Karlsruhe</h1></a>
            <span className="overview-place">in 76135 Karlsruhe</span>
        </div>
        {this.state.expand ?
        <div className="overview-expand">
            <div className="overview-pill">
                <span className="pill">Mittelständisches Unternehmen</span>
                <span className="pill">IT-Branche</span>
            </div>

            <div className="overview-content">
                <div className="overview-text">
                <span>retium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</span>
                <br /><br />
                    <table>
                        <tbody>
                        <tr>
                            <td><i className="far fa-calendar-alt"></i></td>
                            <td>Zeitraum</td>
                            <td>Ab sofort</td>
                        </tr>

                        <tr>
                        <td><i className="fas fa-euro-sign"></i></td>
                            <td>Gehalt</td>
                            <td>11,00€ pro Stunde</td>
                        </tr>
                        <tr>
                        <td><i className="far fa-clock"></i></td>
                            <td>Arbeitszeiten</td>
                            <td>15 - 20 Stunden pro Woche</td>
                        </tr>
                        </tbody>                        
                    </table>
                </div>
            </div>
        </div> 
        
        : null}    
<div className="overview-button-box">

        {this.state.expand === true ? 
        <div className="button blue-button">
            <button><i className="far fa-sticky-note"></i> Stellenangebot anzeigen</button>
        </div>
        :null}


        <div className="button blue-button">
            <button onClick={this.hideEntry}><i className="fas fa-thumbs-down"></i> aussortieren</button>
        </div>

        {this.state.expand === false ?

        <div className="button">
            <button 
                onClick = {this.expandContent}>
                mehr anzeigen <i className="fas fa-chevron-down"></i>
            </button>
        </div>
        :
        <div className="button">
            <button href="">
                <span>Bewerben <i className="fas fa-arrow-right"></i></span>
            </button>
        </div>
        }
        </div>
        </div>
    );
  }
}

export default Overview;