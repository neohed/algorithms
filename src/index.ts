import splitCodeAndProse from './parser';
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
  + 'Code:\n'
  + '```JavaScript\n'
  + 'const a = 1;\n'
  + '```\n'
  + 'that be the code\n'
  + 'bla bla\n'
  + '\n'
  + '```Shell\n'
  + 'ls -l\n'
  + '```\n'
  + '\n'
  + 'Fin.'

const codeMeta = splitCodeAndProse(code);
const {codeBlocks} = codeMeta;
console.log(codeBlocks)

const parsed = codeBlocks.reduceRight((acc, {start, end}) => acc.substring(0, start) + '-SNIP-' + acc.substring(end), code)
console.log(parsed)
