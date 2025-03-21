module.exports = {
  name: `project`,
  factory: (require) => {
    const { BaseCommand } = require('@yarnpkg/cli');
    const { Manifest } = require('@yarnpkg/core');

    class ProjectCommand extends BaseCommand {
      static paths = [['project']];

      async execute() {
        const manifest = await Manifest.tryFind(this.context.cwd);

        if (!manifest) {
          console.log('package.json file not found');
          return;
        }

        const { name, version, author, description, dependencies } = manifest.raw;

        console.log({
          name,
          version,
          author,
          description,
          dependencies,
        });
      }
    }

    return {
      commands: [ProjectCommand],
    };
  },
};
