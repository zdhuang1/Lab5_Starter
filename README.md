# Lab 5 - Zachary Huang
- **Expose:** https://zdhuang1.github.io/Lab5_Starter/expose.html
- **Explore** https://zdhuang1.github.io/Lab5_Starter/explore.html

1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

  No, in this instance I would not use a unit test because sending a message requires many different parts of the application interacting with each other. Unit tests are best for isolated functions instead of large features with many moving parts.

1) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

  Yes, in this instance I would use a unit test to test the "max message length" feature because there is a clear case for when the unit test should pass/fail. That being pass when the message is less than or equal to 80 characters and fail when the message is greater than 80 characters.