const { createSlice } = require("@reduxjs/toolkit");
const slice = createSlice({
  name: "calculator",
  initialState: {
    result: "",
  },
  reducers: {
    evaluate: (calObj, action) => {
      try {
        calObj.result = String(eval(calObj.result));
        if (action.payload.operator != "=")
          calObj.result += action.payload.operator;
      } catch (e) {
        console.log(e.message);
      }
    },
    add: (calObj, action) => {
      calObj.result += action.payload.number;
    },
    reset: (calObj, action) => {
      calObj.result = "";
    },
    backSpace: (calObj, action) => {
      calObj.result = calObj.result.slice(0, -1);
    },
  },
});

module.exports.reducers = slice.reducer;
module.exports.action = slice.actions;
