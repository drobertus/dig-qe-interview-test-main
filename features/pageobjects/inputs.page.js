class InputsPage {
  get elements() {
    return {
      header: () => $("h3"),
      input: () => $("/html/body/div[2]/div/div/div/div/input"),
    };
  }

  async set(value) {
    console.log(`setting value ${value}`)
    await (await this.elements.input()).setValue(value);
  }
}

export default new InputsPage();
