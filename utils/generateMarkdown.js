// Function to render the license badge based on the chosen license
function renderLicenseBadge(license) {
  const badges = {
    MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    Apache:
      "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "GNU GPLv3":
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    ISC: "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
    Unlicense:
      "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
  };
  return badges[license] || "";
}

// Function to render the license link based on the chosen license
function renderLicenseLink(license) {
  const licenseLinks = {
    MIT: "https://opensource.org/licenses/MIT",
    Apache: "https://opensource.org/licenses/Apache-2.0",
    "GNU GPLv3": "https://www.gnu.org/licenses/gpl-3.0",
    ISC: "https://opensource.org/licenses/ISC",
    Unlicense: "http://unlicense.org/",
  };
  return licenseLinks[license] || "";
}

// Function to render the license section based on the chosen license
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }
  const badge = renderLicenseBadge(license);
  const link = `For more information about this license, visit [${license}](${renderLicenseLink(
    license,
  )}).`;
  return `## License\n\n${badge}\n\n${link}\n`;
}

// Function to render additional badges based on project details
function renderAdditionalBadges(data) {
  let badges = "";

  const ciBadge =
    "[![Build Status](https://img.shields.io/travis/username/repo.svg)](https://travis-ci.org/username/repo)";
  badges += `${ciBadge}  `;

  const coverageBadge =
    "[![Code Coverage](https://img.shields.io/codecov/c/github/username/repo.svg)](https://codecov.io/gh/username/repo)";
  badges += `${coverageBadge}  `;

  // Return the concatenated badges string
  return badges.trim();
}

// Generate the complete markdown content of the README file
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

${renderAdditionalBadges(data)}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Tests
${data.tests}

${renderLicenseSection(data.license)}

## Questions
For any questions or inquiries, please contact me via GitHub: [${
    data.githubUsername
  }](https://github.com/${data.githubUsername}) or Email: ${data.email}
`;
}

module.exports = generateMarkdown;
