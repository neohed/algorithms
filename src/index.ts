import numbers from './data-001';
import search from './binary-search';
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
