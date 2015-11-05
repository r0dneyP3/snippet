function ipv4Parser(ip, mask){
  ip = ip.split('.');
  mask = mask.split('.');
  return [
    ip.map((octet, i) => ((+octet) & mask[i])).join('.'),
    ip.map((octet, i) => ((+octet) & ~ mask[i])).join('.')];
}
