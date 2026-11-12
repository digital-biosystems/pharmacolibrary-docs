<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Kurtoxin&quot;}]"></div>

# Kurtoxin

- **generic name:** Kurtoxin
- **T3DB:** [T3D2519](http://www.t3db.ca/toxins/T3D2519) · **PubChem:** none

## About

Kurtoxin is a peptide toxin produced by the South African fat tail scorpion (Parabuthus transvaalicus). It affects the gating of voltage-gated sodium channels and calcium channels.

- **Category:** Protein, Natural Toxin, Animal Toxin
- **Route of exposure:** injection (sting/bite)
- **Sources and uses:** Kurtoxin is a peptide toxin produced by the South African fat tail scorpion (Parabuthus transvaalicus).
- **Mechanism of toxicity:** Kurtoxin affects the gating of voltage-gated sodium channels and calcium channels. In calcium channels Kurtoxin binds close to the channel voltage sensor and thereby produces complex gating modifications, inhibiting T-type, L-type, and N-type calcium channels and facilitating P-type channels. …
- **Health effects:** Kurtoxin is neurotoxic.
- **Acute toxicity:** LD50: 4.25 mg/kg (Subcutaneous, Mouse)

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2519">T3DB T3D2519</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 820959-57-7</small></p>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-10 07:09 | 5:48 | 0/0/0 | 0/0/0 | 0/0/0 | 323,640/6,428 | einfracz / qwen3.8-27b | 17 | 4/13 | 17/0 | 0 |

## Coverage

- **PubMed hits:** 54 matched, 54 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Luna-Ramirez_2020.pdf` | Luna-Ramirez K et al., Structural basis of the potency and sel…, Biochemical pharmacology (2020) | pd | 4 | [10.1016/j.bcp.2019.113782](https://doi.org/10.1016/j.bcp.2019.113782) | [31881193](https://www.ncbi.nlm.nih.gov/pubmed/31881193) | metadata signals extractable PD data (IC50) |
| `Hryniewiecka_2020.pdf` | Hryniewiecka E et al., Worsening of Kidney Transplant Function…, Transplantation proceedings (2020) | pgx | 8 | [10.1016/j.transproceed.2020.02.088](https://doi.org/10.1016/j.transproceed.2020.02.088) | [32222391](https://www.ncbi.nlm.nih.gov/pubmed/32222391) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Obayemi_2024.pdf` | Obayemi JE et al., Assessing the Utility of a Genotype-Gui…, Journal of clinical pharmac… (2024) | pgx | 8 | [10.1002/jcph.2461](https://doi.org/10.1002/jcph.2461) | [38766706](https://www.ncbi.nlm.nih.gov/pubmed/38766706) | metadata signals extractable PGX data (CYP3A5, PK/PD-context) |
| `Amanova_2014.pdf` | Amanova A et al., Colchicine levels in chronic kidney dis…, Clinical transplantation (2014) | pgx | 7 | [10.1111/ctr.12448](https://doi.org/10.1111/ctr.12448) | [25125128](https://www.ncbi.nlm.nih.gov/pubmed/25125128) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-11-10 07:08 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aksamit_2012 | irrelevant | 0 | 0 | The paper focuses on homocysteine levels in kidney transplant patients and does not mention kurtoxin. |
| PGx | Amanova_2014 | not_relevant | 0 | 0 | The study reports the effects of renal function and drug interactions on colchicine pharmacokinetics, not pharmacogenomic effects on kurtoxin. |
| popPK | B_2018 | irrelevant | 0 | 0 | The paper characterizes the electrophysiological activity of a sea anemone toxin (AbeTx1) on potassium channels, not the toxicokinetic parameters of kurtoxin. |
| popPK | Chaiyabutr_2026 | irrelevant | 0 | 0 | The paper studies scorpion venoms (Heterometrus laoticus and Lychas mucronatus), not kurtoxin, and reports no kinetic parameters for kurtoxin. |
| popPK | Covali-Pontes_2025 | irrelevant | 0 | 0 | The paper reports the composition and biological activity of Tityus paraguayensis venom, not quantitative toxicokinetic parameters for kurtoxin. |
| popPK | Drevland_2024 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for tacrolimus and patiromer, not for kurtoxin. |
| popPK | Endo_2022 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for mycophenolic acid (MPA) and everolimus, not kurtoxin. |
| PGx | Fragoulakis_2024 | not_relevant | 1 | 1 | The study does not focus on kurtoxin and reports no specific pharmacokinetic or pharmacodynamic data for it. |
| popPK | Freire_2019 | irrelevant | 0 | 0 | The paper describes the molecular structure and mechanism of action (channel binding) of a scorpion toxin, containing no toxicokinetic parameters such as half-life, clearance, or partition coefficients. |
| PGx | Galvez_2023 | not_relevant | 0 | 0 | The paper studies tacrolimus, not kurtoxin. |
| popPK | Gil_2018 | irrelevant | 0 | 0 | The paper focuses on growth outcomes in kidney transplant patients and does not contain any toxicokinetic parameters for kurtoxin. |
| popPK | Golshayan_2023 | irrelevant | 0 | 0 | The paper reviews complement pathway targeting in kidney transplantation and contains no mention of kurtoxin or its toxicokinetic parameters. |
| popPK | Hidaka_2022 | irrelevant | 0 | 0 | The paper reports pharmacokinetic data for tacrolimus and mycophenolate mofetil in humans, with no mention or data for kurtoxin. |
| popPK | Holgersson_2014 | irrelevant | 0 | 0 | The paper discusses ABO incompatible transplantation and does not mention kurtoxin or report any toxicokinetic parameters. |
| popPK | Hryniewiecka_2020 | irrelevant | 0 | 0 | The paper focuses on genetic polymorphisms of CYP3A4, MDR1, and UGT1A9 affecting tacrolimus and cyclosporine pharmacokinetics in kidney transplant patients, with no mention of kurtoxin. |
| PGx | Hryniewiecka_2020 | not_relevant | 0 | 0 | The paper discusses pharmacogenomics for tacrolimus and cyclosporine, not kurtoxin. |
| PGx | Huart_2018 | not_relevant | 0 | 0 | The paper discusses pharmacogenomics for immunosuppressive drugs, not kurtoxin, and focuses on delayed graft function rather than PK/PD. |
| popPK | Jain_2002 | irrelevant | 0 | 0 | The paper investigates tacrolimus and antiretroviral drug interactions, with no mention of kurtoxin. |
| popPK | Jain_2024 | irrelevant | 0 | 0 | The paper focuses on renal function markers (creatinine/cystatin C) in kidney transplant patients and does not mention or measure kurtoxin. |
| popPK | Jasminka_2015 | irrelevant | 0 | 0 | The paper focuses on left ventricular remodelling in renal transplant patients and does not report any toxicokinetic parameters for kurtoxin. |
| popPK | Karadkhele_2021 | irrelevant | 0 | 0 | The paper studies CMV infection outcomes in kidney transplant patients and contains no data for kurtoxin. |
| popPK | Khan_2025 | irrelevant | 0 | 0 | The paper is a systematic review on renal ischemia-reperfusion injury and does not mention kurtoxin or report any kinetic parameters for it. |
| PGx | Kitamura_2026 | not_relevant | 0 | 0 | The paper investigates pharmacogenomic effects on bone mineral density in kidney transplant patients, not the pharmacokinetics or pharmacodynamics of kurtoxin. |
| popPK | Kuczera_2022 | irrelevant | 0 | 0 | The paper is a review on infertility in chronic kidney disease and does not contain any data, parameters, or mentions of the substance kurtoxin. |
| popPK | Latta_1996 | irrelevant | 0 | 0 | The paper discusses liver transplantation for primary hyperoxaluria type 1 and does not report kinetic parameters for kurtoxin. |
| popPK | Luna-Ramirez_2020 | irrelevant | 0 | 0 | The paper studies Urotoxin, a scorpion venom peptide, and contains no data for the subject substance kurtoxin. |
| popPK | Mabunda_2025 | irrelevant | 0 | 0 | The paper is a proteomic and cytotoxicity study that identifies kurtoxin as a component of scorpion venom but reports no toxicokinetic parameters for the substance. |
| popPK | Miyashita_2024 | irrelevant | 0 | 0 | The paper describes the sequence and structural modeling of kurtoxin (a scorpion toxin) but contains no quantitative toxicokinetic parameters (half-life, clearance, etc.) for the substance. |
| popPK | Obayemi_2022 | irrelevant | 0 | 0 | The paper studies the pharmacogenetics of tacrolimus metabolism in kidney transplant recipients and does not report any toxicokinetic parameters for kurtoxin. |
| PGx | Obayemi_2022 | not_relevant | 0 | 0 | The paper discusses the pharmacogenetics of tacrolimus, not kurtoxin. |
| popPK | Obayemi_2024 | irrelevant | 0 | 0 | no_text gate: only 153 chars of text extracted (&lt; 400) |
| PGx | Obayemi_2024 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects for tacrolimus, not kurtoxin. |
| popPK | Olejnik_2025 | irrelevant | 0 | 0 | The paper reports on cognitive impairment and renal function markers in kidney transplant patients and contains no data regarding kurtoxin. |
| popPK | Oyama_2005 | irrelevant | 0 | 0 | The paper describes the structural and mechanistic features of alpha-KTx12.1 using NMR and MD, with no toxicokinetic parameters reported. |
| popPK | Paluszkiewicz_2021 | irrelevant | 0 | 0 | The paper is a review on nanoparticles for kidney diseases and does not contain any toxicokinetic data or parameters for the substance kurtoxin. |
| popPK | Pöge_2011 | irrelevant | 0 | 0 | The paper focuses on validating GFR estimation formulas in renal transplant patients and contains no data, mention, or parameters related to kurtoxin. |
| popPK | Romi_1993 | irrelevant | 0 | 0 | The paper concerns kaliotoxin, a scorpion toxin, and reports binding affinity and LD50 data, containing no toxicokinetic parameters for kurtoxin. |
| popPK | Smith_2005 | irrelevant | 0 | 0 | The paper discusses KTX 0101 (D-beta-hydroxybutyrate), not kurtoxin, and contains no kinetic data for the target substance. |
| popPK | Sundberg_2005 | irrelevant | 0 | 0 | The paper reports clinical outcomes for kidney and pancreas transplant patients receiving immunosuppressive therapy (alemtuzumab, steroids, tacrolimus, MMF) and contains no data on the substance kurtoxin. |
| PGx | Tashiro_2025 | not_relevant | 0 | 0 | The paper does not mention the drug kurtoxin; it studies the pharmacogenomic effect of FCGR3A polymorphism on late-onset neutropenia associated with rituximab therapy. |
| popPK | Vandendriessche_2012 | irrelevant | 0 | 0 | The paper characterizes a scorpion toxin (HelaTx1) and its binding to ion channels, not the toxicokinetics of kurtoxin. |
| popPK | Weist_2014 | irrelevant | 0 | 0 | The paper focuses on BK polyomavirus (BKV) immune response and T cell immunity, not the toxicokinetics of the substance kurtoxin. |
| PGx | Werner_2010 | not_relevant | 0 | 0 | The paper discusses treatment of Hepatitis C and does not mention kurtoxin, gene variants, or pharmacokinetic/pharmacodynamic effects. |
| popPK | Wu_2026 | irrelevant | 0 | 0 | The paper focuses on renal transplantation and CCL2 inflammation in rats and does not contain any data or parameters for kurtoxin. |
| PGx | Yokoyama_2018 | not_relevant | 0 | 0 | The paper does not investigate kurtoxin; it analyzes the association between the PCK2 gene variant and new-onset glucose intolerance in kidney transplant recipients. |
| popPK | Zietse_1995 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for 125I-iothalamate and 131I-orthoiodohippurate, not for kurtoxin. |
| PGx | Zubidat_2023 | not_relevant | 0 | 0 | The paper studies bone mineral density in ADPKD patients and contains no data regarding kurtoxin. |
| popPK | unknown_2026 | irrelevant | 0 | 0 | The paper discusses lipid metabolites in kidney disease and does not mention kurtoxin or report any kinetic parameters for it. |
| PGx | Ściskalska_2026 | not_relevant | 0 | 0 | The paper studies native endothelin system biomarkers in kidney disease, not the pharmacokinetics or pharmacodynamics of kurtoxin. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bkurtoxin%5D&body=Drug%3A%20kurtoxin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_kurtoxin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
