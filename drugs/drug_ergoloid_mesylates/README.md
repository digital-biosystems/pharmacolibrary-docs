<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C04A&quot;,&quot;href&quot;:&quot;atc/C04A.md&quot;},{&quot;label&quot;:&quot;ergoloid mesylates&quot;}]"></div>

# ergoloid mesylates

- **generic name:** ergoloid mesylates
- **ATC codes:** `C04AE01`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-28 15:00 | 3:44 | 0/0/0 | 0/0/0 | 0/0/0 | 15,205/1,478 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dominiak_1988.pdf` | Dominiak P et al., The absolute systemic availability of a…, European journal of clinica… (1988) | popPK | 9 | [10.1007/BF00555507](https://doi.org/10.1007/BF00555507) | [3146506](https://pubmed.ncbi.nlm.nih.gov/3146506) | The study reports quantitative pharmacokinetic parameters (clearance, bioavailability, Cmax) for ergoloid mesylates (co-dergocrine) in humans. |
| `Lavène_1985.pdf` | Lavène D et al., Hydergine pharmacokinetics in the elder…, Journal de pharmacologie 16… (1985) | popPK | 9 | not captured | [4094443](https://pubmed.ncbi.nlm.nih.gov/4094443) | The paper reports quantitative pharmacokinetic parameters (clearance, bioavailability) for Hydergine (ergoloid mesylates) in humans, but the specific numeric values for clearance or volume are not explicitly listed in the provided text, only percentage changes and ratios. |
| `Schran_1988.pdf` | Schran HF et al., Pharmacokinetics and bioavailability of…, Biopharmaceutics & drug dis… (1988) | popPK | 8 | [10.1002/bod.2510090404](https://doi.org/10.1002/bod.2510090404) | [3207855](https://pubmed.ncbi.nlm.nih.gov/3207855) | The paper reports quantitative PK parameters (Cmax, Tmax, t1/2) for ergoloid mesylates in humans, though specific clearance or volume values are not explicitly listed in the provided text. |

<sub>queue written 2026-09-28T15:00:10.654097+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Berry_1961 | irrelevant | 0 | 0 | The paper studies bacterial endotoxins and renal function in mice, with no pharmacokinetic data for ergoloid mesylates. |
| popPK | Bicalho_2008 | irrelevant | 2 | 0 | The study reports only Cmax values for metabolites and parents without calculating or reporting standard disposition parameters like clearance, volume of distribution, or half-life. |
| popPK | Canaday_1995 | irrelevant | 0 | 0 | The paper is a case report on propantheline bromide for hyperhidrosis, and ergoloid mesylates is only mentioned in passing as a historical treatment without any pharmacokinetic data. |
| PD | Canaday_1995 | not_relevant | 0 | 0 | The paper is a case report and literature review on propantheline bromide for hyperhidrosis; it mentions ergoloid mesylates only in passing regarding congenital hyperhidrosis and provides no PK/PD data or numeric parameters for ergoloid mesylates. |
| popPK | DEUTSCH_1953 | irrelevant | 0 | 0 | no_text gate: only 69 chars of text extracted (&lt; 400) |
| popPK | Hollister_1986 | irrelevant | 0 | 0 | The paper is a review of drug therapy for Alzheimer's disease and does not report any quantitative pharmacokinetic parameters for ergoloid mesylates. |
| PD | Hollister_1986 | not_relevant | 1 | 0 | The text is a qualitative review discussing the clinical use and status of ergoloid mesylates in Alzheimer's disease without providing any numeric pharmacodynamic parameters, dose-response curves, or PK/PD modeling data. |
| popPK | Lavène_1985 | relevant | 9 | 2 | The paper reports quantitative pharmacokinetic parameters (clearance, bioavailability) for Hydergine (ergoloid mesylates) in humans, but the specific numeric values for clearance or volume are not explicitly listed in the provided text, only percentage changes and ratios. |
| popPK | Lu_2006 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of ticlopidine as the subject drug, with ergoloid mesylates acting only as a co-administered inhibitor/comparator. |
| popPK | Schneider_1994 | irrelevant | 0 | 0 | The paper is a meta-analysis of clinical efficacy in dementia and does not report any pharmacokinetic parameters for ergoloid mesylates. |
| PD | Schneider_1994 | not_relevant | 2 | 1 | The paper is a meta-analysis reporting pooled effect sizes (Cohen's d) and a qualitative mention of a dose-response trend, but it does not provide numeric PD parameters (e.g., EC50, Emax) or an extractable concentration-effect curve. |
| popPK | Sharaf_2016 | irrelevant | 2 | 0 | The paper describes a bioanalytical method validation and mentions a PK study application, but no quantitative pharmacokinetic parameters (CL, V, t1/2, etc.) for ergoloid mesylates are provided in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
