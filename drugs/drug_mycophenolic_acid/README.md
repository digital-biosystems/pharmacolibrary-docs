<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;mycophenolic acid&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;MycophenolicAcid_Wei2022_reference&quot;,&quot;label&quot;:&quot;Wei_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mycophenolic_acid/MycophenolicAcid_Wei2022_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

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

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 18:23 | 3:35 | 0/1/2 | 1/0/1 | 0/0/0 | 129,141/11,584 | einfracz / qwen3.8-27b | 5 | 1/4 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: model_quarantined: Cl, ka, Tlag left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Heida_2024_reference](drugs/drug_mycophenolic_acid/MycophenolicAcid_Heida2024_reference.md) | held back | 2-compartment, oral | 3 | Heida A et al., Model-informed dose optimization of myc…, European journal of clinica… (2024) | [10.1007/s00228-024-03743-0](https://doi.org/10.1007/s00228-024-03743-0) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: T1_t_half_terminal</sub><br><sub>blocking: T3_param_coverage</sub><br><sub>route_to: `engineer`</sub> | [Wei_2022_reference](drugs/drug_mycophenolic_acid/MycophenolicAcid_Wei2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 5 | Wei Y et al., Population pharmacokinetics of mycophen…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.1002628](https://doi.org/10.3389/fphar.2022.1002628) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.583). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Kauv_2025_reference](drugs/drug_mycophenolic_acid/MycophenolicAcid_Kauv2025_reference.md) | — | 2-compartment (no model) | 7 | Kauv J et al., Population pharmacokinetics of mycophen…, European journal of pharmac… (2025) | [10.1016/j.ejps.2025.107290](https://doi.org/10.1016/j.ejps.2025.107290) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Tang_2017_IMPDH](drugs/drug_mycophenolic_acid/pd_Tang_2017_IMPDH.md) | IMPDH activity ← mycophenolic acid · direct Emax (saturable) effect | — | Tang JT et al., The pharmacokinetics and pharmacodynami…, British journal of clinical… (2017) | [10.1111/bcp.13154](https://doi.org/10.1111/bcp.13154) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Hale_1998_likelihood_of_rejection](drugs/drug_mycophenolic_acid/pd_Hale_1998_likelihood_of_rejection.md) | likelihood of rejection ← mycophenolic acid · categorical (graded) response model | — | Hale MD et al., The pharmacokinetic-pharmacodynamic rel…, Clinical pharmacology and t… (1998) | [10.1016/S0009-9236(98)90058-3](https://doi.org/10.1016/S0009-9236(98)90058-3) |

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
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 166 matched, 20 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Deng_2025.pdf` | Deng K et al., Population Pharmacokinetics and Limited…, Clinical transplantation (2025) | popPK | 10 | [10.1111/ctr.70275](https://doi.org/10.1111/ctr.70275) | [40802254](https://pubmed.ncbi.nlm.nih.gov/40802254) | The paper describes a population PK model for mycophenolic acid (MPA) in human kidney transplant patients, but the specific numeric parameter values (CL, V, etc.) are not provided in the evidence text. |
| `Han_2025.pdf` | Han LY et al., Applying exposure-response analysis to…, European journal of pharmac… (2025) | popPK | 9 | [10.1016/j.ejps.2025.107146](https://doi.org/10.1016/j.ejps.2025.107146) | [40447059](https://pubmed.ncbi.nlm.nih.gov/40447059) | The study reports a population pharmacokinetic model for mycophenolic acid in pediatric patients, but the specific numeric parameter values (clearance, volume, etc.) are not listed in the provided abstract evidence. |
| `Tang_2017.pdf` | Tang JT et al., The pharmacokinetics and pharmacodynami…, British journal of clinical… (2017) | popPK | 8 | [10.1111/bcp.13154](https://doi.org/10.1111/bcp.13154) | [27753146](https://pubmed.ncbi.nlm.nih.gov/27753146) | The study reports the PK of mycophenolic acid in humans, but the specific quantitative parameter values (clearance, volume, half-life, etc.) are not present in the extracted evidence, which only provides summary statements of non-significant differences in AUC and PD parameters. |
| `Thi_2015.pdf` | Thi MT et al., Plasma and intracellular pharmacokineti…, Clinical biochemistry (2015) | popPK | 7 | [10.1016/j.clinbiochem.2014.12.005](https://doi.org/10.1016/j.clinbiochem.2014.12.005) | [25523299](https://pubmed.ncbi.nlm.nih.gov/25523299) | The study reports PK-PD analysis for mycophenolic acid in humans, but specific quantitative disposition parameters (e.g., CL, Vd, Ka) or full PK data are not provided in the extracted text, likely residing in the full article tables or figures not included here. |
| `Hale_1998.pdf` | Hale MD et al., The pharmacokinetic-pharmacodynamic rel…, Clinical pharmacology and t… (1998) | popPK | 6 | [10.1016/S0009-9236(98)90058-3](https://doi.org/10.1016/S0009-9236(98)90058-3) | [9871432](https://pubmed.ncbi.nlm.nih.gov/9871432) | The study is a population PK/PD trial for mycophenolic acid that reports specific efficacy-related exposure metrics (AUC threshold and slope) rather than standard compartmental disposition parameters (CL, Vd, t1/2). |

<sub>queue written 2026-10-15T18:20:21.381150+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abd_2013 | irrelevant | 3 | 2 | This is a narrative review of existing literature without presenting original raw data or a primary population PK model with extractable parameter estimates (only a broad range of CL/F is cited). |
| popPK | Balevic_2023 | irrelevant | 2 | 0 | The study is an exposure-response and pharmacodynamic analysis for efficacy extrapolation in SLE, not a pharmacokinetic parameter estimation study, and no quantitative PK values (CL, V, etc.) are reported. |
| popPK | Chen_2020 | relevant | 9 | 1 | The study reports MPA AUC0-12 and Ctrough values and uses a Bayesian PK estimator, but does not provide primary compartmental PK parameters (CL, V, ka) in the text; those are likely in the cited prior model or supplementary material. |
| popPK | Deng_2025 | relevant | 10 | 0 | The paper describes a population PK model for mycophenolic acid (MPA) in human kidney transplant patients, but the specific numeric parameter values (CL, V, etc.) are not provided in the evidence text. |
| popPK | Dong_2014 | irrelevant | 1 | 0 | The paper is a review summarizing recent progress and does not report original quantitative disposition parameters for mycophenolic acid. |
| popPK | Fang_2023 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis and fungicidal activity of mycophenolic acid derivatives, not a pharmacokinetic study. |
| popPK | Golubovic_2016 | irrelevant | 1 | 0 | This is a review article summarizing existing population pharmacokinetic models for mycophenolic acid, but it does not present original quantitative parameter values. |
| popPK | Hale_1998 | relevant | 6 | 4 | The study is a population PK/PD trial for mycophenolic acid that reports specific efficacy-related exposure metrics (AUC threshold and slope) rather than standard compartmental disposition parameters (CL, Vd, t1/2). |
| popPK | Han_2025 | relevant | 9 | 2 | The study reports a population pharmacokinetic model for mycophenolic acid in pediatric patients, but the specific numeric parameter values (clearance, volume, etc.) are not listed in the provided abstract evidence. |
| popPK | Kiang_2018 | irrelevant | 2 | 0 | The paper is a narrative review of population pharmacokinetics for mycophenolic acid that discusses trends and model complexities but does not report specific quantitative parameter values in the provided text. |
| popPK | Rong_2020 | irrelevant | 0 | 0 | The study focuses on p-cresol glucuronidation kinetics, and mycophenolic acid is used only as a probe substrate for UGT1A9 activity, not as the subject drug for PK parameter estimation. |
| popPK | Rong_2021 | irrelevant | 3 | 0 | The paper is a narrative review that summarizes existing studies but does not present original quantitative pharmacokinetic parameter values in the provided evidence. |
| popPK | Shaw_2001 | irrelevant | 2 | 0 | The text is a narrative review summarizing the rationale for therapeutic drug monitoring and does not report specific quantitative pharmacokinetic parameter values (e.g., CL, V, ka) for mycophenolic acid. |
| popPK | Tang_2017 | relevant | 8 | 2 | The study reports the PK of mycophenolic acid in humans, but the specific quantitative parameter values (clearance, volume, half-life, etc.) are not present in the extracted evidence, which only provides summary statements of non-significant differences in AUC and PD parameters. |
| popPK | Thi_2015 | relevant | 7 | 0 | The study reports PK-PD analysis for mycophenolic acid in humans, but specific quantitative disposition parameters (e.g., CL, Vd, Ka) or full PK data are not provided in the extracted text, likely residing in the full article tables or figures not included here. |
| popPK | Xu_2017 | irrelevant | 0 | 0 | This is a natural products chemistry study focusing on isolation, structure elucidation, and bioactivity of fungal metabolites, not a pharmacokinetic study. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 18:20 UTC</sub>
