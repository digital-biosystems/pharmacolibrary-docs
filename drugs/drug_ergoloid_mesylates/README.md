<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C04A&quot;,&quot;href&quot;:&quot;atc/C04A.md&quot;},{&quot;label&quot;:&quot;ergoloid mesylates&quot;}]"></div>

# ergoloid mesylates

- **generic name:** ergoloid mesylates
- **ATC codes:** `C04AE01`
- **DrugBank:** none · **PubChem:** none
- **groups:** not captured

## About

Ergoloid mesylates are ergot alkaloid derivatives used as vasodilators for peripheral vascular problems and also described as nootropics. They are classified in the ATC system as peripheral vasodilators, but no specific marketing or approval information is available.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4161323](https://www.wikidata.org/wiki/Q4161323) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 20:04 | 0:40 | 0/0/0 | 0/0/0 | 0/0/0 | 14,911/676 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lavène_1985.pdf` | Lavène D et al., Hydergine pharmacokinetics in the elder…, Journal de pharmacologie 16… (1985) | popPK | 10 |  | [4094443](https://pubmed.ncbi.nlm.nih.gov/4094443) | The study reports quantitative pharmacokinetic parameters (clearance, bioavailability) for Hydergine (ergoloid mesylates) in humans, but specific numeric values for CL, V, or t1/2 are not explicitly listed in the provided text, only percentage changes and ratios. |
| `Dominiak_1988.pdf` | Dominiak P et al., The absolute systemic availability of a…, European journal of clinica… (1988) | popPK | 9 | [10.1007/BF00555507](https://doi.org/10.1007/BF00555507) | [3146506](https://pubmed.ncbi.nlm.nih.gov/3146506) | The study reports quantitative pharmacokinetic parameters (clearance, bioavailability, Cmax) for ergoloid mesylates (co-dergocrine) in humans. |
| `Schran_1988.pdf` | Schran HF et al., Pharmacokinetics and bioavailability of…, Biopharmaceutics & drug dis… (1988) | popPK | 9 | [10.1002/bod.2510090404](https://doi.org/10.1002/bod.2510090404) | [3207855](https://pubmed.ncbi.nlm.nih.gov/3207855) | The study reports quantitative pharmacokinetic parameters (Cmax, Tmax, half-life) for ergoloid mesylates in humans, with specific numeric values provided in the text. |

<sub>queue written 2026-10-06 20:04 UTC</sub>

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


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bergoloid_mesylates%5D&body=Drug%3A%20ergoloid_mesylates%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ergoloid_mesylates/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
