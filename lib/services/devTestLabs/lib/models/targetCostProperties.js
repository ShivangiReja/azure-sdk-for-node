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
 * Properties of a cost target.
 *
 */
class TargetCostProperties {
  /**
   * Create a TargetCostProperties.
   * @member {string} [status] Target cost status. Possible values include:
   * 'Enabled', 'Disabled'
   * @member {number} [target] Lab target cost
   * @member {array} [costThresholds] Cost thresholds.
   * @member {date} [cycleStartDateTime] Reporting cycle start date.
   * @member {date} [cycleEndDateTime] Reporting cycle end date.
   * @member {string} [cycleType] Reporting cycle type. Possible values
   * include: 'CalendarMonth', 'Custom'
   */
  constructor() {
  }

  /**
   * Defines the metadata of TargetCostProperties
   *
   * @returns {object} metadata of TargetCostProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TargetCostProperties',
      type: {
        name: 'Composite',
        className: 'TargetCostProperties',
        modelProperties: {
          status: {
            required: false,
            serializedName: 'status',
            type: {
              name: 'String'
            }
          },
          target: {
            required: false,
            serializedName: 'target',
            type: {
              name: 'Number'
            }
          },
          costThresholds: {
            required: false,
            serializedName: 'costThresholds',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'CostThresholdPropertiesElementType',
                  type: {
                    name: 'Composite',
                    className: 'CostThresholdProperties'
                  }
              }
            }
          },
          cycleStartDateTime: {
            required: false,
            serializedName: 'cycleStartDateTime',
            type: {
              name: 'DateTime'
            }
          },
          cycleEndDateTime: {
            required: false,
            serializedName: 'cycleEndDateTime',
            type: {
              name: 'DateTime'
            }
          },
          cycleType: {
            required: false,
            serializedName: 'cycleType',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = TargetCostProperties;