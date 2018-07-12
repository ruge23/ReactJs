var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery/dist/jquery.js');
var TestUtils = require('react-addons-test-utils');


var Reloj = require('../../components/Reloj.js');

describe('Reloj', () => {
  it('Debería existir', () => {
    expect(Reloj).toExist();
  });

  describe('render', () => {
    it('Debeía renderizar el Reloj', () => {
      var reloj = TestUtils.renderIntoDocument(<Reloj tiempo={62}/>);
      var $el = $(ReactDOM.findDOMNode(reloj));
      var actualText = $el.find('.reloj-text').text();

      expect(actualText).toBe('01:02');
    });
  });

  describe('Formato', () => {
    it('Debería formatear bien los segundos', () => {
      var reloj = TestUtils.renderIntoDocument(<Reloj/>);
      var seconds = 615;
      var expected = '10:15';
      var actual = reloj.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });

    it('debería agregar un cero si los segundos y minutos son menores a 10', () => {
      var reloj = TestUtils.renderIntoDocument(<Reloj/>);
      var seconds = 61;
      var expected = '01:01';
      var actual = reloj.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });
  });
});
