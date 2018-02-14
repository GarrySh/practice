/* eslint-disable no-restricted-syntax */

import Seq from '../src';

describe('Generator of Iterators', () => {
  it('set 0', () => {
    const seq = new Seq(0, x => x + 1);    
    const result = seq.take(2);
    const actual = [];
    for (const value of result) {
      actual.push(value);
    }
    expect(actual).toEqual([0, 1]);

    const actual2 = [];
    for (const value of seq.take(3)) {
      actual2.push(value);
    }
    expect(actual2).toEqual([0, 1, 2]);
  });
  it('set 1', () => {
    const seq = new Seq(0, x => x + 1);
    const result = seq.take(2);
    const actual = [];
    for (const value of result) {
      actual.push(value);
    }
    expect(actual).toEqual([0, 1]);

    const actual2 = [];
    for (const value of seq.take(3)) {
      actual2.push(value);
    }
    expect(actual2).toEqual([0, 1, 2]);
  });

  // it('set 2', () => {
  //   const seq = new Seq(1, x => x + 1);
  //   const result = seq.skip(200).take(3);
  //   const actual = [];
  //   for (const value of result) {
  //     actual.push(value);
  //   }
  //   expect(actual).toEqual([201, 202, 203]);

  //   const actual2 = [];
  //   for (const value of seq.skip(5).skip(5).take(1)) {
  //     actual2.push(value);
  //   }
  //   expect(actual2).toEqual([11]);
  // });

  // it('set 3', () => {
  //   const seq = new Seq(0, x => (x % 3 === 0 ? x + 1 : x + 2));
  //   const result = seq.take(10);
  //   const actual = [];
  //   for (const value of result) {
  //     actual.push(value);
  //   }
  //   expect(actual).toEqual([0, 1, 3, 4, 6, 7, 9, 10, 12, 13]);

  //   const actual2 = [];
  //   for (const value of seq.take(3)) {
  //     actual2.push(value);
  //   }
  //   expect(actual2).toEqual([0, 1, 3]);
  // });

  // it('set 4', () => {
  //   const seq = new Seq(7, x => x + 2);
  //   const result = seq.take(2);
  //   const actual = [];
  //   for (const value of result) {
  //     actual.push(value);
  //   }
  //   expect(actual).toEqual([7, 9]);

  //   const actual2 = [];
  //   for (const value of seq.skip(5).take(3)) {
  //     actual2.push(value);
  //   }
  //   expect(actual2).toEqual([17, 19, 21]);
  // });
});
