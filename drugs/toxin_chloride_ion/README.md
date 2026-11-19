<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Chloride ion&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;ChlorideIon_Adachi2021_reference&quot;,&quot;label&quot;:&quot;Adachi_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_chloride_ion/ChlorideIon_Adachi2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# Chloride ion

- **generic name:** Chloride ion
- **T3DB:** [T3D0091](http://www.t3db.ca/toxins/T3D0091) · **PubChem:** [CID 24526](https://pubchem.ncbi.nlm.nih.gov/compound/24526)
- **groups:** investigational

## About

In nature, chlorine is most abundant as a chloride ion. Physiologically, it exists as an ion in the body. The chloride ion is an essential anion that the body needs for many critical functions. …

- **Category:** Household Toxin, Industrial/Workplace Toxin, Pollutant, Airborne Pollutant, Food Toxin, Natural Toxin
- **Route of exposure:** inhalation, dermal
- **Sources and uses:** Chloride is found in table salt as well as most foods. Chloride is an essential element or micronutrient and helps keep the body’s electrolyte balance.
- **Mechanism of toxicity:** Chloride imbalances can lead to electrolyte and pH imbalances. Excessive chloride in the blood is known as hyperchloremia. …
- **Health effects:** The oral ingestion of larger quantities of sodium chloride, eg 1000 g in 600 mL of water, is harmful and can induce irritation of the gastrointestinal tract, vomiting, hypernatremia, respiratory distress, convulsions, and death. Hyperchloremia can also occur due to loss of body fluids from prolonged vomiting, sweating or fever, kidney failure, kidney disorders or diabetes. …
- **Lethal dose:** Estimated fatal dose of sodium chloride and other chloride salts is approximately 0.75 to 3.00 g/kg
- **Carcinogenicity:** No indication of carcinogenicity (not listed by IARC).
- **Treatment:** As with most types of electrolyte imbalance, the treatment of high blood chloride levels is based on correcting the underlying cause. …
- **Detected in:** blood, cerebrospinal fluid, saliva, urine

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D0091">T3DB T3D0091</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 22537-115-1 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:29310">ChEBI 29310</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| chloride_ion | metabolite | 70.9 | Cl2 | PubChem | [24526](https://pubchem.ncbi.nlm.nih.gov/compound/24526) | Smith_2005 |

## Start here

> **Adachi_2021_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> review reference. [Run it in the simulator](drugs/toxin_chloride_ion/ChlorideIon_Adachi2021_reference.md?tab=Simulation) · [record](drugs/toxin_chloride_ion/ChlorideIon_Adachi2021_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: unreported model parameter default(s): F</sub> | [Adachi_2021_reference](drugs/toxin_chloride_ion/ChlorideIon_Adachi2021_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Adachi K et al., Pharmacokinetics of caffeine self-admin…, Journal of pharmaceutical h… (2021) | [10.1186/s40780-021-00220-z](https://doi.org/10.1186/s40780-021-00220-z) |
| <span class="pk-rf" hidden data-species="cattle" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Smith_2005_reference](drugs/toxin_chloride_ion/ChlorideIon_Smith2005_reference.md) | — | 1-compartment (no model) | 0 | Smith DJ et al., Tissue distribution, elimination, and m…, Journal of agricultural and… (2005) | [10.1021/jf047938m](https://doi.org/10.1021/jf047938m) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">in vitro</span> | **CFTR** | `Q321` · EC50 | target | [Bacalhau_2023](drugs/toxin_chloride_ion/pgx_Bacalhau_2023_CFTR_Q321.md) | Bacalhau M et al., Additive Potentiation of R334W-CFTR Fun…, Journal of personalized med… (2023) | [10.3390/jpm13010102](https://doi.org/10.3390/jpm13010102) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CFTR** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Middleton_2019](drugs/toxin_chloride_ion/pgx_Middleton_2019_CFTR_Q100.md) | Middleton PG et al., Elexacaftor-Tezacaftor-Ivacaftor for Cy…, The New England journal of… (2019) | [10.1056/NEJMoa1908639](https://doi.org/10.1056/NEJMoa1908639) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=chloride_ion).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CFTR (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-15 06:02 | 55:20 | 1/1/0 | 0/0/0 | 0/0/2 | 1,877,408/101,836 | ollama / glm-5.3-flash | 102 | 4/87 | 102/0 | 0 |

## Coverage

- **PubMed hits:** 4652 matched, 271 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Smith_2005.pdf` | Smith DJ et al., Tissue distribution, elimination, and m…, Journal of agricultural and… (2005) | popPK | 7 | [10.1021/jf047938m](https://doi.org/10.1021/jf047938m) | [15884871](https://pubmed.ncbi.nlm.nih.gov/15884871) | Reports absorption, excretion routes, and tissue residue percentages for radiolabeled chloride (as metabolite of chlorate) in cattle, though some values are percentages rather than classical kinetic constants. |
| `Utell_1983.pdf` | Utell MJ et al., Airway responses to sulfate and sulfuri…, The American review of resp… (1983) | popPK | 5 | [10.1164/arrd.1983.128.3.444](https://doi.org/10.1164/arrd.1983.128.3.444) | [6614638](https://pubmed.ncbi.nlm.nih.gov/6614638) | NaCl is a control aerosol, but the paper reports a human deposition/retention value (54-65% retention of inhaled aerosol) that includes NaCl, a kinetic (uptake/retention) parameter present in the evidence. |

<sub>queue written 2026-11-15 05:46 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abbasi_2023 | irrelevant | 0 | 0 | Paper is about synthetic morpholine sulfonamide tyrosinase inhibitors, not toxicokinetics of the chloride ion; no kinetic parameters for chloride ion are reported. |
| popPK | Adachi_2021 | irrelevant | 0 | 0 | All kinetic parameters (half-life 27 h, PBPK clearances, partition ratios) are for caffeine and its metabolite paraxanthine; chloride ion appears only as potassium chloride infusion fluid, not as a studied substance. |
| popPK | Ahmed_2022 | irrelevant | 0 | 0 | Chloride appears only as part of copper chloride used for Cu exposure; no toxicokinetic parameters for chloride ion are reported, only LC50 values for copper. |
| popPK | Al-Sid-Cheikh_2019 | irrelevant | 0 | 0 | The paper is about silver nanoparticles/dissolved silver in fish; chloride appears only as a precipitation product of silver, with no kinetic parameters for the chloride ion itself. |
| popPK | Albanell-Fernández_2025 | irrelevant | 0 | 0 | The paper reports population PK parameters only for vancomycin, gentamicin, and amikacin in neonates; chloride ion appears only as an electrolyte/analyte context (e.g., serum creatinine, chloride as a co-formula) and no kinetic parameters are reported for chloride ion as the subject substance. |
| popPK | Altinok_2026 | irrelevant | 0 | 0 | This systematic review of antimicrobial resistance on plastic biofilms contains no toxicokinetic parameters for the chloride ion; PVC is a polymer substrate, not the substance of interest. |
| popPK | Andersen_1995 | irrelevant | 0 | 0 | A general review of PBPK modeling (focused on methylene chloride) with no kinetic parameters for chloride ion itself and no numeric values present. |
| popPK | Araújo_2020 | irrelevant | 0 | 0 | This is an in vitro fungal osmotolerance study of KCl with no toxicokinetic parameters for chloride ion as a substance. |
| PGx | Asins_2023 | not_relevant | 0 | 3 | Chloride ion is an endogenous nutrient, not a drug; the paper reports plant QTL associations with leaf Cl− concentration, not pharmacogenomic effects on drug PK/PD parameters. |
| PGx | Baker_1995 | not_relevant | 2 | 3 | Study describes isoflurane interactions with CDE metabolism via CYP2B6 activity differences, not genetic variants altering PK/PD of chloride ion. |
| PGx | Bansal_2021 | not_relevant | 1 | 1 | Chloride appears only as CdCl2 doses; no gene variant/genotype effect on a PK/PD parameter of chloride ion is reported—this is a plant toxicology study, not pharmacogenomics. |
| popPK | Barzel_2026 | irrelevant | 0 | 0 | The paper reports popPK/PD models of therapeutic enzymes (imiglucerase, avalglucosidase alfa, vestronidase alfa, arylsulfatase A) in lysosomal storage diseases; chloride ion never appears as the subject substance. |
| popPK | Bencivenga_2020 | irrelevant | 0 | 0 | The paper concerns injection volumes of saline (0.9% NaCl) as an injectate/vehicle in guinea pigs, with no kinetic parameters (half-life, rate constants, partition coefficients, etc.) for chloride ion. |
| popPK | Benny_2022 | irrelevant | 0 | 0 | Chloride ion appears only as CaCl₂ reagent in an Agrobacterium transformation protocol; no toxicokinetic parameters of chloride exist. |
| PGx | Bergeron_2019 | not_relevant | 2 | 0 | Review of CF pathophysiology discussing CFTR variants affecting chloride transport physiologically, not drug PK/PD parameters. |
| popPK | Bernal_2020 | irrelevant | 0 | 0 | This is a mosquito-larva toxicity/synergy study of glyphosate and bacteria; chloride ion appears only as "chloride-free water" (a vehicle condition), with no toxicokinetic parameters for chloride ion. |
| popPK | Bi_2013 | irrelevant | 0 | 0 | Review of ClC-2 chloride channels; no toxicokinetic parameters (half-lives, rates, partition coefficients, clearances) for the chloride ion itself, only channel biophysics. |
| popPK | Bianchi_2001 | irrelevant | 0 | 0 | Molecular cloning/expression study of a chloride channel gene with no toxicokinetic parameters for chloride ion. |
| popPK | Bjørklund_2017 | irrelevant | 1 | 2 | This is a review of mercury toxicokinetics; chloride appears only as a chemical form (HgCl2) of mercury, with no kinetic parameters for chloride ion itself and no numeric values in the evidence. |
| PGx | Blaustein_1991 | not_relevant | 1 | 1 | Discusses hereditary sodium/chloride handling in hypertension pathogenesis, not a drug pharmacogenomic PK/PD effect for chloride ion. |
| popPK | Boone_2025 | irrelevant | 0 | 0 | The paper's substance is vinyl chloride (with PBPK blood levels), not chloride ion; chloride appears only as part of the chemical name/surrogate VOC context, with no toxicokinetic parameters for chloride_ion. |
| PGx | Bos_2006 | not_relevant | 3 | 1 | Mentions GST polymorphism in methylene chloride metabolism (affecting COHb), but no quantitative PGx-PK/PD effect for chloride ion is reported or extractable. |
| popPK | Bove_2014 | irrelevant | 0 | 0 | This is an epidemiological mortality cohort study of solvent-contaminated drinking water (TCE, PCE, vinyl chloride, benzene); "chloride" appears only in "vinyl chloride" as an MCL reference, with no kinetic parameter for chloride ion. |
| popPK | Bove_2014_2 | irrelevant | 0 | 0 | This is an epidemiological mortality cohort study of TCE/PCE/vinyl chloride/benzene in drinking water with no toxicokinetic parameters for chloride ion; chloride ion does not appear as a study substance at all. |
| PGx | Boyarko_2023 | not_relevant | 2 | 3 | Review of bumetanide for AD; no gene variant effect on chloride-ion PK/PD parameters quantified; APOE4 is disease stratification, not a pharmacogenomic effect on bumetanide handling or chloride response. |
| PGx | Brewington_2018 | not_relevant | 3 | 2 | Study correlates CFTR genotype-driven activity in epithelial cultures with sweat chloride, not a PK parameter or drug PD effect of chloride ion therapy. |
| popPK | Briki_2026 | irrelevant | 0 | 0 | The paper reports population PK parameters (CL, Vmax, Km) for 5-fluorouracil, not for chloride ion as the subject substance. |
| PGx | Brown_2022 | not_relevant | 0 | 0 | Review abstract about antihypertensive target polymorphisms generally; no PK/PD parameter for chloride_ion reported. |
| popPK | Calderin_2026 | irrelevant | 0 | 0 | The paper reports population PK parameters for sorfequiline and metabolite M3, not chloride ion; numeric values are plentiful but belong to a different substance. |
| popPK | Caldwell_1989 | irrelevant | 0 | 0 | Chloride appears only as part of the drug name mivacurium chloride; no toxicokinetic parameters for the chloride ion are reported. |
| popPK | Carbonaro_2026 | irrelevant | 1 | 1 | Toxicity-concentration meta-analysis for Ceriodaphnia dubia, not toxicokinetic parameters for chloride ion. |
| PGx | Casillas-Espinosa_2025 | not_relevant | 3 | 0 | Abstract mentioning chloride transporter inhibitors; no gene variant effect on chloride ion PK/PD parameters reported. |
| popPK | Chai_2026 | irrelevant | 0 | 0 | The kinetic parameters (CL/F, V/F, PopPK model) all belong to metoprolol, not chloride_ion, which does not appear as a subject substance. |
| popPK | Chen_2023 | irrelevant | 0 | 0 | Chloride appears only as the counter-ion of mercuric chloride (HgCl2); the reported LC50 and biomarker values are for mercury toxicity, with no kinetic parameters for chloride ion. |
| popPK | Chen_2024 | irrelevant | 0 | 0 | This is an epidemiological exposure-outcome study of drinking-water chloride and BMI; chloride is an exposure variable, with no kinetic parameter (half-life, clearance, partition coefficient, PBPK model) reported. |
| popPK | Chouhan_2026 | irrelevant | 0 | 0 | This is a fungal isolation and susceptibility study; sodium chloride is only an antifungal growth-inhibition medium, with no kinetic parameters for chloride ion. |
| popPK | Copes_2004 | irrelevant | 0 | 0 | LD doses for fungal conidia mortality, not toxicokinetic parameters of chloride ion in any species. |
| popPK | Crawford_1991 | irrelevant | 0 | 0 | This is an immunocytochemistry paper on CFTR localization with no quantitative toxicokinetic parameters for chloride ion. |
| popPK | Dai_2025 | irrelevant | 0 | 0 | The paper reports population PK parameters for tigecycline, not chloride ion; chloride appears nowhere as the subject substance. |
| PGx | Degawa_1994 | not_relevant | 0 | 0 | No gene variant/genotype effect on chloride ion PK/PD; study tests metal inhibitors on CYP1A2 in rats. |
| PGx | Degawa_1995 | not_relevant | 0 | 0 | Text contains only GROBID metadata boilerplate with no study content on chloride ion pharmacogenomics. |
| popPK | Dekant_2021 | irrelevant | 2 | 1 | Chloride ion is not the subject; the paper concerns dichloromethane toxicokinetics with no numeric chloride parameters and values are not present. |
| popPK | Di_2007 | irrelevant | 0 | 0 | This is an immunotoxicity study of metal compounds with no toxicokinetic parameters for chloride ion; chloride appears only as part of compound names. |
| popPK | Dixit_2003 | irrelevant | 0 | 0 | A general review of PB-TK methodology; chloride ion (methylene chloride) is only an example, with no chloride_ion kinetic parameters given. |
| PGx | Docea_2017 | not_relevant | 0 | 0 | The paper discusses CYP polymorphisms affecting organochlorine pesticide exposure and disease risk, not any pharmacogenomic effect on chloride ion pharmacokinetics or pharmacodynamics. |
| popPK | Dolezelova_2009 | irrelevant | 2 | 7 | Numeric 96hLC50 and therapeutic index values for sodium chloride (a chloride_ion source) are present and readable, but these are acute toxicity potency endpoints (toxicodynamics), not toxicokinetic parameters such as half-life, clearance, or partition coefficients. |
| popPK | Doleželová_2008 | irrelevant | 0 | 0 | This is an acute toxicity (LC50) study of silver nitrate in fish; chloride appears only as a water-chemistry ligand or physiological ion affected by silver, with no kinetic parameters of chloride itself. |
| PGx | Donaldson_2013 | not_relevant | 0 | 0 | Narrative review of CF therapies with no pharmacogenomic effects on chloride ion PK/PD parameters reported. |
| popPK | Doucette_2017 | irrelevant | 1 | 2 | This is a crop toxicity/growth study of test fire soil; chloride appears only as a measured leaf concentration, with no kinetic parameters, and full values are not provided in the evidence. |
| PGx | Downey_2026 | not_relevant | 0 | 0 |  |
| PGx | Dubbels_1983 | not_relevant | 5 | 4 | Speculative link between pseudocholinesterase variants and benoxinate metabolism; chloride is only a substrate salt, no PGx effect on chloride ion PK/PD reported. |
| popPK | Duclairoir_2003 | irrelevant | 1 | 1 | Chloride ion appears only as part of benzalkonium chloride (a drug in a nanoparticle release study), not as a subject substance with toxicokinetic parameters. |
| PGx | Eichinger_2025 | not_relevant | 0 | 0 | Study on microplastics and rumen microbiome; chloride ion is only a polymer (PVC), not a drug with PK/PD parameters and no pharmacogenomics. |
| popPK | Ekinci_2023 | irrelevant | 0 | 0 | Chloride is only an analytical reagent (stannous chloride reducing agent, NaCl eluent); no kinetic parameters for chloride ion itself. |
| PGx | Elborn_2023 | not_relevant | 0 | 0 | Review of inhaled antibiotics and CFTR modulators; chloride ion transport is CFTR physiology, not a PK/PD parameter of chloride ion as a drug affected by genotype. |
| PGx | Fajac_2023 | not_relevant | 0 | 0 | Review overview of cystic fibrosis with no report of gene variants altering PK or PD parameters of chloride ion as a drug. |
| PGx | Fajac_2024 | not_relevant | 4 | 3 | The review only qualitatively mentions that sweat chloride response to CFTR modulators varies by genotype; no fitted PK/PD effect sizes or quantitative parameters for chloride ion are reported. |
| popPK | Fang_2024 | irrelevant | 0 | 0 | This is an epidemiological exposure-response study of PM2.5 constituent chloride with no toxicokinetic parameters for chloride ion. |
| PGx | Feron_1979 | not_relevant | 0 | 0 | Toxicology study of vinyl chloride in rats; no gene variant or pharmacogenomic effect on chloride ion PK/PD. |
| popPK | Fischer_2016 | irrelevant | 0 | 5 | Chloride ion is only part of the cobalt chloride vehicle compound; the kinetic/ED parameters belong to cobalt sensitization, not chloride disposition. |
| PGx | Fragoso_2024 | not_relevant | 3 | 4 | Sweat chloride is a disease biomarker affected by CFTR genotype-eligibility and drug treatment, not a genotype-dependent change in a PK/PD parameter of chloride ion; no fitted pharmacogenomic effect size is reported. |
| popPK | Fresquet-Molina_2025 | irrelevant | 0 | 0 | The paper reports vancomycin (with creatinine clearance as covariate) PopPK parameters, not chloride ion as subject substance. |
| popPK | Gajda-Meissner_2020 | irrelevant | 1 | 2 | Chloride appears only as part of Cu chloride used as a dissolved-copper control/vehicle; the kinetic parameters belong to copper, and no numeric values for chloride are shown. |
| popPK | Gao_2026 | irrelevant | 0 | 0 | All quantitative PK parameters (CL, Vc, Vp, Q) belong to meropenem in pediatric patients; chloride_ion does not appear as the subject substance anywhere in the evidence. |
| popPK | Garajová_2017 | irrelevant | 0 | 0 | In vitro protein biochemistry studying Hofmeister effects of chloride on lysozyme; no toxicokinetic parameters of chloride in any organism. |
| popPK | Ghazal_2026 | irrelevant | 0 | 0 | The paper models antithymocyte globulin PK, not chloride ion; chloride never appears as a study substance. |
| popPK | Ghosh_2024 | irrelevant | 0 | 0 | The substance is benzalkonium chloride (an unrelated quaternary ammonium surfactant), not chloride ion, and the study reports LC50/biomarker toxicity outcomes with no kinetic parameters for chloride ion. |
| PGx | Goralski_2023 | not_relevant | 4 | 3 | Genotype groups (F/F vs F/MF) are mentioned and included as covariates, but no genotype-stratified effect sizes on sweat chloride or PK parameters are reported in the text. |
| popPK | Goto_2015 | irrelevant | 0 | 0 | Mercuric chloride appears only as an AQP-blocking reagent; no chloride ion toxicokinetic parameters reported. |
| PGx | Gress_2016 | not_relevant | 1 | 2 | Chloride is measured only as a serum biochemistry marker; no gene variant/genotype/phenotype is linked to any PK/PD parameter of chloride ion. |
| PGx | Guay_2003 | not_relevant | 2 | 3 | Pharmacogenomic (CYP2D6/3A4) effects on bioavailability are reported only for tolterodine, not for the chloride-containing agent (trospium chloride); no gene effect on chloride ion PK/PD. |
| popPK | Günal_2021 | irrelevant | 0 | 0 | Chloride appears only as a measured hemolymph electrolyte in a permethrin toxicity study; no chloride ion kinetic parameters of any kind are reported. |
| popPK | Haber_1998 | irrelevant | 0 | 0 | Nickel dose-response (BMD) risk assessment; nickel chloride appears only as a compound studied, with no toxicokinetic parameters for chloride ion. |
| popPK | Hack_2007 | irrelevant | 1 | 1 | The paper's PK parameters concern nickel compounds (nickel chloride as a form of nickel), not chloride ion as the subject substance, and abstract gives no numeric values. |
| PGx | Haefely_1992 | not_relevant | 3 | 2 | Discusses receptor polymorphism theoretically for benzodiazepines, but no gene-variant effect on chloride ion PK/PD is quantified. |
| popPK | Hagmar_1990 | irrelevant | 0 | 0 | Epidemiological cohort study of vinyl chloride exposure with no kinetic parameters for chloride ion. |
| popPK | He_2026 | irrelevant | 0 | 0 | Epidemiological time-series study of PM2.5 chloride as an air-pollution exposure component and PAD hospitalization risk; no toxicokinetic parameters of chloride ion. |
| popPK | Hethey_2021 | irrelevant | 2 | 2 | The PBTK model's subject is aluminium (26Al); chloride (AlChl) appears only as an administered salt form/speciation comparator with parameters like kChl2Mix not numerically reported here (values live in Table 3/supplementary material not fully provided). |
| popPK | Hong_2024 | irrelevant | 0 | 0 | Chloride appears only as sweat chloride concentrations (an efficacy outcome) and in vitro chloride transport EC50, with no toxicokinetic parameters (half-life, clearance, partitioning) for the chloride ion itself. |
| PGx | Hoppe_2025 | not_relevant | 2 | 0 | Trial reports drug effects on sweat chloride and PK in children, but no gene variant/genotype-stratified PK or PD effect for chloride ion is reported. |
| popPK | Hsiao_2022 | irrelevant | 0 | 0 | This is a molecular dynamics study of chloride partitioning in clay (Donnan equilibrium), not an in vivo toxicokinetic study; the partition coefficients are for clay interlayers, not biological tissue/plasma, and many values are in supplementary tables not provided. |
| popPK | Hu_2026 | irrelevant | 0 | 0 | The paper reports PopPK parameters (CL/F, V/F, half-life) for utreloxastat, not chloride ion; chloride does not appear as the subject substance anywhere in the evidence. |
| popPK | Huang_2026 | irrelevant | 0 | 0 | The paper reports population PK parameters (CL, V1, V2, Q) for colistin sulfate/colistin in humans; chloride ion appears only as a chemical entity, not the subject, so no chloride-ion toxicokinetic parameters are reported. |
| PGx | Iafusco_2021 | not_relevant | 2 | 2 | Chloride ion is an endogenous ion/channel substrate, not a drug; the paper describes CFTR genotype effects on insulin secretion and CFRD risk, not PK/PD parameters of chloride as a pharmacologic agent. |
| PGx | Imbrici_2016 | not_relevant | 2 | 3 | Review of ion channelopathies; chloride channel is the drug target, but no gene variant effect on PK/PD parameters of a chloride ion compound is reported and chloride itself is not a drug with PK/PD. |
| popPK | Indra_2022 | irrelevant | 0 | 0 | Chloride ion appears only as a component of choline chloride solvent; the VOC partition coefficients concern toluene and acetaldehyde, not chloride toxicokinetics. |
| PGx | James_2017 | not_relevant | 3 | 2 | Chloride is mentioned only as a cellular factor influencing GSTZ1 inactivation by DCA; the paper reports no gene variant altering a PK/PD parameter of chloride itself. |
| popPK | Jentsch_2008 | irrelevant | 0 | 0 | Review of CLC channel physiology with no quantitative toxicokinetic parameters (half-life, partition coefficients, clearance, etc.) for chloride ion. |
| popPK | Jeong_2022 | irrelevant | 0 | 0 | Chloride ion appears only as "soft-polyvinyl chloride" (material context); all kinetic parameters belong to DiBP/MiBP, not chloride_ion. |
| popPK | Jiang_2026 | irrelevant | 0 | 0 | The paper's kinetic parameters (CL 4.2 L/h, V 75.9 L) belong to voriconazole; chloride_ion appears only as an analytical reagent (EMIT assay details), never as the studied substance. |
| popPK | Johanson_1986 | irrelevant | 0 | 2 | The kinetic parameters (half-time, clearance, Vd) belong to 2-butoxyethanol and its metabolite, not to chloride ion, which appears only as part of an analytical derivatization reagent (pentafluorobenzoyl chloride). |
| popPK | Jomaa_2024 | irrelevant | 2 | 3 | Chloride ion itself is not the subject; chlorides appear only as comparators (REE chloride salts), and kinetic parameters belong to rare earth elements, with numeric values largely not shown. |
| popPK | Jovanović_2026 | irrelevant | 0 | 0 | All numeric parameters (CL/F, V/F, Ka) are for adalimumab, not chloride ion. |
| popPK | Katz_1989 | irrelevant | 0 | 0 | The paper studies doxacurium chloride (a neuromuscular blocking drug), where chloride is merely part of the drug name — no toxicokinetic parameters for chloride ion are present. |
| PGx | Keating_2025 | not_relevant | 6 | 5 | CFTR genotypes stratify enrollment but the paper reports treatment effects on FEV1/safety, not genotype-specific changes in a PK or PD parameter (no sweat chloride results by genotype given) |
| PGx | Khalyfa_2019 | not_relevant | 3 | 2 | Narrative review mentions CYP2C19 polymorphisms may alter phenobarbital levels and chloride channel mechanism, but no chloride-ion PK/PD parameter effect size is reported. |
| popPK | Khoei_2026 | irrelevant | 0 | 10 | All kinetic parameters (CL/F, V/F, KA, ALAG) belong to dolutegravir, not chloride ion. |
| popPK | Klaczek_2024 | irrelevant | 1 | 2 | Chloride appears only as a water-chemistry variable manipulated to probe selenite uptake in Daphnia; no kinetic parameters for chloride itself are reported, and no numeric chloride-related values are given beyond treatment concentrations. |
| popPK | Kong_2025 | irrelevant | 0 | 0 | The paper is a software methods paper on population PK modeling (theophylline dataset); chloride ion is not the studied substance and no chloride kinetic parameters appear. |
| popPK | Kozlovský_1982 | irrelevant | 0 | 0 | Chloride appears only as the counterion of heptacaine chloride; no kinetic parameters for chloride ion are reported. |
| popPK | Krewski_1994 | irrelevant | 0 | 0 | PBPK modeling review of various organic solvents; chloride_ion is not the subject substance and no numeric chloride_ion kinetic parameters appear. |
| popPK | Krishnan_2005 | irrelevant | 0 | 0 | The paper is a review of PBPK methodology listing many chemicals, with no kinetic parameters for chloride ion itself. |
| PGx | Kroes_2026 | not_relevant | 3 | 2 | Review discussing CFTR genotype-dependent modulator responsiveness (FIS as PD biomarker) conceptually, but no fitted pharmacogenomic effect on a drug PK/PD parameter for a specific drug is reported. |
| popPK | Kroese_2015 | irrelevant | 0 | 0 | In vitro reproductive toxicant screening battery; chloride appears only as a counter-ion in test compounds (e.g., tin chloride), with no toxicokinetic parameters for chloride ion itself. |
| popPK | Kumar_2010 | irrelevant | 0 | 0 | Zinc toxicity study on rat brain neurotransmitters; chloride ion is merely a counter-ion in zinc chloride with no kinetic parameters for chloride_ion itself. |
| popPK | Kumar_2022 | irrelevant | 0 | 0 | A review on microplastic health risks with no quantitative kinetic parameters for the chloride ion; chloride only appears as part of the polymer name PVC. |
| popPK | Kwack_2026 | irrelevant | 0 | 10 | The kinetic parameters (Ka, CL, V) are for warfarin, theophylline, and tobramycin, not chloride ion; chloride does not appear at all, and the paper is an LLM automation methods study. |
| PGx | Laemmle_2022 | not_relevant | 1 | 3 | Ammonium chloride is used only as a metabolic ammonia challenge reagent; no gene variant effect on PK/PD of chloride ion is reported. |
| popPK | Landschulz_1985 | irrelevant | 0 | 2 | Chloride appears only as a comparator for iron-chelator octanol/saline partition coefficients; the kinetic parameters concern iron, not chloride ion. |
| popPK | LeBouf_2017 | irrelevant | 0 | 0 | This is an analytical sampling method paper for quaternary ammonium compounds with no kinetic parameters for chloride ion; "chloride" appears only as counterions in compound names. |
| popPK | Lee_2024 | irrelevant | 0 | 0 | The paper reports PK parameters (CL, Vd) for gentamicin, not chloride ion, which does not appear as a subject substance. |
| PGx | Leitch_2018 | not_relevant | 0 | 0 | No gene variant/genotype or pharmacogenomic effect on chloride ion PK/PD parameters is reported. |
| popPK | Lerman_1983 | irrelevant | 0 | 0 | Chloride appears only as a solute (NaCl) altering anesthetic solubility; chloride ion itself is not the subject of any kinetic parameter. |
| PGx | Li_2013 | not_relevant | 2 | 1 | Patent review only mentions pharmacogenetics as future direction, with no specific variant effects on chloride ion PK/PD parameters. |
| popPK | Li_2019 | irrelevant | 0 | 0 | Chloride appears only as dichloromethane/chloroform solvents and reagents in an HSCCC alkaloid separation; no chloride ion kinetic parameters exist. |
| popPK | Li_2024 | irrelevant | 0 | 0 | Epidemiological case-crossover study where chloride is only an ambient PM2.5 exposure co-constituent with no kinetic parameters. |
| popPK | Lin_2024 | irrelevant | 0 | 0 | Chloride ion appears only as normal saline (0.9% NaCl) vehicle/control; all kinetic parameters (EC50) belong to remifentanil, not chloride. |
| PGx | Lingam_2017 | not_relevant | 3 | 3 | The paper studies ivacaftor's interaction with P-gp in vitro; while CFTR mutations (e.g., G551D) are mentioned as the rationale for treatment, no gene variant effect on a PK/PD parameter of chloride ion is measured or quantified. |
| popPK | Lotti_2017 | irrelevant | 0 | 0 | Epidemiological review of occupational vinyl chloride exposure and liver disease with no kinetic parameters of any kind. |
| popPK | Macedo_2024 | irrelevant | 1 | 1 | Plant phytotoxicity study of lithium chloride containing no quantitative toxicokinetic parameters for chloride ion. |
| popPK | Maeda_1988 | irrelevant | 0 | 0 | Paper is a protein purification study; chloride appears only as a reagent (guanidinium chloride), with no toxicokinetic parameters for chloride ion. |
| popPK | Magnoni_2023 | irrelevant | 0 | 0 | No chloride ion toxicokinetic parameters; chloride only appears as part of treatment salts in a toxicity/exposure study on fish. |
| PGx | Mall_2022 | not_relevant | 3 | 5 | Sweat chloride is a PD biomarker of chloride transport, but effects are reported for ELX/TEZ/IVA vs placebo in a uniform F/MF genotype group; no gene variant/genotype comparison affecting chloride ion PD or PK is shown. |
| popPK | Mandpe_2020 | irrelevant | 0 | 0 | This is a review of mirabegron for overactive bladder; chloride ion appears only as part of drug salt names (e.g., oxybutynin chloride) with no kinetic parameters for chloride_ion itself. |
| popPK | Manoli_2022 | irrelevant | 0 | 0 | PVC (polyvinyl chloride) is a polymer material, not chloride ion; the study concerns UV disinfection of bacteria with no toxicokinetic parameters. |
| PGx | Mao_2024 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype effect on chloride ion PK/PD; study is biochemical CYP3A4 inactivation by chelerythrine chloride. |
| PGx | Mao_2025 | not_relevant | 0 | 0 | No gene variant/genotype effects on chloride ion PK/PD parameters; paper describes bilirubin–WNK1 signaling, not pharmacogenomics. |
| popPK | Marcelino_2007 | irrelevant | 0 | 0 | chloride ion appears only as part of the surfactant CTAC, not as the subject substance; no toxicokinetic parameters for chloride ion. |
| PGx | Mardon_1969 | not_relevant | 0 | 0 | Paper studies Candida albicans dimorphism and amino acid metabolism; no pharmacogenomic effect on chloride ion PK/PD parameters. |
| popPK | Mardones_2019 | irrelevant | 0 | 0 | An acute ammonia (NH3) LC50 toxicity study in fish; chloride only appears in ammonium chloride as a reagent, with no kinetic parameters for the chloride ion. |
| popPK | Marsh_2021 | irrelevant | 0 | 0 | Epidemiological mortality study with no toxicokinetic parameters for chloride ion; chloride appears only as an analytical/exposure variable, not as the subject of kinetic modeling. |
| popPK | Martinez_1998 | irrelevant | 0 | 0 | The substance is doxacurium chloride (a drug), not the chloride ion; reported values are pharmacodynamic ED50/ED90 and effect times, not toxicokinetic parameters for chloride. |
| PGx | McCague_2019 | not_relevant | 4 | 4 | CFTR genotype affects disease phenotype (sweat chloride, FEV1), not a PK/PD parameter of chloride ion as a drug. |
| PGx | Melo_2017 | not_relevant | 0 | 0 | No gene variant or pharmacogenomic effect on chloride ion PK/PD is reported; the paper concerns bone turnover biomarkers after bariatric surgery. |
| PGx | Morrow_1986 | not_relevant | 1 | 1 | Calcium chloride is a tool compound, not a drug with gene-variant-driven PK/PD changes; effect is on ethanol sensitivity, not chloride ion PK/PD. |
| PGx | Mouhoumed_2024 | not_relevant | 0 | 0 | The paper is about groundwater vulnerability and aquifer recharge mapping; chloride refers to water chemistry, not the chloride ion drug with any pharmacogenomic PK/PD effect. |
| popPK | Nakashima_2008 | irrelevant | 3 | 2 | Chloride ion appears only as the counterion of CdCl2/NiCl2 co-exposures; no chloride kinetic parameters are reported, only metal accumulation and DNA damage measures. |
| popPK | Neafsey_2009 | irrelevant | 0 | 0 | The paper concerns CYP2E1 genetic polymorphism and enzyme activity, with no quantitative kinetic parameters for chloride ion; vinyl chloride is only mentioned as a CYP2E1 substrate. |
| PGx | Neafsey_2009 | not_relevant | 1 | 1 | Paper describes CYP2E1 polymorphisms and enzyme activity variability but chloride ion is not a substrate and no PK/PD parameter effects for it are reported. |
| popPK | Nielsen_1992 | irrelevant | 0 | 0 | The subject substance is mercuric/methylmercuric chloride (mercury is the toxicant of interest); chloride ion appears only as a counterion/analytical form, not as a subject with its own kinetic parameters. |
| popPK | Ojajärvi_2001 | irrelevant | 0 | 0 | Outcome/epidemiological meta-analysis of cancer risk with no kinetic parameters for chloride ion. |
| popPK | Palfrey_2020 | irrelevant | 1 | 0 | The kinetic parameters (partition coefficients, diffusion time constants) belong to the manganese cation and gadolinium contrast agents in equine intervertebral disc tissue; chloride ion appears only as a counterion/vehicle (manganese chloride, NaCl medium), never as the subject substance. |
| PGx | Palmer_1992 | not_relevant | 0 | 0 | Plant tissue culture study of regeneration; no pharmacogenomic effect on PK/PD parameters of chloride ion. |
| popPK | Patnaik_2015 | irrelevant | 0 | 0 | This is an in vitro cytotoxicity/genotoxicity study of lead chloride (LC values), not chloride ion toxicokinetics; it contains no kinetic parameters for chloride_ion. |
| popPK | Patnaik_2018 | irrelevant | 1 | 3 | LC50/MIC values belong to methylmercury chloride as a substance; chloride ion appears solely as the counter-ion/reagent, with no kinetic parameters (half-life, clearance, partitioning) for chloride ion itself. |
| popPK | Paul_2026 | irrelevant | 0 | 0 | Chloride appears only as the counterion of the test salt CdCl2; all kinetic parameters (LC50, BCF) pertain to cadmium, not chloride ion. |
| popPK | Pearson_1990 | irrelevant | 2 | 2 | The paper concerns mivacurium chloride's pharmacodynamic (neuromuscular block) dose-response in anesthetized patients; chloride ion is not the subject substance and no kinetic parameters for chloride ion are reported. |
| PGx | Pinto_2021 | not_relevant | 2 | 3 | The paper discusses CFTR genotypes affecting chloride transport and drug response, but chloride ion is an endogenous analyte, not a drug, and no PK/PD parameter of a drug is quantitatively linked to genotype. |
| popPK | Pressman_2026 | irrelevant | 0 | 0 | Forum article on VOC mixture risk assessment with no quantitative kinetic parameters for chloride ion; chloride is not mentioned at all. |
| popPK | Priest_2021 | irrelevant | 1 | 5 | The kinetic parameter (fractional GI uptake) belongs to aluminium (26Al), with aluminium chloride merely one test compound, so chloride_ion is not the subject substance. |
| PGx | Quintana_2024 | not_relevant | 2 | 4 | The study reports drug-induced transcriptional changes in parasite GluCl (chloride channel) genes in response to ivermectin/moxidectin, not a genotype-driven change in a pharmacokinetic or pharmacodynamic parameter of chloride_ion. |
| popPK | Rauma_2013 | irrelevant | 1 | 1 | A review of dermal vapour absorption; chloride ion is not the subject substance, no kinetic parameters for it reported. |
| popPK | Reitz_1996 | irrelevant | 0 | 0 | Substance is vinyl chloride, not chloride ion as subject; no numeric parameters present in evidence. |
| PGx | Repin_2021 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype effects studied; only polymorphism, solubility, and PBPK simulation of lercanidipine HCl pharmacokinetics. |
| PGx | Robinson_1986 | not_relevant | 1 | 2 | Strain (H-2 haplotype) differences in antinuclear antibody induction by mercuric chloride are an immune response phenotype, not a PK/PD parameter effect for chloride ion. |
| PGx | Rodrigues_1994 | not_relevant | 0 | 0 | Paper describes a CYP2D6 activity assay for dextromethorphan; no genotype-driven PK/PD effect for chloride_ion is reported. |
| popPK | Roe_2014 | irrelevant | 0 | 0 | Environmental contamination/biomonitoring study of lake chloride concentrations with no kinetic parameters of chloride disposition in any organism. |
| popPK | Roganović_2026 | irrelevant | 0 | 0 | All kinetic parameters (CL/F, V/F, Ka, AUC, half-life) belong to cyclosporine A, not chloride ion; chloride appears nowhere as the subject substance. |
| popPK | Roy_2022 | irrelevant | 0 | 0 | The reported LC50 is an acute toxicity endpoint for cadmium chloride in fish, not a toxicokinetic parameter of chloride ion, which appears only as a counterion. |
| popPK | Ruckart_2013 | irrelevant | 0 | 0 | Epidemiological case-control study with no toxicokinetic parameters; chloride ion not a study substance. |
| popPK | Ruckart_2015 | irrelevant | 0 | 0 | Epidemiological case-control study of solvents in drinking water with no kinetic parameters for chloride ion; chloride appears only as a water model fragment. |
| popPK | Russell_2025 | irrelevant | 0 | 0 | Chloride appears only as reagents/counterions (NaCl, HCl, [TPP][Cl]); the paper studies Rose Bengal nanoGUMBOS with no chloride ion kinetic parameters. |
| popPK | Rydzyński_1994 | irrelevant | 0 | 0 | The paper studies sensory irritation of cyanuric chloride in mice with no kinetic parameters for chloride ion. |
| popPK | Ryu_2011 | irrelevant | 0 | 0 | This is a molecular/physiological study of cloned chloride channels in Xenopus, with no toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) for the chloride ion itself. |
| popPK | Sakatoku_2020 | irrelevant | 1 | 3 | Chloride appears only as a counter-ion in cadmium/zinc chloride exposures; the kinetic data (gene expression fold-changes) relate to metal exposure response, not chloride ion toxicokinetics. |
| PGx | Sangiuolo_2002 | not_relevant | 2 | 1 | Abstract-only discussion of genotype-based therapy in CF without any PK/PD effect data for chloride ion. |
| popPK | Sarner_1988 | irrelevant | 0 | 0 | Chloride appears only as part of the drug name doxacurium chloride; the pharmacodynamic ED/duration data are for doxacurium, not for chloride ion kinetics. |
| popPK | Sax_2020 | irrelevant | 0 | 0 | The paper concerns chloroprene (and its metabolite CEO) carcinogenicity and PBPK modeling; chloride ion appears only incidentally as part of the chemical name, with no toxicokinetic parameters for chloride ion. |
| PGx | Schabauer_2018 | not_relevant | 2 | 3 | Chloride ion is not a pharmacological agent; MIC associations with spa-type concern benzaldehydes/antiseptics, not chloride PK/PD pharmacogenomics. |
| PGx | Sekioka_2020 | not_relevant | 0 | 0 | No pharmacogenomic effects; paper describes medicinal chemistry optimization of GSMs, no gene variant effects on chloride ion PK/PD. |
| popPK | Selvi_2003 | irrelevant | 0 | 0 | This is an acute toxicity study of cadmium chloride (LC50) with no toxicokinetic parameters for the chloride ion itself. |
| PGx | Semenova_2017 | not_relevant | 0 | 0 | Paper concerns COMT enzyme characterization and inhibitor effects on catecholamine metabolism in zebrafish, with no gene variant effect on chloride ion PK/PD parameters. |
| popPK | Serkland_2025 | irrelevant | 0 | 10 | The kinetic parameters belong to rituximab, not chloride_ion, which appears only incidentally in chloride/CD19 context not at all. |
| PGx | Sheffield_2018 | not_relevant | 0 | 0 | The paper reports pharmacodynamic effects of engineered hirudin-albumin fusion proteins in mouse thrombosis/bleeding models, with no gene variant/genotype/phenotype data and chloride ion (ferric chloride) used only as a thrombosis-inducing reagent, not a drug or analyte. |
| popPK | Shi_2026 | irrelevant | 0 | 0 | The kinetic parameters (CL 6.73 L/h, V 49.1 L) belong to vancomycin, not chloride ion; chloride is not the subject substance here. |
| PGx | Shteinberg_2021 | not_relevant | 2 | 2 | Abstract mentions CFTR mutations affecting chloride transport generally, with no PK/PD pharmacogenomic effect or effect sizes reported. |
| PGx | Stacpoole_2023 | not_relevant | 0 | 3 | The paper discusses chloride ion dependence of GSTZ1 enzyme activity, not a genetic variant effect on chloride ion PK/PD parameters; DCA is the drug studied. |
| PGx | Stanleigh_2025 | not_relevant | 3 | 4 | CFTR genotype effect is on CFTR function/clinical biomarkers; chloride ion is an endogenous ion, not a drug with a PK/PD parameter being reported. |
| popPK | Storm_1998 | irrelevant | 0 | 0 | The paper concerns methylene chloride OEL derivation from CNS effect data, with no kinetic parameters for chloride ion itself. |
| popPK | Swain_2015 | irrelevant | 0 | 0 | Chloride appears only as an analytical quencher reagent (cetylpyridinium chloride); no toxicokinetic parameters for chloride ion are reported, and the study concerns capsaicin partitioning in liposomes. |
| popPK | Swart_2026 | irrelevant | 0 | 0 | The paper reports PK parameters for the drug SUL-238 (HCl salt), not for the chloride ion itself, which appears only as part of the salt form. |
| popPK | Tamburro_2025 | irrelevant | 0 | 0 | This is a molecular biology study of the PACC1/TMEM206 chloride channel in human tissues and HEK293 cells; chloride appears only as channel ion/NaCl buffer component, with no toxicokinetic parameters for the chloride ion. |
| popPK | Tanaka_2023 | irrelevant | 0 | 0 | Chloride appears only as a routine clinical chemistry/urinalysis parameter, while all toxicokinetic parameters (Cmax, Tmax, AUC) are for azathioprine's metabolite 6-MP, not chloride ion; no kinetic values for chloride are reported. |
| PGx | Taneyama_1989 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype reported; effects are drug-induced hemodynamic changes in dogs, not pharmacogenomic effects on PK/PD of chloride ion. |
| PGx | Terlizzi_2024 | not_relevant | 0 | 2 | Paper examines CFTR genotype effects on sweat chloride as a disease progression biomarker, not a pharmacogenomic effect on chloride ion PK/PD parameters. |
| PGx | Tümmler_2025 | not_relevant | 2 | 4 | Chloride ion is treated as a CFTR biomarker (sweat chloride), not a administered drug with PK/PD parameters; genotype effects describe disease/endogenous physiology and modulator response, not pharmacogenomic alteration of chloride PK/PD. |
| popPK | Utell_1994 | irrelevant | 0 | 0 | NaCl appears only as a control aerosol in a pulmonary function exposure study with no kinetic parameters for chloride ion. |
| popPK | Verep_2007 | irrelevant | 0 | 0 | Chloride appears only as part of mercuric chloride exposure; no chloride ion kinetic parameters, only LC50 values for HgCl2. |
| popPK | Vessally_2024 | irrelevant | 0 | 0 | Choline chloride is merely a DES component in a physicochemical aqueous two-phase extraction study; no toxicokinetic parameters for chloride ion in any organism are reported. |
| popPK | Vicente_2026 | irrelevant | 0 | 0 | This is a population PK study of infliximab (a monoclonal antibody drug), not of chloride ion; no chloride parameters are present. |
| popPK | Vonk_2025 | irrelevant | 0 | 0 | The paper reports popPK of elexacaftor/tezacaftor/ivacaftor, not chloride ion; chloride (swat chloride) appears only as an outcome measure, and no numeric chloride_ion kinetic parameters are given. |
| popPK | Ward_1995 | irrelevant | 0 | 0 | A review of occupational cancer epidemiology with no chloride ion kinetic parameters of any kind. |
| PGx | Ware_2017 | not_relevant | 3 | 3 | SLCO2A1 variant affects thiazide-induced hyponatremia (sodium/water handling), not a pharmacokinetic or pharmacodynamic parameter of chloride ion; hypochloremia is a phenotype finding, not a genotype-linked electrolyte effect. |
| popPK | Wensel_2008 | irrelevant | 0 | 0 | Chromatography paper where chloride is just a buffer component; no toxicokinetic parameters for chloride ion. |
| popPK | Westra_2025 | irrelevant | 0 | 0 | All kinetic parameters (CL/F, V/F, Ka, AUC, Cmax) belong to osimertinib and its metabolite AZ5104 — the chloride ion is not the subject substance anywhere in the paper. |
| popPK | Wiegel_1991 | irrelevant | 0 | 0 | Chloride ions appear only as a reagent affecting lipoprotein partitioning in vitro; no toxicokinetic parameters for chloride ion itself. |
| PGx | Wine_2022 | not_relevant | 0 | 0 | Chloride is an endogenous ion/biomarker (sweat chloride as readout of CFTR activity), not a drug with PK/PD parameters affected by genotype. |
| popPK | Witta_2026 | irrelevant | 0 | 0 | This is a simulation study of a hypothetical drug's population PK model-averaging methodology; chloride_ion never appears as a subject substance. |
| PGx | Wonkam_2020 | not_relevant | 0 | 0 | Paper reports genetic modifiers of survival/stroke in sickle cell anemia, not any pharmacogenomic effect on PK/PD parameters of chloride ion. |
| popPK | Wu_2016 | irrelevant | 0 | 0 | The paper concerns a sampling method for SVOCs (phthalates) in indoor air; chloride ion is not the studied substance and no kinetic parameters for it appear anywhere. |
| popPK | Wu_2026 | irrelevant | 0 | 0 | The paper is a population PK study of linezolid in critically ill patients, with no kinetic parameters for chloride ion at all. |
| popPK | Xajil-Ramos_2026 | irrelevant | 0 | 0 | All kinetic parameters (Ka, CL, V1, V2, Q) belong to tacrolimus, not chloride ion; chloride only appears incidentally as EDTA/reagent contexts. |
| PGx | Xia_2017 | not_relevant | 0 | 0 | Chloride is only a chemical component of the carrier (PDADMAC), no gene-variant effect on chloride PK/PD is reported. |
| popPK | Xu_2026 | irrelevant | 0 | 0 | A review of micro/nanoplastic biomonitoring in humans; "chloride" appears only as part of the polymer PVC, with no kinetic parameters for chloride ion whatsoever. |
| popPK | Yang_2024 | irrelevant | 2 | 4 | The kinetic parameters (tmax, cmax, AUC) belong to nitidine chloride as a drug compound, not to chloride_ion itself; chloride is merely part of the compound name/counterion. Also key quantitative tables (Table S3, Fig. 6) appear in supplementary material not fully provided. |
| popPK | Yang_2026 | irrelevant | 0 | 0 | The paper reports population PK parameters (CL/F, V/F, half-life) for encorafenib, not for chloride ion; chloride ion does not appear as the subject substance. |
| popPK | Yaseen_2025 | irrelevant | 0 | 0 | Chloride appears only as a measured serum electrolyte biomarker effect in a pesticide toxicity study, with no kinetic parameters for chloride_ion. |
| popPK | Yilmaz_2004 | irrelevant | 0 | 0 | This is an acute toxicity (LC50) study of cadmium chloride in guppies; chloride ion is merely part of the salt, with no kinetic parameters for chloride itself. |
| popPK | Yuan_2022 | irrelevant | 0 | 0 | A review of microplastic pollution; chloride ion only incidental (PVC/polymer context), no toxicokinetic parameters for chloride ion. |
| popPK | Yusaf_2022 | irrelevant | 0 | 0 | This is a chemistry/wastewater treatment paper on dye-surfactant micellization; NaCl/chloride appears only as an electrolyte affecting membrane flux, with no toxicokinetic parameters. |
| popPK | Yusaf_2023 | irrelevant | 0 | 0 | Chloride only appears as an electrolyte (NaCl) in a dye-removal ultrafiltration engineering study; no toxicokinetic parameters for chloride ion. |
| popPK | Zaryab_2026 | irrelevant | 0 | 0 | The paper's quantitative kinetic parameters (CL, Vd of voriconazole, e.g. 6.46 and 3.11 L/h, 97.1 L) belong to voriconazole, not chloride ion; chloride appears only as part of serum creatinine/creatinine clearance context, so no parameters for chloride ion itself are reported. |
| popPK | Zhang_1988 | irrelevant | 0 | 0 | Chloride ion appears only as a chemical reagent (cetylpyridinium chloride); no kinetic parameters for chloride are reported. |
| popPK | Zhang_2001 | irrelevant | 0 | 0 | Chloride appears only as stannous chloride reagent; the kinetic/biodistribution parameters concern a 99mTc technetium complex, not chloride ion. |
| popPK | Zhang_2024 | irrelevant | 2 | 3 | This is an exposure/epidemiological association study measuring serum Cl concentrations in a population; no toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) for chloride ion itself are reported, and no numeric serum chloride values are provided in the text. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | This is an epidemiological exposure-outcome study on microplastics and telomere length; chloride merely appears within the polymer name PVC, and no kinetic parameters for chloride ion are reported. |
| PGx | Zhang_2025_2 | not_relevant | 0 | 0 | The study examines hypoxia-induced PK changes of phenytoin in rats with CYP2C9/P-gp expression changes; chloride ion is not the studied drug (lithium chloride was only a modeling agent), and no gene variant/genotype effect is reported. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | The paper reports PopPK parameters (CL, V) for linezolid in pediatric patients; chloride ion does not appear as the subject substance and no chloride kinetic values are given. |
| popPK | Zhou_2021 | irrelevant | 0 | 0 | Study concerns ion-exchange kinetics of ammonium on zeolite in wastewater treatment; chloride (as NaCl) is only a regeneration reagent, with no toxicokinetic parameters for chloride ion. |
| popPK | van_2026 | irrelevant | 0 | 0 | The subject is hydromethylthionine/methylthioninium (drug), not the chloride ion, which appears only as a counterion/analyte within methylthioninium chloride; no chloride-ion kinetic parameters are the focus. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bchloride_ion%5D&body=Drug%3A%20chloride_ion%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_chloride_ion/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-15 05:46 UTC</sub>
