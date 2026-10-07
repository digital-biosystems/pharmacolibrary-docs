<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03A&quot;,&quot;href&quot;:&quot;atc/R03A.md&quot;},{&quot;label&quot;:&quot;reproterol&quot;}]"></div>

# reproterol

- **generic name:** reproterol
- **ATC codes:** `R03AC15`, `R03AK05`, `R03CC14`
- **DrugBank:** [DB12846](https://go.drugbank.com/drugs/DB12846) · **PubChem:** [CID 25654](https://pubchem.ncbi.nlm.nih.gov/compound/25654)
- **molar mass:** 389.412 g/mol (C18H23N5O5) — DrugBank
- **groups:** investigational

## About

Reproterol is a selective beta-2 adrenergic agonist that acts as a bronchodilator for obstructive airway diseases such as asthma. It is considered investigational in DrugBank and has no European Union marketing authorisation, so it is not widely used.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1292703](https://www.wikidata.org/wiki/Q1292703) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 14:18 | 0:12 | 0/0/0 | 1/0/0 | 0/0/0 | 12,705/540 | ollama / glm-5.3-flash | 2 | 1/0 | 2/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Foster_1991_sGaw](drugs/drug_reproterol/pd_Foster_1991_sGaw.md) | specific airways conductance (log sGaw) increase against background bronchoconstriction ← reproterol · direct linear effect | — | Foster RW et al., A method for bioassay of potency and ef…, British journal of clinical… (1991) | [10.1111/j.1365-2125.1991.tb05561.x](https://doi.org/10.1111/j.1365-2125.1991.tb05561.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=reproterol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: ADRB2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Patchett_1985 | irrelevant | 0 | 0 | This is a pharmacodynamic dose-response study of bronchodilation (FEV1/PEFR) with no PK parameters (CL, V, ka, half-life, or PK model) for reproterol. |
| popPK | Susanna_1990 | irrelevant | 0 | 0 | Reproterol is only a co-administered bronchoprotective agent in a pharmacodynamic adenosine challenge study; no PK parameters or numeric disposition values are reported. |
| popPK | Zimmer_2000 | irrelevant | 0 | 0 | Isolated working rat heart pharmacodynamic/toxicity study of beta-agonists; no PK disposition parameters for reproterol are reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
