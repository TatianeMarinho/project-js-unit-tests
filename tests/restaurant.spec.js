const createMenu = require('../src/restaurant');
 
describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  it('a função createMenu() retorna um objeto que possui a chave fetchMenu', () => {
    expect(createMenu()).toHaveProperty('fetchMenu');
  });
  it('o valor da chave fetchMenu do objeto retornado pela função createMenu() é uma função', () =>{
    expect(typeof createMenu().fetchMenu).toBe('function');
  });
});
