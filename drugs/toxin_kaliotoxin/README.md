<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Kaliotoxin&quot;}]"></div>

# Kaliotoxin

- **generic name:** Kaliotoxin
- **T3DB:** [T3D2515](http://www.t3db.ca/toxins/T3D2515) · **PubChem:** none

## About

Kaliotoxin is a peptide toxin produced by the Manchurian scorpion (Buthus martensii). It is a neurotoxin that binds to voltage-gated and calcium-activated potassium channels.

- **Category:** Protein, Natural Toxin, Animal Toxin
- **Route of exposure:** injection (sting/bite)
- **Sources and uses:** Kaliotoxin is a peptide toxin produced by the Manchurian scorpion (Buthus martensii).
- **Mechanism of toxicity:** Kaliotoxin is a neurotoxin that binds to voltage-gated and calcium-activated potassium channels. It binds to the extracellular surface and blocks the channel, affecting the regulation of processes such as neurotransmitter release, heart rate, insulin secretion, smooth muscle contraction.
- **Health effects:** Kaliotoxin is neurotoxic.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2515">T3DB T3D2515</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 145199-73-1</small></p>

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
| 2026-11-10 06:08 | 12:52 | 0/0/0 | 0/0/0 | 0/0/0 | 359,536/8,352 | einfracz / qwen3.8-27b | 17 | 4/13 | 17/0 | 0 |

## Coverage

- **PubMed hits:** 56 matched, 56 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Luna-Ramirez_2020.pdf` | Luna-Ramirez K et al., Structural basis of the potency and sel…, Biochemical pharmacology (2020) | pd | 4 | [10.1016/j.bcp.2019.113782](https://doi.org/10.1016/j.bcp.2019.113782) | [31881193](https://www.ncbi.nlm.nih.gov/pubmed/31881193) | metadata signals extractable PD data (IC50) |
| `Rochat_1998.pdf` | Rochat H et al., Maurotoxin, a four disulfide bridges sc…, Toxicon : official journal… (1998) | pd | 4 | [10.1016/s0041-0101(98)00153-6](https://doi.org/10.1016/s0041-0101(98)00153-6) | [9792177](https://www.ncbi.nlm.nih.gov/pubmed/9792177) | metadata signals extractable PD data (IC50) |
| `Hryniewiecka_2020.pdf` | Hryniewiecka E et al., Worsening of Kidney Transplant Function…, Transplantation proceedings (2020) | pgx | 8 | [10.1016/j.transproceed.2020.02.088](https://doi.org/10.1016/j.transproceed.2020.02.088) | [32222391](https://www.ncbi.nlm.nih.gov/pubmed/32222391) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Obayemi_2024.pdf` | Obayemi JE et al., Assessing the Utility of a Genotype-Gui…, Journal of clinical pharmac… (2024) | pgx | 8 | [10.1002/jcph.2461](https://doi.org/10.1002/jcph.2461) | [38766706](https://www.ncbi.nlm.nih.gov/pubmed/38766706) | metadata signals extractable PGX data (CYP3A5, PK/PD-context) |
| `Amanova_2014.pdf` | Amanova A et al., Colchicine levels in chronic kidney dis…, Clinical transplantation (2014) | pgx | 7 | [10.1111/ctr.12448](https://doi.org/10.1111/ctr.12448) | [25125128](https://www.ncbi.nlm.nih.gov/pubmed/25125128) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-11-10 06:06 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aksamit_2012 | irrelevant | 0 | 0 | The paper studies homocysteine levels in kidney transplant patients and does not mention or measure kaliotoxin. |
| PGx | Amanova_2014 | not_relevant | 0 | 0 | The paper focuses on colchicine PK changes due to renal function and tacrolimus interaction, not kaliotoxin or pharmacogenomic effects. |
| popPK | B_2018 | irrelevant | 0 | 0 | The paper characterizes the mechanism of action and pharmacology (IC50) of AbeTx1 (from Actinia bermudensis) on ion channels, which is a different substance from kaliotoxin, and contains no toxicokinetic parameters. |
| popPK | Chaiyabutr_2026 | irrelevant | 0 | 0 | The paper studies the cardiovascular and renal effects of whole scorpion venoms (Heterometrus laoticus and Lychas mucronatus) and does not report specific toxicokinetic parameters (half-life, clearance, etc.) for the substance kaliotoxin. |
| popPK | Covali-Pontes_2025 | irrelevant | 0 | 0 | The paper analyzes the composition and biological activity of Tityus paraguayensis venom but does not report any quantitative toxicokinetic parameters for kaliotoxin. |
| popPK | Drevland_2024 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of tacrolimus in kidney transplant patients and does not mention or measure the substance kaliotoxin. |
| popPK | Endo_2022 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for mycophenolic acid (MPA), tacrolimus, and everolimus in kidney transplant patients, but does not contain any data for kaliotoxin. |
| PGx | Fragoulakis_2024 | not_relevant | 0 | 0 | The paper analyzes cost-utility for tacrolimus, not kaliotoxin, and does not report specific PK/PD parameters altered by genetics. |
| popPK | Freire_2019 | irrelevant | 0 | 0 | The paper reports the molecular structure and docking interactions of the toxin with a potassium channel, providing no pharmacokinetic or toxicokinetic parameters (half-life, clearance, partition coefficients, etc.). |
| PGx | Galvez_2023 | not_relevant | 0 | 0 | The paper studies tacrolimus, not kaliotoxin. |
| popPK | Gil_2018 | irrelevant | 0 | 0 | The paper studies growth hormone treatment in kidney transplant patients and does not report any data on kaliotoxin. |
| popPK | Golshayan_2023 | irrelevant | 0 | 0 | The paper discusses complement pathway targeting in kidney transplantation and contains no data or parameters for kaliotoxin. |
| popPK | Hidaka_2022 | irrelevant | 0 | 0 | The paper reports pharmacokinetics and outcomes for tacrolimus in kidney transplant patients, with no mention of kaliotoxin. |
| popPK | Holgersson_2014 | irrelevant | 0 | 0 | The paper discusses the ABO blood group system and transplantation, containing no information or kinetic parameters for kaliotoxin. |
| popPK | Hryniewiecka_2020 | irrelevant | 0 | 0 | The paper focuses on the pharmacogenetics of tacrolimus and cyclosporine in kidney transplant patients and does not mention kaliotoxin. |
| PGx | Hryniewiecka_2020 | not_relevant | 0 | 0 | The paper discusses pharmacogenomics of tacrolimus and cyclosporine, not kaliotoxin. |
| PGx | Huart_2018 | not_relevant | 0 | 0 | The paper reviews genetic susceptibility to delayed graft function in kidney transplantation and does not mention kaliotoxin or report pharmacokinetic/pharmacodynamic effects on this drug. |
| popPK | Jain_2002 | irrelevant | 0 | 0 | The paper focuses on tacrolimus and antiretroviral interactions, with no mention or data for kaliotoxin. |
| popPK | Jain_2024 | irrelevant | 0 | 0 | The paper concerns kidney transplant patient creatinine clearance and does not mention kaliotoxin or provide kinetic parameters for it. |
| popPK | Jasminka_2015 | irrelevant | 0 | 0 | The paper reports on cardiovascular outcomes in renal transplant patients and contains no data for kaliotoxin. |
| popPK | Kalman_1998 | irrelevant | 0 | 0 | The paper reports that kaliotoxin is ineffective (insensitive) in blocking the Kv1.7 channel, which is a pharmacological activity observation, not a quantitative toxicokinetic parameter. |
| popPK | Karadkhele_2021 | irrelevant | 0 | 0 | The paper studies CMV and belatacept in kidney transplant recipients and does not mention kaliotoxin or provide any toxicokinetic parameters for it. |
| popPK | Khan_2025 | irrelevant | 0 | 0 | The paper is a systematic review of therapies for renal ischemia-reperfusion injury and does not mention kaliotoxin or provide any toxicokinetic parameters for it. |
| popPK | Kharrat_1996 | irrelevant | 0 | 0 | The paper focuses on the synthesis and characterization of maurotoxin, with kaliotoxin appearing only as a reference ligand for binding studies, and no kinetic parameters for kaliotoxin are reported. |
| PGx | Kitamura_2026 | not_relevant | 0 | 0 | The paper investigates genetic variants related to bone metabolism and does not mention kaliotoxin or its pharmacokinetics/pharmacodynamics. |
| popPK | Kuczera_2022 | irrelevant | 0 | 0 | The paper discusses infertility and hormonal changes in chronic kidney disease and does not mention kaliotoxin or provide any toxicokinetic parameters for it. |
| popPK | Latta_1996 | irrelevant | 0 | 0 | The paper reports clinical outcomes of liver transplantation for primary hyperoxaluria and does not contain any toxicokinetic parameters for kaliotoxin. |
| popPK | Luna-Ramirez_2020 | irrelevant | 0 | 0 | The paper focuses on the structural basis and electrophysiological potency of Urotoxin on potassium channels, containing no toxicokinetic parameters (half-life, clearance, distribution) for kaliotoxin or any other substance. |
| popPK | Miyashita_2024 | irrelevant | 0 | 0 | The paper characterizes the primary structure (amino acid sequences) and structural models of kaliotoxins, but contains no quantitative toxicokinetic parameters (such as half-life, clearance, or partition coefficients). |
| popPK | Obayemi_2022 | irrelevant | 0 | 0 | The paper focuses on tacrolimus pharmacogenomics and transplant outcomes, containing no data or parameters for kaliotoxin. |
| PGx | Obayemi_2022 | not_relevant | 0 | 0 | The paper studies the effect of CYP3A5 variants on the pharmacokinetics and clinical outcomes of tacrolimus, not kaliotoxin. |
| popPK | Obayemi_2024 | irrelevant | 0 | 0 | no_text gate: only 153 chars of text extracted (&lt; 400) |
| PGx | Obayemi_2024 | not_relevant | 0 | 0 | The paper discusses tacrolimus pharmacogenomics, not kaliotoxin. |
| popPK | Olejnik_2025 | irrelevant | 0 | 0 | The paper studies cognitive impairment in kidney transplant patients and contains no data on kaliotoxin. |
| popPK | Oyama_2005 | irrelevant | 0 | 0 | The paper investigates the structural features and pH-dependent conformational stability of the toxin using NMR and MD simulations, providing no toxicokinetic parameters such as half-life, clearance, or partition coefficients. |
| popPK | Paluszkiewicz_2021 | irrelevant | 0 | 0 | The paper is a review on nanoparticles for kidney disease and does not report any kinetic parameters for kaliotoxin. |
| popPK | Pöge_2011 | irrelevant | 0 | 0 | The paper validates GFR estimation formulas in renal transplant patients and does not report any toxicokinetic parameters for kaliotoxin. |
| popPK | Rochat_1998 | irrelevant | 0 | 0 | The paper studies maurotoxin, not kaliotoxin, and provides no toxicokinetic parameters for the target substance. |
| popPK | Romi_1993 | irrelevant | 1 | 1 | The paper reports pharmacological potency (LD50, Kd) and binding data for kaliotoxin, but contains no quantitative toxicokinetic parameters such as half-life, clearance, or volume of distribution. |
| popPK | Smith_2005 | irrelevant | 0 | 0 | The paper discusses KTX 0101 (sodium beta-hydroxybutyrate), not kaliotoxin, and provides no kinetic parameters for the target substance. |
| popPK | Sundberg_2005 | irrelevant | 0 | 0 | The paper focuses on alemtuzumab in transplant patients and does not mention kaliotoxin. |
| PGx | Tashiro_2025 | not_relevant | 0 | 0 | The paper discusses rituximab, not kaliotoxin. |
| popPK | Vandendriessche_2012 | irrelevant | 0 | 0 | The paper characterizes the molecular structure and functional binding of HelaTx1 (a scorpion toxin) on ion channels, but does not report any toxicokinetic parameters (e.g., half-life, clearance, distribution) for kaliotoxin. |
| popPK | Weist_2014 | irrelevant | 0 | 0 | The paper focuses on the immunology of BKV-specific T cells in kidney transplant patients and contains no toxicokinetic data for kaliotoxin. |
| PGx | Werner_2010 | not_relevant | 0 | 0 | The paper discusses hepatitis C treatment in renal patients and does not mention kaliotoxin or any pharmacogenomic effects on its PK/PD parameters. |
| popPK | Wu_2026 | irrelevant | 0 | 0 | The paper studies kidney transplantation in rats and does not mention kaliotoxin or provide any toxicokinetic parameters for it. |
| PGx | Yokoyama_2018 | not_relevant | 0 | 0 | The paper investigates the association between PCK2 SNPs and new-onset glucose intolerance in kidney transplant recipients, not a pharmacogenomic effect on the PK/PD of kaliotoxin. |
| popPK | Zietse_1995 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for clearance markers (125I-iothalamate and 131I-orthoiodohippurate) used to measure renal function, not for kaliotoxin. |
| PGx | Zubidat_2023 | not_relevant | 0 | 0 | The paper does not mention kaliotoxin and focuses on bone mineral density in ADPKD patients. |
| popPK | unknown_2026 | irrelevant | 0 | 0 | The paper is a review of lipids in kidney disease and contains no data, parameters, or mention of kaliotoxin. |
| PGx | Ściskalska_2026 | not_relevant | 0 | 0 | The paper investigates the relationship between genetic variants and endothelin biomarkers in kidney disease, but does not mention kaliotoxin or its PK/PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bkaliotoxin%5D&body=Drug%3A%20kaliotoxin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_kaliotoxin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
