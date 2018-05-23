const installWorklet = async () => {
  await CSS.layoutWorklet.addModule('aspect-ratio.layout-module.js');
};

if ('layoutWorklet' in CSS) {
  installWorklet().then(() => {});
}
