module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "huyvipct1@gmail.com",
        defaultReplyTo: "huyvipct1@gmail.com",
      },
    },
  },
});
