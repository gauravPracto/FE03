const { configureStore } = require("@reduxjs/toolkit");
const { reducers: calculatorReducers } = require("../redux/calculator");
module.exports = configureStore({
  reducer: calculatorReducers,
});
