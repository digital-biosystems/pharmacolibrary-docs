<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Cigarette toxins&quot;,&quot;href&quot;:&quot;toxins/CIG.md&quot;},{&quot;label&quot;:&quot;Benzo[k]fluoranthene&quot;}]"></div>

# Benzo[k]fluoranthene

- **generic name:** Benzo[k]fluoranthene
- **T3DB:** [T3D0062](http://www.t3db.ca/toxins/T3D0062) · **PubChem:** [CID 9158](https://pubchem.ncbi.nlm.nih.gov/compound/9158)

## About

Benzo[k]fluoranthene is one of over 100 different polycyclic aromatic hydrocarbons (PAHs). PAHs are chemicals that are formed during the incomplete burning organic substances, such as fossil fuels. They are usually found as a mixture containing two or more of these compounds. …

- **Category:** Cigarette Toxin, Industrial/Workplace Toxin, Pollutant, Food Toxin, Natural Toxin
- **Route of exposure:** oral, inhalation
- **Sources and uses:** PAHs are released into the environment via the combustion of fossil fuels, coke oven emissions and vehicle exhausts, as well as naturally from forest fires and volcanic eruptions. PAHs from these sources may contaminate nearly water systems. …
- **Mechanism of toxicity:** The ability of PAH's to bind to blood proteins such as albumin allows them to be transported throughout the body. Many PAH's induce the expression of cytochrome P450 enzymes, especially CYP1A1, CYP1A2, and CYP1B1, by binding to the aryl hydrocarbon receptor or glycine N-methyltransferase protein. …
- **Health effects:** PAHs are carcinogens and have been associated with the increased risk of skin, respiratory tract, bladder, stomach, and kidney cancers. They may also cause reproductive effects and depress the immune system.
- **Carcinogenicity:** IARC group 2B, possibly carcinogenic to humans.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D0062">T3DB T3D0062</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 207-08-9</small></p>

## popPK records

_not available_

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from an LLM reading of the title and abstract by qwen3.8-flash-next, p(non-human) 1.00).">fish</span> | **AIP** | `Q321` · EC50 | target | [Perone_2026](drugs/toxin_benzokfluoranthene/pgx_Perone_2026_AIP_Q321.md) | Perone DM et al., Aip mutation leads to significant alter…, Frontiers in toxicology (2026) | [10.3389/ftox.2026.1875384](https://doi.org/10.3389/ftox.2026.1875384) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=benzokfluoranthene).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: AIP (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-12 19:24 | 8:44 | 0/0/0 | 0/0/0 | 0/0/1 | 335,909/9,056 | einfracz / qwen3.8-flash-next | 11 | 2/9 | 11/0 | 0 |

## Coverage

