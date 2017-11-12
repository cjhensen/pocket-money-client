import React from 'react';
import {Col} from 'react-bootstrap';

import { CirclePie } from 'salad-ui.chart';
import ListControlsContainer from '../listControls';
import AddListItemPopupContainer from '../addListItemPopup';

import './overview.css';

export default function Overview(props) {
  return (
    <div id="overview" className="view-wrap">

      <AddListItemPopupContainer listItemType={'transaction'} />

      <div className="overview-summary">

        <div className="remaining-budget-chart"> 
          <CirclePie 
            percent={props.remainingBudget.percentageUsed}
            strokeWidth={25}
            width={200}
            labelColor="rgb(23, 66, 114)"
            strokeColor="rgb(23, 66, 114)"
            railColor="rgb(200, 212, 224)"
            fillColor="none" />
            <div className="remaining-budget-value">{props.remainingBudget.remainingMoney}</div>
            <div>Remaining Budget</div>
        </div>

        <div className="savings-summary">
          <Col xs={12}>
            <div className="summary-item savings">
              <div className="summary-item-label">
                Savings (Full Budget Spent)
              </div>
              <div className="summary-item-value">
                {props.savings}
              </div>
            </div>
          </Col>
          <Col xs={12}>
            <div className="summary-item total-est-savings">
              <div className="summary-item-label">
                Total Estimated Savings
              </div>
              <div className="summary-item-value">
                {props.totalEstSavings}
              </div>
            </div>
          </Col>
        </div>

      </div>
      

      <ListControlsContainer btnText={'Add Transaction'} />

    </div>
  );
}