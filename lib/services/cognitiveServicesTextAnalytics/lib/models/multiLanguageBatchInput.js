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
 * Class representing a MultiLanguageBatchInput.
 */
class MultiLanguageBatchInput {
  /**
   * Create a MultiLanguageBatchInput.
   * @member {array} [documents]
   */
  constructor() {
  }

  /**
   * Defines the metadata of MultiLanguageBatchInput
   *
   * @returns {object} metadata of MultiLanguageBatchInput
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'MultiLanguageBatchInput',
      type: {
        name: 'Composite',
        className: 'MultiLanguageBatchInput',
        modelProperties: {
          documents: {
            required: false,
            serializedName: 'documents',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'MultiLanguageInputElementType',
                  type: {
                    name: 'Composite',
                    className: 'MultiLanguageInput'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = MultiLanguageBatchInput;