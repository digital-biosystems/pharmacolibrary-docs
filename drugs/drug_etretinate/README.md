<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D05B&quot;,&quot;href&quot;:&quot;atc/D05B.md&quot;},{&quot;label&quot;:&quot;etretinate&quot;}]"></div>

# etretinate

- **generic name:** etretinate
- **ATC codes:** `D05BB01`
- **DrugBank:** [DB00926](https://go.drugbank.com/drugs/DB00926) · **PubChem:** [CID 3312](https://pubchem.ncbi.nlm.nih.gov/compound/3312)
- **molar mass:** 354.4825 g/mol (C23H30O3) — DrugBank
- **groups:** approved, withdrawn

## About

Etretinate is a retinoid that was used as a systemic treatment for psoriasis and related skin conditions such as acropustulosis. It has been withdrawn from the market because, as a retinoid with developmental toxicity, it can cause severe birth defects and persists in the body for a long time.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q554297](https://www.wikidata.org/wiki/Q554297) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:07 | 0:37 | 0/0/0 | 0/0/0 | 0/0/0 | 8,692/1,100 | openai / gpt-6-luna | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=etretinate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| — | adipose tissue | `CYP19A1` inhibitor | DrugBank actor |
| — | ovary | `CYP19A1` inhibitor | DrugBank actor |
| — | testis | `CYP19A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CRABP1 (unknown), RARA (target), RARB (target), RARG (target), RXRA (target), RXRB (target), RXRG (target).</sub>

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
| popPK | Berkers_1995 | irrelevant | 0 | 0 | Etretinate is only tested as an in-vitro antagonist, with no pharmacokinetic parameters reported. |
| PGx | Gollnick_1987 | not_relevant | 0 | 0 | No gene variant, genotype, or phenotype effect on etretinate pharmacokinetics or pharmacodynamics is reported. |
| PGx | Hartmann_1992 | not_relevant | 0 | 0 | The paper reports acitretin’s effects on insulin-related measures but no gene variant, genotype, or phenotype effect on etretinate PK or PD. |
| PGx | Heath_2018 | not_relevant | 0 | 0 | The text reports no gene variant, genotype, or phenotype effect on an etretinate pharmacokinetic or pharmacodynamic parameter. |
| PGx | Pilkington_1992 | not_relevant | 0 | 0 | The review reports no gene variant, genotype, or phenotype effects on etretinate pharmacokinetic or pharmacodynamic parameters. |
| PGx | Warren_1989 | not_relevant | 0 | 0 | The text reports pharmacokinetic information about etretinate but no gene variant, genotype, or phenotype effects. |
| popPK | Willhite_1990 | irrelevant | 1 | 0 | Pharmacokinetic parameters describe retinoic acid, while etretinate is only dosed for toxicity. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
