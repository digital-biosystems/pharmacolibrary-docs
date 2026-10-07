<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;anifrolumab&quot;}]"></div>

# anifrolumab

- **generic name:** anifrolumab
- **ATC codes:** `L04AG11`
- **DrugBank:** [DB11976](https://go.drugbank.com/drugs/DB11976) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Anifrolumab is a monoclonal antibody used to treat systemic lupus erythematosus. It is approved and authorised in the European Union.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:39 | 0:40 | 0/0/1 | 0/0/0 | 0/0/0 | 80,333/2,668 | einfracz / qwen3.8-27b | 5 | 0/5 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q56 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Almquist_2022_reference](drugs/drug_anifrolumab/Anifrolumab_Almquist2022_reference.md) | — | 2-compartment (no model) | 7 | Almquist J et al., Nonlinear Population Pharmacokinetics o…, Journal of clinical pharmac… (2022) | [10.1002/jcph.2055](https://doi.org/10.1002/jcph.2055) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=anifrolumab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: IFNAR1 (inhibitor), IFNAR2 (target), IFNGR2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chia_2021.pdf` | Chia YL et al., Exposure-response analysis for selectio…, Rheumatology (Oxford, Engla… (2021) | popPK | 10 | [10.1093/rheumatology/keab176](https://doi.org/10.1093/rheumatology/keab176) | [33629110](https://pubmed.ncbi.nlm.nih.gov/33629110) | The paper describes a population PK model for anifrolumab in humans, but the evidence provided only contains qualitative descriptions of covariates (weight, IFNGS) and conclusions regarding dosage, without listing specific numeric parameter estimates (CL, V, Q, etc.). |

<sub>queue written 2026-10-06T23:38:43.500012+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chia_2021 | relevant | 10 | 2 | The paper describes a population PK model for anifrolumab in humans, but the evidence provided only contains qualitative descriptions of covariates (weight, IFNGS) and conclusions regarding dosage, without listing specific numeric parameter estimates (CL, V, Q, etc.). |
| popPK | Chia_2022 | irrelevant | 2 | 0 | The study is an exposure-response analysis using model-predicted concentrations but does not report specific quantitative population PK parameters (CL, V, Q, etc.) for anifrolumab. |
| popPK | Chia_2022_2 | relevant | 9 | 2 | The paper analyzes PK/PD relationships and uses a compartmental population PK model for anifrolumab, but the specific quantitative disposition parameters (CL, V, Q) are in Table 2 or Supplementary Material, which are not provided; only concentration metrics (Ctrough, Cave, IC80) are visible in the text. |
| popPK | Rademacher_2026 | irrelevant | 0 | 0 | The study analyzes clinical outcomes (SLEDAI scores) and serological biomarkers (complement, anti-dsDNA) in SLE patients, reporting no pharmacokinetic parameters (CL, V, ka) for anifrolumab. |
| popPK | Tang_2023 | relevant | 4 | 8 | This is a review article summarizing quantitative PK parameters (CL, t1/2, AUC) from original clinical trials, with values present in the text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 23:38 UTC</sub>
