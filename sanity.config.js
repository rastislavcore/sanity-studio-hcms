import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import schemaTypes from './schemas'

// Plugins
import {scheduledPublishing} from "@sanity/scheduled-publishing";
import {markdownSchema} from 'sanity-plugin-milkdown';
import {media} from 'sanity-plugin-media';

export default defineConfig({
  name: 'cms-digest',
  title: 'CMS Digest',

  projectId: '',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), scheduledPublishing(), markdownSchema({}), media()],

  schema: {
    types: schemaTypes,
  },
})
