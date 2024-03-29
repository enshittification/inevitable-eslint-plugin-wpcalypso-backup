/**
 * @fileoverview Disallow collapsible whitespace in translatable strings.
 * @author Automattic
 * @copyright 2016 Automattic. All rights reserved.
 * See LICENSE.md file in root directory for full license.
 */
'use strict';

//------------------------------------------------------------------------------
// Helper Functions
//------------------------------------------------------------------------------

var getCallee = require( '../util/get-callee' ),
	getTextContentFromNode = require( '../util/get-text-content-from-node' );

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

var rule = module.exports = function( context ) {
	return {
		CallExpression: function( node ) {
			if ( 'translate' !== getCallee( node ).name ) {
				return;
			}

			node.arguments.forEach( function( arg ) {
				var string = getTextContentFromNode( arg ),
					collapsibleWhitespace, problem, problemString, problemsByCharCode;

				if ( ! string ) {
					return;
				}

				collapsibleWhitespace = string.match( /(\n|\t|\r|(?:  ))/ );

				if ( collapsibleWhitespace ) {
					problemsByCharCode = {
						9: '\\t',
						10: '\\n',
						13: '\\r',
						32: 'consecutive spaces',
					};
					problem = problemsByCharCode[ collapsibleWhitespace[ 0 ].charCodeAt( 0 ) ];
					problemString = problem ? ` (${ problem })` : '';
					context.report( {
						node: arg,
						message: rule.ERROR_MESSAGE,
						data: {
							problem: problemString
						}
					} );
				}
			} );
		}
	};
};

rule.ERROR_MESSAGE = 'Translations should not contain collapsible whitespace{{problem}}';

rule.schema = [];
