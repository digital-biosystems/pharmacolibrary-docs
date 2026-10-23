<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;voglibose&quot;}]"></div>

# voglibose

- **generic name:** voglibose
- **ATC codes:** `A10BF03`
- **DrugBank:** [DB04878](https://go.drugbank.com/drugs/DB04878) · **PubChem:** [CID 444020](https://pubchem.ncbi.nlm.nih.gov/compound/444020)
- **molar mass:** 267.2762 g/mol (C10H21NO7) — DrugBank
- **groups:** investigational

## About

Voglibose is an anti-diabetic medicine, an alpha glucosidase inhibitor used to treat diabetes. It is not authorised in the European Union and is considered investigational in major drug databases, though it is used in some Asian countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7939403](https://www.wikidata.org/wiki/Q7939403) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 0.95).">mouse</span> | [Rawal_2025_alpha_amylase](drugs/drug_voglibose/pd_Rawal_2025_alpha_amylase.md) | alpha-amylase biomarker turnover ← voglibose | — | Rawal P et al., Antioxidant, Alpha-Amylase Inhibitory a…, Food science & nutrition (2025) | [10.1002/fsn3.4672](https://doi.org/10.1002/fsn3.4672) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=voglibose).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: MGAM (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:24 | 0:44 | 0/0/0 | 1/0/0 | 0/0/0 | 148,557/2,403 | einfracz / qwen3.8-27b | 4 | 2/7 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 52 matched, 44 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zhang_2023.pdf` | Zhang Y et al., Two-dimensional metal-organic framework…, Talanta (2023) | pd | 5 | [10.1016/j.talanta.2023.124748](https://doi.org/10.1016/j.talanta.2023.124748) | [37271006](https://www.ncbi.nlm.nih.gov/pubmed/37271006) | metadata signals extractable PD data (IC50) |
| `Adisakwattana_2004.pdf` | Adisakwattana S et al., Inhibitory activity of cyanidin-3-rutin…, Journal of enzyme inhibitio… (2004) | pd | 4 | [10.1080/14756360409162443](https://doi.org/10.1080/14756360409162443) | [15558946](https://www.ncbi.nlm.nih.gov/pubmed/15558946) | metadata signals extractable PD data (IC50) |
| `Nagappan_2017.pdf` | Nagappan H et al., Malaysian brown seaweeds Sargassum sili…, Food research international… (2017) | pd | 4 | [10.1016/j.foodres.2017.01.023](https://doi.org/10.1016/j.foodres.2017.01.023) | [28847432](https://www.ncbi.nlm.nih.gov/pubmed/28847432) | metadata signals extractable PD data (IC50) |
| `Padhy_2026.pdf` | Padhy I et al., Evaluation of novel topiramate-phenolic…, Journal of computer-aided m… (2026) | pd | 4 | [10.1007/s10822-026-00789-3](https://doi.org/10.1007/s10822-026-00789-3) | [41845153](https://www.ncbi.nlm.nih.gov/pubmed/41845153) | metadata signals extractable PD data (IC50) |
| `Qiao_2022.pdf` | Qiao Y et al., Inhibition of α-amylase and α-glucosida…, Journal of food science (2022) | pd | 4 | [10.1111/1750-3841.16098](https://doi.org/10.1111/1750-3841.16098) | [35397147](https://www.ncbi.nlm.nih.gov/pubmed/35397147) | metadata signals extractable PD data (IC50) |
| `Ryu_2010.pdf` | Ryu HW et al., Polyphenols from Broussonetia papyrifer…, Journal of agricultural and… (2010) | pd | 4 | [10.1021/jf903068k](https://doi.org/10.1021/jf903068k) | [19954213](https://www.ncbi.nlm.nih.gov/pubmed/19954213) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07 16:23 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abchir_2025 | irrelevant | 0 | 0 | The study focuses on novel alpha-amylase inhibitors using QSAR and in-silico ADMET predictions, with voglibose mentioned only as a comparator drug for which no quantitative PK parameters are reported. |
| PD | Abchir_2025 | not_relevant | 0 | 0 | The paper focuses on QSAR modeling and ADMET predictions for novel alpha-amylase inhibitors, mentioning voglibose only as a reference drug without providing any pharmacodynamic or exposure-response data for it. |
| popPK | Adisakwattana_2004 | irrelevant | 0 | 0 | no_text gate: only 65 chars of text extracted (&lt; 400) |
| PD | Adisakwattana_2004 | not_relevant | 0 | 0 | The paper investigates the inhibitory activity of cyanidin-3-rutinoside, not voglibose. |
| popPK | Ali_2017 | irrelevant | 0 | 0 | The study is an in-vitro medicinal chemistry paper focusing on the synthesis and inhibitory activity of new compounds, with voglibose mentioned only as a clinical comparator and no pharmacokinetic parameters reported. |
| PD | Ali_2017 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for new synthesized compounds and mentions voglibose only as a clinical context, providing no exposure-response or dose-response data for voglibose itself. |
| popPK | Ayan_2026 | irrelevant | 0 | 0 | The paper is an in-vitro medicinal chemistry study on new α-glucosidase inhibitors, with voglibose mentioned only as a background comparator and no pharmacokinetic parameters reported. |
| PD | Ayan_2026 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) for novel compounds, not a pharmacodynamic or exposure-response relationship for the drug voglibose. |
| popPK | Colin_2024 | irrelevant | 0 | 0 | The paper is a review of bioactive compounds in Cassia alata and does not study voglibose pharmacokinetics. |
| PD | Colin_2024 | not_relevant | 0 | 0 | The paper is a review of Cassia alata bioactive compounds and does not mention voglibose or report any pharmacodynamic parameters for it. |
| popPK | Dinu_2025 | irrelevant | 0 | 0 | The paper is a review of sulfonamides for diabetes and does not mention voglibose or provide any pharmacokinetic parameters for it. |
| PD | Dinu_2025 | not_relevant | 0 | 0 | The paper is a review of sulfonamides and antioxidants for diabetes and does not mention voglibose or report any pharmacodynamic parameters. |
| popPK | Dirir_2022 | irrelevant | 0 | 0 | The paper is a review of plant-derived alpha-glucosidase inhibitors and does not report original pharmacokinetic parameters for voglibose. |
| PD | Dirir_2022 | not_relevant | 1 | 0 | The paper is a review of plant-derived alpha-glucosidase inhibitors and only mentions voglibose as an approved drug in the introduction without providing any specific pharmacodynamic or exposure-response data for it. |
| popPK | Gharge_2025 | irrelevant | 0 | 0 | The paper is an in silico and in vitro study of novel rhodanine-thiazole hybrids, not a pharmacokinetic study of voglibose. |
| PD | Gharge_2025 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for novel rhodanine-thiazole hybrids, not for voglibose, and contains no PK/PD modeling or exposure-response analysis for the target drug. |
| popPK | Kasahara_2016 | irrelevant | 2 | 0 | The study evaluates tofogliflozin as the subject drug, with voglibose serving only as a co-administered comparator/probe agent for which specific PK parameter values are not reported. |
| PD | Kasahara_2016 | not_relevant | 0 | 0 | The study is a drug-drug interaction trial focusing on tofogliflozin; voglibose is only a co-administered agent, and no PD parameters or exposure-response relationships for voglibose are reported. |
| popPK | Kaur_2021 | irrelevant | 0 | 0 | The paper is a review of alpha-amylase inhibitors and does not report any pharmacokinetic parameters for voglibose. |
| PD | Kaur_2021 | not_relevant | 1 | 0 | The paper is a comprehensive review of alpha-amylase inhibitors and does not report specific pharmacokinetic or pharmacodynamic modeling data, exposure-response relationships, or numeric PD parameters for voglibose. |
| popPK | Khalid_2023 | irrelevant | 0 | 0 | The study focuses on in vitro alpha-glucosidase inhibition and computational chemistry of novel compounds, with voglibose mentioned only as a commercial comparator and no pharmacokinetic parameters reported. |
| PD | Khalid_2023 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for novel compounds, not a pharmacodynamic or exposure-response relationship for the drug voglibose. |
| popPK | Kim_2014 | irrelevant | 1 | 0 | The study evaluates the effect of voglibose on metformin pharmacokinetics, not the pharmacokinetic parameters of voglibose itself. |
| PD | Kim_2014 | not_relevant | 0 | 0 | The study evaluates the pharmacokinetic interaction of voglibose on metformin, reporting only PK parameters (Cmax, AUC) and safety data, with no pharmacodynamic or exposure-response analysis for voglibose. |
| popPK | Kim_2018 | irrelevant | 0 | 0 | The study reports pharmacodynamic parameters (glucose/insulin response) rather than pharmacokinetic disposition parameters (CL, V, ka) for voglibose. |
| PD | Kim_2018 | not_relevant | 2 | 1 | The study reports comparative pharmacodynamic endpoints (glucose AUC/Cmax) for different formulations but does not provide a concentration-effect or dose-response model with numeric PD parameters (e.g., Emax, EC50). |
| PGx | Laila_2023 | not_relevant | 0 | 0 | The paper studies the effect of fenugreek extract on diabetes and compares it to voglibose, but does not report any pharmacogenomic effects (gene variants affecting PK/PD) of voglibose. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on novel α-glucosidase inhibitors where voglibose is used only as a positive control/comparator, and no pharmacokinetic parameters for voglibose are reported. |
| PD | Li_2026 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) and in vivo efficacy comparisons for a new compound (LY-23), but does not provide a pharmacokinetic-pharmacodynamic (PK/PD) model or exposure-response analysis for voglibose. |
| popPK | Lo_2018 | irrelevant | 0 | 0 | The paper is a systematic review of clinical trials evaluating glucose-lowering efficacy in diabetes, and voglibose is mentioned only as a comparator in one head-to-head trial, with no pharmacokinetic parameters reported. |
| PD | Lo_2018 | not_relevant | 0 | 0 | The paper is a systematic review of clinical trials in CKD and does not report any pharmacokinetic or pharmacodynamic modeling, exposure-response relationships, or numeric PD parameters for voglibose. |
| popPK | Matsui_2009 | irrelevant | 0 | 0 | The study is an in-vitro enzyme assay and in-vivo pharmacodynamic (blood glucose) study, not a pharmacokinetic study, and reports no disposition parameters (CL, V, ka, etc.) for voglibose. |
| PD | Matsui_2009 | not_relevant | 0 | 0 | The provided text consists only of materials and figure/table captions, containing no data, results, or numeric parameters for a pharmacodynamic or exposure-response relationship. |
| popPK | Miyahara_2004 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of mulberry leaf extract on postprandial hyperglycemia and enzyme inhibition, using voglibose only as a positive control for IC50 values rather than as the subject of a pharmacokinetic analysis. |
| PD | Miyahara_2004 | not_relevant | 3 | 2 | The paper reports PD parameters (ED50, IC50) for mulberry leaf extract and DNJ, but voglibose is only used as a positive control with a single IC50 value, lacking a full dose-response curve or PK/PD model for the drug of interest. |
| popPK | Mukherjee_2013 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of nimbidiol where voglibose is only used as a comparator for enzyme inhibition potency, with no pharmacokinetic parameters reported. |
| PD | Mukherjee_2013 | not_relevant | 0 | 0 | The paper focuses on the in vitro enzyme inhibition of nimbidiol; voglibose is only mentioned as a comparator without any reported PK/PD data or exposure-response analysis. |
| popPK | Nagappan_2017 | irrelevant | 0 | 0 | no_text gate: only 200 chars of text extracted (&lt; 400) |
| PD | Nagappan_2017 | not_relevant | 0 | 0 | The paper investigates the in vitro enzyme inhibition activities of seaweed extracts and does not mention voglibose or report any pharmacodynamic or exposure-response data for it. |
| popPK | Nakashima_2022 | irrelevant | 0 | 0 | The study is a clinical trial analyzing the hemodynamic effects (estimated plasma volume) of luseogliflozin compared to voglibose, containing no pharmacokinetic parameters for voglibose. |
| popPK | Natori_2011 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on novel α-glucosidase inhibitors where voglibose is used only as a comparator for in-vitro inhibitory activity, with no pharmacokinetic parameters reported. |
| PD | Natori_2011 | not_relevant | 1 | 0 | The paper reports in vitro IC50 values for novel compounds and mentions voglibose only as a commercial reference drug without providing specific numeric PD parameters or exposure-response data for it. |
| popPK | Nepal_2020 | irrelevant | 1 | 0 | The study focuses on in-vitro metabolism and in-vivo pharmacodynamics (blood glucose levels) rather than reporting quantitative pharmacokinetic disposition parameters like clearance or volume of distribution. |
| PD | Nepal_2020 | not_relevant | 3 | 2 | The paper reports qualitative changes in blood glucose levels and in vitro metabolism rates, but does not provide a formal PK/PD model, dose-response curve, or numeric PD parameters (e.g., Emax, EC50) for voglibose. |
| popPK | Nguyen_2025 | irrelevant | 0 | 0 | The study is an in vitro/in silico investigation of novel compounds with voglibose serving only as a comparator for enzymatic potency, containing no pharmacokinetic data. |
| PD | Nguyen_2025 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for novel compounds compared to voglibose, but does not provide a pharmacokinetic or pharmacodynamic model, exposure-response relationship, or numeric PD parameters for voglibose itself. |
| popPK | Padhy_2026 | irrelevant | 0 | 0 | no_text gate: only 130 chars of text extracted (&lt; 400) |
| PD | Padhy_2026 | not_relevant | 0 | 0 | The paper focuses on topiramate-phenolic acid conjugates, not voglibose, and does not report any pharmacodynamic or exposure-response data for the target drug. |
| popPK | Qiao_2022 | irrelevant | 0 | 0 | no_text gate: only 130 chars of text extracted (&lt; 400) |
| PD | Qiao_2022 | not_relevant | 0 | 0 | The paper investigates the inhibitory effects of Morus australis fruit extract and its components, not the drug voglibose. |
| PGx | Qin_2005 | not_relevant | 0 | 0 | The paper investigates the effect of the drug (voglibose) on CYP2E1 induction, not the effect of a gene variant on the drug's pharmacokinetics or pharmacodynamics. |
| popPK | Rafique_2020 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of new compounds with voglibose mentioned only as a background comparator, containing no pharmacokinetic data. |
| PD | Rafique_2020 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for new synthesized compounds, not a pharmacodynamic or exposure-response relationship for the drug voglibose. |
| popPK | Rahim_2020 | irrelevant | 0 | 0 | The paper is an in-vitro synthesis and molecular docking study of new compounds, with voglibose mentioned only as background context, and no pharmacokinetic parameters are reported. |
| PD | Rahim_2020 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for new benzimidazole analogues and acarbose, but does not report a pharmacodynamic or exposure-response relationship for voglibose. |
| popPK | Rawal_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacological activity of a plant extract, using voglibose only as a comparator for enzyme inhibition and molecular docking, with no pharmacokinetic parameters reported. |
| PD | Rawal_2025 | not_relevant | 0 | 0 | The paper studies the pharmacological effects of a plant extract (Smallanthus sonchifolius) and only mentions voglibose as a standard comparator without reporting any PK/PD data or exposure-response parameters for voglibose. |
| popPK | Ryu_2010 | irrelevant | 0 | 0 | no_text gate: only 87 chars of text extracted (&lt; 400) |
| PD | Ryu_2010 | not_relevant | 0 | 0 | The paper focuses on alpha-glucosidase inhibition by polyphenols from Broussonetia papyrifera and does not mention voglibose or report any pharmacodynamic or exposure-response data for it. |
| popPK | Sarkar_2024 | irrelevant | 0 | 0 | no_text gate: only 173 chars of text extracted (&lt; 400) |
| PD | Sarkar_2024 | not_relevant | 0 | 0 | The paper focuses on Parkia javanica and does not report any pharmacodynamic or exposure-response data for voglibose. |
| popPK | Seraj_2024 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on new quinoline derivatives, and voglibose is only mentioned as a comparator drug with no pharmacokinetic data provided. |
| PD | Seraj_2024 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) for new synthetic compounds, not a pharmacodynamic or exposure-response relationship for the drug voglibose. |
| popPK | Sukhram_2026 | irrelevant | 0 | 0 | The paper is a scoping review focused on ketamine in diabetes care and does not report any pharmacokinetic parameters for voglibose. |
| PD | Sukhram_2026 | not_relevant | 0 | 0 | The paper is a scoping review of ketamine in diabetes and does not report any pharmacodynamic or exposure-response data for voglibose. |
| PGx | Tateishi_2021 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (bucolome affecting glimepiride metabolism) causing hypoglycemia, not a pharmacogenomic effect (gene variant influence) on the PK or PD of voglibose. |
| PGx | Wang_2024 | not_relevant | 0 | 0 | This is a case report about a genetic syndrome (SHORT/PIK3R1) affecting insulin resistance, not a study of how a gene variant affects the pharmacokinetics or pharmacodynamics of the drug voglibose. |
| popPK | Worawalai_2016 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis and in-vitro enzyme inhibition of voglibose analogues, containing no pharmacokinetic data. |
| PD | Worawalai_2016 | not_relevant | 3 | 2 | The paper reports in vitro IC50 values for new analogues and voglibose, which are pharmacodynamic potency metrics, but it does not report an exposure-response or dose-response relationship (concentration-effect curve or PK/PD model) for the drug in a biological system. |
| popPK | Yamaguchi_2013 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics of vildagliptin with voglibose as a co-administered agent, and no quantitative disposition parameters (CL, V, ka) for voglibose are reported in the evidence. |
| PD | Yamaguchi_2013 | not_relevant | 2 | 1 | The study reports comparative pharmacodynamic effects (GLP-1, glucose) and PK changes but does not provide a concentration-effect model or numeric PD parameters (e.g., Emax, EC50) for voglibose. |
| popPK | Yousuf_2018 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on new pyrazolone derivatives, using voglibose only as a comparator for enzyme inhibition, with no pharmacokinetic data. |
| PD | Yousuf_2018 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for new pyrazolone compounds, using voglibose only as a qualitative reference standard without providing its specific numeric PD parameters or an exposure-response analysis. |
| popPK | Zhang_2023 | irrelevant | 0 | 0 | no_text gate: only 117 chars of text extracted (&lt; 400) |
| PD | Zhang_2023 | not_relevant | 0 | 0 | The paper describes a chemical screening method for alpha-glucosidase inhibitors and does not report pharmacokinetic or pharmacodynamic data for voglibose in a biological system. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvoglibose%5D&body=Drug%3A%20voglibose%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_voglibose/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
