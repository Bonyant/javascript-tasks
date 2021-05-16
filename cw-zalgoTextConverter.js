function readZalgo(zalgotext) {
    let regexp = /[^\w\s\a-z0-9!"#$%&'()*+,.\/:;<=>?@\[\] ^_`{|}~-]/gi;
    return zalgotext.replace(regexp, '');
  }