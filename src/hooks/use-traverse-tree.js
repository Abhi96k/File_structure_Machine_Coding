const useTraversTree = () => {
  // Recursive function to insert node
  function insertNode(tree, folderId, itemName, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: Date.now(),
        name: itemName,
        isFolder,
        items: isFolder ? [] : [],
      });
      return tree;
    }

    // Traverse into children
    const updatedItems = tree.items.map((child) =>
      insertNode(child, folderId, itemName, isFolder)
    );

    return { ...tree, items: updatedItems };
  }

  return { insertNode };
};

export default useTraversTree;
