module.exports = {
  database: {
    url: process.env.DATABASE_URI || "",
  },
  port: process.env.PORT || "8080",
};
