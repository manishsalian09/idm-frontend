import { MyqueueModule } from './myqueue.module';

describe('MyqueueModule', () => {
  let myqueueModule: MyqueueModule;

  beforeEach(() => {
    myqueueModule = new MyqueueModule();
  });

  it('should create an instance', () => {
    expect(myqueueModule).toBeTruthy();
  });
});
