interface Middleware {
  (object, Middleware)
}

function Pipeline(...initMiddlewares: Middleware[]) {
  const stack = initMiddlewares

  const push = (...middlewares: Middleware[]) => {
    stack.push(...middlewares)
  }

  const execute = async (context) => {
    let prevIndex = -1

    const runner = async (index) => {
      if (index === prevIndex) {
        throw new Error('next() called multiple times')
      }

      prevIndex = index

      const middleware = stack[index]

      if (middleware) {
        await middleware(
          context,
          () => runner(index + 1)
        )
      }
    }

    await runner(0)
  }

  return { push, execute }
}

export default Pipeline
