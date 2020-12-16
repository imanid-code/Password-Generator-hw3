# Password-Generator-hw3

***Description***

This website was designed to generate passwords based off the users input. 

![preview](assets/preview.png)

***Installation***

To access the password generator use the following html: 

https://github.com/imanid-code/Password-Generator-hw3


***Usage***

To accurately and effectively use the website the user must first click on the ```Generate Password  ``` button.

![generatebutton](assets/button.png)

Next the user will be prompted to answer the first of 5 questions. First the user must choose a password legnth between 8-128 characters. 

![prompt1](assets/prompt1.png)

If the user does not enter a number between 8-128 they will receive an alert that says either of the following: 

![length](assets/length1.png)
![length](assets/length2.png)

Followed by the previous prompt the user will be asked to confirm that it is OK to include special characters. The special characters include the following: !,@,#,$,%,^,&,*. 

![confirm](assets/confirm1.png)


The next prompt will ask the user to confirm that it is OK to include numeric character. The numeric characters include any number 1-9. 

![confirm](assets/confirm2.png)

Following the previous prompt,  there will be another prompt asking if it's OK to include lowercase letter (a-z). 

![confirm](assets/confirm3.png)

The final pop up will ask the user to confirm that it is OK to include  uppercase letter(A-Z).

![confirm](assets/confirm4.png)

If the user successfully answers all questoin the website will generate a password in the dotted line box. 

![confirm](assets/final.png)

If  the user does ***NOT*** click OK to confirm one of the questions to include certain characters in the password , the password WILL still generate as long as they include atleast 1 of the 4 character choices(number,special character, upper or lower). 

If the user does NOT chose atleast of the 4 characters, the website will redirect them to the start. 

![preview](assets/preview.png)


***Technology***

 ```Bootstrap```   ```HTML```   ```CSS```