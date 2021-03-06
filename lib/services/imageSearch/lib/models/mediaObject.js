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
 * Defines a media object.
 *
 * @extends models['CreativeWork']
 */
class MediaObject extends models['CreativeWork'] {
  /**
   * Create a MediaObject.
   * @property {string} [contentUrl] Original URL to retrieve the source (file)
   * for the media object (e.g the source URL for the image).
   * @property {string} [hostPageUrl] URL of the page that hosts the media
   * object.
   * @property {string} [contentSize] Size of the media object content (use
   * format "value unit" e.g "1024 B").
   * @property {string} [encodingFormat] Encoding format (e.g mp3, mp4, jpeg,
   * etc).
   * @property {string} [hostPageDisplayUrl] Display URL of the page that hosts
   * the media object.
   * @property {number} [width] The width of the source media object, in
   * pixels.
   * @property {number} [height] The height of the source media object, in
   * pixels.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of MediaObject
   *
   * @returns {object} metadata of MediaObject
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'MediaObject',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '_type',
          clientName: '_type'
        },
        uberParent: 'ResponseBase',
        className: 'MediaObject',
        modelProperties: {
          _type: {
            required: true,
            serializedName: '_type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          readLink: {
            required: false,
            readOnly: true,
            serializedName: 'readLink',
            type: {
              name: 'String'
            }
          },
          webSearchUrl: {
            required: false,
            readOnly: true,
            serializedName: 'webSearchUrl',
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
          url: {
            required: false,
            readOnly: true,
            serializedName: 'url',
            type: {
              name: 'String'
            }
          },
          image: {
            required: false,
            readOnly: true,
            serializedName: 'image',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: '_type',
                clientName: '_type'
              },
              uberParent: 'ResponseBase',
              className: 'ImageObject'
            }
          },
          description: {
            required: false,
            readOnly: true,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          alternateName: {
            required: false,
            readOnly: true,
            serializedName: 'alternateName',
            type: {
              name: 'String'
            }
          },
          bingId: {
            required: false,
            readOnly: true,
            serializedName: 'bingId',
            type: {
              name: 'String'
            }
          },
          thumbnailUrl: {
            required: false,
            readOnly: true,
            serializedName: 'thumbnailUrl',
            type: {
              name: 'String'
            }
          },
          provider: {
            required: false,
            readOnly: true,
            serializedName: 'provider',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ThingElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: '_type',
                      clientName: '_type'
                    },
                    uberParent: 'ResponseBase',
                    className: 'Thing'
                  }
              }
            }
          },
          datePublished: {
            required: false,
            readOnly: true,
            serializedName: 'datePublished',
            type: {
              name: 'String'
            }
          },
          text: {
            required: false,
            readOnly: true,
            serializedName: 'text',
            type: {
              name: 'String'
            }
          },
          contentUrl: {
            required: false,
            readOnly: true,
            serializedName: 'contentUrl',
            type: {
              name: 'String'
            }
          },
          hostPageUrl: {
            required: false,
            readOnly: true,
            serializedName: 'hostPageUrl',
            type: {
              name: 'String'
            }
          },
          contentSize: {
            required: false,
            readOnly: true,
            serializedName: 'contentSize',
            type: {
              name: 'String'
            }
          },
          encodingFormat: {
            required: false,
            readOnly: true,
            serializedName: 'encodingFormat',
            type: {
              name: 'String'
            }
          },
          hostPageDisplayUrl: {
            required: false,
            readOnly: true,
            serializedName: 'hostPageDisplayUrl',
            type: {
              name: 'String'
            }
          },
          width: {
            required: false,
            readOnly: true,
            serializedName: 'width',
            type: {
              name: 'Number'
            }
          },
          height: {
            required: false,
            readOnly: true,
            serializedName: 'height',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = MediaObject;
