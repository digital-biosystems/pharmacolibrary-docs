<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Bacterial toxins&quot;,&quot;href&quot;:&quot;toxins/BACT.md&quot;},{&quot;label&quot;:&quot;Enterotoxin type A&quot;}]"></div>

# Enterotoxin type A

- **generic name:** Enterotoxin type A
- **T3DB:** [T3D2618](http://www.t3db.ca/toxins/T3D2618) · **PubChem:** none

## About

Enterotoxin type A is one of many enterotoxins produced by Staphylococcus aureus. Enterotoxins are cytotoxic and kill cells by altering the apical membrane permeability of the mucosal (epithelial) cells of the intestinal wall. They are mostly pore forming toxins that assemble to form pores in cell membranes.

- **Category:** Protein, Bacterial Toxin, Natural Toxin
- **Route of exposure:** ingestion, inhalation, dermal
- **Sources and uses:** Enterotoxin type A is one of many enterotoxins produced by Staphylococcus aureus.
- **Mechanism of toxicity:** The action of enterotoxins leads to increased chloride ion permeability of the apical membrane of intestinal mucosal cells. These membrane pores are activated by either increased cAMP or by increased calcium ion concentration intracellularly. …
- **Health effects:** Enterotoxins are cytotoxic.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2618">T3DB T3D2618</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Nagaki_1993_reference](drugs/toxin_enterotoxin_type_a/EnterotoxinTypeA_Nagaki1993_reference.md) | — | 1-compartment (no model) | 0 | Nagaki M et al., Clearance and tissue distribution of st…, Journal of medical microbio… (1993) | [10.1099/00222615-38-5-354](https://doi.org/10.1099/00222615-38-5-354) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CD80** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Song_2023](drugs/toxin_enterotoxin_type_a/pgx_Song_2023_CD80_Q100.md) | Song PY et al., CD80 DNA methylation and single-nucleot…, Research and practice in th… (2023) | [10.1016/j.rpth.2023.100093](https://doi.org/10.1016/j.rpth.2023.100093) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP2C19** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | formation | [Song_2023](drugs/toxin_enterotoxin_type_a/pgx_Song_2023_CYP2C19_Q100.md) | Song PY et al., CD80 DNA methylation and single-nucleot…, Research and practice in th… (2023) | [10.1016/j.rpth.2023.100093](https://doi.org/10.1016/j.rpth.2023.100093) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=enterotoxin_type_a).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2C19` formation | PGx paper |

<sub>Actors without a tissue in the table: CD80 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-11 17:49 | 53:06 | 0/1/0 | 0/0/0 | 0/0/2 | 986,364/23,180 | einfracz / qwen3.8-27b | 82 | 17/54 | 82/0 | 0 |

## Coverage

- **PubMed hits:** 1679 matched, 241 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Nagaki_1993.pdf` | Nagaki M et al., Clearance and tissue distribution of st…, Journal of medical microbio… (1993) | popPK | 10 | [10.1099/00222615-38-5-354](https://doi.org/10.1099/00222615-38-5-354) | [8487292](https://pubmed.ncbi.nlm.nih.gov/8487292) | The paper reports quantitative clearance half-lives (3 min, 2 h) and tissue distribution data for enterotoxin type A (SEA) in rats. |

<sub>queue written 2026-11-11 17:44 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abbasi_2022 | irrelevant | 0 | 0 | The paper focuses on radiological risk assessment of natural radionuclides (226Ra, 232Th, 40K) in marine ecosystems and contains no data regarding enterotoxin_type_a. |
| popPK | Abbasi_2023 | irrelevant | 0 | 0 | The paper concerns 210Po in sediment and radiation risk, not the toxicokinetics of enterotoxin type A. |
| popPK | Abd-Elkader_2023 | irrelevant | 0 | 0 | The paper investigates microplastics in marine invertebrates and contains no data regarding enterotoxin type A. |
| popPK | Aghito_2024 | irrelevant | 0 | 0 | The paper studies polycyclic aromatic hydrocarbons (PAHs) in mussels and does not involve enterotoxin type a. |
| popPK | Almeda_2021 | irrelevant | 0 | 0 | The study focuses on petroleum hydrocarbons (PAHs) and microplastics in copepods, with no mention of enterotoxin_type_a or its toxicokinetics. |
| PGx | Arrington_2025 | not_relevant | 0 | 0 | The paper discusses microbial ecology and hydrocarbon metabolism, unrelated to human pharmacogenomics or drugs. |
| popPK | Avnaim-Katav_2022 | irrelevant | 0 | 0 | The paper describes a new species of foraminifer and contains no toxicokinetic data for enterotoxin_type_a. |
| popPK | Ayotte_1996 | irrelevant | 0 | 0 | The paper focuses on dioxin-like compounds and not enterotoxin_type_a. |
| popPK | Badraoui_2023 | irrelevant | 0 | 0 | The study focuses on azithromycin toxicity in marine nematodes and does not report any quantitative toxicokinetic parameters for enterotoxin type A. |
| popPK | Bakker_2019 | irrelevant | 0 | 0 | The paper is an ecological study on marine biodiversity using eDNA metabarcoding and contains no toxicokinetic data for enterotoxin_type_a. |
| popPK | Bargagli_1987 | irrelevant | 0 | 0 | The paper is an environmental study on lichen biomonitoring for trace metals and does not contain any data regarding enterotoxin type A. |
| popPK | Bargagli_2016 | irrelevant | 0 | 0 | The paper is a review on mercury biomonitoring in mosses and lichens and does not contain any data or kinetic parameters for enterotoxin_type_a. |
| popPK | Barregard_2019 | irrelevant | 0 | 0 | The paper is an epidemiological study on health impacts of PM2.5 from shipping emissions and does not contain toxicokinetic parameters for enterotoxin type A. |
| popPK | Bechmann_2019 | irrelevant | 0 | 0 | The paper studies hydrogen peroxide (H2O2), not enterotoxin_type_a. |
| popPK | Beiras_2019 | irrelevant | 0 | 0 | The paper studies the toxicity of microplastics to marine larvae and does not report any toxicokinetic parameters for enterotoxin type A. |
| popPK | Bengtson_2023 | irrelevant | 0 | 0 | The paper focuses on ecophysiological biomarkers in humpback whales and does not contain any toxicokinetic parameters for enterotoxin_type_a. |
| popPK | Benito_2024 | irrelevant | 0 | 0 | The paper is an ecological biomonitoring study using mussels as sentinels and does not report kinetic parameters for enterotoxin_type_a. |
| popPK | Bonanno_2017 | irrelevant | 0 | 0 | The paper is a review on trace elements in seagrasses and does not contain any toxicokinetic parameters for enterotoxin type A. |
| popPK | Bonanno_2018 | irrelevant | 0 | 0 | The paper discusses plastic pollution in marine species and contains no data regarding enterotoxin_type_a. |
| popPK | Bonanno_2020 | irrelevant | 0 | 0 | The paper studies trace elements (Cd, Cr, Cu, Ni, Pb, Zn) in marine plants and contains no data for enterotoxin_type_a. |
| popPK | Borgulat_2023 | irrelevant | 0 | 0 | The paper focuses on biomonitoring of atmospheric PAHs in plant needles and does not involve enterotoxin_type_a or toxicokinetic parameters. |
| PGx | Bromaghin_2015 | not_relevant | 0 | 0 | The paper discusses dietary estimation methods using fatty acid signatures in ecology and contains no information regarding pharmacogenomics or enterotoxin_type_a. |
| popPK | Brookes_2014 | irrelevant | 0 | 0 | The paper focuses on the risk assessment of PRRS virus infection in pigs, not the toxicokinetic parameters of enterotoxin type A. |
| popPK | Buchet_1994 | irrelevant | 0 | 0 | The paper studies inorganic arsenic and its metabolites, not enterotoxin_type_a. |
| popPK | Burioli_2017 | irrelevant | 0 | 0 | The paper studies trace elements in oysters and does not contain any data for enterotoxin_type_a. |
| popPK | C_2023 | irrelevant | 0 | 0 | The paper focuses on biomonitoring of organic pollutants (PCBs, OCPs, PBDEs) in sea turtles and does not report toxicokinetic parameters for enterotoxin_type_a. |
| popPK | Calisi_2023 | irrelevant | 0 | 0 | The paper reports on biomarkers (hemocyte morphology, lysosomal destabilization) in mussels exposed to general pollution, with no kinetic parameters or specific data for enterotoxin type A. |
| popPK | Camacho_2018 | irrelevant | 0 | 0 | The paper analyzes macro and trace elements in sea urchins and does not study the toxicokinetics of enterotoxin_type_a. |
| popPK | Candan_2020 | irrelevant | 0 | 0 | The paper describes bacterial diversity in green turtle nests and does not report any toxicokinetic parameters for enterotoxin_type_a. |
| popPK | Capozzi_2023 | irrelevant | 0 | 0 | The paper reports on microplastic deposition in mosses and contains no toxicokinetic parameters for enterotoxin type A. |
| popPK | Carmichael_2006 | irrelevant | 0 | 0 | The paper focuses on microcystins and does not report quantitative toxicokinetic parameters for enterotoxin type A. |
| popPK | Carvalho_1987 | irrelevant | 0 | 0 | The paper studies the uptake of Cobalt-60 in marine mollusks, not enterotoxin_type_a. |
| popPK | Castrec_2023 | irrelevant | 0 | 0 | The paper investigates the bioaccumulation of trace elements, PAHs, and PCBs in marine species, with no mention or data regarding enterotoxin_type_a. |
| PGx | Charles_2007 | not_relevant | 0 | 0 | The paper studies the effect of dietary seaweed on liver enzyme expression in rats, which is unrelated to the drug enterotoxin_type_a and does not involve human pharmacogenomics. |
| popPK | Chen_2022 | irrelevant | 0 | 0 | The paper describes the separation of flavonoids from sea buckthorn berries and does not contain any kinetic data for enterotoxin type A. |
| popPK | Chen_2024 | irrelevant | 0 | 0 | The paper investigates organophosphate triesters and diesters, not enterotoxin_type_a. |
| popPK | Cheng_2025 | irrelevant | 0 | 0 | The paper is an epidemiological and machine learning study on dengue fever prediction based on meteorological data, containing no toxicokinetic parameters for enterotoxin_type_a. |
| popPK | Chidugu-Ogborigbo_2025 | irrelevant | 0 | 0 | The paper investigates heavy metal bioaccumulation in marine sponges and does not contain any data regarding enterotoxin type a. |
| popPK | Christodoulou_2025 | irrelevant | 0 | 0 | The paper describes a DNA barcode reference library for marine macrobenthos and contains no toxicokinetic data for enterotoxin_type_a. |
| PGx | Chumnumwat_2019 | not_relevant | 0 | 0 | The paper is a review of the SEAPharm network and does not report any specific pharmacogenomic effects on PK/PD parameters for enterotoxin_type_a. |
| PGx | Clark_2021 | not_relevant | 0 | 0 | The paper is an ecological study on clownfish adaptation and does not involve pharmacogenomics or the drug enterotoxin_type_a. |
| PGx | Coates_2023 | not_relevant | 0 | 0 | The paper concerns the evolutionary dynamics of salmon lice resistance to pest control and does not involve human pharmacogenomics, specific drug PK/PD parameters, or enterotoxin type A. |
| PGx | Crespo_2016 | not_relevant | 0 | 0 | The paper studies biomarkers in fish regarding environmental contaminants and does not mention enterotoxin_type_a or any human gene variant/genotype. |
| popPK | DAlessio_1989 | irrelevant | 0 | 0 | The paper describes the structure and expression of a sea urchin collagen gene and does not contain any toxicokinetic parameters for enterotoxin type A. |
| PGx | Dafalla_2020 | not_relevant | 0 | 0 | The paper studies P. falciparum K13 polymorphisms, not the drug 'enterotoxin_type_a'. |
| popPK | Della_2024 | irrelevant | 0 | 0 | The paper focuses on biomonitoring of general pollutants in mussels and does not report any kinetic parameters for enterotoxin type A. |
| PGx | Derbali_2021 | not_relevant | 0 | 0 | The paper studies plant physiology and proteomics in response to salinity, not pharmacogenomics or drug metabolism. |
| popPK | Desvignes_2017 | irrelevant | 0 | 0 | The paper focuses on the toxicokinetics and exposure modeling of polychlorinated biphenyls (PCBs), not enterotoxin_type_a. |
| popPK | Devault_2022 | irrelevant | 0 | 0 | The paper studies the toxicokinetics of arsenic and chlordecone in Sargassum sp. (algae), not enterotoxin_type_a. |
| popPK | Dhaneesh_2012 | irrelevant | 0 | 0 | The paper reports nutritional composition (protein, lipids, vitamins) of fish and contains no toxicokinetic parameters for enterotoxin type A. |
| popPK | Dhiman_2021 | irrelevant | 0 | 0 | The paper is a review on the use of snails as bioindicators for general environmental pollutants and does not mention enterotoxin_type_a or report any kinetic parameters for it. |
| popPK | Dias_2024 | irrelevant | 0 | 0 | The paper is a systematic review on chemical pollution biomarkers in sea turtles and does not report toxicokinetic parameters for enterotoxin type a. |
| popPK | Dolin_2023 | irrelevant | 0 | 0 | The paper describes a bioinformatics pipeline for genomic variant annotation using FHIR standards and contains no toxicokinetic data for enterotoxin_type_a. |
| popPK | Dos_2024 | irrelevant | 0 | 0 | The paper is an epidemiological study of PM2.5 air pollution and health risks, containing no kinetic parameters for enterotoxin_type_a. |
| popPK | El-Sayed_2009 | irrelevant | 0 | 0 | The paper reports acute toxicity data for ochratoxin-A, which is a different substance from enterotoxin type A. |
| popPK | Emch_2008 | irrelevant | 0 | 0 | The paper is an epidemiological study of cholera associations with environmental factors and reports no toxicokinetic parameters for enterotoxin_type_a. |
| popPK | Er-Rajy_2025 | irrelevant | 0 | 0 | The paper studies triazole derivatives as xanthine oxidase inhibitors for gout and does not mention enterotoxin_type_a or report any kinetic parameters for it. |
| popPK | Escobedo_2023 | irrelevant | 0 | 0 | The paper studies inorganic elements in sea turtles and does not report toxicokinetic parameters for enterotoxin_type_a. |
| popPK | Evers_2024 | irrelevant | 0 | 0 | The paper is a review of global mercury (MeHg) concentrations in biota and does not contain any toxicokinetic parameters for enterotoxin type A. |
| popPK | Fahd_2019 | irrelevant | 0 | 0 | The paper focuses on a general biotransformation toxicity model for oil/gas contaminants in fish and does not report specific kinetic parameters for enterotoxin type A. |
| PGx | Fairhurst_2016 | not_relevant | 0 | 0 | The paper discusses antimalarial drug resistance in Plasmodium falciparum, which is unrelated to the pharmacology of enterotoxin_type_a. |
| popPK | Falk_2024 | irrelevant | 0 | 0 | The paper discusses climate change threats to World Heritage Sites and contains no toxicokinetic data for enterotoxin_type_a or any chemical substance. |
| popPK | Fang_2025 | irrelevant | 0 | 0 | The paper investigates the effects of microplastics on phytoplankton and does not contain any toxicokinetic data or parameters for enterotoxin_type_a. |
| PGx | Felkel_2023 | not_relevant | 0 | 0 | The paper analyzes genomic variation in beet species (Beta vulgaris) for crop improvement, not pharmacogenomic effects on a drug. |
| popPK | Foo_2024 | irrelevant | 0 | 0 | The paper assesses heavy metal pollution in coral reefs and does not involve enterotoxin type A or its toxicokinetics. |
| popPK | Gallego_2024 | irrelevant | 0 | 0 | The paper describes environmental DNA metabarcoding of deep-sea sponges for biodiversity monitoring and contains no toxicokinetic parameters for enterotoxin_type_a. |
| popPK | Geyer_1984 | irrelevant | 0 | 0 | The paper reviews PCB concentrations in the marine environment and is unrelated to enterotoxin_type_a toxicokinetics. |
| PGx | Gong_2024 | not_relevant | 0 | 0 | The paper describes the genomics and metabolism of marine Gemmatimonadota bacteria and does not mention enterotoxin_type_a, pharmacokinetics, pharmacodynamics, or pharmacogenomics. |
| popPK | Gosselin_2006 | irrelevant | 0 | 0 | The text is an erratum/acknowledgement regarding the origin of a database for a population study and contains no kinetic parameters for enterotoxin_type_a. |
| PGx | Greenhouse_1971 | not_relevant | 0 | 0 | The paper describes the uptake and RNA synthesis inhibition of actinomycin D in sea urchin embryos and does not involve enterotoxin_type_a or pharmacogenomic analysis. |
| popPK | Guirlet_2008 | irrelevant | 0 | 0 | The paper studies trace elements (Cu, Zn, Se, Cd, Pb, Hg) in leatherback turtles, not enterotoxin type A. |
| PGx | Gustafson_2014 | not_relevant | 0 | 0 | The paper discusses risk factors for infectious salmon anemia (ISA) spread in aquaculture and contains no information regarding human pharmacogenomics or the drug enterotoxin type A. |
| popPK | Gutreuter_2007 | irrelevant | 0 | 0 | The paper focuses on 3-trifluoromethyl-4-nitrophenol and niclosamide in sea lampreys, with no mention of enterotoxin_type_a or its kinetic parameters. |
| popPK | Han_2023 | irrelevant | 0 | 0 | The paper reports PBPK parameters for echinochrome A, a different substance, and does not mention enterotoxin_type_a. |
| popPK | Hartl_2000 | irrelevant | 0 | 0 | The paper reports LC50 toxicity values for fumonisins, not toxicokinetic parameters for enterotoxin_type_a. |
| popPK | Hartwell_2020 | irrelevant | 0 | 0 | The paper reports concentrations of environmental contaminants (PAHs, PCBs, arsenic, etc.) in sediments and fish but does not mention enterotoxin_type_a or report any toxicokinetic parameters for it. |
| popPK | Hatfield_2011 | irrelevant | 0 | 0 | The paper discusses toxicodynamic endpoint modeling (LC99.9) for sea lamprey control and does not report kinetic parameters for enterotoxin_type_a. |
| popPK | Helou_2019 | irrelevant | 0 | 0 | The paper is a review on organochlorine pesticides and PCBs in Lebanon and does not contain any kinetic parameters for enterotoxin type A. |
| popPK | Horsberg_1991 | irrelevant | 0 | 0 | The paper studies the toxicokinetics of diflubenzuron in Atlantic salmon, not enterotoxin_type_a. |
| PGx | Huang_2025 | not_relevant | 0 | 0 | The paper does not concern enterotoxin_type_a but investigates iron metabolism (ERFE, Hepcidin) in pregnant women with thalassemia and iron-deficiency anemia. |
| popPK | Hutton_2024 | irrelevant | 0 | 0 | The paper investigates the toxicological effects of pyrethroids on fish and does not contain any data, models, or parameters for enterotoxin_type_a. |
| PGx | Ioannidis_2016 | not_relevant | 0 | 0 | The paper describes a computational tool for predicting pathogenicity of missense variants and does not report pharmacogenomic effects on PK/PD parameters for enterotoxin_type_a. |
| PGx | Ivy_2026 | not_relevant | 0 | 0 | The paper reviews genetic variation in deer mice related to breathing and hypoxia, not pharmacogenomics or enterotoxin type A. |
| popPK | Jin_2014 | irrelevant | 0 | 0 | The paper focuses on fishing vessel accident severity and does not contain any toxicokinetic data or parameters for enterotoxin_type_a. |
| popPK | Kardailsky_2025 | irrelevant | 0 | 0 | The paper focuses on environmental DNA (eDNA) and CRISPR-Cas methods for biodiversity monitoring and does not contain any toxicokinetic data for enterotoxin type A. |
| PGx | Khan_2017 | not_relevant | 0 | 0 | The paper studies lipid transport in salmon lice, not pharmacogenomics for enterotoxin_type_a. |
| popPK | Khang_2018 | irrelevant | 0 | 0 | The paper focuses on the genetic evaluation of Asian seabass growth and survival traits and does not report any toxicokinetic parameters for enterotoxin_type_a. |
| popPK | King_2023 | irrelevant | 0 | 0 | The paper investigates polycyclic aromatic compounds (PACs) and trace metals in mussels, not enterotoxin_type_a. |
| PGx | Kinota_2023 | not_relevant | 0 | 0 | The paper studies genetic variants of PPARA related to high-altitude hypoxia adaptation, which is unrelated to the pharmacokinetics or pharmacodynamics of enterotoxin_type_a. |
| popPK | Koraag_2026 | irrelevant | 0 | 0 | The study investigates the dose-response relationship between Schistosoma japonicum infection intensity (egg count) and clinical outcomes/antibody response, which is an epidemiological study and does not report toxicokinetic parameters for a chemical substance like enterotoxin_type_a. |
| popPK | Koziol_2019 | irrelevant | 0 | 0 | The paper focuses on environmental DNA metabarcoding methodology and does not contain any toxicokinetic parameters for enterotoxin_type_a. |
| PGx | Kremp_2016 | not_relevant | 0 | 0 | The paper studies genetic variation in the dinoflagellate Alexandrium ostenfeldii (a toxin producer) and environmental adaptation, not the pharmacogenomic effects of human gene variants on the pharmacokinetics or pharmacodynamics of enterotoxin type A. |
| popPK | Kuprijanov_2024 | irrelevant | 0 | 0 | The paper investigates PAHs, PBDEs, and microlitter in mussels, and does not mention or provide kinetic parameters for enterotoxin_type_a. |
| PGx | Kümmel_2016 | not_relevant | 0 | 0 | The paper tracks the contamination of the dairy chain by Staphylococcus aureus and does not report on pharmacogenomic effects on pharmacokinetics or pharmacodynamics. |
| popPK | La_2024 | irrelevant | 0 | 0 | The paper studies methylmercury and bacterial infection in sea anemones, with no mention or data for enterotoxin type A. |
| popPK | Lam_2012 | irrelevant | 0 | 0 | The paper is an economic analysis of business recovery in New Orleans after Hurricane Katrina and contains no data or parameters related to enterotoxin_type_a. |
| popPK | Lemesle_2024 | irrelevant | 0 | 0 | The paper reports mercury concentrations in seabirds and does not contain any toxicokinetic parameters for enterotoxin_type_a. |
| popPK | Li_2022 | irrelevant | 0 | 0 | The paper studies sea cucumber-derived sulfated sterols, not enterotoxin_type_a. |
| PGx | Li_2025 | not_relevant | 0 | 0 | The paper studies HLA genetic associations with severe cutaneous adverse drug reactions (SCAR) for co-trimoxazole, not pharmacokinetic or pharmacodynamic parameters for enterotoxin_type_a. |
| popPK | Liao_2017 | irrelevant | 0 | 0 | The paper focuses on synoptic circulation effects on PM2.5 and O3 air quality and health impacts, with no mention or data regarding enterotoxin type A toxicokinetics. |
| popPK | Lindqvist_2022 | irrelevant | 0 | 0 | The paper studies the toxicokinetics of halogenated organic compounds (e.g., PFOS, BDEs) in zebrafish, not enterotoxin_type_a. |
| popPK | Lopes-Santos_2025 | irrelevant | 0 | 0 | The paper studies mercury (Hg) concentrations in cephalopods, not toxicokinetic parameters for enterotoxin_type_a. |
| PGx | Lou_2021 | not_relevant | 0 | 0 | The paper investigates thermal adaptation in mantis shrimp using population genomics and contains no information regarding pharmacogenomics or the drug enterotoxin_type_a. |
| popPK | Lu_2017 | irrelevant | 0 | 0 | The paper studies trace metal pollution in oysters and does not contain any data on enterotoxin type A toxicokinetics. |
| popPK | Lu_2023 | irrelevant | 0 | 0 | The paper focuses on the molecular characterization and transcriptional regulation of the MOV10 gene in sea perch, with no data regarding the toxicokinetics of enterotoxin type A. |
| popPK | Luca_2024 | irrelevant | 0 | 0 | The paper studies decellularized macroalgae for ibuprofen delivery and contains no data on enterotoxin_type_a. |
| popPK | Luo_2024 | irrelevant | 0 | 0 | The paper investigates the epidemiology of dengue fever in relation to environmental variables and does not report any toxicokinetic parameters for enterotoxin type A. |
| PGx | Lyu_2017 | not_relevant | 0 | 0 | The paper describes a molecular biology assay for identifying dinoflagellate species and does not discuss pharmacogenomics, PK, or PD for the drug in question. |
| PGx | López-Cortés_2018 | not_relevant | 0 | 0 | The paper investigates genetic risk for breast cancer and does not study the pharmacokinetics or pharmacodynamics of enterotoxin_type_a. |
| popPK | Malea_2015 | irrelevant | 0 | 0 | The paper studies trace element concentrations in macroalgae and does not contain any data on enterotoxin_type_a. |
| PGx | Marjani_2018 | not_relevant | 0 | 0 | The paper reports allele frequencies in a population, but does not report any pharmacokinetic or pharmacodynamic parameter or effect size for enterotoxin_type_a. |
| PGx | Marques-Santos_2017 | not_relevant | 0 | 0 | The paper studies ABC transporter activity in marine invertebrate immune cells and does not involve human pharmacogenomics or enterotoxin_type_a. |
| popPK | Marrone_2021 | irrelevant | 0 | 0 | The paper investigates metal contamination and metallothionein expression in Antarctic fish, containing no data regarding enterotoxin_type_a. |
| popPK | Marshall_1983 | irrelevant | 0 | 0 | The paper characterizes hypoxic pulmonary vasoconstriction in rats and does not report any toxicokinetic parameters for enterotoxin_type_a. |
| popPK | Martino_2025 | irrelevant | 0 | 0 | The paper focuses on phthalic acid esters (PAEs) in sea urchins and contains no data for enterotoxin_type_a. |
| popPK | Martínez-Gómez_2012 | irrelevant | 0 | 0 | The paper reports biomarker responses and contaminant concentrations in fish, not toxicokinetic parameters for enterotoxin_type_a. |
| popPK | Marín_2018 | irrelevant | 0 | 0 | The paper is a review on standardizing bioassay protocols for sea lice exposure to chemotherapeutants and contains no toxicokinetic parameters or data for enterotoxin_type_a. |
| popPK | Maté-Sánchez-Val_2023 | irrelevant | 0 | 0 | The paper is an economic analysis of the impact of coastal water quality on business failure and contains no toxicokinetic parameters or data for enterotoxin_type_a. |
| PGx | Melis_2002 | not_relevant | 0 | 0 | The paper reports population genetics frequencies of HFE mutations for hereditary hemochromatosis, unrelated to enterotoxin_type_a pharmacology. |
| PGx | Messmer_2018 | not_relevant | 0 | 0 | The paper studies the pharmacodynamics of emamectin benzoate in sea lice (parasites), not a pharmacogenomic effect on a human PK/PD parameter for enterotoxin_type_a. |
| popPK | Miniero_2025 | irrelevant | 0 | 0 | The paper focuses on the toxicity of per- and polyfluoroalkyl substances (PFAS) in loggerhead turtles and does not mention or study enterotoxin_type_a. |
| popPK | Miyake_2011 | irrelevant | 0 | 0 | The paper is an epidemiological study on maternal diet and childhood allergic outcomes, containing no toxicokinetic parameters for enterotoxin_type_a. |
| PGx | Morcillo_2018 | not_relevant | 0 | 0 | The paper discusses metal detoxification in fish and is unrelated to human pharmacogenomics or enterotoxin type A. |
| popPK | Moreira_2016 | irrelevant | 0 | 0 | The paper is an environmental study on trace elements in tree bark and does not report any kinetic parameters for enterotoxin type a. |
| popPK | Mugglestone_2001 | irrelevant | 0 | 0 | The paper evaluates microbiological water quality standards and dose-response models for bathing risks, containing no toxicokinetic parameters for enterotoxin type a. |
| popPK | Muñoz_2018 | irrelevant | 0 | 0 | The paper analyzes environmental contaminants (PAHs, OCPs, PCBs) in sea turtle eggs and does not report any toxicokinetic parameters for enterotoxin_type_a. |
| popPK | Muñoz_2021 | irrelevant | 0 | 0 | The paper focuses on the distribution of persistent organic pollutants (POPs) in sea turtles and does not contain data for enterotoxin_type_a. |
| popPK | Mwase_2020 | irrelevant | 0 | 0 | The paper investigates the health impacts of air pollution (PM2.5) from shipping in Sweden and does not contain any toxicokinetic parameters for enterotoxin_type_a. |
| popPK | Nepstad_2023 | irrelevant | 0 | 0 | The paper focuses on produced water discharges and haddock, with no mention or kinetic parameters for enterotoxin type a. |
| PGx | Ocan_2019 | not_relevant | 0 | 0 | The paper discusses pharmacogenomics of artemisinin resistance in Plasmodium falciparum, not the drug enterotoxin_type_a. |
| PGx | Ordoñez_2021 | not_relevant | 0 | 0 | The paper analyzes the transcriptome of sandfish (Holothuria scabra) to understand growth variation and is not related to pharmacogenomics or enterotoxin_type_a. |
| PGx | Ota_2026 | not_relevant | 0 | 0 | The paper concerns tetrodotoxin in pufferfish, not a pharmacogenomic effect on a drug's PK/PD parameters. |
| popPK | Panseri_2026 | irrelevant | 0 | 0 | The paper investigates inorganic contaminants (heavy metals) in fish and does not mention enterotoxin_type_a or report any toxicokinetic parameters for it. |
| PGx | Perelló-Amorós_2018 | not_relevant | 0 | 0 | The paper studies ghrelin regulation in gilthead sea bream and does not mention enterotoxin_type_a or pharmacogenomic effects on PK/PD parameters. |
| PGx | Pespeni_2013 | not_relevant | 0 | 0 | The paper studies evolutionary adaptation to pH in purple sea urchins and contains no information regarding the drug enterotoxin_type_a or pharmacogenomics. |
| PGx | Petruzziello_2019 | not_relevant | 0 | 0 | The paper describes the epidemiological prevalence of Hepatitis C virus genotypes in Europe and is unrelated to enterotoxin_type_a or its pharmacokinetics/pharmacodynamics. |
| PGx | Phanthong_2025 | not_relevant | 0 | 0 | The paper focuses on the diagnostic accuracy of red blood cell parameters for thalassemia screening and does not report pharmacokinetic or pharmacodynamic parameters for a specific drug. |
| popPK | Pinsino_2011 | irrelevant | 0 | 0 | The study focuses on heavy metal exposure (copper, lead, nickel) in sea urchins and does not involve enterotoxin_type_a or report any kinetic parameters for it. |
| popPK | Polcwiartek_2025 | irrelevant | 0 | 0 | The paper reports partition coefficients for polycyclic aromatic hydrocarbons (PAHs), not for enterotoxin type A. |
| popPK | Polt_2023 | irrelevant | 0 | 0 | The paper studies microplastic abundance in marine invertebrates and fish, containing no data on enterotoxin_type_a. |
| PGx | Puckhaber_2018 | not_relevant | 0 | 0 | The paper investigates plant genetic resistance to a fungal pathogen and the production of phytoalexins, which is unrelated to human pharmacogenomics or the pharmacokinetics of enterotoxin type A. |
| popPK | Reboa_2022 | irrelevant | 0 | 0 | The paper investigates microplastic pollution in fish and does not contain any toxicokinetic parameters for enterotoxin_type_a. |
| popPK | Ren_2026 | irrelevant | 0 | 0 | The paper is a clinical trial on anticoagulants (rivaroxaban, LMWH, fondaparinux) for DVT prevention and does not contain any toxicokinetic parameters for enterotoxin_type_a. |
| popPK | Renegar_2022 | irrelevant | 0 | 0 | The paper studies the toxicity of hydrocarbons (1-methylnaphthalene and crude oil) in crustaceans, not the toxicokinetics of enterotoxin_type_a. |
| popPK | Riedel_2025 | irrelevant | 0 | 0 | The paper studies rare earth elements in marine organisms and contains no data on enterotoxin_type_a. |
| popPK | Ringuette_1991 | irrelevant | 0 | 0 | The paper investigates the expression and evolution of the protein SPARC (osteonectin) in various vertebrates and contains no data regarding enterotoxin_type_a or its toxicokinetics. |
| PGx | Rong_2020 | not_relevant | 0 | 0 | The paper analyzes molecular characteristics and clinical data of gastric cancer patients to predict drug responses in cancer cells, but it does not report pharmacokinetic or pharmacodynamic parameters for 'enterotoxin_type_a'. |
| popPK | Rubin-Blum_2022 | irrelevant | 0 | 0 | The paper investigates marine sediment microbial ecology and contains no data on enterotoxin type A toxicokinetics. |
| PGx | Rubin-Blum_2024 | not_relevant | 0 | 0 | The paper is a metagenomics study on deep-sea microbial communities and does not report pharmacogenomics or drug kinetics. |
| popPK | Ryan_1997 | irrelevant | 0 | 0 | The paper reports exposure and body burden levels of dioxin-like compounds (PCBs/PCDDs) in humans, not kinetic parameters for enterotoxin_type_a. |
| popPK | Sahu_2024 | irrelevant | 0 | 0 | The paper studies nutrient dynamics (nitrogen/phosphorus) in a creek-estuary ecosystem and does not mention or measure enterotoxin_type_a. |
| popPK | Salcedo_2024 | irrelevant | 0 | 0 | The paper reports tissue concentrations of trace elements and POPs (PCBs/OCPs) in grey seals, but does not study enterotoxin_type_a or report any kinetic parameters for it. |
| PGx | Schnitzler_2019 | not_relevant | 0 | 0 | The paper discusses PCB pollution effects on killer whales and does not report any pharmacogenomic effects on a PK or PD parameter of enterotoxin type A. |
| popPK | Schroeder_2020 | irrelevant | 0 | 0 | The paper focuses on zooplankton biodiversity assessment using DNA metabarcoding and does not report any toxicokinetic parameters for enterotoxin_type_a. |
| popPK | Schubert_2016 | irrelevant | 0 | 0 | The paper analyzes Persistent Organic Pollutants (POPs) in Baltic herring and does not mention or measure enterotoxin type A. |
| popPK | Semenza_2017 | irrelevant | 0 | 0 | The paper is an epidemiological and environmental modeling study on Vibrio infections relative to sea surface temperature and contains no toxicokinetic parameters for enterotoxin_type_a. |
| popPK | Sigsgaard_2026 | irrelevant | 0 | 0 | The paper studies coastal biodiversity via eDNA and contains no toxicokinetic data for enterotoxin_type_a. |
| PGx | Sivadas_2017 | not_relevant | 0 | 0 | The paper describes a pharmacogenomic variant map for a population but does not report specific effects on PK/PD parameters for enterotoxin_type_a or any specific drug. |
| PGx | Soree_2016 | not_relevant | 0 | 0 | The paper studies HIF1α levels and hemodynamics in high altitude pulmonary edema, which is unrelated to the pharmacokinetics or pharmacodynamics of the drug enterotoxin_type_a. |
| popPK | Spektor_1991 | irrelevant | 0 | 0 | The paper is an epidemiological study on the effects of industrial air pollution on respiratory function in children and does not contain any toxicokinetic parameters for enterotoxin type A. |
| popPK | Srut_2010 | irrelevant | 0 | 0 | The paper reports genotoxicity (DNA damage) in fish exposed to environmental pollution, but does not study enterotoxin_type_a or provide any toxicokinetic parameters. |
| PGx | Stalin_2017 | not_relevant | 0 | 0 | The paper discusses phage therapy for Vibrio harveyi and does not involve enterotoxin_type_a or pharmacogenomics. |
| popPK | Sánchez_2022 | irrelevant | 0 | 0 | The paper is a review on dietary microplastics and does not report any toxicokinetic parameters for enterotoxin_type_a. |
| PGx | Teramitsu_2000 | not_relevant | 0 | 0 | The paper reports the identification and phylogeny of CYP1A genes in marine mammals, not a pharmacogenomic study on the drug enterotoxin_type_a. |
| popPK | Tian_2021 | irrelevant | 0 | 0 | The paper investigates trace elements (metals) in porpoises and does not study enterotoxin_type_a or its kinetic parameters. |
| popPK | Tian_2022 | irrelevant | 0 | 0 | The paper investigates trace elements in marine mammals and does not contain any kinetic data for enterotoxin type a. |
| popPK | Tjeerdema_1994 | irrelevant | 0 | 0 | The paper reports toxicokinetic parameters for pentachlorophenol, not enterotoxin_type_a. |
| popPK | Tlili_2016 | irrelevant | 0 | 0 | The paper reports kinetic parameters for nickel in a copepod, not for enterotoxin_type_a. |
| popPK | Tong_2024 | irrelevant | 0 | 0 | The paper is a public health umbrella review on climate change in Australia and contains no kinetic parameters for enterotoxin_type_a. |
| PGx | Tsai_2017 | not_relevant | 0 | 0 | The paper focuses on genotype imputation for genomic selection in Atlantic salmon regarding lice resistance and body weight, and does not report pharmacokinetic or pharmacodynamic parameters for enterotoxin_type_a. |
| popPK | Tuomisto_2020 | irrelevant | 0 | 0 | The paper focuses on dioxins and methylmercury in fish and does not contain any kinetic parameters for enterotoxin_type_a. |
| popPK | Valente_2025 | irrelevant | 0 | 0 | The paper concerns microplastic ingestion by marine fish and does not contain any kinetic parameters for enterotoxin type A. |
| PGx | Vannuccini_2024 | not_relevant | 0 | 0 | The paper investigates environmental toxicology in fish, not pharmacogenomics of a drug (enterotoxin_type_a). |
| popPK | Wallin_2004 | irrelevant | 0 | 0 | The paper is an epidemiological study on organochlorine compounds and fracture incidence, with no mention of enterotoxin type A or its kinetic parameters. |
| PGx | Wan_2024 | not_relevant | 0 | 0 | The paper studies thalassemia and HbA1c detection, not pharmacogenomics for enterotoxin_type_a. |
| popPK | Watanabe_1990 | irrelevant | 0 | 0 | The paper studies the tissue distribution of aquacobalamin reductase activity (Vitamin B12 metabolism) and contains no kinetic parameters for enterotoxin type A. |
| PGx | Wei_2025 | not_relevant | 0 | 0 | The paper reports on thalassemia genetic screening and diagnostic methods in newborns, containing no information regarding the pharmacokinetic or pharmacodynamic effects of enterotoxin_type_a. |
| popPK | Westcott_2008 | irrelevant | 0 | 0 | The paper focuses on the toxicity of emamectin benzoate on sea lice and does not mention enterotoxin_type_a. |
| popPK | Xie_2023 | irrelevant | 0 | 0 | The paper focuses on PFASs in marine organisms and does not mention or report any kinetic parameters for enterotoxin_type_a. |
| PGx | Xue_2024 | not_relevant | 0 | 0 | The paper investigates the mechanism of liver fibrosis in schistosomiasis involving bilirubin metabolism and UGT1A1, but it does not report a pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of enterotoxin type A. |
| popPK | Yaghmour_2024 | irrelevant | 0 | 0 | The paper reports tissue concentrations of polycyclic aromatic hydrocarbons and organochlorine pesticides in sea snakes, not kinetic parameters for enterotoxin_type_a. |
| PGx | Yan_2024 | not_relevant | 0 | 0 | The paper focuses on screening for thalassemia in a general population and does not report pharmacokinetic or pharmacodynamic parameters for the drug enterotoxin_type_a. |
| PGx | Yang_2022 | not_relevant | 0 | 0 | The paper analyzes the transcriptional regulation of rhizome development in grass (Poa pratensis) and has no connection to pharmacogenomics or the pharmacokinetics/pharmacodynamics of enterotoxin_type_a. |
| PGx | Yu_2025 | not_relevant | 0 | 0 | The study focuses on hypoxia adaptation in Tibetan sheep and does not report any pharmacogenomic effect on the PK or PD of enterotoxin_type_a. |
| PGx | Zamer_1989 | not_relevant | 0 | 0 | The paper discusses the metabolic effects of glucose-6-phosphate isomerase alleles in sea anemones, not the pharmacokinetics or pharmacodynamics of the drug enterotoxin_type_a. |
| popPK | Zamoum_2012 | irrelevant | 0 | 0 | The paper describes a method for isolating zooxanthellae from cnidarians and does not contain any data regarding the toxicokinetics of enterotoxin type A. |
| popPK | Zhan_2019 | irrelevant | 0 | 0 | The paper measures concentrations of persistent organic pollutants (POPs) in tissues, not kinetic parameters for enterotoxin type A. |
| PGx | Zhang_2022 | not_relevant | 0 | 0 | The study focuses on sildenafil, not enterotoxin_type_a, and investigates environmental (hypoxia) rather than genetic variation effects on PK parameters. |
| PGx | Zhang_2025 | not_relevant | 0 | 0 | The paper focuses on predicting the pathogenicity of mutations in allosteric proteins and does not discuss pharmacogenomics or the effects of gene variants on the PK/PD of enterotoxin type A. |
| PGx | Zhang_2025_2 | not_relevant | 0 | 0 | The paper analyzes thalassemia gene variants and hematology parameters in children, unrelated to the pharmacokinetics or pharmacodynamics of enterotoxin_type_a. |
| popPK | Zhao_2021 | irrelevant | 0 | 0 | The paper describes phytosanitary disinfestation methods (irradiation and modified atmosphere) for the khapra beetle and does not report any toxicokinetic parameters for enterotoxin type A. |
| popPK | Zhao_2021_2 | irrelevant | 0 | 0 | The paper is a quantitative risk assessment (QRA) focusing on exposure and dose-response modeling for Norovirus in shellfish, and contains no toxicokinetic parameters (such as half-life, clearance, or partition coefficients) for enterotoxin_type_a or any other substance. |
| popPK | Zhong_2022 | irrelevant | 0 | 0 | The paper is an ecological study on fish biodiversity using eDNA and does not report any toxicokinetic parameters for enterotoxin_type_a. |
| PGx | Zhou_2022 | not_relevant | 0 | 0 | The paper analyzes thalassemia genotypes and hematological indices for screening purposes, reporting no pharmacokinetic or pharmacodynamic effects of any drug (including enterotoxin_type_a). |
| PGx | Zhou_2026 | not_relevant | 0 | 0 | The paper discusses the genetic diagnosis of thalassemia using sequencing methods and is not a pharmacogenomic study on a drug's pharmacokinetic or pharmacodynamic parameters. |
| popPK | Zhu_2020 | irrelevant | 0 | 0 | The study focuses on the toxicokinetics of seven antibiotics (e.g., sulfadiazine, ofloxacin) in sea cucumbers and contains no data for enterotoxin_type_a. |
| popPK | Zitouni_2021 | irrelevant | 0 | 0 | The study focuses on microplastics in sea bass and does not mention or provide kinetic parameters for enterotoxin_type_a. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Benterotoxin_type_a%5D&body=Drug%3A%20enterotoxin_type_a%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_enterotoxin_type_a/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-11 17:44 UTC</sub>
