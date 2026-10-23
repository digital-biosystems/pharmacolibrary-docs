<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;asenapine&quot;}]"></div>

# asenapine

- **generic name:** asenapine
- **ATC codes:** `N05AH05`
- **DrugBank:** [DB06216](https://go.drugbank.com/drugs/DB06216) · **PubChem:** [CID 11954293](https://pubchem.ncbi.nlm.nih.gov/compound/11954293)
- **molar mass:** 285.77 g/mol (C17H16ClNO) — DrugBank
- **groups:** approved, investigational

## About

Asenapine is an atypical antipsychotic given for schizophrenia and for manic episodes linked to bipolar disorder. It is an approved medicine with an authorised product in the European Union, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q416545](https://www.wikidata.org/wiki/Q416545) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| asenapine | parent | 285.77 | C17H16ClNO | DrugBank | [11954293](https://pubchem.ncbi.nlm.nih.gov/compound/11954293) | Dogterom_2018 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 296 | L/h | 296 L/h | pediatric patients with schizophrenia or bipolar I disorder | 561 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Dogterom_2018_reference](drugs/drug_asenapine/Asenapine_Dogterom2018_reference.md) |
| ka | kabs | 2.98 | 1/h | 2.98 1/h | pediatric patients with schizophrenia or bipolar I disorder | 561 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Dogterom_2018_reference](drugs/drug_asenapine/Asenapine_Dogterom2018_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: model_quarantined: Vd, Tlag left at base-class defaults</sub> | [Dogterom_2018_reference](drugs/drug_asenapine/Asenapine_Dogterom2018_reference.md) | held back | 1-compartment, oral | 5 | Dogterom P et al., Asenapine pharmacokinetics and tolerabi…, Drug design, development an… (2018) | [10.2147/DDDT.S171475](https://doi.org/10.2147/DDDT.S171475) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Chapel_2009_QTcF](drugs/drug_asenapine/pd_Chapel_2009_QTcF.md) | QTcF prolongation (change from baseline) ← asenapine · direct linear effect | — | Chapel S et al., Exposure-response analysis in patients…, Journal of clinical pharmac… (2009) | [10.1177/0091270009344855](https://doi.org/10.1177/0091270009344855) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Chapel_2011_ddQTc](drugs/drug_asenapine/pd_Chapel_2011_ddQTc.md) | time-matched, placebo-corrected mean change in QTc from baseline ← asenapine · stimulation effect | — | Chapel S et al., Comparison of QTc data analysis methods…, Clinical pharmacology and t… (2011) | [10.1038/clpt.2010.220](https://doi.org/10.1038/clpt.2010.220) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Friberg_2009_PANSS](drugs/drug_asenapine/pd_Friberg_2009_PANSS.md) | total Positive and Negative Syndrome Scale score ← asenapine · direct Emax (saturable) effect | — | Friberg LE et al., Modeling and simulation of the time cou…, Clinical pharmacology and t… (2009) | [10.1038/clpt.2009.44](https://doi.org/10.1038/clpt.2009.44) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Knauer_2008_5_HT2A_receptor_occupancy_inhibition_of_in_vivo_3_H_M100907_binding](drugs/drug_asenapine/pd_Knauer_2008_5_HT2A_receptor_occupancy_inhibition_of_in_vivo_.md) | 5-HT2A receptor occupancy (inhibition of in vivo [(3)H]M100907 binding) ← asenapine · direct sigmoid Emax (Hill) effect | — | Knauer CS et al., Validation of a rat in vivo [(3)H]M1009…, European journal of pharmac… (2008) | [10.1016/j.ejphar.2008.06.063](https://doi.org/10.1016/j.ejphar.2008.06.063) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Seo_2022_Kv_current](drugs/drug_asenapine/pd_Seo_2022_Kv_current.md) | Kv current inhibition ← asenapine · direct sigmoid Emax (Hill) effect | — | Seo MS et al., Asenapine, an atypical antipsychotic, b…, European journal of pharmac… (2022) | [10.1016/j.ejphar.2022.175318](https://doi.org/10.1016/j.ejphar.2022.175318) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Friberg_2009_time_course_of_dropouts](drugs/drug_asenapine/pd_Friberg_2009_time_course_of_dropouts.md) | time course of dropouts ← asenapine · time-to-event model | — | Friberg LE et al., Modeling and simulation of the time cou…, Clinical pharmacology and t… (2009) | [10.1038/clpt.2009.44](https://doi.org/10.1038/clpt.2009.44) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=asenapine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2D6` inhibitor/substrate, `CYP3A4` substrate, `UGT1A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA2A (target), ADRA2B (target), ADRA2C (target), ADRB1 (target), ADRB2 (target), DRD1 (target), DRD2 (target), DRD3 (target), DRD4 (target), HRH1 (target), HRH2 (target), HTR1A (target), HTR1B (target), HTR2A (target), HTR2B (target), HTR2C (target), HTR5A (target), HTR6 (target), HTR7 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 15:12 | 0:45 | 1/0/0 | 5/0/0 | 0/0/0 | 44,149/4,104 | ollama / glm-5.3-flash | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dogterom_2015.pdf` | Dogterom P et al., The effect of food on the high clearanc…, European journal of clinica… (2015) | popPK | 7 | [10.1007/s00228-013-1587-4](https://doi.org/10.1007/s00228-013-1587-4) | [25552402](https://pubmed.ncbi.nlm.nih.gov/25552402) | Compartmental PK modelling of asenapine in humans is described, but numeric parameter values (CL, V) are not present in the evidence, likely in figures/supplementary material. |

<sub>queue written 2026-10-06T15:11:31.209845+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chapel_2009 | irrelevant | 2 | 1 | This is an exposure-response QTc analysis; no PK disposition parameters (CL, V, ka, half-life) for asenapine are reported, only concentration-effect modeling. |
| popPK | Chapel_2011 | irrelevant | 3 | 2 | This is a QTc exposure-response analysis, not a PK disposition study; no clearance/volume/ka values for asenapine appear in the evidence. |
| popPK | Citrome_2022 | irrelevant | 0 | 0 | Efficacy post hoc analysis of hostility scores; no PK disposition parameters for asenapine reported. |
| popPK | Dogterom_2015 | relevant | 7 | 3 | Compartmental PK modelling of asenapine in humans is described, but numeric parameter values (CL, V) are not present in the evidence, likely in figures/supplementary material. |
| popPK | Friberg_2009 | irrelevant | 3 | 1 | This is a PK/PD efficacy modeling paper; PK parameters for asenapine are not reported in the evidence, and any PK model values likely reside in supplementary material not provided. |
| popPK | Knauer_2008 | irrelevant | 2 | 3 | Asenapine is only a test compound in a receptor-occupancy assay; only ED50/EC50 exposure values are given, no PK disposition parameters (CL, V, t½, model). |
| popPK | Seo_2022 | irrelevant | 0 | 0 | In-vitro electrophysiology study of Kv channel blockade in rabbit coronary artery cells; no PK disposition parameters (CL, V, ka, half-life, or PK model) for asenapine are reported. |
| popPK | Xu_2020 | irrelevant | 0 | 0 | Asenapine is only used as a pharmacological antagonist probe on an insect receptor; no PK parameters for asenapine are reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 15:11 UTC</sub>
