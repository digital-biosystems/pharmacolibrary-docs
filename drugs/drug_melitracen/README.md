<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;melitracen&quot;}]"></div>

# melitracen

- **generic name:** melitracen
- **ATC codes:** `N06AA14`, `N06CA02`
- **DrugBank:** [DB13384](https://go.drugbank.com/drugs/DB13384)
- **groups:** investigational

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-24 00:06 | 2:58 | 0/0/0 | 0/0/0 | 0/0/0 | 9,772/560 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wu_2019.pdf` | Wu L et al., Bioequivalence Study Of A Fixed-Dose Co…, Drug design, development an… (2019) | popPK | 8 | [10.2147/DDDT.S207561](https://doi.org/10.2147/DDDT.S207561) | [31571834](https://pubmed.ncbi.nlm.nih.gov/31571834) | The study reports pharmacokinetic parameters (CL/F, Vd/F, t1/2) for melitracen, but the specific numeric values are not present in the provided evidence text. |

<sub>queue written 2026-09-24T00:06:26.774526+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Warnecke_2015 | irrelevant | 0 | 0 | The paper is a process analytical technology study on fluorescence spectroscopy for quantifying drug content in tablets, not a pharmacokinetic study. |
| PD | Warnecke_2015 | not_relevant | 0 | 0 | The paper focuses on analytical chemistry (fluorescence spectroscopy) for quantifying drug content in tablets, not pharmacodynamics or exposure-response relationships. |
| popPK | Wu_2019 | relevant | 8 | 0 | The study reports pharmacokinetic parameters (CL/F, Vd/F, t1/2) for melitracen, but the specific numeric values are not present in the provided evidence text. |
| popPK | Zhang_2023 | irrelevant | 0 | 0 | The study is a clinical efficacy trial for refractory chronic cough where melitracen (as part of Deanxit) is a treatment agent, and no pharmacokinetic parameters are reported. |
| PD | Zhang_2023 | not_relevant | 0 | 0 | The paper is a retrospective clinical cohort study reporting clinical response rates (efficacy percentages) for various treatments, including melitracen (as part of Deanxit), but it does not contain any pharmacokinetic data, concentration-effect analysis, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Zhao_2023 | irrelevant | 0 | 0 | The paper is a clinical case report regarding adverse effects (dysphagia and extrapontine myelinolysis) and contains no pharmacokinetic data or disposition parameters for melitracen. |
| PD | Zhao_2023 | not_relevant | 0 | 0 | The paper is a single case report describing an adverse event (extrapontine myelinolysis and dysphagia) associated with drug use, without any pharmacokinetic data, concentration measurements, or quantitative dose-response analysis. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
