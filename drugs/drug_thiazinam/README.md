<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R06A&quot;,&quot;href&quot;:&quot;atc/R06A.md&quot;},{&quot;label&quot;:&quot;thiazinam&quot;}]"></div>

# thiazinam

- **generic name:** thiazinam
- **ATC codes:** `R06AD06`
- **DrugBank:** [DB13420](https://go.drugbank.com/drugs/DB13420) · **PubChem:** none
- **molar mass:** 299.46 g/mol (C18H23N2S) — DrugBank
- **groups:** experimental

## About

Thiazinam is a phenothiazine-derivative antihistamine for systemic use, intended for allergic and related respiratory conditions. It appears only as an experimental compound, with no marketing authorisation, so it is not in routine clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7783885](https://www.wikidata.org/wiki/Q7783885) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Holford_1987_FEV1](drugs/drug_thiazinam/pd_Holford_1987_FEV1.md) | bronchodilator response (expressed as % predicted FEV1) ← thiazinamium · direct sigmoid Emax (Hill) effect | — | Holford NH et al., Pharmacokinetics and pharmacodynamics o…, European journal of clinica… (1987) | [10.1007/BF00637555](https://doi.org/10.1007/BF00637555) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Holford_1987_HR](drugs/drug_thiazinam/pd_Holford_1987_HR.md) | anticholinergic activity, measured by the change in heart rate ← thiazinamium · direct sigmoid Emax (Hill) effect | — | Holford NH et al., Pharmacokinetics and pharmacodynamics o…, European journal of clinica… (1987) | [10.1007/BF00637555](https://doi.org/10.1007/BF00637555) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:45 | 0:36 | 0/0/0 | 1/0/0 | 0/0/0 | 19,473/1,630 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Holford_1987.pdf` | Holford NH et al., Pharmacokinetics and pharmacodynamics o…, European journal of clinica… (1987) | popPK | 10 | [10.1007/BF00637555](https://doi.org/10.1007/BF00637555) | [2891535](https://pubmed.ncbi.nlm.nih.gov/2891535) | The abstract explicitly provides quantitative pharmacokinetic parameters (clearance, volume, rate constants) for thiazinamium in human patients. |
| `Jonkman_1983.pdf` | Jonkman JH et al., Clinical pharmacokinetics of intramuscu…, International journal of cl… (1983) | popPK | 10 |  | [6138313](https://pubmed.ncbi.nlm.nih.gov/6138313) | The abstract explicitly reports quantitative pharmacokinetic parameters including half-lives, volumes of distribution, and clearance for thiazinamium in humans. |
| `Labat_1989.pdf` | Labat C et al., Effects of thiazinamium chloride on hum…, Respiration; international… (1989) | pd | 4 | [10.1159/000195738](https://doi.org/10.1159/000195738) | [2574491](https://www.ncbi.nlm.nih.gov/pubmed/2574491) | metadata signals extractable PD data (concentration-effect) |

<sub>queue written 2026-10-07 21:45 UTC</sub>


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bthiazinam%5D&body=Drug%3A%20thiazinam%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_thiazinam/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
