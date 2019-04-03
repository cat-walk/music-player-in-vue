export const getScreenHeight = () => `${document.documentElement.clientHeight}px`;

export const formatSinger = (singerList) => {
  // 拿出列表里面每一项的name，中间用'/'分隔
  let formatedStr = '';
  singerList.forEach((item) => {
    formatedStr += `${item.name}/`;
  });
  return formatedStr.slice(0, -1);
};
