import { cn } from './classNames';

describe('classNames', () => {
  test('1 param string', () => {
    expect(cn('class').build()).toBe('class');
  });

  test('1 param array', () => {
    expect(cn(['class']).build()).toBe('class');
  });

  test('1 param iterable', () => {
    expect(cn(new Set(['class'])).build()).toBe('class');
  });

  test('1 param string + build 1 param', () => {
    expect(cn('class').build({ disable: true })).toBe('class disable');
  });

  test('1 param array + build 1 param', () => {
    expect(cn(['class']).build({ disable: true })).toBe('class disable');
  });

  test('1 param iterable + build 1 param', () => {
    expect(cn(new Set(['class'])).build({ disable: true })).toBe('class disable');
  });

  test('1 param string + build 2 params (1)', () => {
    expect(cn('class').build({ disable: true, flex: false })).toBe('class disable');
  });

  test('1 param array + build 2 params (1)', () => {
    expect(cn(['class']).build({ disable: true, flex: false })).toBe('class disable');
  });

  test('1 param iterable + build 2 params (1)', () => {
    expect(cn(new Set(['class'])).build({ disable: true, flex: false })).toBe('class disable');
  });

  test('1 param string + build 2 params (2)', () => {
    expect(cn('class').build({ disable: true, flex: true })).toBe('class disable flex');
  });

  test('1 param array + build 2 params (2)', () => {
    expect(cn(['class']).build({ disable: true, flex: true })).toBe('class disable flex');
  });

  test('1 param iterable + build 2 params (2)', () => {
    expect(cn(new Set(['class'])).build({ disable: true, flex: true })).toBe('class disable flex');
  });

  test('2 param string + build 2 params (1)', () => {
    expect(cn('class', 'name').build({ disable: true, flex: false })).toBe('class name disable');
  });

  test('2 param array + build 2 params (1)', () => {
    expect(cn(['class', 'name']).build({ disable: true, flex: false })).toBe('class name disable');
  });

  test('2 param iterable + build 2 params (1)', () => {
    expect(cn(new Set(['class', 'name'])).build({ disable: true, flex: false })).toBe('class name disable');
  });

  test('2 param string + build 2 params (2)', () => {
    expect(cn('class', 'name').build({ disable: true, flex: true })).toBe('class name disable flex');
  });

  test('2 param array + build 2 params (2)', () => {
    expect(cn(['class', 'name']).build({ disable: true, flex: true })).toBe('class name disable flex');
  });

  test('2 param iterable + build 2 params (2)', () => {
    expect(cn(new Set(['class', 'name'])).build({ disable: true, flex: true })).toBe('class name disable flex');
  });
});
