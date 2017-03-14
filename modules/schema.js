import { schema } from 'normalizr'

const project = new schema.Entity('projects')
const learning = new schema.Entity('learnings')
const technology = new schema.Entity('technologies')

project.define({
  technologies: [ technology ],
  learnings: [ learning ]
})

export const projectList = new schema.Array(project)
