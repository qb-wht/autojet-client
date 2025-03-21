import { hideBin } from 'yargs/helpers';
import yargs from 'yargs/yargs';

yargs(hideBin(process.argv))
  .command(
    'test [port]',
    'start the cli',
    (yargs) => {
      return yargs.positional('port', {
        describe: 'port to bind on',
        default: 5000,
      });
    },
    (argv) => {
      if (argv.verbose) console.info(`test run :${argv.port}`);

      console.log('ok');
    }
  )
  .option('verbose', {
    alias: 'v',
    type: 'boolean',
    description: 'Run with verbose logging',
  })
  .parse();
