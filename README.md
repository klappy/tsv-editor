Create a series of Proof of Concepts to help test assumptions of needs for editing of tN .tsv files with embedded markdown.

This is the first planned PoC:

1. First PoC focuses on round trip editing of any .tsv file with embedded markdown.
1. Second PoC narrows in on features specifically for tN editing.
1. Third PoC/Prototype transitions to integration with DCS/Gitea workflow. 

### Use Case
1. The English tN team needs a tool to easily modify their .tsv files with embedded markdown.

### Assumptions to test
1. Rendering and editing of embedded markdown is possible.
1. Importing and exporting .tsv files can maintain compatibility.
1. A simple editor can meet all the needs.
1. An online app can allow editing of files preferable to current editors.
1. An online app can integrate into DCS git api to ease workflow overhead.
1. Building on same frameworks of our other apps improves maintainability and cross functional development team.

### Limitations, Blockers, Out of Scope
1. DCS/gitea tree and https write APIs block DCS integration.
1. Translation of the data is out of scope.
