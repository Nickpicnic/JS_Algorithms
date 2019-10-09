function reverse(str){
    if(str.length <= 1) return str;
    return reverse(str.slice(1) + str[0]);
}

console.log(reverse('awesome')); // 'emosewa'
console.log(reverse('rithmschool')); // 'loohcsmhtir'

// awesome
// wesome + a
// esome + w + a
// some + e + w + a
// ome + s + e + w + a
// me + o + s + e + w + a
// e + m + o + s + e + w + a
// e + (mosewa)
//      m + (osewa)
//           o + (sewa)
//                s + (ewa)
//                     e + (wa)
//                          w + (a)
//                               a