<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03A&quot;,&quot;href&quot;:&quot;atc/R03A.md&quot;},{&quot;label&quot;:&quot;Tiotropium&quot;}]"></div>

# Tiotropium

- **generic name:** Tiotropium
- **ATC codes:** `R03AL06`, `R03AL10`, `R03BB04`, `R03BB54`
- **DrugBank:** [DB01409](https://go.drugbank.com/drugs/DB01409) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Tiotropium is an inhaled anticholinergic bronchodilator used to treat obstructive and other lung diseases, including pneumonia, bronchiectasis, and pulmonary hypertension. It is an approved medicine and is widely used as a maintenance inhalation treatment for obstructive airway diseases.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q424316](https://www.wikidata.org/wiki/Q424316) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-13 12:25 | 10:57 | 0/0/0 | 1/0/2 | 0/0/0 | 208,182/10,884 | ollama / qwen3.8:27b-mtp-q8_0 | 28 | 1/27 | 27/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by ollama:gpt-oss:120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span> | [Gong_2022_trough_FEV1](drugs/drug_tiotropium/pd_Gong_2022_trough_FEV1.md) | change from baseline in trough FEV1 ← olodaterol/tiotropium · stimulation effect | — | Gong Y et al., Quantitative analysis of efficacy and s…, Therapeutic advances in res… (2022) | [10.1177/17534666211066068](https://doi.org/10.1177/17534666211066068) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by ollama:gpt-oss:120b (not confirmed, agreement 0.571). Primary extraction retained.">cross-check: disputed</span> | [Llanos-Paez_2023_FEV1](drugs/drug_tiotropium/pd_Llanos_Paez_2023_FEV1.md) | forced expiratory volume in one second ← tiotropium · direct Emax (saturable) effect | — | Llanos-Paez C et al., Joint longitudinal model-based meta-ana…, Journal of pharmacokinetics… (2023) | [10.1007/s10928-023-09853-z](https://doi.org/10.1007/s10928-023-09853-z) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by ollama:gpt-oss:120b (not confirmed, agreement 0.571). Primary extraction retained.">cross-check: disputed</span> | [Llanos-Paez_2023_FEV1_2](drugs/drug_tiotropium/pd_Llanos_Paez_2023_FEV1_2.md) | forced expiratory volume in one second ← tiotropium · direct Emax (saturable) effect | — | Llanos-Paez C et al., Joint longitudinal model-based meta-ana…, Journal of pharmacokinetics… (2023) | [10.1007/s10928-023-09853-z](https://doi.org/10.1007/s10928-023-09853-z) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by ollama:gpt-oss:120b (not confirmed, agreement 0.571). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">mouse</span> | [Wollin_2010_bronchodilatory_activity](drugs/drug_tiotropium/pd_Wollin_2010_bronchodilatory_activity.md) | bronchodilatory activity ← tiotropium · direct Emax (saturable) effect | — | Wollin L et al., Tiotropium bromide exerts anti-inflamma…, Pulmonary pharmacology & th… (2010) | [10.1016/j.pupt.2010.03.008](https://doi.org/10.1016/j.pupt.2010.03.008) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by ollama:gpt-oss:120b (not confirmed, agreement 0.833). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">mouse</span> | [Wollin_2010_pulmonary_neutrophilic_inflammation](drugs/drug_tiotropium/pd_Wollin_2010_pulmonary_neutrophilic_inflammation.md) | pulmonary neutrophilic inflammation ← tiotropium · direct Emax (saturable) effect | — | Wollin L et al., Tiotropium bromide exerts anti-inflamma…, Pulmonary pharmacology & th… (2010) | [10.1016/j.pupt.2010.03.008](https://doi.org/10.1016/j.pupt.2010.03.008) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=tiotropium).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | `SLC22A4` substrate, `SLC22A5` substrate | DrugBank actor |
| absorption | skeletal muscle | `SLC22A5` substrate | DrugBank actor |
| absorption | small intestine | `SLC22A4` substrate, `SLC22A5` substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: CHRM1 (target), CHRM2 (target), CHRM3 (target), CHRM4 (target), CHRM5 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 98 matched, 77 returned
- **screened:** 7  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_7 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Borse_2025.pdf` | Borse K et al., Dendrimer-mediated proton sponge effect…, Drug delivery and translati… (2025) | popPK | 8 | [10.1007/s13346-024-01752-1](https://doi.org/10.1007/s13346-024-01752-1) | [39661313](https://pubmed.ncbi.nlm.nih.gov/39661313) | The study reports quantitative PK parameters (Cmax, AUC, t1/2) for tiotropium in a rat model, though specific clearance or volume values are not explicitly listed. |
| `Horhota_2015.pdf` | Horhota ST et al., In Vitro, Pharmacokinetic, Pharmacodyna…, The AAPS journal (2015) | popPK | 5 | [10.1208/s12248-015-9751-7](https://doi.org/10.1208/s12248-015-9751-7) | [25794622](https://pubmed.ncbi.nlm.nih.gov/25794622) | Human COPD PK study of tiotropium reporting bioequivalence comparisons (AUC, Cmax,ss, urinary excretion), but only relative percentages appear in the abstract; full numeric PK parameters likely in tables/supplementary not provided. |
| `Trifilieff_2015.pdf` | Trifilieff A et al., Comparing the cardiovascular therapeuti…, Toxicology and applied phar… (2015) | popPK | 5 | [10.1016/j.taap.2015.05.012](https://doi.org/10.1016/j.taap.2015.05.012) | [26026369](https://pubmed.ncbi.nlm.nih.gov/26026369) | Rat PK data for tiotropium were determined and used in an integrated model, but no numeric PK parameter values (CL, V, etc.) appear in the evidence, likely in supplementary material. |
| `Barton_2010.pdf` | Barton AK et al., Pharmacological studies of bronchial co…, Berliner und Munchener tier… (2010) | pd | 4 | not captured | [20496830](https://www.ncbi.nlm.nih.gov/pubmed/20496830) | metadata signals extractable PD data (EC50) |
| `Calzetta_2017.pdf` | Calzetta L et al., Pharmacological characterization of the…, COPD (2017) | pd | 4 | [10.1080/15412555.2017.1344627](https://doi.org/10.1080/15412555.2017.1344627) | [28745522](https://www.ncbi.nlm.nih.gov/pubmed/28745522) | metadata signals extractable PD data (Emax) |
| `Hegde_2014.pdf` | Hegde SS et al., Pharmacologic characterization of GSK-9…, The Journal of pharmacology… (2014) | pd | 4 | [10.1124/jpet.114.216861](https://doi.org/10.1124/jpet.114.216861) | [25100753](https://www.ncbi.nlm.nih.gov/pubmed/25100753) | metadata signals extractable PD data (EC50) |
| `Keam_2004.pdf` | Keam SJ et al., Tiotropium bromide. A review of its use…, Treatments in respiratory m… (2004) | pgx | 7 | [10.2165/00151829-200403040-00005](https://doi.org/10.2165/00151829-200403040-00005) | [15350163](https://www.ncbi.nlm.nih.gov/pubmed/15350163) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |

<sub>queue written 2026-10-13T12:22:58.028612+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Babu_2017 | irrelevant | 0 | 0 | Review of umeclidinium where tiotropium is only mentioned as a prior comparator; no tiotropium PK parameters reported. |
| popPK | Barton_2010 | irrelevant | 0 | 0 | In-vitro pharmacodynamic study of bronchodilation in horse lung slices; no PK parameters for tiotropium. |
| PGx | Bateman_2011 | not_relevant | 4 | 5 | Study is stratified by ADRB2 B16-Arg/Arg genotype but reports no genotype-based effect on tiotropium PK/PD parameters—only drug-vs-drug/placebo comparisons within a single genotype. |
| popPK | Bateman_2013 | irrelevant | 0 | 0 | The study is a pharmacodynamic evaluation of GSK961081 where tiotropium is used only as a comparator, and no pharmacokinetic parameters are reported. |
| popPK | Beeh_2014 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting lung function parameters (FEV1, FVC) and does not contain pharmacokinetic disposition parameters (CL, V, ka) for tiotropium. |
| popPK | Benson_2010 | irrelevant | 0 | 0 | The study focuses on the binding kinetics of reboxetine to the human noradrenaline transporter, not the pharmacokinetics of tiotropium. |
| popPK | Bjermer_2013 | irrelevant | 1 | 0 | Tiotropium is only a comparator in a COPD efficacy study of AZD9164; no tiotropium PK parameters are reported. |
| popPK | Borghardt_2016 | irrelevant | 0 | 0 | This is a population PK study of olodaterol, not tiotropium; no tiotropium parameters are reported. |
| popPK | Bédard_2012 | irrelevant | 0 | 0 | The study evaluates clinical efficacy (walking endurance and pulmonary function) in COPD patients and does not report pharmacokinetic parameters. |
| popPK | Calverley_2016 | irrelevant | 0 | 0 | The paper is a review of bronchodilator efficacy (lung function) and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for tiotropium. |
| popPK | Calzetta_2017 | irrelevant | 0 | 0 | no_text gate: only 143 chars of text extracted (&lt; 400) |
| popPK | Cazzola_2013 | irrelevant | 0 | 0 | The paper is a review of aclidinium bromide, with tiotropium serving only as a comparator drug, and no quantitative PK parameters for tiotropium are reported. |
| popPK | Celli_2012 | irrelevant | 0 | 0 | This is a COPD lung-function (inspiratory capacity) outcomes trial using tiotropium as treatment; no PK parameters (CL, V, ka, half-life, or PK model) for tiotropium are reported. |
| popPK | Church_2014 | irrelevant | 0 | 0 | This is a dose-response efficacy study of umeclidinium with tiotropium only as an open-label comparator; no PK disposition parameters (CL, V, ka, half-life) for tiotropium are reported, and UMEC PK values are not fully characterized. |
| popPK | Dhand_2017 | irrelevant | 0 | 0 | The paper is a review of clinical efficacy and safety outcomes, not a pharmacokinetic study, and contains no quantitative PK parameters for tiotropium. |
| popPK | Di_2006 | irrelevant | 0 | 0 | The study evaluates pharmacodynamic effects (FEV1, FVC) rather than pharmacokinetic parameters (CL, V, ka) for tiotropium. |
| popPK | Diderichsen_2013 | irrelevant | 0 | 0 | The paper models PKPD of PF-00610355 (a LABA), not tiotropium; tiotropium is not the subject drug and no tiotropium parameters appear. |
| popPK | Donohue_2012 | irrelevant | 1 | 0 | Tiotropium is used only as an open-label comparator for efficacy, and no quantitative pharmacokinetic parameters (CL, V, etc.) are reported for it in the evidence. |
| popPK | Fechner_2016 | irrelevant | 0 | 0 | The paper is a conference proceedings collection on chemoinformatics and computational chemistry, with no pharmacokinetic data for tiotropium. |
| popPK | Gong_2022 | irrelevant | 0 | 0 | This is a pharmacodynamic (Emax/efficacy-loss) meta-analysis of FEV1 for LABA/LAMA combinations; tiotropium is only one component drug and no PK parameters (CL, V, ka, half-life) are reported. |
| popPK | Gupta_2011 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of the novel compound RBx 343E48F0, with tiotropium serving only as a comparator/benchmark. |
| popPK | Halpin_2012 | irrelevant | 0 | 0 | This is a clinical efficacy analysis of COPD exacerbations and lung function decline in the UPLIFT trial, with no pharmacokinetic parameters (CL, V, ka, half-life, or PK model) for tiotropium reported. |
| popPK | Hegde_2014 | irrelevant | 0 | 0 | no_text gate: only 189 chars of text extracted (&lt; 400) |
| popPK | Hendrickx_2018 | irrelevant | 0 | 0 | The study focuses on a translational model for 12 other bronchodilators (e.g., glycopyrronium, indacaterol) and does not report pharmacokinetic parameters for tiotropium. |
| popPK | Hohlfeld_2014 | relevant | 4 | 5 | The study reports quantitative PK parameters (Cmax, AUC, tmax) for tiotropium in humans, but lacks compartmental model parameters (CL, V, ka) required for population PK extraction. |
| popPK | Horhota_2015 | relevant | 5 | 3 | Human COPD PK study of tiotropium reporting bioequivalence comparisons (AUC, Cmax,ss, urinary excretion), but only relative percentages appear in the abstract; full numeric PK parameters likely in tables/supplementary not provided. |
| popPK | Ichinose_2017 | irrelevant | 0 | 0 | This is a study-protocol paper for a COPD efficacy trial (lung hyperinflation, exercise capacity) with no PK parameters for tiotropium reported. |
| popPK | Jiang_2025 | irrelevant | 0 | 0 | Clinical effectiveness study of COPD therapies with tiotropium as a comparator arm; no PK parameters (CL, V, ka, half-life, or PK model) for tiotropium are reported. |
| popPK | Keam_2004 | relevant | 4 | 5 | The paper is a review that reports specific quantitative PK parameters (half-life, bioavailability, protein binding, Cmax) for tiotropium in the text, but lacks a full compartmental model or detailed clearance/volume values. |
| PGx | Keam_2004 | not_relevant | 0 | 0 | Review of tiotropium efficacy/tolerability with no gene variant or pharmacogenomic effect on PK/PD parameters reported. |
| popPK | Kerwin_2021 | irrelevant | 0 | 0 | The study is a Phase II efficacy and safety trial for glycopyrronium bromide where tiotropium serves only as an active comparator, with no pharmacokinetic parameters reported. |
| popPK | Koumis_2005 | irrelevant | 2 | 0 | This is a narrative review of tiotropium's clinical efficacy and general properties, lacking original quantitative pharmacokinetic parameter values (CL, V, etc.) in the provided text. |
| popPK | Kume_2018 | irrelevant | 0 | 0 | In vitro pharmacodynamics study of tiotropium as a bronchodilator in guinea pig trachealis; no PK disposition parameters (CL, V, ka, half-life, population-PK model) reported. |
| popPK | Leal_2023 | irrelevant | 0 | 0 | This is a population-wide polypharmacy/DDI dosage-adjustment study; tiotropium appears only as a co-medication example with an odds ratio, and no PK parameters (CL, V, ka, half-life) for tiotropium are reported. |
| popPK | Littner_2000 | irrelevant | 0 | 0 | The study reports pharmacodynamic outcomes (spirometry) rather than pharmacokinetic parameters (CL, V, t1/2). |
| popPK | Llanos-Paez_2023 | irrelevant | 2 | 3 | This is a model-based meta-analysis of FEV1/exacerbation efficacy in COPD, not a PK study; tiotropium appears only with efficacy (ED50/Effref) parameters, not disposition parameters like CL/V, and key estimates are in supplementary Table S2. |
| popPK | Maesen_1995 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of bronchodilator efficacy (FEV1, FVC) and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Mariotti_2018 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of CHF6001 (a PDE4 inhibitor), not tiotropium, which is only mentioned in the introduction as a comparator in preclinical models. |
| popPK | Musuamba_2015 | irrelevant | 0 | 0 | This is a KPD/disease-progression model for salmeterol in COPD; tiotropium is not the subject drug and no PK disposition parameters for it appear. |
| popPK | Nilsson_2010 | irrelevant | 2 | 0 | The study is a mechanistic imaging mass spectrometry analysis of tissue distribution in rats, reporting local concentrations (fmol/pmol) rather than systemic pharmacokinetic parameters like clearance, volume, or half-life. |
| popPK | Norris_2014 | irrelevant | 0 | 0 | The study investigates the pharmacology and pharmacokinetics of GSK961081, not tiotropium, which is only mentioned as a comparator in the introduction. |
| PGx | Novelli_2012 | not_relevant | 3 | 2 | Mentions β2-receptor polymorphism only in context of tiotropium efficacy vs salmeterol, with no PK/PD parameter or effect size reported. |
| PGx | Novelli_2013 | not_relevant | 3 | 4 | The Bateman study enrolled only B16 Arg/Arg asthmatics but reports no genotype-stratified comparison or fitted effect of genotype on tiotropium PK/PD parameters—only overall drug efficacy outcomes. |
| popPK | Pleasants_2016 | irrelevant | 0 | 0 | The paper is a review of umeclidinium, and tiotropium is only mentioned as a comparator for efficacy, with no PK parameters reported for tiotropium. |
| PGx | Rabe_2014 | not_relevant | 3 | 5 | ADRB2 genotype affects clinical exacerbation outcomes (efficacy), not a PK parameter or a defined PD parameter of tiotropium; no fitted effect sizes on PK/PD endpoints. |
| popPK | Radovanovic_2016 | irrelevant | 0 | 0 | The paper reviews formoterol/glycopyrronium, and tiotropium is only mentioned as a comparator in efficacy trials, with no PK parameters for tiotropium reported. |
| popPK | Rebello_2022 | irrelevant | 3 | 1 | A systematic review of inhaled-drug models mentioning tiotropium only as one of many drugs, with no numeric tiotropium PK parameters in the evidence. |
| popPK | Ren_2022 | irrelevant | 1 | 0 | This is a review/tutorial on slow reversible binding PK/PD modeling; tiotropium is only mentioned as an example of slow receptor dissociation (koff half-life 7.7 h), with no tiotropium PK disposition parameters reported (the CL/V model code lines relate to a hypothetical drug and candesartan). |
| popPK | Saberi_2005 | irrelevant | 0 | 0 | The paper is a clinical review of tiotropium's efficacy and safety in COPD management and does not report any quantitative pharmacokinetic parameters. |
| popPK | Schärfe_2017 | irrelevant | 0 | 0 | The paper is a pharmacogenomic analysis of genetic variants in drug-related genes and does not report any pharmacokinetic parameters for tiotropium. |
| popPK | Segreti_2014 | irrelevant | 0 | 0 | The paper is a review of umeclidinium, with tiotropium serving only as a comparator in efficacy trials, and no quantitative PK parameters for tiotropium are reported. |
| popPK | Singh_2017 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of glycopyrronium bromide (GB), with tiotropium serving only as a comparator for bronchodilator efficacy without reported PK parameters. |
| popPK | Singh_2018 | irrelevant | 2 | 0 | The study focuses on pharmacodynamics (FEV1) and in-vitro particle size, with no quantitative pharmacokinetic parameters (CL, V, etc.) reported in the evidence. |
| popPK | Sposato_2008 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of bronchoprotection (FEV1, PD15) and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for tiotropium. |
| PGx | Szefler_2012 | not_relevant | 3 | 1 | Review mentions pharmacogenetics and tiotropium only in passing, with no gene-variant effect on tiotropium PK/PD parameters reported. |
| popPK | Tashkin_2013 | irrelevant | 0 | 0 | This is a lung-function decline (FEV1/FVC slopes) analysis from the UPLIFT trial with no pharmacokinetic parameters for tiotropium. |
| popPK | Tashkin_2014 | irrelevant | 0 | 0 | This is a COPD clinical trial analyzing bronchodilator spirometry responses (FEV1/FVC), with no PK parameters (CL, V, ka, half-life, or population-PK model) for tiotropium reported. |
| PGx | Tautermann_2013 | not_relevant | 3 | 5 | Reports engineered receptor mutations affecting tiotropium dissociation kinetics, not a pharmacogenomic variant/genotype effect on PK/PD parameters in patients. |
| popPK | Taylor_2006 | irrelevant | 0 | 0 | The study focuses on the formulation and pharmacodynamics of ipratropium bromide, with tiotropium mentioned only as a clinical comparator for long-acting agents, and no PK parameters for tiotropium are reported. |
| popPK | Trifilieff_2015 | relevant | 5 | 2 | Rat PK data for tiotropium were determined and used in an integrated model, but no numeric PK parameter values (CL, V, etc.) appear in the evidence, likely in supplementary material. |
| popPK | Voskrebenzev_2026 | irrelevant | 0 | 0 | This is a lung MRI imaging study of tiotropium/olodaterol bronchodilator effects in COPD; no PK parameters (CL, V, ka, half-life, or population-PK model) for tiotropium are reported. |
| popPK | Wilson_2018 | irrelevant | 0 | 0 | The paper describes a computational method (PathFX) for drug safety and efficacy phenotyping and does not contain any pharmacokinetic data for tiotropium. |
| popPK | Wollin_2010 | irrelevant | 0 | 0 | The study investigates the anti-inflammatory and bronchodilatory efficacy of tiotropium in a mouse model, reporting pharmacodynamic endpoints (IC50, mediator levels) rather than pharmacokinetic disposition parameters (CL, V, t1/2). |
| popPK | Zhang_2021 | irrelevant | 0 | 0 | This is a systematic review of clinical efficacy (FEV1) and safety for revefenacin, where tiotropium is used only as a comparator drug, and no pharmacokinetic parameters are reported. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | This is a population PK/PD model of dupilumab in asthma; tiotropium is only mentioned as an approved comparator therapy, with no tiotropium PK parameters reported. |
| popPK | Zhao_2023 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on novel M3 receptor antagonists, using tiotropium only as a comparator for functional activity, with no pharmacokinetic data reported. |
| popPK | van_2002 | irrelevant | 0 | 0 | The study reports pharmacodynamic endpoints (FEV1, FVC) rather than pharmacokinetic parameters (CL, V, ka). |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
