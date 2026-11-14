<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Cigarette toxins&quot;,&quot;href&quot;:&quot;toxins/CIG.md&quot;},{&quot;label&quot;:&quot;Heptachlor&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Heptachlor_Smith1989_reference&quot;,&quot;label&quot;:&quot;Smith_1989_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_heptachlor/Heptachlor_Smith1989_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# Heptachlor

- **generic name:** Heptachlor
- **T3DB:** [T3D0034](http://www.t3db.ca/toxins/T3D0034) · **PubChem:** [CID 3589](https://pubchem.ncbi.nlm.nih.gov/compound/3589)

## About

Heptachlor is a manufactured cyclodiene organochlorine insecticide. As it is a persistant organic pollutant, heptachlor use is banned or limited in most areas. It is one ingredient of cigarette.

- **Category:** Cigarette Toxin, Pesticide, Pollutant, Airborne Pollutant, Synthetic Toxin
- **Route of exposure:** oral, inhalation, dermal
- **Sources and uses:** Heptachlor was originally widely produced as an insecticide, but is now used only in fire and control in underground transformers.
- **Mechanism of toxicity:** Heptachlor is a central nervous system stimulant. It non-competitively blocks neurotransmitter action at gamma-amino butyric acid receptors, resulting in overstimulation of the nervous system. …
- **Health effects:** Exposure to heptachlor may cause damage to your liver, nervous system, and immune system.
- **Carcinogenicity:** IARC group 2B, possibly carcinogenic to humans.
- **Minimal risk levels (ATSDR):** Acute Oral: 0.0006 mg/kg/day
Intermediate Oral: 0.0001 mg/kg/day
- **Acute toxicity:** LC50: 150 mg/kg over 4 hours (Inhalation, Cat)
LD50: 500-2000 mg/kg (Dermal, Rabbit)
LD50: 80-90 mg/kg (Oral, Rabbit)
LD50: 27 mg/kg (Intraperitoneal, Rat)

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D0034">T3DB T3D0034</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 76-44-8 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:34785">ChEBI 34785</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| heptachlor | parent | 373.3 | C10H5Cl7 | PubChem | [3589](https://pubchem.ncbi.nlm.nih.gov/compound/3589) | Smith_1989 |

## Start here

> **Smith_1989_reference** — <span class="pk-badge pk-badge--green">Reproduces with caveats</span> fine-wool wether lambs, n = 12. [Run it in the simulator](drugs/toxin_heptachlor/Heptachlor_Smith1989_reference.md?tab=Simulation) · [record](drugs/toxin_heptachlor/Heptachlor_Smith1989_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="sheep" data-age="adult" data-status="Reproduces with caveats" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces with caveats</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub> | [Smith_1989_reference](drugs/toxin_heptachlor/Heptachlor_Smith1989_reference.md) | ▶ model + simulator | retention, 1 pool | 1 | Smith GS et al., Rapid [14C]heptachlor clearance from bo…, Journal of animal science (1989) | [10.2527/jas1989.671187x](https://doi.org/10.2527/jas1989.671187x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> | [Brown_1992_liver_and_biliary_tract_cancer](drugs/toxin_heptachlor/pd_Brown_1992_liver_and_biliary_tract_cancer.md) | liver and biliary tract cancer ← heptachlor · model not identified | — | Brown DP, Mortality of workers employed at organo…, Scandinavian journal of wor… (1992) | [10.5271/sjweh.1593](https://doi.org/10.5271/sjweh.1593) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-12 17:58 | 19:00 | 1/0/0 | 0/1/0 | 0/0/0 | 339,054/15,009 | einfracz / qwen3.8-flash-next | 7 | 2/3 | 7/0 | 0 |

## Coverage

- **PubMed hits:** 116 matched, 88 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lu_2011.pdf` | Lu Z et al., Accumulation dynamics of chlordanes and…, Environmental science & tec… (2011) | popPK | 9 | [10.1021/es201629p](https://doi.org/10.1021/es201629p) | [21823571](https://pubmed.ncbi.nlm.nih.gov/21823571) | The paper reports a multicompartment toxicokinetic model including heptachlor (HEP) and its metabolites, but the abstract does not provide the specific numeric parameters (half-lives, rates, coefficients) for heptachlor, only for cis- and trans-chlordane. |
| `Smith_1989.pdf` | Smith GS et al., Rapid [14C]heptachlor clearance from bo…, Journal of animal science (1989) | popPK | 9 | [10.2527/jas1989.671187x](https://doi.org/10.2527/jas1989.671187x) | [2925541](https://pubmed.ncbi.nlm.nih.gov/2925541) | The paper reports specific biological half-times and elimination rate constants for heptachlor in sheep. |
| `Rozman_1984.pdf` | Rozman KK, Phase II enzyme induction reduces body…, Toxicology letters (1984) | popPK | 8 | [10.1016/0378-4274(84)90176-0](https://doi.org/10.1016/0378-4274(84)90176-0) | [6695396](https://pubmed.ncbi.nlm.nih.gov/6695396) | The paper describes significant kinetic changes (half-life reduction) for heptachlor in rats, but the specific numeric values are not included in the provided text excerpt. |
| `Scheufler_1984.pdf` | Scheufler E et al., Enhanced total body clearance of heptac…, Toxicology (1984) | popPK | 8 | [10.1016/0300-483x(84)90129-x](https://doi.org/10.1016/0300-483x(84)90129-x) | [6464029](https://pubmed.ncbi.nlm.nih.gov/6464029) | The paper describes a pharmacokinetic study on heptachlor clearance in rats, reporting relative changes (e.g., 27% reduction in body burden) rather than specific numeric parameters like half-life or clearance rates, which are likely in the missing tables. |

<sub>queue written 2026-11-12 17:55 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adeshina_1991 | irrelevant | 2 | 0 | The paper focuses on cancer risk assessment and dose reconstruction from adipose tissue concentrations, not on quantifying toxicokinetic parameters like half-lives or clearance rates for heptachlor. |
| popPK | Araujo-León_2019 | irrelevant | 1 | 0 | The paper is a biomonitoring study reporting concentrations in wild opossums with no toxicokinetic parameters or model. |
| popPK | Aver_2020 | irrelevant | 1 | 8 | The paper reports environmental residue concentrations in feathers but provides no quantitative toxicokinetic parameters (e.g., half-lives, partition coefficients) for heptachlor. |
| popPK | Baker_1991 | irrelevant | 2 | 0 | The paper is an epidemiological study design report measuring body concentrations (exposure/outcome) without reporting any quantitative toxicokinetic parameters like half-lives, rate constants, or partition coefficients. |
| popPK | Bassig_2019 | irrelevant | 0 | 0 | The study is an epidemiological case-control analysis of risk associations (Odds Ratios) and does not report any quantitative toxicokinetic parameters (e.g., half-lives, partition coefficients, clearance rates) for heptachlor. |
| popPK | Becker_1997 | irrelevant | 0 | 0 | The paper reports static concentrations of chlorinated hydrocarbons in marine mammals for biomonitoring purposes and contains no toxicokinetic parameters such as half-lives, rate constants, or partition coefficients. |
| popPK | Cañas_2002 | irrelevant | 2 | 2 | The paper reports static concentration measurements of heptachlor in snake eggs exposed via nest material, not kinetic parameters like half-lives or rate constants. |
| popPK | Cindoruk_2020 | irrelevant | 0 | 0 | The paper is an environmental monitoring study measuring pollutant concentrations in pine trees and air, containing no toxicokinetic parameters for heptachlor in any species. |
| popPK | Dong_2022 | irrelevant | 1 | 1 | The paper reports environmental biomonitoring concentrations in breast milk but does not provide any quantitative toxicokinetic parameters (e.g., half-lives, clearance, partition coefficients) for heptachlor. |
| popPK | Engel_2017 | irrelevant | 0 | 0 | The paper is an epidemiological study reporting hazard ratios for breast cancer risk associated with insecticide exposure, not toxicokinetic parameters. |
| popPK | Espín_2012 | irrelevant | 0 | 0 | The paper reports only static geometric mean concentrations of heptachlor in feathers for biomonitoring purposes, containing no toxicokinetic parameters such as half-lives, clearance rates, or partition coefficients. |
| popPK | Freire_2017 | irrelevant | 1 | 2 | This is a biomonitoring epidemiological study reporting serum concentration distributions (medians, percentiles) but contains no quantitative toxicokinetic parameters such as half-lives, clearance rates, or model constants. |
| popPK | Goldner_2013 | irrelevant | 1 | 0 | The paper is an epidemiological study reporting odds ratios for thyroid disease associated with pesticide exposure, with no toxicokinetic parameters reported. |
| popPK | Gui_2014 | irrelevant | 0 | 0 | The paper reports concentration levels of heptachlor in tissues, which is an exposure/outcome study, and does not provide any kinetic parameters such as half-lives, clearance, or volume of distribution. |
| popPK | Hassan_2021 | irrelevant | 0 | 0 | The study reports static concentrations of heptachlor epoxide in reindeer meat but contains no quantitative toxicokinetic parameters (rates, half-lives, partition coefficients, etc.). |
| popPK | Hoppin_2009 | irrelevant | 0 | 0 | The paper is an epidemiological association study reporting Odds Ratios for asthma, containing no toxicokinetic parameters for heptachlor. |
| popPK | Hurwitz_2025 | irrelevant | 0 | 0 | The paper is an epidemiological study examining associations between pesticide use and chromosome loss, reporting only odds ratios and no quantitative toxicokinetic parameters (half-lives, clearance, etc.) for heptachlor. |
| popPK | Joy_2005 | irrelevant | 1 | 0 | The paper focuses on ecological biomonitoring and population effects in soil microarthropods, reporting no quantitative toxicokinetic parameters such as half-lives, rate constants, or partition coefficients. |
| popPK | Klemmer_1977 | irrelevant | 2 | 0 | The paper reports static tissue concentrations from human autopsy material in an exposure/distribution study, lacking any kinetic parameters such as half-lives, clearance, or partition coefficients; the provided text contains no numeric kinetic values. |
| popPK | Kucklick_2002 | irrelevant | 2 | 0 | The paper is an environmental monitoring study reporting static tissue concentrations of various organochlorines, including heptachlor epoxide, but does not report any quantitative toxicokinetic parameters (e.g., half-lives, clearance, partition coefficients) for heptachlor. |
| popPK | Kuramochi_2006 | irrelevant | 0 | 0 | The paper focuses on modifying UNIFAC thermodynamic parameters for physical properties (solubility, partition coefficients) and contains no toxicokinetic disposition data for heptachlor. |
| popPK | Liu_2007 | irrelevant | 0 | 0 | The paper describes a chemical absorbent material for removing pollutants from water and does not contain any biological or toxicokinetic parameters. |
| popPK | Lu_2011 | relevant | 9 | 0 | The paper reports a multicompartment toxicokinetic model including heptachlor (HEP) and its metabolites, but the abstract does not provide the specific numeric parameters (half-lives, rates, coefficients) for heptachlor, only for cis- and trans-chlordane. |
| popPK | Miranda_2009 | irrelevant | 0 | 0 | The paper reports tissue concentrations and transfer rates but does not provide quantitative kinetic parameters (half-life, clearance, Vmax, etc.) for heptachlor; heptachlor is merely one of several co-analytes measured. |
| popPK | Mitra_2018 | irrelevant | 0 | 0 | The paper is an exposure/biomarker study measuring Hsp gene expression and water pollutant concentrations in fish, containing no quantitative toxicokinetic parameters for heptachlor. |
| popPK | Mueller_2008 | irrelevant | 1 | 0 | The paper reports static concentrations in milk samples and regional trends but provides no quantitative toxicokinetic parameters (such as half-lives, clearance, or partition coefficients). |
| popPK | Odabasi_2012 | irrelevant | 0 | 0 | The paper reports octanol-air partition coefficients and environmental exchange fluxes for OCPs, not biological toxicokinetic parameters (half-life, clearance, etc.) for heptachlor. |
| popPK | Otchere_2005 | irrelevant | 0 | 0 | The paper reports environmental residue concentrations in bivalves, not toxicokinetic parameters. |
| popPK | Parks_2026 | irrelevant | 1 | 0 | The paper is an epidemiological cohort study reporting relative risks for diabetes associated with heptachlor use, but contains no toxicokinetic parameters (such as half-lives, partition coefficients, or clearance rates). |
| popPK | Phelps_2016 | irrelevant | 0 | 0 | The paper reports environmental bioaccumulation concentrations in clams from the Anacostia River and mentions heptachlor only as a marker for legacy contamination, without providing any toxicokinetic parameters. |
| popPK | Pines_1986 | irrelevant | 1 | 0 | The paper is an epidemiological study reporting blood concentrations of heptachlor epoxide in arteriosclerosis patients, but provides no quantitative toxicokinetic parameters (half-lives, rate constants, etc.). |
| popPK | Polanco_2017 | irrelevant | 1 | 2 | The paper reports exposure concentrations in breast milk samples but does not provide quantitative toxicokinetic parameters such as half-lives, rate constants, or partition coefficients. |
| popPK | Quansah_2016 | irrelevant | 0 | 0 | The paper reports epidemiological associations between pesticide exposure and respiratory symptoms, with no toxicokinetic parameters (half-lives, clearance, partition coefficients, etc.) for heptachlor. |
| popPK | Rainwater_2005 | irrelevant | 0 | 0 | The paper reports concentrations of heptachlor as a co-contaminant in a biomonitoring study, with no toxicokinetic parameters such as half-lives or clearance rates. |
| popPK | Ramos_2017 | irrelevant | 0 | 0 | The study is a human biomonitoring survey reporting background exposure concentrations (levels) of heptachlor but contains no toxicokinetic parameters such as half-lives, clearance rates, or partition coefficients. |
| popPK | Rincón-Rubio_2024 | irrelevant | 2 | 1 | This is an epidemiological exposure study reporting associations between breastfeeding and serum concentrations, containing no quantitative toxicokinetic parameters (such as half-lives or clearance rates) for heptachlor. |
| popPK | Roche_2009 | irrelevant | 0 | 0 | The paper is an ecotoxicological survey measuring residue concentrations in wildlife to assess contamination levels, reporting no quantitative toxicokinetic parameters such as half-lives, rate constants, or partition coefficients. |
| popPK | Rogan_1994 | irrelevant | 2 | 1 | The paper is a review of exposure and risk assessment for persistent pesticides in breast milk, containing no quantitative toxicokinetic parameters for heptachlor. |
| popPK | Roque_2022 | irrelevant | 1 | 2 | The paper reports environmental concentrations (ng/g) in bird tissues for exposure monitoring but provides no toxicokinetic parameters such as half-lives, clearance rates, or partition coefficients for heptachlor. |
| popPK | Rozman_1984 | relevant | 8 | 3 | The paper describes significant kinetic changes (half-life reduction) for heptachlor in rats, but the specific numeric values are not included in the provided text excerpt. |
| popPK | Sabljić_1982 | irrelevant | 0 | 0 | The paper presents a molecular connectivity method for predicting Bioconcentration Factors (BCF) in fish, but heptachlor is used only as a validation compound in a QSAR model and no specific kinetic parameters or numeric values for heptachlor's disposition are reported in the text. |
| popPK | Scheufler_1984 | relevant | 8 | 3 | The paper describes a pharmacokinetic study on heptachlor clearance in rats, reporting relative changes (e.g., 27% reduction in body burden) rather than specific numeric parameters like half-life or clearance rates, which are likely in the missing tables. |
| popPK | Schmitt_1990 | irrelevant | 0 | 0 | The paper reports environmental residue concentrations of heptachlor in freshwater fish, which is an exposure/monitoring study with no toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) reported. |
| popPK | Schmitt_1999 | irrelevant | 0 | 0 | The paper is a large-scale monitoring study reporting environmental residue concentrations in fish, with no quantitative toxicokinetic parameters (such as half-lives, clearance rates, or partition coefficients) for heptachlor disposition. |
| popPK | Schmitt_2002 | irrelevant | 0 | 0 | The paper reports environmental residue concentrations in fish tissue from a river basin, which is an exposure/monitoring study, and provides no quantitative kinetic parameters (such as half-lives, clearance rates, or partition coefficients) for heptachlor. |
| popPK | Shen_2007 | irrelevant | 1 | 0 | This is an exposure/biomonitoring study reporting concentrations in human samples without any quantitative kinetic parameters (rates, half-lives, partition coefficients, etc.). |
| popPK | Sim_1998 | irrelevant | 1 | 2 | The paper reports population-level body burden concentrations and epidemiological associations with exposure, but contains no toxicokinetic parameters (rates, half-lives, clearance, etc.). |
| popPK | Souza_2020 | irrelevant | 1 | 0 | This is an epidemiological study reporting exposure concentrations in breast milk but provides no quantitative toxicokinetic parameters such as half-lives, clearance, or partition coefficients. |
| popPK | Struciński_2002 | irrelevant | 0 | 0 | The paper reports only static concentrations of heptachlor in adipose tissue as an exposure biomarker, with no kinetic parameters or rates. |
| popPK | Torres-Moreno_2023 | irrelevant | 0 | 0 | The paper reports exposure concentrations of heptachlor in breast milk for risk assessment purposes but does not report any quantitative toxicokinetic parameters such as half-life, clearance, or partition coefficients. |
| popPK | Wang_2012 | irrelevant | 1 | 1 | The paper reports tissue concentrations and ratios (exposure/outcome study) but does not report quantitative toxicokinetic parameters such as half-lives, clearance rates, or partition coefficients. |
| popPK | Wei_2017 | irrelevant | 0 | 0 | The paper predicts gas-phase environmental concentrations of SVOCs (exposure) and does not report any quantitative toxicokinetic parameters for heptachlor. |
| popPK | Zhao_2013 | irrelevant | 0 | 0 | The paper reports only static residue concentrations and tissue distribution of OCPs in fish, with no quantitative kinetic parameters such as half-lives, clearance rates, or partition coefficients. |
| PGx | Zhao_2025 | not_relevant | 0 | 0 | The paper is a theoretical computational study (MD/QM) on binding mechanisms and energy barriers of CYP isoforms, not a clinical study reporting pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Zietz_2008 | irrelevant | 2 | 0 | The paper is an epidemiological exposure study reporting detection limits and concentrations but contains no quantitative toxicokinetic parameters (half-life, clearance, etc.) for heptachlor. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bheptachlor%5D&body=Drug%3A%20heptachlor%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_heptachlor/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-12 17:55 UTC</sub>
