import test from '@playwright/test';

export function step(stepName?: string) {
  return function decorator(target: (this: unknown, ...args: string[]) => Promise<void>, context: ClassMethodDecoratorContext) {
    return function replacementMethod(this: unknown, ...args: string[]): Promise<void> {
      const name = `${stepName || (context.name as string)}`;
      return test.step(name, async () => {
        return await target.call(this, ...args);
      });
    };
  };
}
