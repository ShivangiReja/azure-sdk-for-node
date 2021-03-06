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
 * Session info for an event result
 *
 */
class EventsSessionInfo {
  /**
   * Create a EventsSessionInfo.
   * @member {string} [id] ID of the session
   */
  constructor() {
  }

  /**
   * Defines the metadata of EventsSessionInfo
   *
   * @returns {object} metadata of EventsSessionInfo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'eventsSessionInfo',
      type: {
        name: 'Composite',
        className: 'EventsSessionInfo',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = EventsSessionInfo;
