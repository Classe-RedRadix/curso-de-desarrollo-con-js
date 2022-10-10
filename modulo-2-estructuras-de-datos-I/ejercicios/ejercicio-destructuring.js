const [head, tail] = [1, 2, 3]; //head = 1, tail = 2
const [head1, ...tail1] = [1, 2]; //head1 = 1, tail1 = [2]
const [head2, ...tail2] = [1]; //head2 = 1, tail2 = []
const [head3, , ...tail3] = [1, 2, 3]; //head3= 1, tail3=[3]

console.log(head, tail);
console.log(head1, tail1);
console.log(head2, tail2);
console.log(head3, tail3);
