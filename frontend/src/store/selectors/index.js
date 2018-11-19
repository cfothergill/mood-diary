
export const getEntries = ({ entries }) => entries.entries
export const isSaving = ({ entries }) => entries.saving
export const getError = ({ entries }) => entries.error
export const getScores = ({ entries }) => [...entries.entries].reverse().map(({ score }) => score)
