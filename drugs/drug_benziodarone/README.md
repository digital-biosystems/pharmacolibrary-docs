<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01D&quot;,&quot;href&quot;:&quot;atc/C01D.md&quot;},{&quot;label&quot;:&quot;benziodarone&quot;}]"></div>

# benziodarone

- **generic name:** benziodarone
- **ATC codes:** `C01DX04`
- **DrugBank:** [DB13277](https://go.drugbank.com/drugs/DB13277) · **PubChem:** not captured
- **molar mass:** 518.089 g/mol (C17H12I2O3) — DrugBank
- **groups:** approved, withdrawn

## About

Benziodarone is a vasodilator that was used in cardiac therapy and also acts as a uricosuric agent. It has been withdrawn and is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4890775](https://www.wikidata.org/wiki/Q4890775) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 09:55 | 0:27 | 0/0/0 | 1/0/0 | 0/0/0 | 14,379/879 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 0.99).">human + animal</span> | [Brandt_2026_T4_TBG](drugs/drug_benziodarone/pd_Brandt_2026_T4_TBG.md) | T4-TBG binding ← Benziodarone · direct sigmoid Emax (Hill) effect | — | Brandt J et al., Thyroxin displacement from single and c…, Archives of toxicology (2026) | [10.1007/s00204-026-04400-4](https://doi.org/10.1007/s00204-026-04400-4) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 0.99).">human + animal</span> | [Brandt_2026_T4_TTR](drugs/drug_benziodarone/pd_Brandt_2026_T4_TTR.md) | T4-TTR binding ← Benziodarone · direct sigmoid Emax (Hill) effect | — | Brandt J et al., Thyroxin displacement from single and c…, Archives of toxicology (2026) | [10.1007/s00204-026-04400-4](https://doi.org/10.1007/s00204-026-04400-4) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 7 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Shimizu_1975.pdf` | Shimizu S et al., [Pharmacokinetics of benziodarone label…, Revista de farmacia e bioqu… (1975) | popPK | 8 | not captured | [1085962](https://pubmed.ncbi.nlm.nih.gov/1085962) | The study describes a pharmacokinetic analysis of benziodarone in rats, but the provided evidence contains only the abstract/methods description without any numeric parameter values. |

<sub>queue written 2026-10-06T09:55:36.352334+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Brandt_2026 | irrelevant | 0 | 0 | The study is an in-vitro thyroid hormone protein binding assay measuring IC50 values for T4 displacement, not a pharmacokinetic study reporting disposition parameters like clearance or volume for benziodarone. |
| popPK | Kramp_1975 | irrelevant | 0 | 0 | The study investigates renal tubular permeability and urate clearance mechanisms in rats, not the systemic pharmacokinetic parameters (CL, V, ka) of benziodarone itself. |
| popPK | Perez-Ruiz_2003 | irrelevant | 0 | 0 | The study is a clinical efficacy review of urate-lowering therapy and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for benziodarone. |
| popPK | Shimizu_1975 | relevant | 8 | 0 | The study describes a pharmacokinetic analysis of benziodarone in rats, but the provided evidence contains only the abstract/methods description without any numeric parameter values. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
