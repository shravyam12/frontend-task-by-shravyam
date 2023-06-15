Initially install node.js
To install Node.js on your system via the terminal, you can follow these steps:
Open the terminal application.

Update the package manager to ensure you have the latest packages available. Run the following command:
sudo apt update

Install Node.js using the package manager. Use one of the following commands depending on your preference:
For Node.js 14.x:
sudo apt install nodejs
For Node.js 16.x:
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt install -y nodejs
The second command for Node.js 16.x downloads a script and runs it using bash, which adds the Node.js package repository and then installs Node.js.

To verify that Node.js is installed correctly, you can check the installed versions of Node.js and npm (Node Package Manager) by running the following commands:
node --version
npm --version
If both commands show version numbers without any errors, then Node.js is installed successfully.

Open the folder now in vscode
Here i didnt share the folder with all modules because it was more than expected size even in zip.
All the dependencies which are required will be installed in vs code once npm is installed with complete code.
Now run the project by npm run command.
Then npm start
The project frontend will be displayed.
