<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L03A&quot;,&quot;href&quot;:&quot;atc/L03A.md&quot;},{&quot;label&quot;:&quot;histamine dihydrochloride&quot;}]"></div>

# histamine dihydrochloride

- **generic name:** histamine dihydrochloride
- **ATC codes:** `L03AX14`
- **DrugBank:** [DB05381](https://go.drugbank.com/drugs/DB05381) · **PubChem:** [CID 774](https://pubchem.ncbi.nlm.nih.gov/compound/774)
- **molar mass:** 111.1451 g/mol (C5H9N3) — DrugBank
- **groups:** approved, investigational

## About

Histamine dihydrochloride is an immunostimulant used as an anticancer treatment. It is an approved drug, though it also has investigational uses and carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q61233](https://www.wikidata.org/wiki/Q61233) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:39 | 0:11 | 0/0/0 | 0/0/0 | 0/0/0 | 13,756/443 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=histamine_dihydrochloride) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | `SLC22A5` inhibitor | DrugBank actor |
| absorption | skeletal muscle | `SLC22A5` inhibitor | DrugBank actor |
| absorption | small intestine | `SLC22A5` inhibitor | DrugBank actor |
| distribution | liver | `SLC22A3` inhibitor | DrugBank actor |
| distribution | placenta | `SLC22A3` inhibitor | DrugBank actor |
| distribution | skeletal muscle | `SLC22A3` inhibitor | DrugBank actor |
| metabolism | liver | `SLC22A1` unknown | DrugBank actor |
| excretion | kidney | `SLC22A2` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: HNMT (substrate), HRH1 (target), HRH2 (target), HRH3 (target), HRH4 (target), SLC18A2 (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aadland_1981 | irrelevant | 0 | 0 | The study measures cAMP levels and adenylate cyclase activity (pharmacodynamics) in response to histamine, not pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Bamps_2023 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of the histamine skin prick test (measuring dermal blood flow and flare area), not a pharmacokinetic study reporting disposition parameters like clearance or volume for histamine dihydrochloride. |
| popPK | Dreborg_2015 | irrelevant | 0 | 0 | Histamine dihydrochloride is used solely as a positive control/probe agent in skin prick tests, not as a subject drug for pharmacokinetic analysis. |
| popPK | Gordon_1980 | irrelevant | 0 | 0 | The study investigates respiratory mechanics and ozone toxicity in guinea pigs using histamine as a challenge agent, not pharmacokinetic disposition parameters. |
| popPK | Harris_1988 | irrelevant | 0 | 0 | The study is a dermatology investigation into dose-response curves for skin prick tests, not a pharmacokinetic study of histamine dihydrochloride disposition. |
| popPK | Skaare_1997 | irrelevant | 0 | 0 | Histamine dihydrochloride is used as a tool to induce inflammation for testing triclosan's efficacy, not as the subject of pharmacokinetic analysis. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
