<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Ethylparaben&quot;}]"></div>

# Ethylparaben

- **generic name:** Ethylparaben
- **T3DB:** [T3D3978](http://www.t3db.ca/toxins/T3D3978) · **PubChem:** [CID 8434](https://pubchem.ncbi.nlm.nih.gov/compound/8434)

## About

Ethylparaben is found in alcoholic beverages. Ethylparaben is an antimicrobial agent, preservative. Ethylparaben is present in red wine, white wine and sake. …

- **Category:** Household Toxin, Industrial/Workplace Toxin, Food Toxin, Synthetic Toxin
- **Sources and uses:** Ethylparaben is found in alcoholic beverages.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D3978">T3DB T3D3978</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 120-47-8</small></p>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-15 08:30 | 29:14 | 0/0/0 | 0/0/0 | 0/0/0 | 779,517/23,873 | ollama / glm-5.3-flash | 46 | 8/34 | 46/0 | 0 |

## Coverage

- **PubMed hits:** 22221 matched, 151 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Abbas_2010.pdf` | Abbas S et al., Metabolism of parabens (4-hydroxybenzoi…, Drug metabolism and pharmac… (2010) | pgx | 7 | [10.2133/dmpk.dmpk-10-rg-013](https://doi.org/10.2133/dmpk.dmpk-10-rg-013) | [20930423](https://www.ncbi.nlm.nih.gov/pubmed/20930423) | metadata signals extractable PGX data (UGT1A1, PK/PD-context) |

<sub>queue written 2026-11-15 08:29 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abbas_2010 | not_relevant | 3 | 5 | Identifies UGT isoforms metabolizing ethylparaben but reports no gene variant/genotype effect on any PK or PD parameter. |
| popPK | Al-Zubaydi_2024 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for gabapentin, not ethylparaben; ethylparaben is nowhere mentioned as subject or comparator. |
| popPK | Alhadab_2020 | irrelevant | 0 | 0 | The paper reports population PK parameters for sertraline, a different substance; ethylparaben does not appear as the subject substance. |
| popPK | Alobaid_2016 | irrelevant | 0 | 0 | Review of antimicrobial pharmacokinetics in obese ICU patients; ethylparaben is not the subject and no parameters for it are reported. |
| popPK | Altamura_1994 | irrelevant | 0 | 0 | The paper concerns fluoxetine pharmacokinetics, not ethylparaben; ethylparaben appears nowhere in the evidence. |
| popPK | Anderson_2023 | irrelevant | 0 | 0 | The paper concerns acetaminophen pharmacokinetics in obese children; ethylparaben is not mentioned and no parameters for it exist in the evidence. |
| popPK | Ashrap_2018 | irrelevant | 0 | 0 | Biomonitoring/exposure study of urinary concentrations in a population with no kinetic parameter of any kind. |
| popPK | Balant_1976 | irrelevant | 0 | 0 | A general pharmacokinetics review about digoxin with no ethylparaben data or parameters. |
| popPK | Bigger_1985 | irrelevant | 0 | 0 | The paper concerns digitalis toxicity, not ethylparaben; no kinetic parameters for ethylparaben appear anywhere in the evidence. |
| popPK | Bihorel_2026 | irrelevant | 0 | 0 | The paper reports population PK parameters for aflibercept, not ethylparaben; ethylparaben is absent entirely. |
| popPK | Brocks_2003 | irrelevant | 0 | 0 | The paper is a review of stereoselective pharmacokinetics of chiral antimalarial drugs with no kinetic parameters for ethylparaben at all. |
| popPK | Bräuner_2022 | irrelevant | 1 | 2 | This is a human biomonitoring/exposure study reporting paraben concentrations and correlations in urine, serum and amniotic fluid, with no kinetic parameters (half-life, clearance, rate constants); concentration tables are referenced but values not present in the evidence. |
| popPK | Chakraborty_2012 | irrelevant | 0 | 0 | This paper reports kinetic parameters for canakinumab, not ethylparaben; ethylparaben never appears at all. |
| popPK | Charles_2001 | irrelevant | 0 | 0 | The paper is about pharmacokinetics teaching software and contains no ethylparaben data or parameters at all. |
| popPK | Chen_2023 | irrelevant | 0 | 0 | The paper reports quantitative PK parameters for meloxicam, not ethylparaben; ethylparaben appears nowhere in the study. |
| popPK | Chen_2025 | irrelevant | 0 | 0 | Epidemiological exposure-outcome study measuring urinary ethylparaben concentrations for association with kidney injury markers, with no kinetic parameters; EP's values appear only in supplementary material. |
| popPK | Chen_2025_2 | irrelevant | 1 | 4 | Exposure/biomonitoring method-comparison study measuring concentrations and detection rates only, with no kinetic parameters (half-life, clearance, Vd, rates) for ethylparaben. |
| popPK | Claessens_2022 | irrelevant | 0 | 0 | This is a human biomonitoring/exposure study reporting hair concentrations of ethylparaben, with no kinetic parameters (half-life, clearance, partition coefficients, etc.). |
| popPK | Dai_2025 | irrelevant | 0 | 0 | Exposure/biomonitoring study with urinary concentrations and dietary associations only; no kinetic parameters of any kind for ethylparaben. |
| popPK | Denghel_2023 | irrelevant | 0 | 0 | This is an analytical method development paper for urinary biomonitoring of EDCs including ethylparaben; no toxicokinetic parameters (half-life, clearance, Vd, rate constants, or PBPK model) for ethylparaben are reported — only analytical validation values (LOD, LOQ, precision) and calibration spiking concentrations, which are analytical performance metrics, not kinetic parameters. |
| popPK | Dinca_2023 | irrelevant | 0 | 0 | Mixture toxicity study with histopathology and organ weights only; no kinetic parameters of ethylparaben reported. |
| popPK | Dubinsky_2022 | irrelevant | 0 | 0 | A systematic review of pediatric CRRT pharmacokinetics of antimicrobials and sedatives; ethylparaben does not appear as a subject substance and no kinetic values are present. |
| popPK | Eales_2024 | irrelevant | 0 | 0 | No kinetic parameters for ethylparaben (or any named substance) are reported; this is a review of FDA pediatric biologic dosing. |
| popPK | Flamenbaum_1986 | irrelevant | 0 | 0 | The paper is a review of diuretic pharmacokinetics and hypokalemia in the elderly with no kinetic parameters for ethylparaben of any kind. |
| popPK | Fujii_2020 | irrelevant | 0 | 0 | Review of antimicrobial PK in sepsis; ethylparaben is not the subject and no kinetic parameters for it appear. |
| popPK | Galler_2023 | irrelevant | 0 | 0 | Paper deals with radioligand therapy pharmacokinetics; ethylparaben is not the subject and no parameters for it appear anywhere. |
| popPK | Gao_2022 | irrelevant | 0 | 0 | The paper reports population PK parameters for cyclosporine, not ethylparaben; ethylparaben does not appear at all. |
| popPK | Gatti_2025 | irrelevant | 0 | 0 | This is a review on beta-lactam pharmacokinetics; ethylparaben does not appear at all. |
| popPK | Gaurav_2026 | irrelevant | 0 | 0 | The paper reports population PK parameters for favezelimab (and mentions pembrolizumab); ethylparaben does not appear at all as the subject substance, so no toxicokinetic parameters for ethylparaben are reported or extractable. |
| popPK | Gonkowski_2024 | irrelevant | 2 | 3 | Biomonitoring/exposure study measuring hair paraben concentrations only; no kinetic parameters (half-life, clearance, rate constants); EtP detected in only 2 samples above LOQ. |
| popPK | Gonkowski_2025 | irrelevant | 1 | 2 | This is a biomonitoring/exposure study measuring EtP concentrations in wool, not any kinetic parameter (half-life, clearance, rate constant, etc.). |
| popPK | Gonkowski_2026 | irrelevant | 1 | 3 | This is an exposure/monitoring study reporting ethylparaben hair concentrations in cats, with no kinetic parameters such as half-life, clearance, partition coefficients, or rate constants. |
| popPK | Gu_2020 | irrelevant | 0 | 0 | Ethylparaben appears only as a preservative excipient in a donepezil nasal gel; all kinetic parameters (AUC, bioavailability) belong to donepezil, not ethylparaben. |
| popPK | Gueorguieva_2023 | irrelevant | 0 | 0 | The paper reports population PK of donanemab, not ethylparaben; ethylparaben does not appear as subject substance. |
| popPK | Hajizadeh_2020 | irrelevant | 1 | 3 | This is a human biomonitoring/exposure study reporting urinary concentrations and estimated daily intake for ethylparaben, with no kinetic parameters (half-life, clearance, rate constants, etc.); values themselves are present (median 9.64 μg/L). |
| popPK | Hajizadeh_2020_2 | irrelevant | 0 | 0 | Epidemiological exposure study reporting urinary paraben concentrations and associations, with no kinetic parameters of any kind. |
| popPK | Hajizadeh_2022 | irrelevant | 0 | 0 | This is an exposure/epidemiological association study of urinary paraben concentrations with no kinetic parameters for ethylparaben. |
| popPK | Honda_2018 | irrelevant | 0 | 0 | Exposure/biomonitoring study reporting urine concentrations and estimated daily intakes, not any kinetic parameter (half-life, clearance, rate constants) for ethylparaben. |
| popPK | Hou_2007 | irrelevant | 0 | 0 | Ethylparaben appears only as the analytical internal standard in an HPLC method for salvianolic acid A; no toxicokinetic parameters of ethylparaben itself are reported. |
| popPK | Hu_2024 | irrelevant | 0 | 0 | The paper reports population PK parameters (CL, VC, Q, VP) for nivolumab and ipilimumab, not for ethylparaben; ethylparaben is not mentioned at all. |
| popPK | Hua_2022 | irrelevant | 0 | 0 | This is an exposure/epidemiological biomonitoring study reporting urine concentrations and intake estimates, with no kinetic parameters for ethylparaben. |
| popPK | Jaehde_1995 | irrelevant | 0 | 0 | Review on burn-injury pharmacokinetics of various drugs; ethylparaben not mentioned and no numeric parameters present. |
| popPK | Jang_2020 | irrelevant | 0 | 0 | Review of antibiotic dosing during CRRT; ethylparaben is never discussed and no kinetic parameters for it appear anywhere. |
| popPK | Jo_2026 | irrelevant | 0 | 0 | This is an exposure-assessment study with no kinetic parameters (no half-lives, rate constants, clearances, or model parameters) for ethylparaben. |
| popPK | Ke_2014 | irrelevant | 0 | 0 | Review/discussion of PBPK in pregnancy with no quantitative kinetic parameters for ethylparaben; ethylparaben not even mentioned. |
| popPK | Kiang_2015 | irrelevant | 0 | 0 | The paper is a review of ceftaroline's pharmacokinetics, not ethylparaben. |
| popPK | Koch_2014 | irrelevant | 1 | 0 | Human urinary biomonitoring/exposure study with no kinetic parameters such as half-life, clearance, or excretion rate constant for ethylparaben; only ICCs and concentration variation are reported. |
| popPK | Komatsu_2024 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for cefazolin, not ethylparaben; ethylparaben does not appear as the subject substance. |
| popPK | Kumar_2020 | irrelevant | 0 | 0 | The paper concerns copanlisib, a different substance; ethylparaben is not mentioned. |
| popPK | Kunzelmann_2026 | irrelevant | 0 | 0 | The paper reports population PK of CFTR modulators (elexacaftor/tezacaftor/ivacaftor), not ethylparaben; ethylparaben is not the subject substance. |
| popPK | Lamp_1992 | irrelevant | 0 | 0 | The paper reports pharmacokinetics of ofloxacin, not ethylparaben; no ethylparaben kinetic parameters appear. |
| popPK | Larsson_2014 | irrelevant | 1 | 3 | This is a human urinary biomonitoring/exposure-determinant study reporting concentrations only, with no toxicokinetic parameter for ethylparaben (EthP numerical GMs not even given in the abstract). |
| popPK | Lee_1984 | irrelevant | 0 | 0 | A general review of haemodialysis pharmacokinetics; no ethylparaben kinetic parameters reported. |
| popPK | Levasseur_2024 | irrelevant | 2 | 5 | Wristband uptake rate (10.39 ng/g/day) and urinary concentrations are exposure-sampler metrics, not in-vivo toxicokinetic parameters of ethylparaben; only a cited half-life (~21h) belongs to other substances. |
| popPK | Li_2023 | irrelevant | 0 | 0 | Human biomonitoring/exposure study measuring nail and urine concentrations only, with no kinetic parameters (no half-life, clearance, rate constants or model). |
| popPK | Li_2023_2 | irrelevant | 1 | 1 | It is a human exposure/biomonitoring study measuring hair concentrations of ethylparaben with no kinetic parameters (half-life, clearance, rate constants, etc.); only exposure estimates are reported. |
| popPK | Liao_2025 | irrelevant | 1 | 3 | This is a human biomonitoring/exposure and dietary-association study; the only ethylparaben numeric values are urinary concentrations and FUE (13.7%) for intake back-calculation, with no kinetic parameters (half-life, clearance, Vd, rate constants) of ethylparaben. |
| popPK | Lin_2023 | irrelevant | 0 | 0 | The paper reports PopPK parameters for JZP458 (asparaginase), not for ethylparaben; ethylparaben does not appear as subject substance. |
| popPK | Liu_2023 | irrelevant | 0 | 0 | The paper concerns ciprofol and its metabolite M4; ethylparaben does not appear as the subject substance in any kinetic parameter. |
| popPK | Luo_2022 | irrelevant | 0 | 0 | The paper reports population pharmacokinetics of daratumumab; ethylparaben does not appear as a subject substance (no kinetic parameters for it). |
| popPK | López-Ruiz_2026 | irrelevant | 2 | 3 | This is an analytical biomonitoring method paper reporting measured blood concentrations of ethylparaben in humans, but no kinetic parameters (half-life, clearance, rate constants, etc.) are provided. |
| popPK | Ma_2012 | irrelevant | 0 | 0 | Ethylparaben is used only as an analytical internal standard; toxicokinetic parameters belong to daidzein, not ethylparaben. |
| popPK | Majid_2024 | irrelevant | 0 | 0 | The paper reports population PK parameters for lecanemab, not ethylparaben; ethylparaben does not appear at all. |
| popPK | Makowska_2022 | irrelevant | 1 | 2 | This is an exposure/biomonitoring study measuring EtP concentrations in dog fur; no half-life, clearance, partition coefficient or other kinetic parameter is reported. |
| popPK | Martín_2016 | irrelevant | 0 | 0 | Analytical/exposure biomonitoring method measuring concentrations in hair; no kinetic parameters for ethylparaben. |
| popPK | Martín_2019 | irrelevant | 1 | 2 | This is a human biomonitoring/exposure study measuring ethylparaben hair concentrations with no kinetic parameters; some concentrations are given but none are toxicokinetic parameters. |
| popPK | Matthews_1984 | irrelevant | 0 | 0 | The paper concerns pharmacokinetics of PCBs, not ethylparaben; no ethylparaben parameters are reported. |
| popPK | Maximova_2022 | irrelevant | 0 | 0 | The paper's kinetic parameters (clearance, t½, volume of distribution) all belong to acyclovir; ethylparaben does not appear at all as a study substance (no ethylparaben data are present, even in supplementary mention). |
| popPK | Methaneethorn_2020 | irrelevant | 0 | 0 | This paper concerns lamotrigine pharmacokinetics, not ethylparaben; ethylparaben does not appear as a subject substance. |
| popPK | Molina_2022 | irrelevant | 0 | 0 | The paper concerns dalbavancin; ethylparaben does not appear as a study substance or kinetic parameter. |
| popPK | Morse_1990 | irrelevant | 0 | 0 | The paper concerns zidovudine pharmacokinetics; ethylparaben is not mentioned at all. |
| popPK | Morse_2023 | irrelevant | 0 | 0 | Review of PK concepts for anesthetic drugs (propofol, dexmedetomidine) in obese children; ethylparaben does not appear at all. |
| popPK | Navarro_2024 | irrelevant | 0 | 0 | The paper concerns cyclophosphamide/4-hydroxycyclophosphamide pharmacokinetics in children; ethylparaben does not appear as a subject substance, and no kinetic parameters for it are present. |
| popPK | Neri_2024 | irrelevant | 2 | 1 | In vitro MCF-7 cell viability plus IAM/HSA/AGP chromatographic affinity and ADMET in-silico predictions; no numeric ethylparaben kinetic parameters (values referenced in Table 1/Figs not provided) and no in vivo disposition data. |
| popPK | Newmeyer_2023 | irrelevant | 0 | 0 | This is a human biomonitoring/exposure screening study; ethylparaben appears only as a confirmed urinary analyte with peak areas, no kinetic parameters of any kind provided. |
| popPK | Novy_2024 | irrelevant | 0 | 0 | The paper reports population PK of cefoxitin, not ethylparaben, which does not appear as a study substance. |
| popPK | Ouedraogo_2022 | irrelevant | 3 | 1 | Ethylparaben appears only as an analogue in a read-across case study with propylparaben as the target, and no numeric kinetic parameters (which may sit in supplementary PBK material) are present in the evidence. |
| popPK | Overgaard_2019 | irrelevant | 0 | 0 | The paper reports full population PK parameters (CL, V, ka, F) but for semaglutide, not ethylparaben; ethylparaben does not appear at all. |
| popPK | Pinder_2002 | irrelevant | 0 | 0 | The paper covers antibiotic pharmacokinetics in critically ill patients and never mentions ethylparaben at all. |
| popPK | Pirard_2022 | irrelevant | 0 | 2 | This is a human biomonitoring/exposure study reporting urinary concentrations only, with no kinetic parameters (half-life, clearance, partition coefficients, etc.) for ethylparaben. |
| popPK | Pongcharoenkiat_2002 | irrelevant | 1 | 2 | This is an in vitro chemical stability study of paraben hydrolysis in oil/water emulsions; ethylparaben appears only as a comparator and no numeric kinetic values are shown in the evidence. |
| popPK | Poulain_2023 | irrelevant | 0 | 0 | The paper models clearance of 14C-inulin in the rat brain; ethylparaben does not appear at all, so no ethylparaben kinetic parameters exist to extract. |
| popPK | Roberts_2009 | irrelevant | 0 | 0 | The paper concerns antibiotic pharmacokinetics in critically ill patients; ethylparaben is not the subject substance. |
| popPK | Rolland_2020 | irrelevant | 0 | 0 | Biomonitoring/exposure study of urinary phenol concentrations in a French cohort; ethylparaben appears only as a measured analyte with no kinetic parameters (no half-life, rate constant, clearance, etc.). |
| popPK | Sakaue_2024 | irrelevant | 0 | 0 | The PopPK parameters (CL/F 8.92 L/hr, V/F 4.07 L/kg, Ka 7.36/hr) are fully reported but belong to everolimus, not ethylparaben, which is entirely absent. |
| popPK | Sanchis_2020 | irrelevant | 1 | 1 | Biomonitoring exposure/risk assessment with urinary concentrations and estimated daily intakes only; no kinetic parameter (half-life, clearance, rate constants, etc.) for ethylparaben. |
| popPK | Seidel_2023 | irrelevant | 0 | 0 | In vitro toxicity study with EC50 cytotoxicity values but no kinetic parameters (half-life, clearance, rate constants, partition coefficients) for ethylparaben. |
| popPK | Senta_2020 | irrelevant | 3 | 2 | A WBE/HBM review biomarkers; ethylparaben only mentioned qualitatively (3-OH-EtP metabolite); no numeric TK parameters for EtP in the provided evidence. |
| popPK | Setiawan_2023 | irrelevant | 0 | 0 | The paper reports PK of ampicillin and sulbactam; ethylparaben does not appear as a study substance. |
| popPK | Setiawan_2023_2 | irrelevant | 0 | 0 | The evidence describes pharmacokinetics of antimicrobials (meropenem, imipenem, vancomycin, etc.), with no kinetic parameters for ethylparaben anywhere. |
| popPK | Shelton_1992 | irrelevant | 0 | 0 | The paper reviews didanosine's pharmacokinetics; ethylparaben is not the subject substance. |
| popPK | Shoji_2021 | irrelevant | 0 | 0 | The paper is about vancomycin pharmacokinetics in pediatric liver transplant recipients; ethylparaben does not appear at all, so no kinetic parameters of the subject substance exist. |
| popPK | Souri_2008 | irrelevant | 0 | 0 | Ethylparaben appears only as an analytical internal standard; all kinetic parameters concern pioglitazone. |
| popPK | Tam_1993 | irrelevant | 0 | 0 | The paper discusses first-pass metabolism variability for drugs (imipramine, propranolol, etc.) with no kinetic parameters for ethylparaben at all. |
| popPK | Thürmann_1998 | irrelevant | 0 | 0 | This is a narrative review on gender differences in pharmacokinetics generally; no ethylparaben parameters or any quantitative values are present. |
| popPK | Vakonaki_2026 | irrelevant | 0 | 0 | Human biomonitoring outcome study measuring ethylparaben hair concentrations and associations with cortisol/telomere length; no kinetic parameters (half-life, clearance, rate constants, etc.) are reported. |
| popPK | Vindenes_2021 | irrelevant | 0 | 0 | Epidemiological exposure/outcome study reporting only urinary biomarker concentrations of ethylparaben (Table 2) with no kinetic parameter (half-life, rate constant, clearance, etc.); numeric values present are exposure percentiles, not toxicokinetic parameters. |
| popPK | Wang_2021 | irrelevant | 0 | 0 | This is a human exposure/occurrence study measuring paraben concentrations in urine and dust with no kinetic parameters (half-life, clearance, rates, or model). |
| popPK | Wang_2023 | irrelevant | 0 | 0 | The paper's kinetic parameters (clearance, volume of distribution, EC50) belong entirely to pirfenidone; ethylparaben does not appear as the subject substance. |
| popPK | Wang_2025 | irrelevant | 0 | 0 | The paper's kinetic parameters (clearance, volumes, PopPK model) all belong to serplulimab, not ethylparaben, which does not appear at all. |
| popPK | Wang_2026 | irrelevant | 0 | 2 | Biomonitoring/exposure study reporting urinary concentrations and daily intakes, not any toxicokinetic parameter (no half-life, clearance, rate constant, or model) for ethylparaben. |
| popPK | Wei_2023 | irrelevant | 0 | 0 | The paper models topiramate, not ethylparaben; ethylparaben does not appear as a subject substance and no ethylparaben kinetic parameters are reported. |
| popPK | Wen_2023 | irrelevant | 0 | 0 | The paper models oxypurinol/allopurinol, with ethylparaben not appearing as the study substance at all. |
| popPK | Xu_2022 | irrelevant | 0 | 0 | The paper reports kinetic parameters for vancomycin, not ethylparaben, which only would appear as unrelated to this therapeutic drug study. |
| popPK | Xu_2024 | irrelevant | 2 | 3 | Exposure/bioaccumulation monitoring study reporting concentrations and dietary intake risk, not toxicokinetic parameters for ethylparaben. |
| popPK | Xue_2016 | irrelevant | 0 | 0 | Ethylparaben appears solely as an analytical internal standard; all kinetic parameters concern Valeriana lignans, not ethylparaben. |
| popPK | Xue_2024 | irrelevant | 1 | 3 | This is an analytical method-development paper; ethylparaben appears only as an analyte in urine biomonitoring (a measured concentration, 0.60 μg/L median) with no kinetic parameter such as half-life, clearance, metabolism rate, or model; urinary concentrations alone do not count as toxicokinetics. |
| popPK | Yamada_2025 | irrelevant | 0 | 10 | All quantitative PK parameters (CL, Vd, half-life) belong to zolbetuximab, not ethylparaben, which does not appear in the paper at all. |
| popPK | Yang_2025 | irrelevant | 0 | 0 | The paper concerns cyclosporine A population pharmacokinetics; ethylparaben is not the subject and no kinetic parameters for it appear. |
| popPK | Yang_2025_2 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for perampanel, not ethylparaben; ethylparaben is not mentioned at all. |
| popPK | Yoshida_2024 | irrelevant | 0 | 0 | Urinary biomonitoring/exposure study with concentrations, daily intakes and hazard quotients but no toxicokinetic parameters (no half-life, clearance, rate constants, or model). |
| popPK | Yu_2022 | irrelevant | 0 | 0 | The paper models cabotegravir pharmacokinetics, not ethylparaben; ethylparaben appears nowhere as a subject substance. |
| popPK | Zhan_2022 | irrelevant | 0 | 0 | The paper models methotrexate, not ethylparaben; ethylparaben does not appear as subject substance. |
| popPK | Zhou_2021 | irrelevant | 0 | 0 | The paper reports quantitative PK parameters (V1, CL, VtoA ratios) for remimazolam, not ethylparaben; ethylparaben is absent from the evidence entirely. |
| popPK | Zuo_2024 | irrelevant | 0 | 0 | The paper reports a population PK model for apatinib, not ethylparaben; ethylparaben does not appear as the subject substance anywhere in the evidence. |
| popPK | Álvarez-González_2024 | irrelevant | 0 | 0 | Ethylparaben appears only as a biomonitoring exposure in a prostate cancer case-control study; urinary concentrations and odds ratios are not toxicokinetic parameters, and no numeric kinetic values are provided. |
| PGx | Álvarez-González_2024 | not_relevant | 2 | 1 | Study reports associations of gene variants and paraben exposure with prostate cancer risk, not gene effects on ethylparaben PK/PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bethylparaben%5D&body=Drug%3A%20ethylparaben%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_ethylparaben/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
