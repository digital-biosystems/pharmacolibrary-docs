<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09E&quot;,&quot;href&quot;:&quot;atc/V09E.md&quot;},{&quot;label&quot;:&quot;xenon (133Xe) gas&quot;}]"></div>

# xenon (133Xe) gas

- **generic name:** xenon (133Xe) gas
- **ATC codes:** `V09EX03`
- **DrugBank:** [DB09315](https://go.drugbank.com/drugs/DB09315) · **PubChem:** [CID 66376](https://pubchem.ncbi.nlm.nih.gov/compound/66376)
- **molar mass:** 132.9059 g/mol (Xe) — DrugBank
- **groups:** approved

## About

Xenon-133 is a diagnostic radiopharmaceutical used for respiratory system investigations. It is administered by inhalation as a gas. It is approved for clinical use.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q2451397](https://www.wikidata.org/wiki/Q2451397), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| xenon_133xe_gas | metabolite | 132.906 | Xe | DrugBank | [66376](https://pubchem.ncbi.nlm.nih.gov/compound/66376) | Greisen_1984 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Baba_1979_reference](drugs/drug_xenon_133xe_gas/Xenon133xeGas_Baba1979_reference.md) | — | 1-compartment (no model) | 0 | Baba H et al., [A study of regional cerebral blood flo…, No shinkei geka. Neurologic… (1979) | — |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Greisen_1984_reference](drugs/drug_xenon_133xe_gas/Xenon133xeGas_Greisen1984_reference.md) | — | 1-compartment (no model) | 1 | Greisen G et al., Analysis of cranial 133-Xenon clearance…, Scandinavian journal of cli… (1984) | [10.3109/00365518409083803](https://doi.org/10.3109/00365518409083803) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Le_2020_TH_cell_survival_rate](drugs/drug_xenon_133xe_gas/pd_Le_2020_TH_cell_survival_rate.md) | Survival rate of DA neurons (TH+ cells) ← xenon · direct sigmoid Emax (Hill) effect | — | Le Nogue D et al., Neuroprotection of dopamine neurons by…, Journal of neural transmiss… (2020) | [10.1007/s00702-019-02112-x](https://doi.org/10.1007/s00702-019-02112-x) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Uchida_2022_PS](drugs/drug_xenon_133xe_gas/pd_Uchida_2022_PS.md) | steady-state response ratio ← xenon_133xe_gas · direct sigmoid Emax (Hill) effect | — | Uchida T et al., Behavior of Stimulus Response Signals i…, Neuroscience (2022) | [10.1016/j.neuroscience.2022.05.027](https://doi.org/10.1016/j.neuroscience.2022.05.027) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 06:44 | 0:02 | 0/2/0 | 0/2/0 | 0/0/0 | 218/62 | einfracz / qwen3.8-27b | 23 | 3/20 | 23/0 | 0 |

## Coverage

- **PubMed hits:** 138 matched, 93 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alam_2026 | irrelevant | 0 | 0 | This pediatric imaging study reports ventilation metrics, not xenon pharmacokinetic disposition parameters. |
| popPK | Andrade_2014 | irrelevant | 0 | 0 | This is an auranofin antiparasitic study, not a pharmacokinetic study of xenon-133. |
| PGx | Baba_1979 | not_relevant | 0 | 0 | The paper describes a diagnostic technique using Xenon-133 to measure cerebral blood flow in specific disease states, reporting no information on genetic variants or pharmacogenomic effects on the drug's kinetics or dynamics. |
| popPK | Bantel_2010 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of xenon's effect on potassium channels in HEK293 cells and does not report pharmacokinetic disposition parameters. |
| PGx | Bantel_2010 | not_relevant | 0 | 0 | The paper describes the mechanism of action of xenon on KATP channels in vitro and does not investigate the influence of gene variants on its pharmacokinetic or pharmacodynamic parameters. |
| popPK | Barakat_2008 | irrelevant | 0 | 0 | The study reports pharmacodynamic parameters (EC50) for propofol in the presence of xenon, not quantitative pharmacokinetic disposition parameters for xenon itself. |
| PGx | Barakat_2008 | not_relevant | 0 | 0 | The paper compares the PD effects of xenon versus nitrous oxide on propofol requirements but does not report any pharmacogenomic effects (gene variants) on xenon or propofol parameters. |
| popPK | Bardrum_1986 | irrelevant | 0 | 0 | Xenon-133 is used as a diagnostic tracer to measure blood flow, not as the subject drug for pharmacokinetic parameter estimation. |
| PGx | Bardrum_1986 | not_relevant | 0 | 0 | The paper investigates the physiological effects of peptides PHI and VIP on rabbit uterine smooth muscle and uses Xenon-133 only as a tool to measure blood flow, not as the drug of interest for pharmacogenomic analysis. |
| popPK | Baumert_2002 | irrelevant | 1 | 0 | This study investigates the physical properties of xenon gas (density and viscosity) affecting airway resistance and pressure, not the pharmacokinetic disposition parameters (clearance, volume) of xenon. |
| PGx | Baumert_2002 | not_relevant | 0 | 0 | The study examines the effect of xenon's physical properties on respiratory mechanics in pigs and contains no genetic or pharmacogenomic information. |
| popPK | Beasley_1996 | irrelevant | 0 | 0 | The paper discusses using a xenon arc lamp as a UV light source for immunological studies in mice and contains no pharmacokinetic data for xenon-133 gas. |
| PGx | Beasley_1996 | not_relevant | 0 | 0 | The paper evaluates a UV sunlamp for immunology studies and does not involve xenon-133 or pharmacogenomics. |
| popPK | Bonhomme_2019 | irrelevant | 0 | 0 | The paper is a narrative review on the neurophysiological mechanisms of consciousness and general anesthesia, discussing xenon only in the context of brain connectivity, and contains no pharmacokinetic parameters or quantitative disposition data. |
| PGx | Bonhomme_2019 | not_relevant | 0 | 0 | This is a narrative review discussing general anesthesia and consciousness, lacking any data on pharmacogenomic effects. |
| popPK | Brake_2024 | irrelevant | 0 | 0 | This EEG study concerns propofol, not xenon-133, and reports no xenon pharmacokinetic parameters. |
| popPK | Butt_1983 | irrelevant | 2 | 1 | Xenon-133 is used as a diagnostic tracer to measure renal blood flow, not as the subject drug for pharmacokinetic disposition parameter estimation. |
| PGx | Butt_1983 | not_relevant | 0 | 0 | The paper evaluates xenon-133 as a diagnostic tracer for renal blood flow, not as a therapeutic drug for pharmacogenomic analysis. |
| popPK | Carlin_1977 | irrelevant | 2 | 5 | The study reports partition coefficients (distribution ratios) rather than standard pharmacokinetic disposition parameters like clearance, volume, or half-life. |
| PGx | Carlin_1977 | not_relevant | 0 | 0 | The paper reports physical partition coefficients of Xenon-133 based on species (human vs. dog), temperature, and hematocrit, but contains no pharmacogenomic data (gene variants/genotypes). |
| popPK | Cascino_2022 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for diazepam, not xenon_133xe_gas. |
| PGx | Cascino_2022 | not_relevant | 0 | 0 | The paper investigates diazepam and does not mention xenon-133 or any pharmacogenomic analysis. |
| popPK | Cekanova_2012 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of fluorocoxib A, not xenon_133xe_gas. |
| PGx | Cekanova_2012 | not_relevant | 0 | 0 | The study evaluates the PK of fluorocoxib A in canines and does not investigate any gene variants or pharmacogenomic effects. |
| popPK | Che_2001 | irrelevant | 0 | 0 | The paper describes a DNA microarray imaging system using a xenon arc lamp as a light source and does not study the pharmacokinetics of xenon-133 gas. |
| PGx | Che_2001 | not_relevant | 0 | 0 | The paper describes a fluorescent imaging system for DNA microarrays using a xenon arc lamp, not the pharmacology of the drug Xenon-133. |
| popPK | Choquet_2003 | irrelevant | 0 | 0 | The study models the pharmacokinetics of hyperpolarized Xenon-129 (a stable isotope used as an MRI contrast agent), not Xenon-133 (a radioactive isotope), and reports relaxation time (T1) rather than standard disposition parameters like clearance or volume of distribution for Xenon-133. |
| PGx | Choquet_2003 | not_relevant | 0 | 0 | The paper discusses the physical property (relaxation time) of stable isotope 129Xe for MRI imaging in rats, not the pharmacogenomics of 133Xe gas. |
| popPK | Cinotti_1991 | irrelevant | 1 | 0 | The paper concerns Xe-127 (a different isotope) and regional pulmonary ventilation modeling rather than systemic pharmacokinetic parameters (CL, V, t1/2) for Xenon-133 gas. |
| PGx | Cinotti_1991 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetics of Xe-127 (xenon-127), not xenon-133, and does not report any pharmacogenomic effects. |
| popPK | Daniels_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic study on glycine receptors, not a pharmacokinetic study, and contains no quantitative disposition parameters for xenon. |
| PGx | Daniels_1998 | not_relevant | 0 | 0 | The paper describes the pharmacodynamic mechanism of xenon on human glycine receptors but does not report any pharmacogenomic effect (gene variant/genotype influence) on PK or PD parameters. |
| popPK | Devroe_2021 | irrelevant | 0 | 0 | The study focuses on neurodevelopmental outcomes in rabbits and does not report quantitative pharmacokinetic parameters (CL, V, t1/2) for xenon. |
| PGx | Devroe_2021 | not_relevant | 0 | 0 | The paper investigates the neurodevelopmental effects of xenon in pregnant rabbits and does not involve any gene variants, genotypes, or pharmacogenomic mechanisms. |
| popPK | Dinse_2005 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of xenon's effect on glutamate receptor membrane currents, not a pharmacokinetic study. |
| PGx | Dinse_2005 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of xenon on glutamate receptors but contains no data on gene variants, genotypes, or pharmacogenomic effects on PK/PD parameters. |
| popPK | EFSA_2026 | irrelevant | 0 | 0 | The paper evaluates the food additive sucralose, not xenon-133 gas, and contains no pharmacokinetic data for the target drug. |
| PGx | EFSA_2026 | not_relevant | 0 | 0 | The paper concerns the safety evaluation of the food additive sucralose and does not report any pharmacogenomic effects on the PK or PD of xenon-133 gas. |
| popPK | Eger_2006 | irrelevant | 0 | 0 | The study reports Minimum Alveolar Concentrations (MAC) for xenon to characterize anesthetic potency and receptor mechanisms, not pharmacokinetic disposition parameters such as clearance, volume of distribution, or half-life. |
| PGx | Eger_2006 | not_relevant | 0 | 10 | The paper studies NMDA receptor mechanisms for anesthetics including xenon, but does not report a pharmacogenomic effect (gene variant/genotype) on PK or PD parameters. |
| popPK | Fabrikant_1985 | irrelevant | 0 | 0 | The paper discusses xenon-133 as a diagnostic imaging agent for cerebral blood flow in the context of radiosurgery, not as a subject drug for pharmacokinetic parameter estimation. |
| PGx | Fabrikant_1985 | not_relevant | 0 | 0 | The paper discusses heavy-ion radiosurgery for vascular disorders and mentions xenon CT for imaging, but does not report pharmacogenomic effects on the PK/PD of xenon-133 gas as a drug. |
| popPK | Fixley_1978 | irrelevant | 1 | 0 | The study uses Xenon-133 as an inert gas tracer to study pulmonary ventilation mechanics (airflow distribution and muscle contraction), not to characterize its systemic pharmacokinetic parameters (CL, Vd, etc.). |
| PGx | Fixley_1978 | not_relevant | 0 | 0 | The paper analyzes regional lung distribution of xenon-133 as a tracer based on breathing mechanics (intercostal vs. diaphragm) and flow rates; it does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Franco_2022 | irrelevant | 0 | 0 | This is an assay study of cannabidiol in humans, not xenon-133Xe pharmacokinetics. |
| popPK | Friedrich_2014 | irrelevant | 0 | 0 | The study reports population PK parameters for evacetrapib, a CETP inhibitor, not for the target drug xenon_133xe_gas. |
| PGx | Friedrich_2014 | not_relevant | 0 | 0 | The study reports PK/PD relationships for evacetrapib (a CETP inhibitor), not xenon_133xe_gas. |
| popPK | Gherase_2006 | irrelevant | 0 | 0 | The study analyzes NMR lineshapes to determine physical properties (droplet diameter and membrane permeability) of a xenon-containing emulsion, not pharmacokinetic disposition parameters like clearance or volume of distribution. |
| PGx | Gherase_2006 | not_relevant | 0 | 0 | The paper focuses on the NMR physics and chemical exchange properties of xenon-129 in a perfluorocarbon emulsion, not on pharmacogenomics. |
| popPK | Giri_2020 | irrelevant | 0 | 0 | The paper describes the photorelease of nitric oxide from ruthenium nitrosyl complexes using a Xenon light source as an excitation tool, not the pharmacokinetics of xenon-133. |
| PGx | Giri_2020 | not_relevant | 0 | 0 | The paper concerns the photorelase of nitric oxide from ruthenium complexes and does not involve xenon-133 gas or pharmacogenomic effects. |
| PGx | Greisen_1984 | not_relevant | 0 | 0 | The study analyzes xenon-133 clearance kinetics in newborns but does not report any pharmacogenomic effects or gene variants. |
| popPK | Grossmann_2000 | irrelevant | 0 | 0 | Xenon-133 is used only as a diagnostic tracer to measure cerebral blood flow in response to acetazolamide, not as the subject of a pharmacokinetic study. |
| PGx | Grossmann_2000 | not_relevant | 0 | 0 | The paper investigates the dose-response relationship of acetazolamide using 133Xenon as a measurement tool, and does not report pharmacogenomic effects on the PK or PD of 133Xenon. |
| popPK | Heikkonen_1987 | irrelevant | 0 | 0 | The study uses Xenon-133 as a diagnostic radiotracer to measure blood perfusion and partition coefficients, not to model the pharmacokinetic disposition parameters (CL, V, half-life) of Xenon-133 itself as a drug. |
| PGx | Heikkonen_1987 | not_relevant | 0 | 0 | The paper compares partition coefficients of 85mKr and 133Xe in tumours but reports no pharmacogenomic effects or gene variants. |
| PGx | Hemnes_2020 | not_relevant | 0 | 0 | The paper discusses xenon MRI as an imaging modality but reports no genotype-dependent pharmacokinetic or pharmacodynamic effect for xenon-133 gas. |
| popPK | Henry_2025 | irrelevant | 0 | 0 | The paper analyzes graphical representations of seizure frequency in anti-seizure medication trials and does not contain pharmacokinetic data for xenon_133xe_gas. |
| PGx | Henry_2025 | not_relevant | 0 | 0 | The paper discusses the graphical representation of seizure frequency increases in anti-seizure medication trials and is completely unrelated to xenon_133 or pharmacogenomics. |
| popPK | Honda_1989 | irrelevant | 2 | 0 | The paper uses Xe-133 as a diagnostic tracer for ventilation assessment and reports imaging-derived metrics (Mean Transit Time) and correlation coefficients, not pharmacokinetic parameters like clearance, volume of distribution, or rate constants for a population PK model. |
| PGx | Honda_1989 | not_relevant | 0 | 0 | The paper discusses the diagnostic utility of factor analysis on Xenon-133 ventilation imaging and does not report any pharmacogenomic effects on its pharmacokinetic or pharmacodynamic parameters. |
| popPK | Iakab_2026 | irrelevant | 0 | 0 | This is an in vitro 3D MALDI imaging platform study and reports no xenon-133Xe pharmacokinetic parameters. |
| popPK | Iliff_1974 | irrelevant | 2 | 0 | The study uses Xenon-133 as a diagnostic tracer to measure regional cerebral blood flow, not to determine the systemic pharmacokinetic parameters (CL, V, ka) of the drug itself. |
| PGx | Iliff_1974 | not_relevant | 0 | 0 | The paper analyzes regional cerebral blood flow and clearance rates in patients with cerebrovascular disease under different capnias; it does not study the effect of gene variants on pharmacokinetics or pharmacodynamics. |
| popPK | Khanppnavar_2022 | irrelevant | 0 | 0 | This is a human OCT3 structure and transport-function study, not a xenon-133 pharmacokinetic study. |
| popPK | Kilian_2004 | irrelevant | 2 | 0 | The study uses a xenon-129 uptake model for perfusion imaging but does not report quantitative disposition parameters like clearance, volume, or half-life in the provided evidence. |
| PGx | Kilian_2004 | not_relevant | 0 | 0 | The study analyzes xenon uptake/perfusion in a single healthy volunteer and does not investigate pharmacogenomic effects on PK/PD. |
| popPK | Kligman_1991 | irrelevant | 0 | 0 | The paper is a study on collagen changes in mouse skin due to UV-A radiation, where a xenon lamp was only used as a light source, not xenon-133 as a drug. |
| PGx | Kligman_1991 | not_relevant | 0 | 0 | The paper studies UV-A radiation effects on collagen in mice, not the pharmacogenomics of xenon-133 gas. |
| popPK | Kodaka_2006 | irrelevant | 0 | 0 | The study focuses on the environmental metabolism of the fungicide uniconazole-P, and xenon is mentioned only as the light source (xenon lamp), not as the subject drug. |
| PGx | Kodaka_2006 | not_relevant | 0 | 0 | The paper studies the environmental degradation of a fungicide using a xenon lamp, which is unrelated to human pharmacogenomics or Xenon-133 gas. |
| popPK | Konstantopoulos_2022 | irrelevant | 0 | 0 | This nanomaterials review reports no xenon-133 pharmacokinetic parameters or measured species. |
| popPK | Kumar_2022 | irrelevant | 0 | 0 | This computational BBB-classification study reports no xenon-133 disposition parameters or numeric PK values. |
| popPK | Kunitz_2004 | irrelevant | 0 | 0 | The study assesses the pharmacodynamic interaction between xenon and rocuronium, not the pharmacokinetic parameters of xenon. |
| PGx | Kunitz_2004 | not_relevant | 0 | 0 | The study compares rocuronium pharmacodynamics between xenon and propofol anesthesia in a general population, with no mention of gene variants or pharmacogenomic factors. |
| popPK | Kunitz_2005 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of mivacurium, and xenon is used only as an anesthetic agent/co-administered drug, with no PK parameters (CL, V, etc.) reported for xenon. |
| PGx | Kunitz_2005 | not_relevant | 0 | 0 | The paper compares the effect of xenon vs. propofol on neuromuscular blockade parameters but does not involve genetic variants or pharmacogenomic analysis. |
| popPK | Kuprat_2025 | irrelevant | 0 | 0 | The paper is a review of computational modeling techniques for aerosol deposition and does not report pharmacokinetic parameters for xenon-133. |
| PGx | Kuprat_2025 | not_relevant | 0 | 0 | The paper discusses modeling aerosol deposition in the respiratory system and contains no information on xenon_133xe_gas, its pharmacokinetics/pharmacodynamics, or any gene variants. |
| popPK | Laurent_1982 | irrelevant | 1 | 1 | The paper uses xenon-133 as a diagnostic tracer to measure cerebral blood flow, not as the subject drug for pharmacokinetic parameter estimation (CL, V, etc.). |
| PGx | Laurent_1982 | not_relevant | 0 | 0 | The paper reports clinical outcomes of a surgical procedure using xenon-133 as a diagnostic tracer, but contains no data on pharmacogenomic effects on PK/PD parameters. |
| popPK | Lavini_2000 | irrelevant | 2 | 0 | The paper presents a theoretical simulation model for hyperpolarized Xe-129, not experimental PK data, and no quantitative numeric parameters for xenon_133xe_gas are provided in the evidence. |
| PGx | Lavini_2000 | not_relevant | 0 | 0 | The paper describes a theoretical compartmental model for xenon delivery but does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Le_2020 | irrelevant | 0 | 0 | The study is an in-vitro neuroprotection experiment using xenon as a protective agent, not a pharmacokinetic study reporting disposition parameters for xenon. |
| PGx | Le_2020 | not_relevant | 0 | 0 | The paper investigates the neuroprotective mechanism of xenon in cell cultures and does not report any pharmacogenomic effects (gene variants) on its pharmacokinetics or pharmacodynamics. |
| popPK | Learn_1995 | irrelevant | 0 | 0 | The paper is a toxicology/immunology study on UV radiation in mice, and "xenon" is mentioned only as a light source component, not as the pharmacokinetic subject. |
| PGx | Learn_1995 | not_relevant | 0 | 0 | The paper studies the effects of ultraviolet radiation on mouse skin and immune system, not the pharmacogenomics of xenon_133xe_gas. |
| popPK | Lin_1999 | irrelevant | 0 | 0 | The paper concerns herbicide toxicity and uses a xenon-arc lamp (Weather-Ometer) for photodegradation, not the radioactive drug xenon-133. |
| PGx | Lin_1999 | not_relevant | 0 | 0 | The paper studies the photodegradation of herbicides in water using a Xenon lamp, not the pharmacokinetics or pharmacodynamics of Xenon-133 gas in humans. |
| popPK | Madders_2025 | irrelevant | 0 | 0 | The paper studies isoprenaline signaling in cardiac cells and reports no xenon-133 pharmacokinetic parameters. |
| popPK | Mahmoud_2020 | irrelevant | 0 | 0 | This narrative review reports dexmedetomidine—not xenon-133—as the subject drug, so no xenon PK values are provided. |
| popPK | Marc-Vergnes_1980 | irrelevant | 2 | 0 | The study focuses on cerebral blood flow calculation methods using xenon-133 as a diagnostic tracer, not on the population pharmacokinetic parameters (CL, V, ka) of xenon-133 gas itself, and no specific numeric PK values are provided in the evidence. |
| PGx | Marc-Vergnes_1980 | not_relevant | 0 | 0 | The paper evaluates mathematical methods for calculating cerebral blood flow from Xenon-133 clearance curves and contains no information regarding genetic variants or pharmacogenomics. |
| popPK | Martin_1997 | irrelevant | 1 | 0 | The paper reports a theoretical compartmental model for hyperpolarized xenon's MRI signal and concentration estimates, not experimental quantitative disposition parameters (CL, Vd, ka) for Xenon-133 gas. |
| PGx | Martin_1997 | not_relevant | 0 | 0 | The paper describes a compartmental pharmacokinetic model for hyperpolarized xenon MRI but does not investigate or report any gene variants or genotypes affecting these parameters. |
| popPK | Mattsson_1982 | irrelevant | 0 | 0 | Xenon-133 is used as a diagnostic tracer for blood flow measurement, not as the subject drug for pharmacokinetic modeling. |
| PGx | Mattsson_1982 | not_relevant | 0 | 0 | The paper studies the effect of vasoactive drugs on xenon blood flow but does not investigate pharmacogenomic effects of gene variants on PK/PD parameters. |
| popPK | McGuigan_2021 | irrelevant | 0 | 0 | The study compares EEG spectral features during xenon and sevoflurane anesthesia and does not report any pharmacokinetic parameters (clearance, volume, half-life) for xenon. |
| PGx | McGuigan_2021 | not_relevant | 0 | 0 | The study compares EEG spectral features of xenon versus sevoflurane but does not report any pharmacogenomic effects (gene variants) on pharmacokinetic or pharmacodynamic parameters. |
| popPK | McKinstry-Wu_2018 | irrelevant | 0 | 0 | The paper describes a methodology for measuring brain anesthetic concentration using CT scans and does not report quantitative pharmacokinetic parameters (such as clearance or volume) for xenon. |
| PGx | McKinstry-Wu_2018 | not_relevant | 0 | 0 | The paper describes a non-invasive CT method to measure brain xenon concentration to study PK-PD mismatches, but it does not investigate pharmacogenomic effects or gene variants on xenon pharmacokinetics or pharmacodynamics. |
| popPK | Meric_1979 | irrelevant | 3 | 1 | Xenon-133 is used as a diagnostic tracer for cerebral blood flow, not as a subject drug for PK parameter estimation (no CL/V reported for the drug itself). |
| PGx | Meric_1979 | not_relevant | 0 | 0 | The paper describes a method for measuring cerebral blood flow using Xenon-133 and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Miao_2018 | irrelevant | 1 | 0 | This is a therapeutic animal study, not a pharmacokinetic analysis, and no xenon disposition parameters are reported in the evidence. |
| popPK | Miraldi_1992 | irrelevant | 0 | 0 | Xenon-133 is used as a diagnostic tracer for blood flow imaging, not as the subject drug for pharmacokinetic parameter extraction (clearance/volume of xenon itself). |
| PGx | Miraldi_1992 | not_relevant | 0 | 0 | The paper describes a clinical technique using Xenon-133 as a tracer for blood flow measurement and does not discuss pharmacogenomics or genetic variants affecting Xenon-133 pharmacokinetics or pharmacodynamics. |
| popPK | Mäntylä_1988 | irrelevant | 1 | 0 | The study uses xenon-133 as a diagnostic tracer for blood flow measurement rather than characterizing the drug's own population pharmacokinetic parameters (CL, V, etc.). |
| PGx | Mäntylä_1988 | not_relevant | 0 | 0 | The paper reports blood flow measurements using xenon tracers for perfusion assessment but contains no information on genetic variants or pharmacogenomic effects. |
| popPK | Nagele_2005 | irrelevant | 0 | 0 | The paper is a mechanistic toxicology/behavioral study in C. elegans reporting an EC50 for behavioral alteration, not pharmacokinetic disposition parameters (CL, V, ka, etc.) for xenon. |
| PGx | Nagele_2005 | not_relevant | 2 | 5 | The paper describes a mechanism of action involving a specific gene mutation in a C. elegans model but does not report pharmacogenomic effects on PK/PD parameters for xenon gas in a clinical or relevant pharmacogenomic context. |
| popPK | Nargeot_1982 | irrelevant | 0 | 0 | The paper studies the pharmacology of the muscarinic antagonist Bis-Q in frog hearts, and xenon is only mentioned as the light source (xenon flashlamp), not as the drug being characterized. |
| PGx | Nargeot_1982 | not_relevant | 0 | 0 | The paper studies a muscarinic antagonist in frog heart and does not involve xenon-133 gas or pharmacogenomics. |
| popPK | Novotny_1993 | irrelevant | 3 | 0 | The study investigates tissue residence times and heterogeneity in canine muscle for physiological modeling rather than reporting systemic population pharmacokinetic parameters (CL, Vd, Ka) for xenon-133. |
| PGx | Novotny_1993 | not_relevant | 0 | 0 | The paper investigates the physical chemistry and compartmental modeling of xenon gas exchange in canine muscle tissue but contains no pharmacogenomic data or human genetic analysis. |
| popPK | Obrist_1975 | irrelevant | 1 | 0 | The study uses Xenon-133 as a diagnostic tracer to measure cerebral blood flow, not to characterize the pharmacokinetic parameters (CL, V, t1/2) of the drug itself in the systemic circulation. |
| PGx | Obrist_1975 | not_relevant | 0 | 0 | The paper describes a method for estimating cerebral blood flow using Xenon-133 but does not report any pharmacogenomic effects or gene variants. |
| popPK | Odano_1999 | irrelevant | 0 | 0 | The study focuses on technetium-99m ECD pharmacokinetics, using xenon-133 only as a reference standard for cerebral blood flow measurement without reporting its PK parameters. |
| PGx | Odano_1999 | not_relevant | 0 | 0 | The paper describes a new method for quantifying cerebral blood flow using Tc-99m ECD and compares it to Xe-133, but it does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Papadopoulou_2025 | irrelevant | 0 | 0 | This is a review of marine-derived cosmetic bioactives and reports no xenon-133 pharmacokinetic parameters. |
| popPK | Pardue_2012 | irrelevant | 0 | 0 | The paper uses xenon as a light source for retinal stimulation in a neuroprotection study, not as a drug for pharmacokinetic analysis. |
| PGx | Pardue_2012 | not_relevant | 0 | 0 | The paper discusses the neuroprotective effect of subretinal electrical stimulation using xenon light in rats, not a pharmacokinetic or pharmacodynamic parameter influenced by a gene variant for xenon gas. |
| popPK | Pinborg_2002 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of [(123)I]PE2I for dopamine transporter imaging, using Xenon-133 only as a diagnostic agent for regional cerebral blood flow, not as the subject drug for PK analysis. |
| PGx | Pinborg_2002 | not_relevant | 0 | 0 | The paper describes quantification methods for a radiotracer using xenon-133 only for perfusion assessment, with no mention of pharmacogenomic variants or their effects on PK/PD. |
| popPK | Planiol_1976 | irrelevant | 0 | 0 | Xenon is used as a diagnostic radiotracer for cerebral blood flow measurement (gammaencephalography), not as a pharmacokinetic subject drug with reported disposition parameters. |
| PGx | Planiol_1976 | not_relevant | 0 | 0 | The paper discusses nuclear medicine techniques and mentions radioxenon as a tracer but does not report pharmacogenomic effects on its PK or PD parameters. |
| popPK | Preckel_2006 | irrelevant | 1 | 0 | The text is a review discussing molecular mechanisms and organ protection rather than reporting quantitative PK parameters, and no numeric values are present in the evidence. |
| PGx | Preckel_2006 | not_relevant | 0 | 0 | The paper is a review of molecular mechanisms and clinical potential of xenon, with no data on gene variants affecting xenon PK/PD. |
| popPK | Rezvani_1986 | irrelevant | 3 | 1 | The study analyzes xenon washout for lung function diagnostics in pigs using a compartmental model of lung/blood exchange, but does not provide extractable numerical PK parameters (like CL or Vd values) in the evidence. |
| PGx | Rezvani_1986 | not_relevant | 0 | 0 | The paper investigates mathematical methods for analyzing xenon-133 washout curves to assess lung function in pigs and contains no information on pharmacogenomics or gene variants. |
| popPK | Roberts_1997 | irrelevant | 0 | 0 | The study focuses on the immunological effects of UV radiation and sunscreens in mice, and the mention of "xenon" refers to a xenon arc lamp used as a light source, not the drug Xenon-133 gas. |
| PGx | Roberts_1997 | not_relevant | 0 | 0 | The paper studies immunological effects of UV radiation and sunscreens, unrelated to pharmacogenomics or xenon-133 PK/PD. |
| popPK | Tachikawa_2014 | irrelevant | 0 | 0 | The study focuses on the synthesis and cytotoxicity of protoporphyrin-lipid micelles/liposomes, using a xenon lamp only for photodynamic activation, not xenon-133 gas pharmacokinetics. |
| PGx | Tachikawa_2014 | not_relevant | 0 | 0 | The paper studies protoporphyrin lipids and photodynamic therapy in cell lines; it does not involve xenon-133 gas, human pharmacogenomics, or PK/PD parameters. |
| popPK | Thaler_1982 | irrelevant | 1 | 0 | The paper describes computer simulations of xenon CT measurements for cerebral blood flow using a two-compartment model for tissue uptake/washout, not the systemic pharmacokinetics of the drug xenon_133xe_gas, and no quantitative PK parameter values for the drug are provided. |
| PGx | Thaler_1982 | not_relevant | 0 | 0 | The paper describes computer simulations for xenon CT analysis and contains no information regarding gene variants or pharmacogenomic effects on xenon PK/PD. |
| popPK | Uchida_2022 | irrelevant | 0 | 0 | The paper is an in vitro neurophysiological study on the mechanism of xenon anesthesia, containing no pharmacokinetic parameters. |
| PGx | Uchida_2022 | not_relevant | 0 | 0 | The paper investigates the physiological effects of xenon on neuronal networks in rats and contains no data on pharmacogenomics or genetic variants. |
| popPK | Watson_1977 | relevant | 4 | 2 | The paper models the washout kinetics (disposition) of Xenon-133 in the lung using compartmental models, which constitutes pharmacokinetic data, but specific numeric parameter values (like CL or V) are not explicitly provided in the evidence text. |
| PGx | Watson_1977 | not_relevant | 0 | 0 | The paper discusses radiation dosimetry and kinetic models for xenon-133 clearance, with no mention of genetic variants or pharmacogenomics. |
| popPK | Weibel_2020 | irrelevant | 0 | 0 | The paper is a network meta-analysis of antiemetic drugs for postoperative nausea and vomiting and does not report any pharmacokinetic parameters for xenon_133xe_gas. |
| PGx | Weibel_2020 | not_relevant | 0 | 0 | The paper is a network meta-analysis of drugs for postoperative nausea and vomiting, with no pharmacogenomic data or focus on xenon_133xe_gas. |
| popPK | Wierema_2005 | irrelevant | 0 | 0 | Xenon-133 is used as a diagnostic tracer to measure renal blood flow, not as the subject drug for pharmacokinetic parameter estimation. |
| PGx | Wierema_2005 | not_relevant | 0 | 0 | The paper studies adenosine's renal vasodilation mechanisms using xenon-133 as a measurement tool and contains no pharmacogenomic data or gene variants. |
| popPK | Wilhelm_2002 | irrelevant | 0 | 0 | The paper investigates xenon's neuroprotective efficacy in injury models, not its pharmacokinetic disposition parameters (CL, V, t1/2, etc.). |
| PGx | Wilhelm_2002 | not_relevant | 0 | 0 | The paper investigates the neuroprotective efficacy of xenon in animal models without involving any genetic variants or pharmacogenomic analyses. |
| popPK | Wong_1998 | irrelevant | 0 | 0 | The study investigates photodynamic therapy drugs (NPe6 and HpD) in mice; xenon is only mentioned as part of the lamp light source, not as a drug subject. |
| PGx | Wong_1998 | not_relevant | 0 | 0 | The paper investigates photodynamic therapy in a mouse model and does not involve xenon-133 gas or any pharmacogenomic analysis. |
| popPK | Yarosh_1999 | irrelevant | 0 | 0 | The paper studies the effects of UV light sources on mice, not the pharmacokinetics of xenon-133. |
| PGx | Yarosh_1999 | not_relevant | 0 | 0 | The paper studies the effects of different UV light sources on skin endpoints and contains no information regarding xenon-133 gas or pharmacogenomics. |
| popPK | Younkin_1982 | irrelevant | 1 | 0 | The study measures regional cerebral blood flow using xenon-133 as a diagnostic agent, not its systemic pharmacokinetic parameters. |
| PGx | Younkin_1982 | not_relevant | 0 | 0 | The paper describes a noninvasive method for measuring cerebral blood flow using xenon-133 but does not investigate any pharmacogenomic effects on its pharmacokinetics or pharmacodynamics. |
| popPK | Younkin_1987 | irrelevant | 0 | 0 | The study uses Xenon-133 as a diagnostic tracer to measure cerebral blood flow (CBF) and does not report pharmacokinetic parameters (CL, V, Q) for Xenon-133 itself as the subject drug. |
| PGx | Younkin_1987 | not_relevant | 0 | 0 | The paper investigates physiological effects of hematocrit and blood pressure on cerebral blood flow in newborns using xenon-133 as a tracer, reporting no pharmacogenomic effects on its PK/PD. |
| popPK | Zhou_2026 | irrelevant | 0 | 0 | The study investigates the antifungal efficacy of silver nanoparticles complexed with Streptothricin F, and xenon is only mentioned as a light source for synthesis, not as a pharmacokinetic subject. |
| PGx | Zhou_2026 | not_relevant | 0 | 0 | The paper discusses the synthesis of antifungal nanoparticles using xenon light, not the pharmacokinetics or pharmacodynamics of xenon-133 gas, and does not involve any pharmacogenomic analysis. |
| popPK | Zvidzayi_2021 | irrelevant | 0 | 0 | The study evaluates topical corticosteroid potency in humans and reports no xenon-133 gas pharmacokinetic parameters. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | The paper focuses on xenon's potential as a neuroprotectant delivered via microbubbles for stroke, but contains no quantitative pharmacokinetic parameters (e.g., clearance, volume of distribution) for xenon. |
| PGx | unknown_2018 | not_relevant | 0 | 0 | The paper concerns a Phase 2a trial of T3D-959 for Alzheimer's disease and does not involve xenon_133xe_gas or pharmacogenomic effects. |
| popPK | unknown_2024 | irrelevant | 0 | 0 | no_text gate: only 52 chars of text extracted (&lt; 400) |
| PGx | unknown_2024 | not_relevant | 0 | 0 | The provided text is merely a conference header and does not contain any study details or pharmacogenomic data regarding xenon_133xe_gas. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bxenon_133xe_gas%5D&body=Drug%3A%20xenon_133xe_gas%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_xenon_133xe_gas/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 06:33 UTC</sub>