- **PubMed hits:** 55 matched, 55 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_7 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Grova_2017.pdf` | Grova N et al., New insights into urine-based assessmen…, Environmental pollution (Ba… (2017) | popPK | 7 | [10.1016/j.envpol.2017.03.060](https://doi.org/10.1016/j.envpol.2017.03.060) | [28575812](https://pubmed.ncbi.nlm.nih.gov/28575812) | The study reports urinary elimination kinetics for 8-OH-benzo[k]fluoranthene (a benzokfluoranthene metabolite) in rats, but the provided evidence contains no specific numeric values (e.g., half-lives, rate constants), only qualitative descriptions of profiles. |
| `Franco_2022.pdf` | Franco ME et al., Reduced biotransformation of polycyclic…, The Science of the total en… (2022) | popPK | 6 | [10.1016/j.scitotenv.2021.150854](https://doi.org/10.1016/j.scitotenv.2021.150854) | [34655636](https://pubmed.ncbi.nlm.nih.gov/34655636) | The paper reports hepatic clearance rates for benzo[k]fluoranthene in fish, which are quantitative kinetic parameters, but no specific numeric values are present in the provided evidence text. |
| `Basu_2001.pdf` | Basu N et al., Ethoxyresorufin-O-deethylase induction…, Environmental toxicology an… (2001) | pd | 5 |  | [11392134](https://www.ncbi.nlm.nih.gov/pubmed/11392134) | metadata signals extractable PD data (exposure-response) |
| `Bosveld_2002.pdf` | Bosveld AT et al., In vitro EROD induction equivalency fac…, Chemosphere (2002) | pd | 4 | [10.1016/s0045-6535(02)00161-3](https://doi.org/10.1016/s0045-6535(02)00161-3) | [12243332](https://www.ncbi.nlm.nih.gov/pubmed/12243332) | metadata signals extractable PD data (EC50) |
| `Ziccardi_2002.pdf` | Ziccardi MH et al., Application of the luciferase recombina…, Environmental toxicology an… (2002) | pd | 4 |  | [12371477](https://www.ncbi.nlm.nih.gov/pubmed/12371477) | metadata signals extractable PD data (EC50) |
| `Hessel_2013.pdf` | Hessel S et al., Polycyclic aromatic hydrocarbons in foo…, Food and chemical toxicolog… (2013) | pgx | 8 | [10.1016/j.fct.2013.10.007](https://doi.org/10.1016/j.fct.2013.10.007) | [24140465](https://www.ncbi.nlm.nih.gov/pubmed/24140465) | metadata signals extractable PGX data (ABCG2, PK/PD-context) |
| `Vakharia_2001.pdf` | Vakharia DD et al., Effect of metals on polycyclic aromatic…, Toxicology and applied phar… (2001) | pgx | 7 | [10.1006/taap.2000.9087](https://doi.org/10.1006/taap.2000.9087) | [11162773](https://www.ncbi.nlm.nih.gov/pubmed/11162773) | metadata signals extractable PGX data (CYP1A1, PK/PD-context) |

<sub>queue written 2026-11-12 19:23 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Almeda_2013 | irrelevant | 0 | 0 | The paper reports bioaccumulation factors (BAF) and mortality (LC50) but does not report toxicokinetic parameters such as rate constants, half-lives, or clearance for benzo[k]fluoranthene. |
| popPK | Alnafisi_2007 | irrelevant | 0 | 0 | The paper describes a yeast-based bioassay for receptor activation and lacks any quantitative toxicokinetic parameters or biological disposition data. |
| popPK | Arif_1996 | irrelevant | 1 | 0 | The paper reports DNA adduct levels (outcome/biomarker) but no quantitative kinetic parameters such as half-lives, clearance rates, or partition coefficients for benzokfluoranthene. |
| popPK | Barbosa_2018 | irrelevant | 0 | 0 | The paper is an analytical chemistry study measuring contaminant concentrations in seafood before and after cooking, with no toxicokinetic parameters reported. |
| popPK | Basu_2001 | irrelevant | 1 | 1 | The paper studies enzyme induction (EROD activity) and equivalence factors, not toxicokinetic parameters like absorption, distribution, metabolism, or excretion rates/constants. |
| popPK | Billiard_2004 | irrelevant | 0 | 0 | The paper reports EC50 values for CYP1A induction potency, which are pharmacodynamic/toxicodynamic metrics, not toxicokinetic parameters (no half-lives, clearance, or volume of distribution). |
| popPK | Boehler_2018 | irrelevant | 0 | 0 | The paper reports EROD induction as a biomarker for CYP1A activity but provides no quantitative toxicokinetic parameters (such as half-lives, clearance, or partition coefficients) for benzokfluoranthene. |
| popPK | Bosveld_2002 | irrelevant | 0 | 0 | The paper reports EROD induction equivalency factors and dose-response metrics in an in vitro cell line, which are pharmacodynamic/toxicodynamic potency measures, not quantitative toxicokinetic parameters (absorption, distribution, metabolism, or excretion rates/coefficients). |
| popPK | Brunström_1991 | irrelevant | 1 | 0 | The paper reports LD50 toxicity values and EROD induction, which are toxicodynamic endpoints, not quantitative toxicokinetic parameters like half-lives, clearance, or partition coefficients. |
| popPK | Chaloupka_1995 | irrelevant | 0 | 0 | The paper investigates gene expression induction (Cyp1a-1/2) rather than quantitative toxicokinetic parameters such as half-lives, clearance, or partition coefficients. |
| PGx | Chaloupka_1995 | not_relevant | 0 | 0 | The study investigates enzyme induction (PD) by chemical mixtures in mice, not the effect of human gene variants on the PK/PD of benzokfluoranthene. |
| popPK | Cochard_2021 | irrelevant | 0 | 0 | The study measures environmental concentrations of PAHs in honeybees for pollution biomonitoring, not toxicokinetic parameters like absorption, distribution, or elimination rates. |
| popPK | Deutsch-Wenzel_1983 | irrelevant | 0 | 0 | The paper reports carcinogenic potency and dose-response relationships from a lung implantation study, but contains no quantitative toxicokinetic parameters (e.g., half-life, partition coefficients, rate constants) for benzokfluoranthene. |
| popPK | Distor_2026 | irrelevant | 0 | 0 | The paper reports cytotoxicity LC50 values and gene expression data in epithelial cell lines, which are not toxicokinetic parameters. |
| PGx | Ebert_2005 | not_relevant | 0 | 0 | The paper describes the role of a transporter protein (BCRP) in xenobiotic efflux and its induction by ligands, but does not report on genetic variants affecting PK/PD parameters of benzo[k]fluoranthene; the drug itself is used as an inducer, not the subject of genotype-specific PK analysis. |
| popPK | Ericson_2000 | irrelevant | 2 | 0 | The paper reports DNA adduct levels and binding indices, which are biomarkers of internal dose or effect, but does not report quantitative toxicokinetic parameters such as half-lives, clearance, or partition coefficients. |
| popPK | Fasano_2018 | irrelevant | 1 | 0 | The paper reports environmental occurrence and dietary exposure concentrations of benz[k]fluoranthene, not quantitative toxicokinetic parameters. |
| popPK | Franci_2018 | irrelevant | 0 | 0 | The paper reports LD50 values (toxicity/dose-response) but contains no quantitative toxicokinetic parameters such as clearance, half-life, or volume of distribution. |
| popPK | Franco_2022 | relevant | 6 | 0 | The paper reports hepatic clearance rates for benzo[k]fluoranthene in fish, which are quantitative kinetic parameters, but no specific numeric values are present in the provided evidence text. |
| popPK | Galvão_2014 | irrelevant | 0 | 0 | The paper reports environmental concentrations and genotoxicity results, not quantitative toxicokinetic parameters for benzokfluoranthene. |
| popPK | Grova_2017 | relevant | 7 | 1 | The study reports urinary elimination kinetics for 8-OH-benzo[k]fluoranthene (a benzokfluoranthene metabolite) in rats, but the provided evidence contains no specific numeric values (e.g., half-lives, rate constants), only qualitative descriptions of profiles. |
| popPK | Habs_1980 | irrelevant | 2 | 0 | The paper reports local carcinogenicity and potency comparisons (dose-response) but provides no quantitative toxicokinetic parameters such as half-lives, clearance, or partition coefficients for benzokfluoranthene. |
| PGx | Hessel_2013 | not_relevant | 0 | 0 | The paper focuses on Pyrene and its metabolites, not benzokfluoranthene, and discusses transporter/enzyme mechanisms without analyzing gene variant effects on PK parameters for the target drug. |
| popPK | Jo_2022 | irrelevant | 0 | 0 | The paper reports cell viability/necrosis data (XTT assay absorbance) in a placental cell line, but contains no toxicokinetic parameters (such as half-life, clearance, partition coefficients, or rate constants) for benzokfluoranthene. |
| popPK | Lee_2004 | irrelevant | 1 | 0 | The paper focuses on an environmental multimedia model (POPsME) and environmental concentration ratios, providing no quantitative biological toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for benzokfluoranthene in organisms. |
| PGx | Liu_2001 | not_relevant | 0 | 0 | The study characterizes CYP1A1 vs CYP1A2 expression in hepatocytes induced by benzo[k]fluoranthene but does not report how a specific gene variant/phenotype changes a PK or PD parameter of the compound itself. |
| popPK | Machala_1996 | irrelevant | 0 | 0 | The paper reports on enzyme induction activities (EROD, PROD, ECOD) rather than quantitative toxicokinetic parameters such as clearance, volume of distribution, half-life, or partition coefficients. |
| popPK | Marrucci_2013 | irrelevant | 0 | 0 | The paper reports environmental concentrations of PAHs in seawater and does not determine or report any toxicokinetic parameters (rates, constants, partition coefficients) for benzokfluoranthene in humans or animals. |
| popPK | Morales-Caselles_2008 | irrelevant | 0 | 0 | The paper reports bioaccumulation levels and LC50 values for PAHs in polychaetes but does not provide quantitative toxicokinetic parameters (e.g., rate constants, half-lives, partition coefficients) for benzokfluoranthene. |
| popPK | Ogali_2007 | irrelevant | 0 | 0 | The paper reports acute toxicity (LC50) of a complex oil mixture and mentions benzokfluoranthene only in a list of detected compounds by solubility, with no toxicokinetic parameters for benzokfluoranthene itself. |
| popPK | Pan_2005 | irrelevant | 1 | 0 | The paper reports biochemical biomarker responses (enzyme activities) in scallops, not quantitative toxicokinetic parameters such as half-lives, clearance rates, or partition coefficients. |
| popPK | Pérez_2022 | irrelevant | 0 | 0 | The paper is an epidemiological exposure-response study using Bayesian networks on population health data and atmospheric measurements, reporting no toxicokinetic parameters (such as half-lives, partition coefficients, or clearance rates) for benzokfluoranthene. |
| popPK | Ramesh_2014 | irrelevant | 0 | 0 | The paper reports static serum concentrations of PAHs (including benzo(k)fluoranthene) in autopsy samples but does not provide any kinetic parameters such as half-lives, clearance rates, or partition coefficients. |
| popPK | Richter-Reichhelm_1985 | irrelevant | 0 | 0 | The paper reports morphological effects (metaplasia, dysplasia) from in vitro exposure but contains no quantitative toxicokinetic parameters such as half-lives, clearance, or partition coefficients. |
| popPK | Roemer_2012 | irrelevant | 0 | 0 | The paper is a review about the impact of sugars as cigarette tobacco ingredients, where benzokfluoranthene is mentioned only as a smoke constituent whose yield might change, with no toxicokinetic parameters reported. |
| popPK | Shimada_2003 | irrelevant | 1 | 0 | The paper reports enzyme induction potency (CYP1A1/1B1) but contains no quantitative toxicokinetic parameters (rates, half-lives, partition coefficients) for benzokfluoranthene. |
| popPK | Silkworth_1995 | irrelevant | 0 | 0 | The paper reports immunotoxicity and enzyme induction outcomes but contains no quantitative toxicokinetic parameters (e.g., half-lives, clearance, partition coefficients) for benzokfluoranthene. |
| popPK | Sinaei_2013 | irrelevant | 0 | 0 | The paper describes an in vitro membrane stability assay and reports no quantitative toxicokinetic parameters (such as half-lives, rate constants, or partition coefficients) for benzokfluoranthene. |
| popPK | Srogi_2007 | irrelevant | 0 | 0 | The paper is a review of environmental concentrations and biomonitoring, containing no quantitative toxicokinetic parameters for benzokfluoranthene. |
| popPK | Suzuki_2007 | irrelevant | 0 | 0 | The paper is an exposure assessment study measuring intake amounts (diet vs. inhalation) and biomarkers in a population, but reports no quantitative toxicokinetic parameters such as clearance, half-life, volume of distribution, or partition coefficients. |
| PGx | Tao_2025 | not_relevant | 2 | 1 | The paper reports a gene-environment interaction (CYP1A1 SNP x PAH exposure) on asthma susceptibility and serum biomarker levels, but does not report pharmacokinetic or pharmacodynamic parameters (e.g., clearance, AUC, Cmax) of benzokfluoranthene as a drug in a pharmacological context. |
| popPK | Tarantini_2011 | irrelevant | 1 | 0 | The paper focuses on DNA adduct formation and genotoxicity modulation of benzo[a]pyrene by other PAHs in HepG2 cells, reporting no quantitative toxicokinetic parameters (rates, constants, half-lives) for benzo[k]fluoranthene. |
| PGx | Vakharia_2001 | not_relevant | 0 | 0 | The study investigates the effect of environmental metals on PAH-induced enzyme activity (pharmacodynamic/biochemical), not the effect of human gene variants on benzokfluoranthene pharmacokinetics or dynamics. |
| popPK | Yerokun_2006 | irrelevant | 0 | 0 | The paper is an in vitro mechanistic study of gene expression and cell signaling with no toxicokinetic parameters for benzokfluoranthene. |
| popPK | Ziccardi_2002 | irrelevant | 0 | 0 | The paper reports toxicodynamic potency (EC50) in a cell culture assay, not toxicokinetic parameters such as half-life, clearance, or partition coefficients. |
| popPK | Świsłowski_2024 | irrelevant | 0 | 0 | The paper reports environmental biomonitoring of PAHs using moss bags, containing no toxicokinetic parameters or human/animal kinetic data for benzokfluoranthene. |
| PGx | Šimečková_2022 | not_relevant | 0 | 0 | The paper reports on the in vitro toxicological effects of PAHs on nuclear receptors and gene expression, but does not investigate pharmacogenomic effects (gene variants) on pharmacokinetic or pharmacodynamic parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbenzokfluoranthene%5D&body=Drug%3A%20benzokfluoranthene%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_benzokfluoranthene/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
