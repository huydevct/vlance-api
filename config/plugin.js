module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "noreply@vlance.com",
        defaultReplyTo: "noreply@vlance.com",
      },
    },
  },
});
