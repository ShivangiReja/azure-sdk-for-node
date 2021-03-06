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
 * Result of the List Domain Topics operation
 */
class DomainTopicsListResult extends Array {
  /**
   * Create a DomainTopicsListResult.
   * @property {string} [nextLink] A link for the next page of domain topics
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of DomainTopicsListResult
   *
   * @returns {object} metadata of DomainTopicsListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DomainTopicsListResult',
      type: {
        name: 'Composite',
        className: 'DomainTopicsListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'DomainTopicElementType',
                  type: {
                    name: 'Composite',
                    className: 'DomainTopic'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DomainTopicsListResult;
