const vowel = {
  a: 'あ',
  i: 'い',
  u: 'う',
  e: 'え',
  o: 'お',
};

const consonant = {
  k: { a: 'か', i: 'き', u: 'く', e: 'け', o: 'こ' },
  s: { a: 'さ', i: 'し', u: 'す', e: 'せ', o: 'そ' },
  t: { a: 'た', i: 'ち', u: 'つ', e: 'て', o: 'と' },
  n: { a: 'な', i: 'に', u: 'ぬ', e: 'ね', o: 'の' },
  h: { a: 'は', i: 'ひ', u: 'ふ', e: 'へ', o: 'ほ' },
  m: { a: 'ま', i: 'み', u: 'む', e: 'め', o: 'も' },
  y: { a: 'や', u: 'ゆ', e: 'いぇ', o: 'よ' },
  r: { a: 'ら', i: 'り', u: 'る', e: 'れ', o: 'ろ' },
  w: { a: 'わ', i: 'うぃ', u: 'う', e: 'うぇ', o: 'を' },
  g: { a: 'が', i: 'ぎ', u: 'ぐ', e: 'げ', o: 'ご' },
  z: { a: 'ざ', i: 'じ', u: 'ず', e: 'ぜ', o: 'ぞ' },
  d: { a: 'だ', i: 'ぢ', u: 'づ', e: 'で', o: 'ど' },
  b: { a: 'ば', i: 'び', u: 'ぶ', e: 'べ', o: 'ぼ' },
  p: { a: 'ぱ', i: 'ぴ', u: 'ぷ', e: 'ぺ', o: 'ぽ' },
  j: { a: 'じゃ', i: 'じ', u: 'じゅ', e: 'じぇ', o: 'じょ' },
  l: { a: 'ぁ', i: 'ぃ', u: 'ぅ', e: 'ぇ', o: 'ぉ' },
  ky: { a: 'きゃ', i: 'きぃ', u: 'きゅ', e: 'きぇ', o: 'きょ' },
  sh: { a: 'しゃ', i: 'し', u: 'しゅ', e: 'しぇ', o: 'しょ' },
  sy: { a: 'しゃ', i: 'しぃ', u: 'しゅ', e: 'しぇ', o: 'しょ' },
  ty: { a: 'ちゃ', i: 'ちぃ', u: 'ちゅ', e: 'ちぇ', o: 'ちょ' },
  th: { a: 'てゃ', i: 'てぃ', u: 'てゅ', e: 'てぇ', o: 'てょ' },
  tw: { a: 'とぁ', i: 'とぃ', u: 'とぅ', e: 'とぇ', o: 'とぉ' },
  ch: { a: 'ちゃ', i: 'ち', u: 'ちゅ', e: 'ちぇ', o: 'ちょ' },
  ny: { a: 'にゃ', i: 'にぃ', u: 'にゅ', e: 'にぇ', o: 'にょ' },
  hy: { a: 'ひゃ', i: 'ひぃ', u: 'ひゅ', e: 'ひぇ', o: 'ひょ' },
  my: { a: 'みゃ', i: 'みぃ', u: 'みゅ', o: 'みょ' },
  ry: { a: 'りゃ', i: 'りぃ', u: 'りゅ', e: 'りぇ', o: 'りょ' },
  wy: { i: 'ゐ', e: 'ゑ' },
  wh: { i: 'うぃ', e: 'うぇ', o: 'うぉ' },
  gy: { a: 'ぎゃ', i: 'ぎぃ', u: 'ぎゅ', e: 'ぎぇ', o: 'ぎょ' },
  zy: { a: 'じゃ', i: 'じぃ', u: 'じゅ', e: 'じぇ', o: 'じょ' },
  by: { a: 'びゃ', i: 'びぃ', u: 'びゅ', e: 'びぇ', o: 'びょ' },
  zh: { a: '←あ', i: '←い', u: '←う', e: '←え', o: '←お' },
  jy: { a: 'じゃ', i: 'じぃ', u: 'じゅ', e: 'じぇ', o: 'じょ' },
  dh: { i: 'でぃ', u: 'でゅ' },
  lt: { u: 'っ' },
  ly: { a: 'ゃ', u: 'ゅ', e: 'ぇ', o: 'ょ' },
  lw: { a: 'ゎ' },
};

function romaji2kana(str) {
  const indexDesc = str.split('').reverse().findIndex(l => l in vowel || l === 'n');
  const index = str.length - indexDesc - 1;
  const letters = [
    indexDesc > -1 ? str[index] : '', // NOTE: when index not found
    index > 0 ? str[index - 1] : '',
    index > 1 ? str[index - 2] : '',
    index > 2 ? str[index - 3] : '',
  ];
  let jp = '';
  let romaji = '';
  let prefix = '';
  let suffix = '';
  if (letters[0] in vowel) {
    romaji = letters[0];
    if (!(letters[1] in consonant)) {
      // EXAMPLE: あ(a)
      jp = vowel[letters[0]];
      prefix = str.slice(0, index - (romaji.length - 1));
      suffix = str.slice(index + 1);
      return romaji2kana(prefix + jp + suffix);
    }
    if (letters[2] && letters[2] + letters[1] in consonant) {
      // EXAMPLE: でぃ(dhi)
      romaji = letters[2] + letters[1] + romaji;
      jp = consonant[letters[2] + letters[1]][letters[0]] + jp;
    } else if (letters[1] in consonant) {
      // EXAMPLE: か(ka)
      romaji = letters[1] + romaji;
      jp = consonant[letters[1]][letters[0]];
    }
    if (letters[2] === letters[1]) {
      // EXAMPLE: っか(kka)
      if (letters[2] !== 'n') {
        romaji = letters[2] + romaji;
        jp = 'っ' + jp;
      }
    } else if (letters[2] && letters[3] === letters[2]) {
      // EXAMPLE: っゎ(llwa)
      romaji = letters[3] + romaji;
      jp = 'っ' + jp;
    }
    prefix = str.slice(0, index - (romaji.length - 1));
    suffix = str.slice(index + 1);
    return romaji2kana(prefix + jp + suffix);
  }
  if (letters[0] === 'n') {
    romaji = letters[0];
    if (letters[1] === 'n') {
      // EXAMPLE: ん(nn)
      romaji = letters[1] + romaji;
      jp += 'ん';
      prefix = str.slice(0, index - (romaji.length - 1));
      suffix = str.slice(index + 1);
      return romaji2kana(prefix + jp + suffix);
    }
    if (index < str.length - 1 && !(str[index + 1] in vowel)) {
      // EXAMPLE: んだ(nだ)
      romaji = letters[1] + romaji;
      jp = 'ん';
      prefix = str.slice(0, index);
      suffix = str.slice(index + 1);
      return romaji2kana(prefix + jp + suffix);
    }
    // EXAMPLE: ぱn(pan)
    prefix = str.slice(0, index - (romaji.length - 1));
    suffix = str.slice(index);
    return romaji2kana(prefix) + suffix;
  }
  return str;
}

module.exports = romaji2kana;
