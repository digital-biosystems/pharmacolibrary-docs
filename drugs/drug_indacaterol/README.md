<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03A&quot;,&quot;href&quot;:&quot;atc/R03A.md&quot;},{&quot;label&quot;:&quot;indacaterol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Indacaterol_Jiang2015_reference&quot;,&quot;label&quot;:&quot;Jiang_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_indacaterol/Indacaterol_Jiang2015_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Renard_2011_FEV1&quot;,&quot;label&quot;:&quot;Renard_2011 \u00b7 FEV1&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_indacaterol/pd_Renard_2011_FEV1.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Renard_2011_FEV1_2&quot;,&quot;label&quot;:&quot;Renard_2011 \u00b7 FEV1&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_indacaterol/pd_Renard_2011_FEV1_2.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# indacaterol

- **generic name:** indacaterol
- **ATC codes:** `R03AC18`, `R03AK14`, `R03AL04`
- **DrugBank:** [DB05039](https://go.drugbank.com/drugs/DB05039) · **PubChem:** [CID 6918554](https://pubchem.ncbi.nlm.nih.gov/compound/6918554)
- **molar mass:** 392.4907 g/mol (C24H28N2O3) — DrugBank
- **groups:** approved, investigational

## About

Indacaterol is an ultra-long-acting beta-2 adrenergic agonist used to treat chronic obstructive pulmonary disease. It is given by inhalation using a dry powder inhaler. It is authorised in the European Union for this indication.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q425654](https://www.wikidata.org/wiki/Q425654), [Wikipedia](https://en.wikipedia.org/wiki/Indacaterol?oldid=1385001637) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| indacaterol | parent | 392.491 | C24H28N2O3 | DrugBank | [6918554](https://pubchem.ncbi.nlm.nih.gov/compound/6918554) | Bartels_2021 |

## Start here

> **Jiang_2015_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> review reference. [Run it in the simulator](drugs/drug_indacaterol/Indacaterol_Jiang2015_reference.md?tab=Simulation) · [record](drugs/drug_indacaterol/Indacaterol_Jiang2015_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: unreported model parameter default(s): ka</sub> | [Jiang_2015_reference](drugs/drug_indacaterol/Indacaterol_Jiang2015_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Jiang J et al., Single- and multiple-dose pharmacokinet…, European journal of drug me… (2015) | [10.1007/s13318-014-0197-6](https://doi.org/10.1007/s13318-014-0197-6) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub> | [Bartels_2021_reference](drugs/drug_indacaterol/Indacaterol_Bartels2021_reference.md) | — | 1-compartment (no model) | 2 (+2 cov.) | Bartels C et al., Population Pharmacokinetic Analysis of…, European journal of drug me… (2021) | [10.1007/s13318-021-00689-x](https://doi.org/10.1007/s13318-021-00689-x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 0.70).">rat</span> | [Hendrickx_2018_Bronchoprotection](drugs/drug_indacaterol/pd_Hendrickx_2018_Bronchoprotection.md) | Inhibition of histamine-induced bronchoconstriction (guinea pig lung efficacy) ← indacaterol · direct sigmoid Emax (Hill) effect | — | Hendrickx R et al., Translational model to predict pulmonar…, CPT: pharmacometrics & syst… (2018) | [10.1002/psp4.12270](https://doi.org/10.1002/psp4.12270) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 0.70).">rat</span> | [Hendrickx_2018_FEV1](drugs/drug_indacaterol/pd_Hendrickx_2018_FEV1.md) | Placebo-corrected change in trough FEV1 from baseline (COPD patients, beta-2 agonist class) ← indacaterol · direct Emax (saturable) effect | — | Hendrickx R et al., Translational model to predict pulmonar…, CPT: pharmacometrics & syst… (2018) | [10.1002/psp4.12270](https://doi.org/10.1002/psp4.12270) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Llanos-Paez_2023_ER](drugs/drug_indacaterol/pd_Llanos_Paez_2023_ER.md) | Mean annual rate of moderate or severe exacerbations ← indacaterol · inhibition effect | — | Llanos-Paez C et al., Joint longitudinal model-based meta-ana…, Journal of pharmacokinetics… (2023) | [10.1007/s10928-023-09853-z](https://doi.org/10.1007/s10928-023-09853-z) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Llanos-Paez_2023_FEV1](drugs/drug_indacaterol/pd_Llanos_Paez_2023_FEV1.md) | Morning trough FEV1 ← indacaterol · direct Emax (saturable) effect | — | Llanos-Paez C et al., Joint longitudinal model-based meta-ana…, Journal of pharmacokinetics… (2023) | [10.1007/s10928-023-09853-z](https://doi.org/10.1007/s10928-023-09853-z) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Naline_2007_EFS_induced_contraction](drugs/drug_indacaterol/pd_Naline_2007_EFS_induced_contraction.md) | EFS-induced contraction ← indacaterol · direct Emax (saturable) effect | — | Naline E et al., Effect of indacaterol, a novel long-act…, The European respiratory jo… (2007) | [10.1183/09031936.00032806](https://doi.org/10.1183/09031936.00032806) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Naline_2007_relaxant_effect](drugs/drug_indacaterol/pd_Naline_2007_relaxant_effect.md) | relaxant effect ← indacaterol · direct Emax (saturable) effect | — | Naline E et al., Effect of indacaterol, a novel long-act…, The European respiratory jo… (2007) | [10.1183/09031936.00032806](https://doi.org/10.1183/09031936.00032806) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Renard_2011_FEV1](drugs/drug_indacaterol/pd_Renard_2011_FEV1.md) | trough FEV1 (improvement vs placebo, steady state) ← indacaterol · direct Emax (saturable) effect | ▶ model + simulator | Renard D et al., Characterization of the bronchodilatory…, Respiratory research (2011) | [10.1186/1465-9921-12-54](https://doi.org/10.1186/1465-9921-12-54) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Renard_2011_FEV1_2](drugs/drug_indacaterol/pd_Renard_2011_FEV1_2.md) | trough FEV1 (patient-level, improvement over placebo) ← indacaterol · direct Emax (saturable) effect | ▶ model + simulator | Renard D et al., Characterization of the bronchodilatory…, Respiratory research (2011) | [10.1186/1465-9921-12-54](https://doi.org/10.1186/1465-9921-12-54) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Gong_2022_trough_FEV1](drugs/drug_indacaterol/pd_Gong_2022_trough_FEV1.md) | change from baseline in trough FEV1 ← indacaterol/glycopyrronium · direct Emax (saturable) effect | — | Gong Y et al., Quantitative analysis of efficacy and s…, Therapeutic advances in res… (2022) | [10.1177/17534666211066068](https://doi.org/10.1177/17534666211066068) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 00:23 | 0:06 | 1/1/0 | 8/1/0 | 0/0/0 | 3,367/174 | einfracz / qwen3.8-27b | 12 | 2/7 | 12/0 | 0 |

## Coverage

- **PubMed hits:** 64 matched, 64 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 0  ·  needs review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aparici_2012 | irrelevant | 0 | 0 | The study focuses on the pharmacological characterization of abediterol, with indacaterol serving only as a comparator for efficacy and safety, and no PK parameters for indacaterol are reported. |
| PGx | Aparici_2012 | not_relevant | 0 | 0 | The paper is a preclinical pharmacological characterization of abediterol and does not investigate the effect of any gene variant, genotype, or phenotype on the PK or PD parameters of indacaterol. |
| popPK | Babu_2017 | irrelevant | 0 | 0 | The paper is a review of umeclidinium (a LAMA) and does not report pharmacokinetic data for indacaterol. |
| PGx | Babu_2017 | not_relevant | 0 | 0 | The paper reviews umeclidinium (and vilanterol) but does not discuss indacaterol or any pharmacogenomic effects on PK/PD parameters. |
| popPK | Bartels_2013 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for glycopyrronium, not indacaterol. |
| PGx | Bartels_2013 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics of glycopyrronium, not indacaterol, and reports no pharmacogenomic effects. |
| popPK | Battram_2006 | irrelevant | 0 | 0 | The study focuses on in vitro and in vivo pharmacological characterization (receptor binding, functional selectivity, and duration of bronchoprotection) rather than quantitative pharmacokinetic disposition parameters like clearance or volume of distribution. |
| PGx | Battram_2006 | not_relevant | 0 | 0 | The paper describes general preclinical pharmacology of indacaterol but contains no information on genetic variants or pharmacogenomic effects. |
| popPK | Beeh_2011 | irrelevant | 0 | 0 | The study is a clinical pharmacodynamic/efficacy trial evaluating lung function (IC, FEV1) and does not report any pharmacokinetic disposition parameters (CL, V, t1/2) for indacaterol. |
| PGx | Beeh_2011 | not_relevant | 0 | 0 | The study evaluates the clinical efficacy of indacaterol in COPD patients but does not involve pharmacogenomic analysis or genotype-based stratification. |
| popPK | Borghardt_2016 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of olodaterol, not indacaterol. |
| PGx | Borghardt_2016 | not_relevant | 0 | 0 | The paper analyzes the pharmacokinetics of olodaterol, not indacaterol, and does not report any pharmacogenomic effects. |
| popPK | Cazzola_2013_2 | irrelevant | 0 | 0 | This is a clinical pharmacodynamic study measuring FEV1 responses, not a pharmacokinetic study reporting clearance, volume, or half-life. |
| PGx | Cazzola_2013_2 | not_relevant | 0 | 0 | The study evaluates the tolerance to indacaterol and its effect on salbutamol response in COPD patients but contains no data on gene variants or pharmacogenomics. |
| popPK | Cazzola_2014 | irrelevant | 2 | 0 | The paper is a review of indacaterol's pharmacokinetics in COPD but contains only qualitative descriptions (e.g., "two phases," "rapidly absorbed") without any quantitative numeric parameter values (CL, V, t1/2) for indacaterol. |
| PGx | Cazzola_2014 | not_relevant | 0 | 0 | The paper is a general pharmacokinetic review that discusses demographic covariates and enzymes (CYP3A/UGT1A1) but does not report specific genetic variant effects on indacaterol PK/PD parameters. |
| popPK | Demin_2016 | relevant | 10 | 2 | The paper describes a population PK model for indacaterol in COPD patients and mentions covariate effects on clearance and volume, but the specific numeric parameter estimates (mean CL, V, etc.) are not provided in the evidence text, likely residing in tables or supplementary material. |
| PGx | Demin_2016 | not_relevant | 0 | 0 | The paper reports population PK covariates (smoking, age, sex, ethnicity) but does not investigate specific gene variants or genotypes (pharmacogenomics). |
| popPK | Diderichsen_2013 | irrelevant | 0 | 0 | The paper focuses on the pharmacodynamic effect (heart rate) of PF-00610355 rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, etc.) for indacaterol. |
| PGx | Diderichsen_2013 | not_relevant | 0 | 0 | The study analyzes population PK/PD effects of demographic and disease variables but does not investigate pharmacogenomic factors or gene variants. |
| popPK | Drollmann_2014 | irrelevant | 2 | 0 | The study is a cardiac safety/pharmacodynamic assessment and mentions PK parameters, but the specific quantitative PK values are not provided in the evidence. |
| PGx | Drollmann_2014 | not_relevant | 0 | 0 | The study assesses cardiovascular safety and PK/PD relationships in healthy volunteers but does not investigate gene variants or pharmacogenomic factors. |
| popPK | Fricke-Galindo_2022 | irrelevant | 0 | 0 | The paper is a pharmacogenomic review that explicitly states there is no influence of genetic variants on indacaterol pharmacokinetics but does not report any quantitative PK parameter values. |
| PGx | Fricke-Galindo_2022 | not_relevant | 0 | 0 | The text states that there is a lack of influence of genetic variants on the pharmacokinetics of indacaterol, rather than reporting a specific pharmacogenomic effect. |
| popPK | Frojuello_2026 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on novel MABA compounds, using indacaterol only as a structural reference/comparator, and does not report pharmacokinetic parameters for indacaterol. |
| PGx | Frojuello_2026 | not_relevant | 0 | 0 | The paper reports the discovery and optimization of a new drug class (MABAs) using indacaterol as a structural scaffold, but it does not investigate any pharmacogenomic effects of indacaterol itself. |
| popPK | Ge_2018 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study on synthesized β2-adrenoceptor agonists and does not report pharmacokinetic parameters for indacaterol. |
| PGx | Ge_2018 | not_relevant | 0 | 0 | The paper describes the synthesis and in vitro evaluation of new beta-2 agonists, not the pharmacogenomics of indacaterol. |
| popPK | Gong_2022 | irrelevant | 0 | 0 | This is a pharmacodynamic (Emax/efficacy-loss) MBMA of FEV1 for LABA/LAMA combinations, not a PK study; no indacaterol disposition parameters (CL, V, ka, half-life) are reported. |
| popPK | Hendrickx_2018 | relevant | 7 | 2 | Indacaterol is one of 12 bronchodilators modeled with a compartmental PK model, but its numeric parameter values (CL, CLD, k32, etc.) reside in supplementary tables (S2–S6) not included in the evidence; only an accumulation ratio (1.3–2.6-fold) appears. |
| popPK | Hosoe_2011 | irrelevant | 2 | 0 | The study is a clinical trial focusing on efficacy and safety in humans, and while it mentions PK, the specific quantitative parameter values (CL, V, etc.) are not provided in the text. |
| PGx | Hosoe_2011 | not_relevant | 0 | 0 | The study compares ethnic groups (Caucasian vs. Japanese) but does not investigate specific gene variants or genotypes affecting pharmacokinetics. |
| popPK | Hu_2025 | relevant | 5 | 1 | The study reports AUC and Cmax for indacaterol (in HL231 and Ultibro) in humans, but these are non-compartmental parameters, not the specific disposition parameters (CL, V, Q, ka, half-life) requested for population PK extraction. |
| PGx | Hu_2025 | not_relevant | 0 | 0 | The paper is a randomized clinical trial investigating the efficacy, pharmacokinetics, and safety of a nebulized drug formulation in COPD patients, but it does not analyze the impact of gene variants or genotypes on these parameters. |
| popPK | Jiang_2026 | irrelevant | 0 | 0 | The study focuses on indacaterol's mechanism as a NETs inhibitor in tumor metastasis models, not on its population pharmacokinetics. |
| PGx | Jiang_2026 | not_relevant | 0 | 0 | The paper investigates indacaterol as a NET inhibitor for cancer metastasis and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Joshi_2015 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic/mechanistic investigation of gene transcription and does not report any pharmacokinetic parameters. |
| PGx | Joshi_2015 | not_relevant | 2 | 5 | The paper reports a pharmacodynamic interaction (indacaterol enhancing GR-mediated transcription) but does not investigate or report effects of specific gene variants or genotypes on this parameter. |
| popPK | Kempsford_2014 | irrelevant | 0 | 0 | This is a TQT study of fluticasone furoate/vilanterol; indacaterol is not the subject drug and no indacaterol PK parameters appear. |
| popPK | Llanos-Paez_2023 | irrelevant | 1 | 1 | This is a model-based meta-analysis of FEV1 and exacerbation rate in COPD trials; indacaterol appears only as a treatment arm with efficacy (ED50/Effref) parameters, not PK disposition parameters, and new parameter estimates are in supplementary material. |
| popPK | Mathioudakis_2026 | irrelevant | 0 | 0 | The paper is a post hoc analysis of exacerbation rates in a clinical trial and does not report pharmacokinetic parameters for indacaterol. |
| PGx | Mathioudakis_2026 | not_relevant | 0 | 0 | The paper reports the effect of treatment withdrawal on COPD exacerbation risk but does not investigate any pharmacogenomic variants or their influence on pharmacokinetic or pharmacodynamic parameters of indacaterol. |
| popPK | Metaxas_2018 | irrelevant | 2 | 0 | This is a review article focusing on safety which mentions pharmacokinetics but does not provide original quantitative parameter values or a specific model in the extracted evidence. |
| PGx | Metaxas_2018 | not_relevant | 0 | 0 | The paper is a safety review of indacaterol and does not report any pharmacogenomic effects or gene-variant analyses on PK/PD parameters. |
| popPK | Naline_2007 | irrelevant | 0 | 0 | The study evaluates pharmacodynamics (relaxant effect, potency) in isolated human bronchi, not pharmacokinetic disposition parameters. |
| PGx | Naline_2007 | not_relevant | 0 | 0 | The study evaluates the pharmacodynamic effects of indacaterol on isolated human bronchi but does not investigate the influence of gene variants or genotypes (pharmacogenomics) on these parameters. |
| popPK | Peach_2012 | irrelevant | 0 | 0 | The paper is a review of computational tools for metabolism predictions and does not report experimental pharmacokinetic parameters for indacaterol. |
| PGx | Peach_2012 | not_relevant | 0 | 0 | The paper reviews computational tools for metabolism prediction and contains no data on pharmacogenomic effects on indacaterol. |
| popPK | Rebello_2022 | irrelevant | 0 | 0 | This is a systematic review of modelling techniques for inhaled drugs and does not report original quantitative pharmacokinetic parameters for indacaterol. |
| PGx | Rebello_2022 | not_relevant | 0 | 0 | The paper is a systematic review of modelling techniques for inhaled drugs and does not report specific pharmacogenomic effects on the PK/PD of indacaterol. |
| PGx | Ren_2017 | not_relevant | 0 | 0 | The paper reports population PK parameters in healthy Chinese subjects but does not report any gene variant, genotype, or phenotype-specific pharmacogenomic effects. |
| popPK | Renard_2011 | irrelevant | 1 | 0 | This is a pharmacodynamic (Emax) dose-response analysis of trough FEV1 in COPD patients, not a PK study; no clearance, volume, or disposition parameters for indacaterol are reported. |
| popPK | Sayers_2009 | irrelevant | 0 | 0 | The study is a pharmacogenetic/in-vitro investigation of receptor efficacy and potency, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Scola_2009 | irrelevant | 0 | 0 | The study is a mechanistic in vitro investigation of anti-inflammatory effects on mast cells and reports no pharmacokinetic parameters (CL, V, ka, etc.) for indacaterol. |
| PGx | Scola_2009 | not_relevant | 0 | 0 | The study investigates the pharmacodynamic effects of indacaterol on human lung mast cells in a laboratory setting and does not report any pharmacogenomic effects (gene variant/genotype) on PK or PD parameters. |
| popPK | Summerhill_2008 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic assay assessing receptor persistence, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Summerhill_2008 | not_relevant | 0 | 0 | The paper describes a cell-based assay for pharmacodynamic persistence of action (agonism) and does not report any genetic variants or pharmacogenomic effects. |
| popPK | Tamm_2012 | irrelevant | 0 | 0 | The paper is a review of pharmacological profiles and does not contain quantitative PK parameters for indacaterol in the provided evidence. |
| PGx | Tamm_2012 | not_relevant | 0 | 0 | The text discusses pharmacological profiles of asthma therapies but does not report any specific gene variant or genotype associated with a pharmacokinetic or pharmacodynamic effect. |
| popPK | Vande_2012 | irrelevant | 0 | 0 | This is a narrative review summarizing FDA approvals and general characteristics of new drugs in 2011, without providing any quantitative pharmacokinetic parameter values for indacaterol. |
| PGx | Vande_2012 | not_relevant | 0 | 0 | The paper is a review of drug approvals and does not report any genetic variants or pharmacogenomic data affecting indacaterol's PK or PD. |
| popPK | Wang_2012 | irrelevant | 4 | 0 | The study is a model-based dose-response analysis (PD) and critiques the sponsor's PK/PD model, but the provided text does not contain any explicit quantitative PK parameter values (CL, V, etc.) for indacaterol. |
| PGx | Wang_2012 | not_relevant | 0 | 0 | The paper evaluates a dose-response model for indacaterol but focuses on dosing and model validity, not pharmacogenomic effects. |
| popPK | Wang_2020 | irrelevant | 0 | 0 | Indacaterol is used only as a comparator in a CYP1B1 inhibition assay, with no population pharmacokinetic parameters (CL, V, ka, etc.) reported. |
| PGx | Wang_2020 | not_relevant | 0 | 0 | The paper reports in vitro CYP1B1 inhibition and cytotoxicity of carvedilol and indacaterol, but does not investigate how genetic variants affect the pharmacokinetics or pharmacodynamics of indacaterol. |
| popPK | Xing_2019 | irrelevant | 0 | 0 | The study is an in vitro pharmacological evaluation of novel beta-2 agonists, not a pharmacokinetic study of indacaterol, and contains no disposition parameters. |
| PGx | Xing_2019 | not_relevant | 0 | 0 | The paper describes the synthesis and biological evaluation of novel beta-2 adrenoceptor agonists, not the pharmacogenomics of indacaterol. |
| popPK | Xing_2021 | irrelevant | 0 | 0 | The study focuses on the design, synthesis, and in vitro/in ex vivo activity of new β2-agonists, with no pharmacokinetic modeling or indacaterol disposition data. |
| PGx | Xing_2021 | not_relevant | 0 | 0 | The paper reports in-vitro and ex-vivo activity of new beta-2 agonist analogues, not pharmacogenomic effects on indacaterol PK/PD. |
| popPK | Yelensky_2012 | irrelevant | 0 | 0 | The paper is a pharmacogenetic study analyzing the association between ADRB2 polymorphisms and indacaterol response (FEV1, exacerbations), and it does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| PGx | Yelensky_2012 | not_relevant | 5 | 2 | The paper reports a negative association (little evidence of effect) between ADRB2 polymorphisms and indacaterol response, rather than a specific pharmacogenomic effect size. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bindacaterol%5D&body=Drug%3A%20indacaterol%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_indacaterol/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-10-07 14:04 UTC</sub>
