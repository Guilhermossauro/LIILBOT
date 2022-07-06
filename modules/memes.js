exports.memes = async function memes(client, message) {
  const { id, from, body, sender, isGroupMsg, chat, caption, isMedia, mimetype, quotedMsg, quotedMsgObj } = message;
      return client.reply(from, "Este comando só pode ser usado em grupos.", id);
}