<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N04B&quot;,&quot;href&quot;:&quot;atc/N04B.md&quot;},{&quot;label&quot;:&quot;Foslevodopa&quot;}]"></div>

# Foslevodopa

- **generic name:** Foslevodopa
- **ATC codes:** `N04BA07`
- **DrugBank:** [DB16683](https://go.drugbank.com/drugs/DB16683) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Foslevodopa is a dopa derivative used as an anti-Parkinson drug. It is an approved medicine, though its use appears limited and partly investigational.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 13:06 | 3:46 | 0/0/0 | 0/0/0 | 0/0/0 | 82,557/994 | ollama / glm-5.3-flash | 5 | 0/3 | 5/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 19 matched, 13 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mukai_2026.pdf` | Mukai Y et al., Comparative pharmacokinetics of levodop…, Parkinsonism & related diso… (2026) | popPK | 6 | [10.1016/j.parkreldis.2026.108197](https://doi.org/10.1016/j.parkreldis.2026.108197) | [41570355](https://pubmed.ncbi.nlm.nih.gov/41570355) | Foslevodopa-foscarbidopa is a subject therapy with quantitative levodopa exposure measures (SSConc, dose-concentration slopes), but no classical disposition parameters (CL, V, ka) are reported, and some detail may be in figures. |

<sub>queue written 2026-10-06T13:06:00.383814+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fan_2025 | irrelevant | 0 | 0 | This is a review of flavonoids in neurological diseases with no foslevodopa PK data or parameters. |
| popPK | Ionita_2014 | irrelevant | 0 | 0 | This is a PK study of prednisone/prednisolone, not foslevodopa; foslevodopa is not mentioned. |
| popPK | Jost_2026 | irrelevant | 0 | 0 | Real-world effectiveness/safety observational study of foslevodopa/foscarbidopa infusion; no PK parameters (CL, V, ka, half-life, or PK model) reported, only clinical outcome scores and dosing rates. |
| popPK | Tsuboi_2026 | irrelevant | 0 | 0 | Clinical outcomes study of foslevodopa/foscarbidopa with no pharmacokinetic parameters or model reported. |
| popPK | Yan_2023 | irrelevant | 0 | 0 | This is a microbiome/azathioprine-6-MP study in IBD with no foslevodopa PK parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
