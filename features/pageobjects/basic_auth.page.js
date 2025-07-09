class BasicAuthPage {
  get message() {
    return $(".example > p");
  }
  async login(username, password) {
    //console.log('attempting login');
    await this.open(username, password);

  }
  open(username, password) {

    return browser.url(
      `https://${username}:${password}@the-internet.herokuapp.com/basic_auth`
    );
  }
}

export default new BasicAuthPage();
