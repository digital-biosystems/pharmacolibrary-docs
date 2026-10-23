<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A11H&quot;,&quot;href&quot;:&quot;atc/A11H.md&quot;},{&quot;label&quot;:&quot;riboflavin&quot;}]"></div>

# riboflavin

- **generic name:** riboflavin
- **ATC codes:** `A11HA04`, `S01XA26`
- **DrugBank:** [DB00140](https://go.drugbank.com/drugs/DB00140) · **PubChem:** [CID 493570](https://pubchem.ncbi.nlm.nih.gov/compound/493570)
- **molar mass:** 376.3639 g/mol (C17H20N4O6) — DrugBank
- **groups:** approved, investigational, nutraceutical, vet_approved

## About

Riboflavin, a B vitamin, is used to treat or prevent ariboflavinosis, a deficiency of this vitamin. It is widely used as a vitamin supplement, appears on the WHO essential medicines list, and is also approved for veterinary use and as a nutraceutical.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q130365](https://www.wikidata.org/wiki/Q130365) and the WHO ATC classification; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Zempleni_1996_2_reference](drugs/drug_riboflavin/Riboflavin_Zempleni1996v2_reference.md) | — | 1-compartment (no model) | 0 | Zempleni J et al., The metabolism of riboflavin in female…, International journal for v… (1996) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=riboflavin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | brain | `MAOA` cofactor | DrugBank actor |
| metabolism | liver | `MAOA` cofactor | DrugBank actor |
| metabolism | small intestine | `MAOA` cofactor | DrugBank actor |
| excretion | kidney | `SLC22A6` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: BLVRB (product), MPO (modulator), MTHFR (cofactor), RFK (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 08:30 | 4:35 | 0/1/0 | 0/0/0 | 0/0/0 | 98,755/8,057 | ollama / qwen3.8:27b-mtp-q8_0 | 18 | 6/12 | 15/3 | 0 |

## Coverage

- **PubMed hits:** 195 matched, 61 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zempleni_1996.pdf` | Zempleni J et al., Pharmacokinetics of orally and intraven…, The American journal of cli… (1996) | popPK | 10 | [10.1093/ajcn/63.1.54](https://doi.org/10.1093/ajcn/63.1.54) | [8604671](https://pubmed.ncbi.nlm.nih.gov/8604671) | The study reports a two-compartment PK model for riboflavin in humans, but specific numeric values for clearance, volume, and rate constants are not listed in the provided abstract text. |
| `Zempleni_1996_2.pdf` | Zempleni J et al., The metabolism of riboflavin in female…, International journal for v… (1996) | popPK | 9 |  | [8899458](https://pubmed.ncbi.nlm.nih.gov/8899458) | The study reports quantitative disposition parameters (ka, kbeta, renal clearance) for riboflavin in humans, with specific numeric values provided in the text. |
| `Ravishankara_2002.pdf` | Ravishankara MN et al., Evaluation of antioxidant properties of…, Phytomedicine : internation… (2002) | pd | 4 | [10.1078/0944-7113-00104](https://doi.org/10.1078/0944-7113-00104) | [11995949](https://www.ncbi.nlm.nih.gov/pubmed/11995949) | metadata signals extractable PD data (EC50) |
| `Rodionova_2019.pdf` | Rodionova IA et al., A Riboflavin Transporter in Bdellovibri…, Journal of molecular microb… (2019) | pd | 4 | [10.1159/000501354](https://doi.org/10.1159/000501354) | [31509826](https://www.ncbi.nlm.nih.gov/pubmed/31509826) | metadata signals extractable PD data (EC50) |
| `Van_2024.pdf` | Van Hove JLK et al., ACAD9 treatment with bezafibrate and ni…, Mitochondrion (2024) | pd | 4 | [10.1016/j.mito.2024.101905](https://doi.org/10.1016/j.mito.2024.101905) | [38797357](https://www.ncbi.nlm.nih.gov/pubmed/38797357) | metadata signals extractable PD data (EC50) |
| `Otero_2016.pdf` | Otero JA et al., Effect of bovine ABCG2 polymorphism Y58…, Animal : an international j… (2016) | pgx | 5 | [10.1017/S1751731115002141](https://doi.org/10.1017/S1751731115002141) | [26510964](https://www.ncbi.nlm.nih.gov/pubmed/26510964) | metadata signals extractable PGX data (ABCG2) |

<sub>queue written 2026-10-05 08:26 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahn_2026 | irrelevant | 0 | 0 | The paper is a clinical study on intense pulsed light therapy for meibomian gland dysfunction and contains no pharmacokinetic data for riboflavin. |
| PGx | Arpa_2013 | not_relevant | 0 | 0 | The paper reports clinical outcomes of triple therapy in Friedreich's ataxia but does not investigate how genetic variants affect the pharmacokinetics or pharmacodynamics of riboflavin. |
| PGx | Bhinder_2022 | not_relevant | 0 | 0 | The paper investigates the genetic architecture of seed meal quality traits in Brassica napus, not the pharmacogenomics of riboflavin in humans or animals. |
| PGx | Bjørklund_2022 | not_relevant | 0 | 0 | The paper discusses B vitamins (folate, B12, B6) and homocysteine metabolism, not riboflavin. |
| PGx | Chen_2024 | not_relevant | 0 | 0 | The paper investigates biological aging and mentions riboflavin as a biomarker associated with aging, but does not report pharmacogenomic effects on riboflavin pharmacokinetics or pharmacodynamics. |
| PGx | Chuang_2006 | not_relevant | 2 | 5 | The paper reports a pharmacodynamic effect (homocysteine levels) modified by MTHFR genotype, but the primary focus is on folic acid and the interaction, with riboflavin showing no significant independent effect or clear pharmacogenomic interaction for riboflavin alone. |
| PGx | Cornelius_2012 | not_relevant | 2 | 5 | The paper investigates the molecular mechanism of riboflavin's chaperone effect on ETF-QO protein folding and activity, rather than reporting changes in riboflavin's pharmacokinetic or pharmacodynamic parameters (e.g., plasma levels, clearance, or specific PD biomarkers) based on genotype. |
| PGx | Desuzinges-Mandon_2010 | not_relevant | 0 | 0 | The paper focuses on the mechanism of heme transport by ABCG2 and explicitly states that riboflavin does not bind to the specific domain studied, without reporting any pharmacogenomic effects on riboflavin PK/PD. |
| PGx | Fryar-Williams_2023 | not_relevant | 0 | 0 | The paper reports MTHFR genotype associations with endogenous riboflavin excretion as a diagnostic biomarker for schizophrenia, not the pharmacokinetics or pharmacodynamics of riboflavin as a therapeutic drug. |
| PGx | Gardner_1979 | not_relevant | 0 | 0 | The paper describes yeast genetics and riboflavin biosynthesis pathways, not human pharmacogenomics or drug PK/PD parameters. |
| popPK | Giancaspero_2009 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic analysis of riboflavin uptake and metabolism in plant mitochondria, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PD | Giancaspero_2009 | not_relevant | 0 | 0 | The paper focuses on the enzymatic kinetics (Michaelis-Menten) of riboflavin metabolism enzymes in tobacco mitochondria, not on pharmacodynamic exposure-response or dose-response relationships for riboflavin as a drug. |
| popPK | Gong_2025 | irrelevant | 0 | 0 | The study focuses on the bio-reduction of Technetium-99 by bacteria, where riboflavin is used only as an electron transport mediator, not as the subject drug for pharmacokinetic analysis. |
| PGx | Gordon_2025 | not_relevant | 0 | 0 | The paper examines the association between riboflavin status and cognitive function, not the pharmacokinetic or pharmacodynamic parameters of riboflavin as a drug. |
| popPK | Klinov_1995 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of enzyme inhibition by riboflavin derivatives, not a pharmacokinetic study. |
| PGx | Kong_2025 | not_relevant | 0 | 0 | The paper investigates the pharmacological effects of isorhamnetin on hyperuricemia and mentions riboflavin metabolism only as a secondary metabolomic finding, without reporting any pharmacogenomic effects on riboflavin PK/PD. |
| PGx | Kubo_2018 | not_relevant | 0 | 0 | The paper is a review of transport mechanisms at the blood-retinal barrier and does not report pharmacogenomic effects of gene variants on riboflavin PK/PD parameters. |
| PGx | Lazzeri_2016 | not_relevant | 0 | 0 | The paper investigates pharmacogenomics for ranibizumab, not riboflavin. |
| PGx | Lee_2018 | not_relevant | 0 | 0 | The paper investigates the local tissue effects of riboflavin on corneal stem cells in an animal model and does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Liu_2025 | irrelevant | 0 | 0 | The study is a toxicological/metabolomic assessment of petroleum components in earthworms, not a pharmacokinetic study of riboflavin. |
| PD | Liu_2025 | not_relevant | 0 | 0 | The paper studies the toxicity of petroleum components on earthworms and mentions riboflavin metabolism only as a pathway affected by exposure, not as a drug with a dose-response relationship. |
| PGx | Lu_2022 | not_relevant | 0 | 0 | The study examines the association between riboflavin intake, MTRR genotype, and gastric cancer risk, rather than the effect of genotype on the pharmacokinetic or pharmacodynamic parameters of riboflavin. |
| popPK | Mak_2021 | irrelevant | 0 | 0 | The paper is a review of chemical modulators of MAIT cells and does not report pharmacokinetic parameters for riboflavin. |
| PD | Mak_2021 | not_relevant | 3 | 2 | The text is a review of chemical modulators of MAIT cells that mentions EC50 values for the antigen 5-OP-RU, but it does not report a pharmacokinetic or exposure-response relationship for riboflavin itself. |
| PGx | McNulty_2008 | not_relevant | 0 | 0 | The paper discusses the role of riboflavin as a cofactor for MTHFR and its interaction with the MTHFR C677T genotype on homocysteine levels, but it does not report pharmacokinetic or pharmacodynamic parameters of riboflavin itself (e.g., riboflavin clearance, bioavailability, or specific PD response to riboflavin dosing). |
| PGx | Medina_2019 | not_relevant | 0 | 0 | The paper investigates the effect of a CFH polymorphism on the response to anti-VEGF therapy for AMD, not on the pharmacokinetics or pharmacodynamics of riboflavin. |
| PGx | Millán-García_2024 | not_relevant | 2 | 8 | The study investigates the PK of lumichrome (a riboflavin derivative), not riboflavin itself, and uses knockout mice rather than human genetic variants. |
| PGx | Miranda-Lorenzo_2014 | not_relevant | 0 | 0 | The paper investigates the role of the ABCG2 transporter in cancer stem cell autofluorescence and drug accumulation, not the pharmacokinetics or pharmacodynamics of riboflavin. |
| popPK | Nguyen_2022 | irrelevant | 0 | 0 | The paper is a dietary assessment validation study that measures nutrient intake, not a pharmacokinetic study reporting disposition parameters for riboflavin. |
| PGx | Otero_2016 | not_relevant | 4 | 5 | The study reports no significant in vivo difference in riboflavin levels between genotypes, and the in vitro findings do not constitute a fitted pharmacokinetic effect size. |
| PGx | Parmeggiani_2019 | not_relevant | 0 | 0 | The paper investigates the effect of MTHFR polymorphism on the efficacy of verteporfin, not riboflavin. |
| PGx | Quiles_2026 | not_relevant | 0 | 0 | The paper investigates anaerobic riboflavin degradation by gut bacteria (Lachnospiraceae) and does not report any human pharmacogenomic effects on riboflavin pharmacokinetics or pharmacodynamics. |
| popPK | Ravishankara_2002 | irrelevant | 0 | 0 | no_text gate: only 89 chars of text extracted (&lt; 400) |
| PD | Ravishankara_2002 | not_relevant | 0 | 0 | The paper evaluates the antioxidant properties of a plant extract (Hemidesmus indicus) and does not report any pharmacodynamic or exposure-response data for riboflavin. |
| popPK | Riedl_2022 | irrelevant | 0 | 0 | The paper is an ophthalmology study analyzing retinal fluid volumes and visual acuity in patients with macular degeneration, unrelated to riboflavin pharmacokinetics. |
| PGx | Riselli_2025 | not_relevant | 2 | 5 | The paper reports that the ABCG2 p.Q141K variant is associated with higher baseline concentrations of riboflavin, but this is a steady-state biomarker level rather than a change in a pharmacokinetic parameter (like AUC or Cmax) following a specific dosing regimen. |
| popPK | Ritz_2001 | irrelevant | 0 | 0 | The paper describes the enzymatic mechanism of riboflavin biosynthesis in E. coli, not pharmacokinetic disposition parameters. |
| PD | Ritz_2001 | not_relevant | 0 | 0 | The paper describes the enzymatic mechanism of GTP cyclohydrolase II in riboflavin biosynthesis, not a pharmacodynamic exposure-response relationship for riboflavin as a drug. |
| popPK | Rodionova_2019 | irrelevant | 0 | 0 | no_text gate: only 54 chars of text extracted (&lt; 400) |
| PD | Rodionova_2019 | not_relevant | 0 | 0 | The paper describes a riboflavin transporter in a bacterium, not a pharmacodynamic or exposure-response relationship for a drug in a biological system. |
| popPK | Rubio-Aurioles_2012 | irrelevant | 0 | 0 | The study evaluates tadalafil and sildenafil for erectile dysfunction and does not involve riboflavin pharmacokinetics. |
| PGx | Sainz_2015 | not_relevant | 0 | 0 | The paper investigates the source of cellular autofluorescence in cancer stem cells and identifies riboflavin as the fluorophore, but it does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of riboflavin. |
| PGx | Shimura_2019 | not_relevant | 0 | 0 | The paper reports a case of antiepileptic drug-induced psychosis associated with MTHFR genotype and vitamin deficiencies, but does not report a pharmacogenomic effect on the PK or PD parameters of riboflavin. |
| PGx | Sunebo_2026 | not_relevant | 0 | 0 | The paper reports a drug-induced metabolic disorder (MADD) and its treatment with riboflavin, but does not report pharmacogenomic effects on the PK or PD parameters of riboflavin itself. |
| PGx | Tazhibaev_1982 | not_relevant | 0 | 0 | The paper discusses nutritional deficiencies and mineral balance, not pharmacogenomic effects on riboflavin PK/PD. |
| PGx | Thompson_2017 | not_relevant | 0 | 0 | The paper is a systematic review of clinical trials assessing the efficacy of riboflavin for migraine prophylaxis and does not report specific pharmacogenomic effects on PK or PD parameters. |
| PGx | Tu_2025 | not_relevant | 0 | 0 | The paper investigates viral protein effects on riboflavin metabolism pathways, not the effect of human genetic variants on the pharmacokinetics or pharmacodynamics of riboflavin as a drug. |
| popPK | Upadhyay_2014 | irrelevant | 0 | 0 | The study is an in-vitro antioxidant assay where riboflavin is used as a reagent in the superoxide radical scavenging assay, not as the subject drug for pharmacokinetic analysis. |
| PD | Upadhyay_2014 | not_relevant | 0 | 0 | The paper investigates the antioxidant properties of a plant extract using riboflavin only as a reagent in a chemical assay, not as a drug subject to pharmacodynamic modeling. |
| popPK | Van_2024 | irrelevant | 0 | 0 | no_text gate: only 116 chars of text extracted (&lt; 400) |
| PD | Van_2024 | not_relevant | 0 | 0 | The paper focuses on ACAD9 treatment with bezafibrate and nicotinamide riboside, not riboflavin, and does not report PD parameters for riboflavin. |
| PGx | Verenich_2019 | not_relevant | 0 | 0 | The study investigates the effect of oxidative stress metabolites (peroxynitrite and 4-HNE) on transporter activity, not the effect of a gene variant or genotype on riboflavin pharmacokinetics or pharmacodynamics. |
| PGx | Vieira_2021 | not_relevant | 0 | 0 | The paper describes riboflavin accumulation as a biomarker for cancer stem cells, not a pharmacogenomic effect on riboflavin PK/PD parameters. |
| popPK | Wang_2017 | irrelevant | 0 | 0 | The study reports dietary intake data for riboflavin, not pharmacokinetic disposition parameters. |
| PGx | Wang_2024 | not_relevant | 0 | 0 | The paper investigates probiotics and hyperuricemia, mentioning riboflavin metabolism only as a secondary metabolic pathway affected by gut microbiota, with no focus on pharmacogenomics or riboflavin PK/PD parameters. |
| PGx | Watson-Fargie_2025 | not_relevant | 0 | 0 | The paper reports clinical response to riboflavin therapy in a case series but does not analyze specific gene variants' effects on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Weintraub_2025 | not_relevant | 0 | 0 | The paper focuses on yeast transcriptomics and metabolic engineering, not human pharmacogenomics or the PK/PD of riboflavin as a drug. |
| PGx | Weyandt_2022 | not_relevant | 0 | 0 | The paper focuses on the genomics and evolution of Wolbachia bacteria in nematodes, not on human pharmacogenomics or the pharmacokinetics/pharmacodynamics of riboflavin. |
| PGx | Winter_1967 | not_relevant | 0 | 0 | The paper studies the biochemical lesion of renal riboflavinuria in avian models, which is a physiological/metabolic defect rather than a pharmacogenomic effect on the PK/PD of riboflavin as a therapeutic drug. |
| PGx | Wortmann_2020 | not_relevant | 0 | 0 | The paper describes a genetic disorder (TKFC deficiency) affecting endogenous riboflavin metabolism, not the pharmacokinetics or pharmacodynamics of riboflavin as an administered drug. |
| popPK | Xie_2025 | irrelevant | 0 | 0 | The study evaluates the efficacy of conbercept for diabetic macular edema and does not involve riboflavin or its pharmacokinetics. |
| PGx | Yee_2021 | not_relevant | 0 | 0 | The paper is a general review of the SLC22 transporter family and mentions riboflavin transport by SLC22A14, but it does not report specific pharmacogenomic effects of gene variants on riboflavin PK or PD parameters. |
| PGx | Yorns_2013 | not_relevant | 0 | 0 | The paper discusses the use of riboflavin as a therapeutic agent for migraine and mitochondrial dysfunction, but it does not report any pharmacogenomic effects (gene variants) on the pharmacokinetics or pharmacodynamics of riboflavin. |
| popPK | Zempleni_1996 | relevant | 10 | 3 | The study reports a two-compartment PK model for riboflavin in humans, but specific numeric values for clearance, volume, and rate constants are not listed in the provided abstract text. |
| PGx | Zhang_2023 | not_relevant | 0 | 0 | The paper reports a genetic association with a disease phenotype (hyperhomocysteinemia) and a metabolite level (FAD), but does not report a pharmacokinetic or pharmacodynamic parameter of riboflavin as a drug. |
| PGx | Zhou_2023 | not_relevant | 0 | 0 | The paper studies the ABCG2 gene in buffaloes and its role in milk fat synthesis, not the pharmacokinetics or pharmacodynamics of riboflavin in humans. |
| PGx | van_2007 | not_relevant | 2 | 5 | The paper describes the physiological role of the BCRP transporter in riboflavin secretion and excretion in mice, but does not report a pharmacogenomic effect of a specific human gene variant on a PK/PD parameter of riboflavin as a drug. |
| PGx | Ürey_2023 | not_relevant | 0 | 0 | The paper is a clinical case report on succinate dehydrogenase deficiency and does not report pharmacokinetic or pharmacodynamic parameters of riboflavin. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Briboflavin%5D&body=Drug%3A%20riboflavin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_riboflavin/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-05 08:26 UTC</sub>
