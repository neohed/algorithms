import languages from './languages'

const BACK_TICK = '`';
const CODE_FENCE = '```';

function getMatchers(fullString: string) {
  const stringLength = fullString.length;

  return {
    // eslint-disable-next-line func-names
    isCodeFence: function (index: number) {
      return index + CODE_FENCE.length < stringLength
        && fullString[index + 1] === BACK_TICK
        && fullString[index + 2] === BACK_TICK;
    },
  }
}

const reStartCodeBlock = new RegExp('^```('
  + languages.map(l => l.id).join('|')
  + ')[\\r\\n]', 'i')

function splitCodeAndProse(
  code: string
) {
  const codeBlocks = []
  const { isCodeFence } = getMatchers(code);

  let insideCodeBlock = false;
  let language = '';
  let prose = '';
  let codeSnippet = '';

  for (
    let i = 0, dataLength = code.length;
    i < dataLength;
    i++
  ) {
    const c = code[i];

    if (c === BACK_TICK && isCodeFence(i)) {
      if (insideCodeBlock) {
        const start = i - codeSnippet.length;
        const end = i;

        codeBlocks.push({
          language,
          code: codeSnippet,
          start,
          end,
        })

        insideCodeBlock = false;
        codeSnippet = '';
        i += 2
      } else {
        const sub = code.substring(i);

        if (reStartCodeBlock.test(sub)) {
          const match = sub.match(reStartCodeBlock);
          language = match[1] || ''
          i += match[0].length - 1;
          insideCodeBlock = true
        }
      }
    } else if (insideCodeBlock) {
      codeSnippet += c
    } else {
      prose += c
    }
  }

  return {
    prose,
    codeBlocks
  }
}

export default splitCodeAndProse
