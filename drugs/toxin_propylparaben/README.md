<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Propylparaben&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Propylparaben_Gazin2013_reference&quot;,&quot;label&quot;:&quot;Gazin_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_propylparaben/Propylparaben_Gazin2013_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Propylparaben_Shin2019_reference&quot;,&quot;label&quot;:&quot;Shin_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_propylparaben/Propylparaben_Shin2019_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

# Propylparaben

- **generic name:** Propylparaben
- **T3DB:** [T3D3979](http://www.t3db.ca/toxins/T3D3979) · **PubChem:** [CID 7175](https://pubchem.ncbi.nlm.nih.gov/compound/7175)
- **groups:** approved, investigational

## About

Propylparaben is an antimicrobial agent, preservative, flavouring agent. Propylparaben belongs to the family of Hydroxybenzoic Acid Derivatives. These are compounds containing an hydroxybenzoic acid (or a derivative), which is a benzene ring bearing a carboxylic acid.

- **Category:** Household Toxin, Industrial/Workplace Toxin, Food Toxin, Synthetic Toxin
- **Detected in:** urine

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D3979">T3DB T3D3979</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 94-13-3 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:32063">ChEBI 32063</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| propylparaben | parent | 180.203 | C10H12O3 | PubChem | [7175](https://pubchem.ncbi.nlm.nih.gov/compound/7175) | Gazin_2013, Shin_2019, Shin_2023 |
| p-Hydroxybenzoic acid | metabolite | 138.122 | C7H6O3 | PubChem | [135](https://pubchem.ncbi.nlm.nih.gov/compound/135) | Shin_2019 |
| p-Hydroxyhippuric acid | metabolite | 195.174 | C9H9NO4 | PubChem | [151012](https://pubchem.ncbi.nlm.nih.gov/compound/151012) | Shin_2019 |
| Propylparaben glucuronide | metabolite | — (mass units only) | — | — | — | — |
| Propylparaben sulfate | metabolite | 260.26 | C10H12O6S | PubChem | [121225983](https://pubchem.ncbi.nlm.nih.gov/compound/121225983) | Shin_2019 |

## Start here

> **Shin_2019_reference** — <span class="pk-badge pk-badge--blue">Simulated</span> 12 male volunteers, n = 12. [Run it in the simulator](drugs/toxin_propylparaben/Propylparaben_Shin2019_reference.md?tab=Simulation) · [record](drugs/toxin_propylparaben/Propylparaben_Shin2019_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="Simulated" data-sim="yes"></span><span class="pk-badge pk-badge--blue">Simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Gazin_2013_reference](drugs/toxin_propylparaben/Propylparaben_Gazin2013_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Gazin V et al., Oral propylparaben administration to ju…, Toxicological sciences : an… (2013) | [10.1093/toxsci/kft211](https://doi.org/10.1093/toxsci/kft211) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Simulated" data-sim="yes"></span><span class="pk-badge pk-badge--blue">Simulated</span> | [Shin_2019_reference](drugs/toxin_propylparaben/Propylparaben_Shin2019_reference.md) | ▶ model + simulator | retention, 1 pool | 1 | Shin MY et al., Pharmacokinetic profile of propyl parab…, Environment international (2019) | [10.1016/j.envint.2019.104917](https://doi.org/10.1016/j.envint.2019.104917) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Shin_2023_reference](drugs/toxin_propylparaben/Propylparaben_Shin2023_reference.md) | — | retention function (no model) | 3 | Shin MY et al., Pharmacokinetics of transdermal methyl-…, Chemosphere (2023) | [10.1016/j.chemosphere.2022.136689](https://doi.org/10.1016/j.chemosphere.2022.136689) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Chen_2022_GDM](drugs/toxin_propylparaben/pd_Chen_2022_GDM.md) | gestational diabetes mellitus ← propylparaben · model not identified | — | Chen WJ et al., Assessing urinary phenol and paraben mi…, Environmental research 214(… (2022) | [10.1016/j.envres.2022.113897](https://doi.org/10.1016/j.envres.2022.113897) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by qwen3.8-flash-next, p(non-human) 1.00).">rat</span> | [Snodin_2017_male_reproductive_parameters_testis_epididymis_seminal_vesicles_preputial_glands](drugs/toxin_propylparaben/pd_Snodin_2017_male_reproductive_parameters_testis_epididymis_s.md) | male reproductive parameters (testis, epididymis, seminal vesicles, preputial glands) ← propylparaben · inhibition effect | — | Snodin D, Regulatory risk assessments: Is there a…, Human & experimental toxico… (2017) | [10.1177/0960327117718042](https://doi.org/10.1177/0960327117718042) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-15 21:22 | 31:13 | 2/1/0 | 2/0/0 | 0/0/0 | 774,287/50,935 | einfracz / qwen3.8-flash-next | 19 | 4/12 | 19/0 | 0 |

## Coverage

- **PubMed hits:** 96 matched, 93 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 2  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gazin_2013.pdf` | Gazin V et al., Oral propylparaben administration to ju…, Toxicological sciences : an… (2013) | popPK | 10 | [10.1093/toxsci/kft211](https://doi.org/10.1093/toxsci/kft211) | [24068675](https://pubmed.ncbi.nlm.nih.gov/24068675) | The abstract reports specific numeric toxicokinetic parameters (volume of distribution, elimination half-life, clearance, Cmax, AUC) for propylparaben in rats. |
| `Shin_2019.pdf` | Shin MY et al., Pharmacokinetic profile of propyl parab…, Environment international (2019) | popPK | 10 | [10.1016/j.envint.2019.104917](https://doi.org/10.1016/j.envint.2019.104917) | [31234001](https://pubmed.ncbi.nlm.nih.gov/31234001) | The paper reports quantitative pharmacokinetic parameters for propylparaben in humans, including a specific terminal half-life (2.9 h) and urinary excretion fractions, which are directly extractable. |
| `Shin_2023.pdf` | Shin MY et al., Pharmacokinetics of transdermal methyl-…, Chemosphere (2023) | popPK | 10 | [10.1016/j.chemosphere.2022.136689](https://doi.org/10.1016/j.chemosphere.2022.136689) | [36220432](https://pubmed.ncbi.nlm.nih.gov/36220432) | The abstract reports quantitative pharmacokinetic parameters (terminal half-life and fractional urinary excretion) for propylparaben in humans. |
| `Campbell_2015.pdf` | Campbell JL et al., A case study on quantitative in vitro t…, Toxicology (2015) | popPK | 9 | [10.1016/j.tox.2015.03.010](https://doi.org/10.1016/j.tox.2015.03.010) | [25839974](https://pubmed.ncbi.nlm.nih.gov/25839974) | The paper describes the development of a PBPK model for propylparaben but the provided evidence contains no numeric kinetic parameter values. |
| `Nishida_2011.pdf` | Nishida K et al., Relationship between lipophilicity and…, The Journal of pharmacy and… (2011) | popPK | 7 | [10.1111/j.2042-7158.2011.01276.x](https://doi.org/10.1111/j.2042-7158.2011.01276.x) | [21492176](https://pubmed.ncbi.nlm.nih.gov/21492176) | The paper reports first-order absorption rate constants (ka) for propylparaben in rats, but the specific numerical values for propylparaben are only summarized qualitatively (e.g., "~ 80%" absorption, increased according to lipophilicity) rather than listed as precise numeric constants in the text provided. |

<sub>queue written 2026-11-15 21:07 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ashrap_2018 | irrelevant | 1 | 0 | The paper reports urinary concentrations in a population study but no kinetic parameters (half-lives, clearances, partition coefficients) for propylparaben. |
| popPK | Boberg_2010 | irrelevant | 1 | 0 | The paper is a narrative review that qualitatively describes toxicokinetics without providing any numeric kinetic parameter values in the text. |
| popPK | Buist_2010 | relevant | 4 | 0 | Propylparaben is a subject of the study involving dermal absorption, but the evidence text provides no specific numeric permeability coefficients or kinetic parameters for it. |
| popPK | Campbell_2015 | relevant | 9 | 0 | The paper describes the development of a PBPK model for propylparaben but the provided evidence contains no numeric kinetic parameter values. |
| popPK | Chen_2022 | irrelevant | 0 | 0 | This is an epidemiological case-control study measuring urinary concentrations to assess exposure-risk associations, with no toxicokinetic parameters reported. |
| popPK | Chen_2025 | irrelevant | 0 | 0 | The paper is an epidemiological study measuring urinary biomarkers of exposure in pregnant women, reporting associations with kidney injury markers, but provides no toxicokinetic parameters (half-life, clearance, etc.) for propylparaben. |
| popPK | Chen_2025_2 | irrelevant | 0 | 0 | The paper is an analytical method study comparing biological matrices for biomonitoring and reports no toxicokinetic parameters. |
| popPK | Claessens_2022 | irrelevant | 0 | 0 | The paper reports biomonitoring concentrations in a population but provides no toxicokinetic parameters such as half-lives, clearance, or partition coefficients. |
| popPK | Coiffier_2023 | irrelevant | 0 | 0 | The paper is an epidemiological study reporting associations between prenatal exposure levels and child respiratory health outcomes, containing no toxicokinetic parameters for propylparaben. |
| popPK | Cui_2015 | irrelevant | 0 | 0 | Propylparaben is used solely as an analytical internal standard for flavonoid analysis and not as a subject of toxicokinetic investigation. |
| popPK | Damjanoska_2025 | irrelevant | 0 | 0 | The paper characterizes a green solvent (Dimethyl Isosorbide) for chromatography and mentions propylparaben only as an analyte quantified by the method, with no toxicokinetic parameters reported. |
| popPK | Denghel_2023 | irrelevant | 1 | 0 | The paper describes an analytical method for measuring propylparaben in urine but reports no toxicokinetic parameters. |
| popPK | Fernández-Martínez_2024 | irrelevant | 1 | 1 | The paper is an epidemiological case-cohort study reporting serum concentrations and hazard ratios for prostate cancer risk, but contains no toxicokinetic parameters (e.g., half-lives, clearance rates, partition coefficients) for propylparaben. |
| popPK | Gerona_2026 | irrelevant | 1 | 0 | The paper focuses on analytical method validation and biomonitoring (exposure levels) for propylparaben and does not report quantitative toxicokinetic parameters such as half-life, clearance, or partition coefficients. |
| popPK | Goerdten_2022 | irrelevant | 0 | 0 | The paper reports Intraclass Correlation Coefficients (ICC) for exposure reproducibility, not toxicokinetic parameters like half-life, clearance, or partition coefficients. |
| popPK | Goldberg_2024 | irrelevant | 0 | 0 | The paper is an exposure/biomonitoring study reporting urinary concentrations in infants, not a toxicokinetic study with kinetic parameters like half-lives, clearances, or volume of distribution. |
| popPK | Golovko_2021 | irrelevant | 0 | 0 | The paper reports environmental concentrations and removal rates in wastewater treatment plants, with propylparaben mentioned only as an analytical target with mean environmental concentrations, not toxicokinetic parameters in organisms. |
| popPK | Gonkowski_2024 | irrelevant | 1 | 9 | The paper reports biomonitoring concentrations of propylparaben in wild boar hair but provides no toxicokinetic parameters such as half-life, clearance, or volume of distribution. |
| popPK | Gonkowski_2025 | irrelevant | 0 | 0 | The study is an environmental exposure assessment of contaminants in wool, reporting static concentration levels rather than kinetic parameters (no half-lives, clearance, or rates), and propylparaben was below the quantification limit. |
| popPK | Gonkowski_2026 | irrelevant | 0 | 0 | The paper reports static concentrations of parabens in cat hair to assess exposure levels, providing no kinetic parameters such as half-lives, clearance, partition coefficients, or PBPK models. |
| popPK | Hajizadeh_2020 | irrelevant | 2 | 2 | The paper is a biomonitoring and exposure assessment study reporting urinary concentrations and estimated daily intakes, lacking any specific kinetic parameters such as half-lives, clearance, or partition coefficients for propylparaben. |
| popPK | Hajizadeh_2020_2 | irrelevant | 1 | 0 | The paper is an epidemiological study reporting associations between exposure sources and urinary paraben concentrations, with no toxicokinetic parameters reported. |
| popPK | Hajizadeh_2022 | irrelevant | 0 | 0 | The paper is an epidemiological study reporting urinary concentrations as an exposure metric, with no quantitative toxicokinetic parameters (half-lives, clearance, partition coefficients, etc.) reported. |
| popPK | Honda_2018 | irrelevant | 1 | 0 | This is an exposure study reporting urinary concentrations and estimated daily intakes, not quantitative toxicokinetic parameters. |
| popPK | Hua_2022 | irrelevant | 1 | 1 | The study reports static urinary concentrations and demographic associations (epidemiology/exposure) but contains no toxicokinetic parameters like half-lives, clearance, or kinetic constants for propylparaben. |
| popPK | Jones_2026 | irrelevant | 2 | 0 | The paper is a review of existing literature and does not present original quantitative kinetic parameters or data tables. |
| popPK | Koch_2014 | irrelevant | 2 | 0 | The paper reports exposure biomarker variability (concentrations, ICCs, excretion rates due to exposure variation) but does not report quantitative toxicokinetic parameters such as half-lives, clearance, or partition coefficients. |
| popPK | Larsson_2014 | irrelevant | 0 | 0 | The paper reports urinary concentrations of propylparaben metabolites in a population exposure study but does not provide any quantitative toxicokinetic parameters such as half-lives, clearance rates, or partition coefficients. |
| popPK | Levasseur_2021 | irrelevant | 0 | 0 | The paper reports exposure assessments and correlations between environmental matrices and urinary biomarkers, but contains no quantitative toxicokinetic parameters (e.g., half-lives, clearance, or rates) for propylparaben. |
| popPK | Li_2023 | irrelevant | 1 | 2 | The paper reports exposure concentrations in nails and urine but contains no toxicokinetic parameters such as half-lives, clearance, or partition coefficients. |
| popPK | Li_2023_2 | irrelevant | 1 | 0 | The study reports biomonitoring concentrations and exposure rates (ng/g, ng/day) but does not provide any toxicokinetic parameters such as half-lives, clearance, or partition coefficients. |
| popPK | Liao_2025 | irrelevant | 1 | 0 | The paper reports urinary concentrations and dietary associations in an epidemiological study; it uses an external literature value for urinary excretion fraction but does not report kinetic parameters for propylparaben itself. |
| popPK | Locatelli_2019 | irrelevant | 0 | 0 | Propylparaben is used solely as an internal standard for an analytical method detecting other UV filters, with no toxicokinetic parameters reported. |
| popPK | López-Ruiz_2026 | irrelevant | 0 | 0 | The paper describes an analytical method for biomonitoring and reports population concentrations, not quantitative kinetic parameters. |
| popPK | Makowska_2022 | irrelevant | 0 | 0 | The study reports biomonitoring concentrations in fur, which is an exposure assessment rather than a toxicokinetic parameter like half-life, clearance, or partition coefficient. |
| popPK | Mallants_2007 | irrelevant | 0 | 0 | The study measures ciliary beat frequency (pharmacodynamics/toxicodynamics) to assess irritation, not toxicokinetic parameters such as absorption, distribution, metabolism, or excretion. |
| popPK | Martins_2020 | irrelevant | 3 | 2 | The paper reports a static percentage permeation flux (71%) rather than quantitative kinetic parameters like rate constants, partition coefficients, or half-lives. |
| popPK | Martín_2015 | irrelevant | 0 | 0 | The paper describes an analytical method for measuring exposure levels in hair, reporting only detection limits and concentrations, with no quantitative kinetic parameters (rates, clearance, volume, etc.). |
| popPK | Martín_2016 | irrelevant | 1 | 9 | The paper reports an analytical method for biomonitoring and exposure concentrations in human hair, not quantitative toxicokinetic parameters for propylparaben. |
| popPK | Martín_2019 | irrelevant | 0 | 0 | The paper reports biomonitoring exposure levels (concentrations in hair) without any toxicokinetic parameters such as clearance, volume of distribution, half-life, or rate constants. |
| popPK | Newmeyer_2023 | irrelevant | 0 | 0 | The paper is an analytical exposure study identifying propylparaben in urine samples but reports no toxicokinetic parameters (half-lives, clearance, partition coefficients, etc.). |
| popPK | Nishida_2011 | relevant | 7 | 4 | The paper reports first-order absorption rate constants (ka) for propylparaben in rats, but the specific numerical values for propylparaben are only summarized qualitatively (e.g., "~ 80%" absorption, increased according to lipophilicity) rather than listed as precise numeric constants in the text provided. |
| popPK | Ouedraogo_2022 | irrelevant | 0 | 0 | The text is an abstract of a methodological framework paper that mentions using PBK models as a component of the methodology but reports no specific quantitative kinetic parameters or numeric values for propylparaben. |
| popPK | Pollock_2017 | irrelevant | 1 | 0 | The paper focuses on the effects of propylparaben on the kinetics of bisphenol A and estradiol, reporting no quantitative toxicokinetic parameters (e.g., half-life, clearance, Vd) for propylparaben itself. |
| popPK | Pongcharoenkiat_2002 | irrelevant | 0 | 0 | The paper discusses chemical hydrolysis rates in emulsions (formulation science), not biological toxicokinetics or disposition in organisms. |
| popPK | Ratajczak-Wrona_2026 | irrelevant | 0 | 0 | The paper is an epidemiological association study measuring propylparaben concentrations in blood to correlate with COVID-19 status, reporting no toxicokinetic parameters such as half-lives, clearance rates, or partition coefficients. |
| popPK | Rojo_2024 | irrelevant | 2 | 5 | The paper reports static tissue concentrations of propylparaben and its derivatives in birds, but provides no kinetic parameters such as half-lives, clearance, or rate constants. |
| popPK | Rolland_2020 | irrelevant | 0 | 0 | The paper is an epidemiological exposure/biomonitoring study reporting urinary concentrations of parabens in humans, with no toxicokinetic parameters (half-life, clearance, etc.) measured or modeled. |
| popPK | Sanchis_2020 | irrelevant | 0 | 0 | The paper reports biomonitoring concentrations and estimated daily intakes (exposure metrics) but no quantitative toxicokinetic parameters such as half-lives, clearance, or partition coefficients. |
| popPK | Seidel_2023 | irrelevant | 1 | 10 | The paper reports cytotoxicity EC50 values and gene expression changes in an in vitro test, but does not report any toxicokinetic parameters such as clearance, half-life, or partition coefficients. |
| popPK | Senta_2020 | irrelevant | 1 | 0 | The paper is a review on wastewater-based epidemiology that cites propylparaben pharmacokinetic studies but reports no quantitative toxicokinetic parameters for it, noting that oxidized metabolite excretion rates are not yet identified. |
| popPK | Shahbazi_2014 | irrelevant | 0 | 0 | Propylparaben is used solely as an internal standard for the quantification of pomalidomide; no kinetic parameters are reported for propylparaben. |
| popPK | Shekhar_2017 | irrelevant | 1 | 0 | The paper is an exposure study reporting measured concentrations of propylparaben in human blood and amniotic fluid, but does not report quantitative toxicokinetic parameters such as half-lives, clearance rates, or partition coefficients. |
| popPK | Sun_2026 | irrelevant | 0 | 0 | The paper reports urinary biomarker concentrations (exposure markers) rather than toxicokinetic parameters like half-life, clearance, or volume of distribution. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The paper is an exposure study reporting urinary concentrations and estimated daily intakes, not toxicokinetic parameters like half-lives or clearance rates. |
| popPK | Watkins_2017 | irrelevant | 1 | 0 | Propylparaben is used as an excipient/inhibitor to enhance the bioavailability of Tenofovir Disoproxil Fumarate (TDF); the kinetic parameters reported are for TDF and Tenofovir, not propylparaben. |
| popPK | Xu_2024 | irrelevant | 1 | 2 | The paper reports environmental contamination levels and dietary exposure estimates in crayfish, not toxicokinetic parameters like half-lives or clearance rates for propylparaben disposition. |
| popPK | Xue_2024 | irrelevant | 0 | 0 | The paper is an analytical method development study for measuring concentrations of propylparaben and other compounds in urine, reporting no toxicokinetic parameters such as half-life, clearance, or partition coefficients. |
| popPK | Yoshida_2024 | irrelevant | 0 | 0 | This is an epidemiological exposure study reporting urinary concentrations and estimated daily intakes, with no kinetic parameters such as half-lives, clearance, or partition coefficients for propylparaben. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpropylparaben%5D&body=Drug%3A%20propylparaben%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_propylparaben/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-15 21:07 UTC</sub>
