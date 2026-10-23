<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02D&quot;,&quot;href&quot;:&quot;atc/C02D.md&quot;},{&quot;label&quot;:&quot;endralazine&quot;}]"></div>

# endralazine

- **generic name:** endralazine
- **ATC codes:** `C02DB03`
- **DrugBank:** [DB13435](https://go.drugbank.com/drugs/DB13435) · **PubChem:** none
- **molar mass:** 269.308 g/mol (C14H15N5O) — DrugBank
- **groups:** experimental

## About

Endralazine is a hydrazinophthalazine vasodilator that was developed as an antihypertensive drug to lower blood pressure. It is considered experimental and does not appear to be an approved medicine today, so its current availability is unclear.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5376588](https://www.wikidata.org/wiki/Q5376588) and the WHO ATC classification; not checked by a person.</small>

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
| 2026-10-06 13:21 | 1:04 | 0/0/0 | 0/0/0 | 0/0/0 | 8,179/500 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 23 matched, 22 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Meredith_1983.pdf` | Meredith PA et al., The pharmacokinetics of endralazine in…, British journal of clinical… (1983) | popPK | 10 | [10.1111/j.1365-2125.1983.tb02139.x](https://doi.org/10.1111/j.1365-2125.1983.tb02139.x) | [6882620](https://pubmed.ncbi.nlm.nih.gov/6882620) | The abstract explicitly reports quantitative pharmacokinetic parameters including terminal elimination half-life, oral bioavailability, and clearance for endralazine in human subjects. |
| `Reece_1983.pdf` | Reece PA et al., Endralazine - a new hydralazine-like an…, European journal of clinica… (1983) | popPK | 10 | [10.1007/BF00542127](https://doi.org/10.1007/BF00542127) | [6653651](https://pubmed.ncbi.nlm.nih.gov/6653651) | The study reports pharmacokinetic parameters for endralazine in humans, but the specific numeric values are not present in the provided evidence text. |
| `Reece_1982.pdf` | Reece PA et al., Influence of acetylator phenotype on th…, European journal of clinica… (1982) | popPK | 9 | [10.1007/BF00637500](https://doi.org/10.1007/BF00637500) | [7160421](https://pubmed.ncbi.nlm.nih.gov/7160421) | The study reports quantitative PK parameters (half-life, AUC) for endralazine in humans, but specific clearance and volume values are not explicitly listed in the provided text. |
| `Elliott_1984.pdf` | Elliott HL et al., Clinical pharmacological studies with t…, International journal of cl… (1984) | popPK | 8 |  | [6469433](https://pubmed.ncbi.nlm.nih.gov/6469433) | The study reports quantitative pharmacokinetic parameters (half-life, bioavailability) for endralazine in humans, though specific clearance or volume values are not explicitly listed in the provided text. |
| `Elliott_1984_3.pdf` | Elliott HL et al., Clinical pharmacological studies with t…, European journal of clinica… (1984) | popPK | 8 | [10.1007/BF00544039](https://doi.org/10.1007/BF00544039) | [6499896](https://pubmed.ncbi.nlm.nih.gov/6499896) | The study reports quantitative pharmacokinetic parameters (terminal elimination half-life) for endralazine in humans, but lacks explicit values for clearance (CL) or volume of distribution (V). |

<sub>queue written 2026-10-06 13:21 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bogers_1983 | irrelevant | 0 | 0 | The paper is a clinical safety and efficacy study reporting blood pressure changes and side effects, with no pharmacokinetic parameters or quantitative disposition data for endralazine. |
| PD | Bogers_1983 | not_relevant | 1 | 0 | The paper reports only clinical efficacy (blood pressure reduction) and safety over 3 years without any pharmacokinetic data, concentration-effect analysis, or numeric PD parameters. |
| popPK | Chazan_1986 | irrelevant | 0 | 0 | The paper is a clinical efficacy study comparing blood pressure outcomes and does not report any pharmacokinetic parameters for endralazine. |
| PD | Chazan_1986 | not_relevant | 1 | 0 | The paper reports a clinical comparison of efficacy and tolerance but does not provide concentration-effect data, dose-response curves, or numeric PD parameters (e.g., Emax, EC50). |
| PD | Elliott_1984 | not_relevant | 2 | 1 | The paper reports qualitative dose-response effects (BP changes at 5/10 mg) and PK parameters, but does not provide numeric PD parameters (Emax, EC50) or a concentration-effect curve. |
| PD | Elliott_1984_2 | not_relevant | 2 | 1 | The paper reports qualitative blood pressure changes and PK parameters (half-life, bioavailability) but does not provide a concentration-effect curve, dose-response model, or numeric PD parameters like Emax or EC50. |
| PD | Elliott_1984_3 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic parameters (half-life, AUC) and their correlation with renal function, with no data on pharmacodynamic effects (e.g., blood pressure) or exposure-response relationships. |
| popPK | Elliott_1984_4 | irrelevant | 0 | 0 | no_text gate: only 31 chars of text extracted (&lt; 400) |
| popPK | Hauger-Klevene_1986 | irrelevant | 0 | 0 | The study is a clinical efficacy trial comparing blood pressure and side effects, reporting no pharmacokinetic parameters for endralazine. |
| PD | Hauger-Klevene_1986 | not_relevant | 1 | 0 | The paper reports qualitative comparative efficacy and side-effect profiles but provides no numeric concentration-effect data, dose-response curves, or PD parameters (Emax, EC50) for endralazine. |
| popPK | Holmes_1983 | irrelevant | 0 | 0 | The paper is a clinical efficacy study focusing on blood pressure response and acetylator status, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Holmes_1983 | not_relevant | 1 | 0 | The paper reports clinical blood pressure outcomes based on acetylator status but does not provide plasma concentration data or a quantitative exposure-response/dose-response model with numeric PD parameters. |
| popPK | Izotov_1984 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic effects (hemodynamics) rather than pharmacokinetic parameters, and no PK values are reported. |
| PD | Izotov_1984 | not_relevant | 2 | 0 | The text describes a methodological approach for qualitative assessment of single-dose effects using Dixon's criterion but does not report specific numeric PD parameters (Emax, EC50) or quantitative exposure-response curves for endralazine. |
| popPK | Kindler_1981 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting blood pressure changes and side effects, with no pharmacokinetic parameters or quantitative disposition data for endralazine. |
| PD | Kindler_1981 | not_relevant | 2 | 1 | The text describes a clinical trial with qualitative dose titration and blood pressure outcomes but does not report any concentration-effect data, PK/PD modeling, or numeric PD parameters (e.g., EC50, Emax). |
| popPK | Kindler_1987 | irrelevant | 4 | 2 | The study reports only relative changes in peak concentration and AUC due to food intake, without providing absolute quantitative disposition parameters like clearance, volume of distribution, or half-life. |
| popPK | Kirch_1982 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial comparing blood pressure control and side effects, reporting no pharmacokinetic parameters for endralazine. |
| PD | Kirch_1982 | not_relevant | 1 | 0 | The paper is a clinical trial comparing efficacy and safety but does not report pharmacokinetic data, concentration-effect relationships, or numeric PD parameters. |
| popPK | Oates_1981 | irrelevant | 1 | 0 | The study is a pharmacodynamic evaluation of blood pressure and renin activity in rats, reporting no quantitative pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Quyyumi_1984 | irrelevant | 0 | 0 | The study reports hemodynamic and functional outcomes (cardiac output, resistance) rather than pharmacokinetic parameters (CL, V, ka) for endralazine. |
| popPK | Reece_1983 | relevant | 10 | 0 | The study reports pharmacokinetic parameters for endralazine in humans, but the specific numeric values are not present in the provided evidence text. |
| popPK | Weidmann_1983 | irrelevant | 0 | 0 | The paper is a clinical review of hypertension management that mentions endralazine only as a therapeutic option, without reporting any pharmacokinetic parameters. |
| PD | Weidmann_1983 | not_relevant | 0 | 0 | The text is a general clinical review of hypertension management in 1983 and mentions endralazine only as a drug option in triple therapy, without providing any pharmacokinetic, pharmacodynamic, or exposure-response data. |
| popPK | Wu_1986 | irrelevant | 1 | 0 | The paper is a clinical efficacy study reporting blood pressure changes and adverse effects, with no quantitative pharmacokinetic parameters (CL, V, ka, etc.) provided for endralazine. |
| PD | Wu_1986 | not_relevant | 2 | 1 | The paper reports clinical dose titration and blood pressure changes but lacks concentration data or a formal dose-response model with numeric PD parameters like Emax or EC50. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bendralazine%5D&body=Drug%3A%20endralazine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_endralazine/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
