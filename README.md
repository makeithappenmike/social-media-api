# Social Media API
<p />By Michael Martens

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
This is a Social Media API backend.

## Table of Contents
[Installation](#installation)<br />[Usage](#usage)<br />[License](#license)<br />[Contributing](#contributing)<br />[Tests](#tests)<br />[Questions](#questions)

## Installation
* Clone the repo
* ``npm install`` to intialize the included dependencies
* ``npm run seed`` to seed the database
* ``npm run start`` to launch the server

## Usage
Postman or Insomnia can be used to make requests to the following:

* Users
  * ``GET /api/users`` to see all users
  * ``GET /api/users/:userId`` to see a single user by ``_id``
  * ``POST /api/users`` to create a new user
  * ``PUT /api/users/user:Id`` to update a user by ``_id``
  * ``DELETE /api/users/user:Id`` to delete a user by ``_id`` (this removes associated ``thoughts``)
* Friends
  * ``POST /api/users/:userId/friends/`` to add a new friend (in progress)
  * ``DELETE /api/users/:userId/friends/:friendId`` to a friend by ``_id`` (in progress)
* Thoughts
  * ``GET /api/thoughts`` to see all thoughts
  * ``GET /api/thoughts/:thoughtId`` to see a single thought by ``_id``
  * ``POST /api/thoughts`` to create a new thought
  * ``PUT /api/thoughts/:thoughtId`` to update a thought by ``_id``
  * ``DELETE /api/thoughts/:thoughtId`` to a thought by ``_id``
* Reactions
  * ``POST /api/thoughts/:thoughtId/reactions/`` to add a new reaction
  * ``DELETE /api/thoughts/:thoughtId/reactions/:reactionId`` to delete a reaction by ``_id``

## License
This project is licensed under the MIT license.

A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.<p />For more information visit https://choosealicense.com/licenses/mit/.

## Contributing
Other than what I learned in class, just myself! I grabbed most of my inspiration from the provided resources.

## Tests
None

## Questions
Find me on Github at https://github.com/makeithappenmike<p/>You can reach me at omichaelaaron@gmail.com if you have any questions.