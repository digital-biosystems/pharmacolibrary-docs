<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01C&quot;,&quot;href&quot;:&quot;atc/J01C.md&quot;},{&quot;label&quot;:&quot;pivmecillinam&quot;}]"></div>

# pivmecillinam

- **generic name:** pivmecillinam
- **ATC codes:** `J01CA08`
- **DrugBank:** [DB01605](https://go.drugbank.com/drugs/DB01605) · **PubChem:** [CID 115163](https://pubchem.ncbi.nlm.nih.gov/compound/115163)
- **molar mass:** 439.569 g/mol (C21H33N3O5S) — DrugBank
- **groups:** approved, investigational

## About

Pivmecillinam is a penicillin antibiotic used to treat urinary tract infections. It is an approved antibacterial used mainly as a urinary anti-infective, particularly in northern Europe.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q418086](https://www.wikidata.org/wiki/Q418086) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:23 | 2:58 | 0/0/0 | 0/0/0 | 0/0/0 | 87,492/868 | einfracz / qwen3.8-27b | 5 | 0/5 | 5/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=pivmecillinam) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 30 matched, 25 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Hjorth_2022 | irrelevant | 0 | 0 | The study is an epidemiological cohort analysis of childhood leukemia risk associated with prenatal antibiotic exposure, not a pharmacokinetic study, and pivmecillinam is used only as an active comparator drug. |
| PGx | Nielsen_2019 | not_relevant | 0 | 0 | The paper reports a bacterial gene variant (blaCTX-M) causing antibiotic resistance, not a human pharmacogenomic effect on PK/PD parameters. |
| popPK | Resendal_2026 | irrelevant | 0 | 0 | The paper is a protocol for a general study on medication transfer into human milk and does not report specific quantitative pharmacokinetic parameters for pivmecillinam. |
| PGx | Zaunseder_2023 | not_relevant | 0 | 0 | The paper focuses on machine learning methods to improve newborn screening specificity for isovaleric aciduria, mentioning pivmecillinam only as a cause of false positives due to isobaric metabolites, without reporting any pharmacogenomic effects on PK or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
