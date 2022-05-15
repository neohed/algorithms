import splitCodeAndProse from './parser'
/*
import numbers from './data-001';
import search from './search/binary-search';
import Pipeline from './middleware';

console.log(search(numbers, 7))

function prefix(ctx, next) {
  ctx.content = '_' + ctx.content;
  next()
}

function affix(ctx, next) {
  ctx.content += '_';
  next()
}

function bang(ctx, next) {
  ctx.content += '!';
  next()
}

const pipeline = Pipeline(
  prefix,
  affix,
  bang,
  bang,
)

const context = {
  content: 'dave'
}

pipeline
  .execute(context)
  .then(
    () => console.log(context.content)
  )
 */

const code = '# Code\n'
  + '\n'
  + '```JavaScript\n'
  + 'const a = 1;\n'
  + '```\n'
  + '\n'
  + 'bla bla\n'
  + '\n'
  + '```Shell\n'
  + 'ls -l\n'
  + '```\n'
  + '\n'
  + 'Fin.'

const codeMeta = splitCodeAndProse(code);
const {start, end} = codeMeta.codeBlocks[0];
console.log(codeMeta)
console.log(code.substring(start, end))
