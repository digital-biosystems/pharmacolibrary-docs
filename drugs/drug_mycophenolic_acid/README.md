<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;mycophenolic acid&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;MycophenolicAcid_Wei2022_reference&quot;,&quot;label&quot;:&quot;Wei_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mycophenolic_acid/MycophenolicAcid_Wei2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# mycophenolic acid

- **generic name:** mycophenolic acid
- **ATC codes:** `L04AA06`
- **DrugBank:** [DB01024](https://go.drugbank.com/drugs/DB01024) · **PubChem:** [CID 446541](https://pubchem.ncbi.nlm.nih.gov/compound/446541)
- **molar mass:** 320.3371 g/mol (C17H20O6) — DrugBank
- **groups:** approved, investigational

## About

Mycophenolic acid is an immunosuppressant used to prevent organ transplant rejection and, according to Wikidata, also to treat lupus nephritis. It is an approved medicine, widely used in transplant medicine, and has also been studied for other investigational uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q420553](https://www.wikidata.org/wiki/Q420553) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| mycophenolic acid (mycophenolic_acid) | parent | 320.337 | C17H20O6 | DrugBank | [446541](https://pubchem.ncbi.nlm.nih.gov/compound/446541) | Heida_2024, Kauv_2025, Wei_2022 |
| mycophenolate mofetil | metabolite | 433.501 | C23H31NO7 | PubChem | [5281078](https://pubchem.ncbi.nlm.nih.gov/compound/5281078) | Wei_2022 |

## Start here

> **Wei_2022_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> pediatric patients after liver transplantation, n = 20. [Run it in the simulator](drugs/drug_mycophenolic_acid/MycophenolicAcid_Wei2022_reference.md?tab=Simulation) · [record](drugs/drug_mycophenolic_acid/MycophenolicAcid_Wei2022_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| V | V1/F | 6 | L | 6.0 L | pediatric patients after liver transplantation | 20 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Wei_2022_reference](drugs/drug_mycophenolic_acid/MycophenolicAcid_Wei2022_reference.md) |
| V | V1/F | 24.9 | L | 24.9 L | pediatric kidney transplant patients | 30 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Heida_2024_reference](drugs/drug_mycophenolic_acid/MycophenolicAcid_Heida2024_reference.md) |
| ka | kabs | 2 | 1/h | 2.0 h−1 | pediatric patients after liver transplantation | 20 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Wei_2022_reference](drugs/drug_mycophenolic_acid/MycophenolicAcid_Wei2022_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="V across studies"><text x="190" y="14" font-size="12" font-weight="600">V (L, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">1</text><line x1="365.0" y1="18" x2="365.0" y2="58" stroke="#ddd"/><text x="365.0" y="72" font-size="10" text-anchor="middle">10</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">100</text><text x="184" y="34.0" font-size="11" text-anchor="end">Wei_2022 · V1/F</text><circle cx="326.2" cy="30.0" r="4" fill="#ef6c00"><title>Wei_2022 · V1/F: 6 L</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Heida_2024 · V1/F</text><circle cx="434.3" cy="46.0" r="4" fill="#ef6c00"><title>Heida_2024 · V1/F: 24.9 L</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: model_quarantined: Cl, ka, Tlag left at base-class defaults</sub> | [Heida_2024_reference](drugs/drug_mycophenolic_acid/MycophenolicAcid_Heida2024_reference.md) | held back | 2-compartment, oral | 3 (+1 cov.) | Heida A et al., Model-informed dose optimization of myc…, European journal of clinica… (2024) | [10.1007/s00228-024-03743-0](https://doi.org/10.1007/s00228-024-03743-0) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub> | [Kauv_2025_reference](drugs/drug_mycophenolic_acid/MycophenolicAcid_Kauv2025_reference.md) | — | 1-compartment (no model) | 3 | Kauv J et al., Population pharmacokinetics of mycophen…, European journal of pharmac… (2025) | [10.1016/j.ejps.2025.107290](https://doi.org/10.1016/j.ejps.2025.107290) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: T1_t_half_terminal</sub><br><sub>blocking: T3_param_coverage</sub> | [Wei_2022_reference](drugs/drug_mycophenolic_acid/MycophenolicAcid_Wei2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 5 | Wei Y et al., Population pharmacokinetics of mycophen…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.1002628](https://doi.org/10.3389/fphar.2022.1002628) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Tang_2017_IMPDH](drugs/drug_mycophenolic_acid/pd_Tang_2017_IMPDH.md) | IMPDH activity ← mycophenolic acid · direct Emax (saturable) effect | — | Tang JT et al., The pharmacokinetics and pharmacodynami…, British journal of clinical… (2017) | [10.1111/bcp.13154](https://doi.org/10.1111/bcp.13154) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Hale_1998_rejection](drugs/drug_mycophenolic_acid/pd_Hale_1998_rejection.md) | likelihood of rejection ← mycophenolic acid · categorical (graded) response model | — | Hale MD et al., The pharmacokinetic-pharmacodynamic rel…, Clinical pharmacology and t… (1998) | [10.1016/S0009-9236(98)90058-3](https://doi.org/10.1016/S0009-9236(98)90058-3) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=mycophenolic_acid).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate, `UGT1A9` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | liver | `CYP2C8` substrate, `CYP3A4` substrate, `CYP3A5` substrate, `UGT1A1` substrate, `UGT1A6` substrate, `UGT1A9` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate, `UGT1A1` substrate, `UGT1A6` substrate, `UGT2B7` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: IMPDH1 (inhibitor), IMPDH2 (inhibitor), UGT1A10 (substrate), UGT1A7 (substrate), UGT1A8 (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:37 | 1:42 | 3/0/0 | 2/0/0 | 0/0/0 | 165,869/9,467 | einfracz / qwen3.8-27b | 5 | 1/4 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 166 matched, 20 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 3  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Deng_2025.pdf` | Deng K et al., Population Pharmacokinetics and Limited…, Clinical transplantation (2025) | popPK | 10 | [10.1111/ctr.70275](https://doi.org/10.1111/ctr.70275) | [40802254](https://pubmed.ncbi.nlm.nih.gov/40802254) | The study is a population PK analysis of mycophenolic acid, but the specific quantitative parameter values (CL, V, etc.) are not explicitly listed in the provided abstract evidence. |
| `Han_2025.pdf` | Han LY et al., Applying exposure-response analysis to…, European journal of pharmac… (2025) | popPK | 9 | [10.1016/j.ejps.2025.107146](https://doi.org/10.1016/j.ejps.2025.107146) | [40447059](https://pubmed.ncbi.nlm.nih.gov/40447059) | The paper describes a population PK model for mycophenolic acid in humans, but specific parameter estimates (CL, V, etc.) are not present in the provided abstract/evidence. |
| `Tang_2017.pdf` | Tang JT et al., The pharmacokinetics and pharmacodynami…, British journal of clinical… (2017) | popPK | 9 | [10.1111/bcp.13154](https://doi.org/10.1111/bcp.13154) | [27753146](https://pubmed.ncbi.nlm.nih.gov/27753146) | The study reports the pharmacokinetics of mycophenolic acid, but the provided evidence contains only qualitative statements and summary metrics (AUC differences) without specific numeric parameter values like clearance or half-life. |

<sub>queue written 2026-10-07T00:36:02.916887+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abd_2013 | irrelevant | 3 | 2 | This is a review article that summarizes existing literature without presenting original primary data or specific parameter estimates from a single cohort, although it mentions typical ranges from other studies. |
| popPK | Balevic_2023 | irrelevant | 1 | 0 | The study focuses on exposure-response (pharmacodynamic) analysis and efficacy extrapolation, not on the estimation of population pharmacokinetic parameters (CL, V, ka, etc.) for mycophenolic acid. |
| popPK | Chen_2020 | relevant | 7 | 3 | The study reports exposure-response modeling and AUC/Ctrough statistics for mycophenolic acid, but it uses Bayesian estimation from a prior model rather than reporting new structural PK parameter estimates (CL, V, Q, ka) directly in the text. |
| popPK | Deng_2025 | relevant | 10 | 2 | The study is a population PK analysis of mycophenolic acid, but the specific quantitative parameter values (CL, V, etc.) are not explicitly listed in the provided abstract evidence. |
| popPK | Dong_2014 | irrelevant | 2 | 0 | The paper is a review summarizing recent progress in pharmacometrics for MPA and does not report original quantitative PK parameter values or specific model results in the provided evidence. |
| popPK | Fang_2023 | irrelevant | 0 | 0 | This is a medicinal chemistry and fungicidal bioassay study regarding synthetic derivatives of mycophenolic acid, not a pharmacokinetic study of the drug itself. |
| popPK | Golubovic_2016 | irrelevant | 1 | 0 | The paper is explicitly described as a review of available models and does not present original quantitative parameter values for mycophenolic acid. |
| popPK | Hale_1998 | irrelevant | 4 | 0 | The study reports pharmacokinetic-pharmacodynamic (PK-PD) relationships and AUC targets for mycophenolic acid but does not report specific population pharmacokinetic parameters (CL, V, Q, ka) or a compartmental PK model. |
| popPK | Han_2025 | relevant | 9 | 1 | The paper describes a population PK model for mycophenolic acid in humans, but specific parameter estimates (CL, V, etc.) are not present in the provided abstract/evidence. |
| popPK | Kiang_2018 | irrelevant | 2 | 0 | The text is a review summarizing trends in population PK modeling without providing original quantitative parameter values. |
| popPK | Rong_2020 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of UGT enzymes metabolizing p-cresol, where mycophenolic acid serves only as a probe substrate for UGT1A9 activity rather than the subject drug for pharmacokinetic parameter estimation. |
| popPK | Rong_2021 | irrelevant | 2 | 0 | The paper is a narrative review summarizing 11 separate studies and does not report original quantitative population PK parameter values for mycophenolic acid. |
| popPK | Shaw_2001 | irrelevant | 3 | 0 | The text is a review discussing the rationale for therapeutic drug monitoring and cites qualitative findings (e.g., "10-fold variation") but does not provide specific quantitative PK parameter values (CL, V, ka, etc.) for extraction. |
| popPK | Tang_2017 | relevant | 9 | 2 | The study reports the pharmacokinetics of mycophenolic acid, but the provided evidence contains only qualitative statements and summary metrics (AUC differences) without specific numeric parameter values like clearance or half-life. |
| popPK | Thi_2015 | irrelevant | 2 | 0 | The study is primarily pharmacodynamic (IMPDH inhibition) and reports no quantitative compartmental PK parameters (CL, V, Q, ka) for mycophenolic acid, with any numeric values likely residing in unprovided figures or tables. |
| popPK | Xu_2017 | irrelevant | 0 | 0 | The paper is a natural product isolation and structure elucidation study (NMR/ECD) with no pharmacokinetic data for mycophenolic acid. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 00:36 UTC</sub>
