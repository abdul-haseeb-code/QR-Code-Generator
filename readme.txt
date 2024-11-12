QR Code Generator
=================

This project is a simple QR Code generator that prompts for a URL input in the console and generates a PNG image of the QR code in the current folder.

Dependencies:
-------------
- inquirer: For prompting user input in the console.
- qr-image: For generating the QR code image from the input URL.
- fs: For saving the generated QR code image as a file.

Installation:
-------------
1. Clone the repository to your local machine.

2. Initialize the project and install dependencies:
   Run the following commands in the terminal:
   

Usage:
------
1. Run the QR Code generator script by executing:


2. The console will prompt you to enter a URL.

3. Enter the URL and press Enter.

4. A PNG image file of the QR code will be generated in the current directory.

5. The entered URL will also be saved in a file named `url.txt`.

Example:
--------
Console prompt:
? Enter the URL you want to generate a QR code for: https://example.com

Once you hit Enter:
- A file (e.g., `qr-imgs.png`) will be created in the same folder with the QR code.
- The URL (e.g., `https://example.com`) will be saved in `urll.txt`.

License:
--------
This project is licensed under the MIT License.

