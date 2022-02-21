import React from "react";
import Search from "./Search";
import PanelAdd from "./PanelAdd";
import "./../css/Menu.css";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newItemPanel: false };
    this.add = this.add.bind(this);
    this.onCancel=this.onCancel.bind(this)
  }
  add() {
    console.log('apretado');
    this.setState ( { newItemPanel: true });
    console.log(this.state.newItemPanel)
  }

  onCancel(e) {
    e.preventDefault();
    console.log('cancelado');
    this.setState ( { newItemPanel: false });
    console.log(this.state.newItemPanel)
  }


  render() {
    return (
      <div className="container">
        <div className="subcontainer">
          <div className="logo">{this.props.title}</div>
          <div className="search">
            <Search />
          </div>
          <div className="actions">
            <button onClick={this.add} className="button btn-blue">
              Añadir nuevo libro
            </button>
          </div>
        </div>

        {(this.state.newItemPanel) ? <PanelAdd oncancel={this.onCancel}/> : ''}
      </div>
    );
  }
}

export default Menu;
