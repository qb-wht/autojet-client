module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'select',
        name: 'layerType',
        message: 'FSD layer:',
        choices: ['0_shared', '1_entities', '2_features', '3_widgets'],
      },
      {
        type: 'input',
        name: 'layerName',
        message: 'FSD layer name:',
      },
      {
        type: 'input',
        name: 'optionals',
        message: `
  NN
  -c, --component : Генерировать component файл?
  -p, --props     : Генерировать props для компонента?
  -s, --styles    : Генерировать styles для компонента?
  -e, --exports   : Генерировать index export файл?
  NN
        `
          .trim()
          .replaceAll('NN', '\n'),
        default: '-cpse',
      },
    ];

    return inquirer.prompt(questions).then((answers) => {
      const { layerType, layerName, optionals } = answers;

      const projectPath = 'src/';

      const getLayerPath = (projectPath, layerType) => {
        switch (layerType) {
          case '0_shared':
            return `${projectPath}/${layerType}/components`;
          default:
            return `${projectPath}/${layerType}`;
        }
      };

      const absPath = getLayerPath(projectPath, layerType);

      optionalData = attrParser(optionals);

      return {
        ...answers,
        absPath,
        layerName,
        projectPath,
        layerType,
        ...optionalData,
      };
    });
  },
};

function attrParser(str) {
  try {
    const lettersToAttrs = {
      c: 'component',
      p: 'props',
      s: 'styles',
      e: 'exports',
    };

    const attrs = {
      component: false,
      props: false,
      styles: false,
      exports: false,
    };

    if (/^-{1,2}all$/.test(str)) {
      for (const key of Object.keys(attrs)) {
        attrs[key] = true;
      }

      return attrs;
    }

    let isDetailed = false;

    if (/^(-c|--component)$/.test(str)) {
      isDetailed = true;
      attrs.component = true;
    }

    if (/^(-p|--props)$/.test(str)) {
      isDetailed = true;
      attrs.props = true;
    }

    if (/^(-s|--styles)$/.test(str)) {
      isDetailed = true;
      attrs.styles = true;
    }

    if (/^(-e|--exports)$/.test(str)) {
      isDetailed = true;
      attrs.exports = true;
    }

    if (isDetailed) return attrs;

    if (/-[cpse][a-z]+/.test(str)) {
      newStr = str.substr(1);
      newStr.split('').forEach((letter) => {
        attrs[lettersToAttrs[letter]] = true;
      });

      return attrs;
    }

    return attrs;
  } catch {
    throw "hygen: Не корректный синтаксис для параметра 'optionals'";
  }
}
