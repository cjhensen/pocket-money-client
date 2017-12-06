import React from 'react';
import {shallow, mount} from 'enzyme';

import {ListItemContainer} from './';

describe('<ListItemContainer />', () => {
  it('Renders without crashing', () => {
    shallow(<ListItemContainer />);
  });

  it('should calculate the total spent for each category', () => {
    const listItemType = 'category';
    const listItem = {
      "totalBudget" : 200,
      "id" : "Hy--yp-PgG",
      "categoryName" : "test"
    };
    const transactions = [
      {
        "category" : "test",
        "moneySpent" : 10,
        "id" : "HyGv1abwgM",
        "transactionName" : "test1"
      },
      {
        "category" : "test",
        "moneySpent" : 10,
        "id" : "rJM2ypbveG",
        "transactionName" : "test2"
      }
    ];
    const showEditMode = false;
    const wrapper = mount(<ListItemContainer 
                            listItemType={listItemType}
                            listItem={listItem}
                            showEditMode={showEditMode}
                            transactions={transactions} />);

    const spent = wrapper.instance().calculateCategorySpent(listItem);
    expect(spent).toEqual(20);
  });

  it('should calculate the amount remaining for each category', () => {
    const listItemType = 'category';
    const listItem = {
      "totalBudget" : 200,
      "id" : "Hy--yp-PgG",
      "categoryName" : "test"
    };
    const transactions = [
      {
        "category" : "test",
        "moneySpent" : 10,
        "id" : "HyGv1abwgM",
        "transactionName" : "test1"
      },
      {
        "category" : "test",
        "moneySpent" : 10,
        "id" : "rJM2ypbveG",
        "transactionName" : "test2"
      }
    ];
    const showEditMode = false;
    const wrapper = mount(<ListItemContainer 
                            listItemType={listItemType}
                            listItem={listItem}
                            showEditMode={showEditMode}
                            transactions={transactions} />);

    const spent = wrapper.instance().calculateCategoryRemaining(listItem);
    expect(spent).toEqual(180);
  });

  it('should calculate the amount remaining for each category', () => {
    const listItemType = 'category';
    const listItem = {
      "totalBudget" : 200,
      "id" : "Hy--yp-PgG",
      "categoryName" : "test"
    };
    const transactions = [
      {
        "category" : "test",
        "moneySpent" : 10,
        "id" : "HyGv1abwgM",
        "transactionName" : "test1"
      },
      {
        "category" : "test",
        "moneySpent" : 19.26,
        "id" : "rJM2ypbveG",
        "transactionName" : "test2"
      }
    ];
    const showEditMode = false;
    const wrapper = mount(<ListItemContainer 
                            listItemType={listItemType}
                            listItem={listItem}
                            showEditMode={showEditMode}
                            transactions={transactions} />);

    const spent = wrapper.instance().calculateCategorySpentPercentage(listItem);
    expect(spent).toEqual(14.63);
  });
});

describe('CategoryItem', () => {
  it('renders the category list item with proper values', () => {
    const listItemType = 'category';
    const listItem = {
      "totalBudget" : 200,
      "id" : "Hy--yp-PgG",
      "categoryName" : "test"
    };
    const transactions = [
      {
        "category" : "test",
        "moneySpent" : 10,
        "id" : "HyGv1abwgM",
        "transactionName" : "test1"
      },
      {
        "category" : "test",
        "moneySpent" : 10,
        "id" : "rJM2ypbveG",
        "transactionName" : "test2"
      }
    ];
    const showEditMode = false;
    const wrapper = mount(<ListItemContainer 
                            listItemType={listItemType}
                            listItem={listItem}
                            showEditMode={showEditMode}
                            transactions={transactions} />);
    expect(wrapper.find('.list-item').length).toBe(1);
    expect(wrapper.find('.item-label').text()).toEqual('test');
    expect(wrapper.find('.category-remaining').text()).toEqual('180');
    expect(wrapper.find('.category-spent').text()).toEqual('20');
    expect(wrapper.find('.category-total').text()).toEqual('200');
  });
});

describe('TransactionItem', () => {
  it('renders the transaction list item with proper values', () => {
    const listItemType = 'transaction';
    const listItem = {
      "category" : "test",
        "moneySpent" : 10,
        "id" : "HyGv1abwgM",
        "transactionName" : "test1"
    };
    const showEditMode = false;
    const wrapper = mount(<ListItemContainer 
                            listItemType={listItemType}
                            listItem={listItem}
                            showEditMode={showEditMode}/>);
    expect(wrapper.find('.list-item').length).toBe(1);
    expect(wrapper.find('.item-label').text()).toEqual('test1');
    expect(wrapper.find('.transaction-category').text()).toEqual('test');
    expect(wrapper.find('.transaction-total').text()).toEqual('10');
  });
});

describe('IncomeItem', () => {
  it('renders the income list item with proper values', () => {
    const listItemType = 'income';
    const listItem = {
      "incomeRecurring" : false,
      "incomeAmount" : 1000,
      "id" : "r1zUF1Mvgz",
      "incomeName" : "work"
    };
    const showEditMode = false;
    const wrapper = mount(<ListItemContainer 
                            listItemType={listItemType}
                            listItem={listItem}
                            showEditMode={showEditMode}/>);
    expect(wrapper.find('.list-item').length).toBe(1);
    expect(wrapper.find('.item-label').text()).toEqual('work');
    expect(wrapper.find('.income-recurring').text()).toEqual('↻ false');
    expect(wrapper.find('.income-amount').text()).toEqual('1000');
    expect(wrapper.find('.income-remove').length).toBe(0);
    expect(wrapper.find('.income-edit').length).toBe(0);
  });
});