/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Represents a collection of Log Search rule resources.
 */
class LogSearchRuleResourceCollection extends Array {
  /**
   * Create a LogSearchRuleResourceCollection.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of LogSearchRuleResourceCollection
   *
   * @returns {object} metadata of LogSearchRuleResourceCollection
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'LogSearchRuleResourceCollection',
      type: {
        name: 'Composite',
        className: 'LogSearchRuleResourceCollection',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'LogSearchRuleResourceElementType',
                  type: {
                    name: 'Composite',
                    className: 'LogSearchRuleResource'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = LogSearchRuleResourceCollection;