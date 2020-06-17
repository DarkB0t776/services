import * as collabApi from '../../api/collaborations';

export const collaborate = async ({ collaboration, message }) => {
  const collabData = await collabApi.createCollaboration(collaboration);

  message.cta = `/collaborations/${collabData.id}`;
  await collabApi.sendMessage(message);
};
