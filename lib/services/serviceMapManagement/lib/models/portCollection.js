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
 * @class
 * Initializes a new instance of the PortCollection class.
 * @constructor
 * Collection of Port resources.
 *
 * @member {string} [nextLink] The URL to the next set of resources.
 *
 */
class PortCollection extends Array {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of PortCollection
   *
   * @returns {object} metadata of PortCollection
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PortCollection',
      type: {
        name: 'Composite',
        className: 'PortCollection',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PortElementType',
                  type: {
                    name: 'Composite',
                    className: 'Port'
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

module.exports = PortCollection;