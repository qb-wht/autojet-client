---
to: "<%= exports ? `${absPath}/${h.changeCase.camel(layerName)}/index.ts` : null %>"
---
<%_ if (component) { _%>
export { <%= h.changeCase.pascal(layerName) %> } from './ui/<%= h.changeCase.pascal(layerName) %>';
<%_ } _%>