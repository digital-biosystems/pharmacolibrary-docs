<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Airborne pollutants&quot;,&quot;href&quot;:&quot;toxins/AIR.md&quot;},{&quot;label&quot;:&quot;Tritium&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tritium_Honecker1975_reference&quot;,&quot;label&quot;:&quot;Honecker_1975_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_tritium/Tritium_Honecker1975_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# Tritium

- **generic name:** Tritium
- **T3DB:** [T3D4956](http://www.t3db.ca/toxins/T3D4956) · **PubChem:** [CID 24824](https://pubchem.ncbi.nlm.nih.gov/compound/24824)

## About

Isotopic compound composed of two tritium atoms.

<p><small>Source: <a href="https://www.wikidata.org/wiki/Q54973755">Wikidata Q54973755</a> · <a href="https://creativecommons.org/publicdomain/zero/1.0/">CC0</a></small></p>

- **Category:** Natural Toxin, Pollutant, Airborne Pollutant, Synthetic Toxin
- **Route of exposure:** inhalation, ingestion, dermal
- **Sources and uses:** Tritium occurs naturally due to cosmic rays interacting with atmospheric gases. Tritium is produced in nuclear reactors by neutron activation of lithium-6. …
- **Mechanism of toxicity:** Tritium is an isotope of hydrogen, which allows it to readily bind to hydroxyl radicals, forming tritiated water (HTO), and to carbon atoms. Since tritium is a low energy beta emitter, it is not dangerous externally (its beta particles are unable to penetrate the skin), but it is a radiation hazard when inhaled, ingested via food or water, or absorbed through the skin. …
- **Health effects:** Cancer, possibly death.
- **Carcinogenicity:** IARC group 1, carcinogenic to humans.
- **Acute toxicity:** The median lethal dose of tritium assimilated by the body is estimated to be 370 GBq (10 Ci). Higher doses can be tolerated with forced fluid intake to reduce the biological half life.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4956">T3DB T3D4956</a> (free for non-commercial use with attribution), quoted in part; reference markers removed.</small></p>

<p><small>Also: CAS 10028-17-8 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:29298">ChEBI 29298</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| Amphetamine | metabolite | 135.21 | C9H13N | PubChem | [3007](https://pubchem.ncbi.nlm.nih.gov/compound/3007) | Honecker_1975 |
| p-hydroxyamphetamine | metabolite | 151.209 | C9H13NO | PubChem | [3651](https://pubchem.ncbi.nlm.nih.gov/compound/3651) | Honecker_1975 |

## Start here

> **Honecker_1975_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> young adult and old male rats. [Run it in the simulator](drugs/toxin_tritium/Tritium_Honecker1975_reference.md?tab=Simulation) · [record](drugs/toxin_tritium/Tritium_Honecker1975_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="mixed" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: T1_t_half_beta</sub><br><sub>blocking: T1_t_half_terminal</sub> | [Honecker_1975_reference](drugs/toxin_tritium/Tritium_Honecker1975_reference.md) | ▶ model + simulator | retention, 1 pool | 1 | Honecker H et al., Kinetics and metabolism of amphetamine…, Naunyn-Schmiedeberg's archi… (1975) | [10.1007/BF00500043](https://doi.org/10.1007/BF00500043) |
| <span class="pk-rf" hidden data-species="mouse" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub> | [Palma_2007_reference](drugs/toxin_tritium/Tritium_Palma2007_reference.md) | — | 2-compartment (no model) | 3 | Palma E et al., Improved systemic pharmacokinetics, bio…, Journal of controlled relea… (2007) | [10.1016/j.jconrel.2007.03.016](https://doi.org/10.1016/j.jconrel.2007.03.016) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-09 01:03 | 1:21:32 | 1/1/0 | 0/0/0 | 0/0/0 | 2,248,454/75,987 | einfracz / qwen3.8-27b | 204 | 85/86 | 110/94 | 0 |

## Coverage

- **PubMed hits:** 1138 matched, 271 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Masuda_2024.pdf` | Masuda T et al., Validating the application of the revis…, Journal of radiological pro… (2024) | popPK | 7 | [10.1088/1361-6498/ad7a04](https://doi.org/10.1088/1361-6498/ad7a04) | [39265584](https://pubmed.ncbi.nlm.nih.gov/39265584) | The paper develops and validates a PBPK model for organically bound tritium, but the specific kinetic parameter values (half-lives, rate constants) are not listed in the provided text, only the resulting dose coefficients. |

<sub>queue written 2026-11-09 00:33 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | AROSKAR_1964 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of tritium-labeled oxytocin, not tritium as a standalone substance; the tritium is merely a label for the hormone, making the data irrelevant to tritium toxicokinetics. |
| PGx | Abato_2022 | not_relevant | 0 | 0 | The paper investigates the impact of MTHFR genotype on brain injury and oxidative stress markers after ischemic stroke, not the pharmacokinetic or pharmacodynamic parameters of tritium. |
| popPK | Abuhelwa_2015 | irrelevant | 0 | 0 | The paper presents general analytical equations for compartmental pharmacokinetic models and uses arbitrary parameters (e.g., CL=15, V=1) for simulation validation, reporting no specific kinetic data for tritium in any species. |
| popPK | Adhikari_2017 | irrelevant | 0 | 0 | The paper is a review on T-2 mycotoxin (a fungal toxin), not tritium (radioactive hydrogen), and contains no kinetic parameters for tritium. |
| popPK | Agala_2018 | irrelevant | 0 | 0 | The paper reports on HIV antiretroviral therapy adherence and access in humans and does not contain any toxicokinetic parameters for tritium. |
| popPK | Aksono_2022 | irrelevant | 0 | 0 | The paper investigates the toxicity of clove flower extract (Syzygium aromaticum) and eugenol on brine shrimp, with no mention or data regarding tritium. |
| popPK | Alqahtani_2015 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for indomethacin, not tritium. |
| PGx | Alqahtani_2015 | not_relevant | 0 | 0 | The paper reports on the drug indomethacin, not tritium. |
| popPK | Angel-Isaza_2026 | irrelevant | 0 | 0 | The paper investigates the effects of essential oils on immune gene expression in chickens and contains no data regarding tritium toxicokinetics. |
| popPK | Anoshchenko_2020 | irrelevant | 0 | 0 | The paper focuses on placental transporter protein abundance for general drug PBPK modeling and does not report any kinetic parameters specific to tritium. |
| popPK | Arce-López_2020 | irrelevant | 0 | 0 | The paper reports exposure levels of mycotoxins (OTA, OTB, STER) in human plasma and contains no kinetic parameters or data for tritium. |
| popPK | Arce-López_2020_2 | irrelevant | 0 | 0 | The paper describes an analytical method for mycotoxins in human plasma and does not contain any toxicokinetic parameters for tritium. |
| popPK | Arce-López_2021 | irrelevant | 0 | 0 | The paper reports biomonitoring data for mycotoxins (OTA, STER, etc.) and contains no kinetic parameters for tritium. |
| popPK | Arce-López_2021_2 | irrelevant | 0 | 0 | The paper reports plasma concentrations of mycotoxins (ochratoxin A, sterigmatocystin) in children and contains no toxicokinetic parameters for tritium. |
| popPK | Argyropoulou_2007 | irrelevant | 0 | 0 | The paper evaluates iron kinetics and MRI parameters for iron overload in beta-thalassaemia patients and does not report any toxicokinetic parameters for tritium. |
| popPK | Assimopoulos_2021 | irrelevant | 0 | 0 | The paper investigates myocardial hemorrhage and ischemia in pigs using MRI parameters (T1, T2, T2*) and contains no kinetic data or parameters for tritium. |
| popPK | BELFRAGE_1964 | irrelevant | 0 | 0 | The paper studies the kinetics of fat emulsions and chylomicrons in rats using Carbon-14 and Tritium labels, but the subject is lipid metabolism, not tritium toxicokinetics. |
| popPK | Bai_2019 | irrelevant | 0 | 0 | The paper focuses on the toxicokinetics of lead (Pb) in humans and does not report any kinetic parameters for tritium. |
| popPK | Bai_2026 | irrelevant | 0 | 0 | The paper concerns MRI reconstruction algorithms and T2 estimation in humans, containing no data related to tritium toxicokinetics. |
| popPK | Balachandran_2026 | irrelevant | 0 | 0 | The paper describes in silico studies of shikimic acid derivatives as SARS-CoV-2 inhibitors and contains no data or parameters for tritium. |
| PGx | Balcerczak_2010 | not_relevant | 0 | 0 | The paper analyzes ABCB1 polymorphisms as prognostic factors for colorectal cancer staging and survival, but does not measure or report changes in pharmacokinetic or pharmacodynamic parameters for tritium or any specific drug. |
| popPK | Barrón-Bravo_2020 | irrelevant | 0 | 0 | The paper investigates the susceptibility of entomopathogenic nematodes to ivermectin and thiabendazole, and does not contain any data or kinetic parameters for tritium. |
| PGx | Beer_2020 | not_relevant | 0 | 0 | The paper investigates sarcopenia as a risk factor for mortality in chronic liver disease and contains no information on tritium pharmacokinetics/pharmacodynamics or gene-variant effects. |
| popPK | Bena_2020 | irrelevant | 0 | 0 | The paper reports urinary and blood concentrations of various metals (As, Be, Cd, etc.) in workers, but does not report any toxicokinetic parameters (e.g., half-life, rate constants, clearance) for tritium. |
| popPK | Benzi_2024 | irrelevant | 0 | 0 | The paper studies hepatic transporters in the context of drug clearance during pregnancy and uses tritium-labeled compounds ([3H]) solely as analytical tracers/probes, not as the subject of toxicokinetic parameter extraction. |
| popPK | Bertram_2015 | irrelevant | 0 | 0 | The paper reports toxicokinetic parameters (half-life, clearance) for aluminium welding fumes, not tritium. |
| popPK | Bogers_1991 | irrelevant | 0 | 0 | The study investigates the clearance kinetics of radiolabeled IgG and immune complexes in rats, not tritium; iodine-125 is used as the radiotracer. |
| popPK | Bogers_1993 | irrelevant | 0 | 0 | The paper studies the clearance of IgG aggregates labeled with Iodine-125 in rats, not tritium. |
| popPK | Boice_2006 | irrelevant | 0 | 0 | The paper is an epidemiological dose reconstruction study for radiation workers and does not report any original quantitative toxicokinetic parameters (e.g., half-lives, rate constants, or partition coefficients) for tritium. |
| popPK | Burchell_1996 | irrelevant | 0 | 0 | The paper discusses the glucose-6-phosphatase enzyme system and phosphate transport proteins, with no mention of tritium or its toxicokinetics. |
| popPK | Cano-Sancho_2010 | irrelevant | 0 | 0 | The paper reviews biomarkers for mycotoxins (fumonisins, T-2 toxin, etc.) and does not report toxicokinetic parameters for tritium. |
| popPK | Cao_2025 | irrelevant | 0 | 0 | The paper reports the effective dose of oliceridine for sedation and contains no kinetic parameters for tritium. |
| popPK | Cerina_2025 | irrelevant | 0 | 0 | The paper describes the accuracy of MRI segmentation for glioblastoma and contains no kinetic parameters or data related to tritium. |
| popPK | Chen_2024 | irrelevant | 0 | 0 | The paper is a review on thyroid hormones and endocrine disruptors, containing no quantitative toxicokinetic parameters for tritium. |
| popPK | Chen_2024_2 | irrelevant | 0 | 0 | The paper is an epidemiological study of pesticide exposure and inflammatory bowel disease with no tritium data or kinetic parameters. |
| popPK | Chen_2025 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters (ED50/ED95) for remimazolam, esketamine, and remifentanil in pediatric patients, with no mention of tritium. |
| popPK | Chen_2026 | irrelevant | 0 | 0 | The paper reports pharmacodynamic dose-response data (ED50/ED95) for fospropofol disodium in humans and contains no toxicokinetic parameters for tritium. |
| PGx | Chen_2026_2 | not_relevant | 0 | 0 | The paper focuses on quantum machine learning for prostate cancer classification using MRI and does not mention tritium, pharmacogenomics, or PK/PD parameters. |
| popPK | Chi_1978 | irrelevant | 0 | 0 | The paper reports the toxicokinetics of T-2 toxin (using tritium only as a radiotracer), not the kinetic parameters of tritium itself as the subject substance. |
| popPK | Chow_2014 | irrelevant | 0 | 0 | The paper describes an MRI pulse sequence (SASHA) for T1 mapping in humans using gadolinium contrast, and contains no data or parameters regarding tritium. |
| PGx | Christen_2021 | not_relevant | 0 | 0 | The paper describes a genetic cause for a metabolic disorder in a cat, not the pharmacogenomics of tritium. |
| popPK | Claveau_2020 | irrelevant | 2 | 1 | The paper uses tritium-labeled nanodiamonds as a tracer to study the biodistribution of the nanoparticle vehicle, not the toxicokinetics of tritium itself. |
| popPK | Colas-Linhart_1987 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of Technetium-99m, not tritium. |
| PGx | Cowley_2018 | not_relevant | 0 | 0 | The paper characterizes the genetic diversity of rotavirus strains, not pharmacogenomics of drug metabolism/kinetics/dynamics. |
| PGx | Creppy_2002 | not_relevant | 0 | 0 | The paper discusses mycotoxins (fungal toxins) and does not mention tritium, a radioisotope, or any pharmacogenomic effects on its PK/PD. |
| popPK | DeLucia_1993 | irrelevant | 0 | 0 | The paper reports kinetic parameters for protamine sulfate in rats, not tritium. |
| PGx | Deshpande_2024 | not_relevant | 0 | 0 | The paper describes a new MRI pulse sequence for quantifying renal oxygen metabolism, not the pharmacogenomics of tritium or any other drug. |
| PGx | Deshpande_2024_2 | not_relevant | 0 | 0 | The paper reports an MRI method for quantifying renal oxygen metabolic rate in healthy subjects and does not involve pharmacogenomics, tritium, or drug PK/PD. |
| popPK | Di_2023 | relevant | 6 | 1 | The paper describes quantitative kinetic studies of tritium uptake in zebrafish, but the specific time-course data and parameters are presented in figures (Fig. 2) that are not provided in the text evidence. |
| PGx | Doan_2023 | not_relevant | 0 | 0 | The paper concerns rotavirus genomics and vaccine surveillance, not pharmacogenomics or pharmacokinetics of tritium. |
| popPK | Droby_2015 | irrelevant | 0 | 0 | The paper is a magnetic resonance imaging (MRI) phantom study focused on T1/T2 relaxation times and does not contain any toxicokinetic parameters for tritium. |
| popPK | Dyk_2014 | irrelevant | 0 | 0 | The paper is a radiation oncology study analyzing dose-volume parameters for cervical cancer treatment and contains no data on tritium toxicokinetics. |
| popPK | Dziurman_2025 | irrelevant | 0 | 0 | The paper focuses on tumor hypoxia imaging using oxygen spin probes in mice and does not report any toxicokinetic parameters for tritium. |
| popPK | El_1977 | irrelevant | 0 | 0 | The paper reports kinetic parameters (half-lives, distribution) for vincristine, using tritium merely as a radioactive label, not as the subject substance. |
| popPK | Elendran_2024 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for Geraniin and its metabolite Ellagic Acid in rabbits, with no mention of tritium as the subject substance. |
| popPK | Escrivá_2015 | irrelevant | 0 | 0 | The paper is a review of Fusarium mycotoxins (e.g., DON, ZEA, Fumonisins) and does not report toxicokinetic parameters for tritium. |
| popPK | Escrivá_2017 | irrelevant | 0 | 0 | The paper is a review on analytical methods for mycotoxins and does not report kinetic parameters for tritium. |
| PGx | Etyemez_2023 | not_relevant | 0 | 0 | The study investigates neuroactive steroid metabolites and anxiety, not the pharmacokinetics or pharmacodynamics of tritium. |
| popPK | Farina_2025 | irrelevant | 0 | 0 | The paper reports biomonitoring data for hydroxylated polycyclic aromatic hydrocarbons (OH-PAHs) in humans, with no mention of tritium or tritium kinetic parameters. |
| popPK | Farina_2026 | irrelevant | 0 | 0 | The paper focuses on biomonitoring of PCDDs, PCDFs, and PCBs, with no mention of tritium or its kinetic parameters. |
| PGx | Fekri_2019 | not_relevant | 0 | 0 | The paper investigates iron metabolism (ferritin levels) and is unrelated to tritium pharmacokinetics or pharmacodynamics. |
| PGx | Foltyn-Dumitru_2024 | not_relevant | 0 | 0 | The paper investigates MRI radiomics and normalization techniques for glioma classification, not the pharmacokinetics or pharmacodynamics of tritium or any specific drug. |
| popPK | Franco_2022 | irrelevant | 0 | 0 | The paper assesses exposure to mycotoxins (aflatoxins, fumonisins, etc.) and contains no data, parameters, or mention of tritium. |
| PGx | Fritz_1987 | not_relevant | 0 | 0 | The study investigates the pharmacogenomics of phenytoin metabolism; tritium is used only as an isotope tracer in the assay method (NIH shift), not as the drug being studied. |
| PGx | Fu_2018 | not_relevant | 0 | 0 | The study focuses on the toxicity of the mycotoxin Zearalenone and the detoxification effect of Bacillus licheniformis, not on tritium or pharmacogenomics. |
| popPK | Gagnaire_2017 | irrelevant | 2 | 0 | The study focuses on biological effects (DNA damage, immune response) of tritium exposure in fish rather than reporting quantitative toxicokinetic parameters such as half-lives, rate constants, or tissue:blood partition coefficients. |
| popPK | Galal_2018 | irrelevant | 0 | 0 | The paper investigates the toxicological effects of the herbicide penoxsulam on Nile tilapia and does not contain any data regarding tritium toxicokinetics. |
| popPK | Gallo_1989 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of adriamycin in rats, and does not contain any kinetic parameters for tritium. |
| popPK | Gaum_2017 | irrelevant | 0 | 0 | The paper investigates the neurochemical mediation of PCB exposure on depression in humans and contains no data, parameters, or mention of tritium. |
| PGx | Gidari_2024 | not_relevant | 0 | 0 | The paper evaluates the efficacy of a monoclonal antibody cocktail against SARS-CoV-2 variants, not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of tritium. |
| PGx | González-Suárez_2014 | not_relevant | 0 | 0 | The paper reports on the drug methotrexate, not tritium, and discusses pharmacogenomic links to neurotoxicity rather than PK/PD parameters of tritium. |
| PGx | Goodwin_2021 | not_relevant | 0 | 0 | The paper investigates the effect of metformin on CA 15-3 levels, not the pharmacokinetics or pharmacodynamics of tritium. |
| popPK | Goto_1997 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics and emergence times of the anaesthetic gas Xenon in humans, with no mention or data regarding Tritium. |
| PGx | Gowda_2022 | not_relevant | 0 | 0 | The paper reports on a genetic disorder (biotinidase deficiency) affecting biotin metabolism and neurological symptoms, but it does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of tritium. |
| popPK | Gu_2020 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for deuterium-labeled coproporphyrin I (CPI-d8) and tritium-labeled coproporphyrin I ([3H]CPI) as a biomarker for transporter inhibition, not for tritium as the subject substance or as a standalone toxicokinetic study of tritium disposition. |
| popPK | Guerre_2015 | irrelevant | 0 | 0 | The paper reviews toxicokinetics of fusariotoxins (DON, T-2, etc.) in avian species and contains no kinetic parameters for tritium. |
| popPK | Hafner_2020 | irrelevant | 0 | 0 | The paper discusses clinical outcomes and cost-effectiveness of cancer and diabetes treatments, containing no toxicokinetic data for tritium. |
| popPK | Hang_2016 | irrelevant | 0 | 0 | The paper analyzes the pharmacokinetics and exposure-response relationship of peginterferon β-1a in multiple sclerosis patients, containing no kinetic parameters for tritium. |
| popPK | Hardiansyah_2023 | irrelevant | 0 | 0 | The paper investigates the kinetics of 90Y-DOTATATE (a radiopharmaceutical containing Yttrium-90 and a peptide) for dosimetry, and does not report toxicokinetic parameters for tritium. |
| PGx | Hartl_1987 | not_relevant | 0 | 0 | The paper discusses the molecular mechanisms of Burkitt's lymphoma and c-myc translocations, which is unrelated to the pharmacogenomics of tritium or any other drug. |
| PGx | Hoof_2024 | not_relevant | 0 | 0 | The paper investigates genetic biomarkers for asthma immunotherapy efficacy, not the pharmacokinetics or pharmacodynamics of tritium. |
| PGx | Hosseini_2023 | not_relevant | 0 | 0 | The paper reports on MRI radiomics for classifying IDH-mutant astrocytomas, not pharmacogenomic effects on drug PK/PD parameters. |
| popPK | Howes_1998 | irrelevant | 0 | 0 | Tritium is used as a radiolabel for the emulsifier PGPR, and the paper reports the kinetics of the labeled chemical compound rather than tritium itself as the toxic substance of interest. |
| PGx | Huang_2024 | not_relevant | 2 | 0 | The paper describes a clinical trial protocol for rectal cancer and mentions UGT1A1 for irinotecan dosing, but does not report PK/PD parameters for tritium. |
| PGx | Hudemann_2023 | not_relevant | 0 | 0 | The paper focuses on immunological mechanisms of IVIg in pemphigus and does not report pharmacogenomic effects on PK/PD parameters of tritium. |
| PGx | Hyman_1986 | not_relevant | 0 | 0 | The paper describes an assay for enzyme activity in isovaleric acidemia, not the pharmacokinetics or pharmacodynamics of the tritiated drug itself. |
| popPK | Iamiceli_2022 | irrelevant | 0 | 0 | The paper focuses on the biomonitoring of polycyclic aromatic hydrocarbon (PAH) metabolites in humans and does not report any kinetic parameters for tritium. |
| popPK | Inaba_1981 | irrelevant | 0 | 0 | The provided text contains only technical metadata for the GROBD software and lacks any scientific content regarding tritium or kinetic parameters. |
| popPK | Ivanov_2025 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for the antibiotic ss-PHMGd, using tritium solely as a radiolabel for quantification, not as the subject substance. |
| popPK | Ivković-Lazar_2000 | irrelevant | 0 | 0 | The paper discusses body composition assessment in obesity, where tritium is mentioned only as a radioactive tracer for measuring total body water, not as the subject of toxicokinetic study. |
| popPK | Jackson_1991 | irrelevant | 0 | 0 | The paper reports kinetic parameters for a cobalt/chromium cage complex, with tritium appearing only as a label in the title/abstract but no tritium-specific data or models are provided. |
| popPK | Jacquot_2016 | irrelevant | 0 | 0 | The paper describes the pharmacokinetics of tritium-labeled peptides (VH4127), where tritium serves solely as a radiolabel to track the peptide's distribution, rather than tritium being the subject substance for kinetic parameter extraction. |
| PGx | Jia_2025 | not_relevant | 0 | 0 | The paper reports on a deep learning MRI model for predicting P53 mutations in hepatocellular carcinoma and does not discuss pharmacokinetics or pharmacodynamics of tritium. |
| PGx | Jiang_2026 | not_relevant | 0 | 0 | The paper describes a diagnostic method for detecting SLCO1B1 SNPs but does not report pharmacokinetic or pharmacodynamic parameters of tritium. |
| PGx | Jiao_2025 | not_relevant | 0 | 0 | The paper is a genomic analysis of Mycoplasma pneumoniae strains, not a study on human pharmacogenomics or tritium pharmacokinetics. |
| popPK | Jin_2023 | irrelevant | 0 | 0 | The paper is an epidemiological study on artificial light at night and mental disorders using iron as a modifier, containing no data for tritium. |
| PGx | Jin_2024 | not_relevant | 0 | 0 | The paper analyzes survival outcomes and treatment strategies for NSCLC and contains no information regarding gene variants, tritium, or pharmacokinetic/pharmacodynamic parameters. |
| popPK | Kaufman_2019 | irrelevant | 0 | 0 | The paper is a commentary on translational research frameworks in environmental health and does not report any quantitative toxicokinetic parameters for tritium. |
| PGx | Ke_2014 | not_relevant | 0 | 0 | The paper focuses on physiologically-based pharmacokinetic (PBPK) modelling of pregnancy-induced changes in drug disposition (methadone and glyburide), not on pharmacogenomic effects of gene variants on tritium. |
| popPK | Kimura_2004 | irrelevant | 0 | 0 | The paper investigates the toxicokinetics and MRI visualization of perfluorooctanoic acid (PFOA), not tritium. |
| popPK | Knight_2025 | irrelevant | 0 | 0 | The paper describes a chemical synthesis methodology (hydrogen isotope exchange) for labeling compounds with deuterium or tritium and does not report any toxicokinetic parameters (half-life, clearance, etc.) for tritium as a substance. |
| popPK | Kuhlmann_1979 | irrelevant | 0 | 0 | The paper studies the kinetics of digoxin and methyldigoxin, using tritium only as a radioactive label; no kinetic parameters are reported for tritium itself. |
| PGx | Kılıç_2026 | not_relevant | 0 | 0 | The paper describes a genetic disorder (MTHFS deficiency) and its clinical features, not a pharmacogenomic effect on a PK/PD parameter of tritium. |
| popPK | Lai_1999 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for gadolinium (an MRI contrast agent) in the context of diagnosing papilloma, not toxicokinetic parameters for tritium. |
| popPK | Lepron_2021 | irrelevant | 0 | 0 | The paper reports synthetic chemistry for tritium labeling (catalysis) but contains no toxicokinetic parameters for tritium disposition in biological systems. |
| PGx | Li_1991 | not_relevant | 0 | 0 | The paper investigates the association between GLUT2 gene polymorphisms and Type 2 diabetes mellitus, with no mention of tritium, drug pharmacokinetics, or pharmacodynamics. |
| popPK | Li_2024 | irrelevant | 0 | 0 | The paper reports dose-response data for remimazolam in children and contains no information regarding tritium or its toxicokinetics. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for 18F-FDG (a radiotracer) in mice, not for tritium. |
| popPK | Lin_2026 | irrelevant | 0 | 0 | The paper studies cadmium stress in bryophytes and contains no data, parameters, or mention of tritium. |
| popPK | Liu_2020 | irrelevant | 0 | 0 | The paper reports toxicokinetic parameters for the mycotoxin zearalenone (ZEN), not tritium, which does not appear in the evidence. |
| PGx | Liu_2021 | not_relevant | 0 | 0 | The paper studies the drug gedatolisib, not tritium; tritium is used only as a radioactive label for other drugs (paclitaxel/mitoxantrone). |
| popPK | Liu_2025 | irrelevant | 0 | 0 | The paper is a clinical review of natalizumab for multiple sclerosis and contains no data on tritium or its toxicokinetic parameters. |
| popPK | Lopez_2017 | irrelevant | 0 | 0 | The paper investigates cardiac remodeling via CMR in pigs after myocardial infarction and does not report toxicokinetic parameters for tritium. |
| popPK | Lu_1978 | irrelevant | 0 | 0 | The paper studies the environmental fate of tritium-labeled coal by-products (anthracene, fluorene, etc.) in a model ecosystem, using tritium solely as a radiotracer rather than studying tritium's own toxicokinetics. |
| popPK | Luca_2026 | irrelevant | 0 | 0 | The paper investigates sertraline pharmacokinetics and clinical outcomes in humans, with no mention of tritium. |
| PGx | Lumsangkul_2024 | not_relevant | 0 | 0 | The paper focuses on the detoxification of aflatoxin B1 by Thunbergia laurifolia in ducks, not on a pharmacogenomic effect of a gene variant on the PK/PD of tritium or any other specific drug. |
| popPK | Maeurer_1996 | irrelevant | 0 | 0 | The paper describes gamma-delta T cell biology in cancer patients and contains no toxicokinetic parameters for tritium. |
| popPK | Magrin_2024 | irrelevant | 0 | 0 | The study investigates the assimilation of the UV filter Benzophenone-3 in oysters, with no mention of tritium or its toxicokinetics. |
| PGx | Mahajan_2020 | not_relevant | 0 | 0 | The paper focuses on machine learning for breast cancer diagnosis and contains no information about tritium, drug pharmacokinetics, or pharmacodynamics. |
| PGx | Mancini_1986 | not_relevant | 0 | 0 | The paper discusses tritium-labeled NANA-methylester as a research tool for studying NANA storage disorders, not tritium as a drug subject to pharmacogenomic analysis. |
| popPK | Marandici_1983 | irrelevant | 2 | 3 | The paper studies the pharmacokinetics of deoxycorticosterone (DOC) using tritium as a radioactive tracer, not the toxicokinetics of tritium itself. |
| popPK | Masuda_2024 | relevant | 7 | 2 | The paper develops and validates a PBPK model for organically bound tritium, but the specific kinetic parameter values (half-lives, rate constants) are not listed in the provided text, only the resulting dose coefficients. |
| popPK | Mattison_1988 | irrelevant | 0 | 0 | The paper focuses on MRI techniques using paramagnetic ions (Mn, Fe, Gd) and contains no data or parameters for tritium. |
| popPK | McNelis_1972 | irrelevant | 2 | 5 | The study measures steady-state body burden concentrations (pCi/ml) following acute exposure to assess dose, but does not report kinetic parameters such as half-life, rate constants, or clearance values. |
| popPK | Mendes_2023 | irrelevant | 0 | 0 | The paper is a mycotoxin biomonitoring study in humans and does not report any kinetic parameters for tritium. |
| PGx | Mohanty_2025 | not_relevant | 0 | 0 | The paper focuses on CYP450 polymorphisms and diabetes drug response, but does not report any pharmacokinetic or pharmacodynamic parameters for the substance 'tritium'. |
| popPK | Momoshima_2022 | irrelevant | 0 | 0 | The paper describes the environmental sources and distribution of tritium but contains no quantitative toxicokinetic parameters (half-lives, rate constants, etc.) for humans or animals. |
| PGx | Morriss_2017 | not_relevant | 0 | 0 | The paper discusses plant biology and rRNA turnover, unrelated to the pharmacokinetics or pharmacodynamics of tritium. |
| popPK | Mross_2009 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics and tumor imaging effects of vandetanib, a cancer drug, and does not report any toxicokinetic parameters for tritium. |
| popPK | Muni_1984 | irrelevant | 1 | 1 | The paper studies the toxicokinetics of 8-methoxypsoralen, where tritium is used only as a radioactive tracer to label the subject compound, not as the subject substance itself. |
| popPK | Murase_2023 | irrelevant | 0 | 0 | The paper describes a chemical synthesis method for tritium-labeled oligonucleotides in vitro and does not report any in vivo or in vivo toxicokinetic parameters (such as half-life, clearance, or distribution) for tritium. |
| popPK | Muñoz-Solano_2023 | irrelevant | 0 | 0 | The paper reports mycotoxin biomonitoring in animal plasma and does not contain kinetic parameters for tritium. |
| popPK | Muñoz-Solano_2024 | irrelevant | 0 | 0 | The paper is a review of mycotoxin exposure in food-producing animals and does not report kinetic parameters for tritium. |
| PGx | Nagral_2017 | not_relevant | 0 | 0 | The paper reports clinical outcomes (SVR) and safety (adverse events, ferritin) for HCV treatment in thalassemia patients; it does not report pharmacogenomic effects on PK/PD parameters for tritium (or any other drug). |
| popPK | Narváez_2021 | irrelevant | 0 | 0 | The paper focuses on T-2 toxin, not tritium. |
| popPK | Ndaw_2021 | irrelevant | 0 | 0 | The paper investigates mycotoxin exposure (DON, ZEN, etc.) in grain elevator workers and does not report any toxicokinetic parameters for tritium. |
| popPK | Ndaw_2021_2 | irrelevant | 0 | 0 | The paper focuses on the development of analytical methods for mycotoxins and contains no kinetic parameters for tritium. |
| PGx | Nemoto_1993 | not_relevant | 0 | 0 | The study examines gene expression in cell culture and mentions tritium only as a label for thymidine, not as the drug of interest for PK/PD pharmacogenomic analysis. |
| popPK | Niknejad_2021 | irrelevant | 0 | 0 | The paper reports urinary concentrations of mycotoxins (DON, NEO, T-2, HT-2) in human urine and contains no kinetic parameters for tritium. |
| popPK | Nishiwaki_2004 | irrelevant | 0 | 0 | The paper investigates the health effects of carbon disulphide (CS2) exposure on brain MRI findings and does not report any toxicokinetic parameters for tritium. |
| popPK | OHanlon_2024 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for cefazolin and vancomycin adsorption, with no mention of tritium. |
| PGx | Ogbonnaya_2024 | not_relevant | 0 | 0 | The paper investigates radiogenomics correlations in prostate cancer MRI and does not involve tritium or its pharmacokinetics/pharmacodynamics. |
| PGx | Ong_1994 | not_relevant | 0 | 0 | The paper describes a case of adrenomyeloneuropathy involving VLCFA metabolism and does not involve the pharmacokinetics or pharmacodynamics of tritium. |
| PGx | Ortega-Ayala_2024 | not_relevant | 1 | 0 | The paper reports pharmacogenomic effects on the pharmacokinetics of metformin, not tritium. |
| popPK | Osteresch_2017 | irrelevant | 0 | 0 | The paper describes an analytical method for mycotoxins in human blood and does not contain any kinetic parameters or data for tritium. |
| popPK | Palma_2007 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for CpG-oligodeoxynucleotides (ODNs) where tritium is used solely as a radioactive label, not as the subject substance. |
| popPK | Papasouliotis_2022 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for the drug evobrutinib, not for the substance tritium. |
| PGx | Park_1995 | not_relevant | 0 | 0 | The paper investigates metabolic abnormalities in dermatomyositis using MRI/MRS and does not involve tritium or pharmacogenomics. |
| popPK | Parks_2021 | irrelevant | 0 | 0 | The paper is an epidemiological study investigating the association between pesticide use and shingles risk, containing no tritium toxicokinetic parameters. |
| popPK | Persaud_1980 | irrelevant | 1 | 2 | The paper studies the placental transfer of tritium-labeled prostaglandin F1alpha in rats, not the toxicokinetic parameters (half-life, clearance, partition coefficients) of elemental tritium or tritiated water as the subject substance. |
| popPK | Pomper_1990 | irrelevant | 0 | 0 | The paper reports pharmacokinetic and receptor binding data for fluorine-18 and tritium-labeled synthetic progestins (R5020 analogs and DU 41165), not for elemental tritium as a subject substance. |
| popPK | Prasad_2009 | irrelevant | 0 | 0 | The subject substance is 7α-Methyl-19-nortestosterone (MENT), and tritium is used solely as a radioisotope label for tracking, not as the substance of interest. |
| popPK | Putschögl_2015 | irrelevant | 0 | 0 | The paper studies the neurotoxic effects of polychlorinated biphenyls (PCBs) on neurotransmitter metabolites in humans and contains no kinetic data for tritium. |
| popPK | Pántya_2018 | irrelevant | 2 | 5 | The paper reports measurement uncertainties and activity concentrations from an intercomparison but relies on standard ICRP kinetic parameters (10d/40d half-lives) without presenting new kinetic data for the substance itself. |
| popPK | Quansah_2026 | irrelevant | 0 | 0 | The paper describes a restraint system for awake rat fMRI and contains no toxicokinetic data for tritium or any other substance. |
| PGx | Rawson_2024 | not_relevant | 0 | 0 | The paper describes a hereditary neurological condition in dogs and does not report any pharmacokinetic or pharmacodynamic effects of tritium or any other drug. |
| popPK | Riccò_2018 | irrelevant | 0 | 0 | The paper investigates the toxicokinetics of zinc, not tritium; tritium is not mentioned or measured in the study. |
| popPK | Roukos_2015 | irrelevant | 0 | 0 | The paper is a review on the mechanisms of ALK-translocation formation in cancer and contains no information regarding tritium toxicokinetics. |
| PGx | SUBAK-SHARPE_1965 | not_relevant | 0 | 0 | The paper studies genetic variants in hamster cell lines regarding resistance to metabolic inhibitors and has no connection to tritium pharmacokinetics or pharmacodynamics. |
| popPK | Sadeghi_2024 | irrelevant | 0 | 0 | The paper studies the toxicity of copper oxide nanoparticles in goldfish and does not mention tritium. |
| PGx | Sakamoto_2020 | not_relevant | 0 | 0 | The paper reports genetic variants in ITPA causing epileptic encephalopathy and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of tritium. |
| popPK | Salcedo-Bellido_2021 | irrelevant | 0 | 0 | The paper focuses on the association between cadmium levels and type 2 diabetes risk, with no mention of tritium or its toxicokinetics. |
| PGx | Saluja_2023 | not_relevant | 0 | 0 | The paper investigates gene expression in gallbladder cancer and does not report pharmacokinetic or pharmacodynamic effects of tritium. |
| popPK | Sapota_2003 | irrelevant | 0 | 0 | The paper reports kinetic parameters for o-anisidine, using tritium (tritium) only as a radiolabel/analytical tracer rather than the subject substance. |
| popPK | Sartayev_2025 | irrelevant | 0 | 0 | The paper is a review of health and environmental risks associated with tritium exposure, containing no quantitative toxicokinetic parameters or kinetic models for tritium. |
| popPK | Schelstraete_2020 | irrelevant | 0 | 0 | The paper is a review on the toxicokinetics of mycotoxins (DON, FB1, ZEN, T-2) and does not contain data for tritium. |
| popPK | Schiano_2025 | irrelevant | 0 | 0 | The paper focuses on genotoxic endpoints (DNA damage) and dose rates, but does not report quantitative toxicokinetic parameters such as half-life, clearance, or partition coefficients. |
| PGx | Schmid_1992 | not_relevant | 0 | 0 | The paper investigates lysosomal storage diseases using tritiated gangliosides as research tracers for metabolic pathway analysis, not the pharmacokinetics/pharmacodynamics of tritium as a drug. |
| popPK | Schmidt_2021 | irrelevant | 0 | 0 | The paper focuses on the analysis of mycotoxins in human urine and contains no data or parameters for tritium toxicokinetics. |
| popPK | Schousboe_1986 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of the drug THPO (using tritium as a tracer label), not the toxicokinetics of tritium itself. |
| PGx | Schuit_2017 | not_relevant | 2 | 1 | The paper analyzes smoking cessation outcomes (abstinence rates) as a function of genotype, not changes in PK/PD parameters, and the drug in question (tritium) is not the subject of the study. |
| popPK | Scribner_1997 | irrelevant | 0 | 0 | The paper investigates the tissue distribution of fluorine-18-labeled fluorodoisynolic acids, not tritium; tritium is only mentioned as a potential future tracer or used as an analytical tracer for estradiol. |
| popPK | Serri_2025 | irrelevant | 0 | 0 | The paper investigates in vitro cholesterol gallstone dissolution using natural extracts and contains no data regarding tritium toxicokinetics. |
| popPK | Shi_1990 | irrelevant | 0 | 0 | The paper studies the toxicokinetics of methylmercury (Hg), using tritium only as a radioactive label for visualization, so tritium is an analytical reagent/co-exposure rather than the subject substance. |
| PGx | Shi_2024 | not_relevant | 0 | 0 | The paper discusses a genetic variant (CGG repeat expansion) causing a myopathy, not a pharmacogenomic effect on the PK or PD of tritium. |
| PGx | Shimizu_2025 | not_relevant | 0 | 0 | The study reports pharmacokinetics and pharmacodynamics of eggshell membrane but does not investigate the effect of any gene variant or genotype on these parameters. |
| PGx | Simonetti_2026 | not_relevant | 2 | 10 | The study investigates a pharmacodynamic response (sweat chloride) to a CFTR modulator, not a PK/PD parameter of tritium. |
| popPK | Simpson_1983 | irrelevant | 0 | 0 | The paper is an occupational exposure and dose estimation study for workers handling radioluminescent materials, reporting dose equivalents and activities handled, but it does not report quantitative toxicokinetic parameters (such as half-lives, rate constants, or partition coefficients) for tritium. |
| popPK | Singhai_2024 | irrelevant | 0 | 0 | The paper is a clinical trial protocol for dental surgery comparing aescin and diclofenac, and contains no data or parameters regarding tritium toxicokinetics. |
| popPK | Sinha_1985 | irrelevant | 0 | 0 | The paper reports kinetic parameters for arbaprostil-3H (a tritium-labeled drug), where tritium is an isotope label rather than the subject substance (elemental tritium/TOW). |
| popPK | Slobodchikova_2018 | irrelevant | 0 | 0 | The paper describes an analytical method for mycotoxins in human plasma and contains no data regarding the toxicokinetics of tritium. |
| PGx | Smits_2016 | not_relevant | 0 | 0 | The paper is a review of imaging features for oligodendroglioma and does not discuss pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters of tritium. |
| PGx | Snanoudj_2019 | not_relevant | 0 | 0 | The paper describes a genetic mutation in the SERAC1 gene causing MEGDHEL syndrome, with no mention of tritium or drug pharmacokinetics/pharmacodynamics. |
| popPK | Soize_2021 | irrelevant | 0 | 0 | The paper investigates stroke imaging findings (susceptibility vessel sign) in humans and does not contain any toxicokinetic data for tritium. |
| popPK | Spoof_2003 | relevant | 8 | 2 | The paper describes a toxicokinetic study of tritium-labeled dihydronodularin in mice and reports qualitative findings (liver accumulation), but the specific quantitative kinetic parameters (e.g., exact retention values, rate constants) are primarily presented in Figure 3 which is not provided in the evidence text. |
| popPK | Stehling_2026 | irrelevant | 0 | 0 | The paper describes MRI relaxation times (T1/T2) for abdominal aortic aneurysms and contains no data or parameters for tritium toxicokinetics. |
| popPK | Stromp_2015 | irrelevant | 0 | 0 | The paper is a cardiovascular magnetic resonance (MRI) imaging study in humans and contains no data on tritium or its toxicokinetic parameters. |
| popPK | Sudakin_2003 | irrelevant | 0 | 0 | The paper discusses trichothecenes (mycotoxins) and does not report any toxicokinetic parameters for tritium. |
| popPK | Sun_2015 | irrelevant | 0 | 0 | The paper reports toxicokinetic parameters for T-2 toxin (a mycotoxin), not the radioactive isotope tritium (hydrogen-3). |
| popPK | Sundt_2009 | irrelevant | 0 | 0 | The paper reports toxicokinetic parameters (half-lives) for alkylphenols, where tritium is used solely as a radiolabel for detection, not as the subject substance. |
| PGx | Syvänen_2020 | not_relevant | 0 | 0 | The paper reports the synthesis and imaging of fluorine-18 labeled antibodies; it does not involve tritium or any pharmacogenomic analysis of drug PK/PD. |
| popPK | Tajima_2025 | irrelevant | 0 | 0 | The paper reports biomonitoring data for mycotoxins (deoxynivalenol, T-2, HT-2, zearalenone) in humans, with no mention or data regarding tritium toxicokinetics. |
| popPK | Takizawa_2004 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of a tritium-labeled herbal medicine (TJ-8117) and its component ECG in rats and dogs, using tritium strictly as an analytical radiotracer rather than studying tritium itself as the subject substance. |
| popPK | Tang_2023 | irrelevant | 0 | 0 | The study investigates organophosphate flame retardants (specifically TPhP) and thyroid hormones, with no mention of tritium or its toxicokinetic parameters. |
| popPK | Tang_2025 | irrelevant | 0 | 0 | The paper reports pharmacological parameters (ED50/ED95) for nalbuphine, not toxicokinetic parameters for tritium. |
| popPK | Taylor_1980 | irrelevant | 0 | 0 | Tritium is used solely as a radioactive label for prostacyclin (a different substance), not as the subject of toxicokinetic investigation. |
| popPK | Teplán_1989 | irrelevant | 0 | 0 | The paper focuses on the synthesis and biological activity of GnRH analogs, using tritium only as a radioactive label for tracers, not reporting toxicokinetic parameters for tritium itself. |
| popPK | Tkaczyk_2021 | irrelevant | 0 | 0 | The paper reviews mycotoxin toxicokinetics in pigs and does not report kinetic parameters for tritium. |
| popPK | Tomlinson_1984 | irrelevant | 1 | 5 | The study measures the pharmacokinetics of the drug fenprostalene using tritium as a radiolabel, rather than characterizing the toxicokinetics of elemental or compound tritium as the subject substance. |
| popPK | Tsai_2026 | irrelevant | 0 | 0 | The paper reports biophysical skin responses to radiotherapy and contains no toxicokinetic parameters for tritium. |
| popPK | Uwase_2023 | irrelevant | 0 | 0 | The paper investigates cardiac mechanical properties and CMR partition coefficients in leukemia survivors and does not report any toxicokinetic parameters for tritium. |
| popPK | Vanhecke_2024 | irrelevant | 0 | 0 | The paper focuses on tamoxifen administration and efficacy in mice, with no kinetic parameters reported for tritium. |
| popPK | Varun_2011 | irrelevant | 0 | 0 | The paper focuses on lead phytoremediation and barley bioassays, containing no data or parameters for tritium toxicokinetics. |
| PGx | Vieira_2020 | not_relevant | 0 | 0 | The paper reports an MTHFR genetic variant causing a metabolic disease (hyperhomocysteinemia), not a pharmacogenomic effect on the PK/PD of tritium. |
| PGx | Vizzi_2025 | not_relevant | 0 | 0 | The paper focuses on rotavirus genotyping and surveillance in children, with no mention of tritium or pharmacokinetic/pharmacodynamic parameters. |
| popPK | Vølund_1980 | irrelevant | 0 | 0 | The paper discusses statistical methods for multivariate bioassays using insulin in rabbits, with no mention of tritium or its toxicokinetics. |
| popPK | Wang_2022 | irrelevant | 0 | 0 | The paper studies the timing of alfentanil and rocuronium administration to prevent withdrawal movements in human patients and contains no data on tritium. |
| popPK | Wang_2022_2 | irrelevant | 0 | 0 | The paper studies the pharmacodynamics of sufentanil in geriatric patients and contains no data on tritium. |
| popPK | Williams_1995 | irrelevant | 1 | 4 | The paper reports the toxicokinetics of tritium-labeled microcystin-LR (a toxin) where tritium is used solely as a radioactive tracer, not as the subject substance. |
| PGx | Wold-McGimsey_2023 | not_relevant | 0 | 0 | The study investigates CRISPR-Cas9 genome editing of PPO genes in wheat to reduce enzymatic activity and browning, and does not involve pharmacokinetics, pharmacodynamics, or pharmacogenomics of tritium. |
| PGx | Xi_2023 | not_relevant | 0 | 0 | The paper describes non-invasive genomic profiling of oral cancers and does not involve pharmacokinetics or pharmacodynamics of tritium. |
| PGx | Xiao_2025 | not_relevant | 0 | 0 | The paper analyzes the functional impact of genetic variants on the ACAT1 enzyme (T2) and does not involve the drug tritium. |
| popPK | Xin_2026 | irrelevant | 0 | 0 | The paper investigates the nutritional impact of black soldier fly meal on prawn growth and contains no kinetic data for tritium. |
| popPK | Xu_2024 | irrelevant | 0 | 0 | The paper focuses on orlistat pharmacodynamics and bioequivalence study design, with no mention of tritium. |
| PGx | Xu_2025 | not_relevant | 0 | 0 | The paper focuses on the role of RNASET2 in hepatocellular carcinoma metastasis and cholesterol metabolism, with no mention of tritium or its pharmacokinetics/pharmacodynamics. |
| PGx | Yamada_2013 | not_relevant | 0 | 0 | The paper reviews the pathophysiology and risk factors of cerebral amyloid angiopathy, not the pharmacokinetics or pharmacodynamics of tritium. |
| popPK | Ye_2023 | irrelevant | 0 | 0 | The study investigates the association between environmental factors (greenness/NO2) and hypertension prevalence in humans, containing no data, parameters, or discussion regarding tritium. |
| popPK | Zanolo_1984 | irrelevant | 0 | 0 | no_text gate: only 140 chars of text extracted (&lt; 400) |
| popPK | Zeng_2019 | irrelevant | 0 | 1 | The paper reports toxicokinetic parameters for the mycotoxin T-2 toxin (and its metabolite T-2 triol), not the radionuclide tritium. |
| PGx | Zeng_2022 | not_relevant | 0 | 0 | The paper reports a pharmacogenetic association between GSTP1 variants and chemotherapy toxicity (neutropenia) in breast cancer patients, but does not involve tritium. |
| popPK | Zhang_2008 | irrelevant | 0 | 0 | Tritium is used solely as a radiolabel (3H) for the drug carrier NOSC, not as the subject substance for toxicokinetic evaluation. |
| PGx | Zhou_2024 | not_relevant | 0 | 0 | The paper discusses clinical predictors (genotype, QTc) for cardiac iron deposition in thalassemia patients, not the pharmacokinetics or pharmacodynamics of a drug like tritium. |
| PGx | Zhu_2020 | not_relevant | 0 | 0 | The paper investigates the physiological response of tall fescue to cadmium stress and nitric oxide, and does not involve human pharmacogenomics or the drug tritium. |
| popPK | Zhu_2025 | irrelevant | 0 | 0 | The paper studies the association between heavy metal exposure and semen quality in humans and does not report kinetic parameters for tritium. |
| PGx | Zurflüh_2006 | not_relevant | 0 | 0 | The paper studies the pharmacokinetics of tetrahydrobiopterin (BH4) and does not mention or investigate tritium. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btritium%5D&body=Drug%3A%20tritium%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_tritium/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-09 00:33 UTC</sub>
