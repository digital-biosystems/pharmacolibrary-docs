<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C04A&quot;,&quot;href&quot;:&quot;atc/C04A.md&quot;},{&quot;label&quot;:&quot;ergoloid mesylates&quot;}]"></div>

# ergoloid mesylates

- **generic name:** ergoloid mesylates
- **ATC codes:** `C04AE01`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Ergoloid mesylates are ergot alkaloid derivatives used as vasodilators for peripheral vascular problems and also described as nootropics. They are classified in the ATC system as peripheral vasodilators, but no specific marketing or approval information is available.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4161323](https://www.wikidata.org/wiki/Q4161323) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 20:04 | 0:40 | 0/0/0 | 0/0/0 | 0/0/0 | 14,911/676 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
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
| `Lavène_1985.pdf` | Lavène D et al., Hydergine pharmacokinetics in the elder…, Journal de pharmacologie 16… (1985) | popPK | 10 | not captured | [4094443](https://pubmed.ncbi.nlm.nih.gov/4094443) | The study reports quantitative pharmacokinetic parameters (clearance, bioavailability) for Hydergine (ergoloid mesylates) in humans, but specific numeric values for CL, V, or t1/2 are not explicitly listed in the provided text, only percentage changes and ratios. |
| `Dominiak_1988.pdf` | Dominiak P et al., The absolute systemic availability of a…, European journal of clinica… (1988) | popPK | 9 | [10.1007/BF00555507](https://doi.org/10.1007/BF00555507) | [3146506](https://pubmed.ncbi.nlm.nih.gov/3146506) | The study reports quantitative pharmacokinetic parameters (clearance, bioavailability, Cmax) for ergoloid mesylates (co-dergocrine) in humans. |
| `Schran_1988.pdf` | Schran HF et al., Pharmacokinetics and bioavailability of…, Biopharmaceutics & drug dis… (1988) | popPK | 9 | [10.1002/bod.2510090404](https://doi.org/10.1002/bod.2510090404) | [3207855](https://pubmed.ncbi.nlm.nih.gov/3207855) | The study reports quantitative pharmacokinetic parameters (Cmax, Tmax, half-life) for ergoloid mesylates in humans, with specific numeric values provided in the text. |

<sub>queue written 2026-10-06T20:04:48.981699+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Berry_1961 | irrelevant | 0 | 0 | The study focuses on bacterial endotoxins, renal function, and nitrogen metabolism in mice, with no pharmacokinetic data for ergoloid mesylates. |
| popPK | Bicalho_2008 | irrelevant | 2 | 1 | The study reports only Cmax values for a single volunteer without calculating clearance, volume, or half-life, and the drug is dihydroergotoxine (a different ergot alkaloid mixture) rather than ergoloid mesylates. |
| popPK | Canaday_1995 | irrelevant | 0 | 0 | The paper is a case report on propantheline bromide for hyperhidrosis, and ergoloid mesylates is only mentioned in passing as a historical treatment without any pharmacokinetic data. |
| PD | Canaday_1995 | not_relevant | 0 | 0 | The paper is a case report and literature review on propantheline bromide for hyperhidrosis; it mentions ergoloid mesylates only in passing regarding congenital hyperhidrosis and provides no PK/PD data or numeric parameters for ergoloid mesylates. |
| popPK | DEUTSCH_1953 | irrelevant | 0 | 0 | no_text gate: only 69 chars of text extracted (&lt; 400) |
| popPK | Hollister_1986 | irrelevant | 0 | 0 | The paper is a review of drug therapy for Alzheimer's disease and does not report any quantitative pharmacokinetic parameters for ergoloid mesylates. |
| PD | Hollister_1986 | not_relevant | 1 | 0 | The text is a qualitative review discussing the clinical use and status of ergoloid mesylates in Alzheimer's disease without providing any numeric pharmacodynamic parameters, dose-response curves, or PK/PD modeling data. |
| popPK | Lavène_1985 | relevant | 10 | 2 | The study reports quantitative pharmacokinetic parameters (clearance, bioavailability) for Hydergine (ergoloid mesylates) in humans, but specific numeric values for CL, V, or t1/2 are not explicitly listed in the provided text, only percentage changes and ratios. |
| popPK | Lu_2006 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of ticlopidine, with ergoloid mesylates serving only as a co-administered agent to assess drug-drug interactions, and no PK parameters for ergoloid mesylates itself are reported. |
| popPK | Schneider_1994 | irrelevant | 0 | 0 | The paper is a meta-analysis of clinical efficacy trials for dementia and does not report any pharmacokinetic parameters. |
| PD | Schneider_1994 | not_relevant | 2 | 1 | The paper is a meta-analysis reporting pooled effect sizes (Cohen's d) and a qualitative mention of a dose-response trend, but it does not provide numeric PD parameters (e.g., EC50, Emax) or an extractable concentration-effect curve. |
| popPK | Sharaf_2016 | irrelevant | 2 | 0 | The paper describes a bioanalytical method and mentions a PK study but provides no quantitative pharmacokinetic parameters (CL, V, t1/2) for ergoloid mesylates in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
