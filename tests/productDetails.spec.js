const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
   // ESCREVA SEUS TESTES ABAIXO:
   // Teste se productDetails é uma função.
  it('Teste se productDetails é uma função', () => {
    expect(typeof productDetails).toBe('function');
  });  
    // Teste se o retorno da função é um array.
  it('Teste se o retorno da função é um array', () => {
    expect(Array.isArray(productDetails('Alcool gel', 'Máscara'))).toBeTruthy();
  })  
    // Teste se o array retornado pela função contém dois itens dentro.
  it('Teste se array retornado pela função contém dois itens', () => {
     expect(productDetails('Alcool gel', 'Máscara')).toHaveLength(2); 
  });
    // Teste se os dois itens dentro do array retornado pela função são objetos.
  it('Teste se os dois itens dentro do array retornado pela função são objetos', () => {
    expect(productDetails('plumas', 'pijamas')).toStrictEqual([
      {
        name: 'plumas',
        details: {
          productId: 'plumas123',
        }
      },
      {
        name: 'pijamas',
        details: {
          productId: 'pijamas123'
        }
      }
    ]);
  });
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
  it('Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si', () => {
    expect(productDetails('macarrão', 'leite')).toStrictEqual([
      {
        name: 'macarrão',
        details: {
          productId: 'macarrão123',
        }
      },
      {
        name: 'leite',
        details: {
          productId: 'leite123'
        }
      }
    ]);
  });
    // Teste se os dois productIds terminam com 123.
    it('Teste se os dois productIds terminam com 123', () => {
      expect(productDetails('macarrao', 'leite')[0].details.productId).toMatch('123');
    });
  
});
