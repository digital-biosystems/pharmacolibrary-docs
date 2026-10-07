<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J06B&quot;,&quot;href&quot;:&quot;atc/J06B.md&quot;},{&quot;label&quot;:&quot;nirsevimab&quot;}]"></div>

# nirsevimab

- **generic name:** nirsevimab
- **ATC codes:** `J06BD08`
- **DrugBank:** [DB16258](https://go.drugbank.com/drugs/DB16258) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Nirsevimab is a monoclonal antibody used to protect against respiratory syncytial virus (RSV) infection. It is authorised in the European Union and is a relatively new, approved medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q111535760](https://www.wikidata.org/wiki/Q111535760) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 14:41 | 2:02 | 0/1/0 | 0/0/0 | 0/0/0 | 62,703/2,008 | einfracz / qwen3.8-27b | 8 | 1/3 | 8/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Clegg_2024_reference](drugs/drug_nirsevimab/Nirsevimab_Clegg2024_reference.md) | — | 1-compartment (no model) | 0 | Clegg L et al., Population Pharmacokinetics of Nirsevim…, Journal of clinical pharmac… (2024) | [10.1002/jcph.2401](https://doi.org/10.1002/jcph.2401) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Clegg_2024.pdf` | Clegg L et al., Population Pharmacokinetics of Nirsevim…, Journal of clinical pharmac… (2024) | popPK | 10 | [10.1002/jcph.2401](https://doi.org/10.1002/jcph.2401) | [38294353](https://pubmed.ncbi.nlm.nih.gov/38294353) | The abstract provides the specific typical clearance value (3.4 mL/day) for a 5 kg infant, although other specific parameters like volume of distribution and half-life are not explicitly stated in the provided text. |

<sub>queue written 2026-10-07T14:40:40.197070+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Giannini_2025 | irrelevant | 0 | 0 | This is a mathematical transmission modeling study evaluating the public health impact of nirsevimab administration, not a pharmacokinetic study, and it contains no quantitative PK parameters like clearance or volume. |
| popPK | Giannini_2026 | irrelevant | 0 | 0 | The paper is a dynamic transmission modeling study evaluating immunization programs, not a pharmacokinetic study, and does not report quantitative PK parameters (CL, V, ka, etc.) for nirsevimab. |
| popPK | Petrone_2026 | irrelevant | 0 | 0 | The paper is an observational study evaluating the clinical effectiveness of nirsevimab in preventing bronchiolitis, not a pharmacokinetic study, and contains no PK parameters. |
| popPK | Simões_2023 | irrelevant | 4 | 1 | The paper is a pooled efficacy analysis that references a population PK model and an AUC target (12.8 days × mg/mL), but it does not report the specific quantitative disposition parameters (CL, V, Q, ka) or the model structure in the provided text, which are likely in the appendix or original PK publications. |
| popPK | Voirin_2022 | irrelevant | 0 | 0 | This is an epidemiological transmission model assessing the population-level impact of nirsevimab on RSV incidence, not a pharmacokinetic study, and it does not report any quantitative disposition parameters (CL, V, half-life, etc.) for nirsevimab. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 14:40 UTC</sub>
