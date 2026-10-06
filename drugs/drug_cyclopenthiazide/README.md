<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03A&quot;,&quot;href&quot;:&quot;atc/C03A.md&quot;},{&quot;label&quot;:&quot;cyclopenthiazide&quot;}]"></div>

# cyclopenthiazide

- **generic name:** cyclopenthiazide
- **ATC codes:** `C03AA07`, `C03AB07`, `C03EA07`
- **DrugBank:** [DB13532](https://go.drugbank.com/drugs/DB13532) · **PubChem:** [CID 2904](https://pubchem.ncbi.nlm.nih.gov/compound/2904)
- **molar mass:** 379.87 g/mol (C13H18ClN3O4S2) — DrugBank
- **groups:** approved

## About

Cyclopenthiazide is a thiazide diuretic used to treat high blood pressure (arterial hypertension) and to help the body remove excess fluid. It is an approved medicine, but it is not widely used today and appears mainly in a few national markets rather than across the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3676519](https://www.wikidata.org/wiki/Q3676519) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 15:19 | 1:04 | 0/0/0 | 0/0/0 | 0/0/0 | 33,258/533 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/1 | 1/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 42 matched, 18 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Krum_1992.pdf` | Krum H et al., Steady-state pharmacokinetics and pharm…, Journal of cardiovascular p… (1992) | pd | 5 | [10.1097/00005344-199209000-00017](https://doi.org/10.1097/00005344-199209000-00017) | [1279292](https://www.ncbi.nlm.nih.gov/pubmed/1279292) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-06T15:18:48.963015+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Anavekar_1989 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of clonidine, and cyclopenthiazide is only mentioned as a comparator for blood pressure effects without any PK parameters reported. |
| popPK | Eriksson_1987 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of thiazide effects on sodium transport in amphibian and fish bladders, not a pharmacokinetic study of cyclopenthiazide disposition. |
| PD | Eriksson_1987 | not_relevant | 2 | 1 | The paper reports only qualitative observations that cyclopenthiazide reduced short-circuit current at high concentrations (&gt;0.1 mM) and explicitly states that dose-response curves were difficult to obtain, providing no numeric PD parameters or extractable concentration-effect data. |
| popPK | Garrett_1981 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of sulfisoxazole, not cyclopenthiazide. |
| popPK | Guo_2025 | irrelevant | 0 | 0 | The paper is a proteome-wide Mendelian randomization study on lymphoma targets and does not involve cyclopenthiazide or pharmacokinetic parameters. |
| PD | Guo_2025 | not_relevant | 0 | 0 | The paper focuses on Mendelian randomization for lymphoma targets and does not mention cyclopenthiazide or report any pharmacodynamic parameters for it. |
| popPK | Iwaki_1985 | irrelevant | 0 | 0 | The study investigates the renal handling of uric acid and electrolytes in rats treated with thiazide diuretics, not the pharmacokinetic parameters (CL, V, t1/2) of cyclopenthiazide itself. |
| popPK | Krum_1992 | irrelevant | 0 | 0 | no_text gate: only 112 chars of text extracted (&lt; 400) |
| PD | Krum_1992 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics and pharmacodynamics of cilazapril, not cyclopenthiazide, and does not report PD parameters for cyclopenthiazide. |
| popPK | Ni_2024 | irrelevant | 0 | 0 | The paper describes a computational method for drug target identification using transcriptomics and does not contain any pharmacokinetic data for cyclopenthiazide. |
| PD | Ni_2024 | not_relevant | 0 | 0 | The paper describes a machine learning method (PertKGE) for identifying compound-protein interactions from transcriptomics and does not report any pharmacodynamic or exposure-response data for cyclopenthiazide. |
| popPK | Sorkin_1987 | irrelevant | 0 | 0 | The paper is a review of nicardipine, and cyclopenthiazide is only mentioned as a comparator drug without any pharmacokinetic data. |
| PD | Sorkin_1987 | not_relevant | 0 | 0 | The paper is a review of nicardipine and only mentions cyclopenthiazide as a comparator drug without providing any pharmacodynamic data or parameters for it. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
