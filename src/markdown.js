// license badge options for README.md
const licenseBadge = (license) => {

    if (license === "MIT") {
        return "[![License: MIT](https://img.shields.io/badge/MIT-License-green)](https://opensource.org/licenses/MIT)";

    } else if (license === "GNU v3.0") {
        return "[![License: GPL v3](https://img.shields.io/badge/GPL%20v3.0-License-green)](https://www.gnu.org/licenses/gpl-3.0)";

    } else if (license === "Apache v2.0") {
        return "[![License](https://img.shields.io/badge/Apache%20v2.0-License-green)](https://opensource.org/licenses/Apache-2.0)";

    } else if (license === "None") {
        return "[![License: No License](https://img.shields.io/badge/License-No%20License-red)](http://unlicense.org/)";

    }
}

// generate markdown for README.md
const generateMarkdown = (data) => {

    return ` # ${data.title}
    ${licenseBadge(data.license)}

    ## Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Getting Started](#getting-started)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Credits](#credits)

    ## Description
    ${data.description}

    ## Installation

    Please follow the instructions below:
    \`\`\`
    ${data.installInstructions}
    \`\`\`

    ## Getting Started

    Please follow the instructions below:
    \`\`\`
    ${data.gettingStarted}
    \`\`\`

    ## License
    ${data.license}

    ## Contributing
    ${data.guidelines}

    ## Tests

    Please follow the instructions below:
    \`\`\`
    ${data.testInstructions}
    \`\`\`

    ## Credits
  https://github.com/${data.username}
  Reach me at: ${data.email}
    `;
}

export default generateMarkdown;