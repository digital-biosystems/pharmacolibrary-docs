<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;vortioxetine&quot;}]"></div>

# vortioxetine

- **generic name:** vortioxetine
- **ATC codes:** `N06AX26`
- **DrugBank:** [DB09068](https://go.drugbank.com/drugs/DB09068) · **PubChem:** [CID 71768094](https://pubchem.ncbi.nlm.nih.gov/compound/71768094)
- **molar mass:** 298.45 g/mol (C18H22N2S) — DrugBank
- **groups:** approved, investigational

## About

Vortioxetine is an antidepressant used to treat major depressive disorder and, according to some sources, anxiety. It is authorised in the European Union and is used as an approved medicine, though it also remains under investigation for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3563148](https://www.wikidata.org/wiki/Q3563148) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| vortioxetine | parent | 298.45 | C18H22N2S | DrugBank | [71768094](https://pubchem.ncbi.nlm.nih.gov/compound/71768094) | Areberg_2014_2, Frederiksen_2021_2, Miao_2019_2, Naik_2016_2 |
| Lu AA34443 | metabolite | 328.43 | C18H20N2O2S | PubChem | [118753351](https://pubchem.ncbi.nlm.nih.gov/compound/118753351) | Frederiksen_2021_2 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 42 | L/h | 42 L/hr | patients with major depressive disorder | 3160 | human | <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> | [Naik_2016_2_reference](drugs/drug_vortioxetine/Vortioxetine_Naik2016v2_reference.md) |
| V | V1 | 1510 | L | 1510 L | adults | 1140 | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Frederiksen_2021_2_reference](drugs/drug_vortioxetine/Vortioxetine_Frederiksen2021v2_reference.md) |
| ka | kabs | 0.16 | 1/h | 0.160 1/h | adults | 1140 | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Frederiksen_2021_2_reference](drugs/drug_vortioxetine/Vortioxetine_Frederiksen2021v2_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Not simulated" data-sim="no"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>stale — current check: Not simulated</sub> | [Frederiksen_2021_2_reference](drugs/drug_vortioxetine/Vortioxetine_Frederiksen2021v2_reference.md) | held back | 1-compartment, oral | 11 (+4 cov.) | Frederiksen T et al., Quantification of In Vivo Metabolic Act…, Clinical pharmacology and t… (2021) | [10.1002/cpt.1972](https://doi.org/10.1002/cpt.1972) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Needs review</sub><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Naik_2016_2_reference](drugs/drug_vortioxetine/Vortioxetine_Naik2016v2_reference.md) | — | 1-compartment (no model) | 1 | Naik H et al., A Population Pharmacokinetic-Pharmacody…, Basic & clinical pharmacolo… (2016) | [10.1111/bcpt.12513](https://doi.org/10.1111/bcpt.12513) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Areberg_2014_2_reference](drugs/drug_vortioxetine/Vortioxetine_Areberg2014v2_reference.md) | — | 1-compartment (no model) | 2 (+2 cov.) | Areberg J et al., Population pharmacokinetic meta-analysi…, Basic & clinical pharmacolo… (2014) | [10.1111/bcpt.12256](https://doi.org/10.1111/bcpt.12256) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Miao_2019_2_pooled_healthy_subjects_22_a](drugs/drug_vortioxetine/Vortioxetine_Miao2019v2_pooled_healthy_subjects_22_a.md) | — | 1-compartment (no model) | 4 | Miao J et al., Pharmacokinetics and Safety of Vortioxe…, Advances in therapy (2019) | [10.1007/s12325-019-01092-4](https://doi.org/10.1007/s12325-019-01092-4) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [↳ pooled_mdd_gad_patients_23_b](drugs/drug_vortioxetine/Vortioxetine_Miao2019v2_pooled_mdd_gad_patients_23_b.md) | — | 1-compartment (no model) | 3 |  |  |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Wilson_2015_ROL](drugs/drug_vortioxetine/pd_Wilson_2015_ROL.md) | REM onset latency ← vortioxetine · direct sigmoid Emax (Hill) effect | model (no simulator) | Wilson S et al., Differentiated effects of the multimoda…, Journal of psychopharmacolo… (2015) | [10.1177/0269881115599387](https://doi.org/10.1177/0269881115599387) |
| <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Wilson_2015_S1](drugs/drug_vortioxetine/pd_Wilson_2015_S1.md) | Sleep stage 1 ← vortioxetine · direct linear effect | model (no simulator) | Wilson S et al., Differentiated effects of the multimoda…, Journal of psychopharmacolo… (2015) | [10.1177/0269881115599387](https://doi.org/10.1177/0269881115599387) |
| <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Wilson_2015_WASO](drugs/drug_vortioxetine/pd_Wilson_2015_WASO.md) | Wake after sleep onset ← vortioxetine · direct linear effect | model (no simulator) | Wilson S et al., Differentiated effects of the multimoda…, Journal of psychopharmacolo… (2015) | [10.1177/0269881115599387](https://doi.org/10.1177/0269881115599387) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Naik_2016_2_MADRS](drugs/drug_vortioxetine/pd_Naik_2016_2_MADRS.md) | change in MADRS score from baseline ← vortioxetine · direct Emax (saturable) effect | model (no simulator) | Naik H et al., A Population Pharmacokinetic-Pharmacody…, Basic & clinical pharmacolo… (2016) | [10.1111/bcpt.12513](https://doi.org/10.1111/bcpt.12513) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Wilson_2015_TREM](drugs/drug_vortioxetine/pd_Wilson_2015_TREM.md) | Total REM sleep ← vortioxetine · direct Emax (saturable) effect | model (no simulator) | Wilson S et al., Differentiated effects of the multimoda…, Journal of psychopharmacolo… (2015) | [10.1177/0269881115599387](https://doi.org/10.1177/0269881115599387) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:06 | 2:29 | 1/3/1 | 1/0/1 | 0/0/0 | 159,223/17,419 | einfracz / qwen3.8-27b | 16 | 0/6 | 6/0 | 0 |

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 5  ·  extracted 1  ·  needs_review 1  ·  rejected 3  ·  stale 5
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Naik_2016_2.pdf` | Naik H et al., A Population Pharmacokinetic-Pharmacody…, Basic & clinical pharmacolo… (2016) | popPK | 10 | [10.1111/bcpt.12513](https://doi.org/10.1111/bcpt.12513) | [26525043](https://pubmed.ncbi.nlm.nih.gov/26525043) | The study reports quantitative population PK parameters (CL/F, Vc) and model structure for vortioxetine in the abstract. |

<sub>queue written 2026-10-07T19:05:04.864619+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bundgaard_2016 | irrelevant | 3 | 2 | This is a preclinical mouse study focusing on P-gp transport at the blood-brain barrier, providing Kp,uu and exposure ratios rather than standard population PK parameters (CL, V, ka) for vortioxetine. |
| PD | Bundgaard_2016 | not_relevant | 1 | 0 | The paper focuses on P-gp transport and brain distribution (PK) of vortioxetine, reporting no concentration-effect or dose-response PD parameters for the drug itself. |
| popPK | Frederiksen_2021 | relevant | 9 | 0 | This is a human clinical study (TDM) using a quantitative population pharmacokinetic model for vortioxetine, but the specific numeric PK parameter values (CL, V, Q, ka) are not listed in the provided text, being deferred to the original publication (Frederiksen et al. [12]) or supplementary material. |
| popPK | Frederiksen_2023 | relevant | 4 | 0 | The study uses a population PK model for vortioxetine but reports only qualitative CYP2D6 activity comparisons, with specific numeric PK parameter values likely contained in the cited supplementary material or original references not provided here. |
| popPK | Frederiksen_2023_2 | irrelevant | 2 | 0 | The paper is a review discussing CYP2D6 genotype-phenotype translation and cites popPK studies of vortioxetine, but it does not report the quantitative PK parameter values (CL, V, etc.) for vortioxetine itself. |
| popPK | Ratajczak_2019 | irrelevant | 0 | 0 | The study is a behavioral efficacy assessment in rats and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for vortioxetine. |
| popPK | Wilson_2015 | relevant | 8 | 2 | The study reports PK/PD for vortioxetine using a sparse sampling strategy where PK parameters were fixed from a previously developed population model (Areberg et al., 2012b), so specific numeric PK values (CL, V, Q) are not present in the text, only estimated average concentrations. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 19:05 UTC</sub>
