# Convert a number into words #

Converts a given number into words. For example, given the number “1234” as input, return the output “one thousand, two hundred and thirty-four”.

## Architecture

Node (v13) is the choice I made as it fulfills the requirements such as output to the STDOUT or be able to read data via a text file, although I didn't quite get round to that, it can easily be implemented. There's also potential of
writing an API that can output this data to be used by a web client.


### Prerequisites

* node >= 13


### Installation
 
1. Clone the repo
```sh
	git clone https://shiraz_solangi@bitbucket.org/shiraz_solangi/number-text-parser.git
```

2. Install NPM packages
```sh
	npm install
```

## Usage

Commands

```sh
	- node index.js "Some text to parse"

	- npm t #Run test suite using Jest
```

