/*
 * Orko
 * Copyright © 2018-2019 Graham Crockford
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
import coins from "./coins/reducer"
import error from "./error/reducer"
import scripting from "./scripting/reducer"
import support from "./support/reducer"

import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"

export default history =>
  combineReducers({
    router: connectRouter(history),
    coins,
    error,
    scripting,
    support
  })
