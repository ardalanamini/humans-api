const app = require("./bootstrap");

app.listen(process.env.APP_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`API started on port ${process.env.APP_PORT}`);
});
