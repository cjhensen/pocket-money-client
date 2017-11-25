import React from 'react';
import {shallow, mount} from 'enzyme';

import {OverviewContainer} from './';
import Overview from './overview';

describe('<OverviewContainer />', () => {

  it('Renders without crashing', () => {
    const isLoggedIn = false;
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

      const categories = [
        {
          "totalBudget" : 200,
          "id" : "Hy--yp-PgG",
          "categoryName" : "test"
        }
      ];

      const income = [
        {
          "incomeRecurring" : false,
          "incomeAmount" : 1000,
          "id" : "r1zUF1Mvgz",
          "incomeName" : "work"
        }
      ];
    shallow(<OverviewContainer
              isLoggedIn={isLoggedIn}
              transactions={transactions}
              categories={categories}
              income={income} />);
  });

  it('should calculate remaining budget', () => {
    const isLoggedIn = false;
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

      const categories = [
        {
          "totalBudget" : 200,
          "id" : "Hy--yp-PgG",
          "categoryName" : "test"
        }
      ];

      const income = [
        {
          "incomeRecurring" : false,
          "incomeAmount" : 1000,
          "id" : "r1zUF1Mvgz",
          "incomeName" : "work"
        }
      ];
    const wrapper = shallow(<OverviewContainer
              isLoggedIn={isLoggedIn}
              transactions={transactions}
              categories={categories}
              income={income} />);

    const remainingBudget = { percentageUsed: 10.00, remainingMoney: 180.00 };
    expect(wrapper.instance().calculateRemainingBudget()).toEqual(remainingBudget);
  });

  it('should calculate savings', () => {
    const isLoggedIn = false;
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

      const categories = [
        {
          "totalBudget" : 200,
          "id" : "Hy--yp-PgG",
          "categoryName" : "test"
        }
      ];

      const income = [
        {
          "incomeRecurring" : false,
          "incomeAmount" : 1000,
          "id" : "r1zUF1Mvgz",
          "incomeName" : "work"
        }
      ];
    const wrapper = shallow(<OverviewContainer
              isLoggedIn={isLoggedIn}
              transactions={transactions}
              categories={categories}
              income={income} />);

    const savings = 800;
    expect(wrapper.instance().calculateSavings()).toEqual(savings);
  });

  it('should calculate total estimated savings', () => {
    const isLoggedIn = false;
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

      const categories = [
        {
          "totalBudget" : 200,
          "id" : "Hy--yp-PgG",
          "categoryName" : "test"
        }
      ];

      const income = [
        {
          "incomeRecurring" : false,
          "incomeAmount" : 1000,
          "id" : "r1zUF1Mvgz",
          "incomeName" : "work"
        }
      ];
    const wrapper = shallow(<OverviewContainer
              isLoggedIn={isLoggedIn}
              transactions={transactions}
              categories={categories}
              income={income} />);

    const estimatedSavings = 980;
    expect(wrapper.instance().calculateTotalEstSavings()).toEqual(estimatedSavings);
  });

  it('should calculate transactions sum', () => {
    const isLoggedIn = false;
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

      const categories = [
        {
          "totalBudget" : 200,
          "id" : "Hy--yp-PgG",
          "categoryName" : "test"
        }
      ];

      const income = [
        {
          "incomeRecurring" : false,
          "incomeAmount" : 1000,
          "id" : "r1zUF1Mvgz",
          "incomeName" : "work"
        }
      ];
    const wrapper = shallow(<OverviewContainer
              isLoggedIn={isLoggedIn}
              transactions={transactions}
              categories={categories}
              income={income} />);

    const transactionsSum = 20;
    expect(wrapper.instance().calculateTransactionsSum()).toEqual(transactionsSum);
  });

  it('should calculate income sum', () => {
    const isLoggedIn = false;
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

      const categories = [
        {
          "totalBudget" : 200,
          "id" : "Hy--yp-PgG",
          "categoryName" : "test"
        }
      ];

      const income = [
        {
          "incomeRecurring" : false,
          "incomeAmount" : 1000,
          "id" : "r1zUF1Mvgz",
          "incomeName" : "work"
        }
      ];
    const wrapper = shallow(<OverviewContainer
              isLoggedIn={isLoggedIn}
              transactions={transactions}
              categories={categories}
              income={income} />);

    const incomeSum = 1000;
    expect(wrapper.instance().calculateIncomeSum()).toEqual(incomeSum);
  });

  it('should calculate category sum', () => {
    const isLoggedIn = false;
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

      const categories = [
        {
          "totalBudget" : 200,
          "id" : "Hy--yp-PgG",
          "categoryName" : "test"
        }
      ];

      const income = [
        {
          "incomeRecurring" : false,
          "incomeAmount" : 1000,
          "id" : "r1zUF1Mvgz",
          "incomeName" : "work"
        }
      ];
    const wrapper = shallow(<OverviewContainer
              isLoggedIn={isLoggedIn}
              transactions={transactions}
              categories={categories}
              income={income} />);

    const categorySum = 200;
    expect(wrapper.instance().calculateCategorySum()).toEqual(categorySum);
  });


});

describe('<Overview />', () => {
  it('should render the overview component', () => {
    const remainingBudget = { percentageUsed: 10.00, remainingMoney: 180.00 };
    const savings = 800;
    const totalEstSavings = 980;
    const wrapper = shallow(<Overview 
                            remainingBudget={remainingBudget}
                            savings={savings}
                            totalEstSavings={totalEstSavings} />);

    expect(wrapper.find('#overview').length).toBe(1);
  });
});