# Pharmacolibrary
v26.09 (built {{built_at}})

Pharmacokinetic (PK), pharmacodynamic (PD) and pharmacogenomic (PGx) models extracted from the
published literature, with downloads and a simulator you can run in the browser.

<form class="pk-home-search" onsubmit="location.hash = '#/query?ask=' + encodeURIComponent(this.q.value); return false;">
  <input name="q" type="search" placeholder="Ask about a drug, a parameter or a gene — e.g. clearance of metformin" aria-label="Ask the data">
  <button type="submit">Ask</button>
</form>

<div class="pk-home-cards">
  <a class="pk-home-card" href="#/atc/README"><b>Browse drugs</b><span>By ATC class, or open the sidebar tree. Each drug page lists its popPK, PD and PGx records.</span></a>
  <a class="pk-home-card" href="#/query"><b>Ask the data</b><span>Questions in words or SQL over every extracted record and parameter.</span></a>
  <a class="pk-home-card" href="#/sites"><b>ADME sites</b><span>Where drugs are absorbed, metabolised and excreted, and which enzymes and transporters two drugs share.</span></a>
</div>

**Featured — the benchmark drugs** (records checked against hand-curated truth):
[allopurinol](drugs/drug_allopurinol/) ·
[amoxicillin](drugs/drug_amoxicillin/) ·
[clopidogrel](drugs/drug_clopidogrel/) ·
[ibuprofen](drugs/drug_ibuprofen/) ·
[metformin](drugs/drug_metformin/) ·
[semaglutide](drugs/drug_semaglutide/) ·
[tolvaptan](drugs/drug_tolvaptan/)

{{numbers}} · [data & downloads](data.md)

## Record status

| Status | Meaning |
|---|---|
| **Curated (human-checked)** | Authored or checked by a person against the paper. |
| **Reproduces paper** | The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified. |
| **Reproduces with caveats** | Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated). |
| **Not simulated** | Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict. |
| **Needs review** | Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified. |
| **Rejected** | Not accepted; the values are shown for inspection only. |

A record page has three tabs: **Information** (the paper, its population, the model and its
parameters; the audit trail is folded under *Evidence & review*), **Models** (downloads in
Modelica, MATLAB, SimBiology, SBML, CellML and FMI) and **Simulation**.

## Limitations

These machine-extracted records are research resources, not clinically validated models
or medical advice. Verify estimates and model assumptions against the cited primary sources.
