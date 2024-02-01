/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/**
* Evaluates the natural logarithm of the cumulative distribution function (CDF) for a beta prime distribution.
*
* @param x - input value
* @returns evaluated logCDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the logarithm of the cumulative distribution function (CDF) of a beta prime distribution.
*/
interface LogCDF {
	/**
	* Evaluates the natural logarithm of the cumulative distribution function (CDF) for a beta prime distribution with first shape parameter `alpha` and second shape parameter `beta` at a value `x`.
	*
	* ## Notes
	*
	* -   If `alpha <= 0` or `beta <= 0`, the function returns `NaN`.
	*
	* @param x - input value
	* @param alpha - first shape parameter
	* @param beta - second shape parameter
	* @returns evaluated logCDF
	*
	* @example
	* var y = logcdf( 0.5, 1.0, 1.0 );
	* // returns ~-1.099
	*
	* @example
	* var y = logcdf( 0.5, 2.0, 4.0 );
	* // returns ~-0.618
	*
	* @example
	* var y = logcdf( 0.2, 2.0, 2.0 );
	* // returns ~-2.603
	*
	* @example
	* var y = logcdf( 0.8, 4.0, 4.0 );
	* // returns ~-0.968
	*
	* @example
	* var y = logcdf( -0.5, 4.0, 2.0 );
	* // returns -Infinity
	*
	* @example
	* var y = logcdf( 2.0, -1.0, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = logcdf( 2.0, 0.5, -1.0 );
	* // returns NaN
	*
	* @example
	* var y = logcdf( NaN, 1.0, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = logcdf( 0.0, NaN, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = logcdf( 0.0, 1.0, NaN );
	* // returns NaN
	*/
	( x: number, alpha: number, beta: number ): number;

	/**
	* Returns a function for evaluating the natural logarithm of the cumulative distribution function (CDF) for a beta prime distribution with first shape parameter `alpha` and second shape parameter `beta`.
	*
	* @param alpha - first shape parameter
	* @param beta - second shape parameter
	* @returns logCDF
	*
	* @example
	* var mylogcdf = logcdf.factory( 0.5, 0.5 );
	*
	* var y = mylogcdf( 0.8 );
	* // returns ~-0.767
	*
	* y = mylogcdf( 0.3 );
	* // returns ~-1.143
	*/
	factory( alpha: number, beta: number ): Unary;
}

/**
* Beta prime distribution logarithm of cumulative distribution function (CDF).
*
* @param x - input value
* @param alpha - first shape parameter
* @param beta - second shape parameter
* @returns evaluated logCDF
*
* @example
* var y = logcdf( 0.5, 1.0, 1.0 );
* // returns ~-1.099
*
* y = logcdf( 0.5, 2.0, 4.0 );
* // returns ~-0.618
*
* var mylogcdf = logcdf.factory( 0.5, 0.5 );
*
* var y = mylogcdf( 0.8 );
* // returns ~-0.766
*
* y = mylogcdf( 0.3 );
* // returns ~-1.142
*/
declare var logCDF: LogCDF;


// EXPORTS //

export = logCDF;
