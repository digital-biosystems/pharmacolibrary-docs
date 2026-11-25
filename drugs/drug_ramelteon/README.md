<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;ramelteon&quot;}]"></div>

# ramelteon

- **generic name:** ramelteon
- **ATC codes:** `N05CH02`
- **DrugBank:** [DB00980](https://go.drugbank.com/drugs/DB00980) · **PubChem:** [CID 208902](https://pubchem.ncbi.nlm.nih.gov/compound/208902)
- **molar mass:** 259.3434 g/mol (C16H21NO2) — DrugBank
- **groups:** approved, investigational

## About

Ramelteon is a melatonin receptor agonist medication used to treat insomnia and sleep-wake disorders. It is administered orally in tablet form.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q417689](https://www.wikidata.org/wiki/Q417689), [Wikipedia](https://en.wikipedia.org/wiki/Ramelteon?oldid=1362641733) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ramelteon | parent | 259.343 | C16H21NO2 | DrugBank | [208902](https://pubchem.ncbi.nlm.nih.gov/compound/208902) | Greenblatt_2007 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub> | [Greenblatt_2007_reference](drugs/drug_ramelteon/Ramelteon_Greenblatt2007_reference.md) | — | 1-compartment (no model) | 2 | Greenblatt DJ et al., Age and gender effects on the pharmacok…, Journal of clinical pharmac… (2007) | [10.1177/0091270006298602](https://doi.org/10.1177/0091270006298602) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">in vitro</span> | [Kuzuhara_2026_KV4_2_current](drugs/drug_ramelteon/pd_Kuzuhara_2026_KV4_2_current.md) | KV4.2 current ← ramelteon · direct Emax (saturable) effect | — | Kuzuhara H et al., Luzindole and ramelteon share a melaton…, Journal of pharmacological… (2026) | [10.1016/j.jphs.2026.05.008](https://doi.org/10.1016/j.jphs.2026.05.008) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Xu_2021_pCO2](drugs/drug_ramelteon/pd_Xu_2021_pCO2.md) | arterial partial pressure of carbon dioxide (pCO2) ← ramelteon · direct linear effect | — | Xu L et al., Effects of sedative psychotropic drugs…, Clinical and translational… (2021) | [10.1111/cts.13080](https://doi.org/10.1111/cts.13080) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 05:31 | 0:02 | 1/0/0 | 1/1/0 | 0/0/0 | 213/56 | einfracz / qwen3.8-27b | 11 | 3/7 | 11/0 | 0 |

## Coverage

- **PubMed hits:** 65 matched, 64 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bettica_2012 | irrelevant | 0 | 0 | The study investigates the sleep-promoting properties of the orexin antagonist SB-649868 and does not report pharmacokinetic parameters for ramelteon. |
| PGx | Bettica_2012 | not_relevant | 0 | 0 | The paper studies the pharmacodynamics of an orexin antagonist (SB-649868), not ramelteon, and does not report any pharmacogenomic effects. |
| popPK | Borges_2026 | irrelevant | 0 | 0 | The paper is a meta-analysis of clinical trials assessing the efficacy of ramelteon for preventing postoperative delirium, containing no pharmacokinetic parameters or models. |
| PGx | Borges_2026 | not_relevant | 0 | 0 | The paper is a meta-analysis of clinical efficacy (postoperative delirium) and does not report pharmacokinetic parameters or pharmacogenomic variants. |
| popPK | Chaves-Filho_2026 | irrelevant | 0 | 0 | This is a meta-analysis regarding delirium prevention efficacy, not a pharmacokinetic study reporting disposition parameters for ramelteon. |
| PGx | Chaves-Filho_2026 | not_relevant | 0 | 0 | The paper is a meta-analysis evaluating the clinical effectiveness of melatonin and ramelteon for delirium prevention, with no data on pharmacogenomics or gene-variant effects on PK/PD parameters. |
| popPK | Di_2023 | irrelevant | 1 | 0 | The paper uses ramelteon as a substrate for an in vitro-in vivo extrapolation (IVIVE) calibration curve regarding CYP1A1 clearance, but does not report standard quantitative population-pharmacokinetic parameters (CL, V, ka) or compartmental models for ramelteon. |
| PGx | Di_2023 | not_relevant | 0 | 1 | The paper discusses the in vitro-in vivo extrapolation of CYP1A1 for ramelteon clearance but does not report any pharmacogenomic variants or genotype-specific effects on PK/PD parameters. |
| popPK | Dolder_2007 | irrelevant | 1 | 0 | The paper is a narrative review comparing non-benzodiazepine hypnotics and does not report original quantitative pharmacokinetic parameters for ramelteon. |
| PGx | Dolder_2007 | not_relevant | 0 | 0 | The paper is a general review of non-benzodiazepine hypnotics in the elderly and does not report any pharmacogenomic effects of gene variants on ramelteon's PK/PD parameters. |
| popPK | Erman_2006 | irrelevant | 0 | 0 | The study is a clinical efficacy and safety trial assessing sleep outcomes (latency, duration) and does not report quantitative pharmacokinetic parameters such as clearance, volume, or half-life. |
| PGx | Erman_2006 | not_relevant | 0 | 0 | The paper reports a general dose-response and efficacy study in a broad patient population, with no mention of genetic variants or pharmacogenomic effects. |
| popPK | George_2025 | irrelevant | 0 | 0 | The paper is a review on melatonin dosing and timing where ramelteon is mentioned only as a comparator agent, with no PK parameter values provided. |
| PGx | George_2025 | not_relevant | 0 | 0 | The paper discusses melatonin dosing and timing, not pharmacogenomic effects on PK/PD of ramelteon. |
| PGx | Greenblatt_2007 | not_relevant | 0 | 0 | The study analyzes demographic factors (age and gender) rather than genetic variants or genotypes. |
| popPK | Hardeland_2016 | irrelevant | 1 | 0 | This is a review paper comparing melatoninergic agonists, and while it mentions ramelteon, no specific quantitative PK parameter values (CL, V, ka, etc.) are present in the provided evidence. |
| PGx | Hardeland_2016 | not_relevant | 2 | 1 | The paper discusses theoretical pharmacogenomic limits and general properties of melatoninergic agonists but does not report specific quantified data linking gene variants to PK/PD changes for ramelteon. |
| popPK | Huang_2015 | irrelevant | 0 | 0 | Ramelteon is used only as a positive control in a receptor binding/pharmacodynamic study in rats, with no pharmacokinetic parameters reported. |
| PGx | Huang_2015 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamic effects of Kaixin Powder in rats and uses ramelteon only as a positive control, without reporting any pharmacogenomic effects of gene variants on ramelteon PK or PD. |
| popPK | Iga_2015 | irrelevant | 2 | 0 | The paper focuses on simulating drug-drug interactions using a mathematical model and does not report original quantitative PK parameter estimates (CL, V, t1/2) for ramelteon in human or animal subjects. |
| PGx | Iga_2015 | not_relevant | 0 | 0 | The paper models drug-drug interactions involving CYP1A2 inhibition, not the effect of genetic variants (pharmacogenomics) on ramelteon PK/PD. |
| popPK | Iga_2017 | irrelevant | 2 | 1 | The paper is a review/methodological study on DDI prediction models using ramelteon as a "victim" drug, but it does not report original quantitative PK disposition parameters (CL, V, Q, ka, t1/2) for ramelteon; it only references existing data (AUCR ~130, vFh ~0.03) from other sources for simulation. |
| PGx | Iga_2017 | not_relevant | 0 | 0 | The paper focuses on methods for drug-drug interaction prediction (using CYP inhibitors), not pharmacogenomic effects of genetic variants on ramelteon. |
| popPK | Jung_2016 | irrelevant | 0 | 0 | This is a clinical review of REM sleep behavior disorder management that mentions ramelteon only as an anecdotal alternative therapy, providing no pharmacokinetic data. |
| PGx | Jung_2016 | not_relevant | 0 | 0 | The text is a general clinical review of REM sleep behavior disorder treatments and mentions ramelteon only as an alternative therapy without discussing pharmacogenomics or gene-variant effects. |
| popPK | Khaing_2021 | irrelevant | 0 | 0 | This is a systematic review and meta-analysis focusing on clinical efficacy (delirium prevention) rather than pharmacokinetic disposition parameters. |
| PGx | Khaing_2021 | not_relevant | 0 | 0 | This is a systematic review on delirium prevention, not a pharmacogenomic study. |
| popPK | Kohsaka_2011 | irrelevant | 0 | 0 | This is a clinical efficacy and tolerability study reporting sleep parameters (latency, architecture) rather than pharmacokinetic disposition parameters (CL, V, t1/2). |
| PGx | Kohsaka_2011 | not_relevant | 0 | 0 | The study evaluates the general efficacy and safety of ramelteon in Japanese patients but does not report any pharmacogenomic associations or gene-specific effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Kuzuhara_2026 | irrelevant | 0 | 0 | The paper reports an in-vitro electrophysiology study measuring the IC50 of ramelteon on KV4.2 ion channels, not pharmacokinetic disposition parameters. |
| PGx | Kuzuhara_2026 | not_relevant | 0 | 0 | The study investigates the pharmacological effect of ramelteon on KV4.2 ion channels in vitro but does not report pharmacogenomic variations affecting its pharmacokinetics or pharmacodynamics in humans. |
| popPK | Lalovic_2020 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for lemborexant, not ramelteon. |
| PGx | Lalovic_2020 | not_relevant | 0 | 0 | The paper reports the population pharmacokinetics and exposure-response for lemborexant, not ramelteon, and does not analyze pharmacogenomic variants. |
| popPK | Lauterbach_2010 | irrelevant | 0 | 0 | The paper is a review of neuroprotective mechanisms and does not report quantitative pharmacokinetic parameters for ramelteon. |
| PGx | Lauterbach_2010 | not_relevant | 0 | 0 | The paper discusses neuroprotective mechanisms of ramelteon and other psychotropics but does not report pharmacogenomic effects on PK/PD parameters. |
| popPK | Lequerica_2015 | irrelevant | 0 | 0 | The study reports clinical efficacy outcomes (sleep and cognitive functioning) rather than quantitative pharmacokinetic parameters. |
| PGx | Lequerica_2015 | not_relevant | 0 | 0 | The paper is a clinical trial investigating the efficacy of ramelteon for sleep disturbance in TBI patients and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Levinsohn_2025 | irrelevant | 1 | 0 | This is a literature review discussing pharmacology in delirium that does not report original quantitative disposition parameters or population PK models for ramelteon. |
| PGx | Levinsohn_2025 | not_relevant | 0 | 0 | The paper is a literature review on the pharmacology and use of sleep medications in delirium and does not report specific pharmacogenomic effects of gene variants on the PK/PD of ramelteon. |
| popPK | Mahmood_2024 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vascular reactivity in rat aortic rings, not a pharmacokinetic study, and does not report disposition parameters for ramelteon. |
| PGx | Mahmood_2024 | not_relevant | 0 | 0 | The study investigates vascular reactivity in rat aortic rings and does not report pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Mahmood_2024_2 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological assay examining vascular responses in rat aorta, not a pharmacokinetic study, and ramelteon is used only as a mechanistic tool/antagonist. |
| PGx | Mahmood_2024_2 | not_relevant | 0 | 0 | The paper investigates the vascular pharmacology of ramelteon in rat aorta models and does not report any pharmacogenomic effects (gene variants/genotypes) on its PK or PD parameters. |
| popPK | Mahmood_2025 | irrelevant | 0 | 0 | The study is a mechanistic in vitro pharmacological investigation of vascular tone in rat aorta, using ramelteon only as a melatonin agonist probe, and contains no pharmacokinetic parameters. |
| PGx | Mahmood_2025 | not_relevant | 0 | 0 | The study investigates the interaction of melatonin and potassium channels in rat aorta, containing no genetic variants or genotypes. |
| popPK | McKenna_2012 | irrelevant | 0 | 0 | The paper is a behavioral and neuropathological study of Alzheimer's disease in mice that does not report any pharmacokinetic parameters (CL, V, ka, etc.) for ramelteon. |
| PGx | McKenna_2012 | not_relevant | 0 | 0 | The study examines the therapeutic effects of ramelteon on Alzheimer's pathology and cognition in transgenic mice; it does not report how genetic variations affect the PK or PD of ramelteon. |
| popPK | Miyamoto_2013 | irrelevant | 1 | 0 | The paper is a clinical efficacy and safety study that reports therapeutic outcomes but does not contain pharmacokinetic parameters such as clearance, volume, or half-life. |
| PGx | Miyamoto_2013 | not_relevant | 0 | 0 | The paper reports clinical efficacy and safety in a pediatric population but contains no data on gene variants or genotypes. |
| popPK | Nishiyama_2014 | irrelevant | 2 | 0 | The study reports in vitro binding affinities and functional potency (Ki, IC50) for the metabolite M-II in cell lines, and qualitative sleep improvements in cats, but does not provide quantitative pharmacokinetic disposition parameters (CL, V, t1/2, etc.) for ramelteon or its metabolite. |
| PGx | Nishiyama_2014 | not_relevant | 0 | 0 | The paper describes the pharmacological properties of a metabolite but does not investigate genetic variants or their effect on PK/PD parameters. |
| popPK | Obach_2010 | irrelevant | 2 | 0 | The study is in-vitro and mechanistic, focusing on microsomal metabolism and DDI estimation without reporting quantitative PK parameters (CL, V, t1/2) for the drug in vivo. |
| PGx | Obach_2010 | not_relevant | 0 | 0 | The study focuses on in vitro metabolism and drug-drug interactions, not pharmacogenomic effects of genetic variants on PK/PD parameters. |
| popPK | Obach_2016 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on the biosynthesis of fluorinated analogs and their metabolic stability, reporting no in-vivo pharmacokinetic parameters. |
| PGx | Obach_2016 | not_relevant | 0 | 0 | The paper describes a chemical synthesis method for creating fluorinated analogs to test metabolic stability in vitro and does not report on the impact of human genetic variants (pharmacogenomics) on the pharmacokinetics or pharmacodynamics of ramelteon. |
| popPK | Palacharla_2026 | irrelevant | 1 | 0 | The paper is an in vitro mechanistic study on DDI prediction models using human liver microsomes, and ramelteon is only a comparator case cited to illustrate model limitations, with no original PK parameter values reported. |
| PGx | Palacharla_2026 | not_relevant | 1 | 2 | The paper focuses on predicting CYP-mediated drug-drug interactions (DDIs) using reaction phenotyping; it does not report pharmacogenomic effects (gene variants) on ramelteon PK/PD. |
| popPK | Prodhan_2021 | irrelevant | 0 | 0 | This is a review of melatonin in Alzheimer's disease that only mentions ramelteon as a class of melatonin agonists for future trials, providing no pharmacokinetic parameters. |
| PGx | Prodhan_2021 | not_relevant | 0 | 0 | The text is a review discussing the use of melatonin and melatonin agonists for sleep disturbances in Alzheimer's disease, but it does not report specific pharmacogenomic effects or data for ramelteon. |
| popPK | Saha_2022 | irrelevant | 0 | 0 | The paper is a review on electron diffraction crystallography and contains no information regarding the pharmacokinetics of ramelteon. |
| PGx | Saha_2022 | not_relevant | 0 | 0 | The paper is a review of electron crystallography techniques and contains no information regarding pharmacogenomics, ramelteon, or pharmacokinetics. |
| popPK | Saito_2020 | irrelevant | 0 | 0 | The paper is a survey on drug compounding practices and does not report any pharmacokinetic parameters for ramelteon. |
| PGx | Saito_2020 | not_relevant | 0 | 0 | The paper describes a survey on medication compounding practices and does not contain any pharmacogenomic data or analysis of PK/PD parameters. |
| popPK | Saito_2022 | irrelevant | 2 | 0 | The paper reports single-timepoint drug concentrations in cord blood and breast milk for a case report, rather than quantitative PK parameters (CL, V, t1/2) or a compartmental/population model. |
| PGx | Saito_2022 | not_relevant | 0 | 0 | The paper is a case report on drug transfer in pregnancy/lactation and does not investigate the impact of genetic variants on pharmacokinetics or pharmacodynamics. |
| popPK | Sanchez-Rodriguez_2024 | irrelevant | 0 | 0 | This is an Alzheimer's disease neuroimaging/transcriptomics/drug-repurposing study with no ramelteon PK parameters or any pharmacokinetic modeling. |
| popPK | Sateia_2008 | irrelevant | 2 | 0 | This is a clinical review that mentions a half-life of ~1h but lacks the quantitative compartmental parameters (CL, V, Q) or population model details required for a PK study. |
| PGx | Sateia_2008 | not_relevant | 0 | 0 | The text provides a general evidence-based review of ramelteon's efficacy and safety but contains no information regarding pharmacogenomic effects or gene-variant-specific PK/PD parameters. |
| popPK | Shimizu_2013 | irrelevant | 0 | 0 | The paper is a clinical observation regarding the efficacy of ramelteon for nocturia and insomnia, containing no pharmacokinetic parameters (CL, V, t1/2, etc.) or PK modeling. |
| PGx | Shimizu_2013 | not_relevant | 0 | 0 | The paper discusses the clinical efficacy of ramelteon for nocturia and insomnia but does not report any pharmacogenomic effects or changes in PK/PD parameters based on genetic variants. |
| popPK | Spadoni_2015 | irrelevant | 2 | 0 | The paper is a narrative review describing clinical properties and safety, and the provided evidence contains no quantitative pharmacokinetic parameter values (e.g., CL, Vd, t1/2). |
| PGx | Spadoni_2015 | not_relevant | 0 | 0 | The paper is a general review of ramelteon's clinical properties and does not report on pharmacogenomic variants or their effect on PK/PD parameters. |
| popPK | Stroethoff_2018 | irrelevant | 0 | 0 | The study investigates the cardioprotective mechanism of ramelteon in rat hearts (ischemia-reperfusion injury) and does not report any pharmacokinetic disposition parameters such as clearance, volume, or half-life. |
| PGx | Stroethoff_2018 | not_relevant | 0 | 0 | The paper investigates the mechanism of cardioprotection in rat hearts and does not contain any data regarding human gene variants, genotypes, or pharmacogenomics affecting the pharmacokinetics or pharmacodynamics of ramelteon. |
| popPK | Todd_2012 | irrelevant | 0 | 0 | The study is a clinical case series regarding poison control management and outcomes, containing no pharmacokinetic parameter estimates. |
| PGx | Todd_2012 | not_relevant | 0 | 0 | The paper describes poison center ingestion data and clinical outcomes, containing no information on genetic variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | Verster_2012 | irrelevant | 0 | 0 | This is a review of driving performance studies and does not report quantitative pharmacokinetic parameters for ramelteon. |
| PGx | Verster_2012 | not_relevant | 0 | 0 | The paper reviews gender differences in driving performance, not pharmacogenomic effects (gene variants) on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Wang_2026 | not_relevant | 0 | 0 | The study reports PK changes due to simulated high altitude (environmental factor) in rats, not due to gene variants, genotypes, or genetic phenotypes. |
| popPK | Williams_2016 | irrelevant | 1 | 2 | This is a comparative review article that summarizes pharmacokinetic parameters from other sources rather than reporting original quantitative PK model parameters or disposition data for ramelteon. |
| PGx | Williams_2016 | not_relevant | 0 | 0 | The paper is a comparative review of pharmacokinetics and pharmacodynamics of melatonin agonists but does not report any pharmacogenomic effects (gene variants/genotypes) on these parameters. |
| popPK | Wu_2024 | irrelevant | 0 | 0 | This is an in-vitro electrophysiological study investigating the effects of ramelteon on ion channels, containing no pharmacokinetic disposition parameters. |
| PGx | Wu_2024 | not_relevant | 0 | 0 | The paper describes electrophysiological effects of ramelteon in cell lines (in vitro) but reports no human genetic variants or pharmacogenomic associations. |
| popPK | Xu_2021 | irrelevant | 1 | 0 | Ramelteon is a co-administered comparator in a rat respiratory depression study, not the subject of a PK parameter analysis, and specific numeric disposition parameters for ramelteon are in supplementary material. |
| PGx | Xu_2021 | not_relevant | 0 | 0 | The study investigates drug-drug interactions involving ramelteon in rats but does not report any pharmacogenomic effects or gene variant associations. |
| popPK | Yu_2023 | irrelevant | 1 | 0 | This is a meta-analysis of clinical efficacy for delirium prevention, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, etc.). |
| PGx | Yu_2023 | not_relevant | 0 | 0 | The paper is a meta-analysis of clinical trials assessing the efficacy of ramelteon for delirium prevention and contains no information on pharmacogenomics or genetic variants affecting PK/PD parameters. |
| popPK | Zheng_2020 | irrelevant | 0 | 0 | This is a comparative efficacy (pharmacodynamic) network meta-analysis, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume. |
| PGx | Zheng_2020 | not_relevant | 0 | 0 | The paper compares the efficacy of different insomnia drugs but does not report any pharmacogenomic effects of gene variants on PK/PD parameters. |
| popPK | unknown_2024 | irrelevant | 0 | 0 | no_text gate: only 52 chars of text extracted (&lt; 400) |
| PGx | unknown_2024 | not_relevant | 0 | 0 | The provided text is a conference citation header and does not contain any information about ramalteon, pharmacogenomics, or PK/PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bramelteon%5D&body=Drug%3A%20ramelteon%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ramelteon/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 05:26 UTC</sub>
