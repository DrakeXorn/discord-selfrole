import { Snowflake } from 'discord.js';
import { MessageOptions } from './MessageOptions';
import { RoleToEmojiData } from './RoleToEmojiData';

/**
 *
 * @export
 * @interface ChannelOptions
 */
export interface ChannelOptions {
  /**
   * The channel ID.
   *
   * @type {Snowflake}
   */
  channelID?: Snowflake;

  /**
   * The list of role-emoji pairs to add as reactions to the message.
   *
   * @type {RoleToEmojiData[]}
   */
  rolesToEmojis: RoleToEmojiData[];

  /**
   * Data about the message.
   *
   */
  message: {
    /**
     * The message id.
     *
     * @type {Snowflake}
     */
    id?: Snowflake;

    /**
     * The content and type of the message sent in the registered channel.
     *
     * @type {MessageOptions}
     */
    options: MessageOptions;
  };

  /**
   * The maximum number of roles which can be assigned to a single user.
   *
   * @type {number}
   */
  maxRolesAssigned?: number;
}
