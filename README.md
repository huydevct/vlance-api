# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project. Find the one that suits you on the [deployment section of the documentation](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment.html).

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://docs.strapi.io) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

# Guide to run BE fluently on local

- Clone the project of BE from this [Github](https://github.com/huydevct/vlance-api)
- Need to install MySQL on you desktop then you need to create a database name `vlance-api`
- Then run `npm install` to install all package you need
- Use this command to run project BE on localhost:

```
    npx strapi develop => on development (use much time)
    npx strapi build => to build on development
```

- Create file .env with value

```
    DATABASE_HOST=127.0.0.1
    DATABASE_PORT=3306
    DATABASE_NAME=vlance-api
    DATABASE_USERNAME=root
    DATABASE_PASSWORD=Test@123456
    DATABASE_SSL=false

    HOST=0.0.0.0
    PORT=1337
    APP_KEYS=H10RtdFqZtRQ5H/uORwF5g==,RJ7maTq4YNohRVqL1Gstyw==,Hi8OYaQglhuTYGtWgow2Dw==,qKVJK70lO78mEI0pxM/pIw==
    API_TOKEN_SALT=TcUjUDemePTomv1uB48M2A==
    ADMIN_JWT_SECRET=FksVII3CGEwQtXxqWV85TA==
    JWT_SECRET=UrqiZqzKToPaie1m+2/WBA==
    SENDGRID_API_KEY=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
```

- Change the password of database with you local database password
- Before running it, rename ths folder migrations => migrations_1
- Then run command: `npx strapi develop`, after it's success, push ctrl+C to cancel the terminal
- Then rename the folder migrations_1 => migrations
- Then run this command `npx strapi develop` to run it completely
- You need to set the permission of roles that you can call api and use the documentation of api:

```
    - Settings > Roles below Users&Permissions plugin > Click to Authenticated > Click to each collections and tick select all to allow user after login can use these api which need
    - Do like above with Client, Freelancer and Public
```
