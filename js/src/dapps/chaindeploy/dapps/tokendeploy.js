// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

import builtins from '~/views/Dapps/builtin.json';

const id = 'tokendeploy';
const app = builtins.find((app) => app.url === id);
const hashId = app.id;
const source = {
  imageUrl: 'https://raw.githubusercontent.com/paritytech/dapp-assets/b88e983abaa1a6a6345b8d9448c15b117ddb540e/dapps/interlock-64x64.png',
  imageHash: '0xde104baf02aec783e0bffc624514ee267dbcb455382375e3ffa715790c1c939f'
};
const name = app.name;

export {
  hashId,
  id,
  name,
  source
};
