<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V10X&quot;,&quot;href&quot;:&quot;atc/V10X.md&quot;},{&quot;label&quot;:&quot;iodine (131I) omburtamab&quot;}]"></div>

# iodine (131I) omburtamab

- **generic name:** iodine (131I) omburtamab
- **ATC codes:** `V10XA03`
- **DrugBank:** [DB17124](https://go.drugbank.com/drugs/DB17124)
- **groups:** investigational

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-25 05:59 | 1:41 | 0/0/0 | 0/0/0 | 0/0/0 | 8,398/712 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 3 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yerrabelli_2021.pdf` | Yerrabelli RS et al., IntraOmmaya compartmental radioimmunoth…, European journal of nuclear… (2021) | popPK | 9 | [10.1007/s00259-020-05050-z](https://doi.org/10.1007/s00259-020-05050-z) | [33047248](https://pubmed.ncbi.nlm.nih.gov/33047248) | The paper describes a compartmental PK model for the subject drug, but the specific numeric parameter values (CL, V, etc.) are not listed in the provided text, likely residing in figures or supplementary material. |

<sub>queue written 2026-09-25T05:59:28.697760+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Gómez-Perales_2021 | irrelevant | 0 | 0 | no_text gate: only 59 chars of text extracted (&lt; 400) |
| PD | Gómez-Perales_2021 | not_relevant | 0 | 0 | The paper is a review discussing the concept of iodine allergy in nuclear medicine and does not report any pharmacodynamic or exposure-response data for omburtamab. |
| popPK | Prasad_2024 | relevant | 4 | 6 | The paper reports effective clearance half-lives (35.9–44.2 hours) for iodine_131i_omburtamab, which are quantitative disposition parameters, but it lacks a full compartmental PK model (CL, V, Q) and focuses primarily on radiation safety. |
| popPK | Yerrabelli_2021 | relevant | 9 | 2 | The paper describes a compartmental PK model for the subject drug, but the specific numeric parameter values (CL, V, etc.) are not listed in the provided text, likely residing in figures or supplementary material. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
