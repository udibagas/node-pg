class View {
  static showData(data) {
    console.log(data);
    console.table(data);
  }

  static showError(error) {
    console.log("=== ERROR ===");
    console.log(error.message);
    console.log("=============");
  }
}

module.exports = View;
