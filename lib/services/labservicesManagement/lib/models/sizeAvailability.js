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
 * Represents the size information
 *
 */
class SizeAvailability {
  /**
   * Create a SizeAvailability.
   * @property {string} [sizeCategory] The category of the size (Basic,
   * Standard, Performance). Possible values include: 'Basic', 'Standard',
   * 'Performance'
   * @property {boolean} [isAvailable] Whether or not this size category is
   * available
   */
  constructor() {
  }

  /**
   * Defines the metadata of SizeAvailability
   *
   * @returns {object} metadata of SizeAvailability
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SizeAvailability',
      type: {
        name: 'Composite',
        className: 'SizeAvailability',
        modelProperties: {
          sizeCategory: {
            required: false,
            serializedName: 'sizeCategory',
            type: {
              name: 'String'
            }
          },
          isAvailable: {
            required: false,
            serializedName: 'isAvailable',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = SizeAvailability;
