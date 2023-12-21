// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `[![License](https://img.shields.io/badge/license-${license}-blue.svg)](https://opensource.org/licenses/${license})`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `* [License](#license)`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License
This project is licensed under the [${license}](https://opensource.org/licenses/${license}).`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate the table of contents
function generateTableOfContents(data) {
  const sections = ['Description', 'Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Collaborators', 'GitHub', 'Questions'];
  const toc = sections
    .filter(section => data[section.toLowerCase()])
    .map(section => `* [${section}](#${section.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '')})`)
    .join('\n');

  return `## Table of Contents
${toc}
`;
}

// TODO: Create a function to generate the markdown for README
function generateMarkdown(data) {
  const tableOfContents = generateTableOfContents(data);

  return `# ${data.title}
${renderLicenseBadge(data.license)}

${tableOfContents}

## Description
${data.description}

## Usage
${data.usage}

## Installation
${data.features}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Collaborators
${data.collaborators}

## GitHub
https://github.com/${data.github}

## Questions
${data.questions}
`;
}

module.exports = generateMarkdown;