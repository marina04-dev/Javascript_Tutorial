let pattern = /([0-1]\d|2[0-3]):[0-5]\d/;
console.log("01:49".search(pattern));
console.log("11:69".search(pattern));
console.log("24:14".search(pattern));
console.log("23:59".search(pattern));

pattern = /([0-1]\d|2[0-3]):[0-5]\d(.\d{1,4)?/;
console.log("01:49".search(pattern));
console.log("11:19.123".search(pattern));
console.log("23:14.12345".search(pattern));
console.log("25:59".search(pattern));

video115_extra
pattern = /([0-1]\d|2[0-3]):[0-5]\d(\.\d{1,4})?/;
console.log("23:14.12345".search(pattern));
pattern = /^([0-1]\d|2[0-3]):[0-5]\d(\.\d{1,4})?$/;
console.log("23:14.12345".search(pattern));
