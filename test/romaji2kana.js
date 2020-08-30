const assert = require('assert');
const romaji2kana = require('../dist/bundle.js');

describe('Convert', () => {
  it('あいうえお', () => {
    assert.equal(romaji2kana('aiueo'), 'あいうえお');
    assert.equal(romaji2kana('あいうえお'), 'あいうえお');
    assert.equal(romaji2kana('aいuえo'), 'あいうえお');
    assert.equal(romaji2kana('あiうeお'), 'あいうえお');
  });
  it('かきくけこ', () => {
    assert.equal(romaji2kana('kakikukeko'), 'かきくけこ');
    assert.equal(romaji2kana('かきくけこ'), 'かきくけこ');
    assert.equal(romaji2kana('kaきkuけko'), 'かきくけこ');
    assert.equal(romaji2kana('かkiくkeこ'), 'かきくけこ');
  });
  it('ばびぶべぼ', () => {
    assert.equal(romaji2kana('babibubebo'), 'ばびぶべぼ');
  });
  it('ぱぴぷぺぽ', () => {
    assert.equal(romaji2kana('papipupepo'), 'ぱぴぷぺぽ');
  });
  it('タイピング速度を向上させる', () => {
    assert.equal(romaji2kana('タイピング速度wo向上させる'), 'タイピング速度を向上させる');
  });
  it('れいわ', () => {
    assert.equal(romaji2kana('reiwa'), 'れいわ');
  });
  it('かんな', () => {
    assert.equal(romaji2kana('kannna'), 'かんな');
  });
  it('れっか', () => {
    assert.equal(romaji2kana('rekka'), 'れっか');
  });
  it('まぁまぁ', () => {
    assert.equal(romaji2kana('malamala'), 'まぁまぁ');
  });
  it('ぱんだ', () => {
    assert.equal(romaji2kana('panda'), 'ぱんだ');
  });
  it('ぱn', () => {
    assert.equal(romaji2kana('pan'), 'ぱn');
  });
  it('ぱぁ', () => {
    assert.equal(romaji2kana('pala'), 'ぱぁ');
  });
  it('でぃぐる', () => {
    assert.equal(romaji2kana('dhiguru'), 'でぃぐる');
  });
  it('ぐちゃぐちゃ', () => {
    assert.equal(romaji2kana('gutyagucha'), 'ぐちゃぐちゃ');
  });
  it('ゎ', () => {
    assert.equal(romaji2kana('lwa'), 'ゎ');
  });
  it('ぱっゎ', () => {
    assert.equal(romaji2kana('pallwa'), 'ぱっゎ');
  });
  it('びゃくや', () => {
    assert.equal(romaji2kana('byakuya'), 'びゃくや');
  });
});
