---
title: Semantic Search
---

# Semantic Search

Search the **Crucible** game system rules or the **Ember** lore by meaning — type a
question or description and get back the most relevant pages.

<form id="semantic-search-form">
  <fieldset>
    <label><input type="radio" name="corpus" value="crucible" checked> Crucible (game system rules)</label>
    <label><input type="radio" name="corpus" value="ember"> Ember (lore)</label>
  </fieldset>
  <input id="semantic-search-input" type="text" placeholder="e.g. how does burning damage work?" autocomplete="off">
  <button type="submit">Search</button>
</form>

<p id="search-status"></p>
<ul id="search-results"></ul>

<style>
#semantic-search-form fieldset {
  border: none;
  display: flex;
  gap: 1.5rem;
  margin: 0 0 0.5rem 0;
  padding: 0;
}
#semantic-search-input {
  width: 100%;
  max-width: 32rem;
  margin-right: 0.5rem;
}
#search-results li {
  margin-bottom: 1rem;
}
.search-snippet {
  color: var(--gray);
  font-size: 0.9em;
}
</style>

<script type="module" src="./static/semantic-search.js"></script>
