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
 * The event for a webhook.
 *
 * @extends models['EventInfo']
 */
class Event extends models['EventInfo'] {
  /**
   * Create a Event.
   * @property {object} [eventRequestMessage] The event request message sent to
   * the service URI.
   * @property {object} [eventRequestMessage.content] The content of the event
   * request message.
   * @property {string} [eventRequestMessage.content.id] The event ID.
   * @property {date} [eventRequestMessage.content.timestamp] The time at which
   * the event occurred.
   * @property {string} [eventRequestMessage.content.action] The action that
   * encompasses the provided event.
   * @property {object} [eventRequestMessage.content.target] The target of the
   * event.
   * @property {string} [eventRequestMessage.content.target.mediaType] The MIME
   * type of the referenced object.
   * @property {number} [eventRequestMessage.content.target.size] The number of
   * bytes of the content. Same as Length field.
   * @property {string} [eventRequestMessage.content.target.digest] The digest
   * of the content, as defined by the Registry V2 HTTP API Specification.
   * @property {number} [eventRequestMessage.content.target.length] The number
   * of bytes of the content. Same as Size field.
   * @property {string} [eventRequestMessage.content.target.repository] The
   * repository name.
   * @property {string} [eventRequestMessage.content.target.url] The direct URL
   * to the content.
   * @property {string} [eventRequestMessage.content.target.tag] The tag name.
   * @property {object} [eventRequestMessage.content.request] The request that
   * generated the event.
   * @property {string} [eventRequestMessage.content.request.id] The ID of the
   * request that initiated the event.
   * @property {string} [eventRequestMessage.content.request.addr] The IP or
   * hostname and possibly port of the client connection that initiated the
   * event. This is the RemoteAddr from the standard http request.
   * @property {string} [eventRequestMessage.content.request.host] The
   * externally accessible hostname of the registry instance, as specified by
   * the http host header on incoming requests.
   * @property {string} [eventRequestMessage.content.request.method] The
   * request method that generated the event.
   * @property {string} [eventRequestMessage.content.request.useragent] The
   * user agent header of the request.
   * @property {object} [eventRequestMessage.content.actor] The agent that
   * initiated the event. For most situations, this could be from the
   * authorization context of the request.
   * @property {string} [eventRequestMessage.content.actor.name] The subject or
   * username associated with the request context that generated the event.
   * @property {object} [eventRequestMessage.content.source] The registry node
   * that generated the event. Put differently, while the actor initiates the
   * event, the source generates it.
   * @property {string} [eventRequestMessage.content.source.addr] The IP or
   * hostname and the port of the registry node that generated the event.
   * Generally, this will be resolved by os.Hostname() along with the running
   * port.
   * @property {string} [eventRequestMessage.content.source.instanceID] The
   * running instance of an application. Changes after each restart.
   * @property {object} [eventRequestMessage.headers] The headers of the event
   * request message.
   * @property {string} [eventRequestMessage.method] The HTTP method used to
   * send the event request message.
   * @property {string} [eventRequestMessage.requestUri] The URI used to send
   * the event request message.
   * @property {string} [eventRequestMessage.version] The HTTP message version.
   * @property {object} [eventResponseMessage] The event response message
   * received from the service URI.
   * @property {string} [eventResponseMessage.content] The content of the event
   * response message.
   * @property {object} [eventResponseMessage.headers] The headers of the event
   * response message.
   * @property {string} [eventResponseMessage.reasonPhrase] The reason phrase
   * of the event response message.
   * @property {string} [eventResponseMessage.statusCode] The status code of
   * the event response message.
   * @property {string} [eventResponseMessage.version] The HTTP message
   * version.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of Event
   *
   * @returns {object} metadata of Event
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Event',
      type: {
        name: 'Composite',
        className: 'Event',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          eventRequestMessage: {
            required: false,
            serializedName: 'eventRequestMessage',
            type: {
              name: 'Composite',
              className: 'EventRequestMessage'
            }
          },
          eventResponseMessage: {
            required: false,
            serializedName: 'eventResponseMessage',
            type: {
              name: 'Composite',
              className: 'EventResponseMessage'
            }
          }
        }
      }
    };
  }
}

module.exports = Event;
