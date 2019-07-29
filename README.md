# Snypit (Code Snippet Manager)
Powered by [Virtualzero](https://virtualzero.net)

Snypit is a modern, code snippet management system built with Flask. Snypit enables registered users to quickly save and retrieve code snippets for their projects, while offering the benefits of language-specific syntax highlighting and over 50 popular code editor themes.

#### Installation
Clone the repository:
```bash
git clone https://github.com/VirtualZero/Snypit.git
```

#### Environment

Install Miniconda
```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
```

```bash
chmod +x Miniconda3-latest-Linux-x86_64.sh
```

```bash
./Miniconda3-latest-Linux-x86_64.sh
```

Create Environment
```bash
conda create --name 'snypit' python=3.7
```

Activate Environment
```bash
conda activate snypit
```

Install Dependencies
```bash
cd Snypit && pip install -r requirements.txt
```

#### Execution
It is bad practice to store passwords in applications. For this reason, sensitive information like account passwords, secret keys, and API keys are stored in environment variables. For simplicity, use the included bash script, env.sh, to create the environment variables before executing the application. With the 'snypit' virtual environment activated, update env.sh with secure credentials and execute the following command:

```bash
chmod +x env.sh && . env.sh
```
To run Ports on your local machine, make sure the 'snypit' virtual environment is activated and that you are in the root ports directory. Enter the following command to start the app:

```bash
python run.py
```

Then, open a browser and go to the following URL:

```bash
http://127.0.0.1:5000
```

To use Snypit in a production environment, it is recommended to deploy the app using Gunicorn and Nginx. An example Nginx host file is included, as well as an example systemd service file. These are found in the resources directory.

