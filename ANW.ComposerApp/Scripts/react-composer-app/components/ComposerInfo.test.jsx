import React from 'react';
import {shallow} from 'enzyme';
import ComposerInfo from './ComposerInfo';

describe('The Composer Info',() => {
  const testComposer = {id:1,firstName:'Bob',lastName:'Smith Baker',title:'Mr',awards:'Best gardener ever.'};
  const result = shallow(<ComposerInfo composer={testComposer} />);
  it('Shows their full names and title', () => {
    expect(result.node.props.children[0].props.children).toEqual('Mr Bob Smith Baker');
  });

  it('Shows their awards', () => {
    expect(result.node.props.children[1].props.children).toEqual('Best gardener ever.');
  });

});
