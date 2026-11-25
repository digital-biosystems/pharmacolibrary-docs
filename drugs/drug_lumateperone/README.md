<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;lumateperone&quot;}]"></div>

# lumateperone

- **generic name:** lumateperone
- **ATC codes:** `N05AD10`
- **DrugBank:** [DB06077](https://go.drugbank.com/drugs/DB06077) · **PubChem:** [CID 21302490](https://pubchem.ncbi.nlm.nih.gov/compound/21302490)
- **molar mass:** 393.506 g/mol (C24H28FN3O) — DrugBank
- **groups:** approved, investigational

## About

Lumateperone is an antipsychotic medication belonging to the butyrophenone class. The drug is approved for clinical use.

<small>⚠️ **Unverified** — written by `qwen3.8-27b` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Wu_2022_mean_weight_gain](drugs/drug_lumateperone/pd_Wu_2022_mean_weight_gain.md) | mean weight gain ← dose · stimulation effect | — | Wu H et al., Antipsychotic-Induced Weight Gain: Dose…, Schizophrenia bulletin (2022) | [10.1093/schbul/sbac001](https://doi.org/10.1093/schbul/sbac001) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 02:29 | 0:09 | 0/0/0 | 1/0/0 | 0/0/0 | 6,041/989 | einfracz / qwen3.8-27b | 3 | 0/3 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chen_2025 | irrelevant | 0 | 0 | This is a dose-response meta-analysis of clinical efficacy and safety in schizophrenia, reporting no pharmacokinetic parameters. |
| PGx | Chen_2025 | not_relevant | 0 | 0 | The paper reports dose-response relationships for efficacy and safety in a general population, containing no data on genetic variants or pharmacogenomics. |
| popPK | Chen_2026 | irrelevant | 0 | 0 | no_text gate: only 197 chars of text extracted (&lt; 400) |
| PGx | Chen_2026 | not_relevant | 0 | 0 | The text refers to a statistical critique of a meta-analysis on lumateperone's dose-response efficacy, containing no pharmacogenomic data or analysis of PK/PD parameters. |
| popPK | Furukawa_2026 | irrelevant | 0 | 0 | This is a dose-response efficacy meta-analysis of antipsychotics; no PK parameters (CL, V, ka, half-life) for lumateperone are reported. |
| popPK | Hsu_2025 | irrelevant | 0 | 0 | This is a dose-response efficacy/safety meta-analysis of lumateperone in bipolar depression with no PK parameters (CL, V, ka, half-life, or population-PK model) reported. |
| popPK | Lin_2025 | irrelevant | 0 | 0 | This is a dose–response meta-analysis of prolactin changes, not a PK study; no lumateperone disposition parameters (CL, V, ka, half-life) are reported. |
| popPK | Mishra_2026 | irrelevant | 2 | 0 | The paper describes a mechanistic pharmacodynamic systems pharmacology model focused on receptor binding and therapeutic response, not a quantitative population pharmacokinetic model reporting disposition parameters (CL, V, Q, ka) for lumateperone. |
| PGx | Mishra_2026 | not_relevant | 0 | 0 | The paper reports pharmacokinetic and pharmacodynamic parameters of lumateperone, but it does not investigate how a specific gene variant or genotype modifies these parameters. |
| popPK | Tan_2024 | irrelevant | 0 | 0 | The paper describes in-vitro pharmacological screening for ferroptosis inhibition in cell lines, not a pharmacokinetic study of lumateperone. |
| PGx | Tan_2024 | not_relevant | 0 | 0 | The paper reports lumateperone as a ferroptosis inhibitor in a cell-based screen, not a pharmacogenomic effect on its PK or PD parameters. |
| popPK | Terao_2026 | irrelevant | 0 | 0 | no_text gate: only 190 chars of text extracted (&lt; 400) |
| PGx | Terao_2026 | not_relevant | 0 | 0 | The paper discusses dose-response meta-analysis and statistical limitations, but does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Tian_2025 | irrelevant | 0 | 0 | This is a dose-response meta-analysis of discontinuation outcomes, not a PK study reporting clearance, volume, or population-PK parameters for lumateperone. |
| popPK | Wu_2022 | irrelevant | 0 | 0 | The paper is a meta-analysis of weight gain (efficacy/safety) and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for lumateperone. |
| PGx | Wu_2022 | not_relevant | 0 | 0 | The paper is a dose-response meta-analysis for weight gain and does not contain any pharmacogenomic data or gene variant analysis. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blumateperone%5D&body=Drug%3A%20lumateperone%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_lumateperone/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
