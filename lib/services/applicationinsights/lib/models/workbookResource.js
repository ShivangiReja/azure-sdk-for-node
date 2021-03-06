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

const models = require('./index');

/**
 * An azure resource object
 *
 * @extends models['BaseResource']
 */
class WorkbookResource extends models['BaseResource'] {
  /**
   * Create a WorkbookResource.
   * @member {string} [id] Azure resource Id
   * @member {string} [name] Azure resource name
   * @member {string} [type] Azure resource type
   * @member {string} [location] Resource location
   * @member {object} [tags] Resource tags
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of WorkbookResource
   *
   * @returns {object} metadata of WorkbookResource
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'WorkbookResource',
      type: {
        name: 'Composite',
        className: 'WorkbookResource',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          location: {
            required: false,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = WorkbookResource;
