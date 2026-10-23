<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;Sutezolid&quot;}]"></div>

# Sutezolid

- **generic name:** Sutezolid
- **ATC codes:** none (no WHO ATC code)
- **DrugBank:** [DB11905](https://go.drugbank.com/drugs/DB11905) · **PubChem:** [CID 465951](https://pubchem.ncbi.nlm.nih.gov/compound/465951)
- **molar mass:** 353.41 g/mol (C16H20FN3O3S) — DrugBank
- **groups:** investigational

## About

**Description.** Sutezolid has been used in trials studying the treatment of Tuberculosis.

<p><small>Source: <a href="https://go.drugbank.com/drugs/DB11905">DrugBank DB11905</a> · <a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a></small></p>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Heinrich_2025_time_to_positivity](drugs/drug_sutezolid/pd_Heinrich_2025_time_to_positivity.md) | mycobacterial load ← sutezolid · direct linear effect | — | Heinrich N et al., Sutezolid in combination with bedaquili…, The Lancet. Infectious dise… (2025) | [10.1016/S1473-3099(25)00213-0](https://doi.org/10.1016/S1473-3099(25)00213-0) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-22 10:18 | 1:13 | 0/0/0 | 1/0/0 | 0/0/0 | 45,209/1,551 | einfracz / qwen3.8-27b | 2 | 1/1 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 2  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kim_2020.pdf` | Kim S et al., Pharmacokinetics of tedizolid, sutezoli…, European journal of pharmac… (2020) | popPK | 8 | [10.1016/j.ejps.2020.105421](https://doi.org/10.1016/j.ejps.2020.105421) | [32531349](https://pubmed.ncbi.nlm.nih.gov/32531349) | The study models sutezolid PK in non-human primates but the specific numeric parameter values are not present in the provided text, likely residing in figures or supplementary material. |
| `Zhu_2014.pdf` | Zhu T et al., Population pharmacokinetic/pharmacodyna…, Antimicrobial agents and ch… (2014) | popPK | 8 | [10.1128/AAC.01920-13](https://doi.org/10.1128/AAC.01920-13) | [24687496](https://pubmed.ncbi.nlm.nih.gov/24687496) | The study is a population PK/PD analysis for sutezolid in humans, but the specific PK parameter values (CL, V, etc.) are not explicitly listed in the provided abstract text. |

<sub>queue written 2026-10-22 10:18 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alsultan_2017 | irrelevant | 3 | 0 | The paper reports population PK parameters for AZD-5847, not sutezolid, which is used only as a comparator in simulations. |
| popPK | Heinrich_2025 | irrelevant | 4 | 2 | This is a dose-finding clinical trial reporting standard PK exposure metrics (AUC, Cmax) rather than quantitative compartmental parameters (CL, V, ka) or a population PK model. |
| popPK | Karpiuk_2017 | irrelevant | 0 | 0 | The paper is a review of new oxazolidinone agents in clinical trials and does not report original quantitative pharmacokinetic parameter values for sutezolid. |
| popPK | Kim_2020 | relevant | 8 | 1 | The study models sutezolid PK in non-human primates but the specific numeric parameter values are not present in the provided text, likely residing in figures or supplementary material. |
| popPK | Koele_2025 | irrelevant | 0 | 0 | This is a pharmacodynamic study analyzing QTc prolongation, not a pharmacokinetic study reporting disposition parameters for sutezolid. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The paper is a review of TB chemotherapy progress that mentions Sutezolid as a new agent but provides no quantitative pharmacokinetic parameters. |
| popPK | Zhu_2014 | relevant | 8 | 2 | The study is a population PK/PD analysis for sutezolid in humans, but the specific PK parameter values (CL, V, etc.) are not explicitly listed in the provided abstract text. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsutezolid%5D&body=Drug%3A%20sutezolid%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_sutezolid/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
