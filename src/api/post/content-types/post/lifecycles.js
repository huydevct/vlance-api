module.exports = {
  async afterCreate(event) {
    const { result } = event;

    try {
      await strapi.plugins.email.services.email.send({
        to: "huyvipct1@gmail.com",
        cc: undefined,
        from: "noreply@vlance.com",
        replyTo: undefined,
        subject: "New post",
        html: `
            <p>You've just created a new post: <strong>${result.name}</strong></p>
            <p>I look forward to assisting you with your needs.</p>
            <p><strong>Cheers,</strong></p>
            <p>Vlance</p>
          `,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
