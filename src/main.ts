#!/usr/bin/env node
import { yargsInstance } from './lib/options';
import * as dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';

var myEnv = dotenv.config();
dotenvExpand.expand(myEnv);

const update = yargsInstance.command(require('./commands/update'));
const arbify = yargsInstance.command(require('./commands/arbify'));
const full = yargsInstance.command(require('./commands/full'));
const alltokenslist = yargsInstance.command(
  require('./commands/allTokensList')
);

if (process.env.NODE_ENV !== 'test') {
  update.parseAsync();
  arbify.parseAsync();
  full.parseAsync();
  alltokenslist.parseAsync();
}

export { update, yargsInstance };
