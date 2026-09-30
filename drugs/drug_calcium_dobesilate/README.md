<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C05B&quot;,&quot;href&quot;:&quot;atc/C05B.md&quot;},{&quot;label&quot;:&quot;calcium dobesilate&quot;}]"></div>

# calcium dobesilate

- **generic name:** calcium dobesilate
- **ATC codes:** `C05BX01`
- **DrugBank:** [DB13529](https://go.drugbank.com/drugs/DB13529) · **PubChem:** not captured
- **groups:** investigational

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-28 17:49 | 5:33 | 0/0/0 | 0/0/0 | 0/0/0 | 26,826/943 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 1/2 | 3/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ruiz_1998.pdf` | Ruiz E et al., Calcium dobesilate increased endotheliu…, General pharmacology (1998) | pd | 4 | [10.1016/s0306-3623(97)00343-1](https://doi.org/10.1016/s0306-3623(97)00343-1) | [9559323](https://www.ncbi.nlm.nih.gov/pubmed/9559323) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-28T17:48:41.906673+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abbott_2024 | irrelevant | 0 | 0 | The paper is a mechanistic electrophysiology study on potassium channels where calcium dobesilate is only mentioned as a structural analog in a structure-activity relationship, with no pharmacokinetic parameters reported. |
| popPK | Alda_2011 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of oxidative stress markers, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Altinoz_2018 | not_relevant | 0 | 0 | The paper discusses aspirin and its metabolite gentisic acid, not calcium dobesilate, and does not report pharmacogenomic effects on PK/PD parameters for the target drug. |
| popPK | Brunet_1998 | irrelevant | 0 | 0 | The paper reports in vitro antioxidant properties (IC50 values) rather than pharmacokinetic disposition parameters. |
| popPK | Cuevas_2005 | irrelevant | 0 | 0 | no_text gate: only 156 chars of text extracted (&lt; 400) |
| PD | Cuevas_2005 | not_relevant | 0 | 0 | The provided text contains no abstract or content, making it impossible to verify any pharmacodynamic or exposure-response data for calcium dobesilate. |
| popPK | Liu_2023 | relevant | 4 | 8 | The study reports non-compartmental PK parameters (Cmax, AUC, t1/2) for calcium dobesilate, but lacks compartmental model parameters (CL, V, Q, ka) required for population PK extraction. |
| popPK | Mingqi_2026 | irrelevant | 0 | 0 | The study focuses on analytical interference in urinary protein detection methods and reports only urinary drug concentrations, not pharmacokinetic disposition parameters like clearance or volume. |
| popPK | Ruiz_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of vascular effects, not a pharmacokinetic study reporting disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
