import React from 'react';
import {shallow} from 'enzyme';
import ComposerList from './ComposerList';

describe('The Composer List',() => {
  const testComposers = [
    {id:1,firstName:'Bob',lastName:'Smith Baker',title:'Mr',awards:'Best gardener ever.'},
    {id:2,firstName:'Frank',lastName:'Bowler',title:'Mr',awards:'G.O.A.T.'},
  ];
  let flag = false;
  const navCallback = () => flag = true;
  const result = shallow(<ComposerList composers={testComposers} navCallback={navCallback} />);
  it('Lists all composers', () => {
    expect(result.node.props.children.length).toEqual(3);
  });

  it('Shows their full names', () => {
    expect(result.node.props.children[0].props.children).toEqual('Bob Smith Baker');
  });

  it('Shows a total number of composers', () => {
    expect(result.node.props.children[2].props.children).toEqual('Total: 2');
  });

  it('Has a mechanism to navigate to the composerInfo view', () => {
    result.find('li').first().simulate('click');
    expect(flag).toEqual(true);
  });
});

