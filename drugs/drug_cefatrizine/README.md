<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefatrizine&quot;}]"></div>

# cefatrizine

- **generic name:** cefatrizine
- **ATC codes:** `J01DB07`
- **DrugBank:** [DB13266](https://go.drugbank.com/drugs/DB13266) · **PubChem:** not captured
- **molar mass:** 462.5 g/mol (C18H18N6O5S2) — DrugBank
- **groups:** investigational

## About

Cefatrizine is a first-generation cephalosporin antibiotic developed for treating bacterial infections. It is considered investigational and does not appear to be an approved medicine in the European Union or elsewhere.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3009981](https://www.wikidata.org/wiki/Q3009981) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:50 | 0:07 | 0/0/0 | 0/0/1 | 0/0/0 | 12,140/308 | einfracz / qwen3.8-27b | 1 | 0/0 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Stillerman_1986_Treatment_failure_rate](drugs/drug_cefatrizine/pd_Stillerman_1986_Treatment_failure_rate.md) | Treatment failure rate ← cefatrizine · categorical (graded) response model | — | Stillerman M, Comparison of oral cephalosporins with…, Pediatric infectious disease (1986) | [10.1097/00006454-198611000-00010](https://doi.org/10.1097/00006454-198611000-00010) |

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

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Reigner_1990.pdf` | Reigner BG et al., Saturable rate of cefatrizine absorptio…, Journal of pharmacokinetics… (1990) | popPK | 9 | [10.1007/BF01063620](https://doi.org/10.1007/BF01063620) | [2329468](https://pubmed.ncbi.nlm.nih.gov/2329468) | The study describes a compartmental PK model for cefatrizine in humans, but no specific numeric parameter values (CL, V, ka, etc.) are provided in the extracted evidence. |

<sub>queue written 2026-10-07T10:50:32.415894+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Reigner_1990 | relevant | 9 | 0 | The study describes a compartmental PK model for cefatrizine in humans, but no specific numeric parameter values (CL, V, ka, etc.) are provided in the extracted evidence. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
