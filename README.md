 # _Mr. Rodger's Neighborhood_

#### By _**Liam Campbell**_

#### _Counter that emits beeps and boops and asks you to be a neighbor_

![A photo of Mr. Rodgers](img/mrRodgers.jpeg)

## Technologies Used

* _JavaScript_
* _CSS_
* _HTML_

## Describe: beepBoop() 

 > #### Test : "It should return an array of numbers from 0 to 5"
 >
 >>Code beepBoop(5);
 >
 >>Expected Output: [0, 1, 2, 3, 4, 5]
>
> #### Test : "It should return an array of numbers from 0 to the user's inputted number
>
>>Code: beepBoop(3);
>
>>Expected output: [0, 1, 2, 3]


> #### Test : "It should Identify the number 3 in the array."
>
>>Code: beepBoop(4);
>
>>Expected output: [0 false, 1, false, 2, false, 3, true, 4, false]

> #### Test "It should identify the number three in two didgit numbers"
>
>>Code: beepBoop (13);
>
>>Expected output: [ [0 false, 1, false, 2, false, 3, true, 4, false , 5, false, 6, false, 7, false, 8, false, 9, false, 10, false, 11, false, 12, false, 13, true ]

> #### Test : "It should replace the number 3 with "Won't you be my neighbor."
>
>>Code: beepBoop (5);
>
>>Expected output:[0, 1, 2, "Won't you be my neighbor?", 4, 5]

> #### Test: "It should replace the number 2 with "Boop!".
>
>>Code: beepBoop(2);
>
>>Expected output: [0, 1, "Boop!"]

> #### Test: "It should replace the number 1 with "Beep!".
>
>>Code: beepBoop(1);
>
>>Expected output: [0, "Beep!"]

> #### Test: "It should run replacements in 3>2>1 order of importance."
>
>>Code: beepBoop(15);
>
>>Expected output: [0, 'Beep!', 'Boop!', "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Boop!', "Won't you be my neighbor?", 'Beep!', 'Beep!']

_This application takes the number that the user inputs and uses JavaScript to output a string of numbers from 0 to the output substituting "beeps" on every number that contains a one, "boops" on every number that contains a two, and "Won't you be my neighbor" on every number that contains a three._

*_Clone this repository to your desktop from https://github.com/lcmpbll/Mr-rodger-neighborhood_
*_Navigate to the top level of the directory_
*_Open index.html_

## Known Bugs

* _None_
## License 

_Feel free to reach out via github with any questions or comments_

[Copyright](LICENSE) (c) _6-10-2022_ _Liam Campbell_