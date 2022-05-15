interface Middleware {
  (object, Middleware)
}

function Pipeline(...initMiddlewares: Middleware[]) {
  const middlewares = initMiddlewares

  const push = (...additionalMiddlewares: Middleware[]) => {
    middlewares.push(...additionalMiddlewares)
  }

  const execute = async (executionContext) => {
    let prevRunnerIndex = -1

    const runner = async (runnerIndex) => {
      if (runnerIndex === prevRunnerIndex) {
        throw new Error('next() must only be called once in each Pipeline function!')
      }

      prevRunnerIndex = runnerIndex

      const middleware = middlewares[runnerIndex]

      if (middleware) {
        await middleware(
          executionContext,
          () => runner(runnerIndex + 1)
        )
      }
    }

    await runner(0)
  }

  return {
    push,
    execute
  }
}

export default Pipeline