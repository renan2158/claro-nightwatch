import { PageObjectModel, EnhancedPageObject } from 'nightwatch'

const googleCommands = {
  async typeTerm(this: GooglePage, term: string) {
    return await this.sendKeys('@searchBar', term);
  },
  clickSearch(this: GooglePage) {
    return this.waitForElementVisible('@submit', 10000)
      .click('@submit')
      .waitForElementNotPresent('@submit');
  },
  checkResults(this: GooglePage, contains: string) {
    return this.waitForElementVisible('@resultStatus', 10000);
  }
};


const googlePage: PageObjectModel = {
  url: 'http://www.google.com',
  commands: [googleCommands],
  elements: {
    searchBar: {
      selector: 'input[type=text]',
    },
    submit: {
      selector: 'input[name=btnK]',
    },
    resultStatus: {
      selector: 'div[id=result-stats]',
    }
  },
};

export default googlePage;

export interface GooglePage
  extends EnhancedPageObject<typeof googleCommands,
  typeof googlePage.elements> {}
