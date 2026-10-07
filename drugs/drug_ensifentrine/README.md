<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03B&quot;,&quot;href&quot;:&quot;atc/R03B.md&quot;},{&quot;label&quot;:&quot;ensifentrine&quot;}]"></div>

# ensifentrine

- **generic name:** ensifentrine
- **ATC codes:** `R03BX02`
- **DrugBank:** [DB16157](https://go.drugbank.com/drugs/DB16157) · **PubChem:** not captured
- **molar mass:** 477.565 g/mol (C26H31N5O4) — DrugBank
- **groups:** approved, investigational

## About

Ensifentrine is an inhaled drug for chronic obstructive pulmonary disease. It is approved and used for obstructive airway disease, although a marketing application in the European Union was withdrawn.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q135257708](https://www.wikidata.org/wiki/Q135257708) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 14:15 | 0:25 | 0/0/0 | 0/0/0 | 0/0/0 | 9,427/215 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ensifentrine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCG2` substrate | DrugBank actor |
| absorption | liver | `ABCG2` substrate | DrugBank actor |
| absorption | lung | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | small intestine | `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCG2` substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2C9` substrate, `CYP2D6` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: PDE3A (inhibitor), PDE4A (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abou_2026 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis of efficacy and safety outcomes (FEV1, adverse events) in COPD patients, containing no pharmacokinetic parameters (CL, V, ka, etc.) for ensifentrine. |
| popPK | Bjermer_2019 | irrelevant | 2 | 0 | The study reports pharmacodynamic efficacy (FEV1) and safety, mentioning only a qualitative "dose-related increase in plasma exposure" without providing any quantitative PK parameters (CL, V, ka, etc.). |
| popPK | Carvalhal_2025 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis of clinical efficacy (lung function) in COPD, reporting no pharmacokinetic parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
