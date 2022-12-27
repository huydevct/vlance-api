module.exports = {
  async afterCreate(event) {
    const { result } = event;

    try {
      await strapi.plugins["email"].services.email.send({
        to: "huyvipct1@gmail.com",
        from: "noreply@vlance.com",
        subject: "New post",
        text: `You've just created a new post: ${result.name}`,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
