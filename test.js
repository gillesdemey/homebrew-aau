import test from 'ava'
import aau from '.'

test('1 oz. of 12% AA Nugget', t => {
  t.is(aau(1, 12), 12)
})

test('1.5 oz. of 8% AA Perle', t => {
  t.is(aau(1.5, 8), 12)
})

test('1 oz. of 5% Cascade', t => {
  t.is(aau(1, 5), 5)
})

test('1.25 oz. of 4% Liberty', t => {
  t.is(aau(1.25, 4), 5)
})
