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
 * Application Gateway autoscale bounds on number of Application Gateway
 * instance.
 *
 */
class ApplicationGatewayAutoscaleBounds {
  /**
   * Create a ApplicationGatewayAutoscaleBounds.
   * @member {number} min Lower bound on number of Application Gateway
   * instances.
   * @member {number} max Upper bound on number of Application Gateway
   * instances.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ApplicationGatewayAutoscaleBounds
   *
   * @returns {object} metadata of ApplicationGatewayAutoscaleBounds
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ApplicationGatewayAutoscaleBounds',
      type: {
        name: 'Composite',
        className: 'ApplicationGatewayAutoscaleBounds',
        modelProperties: {
          min: {
            required: true,
            serializedName: 'min',
            type: {
              name: 'Number'
            }
          },
          max: {
            required: true,
            serializedName: 'max',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = ApplicationGatewayAutoscaleBounds;