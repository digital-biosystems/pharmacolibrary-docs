<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;methionine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Methionine_Giulidori1984_reference&quot;,&quot;label&quot;:&quot;Giulidori_1984_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methionine/Methionine_Giulidori1984_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methionine_Kim2025_reference&quot;,&quot;label&quot;:&quot;Kim_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methionine/Methionine_Kim2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# methionine

- **generic name:** methionine
- **ATC codes:** `V03AB26`
- **DrugBank:** [DB00134](https://go.drugbank.com/drugs/DB00134) · **PubChem:** [CID 6137](https://pubchem.ncbi.nlm.nih.gov/compound/6137)
- **molar mass:** 149.211 g/mol (C5H11NO2S) — DrugBank
- **groups:** approved, investigational, nutraceutical

## About

L-methionine is a sulfur-containing amino acid and a nutrient classified as an antidote. It can be given as an injection into a vein or taken by mouth in liquid forms. It is used as a dietary supplement and approved for medical applications.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q22124685](https://www.wikidata.org/wiki/Q22124685), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| methionine | parent | 149.211 | C5H11NO2S | DrugBank | [6137](https://pubchem.ncbi.nlm.nih.gov/compound/6137) | Giulidori_1984 |
| S-adenosyl-L-methionine | metabolite | 399.446 | C15H23N6O5S+ | PubChem | [34756](https://pubchem.ncbi.nlm.nih.gov/compound/34756) | Giulidori_1984 |

## Start here

> **Giulidori_1984_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> healthy male volunteers, n = 6. [Run it in the simulator](drugs/drug_methionine/Methionine_Giulidori1984_reference.md?tab=Simulation) · [record](drugs/drug_methionine/Methionine_Giulidori1984_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: unreported model parameter default(s): ka</sub> | [Giulidori_1984_reference](drugs/drug_methionine/Methionine_Giulidori1984_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Giulidori P et al., Pharmacokinetics of S-adenosyl-L-methio…, European journal of clinica… (1984) | — |
| <span class="pk-rf" hidden data-species="mouse" data-age="unknown" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: cross_check_disputed</sub> | [Kim_2025_reference](drugs/drug_methionine/Methionine_Kim2025_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Kim MJ et al., Benzoxazole Derivatives as Potent FXR a…, MedComm (2025) | [10.1002/mco2.70442](https://doi.org/10.1002/mco2.70442) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Mizuta_2026_viability](drugs/drug_methionine/pd_Mizuta_2026_viability.md) | cell viability ← L-methionine · direct sigmoid Emax (Hill) effect | — | Mizuta K et al., Methionine Restriction Alone Induces T-…, In vivo (Athens, Greece) (2026) | [10.21873/invivo.14239](https://doi.org/10.21873/invivo.14239) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span> | [Souza_2023_ADG](drugs/drug_methionine/pd_Souza_2023_ADG.md) | average daily gain ← SID methionine intake · direct linear effect | — | Souza VC et al., Systematic review and meta-analysis of…, Animal : an international j… (2023) | [10.1016/j.animal.2023.100894](https://doi.org/10.1016/j.animal.2023.100894) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 0.90).">mouse</span> | [Lignet_2023_Met_EF1](drugs/drug_methionine/pd_Lignet_2023_Met_EF1.md) | Met-EF1α (uncleaved N-terminal methionine elongation factor 1α) in tumor tissue, normalized to total protein ← M8891 (effect compartment concentration Ce) · indirect response — drug inhibits the loss of Met-EF1α (uncleaved N-terminal methionine elongation factor 1α) in tumor tissue, normalized to total protein | model (no simulator) | Lignet F et al., Preclinical Pharmacokinetics and Transl…, Pharmaceutical research (2023) | [10.1007/s11095-023-03611-z](https://doi.org/10.1007/s11095-023-03611-z) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 01:27 | 0:04 | 2/0/0 | 2/1/0 | 0/0/0 | 4,456/198 | einfracz / qwen3.8-27b | 9 | 0/9 | 9/0 | 0 |

## Coverage

- **PubMed hits:** 208 matched, 20 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 2  ·  extracted 0  ·  needs review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Begolo_2018 | irrelevant | 0 | 0 | This is a mechanism-of-action study of the benzoxaborole AN7973 in trypanosomes; methionine appears only as a radiolabel and in SAM metabolism, with no PK parameters for methionine. |
| popPK | Bremm_2024 | irrelevant | 0 | 0 | This is a biomimetic polymersome/peptide self-assembly study; methionine appears only as part of an FFM tripeptide, with no pharmacokinetic parameters. |
| popPK | Eymard_2023 | relevant | 8 | 2 | The study develops a pharmacokinetic model for methionine depletion in mice, but the specific numeric parameter values are not explicitly listed in the provided evidence, only described as being fitted to experimental data. |
| PGx | Eymard_2023 | not_relevant | 0 | 0 | The paper develops a mathematical PK/PD model for a drug but does not report any pharmacogenomic effects of gene variants on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Giulidori_1984 | irrelevant | 0 | 0 | The study examines the pharmacokinetics of S-adenosyl-L-methionine (AdoMet), which is a downstream metabolite/compound in the methionine cycle, not the pharmacokinetics of methionine itself. |
| PGx | Giulidori_1984 | not_relevant | 0 | 0 | The study reports PK parameters for S-adenosyl-L-methionine in healthy volunteers but does not assess any genetic variant or genotype effects (pharmacogenomics). |
| popPK | Gong_2023 | irrelevant | 0 | 0 | This is a metabolomics cohort study of one-carbon metabolite levels and fetal growth, not a pharmacokinetic study of methionine; no disposition parameters (CL, V, ka, half-life, PK model) are reported. |
| popPK | Huang_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of triptolide for NAFLD, using methionine only as part of a dietary regimen (MCD diet) and not as the subject of pharmacokinetic analysis. |
| PGx | Huang_2021 | not_relevant | 0 | 0 | The paper investigates the effect of triptolide on NAFLD in mice using a methionine/choline-deficient diet as a disease model, but it does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of methionine itself. |
| popPK | Kim_2025 | irrelevant | 0 | 0 | The paper is about the FXR/PPARα agonist MHY5396, not methionine; methionine appears only as part of a methionine/choline-deficient diet model, and no methionine PK parameters are reported. |
| popPK | Li_2023 | irrelevant | 2 | 6 | The study uses radiolabeled methionine ([11C]methionine) as a diagnostic PET tracer for myeloma, focusing on net uptake rate (Ki) and metabolic kinetics rather than systemic pharmacokinetic disposition parameters (CL, V) of the drug itself. |
| PGx | Li_2023 | not_relevant | 2 | 5 | The paper analyzes a specific chromosomal translocation (t(4;14)) and its association with a metabolic parameter (k4) of [11C]methionine in myeloma patients, which is a clinical biomarker study rather than a report on a pharmacogenomic effect on the drug's PK/PD. |
| popPK | Lignet_2023 | irrelevant | 0 | 0 | The drug studied is M8891, a methionine aminopeptidase-2 inhibitor — methionine is not the subject drug; no methionine PK parameters are reported. |
| popPK | Martens_2021 | irrelevant | 3 | 2 | This is a PET imaging methodology study using [11C]methionine as a diagnostic tracer in glioma patients; it models tracer transport (K1, k2) but no numeric parameter values are given in the evidence, and methionine is a tracer/probe, not a disposition-PK subject drug. |
| popPK | Michaud_2020 | irrelevant | 2 | 2 | 11C-methionine is only a comparator PET tracer; the PK modeling (k1, k2, Vb) is for 18F-Fluciclovine, and methionine-specific kinetic parameters are not reported numerically. |
| popPK | Mizuta_2026 | irrelevant | 0 | 0 | The study is an in-vitro and immunological experiment on methionine restriction and cancer cell viability (EC50), not a pharmacokinetic study reporting disposition parameters like clearance or volume for methionine. |
| PGx | Mizuta_2026 | not_relevant | 0 | 0 | The paper investigates methionine restriction as a therapeutic intervention for osteosarcoma and does not report on pharmacogenomic effects of gene variants on the PK or PD of any drug. |
| popPK | Paiva_2020 | irrelevant | 0 | 0 | The paper analyzes tea plant composition and is not a pharmacokinetic study for the drug methionine. |
| PGx | Paiva_2020 | not_relevant | 0 | 0 | The study analyzes plant chemistry and antioxidant properties, not pharmacogenomics of methionine. |
| popPK | Souza_2023 | irrelevant | 0 | 0 | The study is a systematic review of methionine utilization efficiency and growth performance (ADG) in piglets, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Souza_2023 | not_relevant | 0 | 0 | The study investigates the comparative efficacy and utilization efficiency of different chemical forms of methionine (an amino acid) in pigs, not the effect of gene variants on the pharmacokinetics or pharmacodynamics of a drug. |
| popPK | Strathe_2011 | irrelevant | 0 | 0 | The study models methionine nutrient requirements in laying hens rather than pharmacokinetic disposition parameters (CL, V, half-life). |
| PGx | Strathe_2011 | not_relevant | 0 | 0 | The paper focuses on nutritional requirements for methionine in laying hens and does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Tatar_2022 | irrelevant | 0 | 0 | This is a medicinal chemistry/antiviral SAR study; methionine is only a synthetic building block, with no PK parameters and only in silico ADMET predictions. |
| popPK | Vaalburg_1992 | irrelevant | 1 | 0 | The paper is a review discussing methionine as a radiotracer for measuring protein synthesis via PET, rather than a study reporting pharmacokinetic disposition parameters (CL, V, ka) for methionine as a subject drug. |
| PGx | Vaalburg_1992 | not_relevant | 0 | 0 | The paper discusses PET imaging methods and radiochemical properties of amino acids, not pharmacogenomic effects on PK/PD. |
| popPK | Zhang_2020 | irrelevant | 0 | 0 | The study investigates the antifungal activity of a chemical compound on a fungus, with methionine used only as a co-supplement in biochemical assays, not as a subject of pharmacokinetic analysis. |
| PGx | Zhang_2020 | not_relevant | 0 | 0 | The paper describes the mechanism of action of a fungicide on a plant pathogen and its interaction with methionine/cysteine metabolism in the fungus, not a human pharmacogenomic effect on the PK/PD of methionine. |
| popPK | Zhang_2021 | irrelevant | 0 | 0 | The paper is a study on fungicide resistance in *Penicillium digitatum*, where methionine is only mentioned as a biochemical intermediate whose production is affected by the fungicide; no pharmacokinetic parameters for methionine are reported. |
| PGx | Zhang_2021 | not_relevant | 0 | 0 | The paper concerns fungicide resistance in Penicillium digitatum, not the pharmacokinetics or pharmacodynamics of the amino acid methionine in humans or other relevant pharmacological contexts. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmethionine%5D&body=Drug%3A%20methionine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_methionine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 01:23 UTC</sub>
