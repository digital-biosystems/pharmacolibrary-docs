<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;vedolizumab&quot;}]"></div>

# vedolizumab

- **generic name:** vedolizumab
- **ATC codes:** `L04AG05`
- **DrugBank:** [DB09033](https://go.drugbank.com/drugs/DB09033) · **PubChem:** none
- **groups:** approved, investigational

## About

Vedolizumab is a monoclonal antibody immunosuppressant used to treat ulcerative colitis and Crohn's disease. It is authorised in the European Union and is also being investigated for other conditions such as graft-versus-host disease.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7918002](https://www.wikidata.org/wiki/Q7918002) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL | 0.008333 | L/h | 0.200 L/day | adults with ulcerative colitis or Crohn's disease and healthy volunteers | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Rosario_2017_reference](drugs/drug_vedolizumab/Vedolizumab_Rosario2017_reference.md) |
| V | V | 4.05 | L | 4.05 L | adults with ulcerative colitis or Crohn's disease and healthy volunteers | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Rosario_2017_reference](drugs/drug_vedolizumab/Vedolizumab_Rosario2017_reference.md) |
| t½ | t1/2z | 343.2 | h | 14.3 day | adults with ulcerative colitis or Crohn's disease and healthy volunteers | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Rosario_2017_reference](drugs/drug_vedolizumab/Vedolizumab_Rosario2017_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C1_half_life_beta failed (ratio 0.5504)</sub> | [Rosario_2017_reference](drugs/drug_vedolizumab/Vedolizumab_Rosario2017_reference.md) | — | 1-compartment (no model) | 8 | Rosario M et al., A Review of the Clinical Pharmacokineti…, Clinical pharmacokinetics (2017) | [10.1007/s40262-017-0546-0](https://doi.org/10.1007/s40262-017-0546-0) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Hanzel_2022_reference](drugs/drug_vedolizumab/Vedolizumab_Hanzel2022_reference.md) | — | nonlinear / manual (no model) | 0 | Hanzel J et al., Pharmacokinetic-Pharmacodynamic Model o…, Inflammatory bowel diseases (2022) | [10.1093/ibd/izab143](https://doi.org/10.1093/ibd/izab143) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Okamoto_2021_reference](drugs/drug_vedolizumab/Vedolizumab_Okamoto2021_reference.md) | — | 2-compartment (no model) | 6 (+7 cov.) | Okamoto H et al., Population pharmacokinetics of vedolizu…, Intestinal research (2021) | [10.5217/ir.2019.09167](https://doi.org/10.5217/ir.2019.09167) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Rosario_2015_reference](drugs/drug_vedolizumab/Vedolizumab_Rosario2015_reference.md) | — | 1-compartment (no model) | 0 | Rosario M et al., Population pharmacokinetics-pharmacodyn…, Alimentary pharmacology & t… (2015) | [10.1111/apt.13243](https://doi.org/10.1111/apt.13243) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Waterhouse_2024_reference](drugs/drug_vedolizumab/Vedolizumab_Waterhouse2024_reference.md) | — | 1-compartment (no model) | 1 | Waterhouse T et al., Population pharmacokinetic modeling of…, Pharmacology research & per… (2024) | [10.1002/prp2.1257](https://doi.org/10.1002/prp2.1257) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Hanzel_2022_ENDREM](drugs/drug_vedolizumab/pd_Hanzel_2022_ENDREM.md) | Endoscopic remission (Simple Endoscopic Score for CD &lt; 4) ← vedolizumab · categorical (graded) response model | — | Hanzel J et al., Pharmacokinetic-Pharmacodynamic Model o…, Inflammatory bowel diseases (2022) | [10.1093/ibd/izab143](https://doi.org/10.1093/ibd/izab143) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Vande_2022_Mucosal_healing](drugs/drug_vedolizumab/pd_Vande_2022_Mucosal_healing.md) | Mucosal healing ← vedolizumab · categorical (graded) response model | — | Vande Casteele N et al., Real-world multicentre observational st…, Alimentary pharmacology & t… (2022) | [10.1111/apt.16937](https://doi.org/10.1111/apt.16937) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=vedolizumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: ITGA4 (antibody), ITGB7 (antibody).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:06 | 1:50 | 1/4/0 | 2/0/0 | 0/0/0 | 207,129/8,804 | einfracz / qwen3.8-27b | 8 | 1/7 | 8/0 | 1 |

