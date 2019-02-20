
export const handleTsvFileObject = async (fileObject) => {
  let title, columns, data;
  if (fileObject) {
    const text = await pFileReader(fileObject);
    const tsv = tsvParse(text);
    columns = tsv.columns;
    data = tsv.data;
    title = fileObject.name;
  };
  return {title, columns, data};
};

export const tsvParse = (text) => {
  let tsv = {};
  if (text) {
    const data = text.split('\n')
    .map(line => line.split('\t'))
    .filter(line => line && line.length > 1);
    const columns = data.shift();
    tsv = {
      columns,
      data,
    };
  }
  return tsv;
};

export const tsvGenerate = (rows) => {
  let tsv = "";
  if (rows) {
    tsv = rows.map(cells => cells.join('\t'))
    .join('\n');
  }
  return tsv;
};

export const pFileReader = (fileObject) => {
  return new Promise((resolve, reject) => {
    var fileReader = new FileReader();
    fileReader.onload = (e) => {
      const data = e.target.result;
      resolve(data);
    };
    fileReader.readAsText(fileObject);
  });
};
