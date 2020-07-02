import React, { Component } from "react";
 
class Visual extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wk1: '',
      wk2: '',
      wq1: '',
      wq2: '',
      wr1: '',
      wr2: '',
      wb1: '',
      wb2: '',
      wn1: '',
      wn2: '',
      wp1: '',
      wp2: '',
      wp3: '',
      wp4: '',
      wp5: '',
      wp6: '',
      wp7: '',
      wp8: '',
      bk1: '',
      bk2: '',
      bq1: '',
      bq2: '',
      br1: '',
      br2: '',
      bb1: '',
      bb2: '',
      bn1: '',
      bn2: '',
      bp1: '',
      bp2: '',
      bp3: '',
      bp4: '',
      bp5: '',
      bp6: '',
      bp7: '',
      bp8: ''
    };
  };
  render() {
    return (
      <div class="viz-content">
        <div class="viz-lst">
          <ul class="viz-piece-left">
            <li>{this.state.wk1}</li>
            <li>{this.state.wq1}</li>
            <li>{this.state.wr1}</li>
            <li>{this.state.wb1}</li>
            <li>{this.state.wn1}</li>
            <li>{this.state.wp1}</li>
            <li>{this.state.wp2}</li>
            <li>{this.state.wp3}</li>
            <li>{this.state.wp4}</li>
          </ul>
          <ul class="viz-piece-right">
            <li>{this.state.wk2}</li>
            <li>{this.state.wq2}</li>
            <li>{this.state.wr2}</li>
            <li>{this.state.wb2}</li>
            <li>{this.state.wn2}</li>
            <li>{this.state.wp5}</li>
            <li>{this.state.wp6}</li>
            <li>{this.state.wp7}</li>
            <li>{this.state.wp8}</li>
          </ul>
        </div>
        <div class="viz-separator"></div>
        <div class="viz-lst">
          <ul class="viz-piece-left">
            <li>{this.state.bk1}</li>
            <li>{this.state.bq1}</li>
            <li>{this.state.br1}</li>
            <li>{this.state.bb1}</li>
            <li>{this.state.bn1}</li>
            <li>{this.state.bp1}</li>
            <li>{this.state.bp2}</li>
            <li>{this.state.bp3}</li>
            <li>{this.state.bp4}</li>
          </ul>
          <ul class="viz-piece-right">
            <li>{this.state.bk2}</li>
            <li>{this.state.bq2}</li>
            <li>{this.state.br2}</li>
            <li>{this.state.bb2}</li>
            <li>{this.state.bn2}</li>
            <li>{this.state.bp5}</li>
            <li>{this.state.bp6}</li>
            <li>{this.state.bp7}</li>
            <li>{this.state.bp8}</li>
          </ul>
        </div>
      </div>
    );
  }
}
 
export default Visual;