## Coverage

- **PubMed hits:** 29 matched, 16 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 5  ·  extracted 0  ·  needs review 1  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Colman_2023.pdf` | Colman RJ et al., Real world population pharmacokinetic s…, Alimentary pharmacology & t… (2023) | popPK | 10 | [10.1111/apt.17277](https://doi.org/10.1111/apt.17277) | [36314265](https://pubmed.ncbi.nlm.nih.gov/36314265) | The paper describes a population pharmacokinetic study for vedolizumab in children and identifies a two-compartment model, but specific numeric parameter values (CL, V, Q, etc.) are not provided in the extracted evidence. |
| `Kimura_2026.pdf` | Kimura K et al., Pharmacokinetic and pharmacodynamic mod…, The Journal of pharmacy and… (2026) | popPK | 9 | [10.1093/jpp/rgaf123](https://doi.org/10.1093/jpp/rgaf123) | [41400216](https://pubmed.ncbi.nlm.nih.gov/41400216) | This is a population PK/PD modeling study for vedolizumab, but the specific numeric parameter values (CL, V, etc.) are likely in the full text/tables which are not provided in the evidence block, only the modeling methods and statistical quality metrics. |
| `DHaens_2024.pdf` | D'Haens G et al., Exposure-efficacy relationship of vedol…, Expert review of clinical p… (2024) | popPK | 6 | [10.1080/17512433.2024.2318465](https://doi.org/10.1080/17512433.2024.2318465) | [38441048](https://pubmed.ncbi.nlm.nih.gov/38441048) | The paper discusses a population PK model for vedolizumab and reports exposure metrics (Cav,ss, Ctrough,ss), but specific numeric parameter values (CL, V) are not explicitly stated in the provided evidence, likely residing in the referenced prior model or figures. |

<sub>queue written 2026-10-07 01:05 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Colman_2023 | relevant | 10 | 2 | The paper describes a population pharmacokinetic study for vedolizumab in children and identifies a two-compartment model, but specific numeric parameter values (CL, V, Q, etc.) are not provided in the extracted evidence. |
| popPK | DHaens_2024 | relevant | 6 | 2 | The paper discusses a population PK model for vedolizumab and reports exposure metrics (Cav,ss, Ctrough,ss), but specific numeric parameter values (CL, V) are not explicitly stated in the provided evidence, likely residing in the referenced prior model or figures. |
| popPK | Hanzel_2022_2 | irrelevant | 0 | 0 | The paper is a corrigendum correcting a reference citation and contains no original pharmacokinetic data or numeric parameters. |
| popPK | Kimura_2026 | relevant | 9 | 4 | This is a population PK/PD modeling study for vedolizumab, but the specific numeric parameter values (CL, V, etc.) are likely in the full text/tables which are not provided in the evidence block, only the modeling methods and statistical quality metrics. |
| popPK | Roblin_2024 | irrelevant | 0 | 0 | The paper is a review of therapeutic drug monitoring strategies for various biologics in IBD and does not report quantitative pharmacokinetic parameter values (CL, V, etc.) for vedolizumab. |
| popPK | Soler_2009 | irrelevant | 0 | 0 | The paper describes in vitro binding specificity and adhesion assays (EC50/IC50) rather than in vivo pharmacokinetic disposition parameters. |
| popPK | Steenholdt_2025 | irrelevant | 0 | 0 | The study is a retrospective cohort analyzing clinical outcomes and TDM failure mechanisms, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume for vedolizumab. |
| popPK | Vande_2022 | irrelevant | 0 | 0 | The provided text is software metadata and does not contain any pharmacokinetic data for vedolizumab. |
| popPK | unknown_2015 | irrelevant | 2 | 0 | This is a corrigendum for a relevant paper but contains no quantitative PK parameter values (CL, V, etc.) to extract. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvedolizumab%5D&body=Drug%3A%20vedolizumab%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_vedolizumab/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 01:05 UTC</sub>
