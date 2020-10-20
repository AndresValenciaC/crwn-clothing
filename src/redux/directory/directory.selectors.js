import { createSelector } from "reselect";

const selectDirectory = (state) => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  // The fuction points to the data wanted
  (directory) => directory.sections
);
