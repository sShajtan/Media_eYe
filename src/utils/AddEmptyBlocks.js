const AddEmptyBlocks = (i) => {
  let width = window.innerWidth;
  let count;
  if (width > 1199) {
    if (i < 4) {
      if (i === 3) {
        count = 1;
      }
      if (i === 2) {
        count = 2;
      }
      if (i === 1) {
        count = 3;
      }
      if (i === 0) {
        count = 0;
      }
    } else {
      count = 4 - (i % 4);
    }
  } else if ((width < 1199) & (width > 991)) {
    if (i < 3) {
      if (i === 2) {
        count = 2;
      }
      if (i === 1) {
        count = 1;
      }
      if (i === 0 || i === 3) {
        count = 0;
      }
    } else {
      count = 3 - (i % 3);
    }
  } else if ((width < 991) & (width > 767)) {
    if (i < 2) {
      if (i === 1) {
        count = 1;
      }
      if (i === 0 || i === 2) {
        count = 0;
      }
    } else {
      count = 2 - (i % 2);
    }
  } else {
    count = 0;
  }

  let blocks = [];
  for (let step = 0; step < count; step++) {
    blocks.push(<div className="explore_block_wrapper"></div>);
  }

  return blocks;
};

export default AddEmptyBlocks;
