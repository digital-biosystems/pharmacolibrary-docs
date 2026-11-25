<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;agomelatine&quot;}]"></div>

# agomelatine

- **generic name:** agomelatine
- **ATC codes:** `N06AX22`
- **DrugBank:** [DB06594](https://go.drugbank.com/drugs/DB06594) · **PubChem:** [CID 82148](https://pubchem.ncbi.nlm.nih.gov/compound/82148)
- **molar mass:** 243.301 g/mol (C15H17NO2) — DrugBank
- **groups:** approved, investigational

## About

Agomelatine is an atypical antidepressant prescribed for major depressive disorder and generalized anxiety disorder. It is administered orally in tablet form. The medication is authorized in the European Union and Australia, but not approved for use in the United States.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q395229](https://www.wikidata.org/wiki/Q395229), [Wikipedia](https://en.wikipedia.org/wiki/Agomelatine?oldid=1384683858) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span> | [Martínez-Águila_2013_IOP](drugs/drug_agomelatine/pd_Mart_nez_guila_2013_IOP.md) | intraocular pressure ← agomelatine · direct sigmoid Emax (Hill) effect | — | Martínez-Águila A et al., Melatonin analogue agomelatine reduces…, European journal of pharmac… (2013) | [10.1016/j.ejphar.2012.12.009](https://doi.org/10.1016/j.ejphar.2012.12.009) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">rat</span> | [Yang_2016_firing_rates](drugs/drug_agomelatine/pd_Yang_2016_firing_rates.md) | firing rates ← agomelatine · direct sigmoid Emax (Hill) effect | — | Yang J et al., Agomelatine affects rat suprachiasmatic…, Life sciences (2016) | [10.1016/j.lfs.2016.04.035](https://doi.org/10.1016/j.lfs.2016.04.035) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.">Not simulated</span> <span class="pk-badge pk-badge--neutral" title="Adverse-reaction risk allele; no quantitative PK/PD parameter effect.">safety allele</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | **CYP2C9** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Fang_2026](drugs/drug_agomelatine/pgx_Fang_2026_CYP2C9_safety.md) | Fang P et al., Effect of Cytochrome P450 2C9 genetic p…, PeerJ (2026) | [10.7717/peerj.20973](https://doi.org/10.7717/peerj.20973) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP1A2** | `Q88` · AUC | metabolism | [Wang_2021](drugs/drug_agomelatine/pgx_Wang_2021_CYP1A2_Q88.md) | Wang S et al., CYP1A2 polymorphism may contribute to a…, Medicine (2021) | [10.1097/MD.0000000000027736](https://doi.org/10.1097/MD.0000000000027736) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 16:34 | 0:03 | 0/0/0 | 2/0/0 | 1/0/1 | 3,428/156 | einfracz / qwen3.8-27b | 11 | 4/15 | 11/0 | 0 |

## Coverage

- **PubMed hits:** 89 matched, 78 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yang_2016.pdf` | Yang J et al., Agomelatine affects rat suprachiasmatic…, Life sciences (2016) | pd | 4 | [10.1016/j.lfs.2016.04.035](https://doi.org/10.1016/j.lfs.2016.04.035) | [27269050](https://www.ncbi.nlm.nih.gov/pubmed/27269050) | metadata signals extractable PD data (IC50) |
| `Saiz-Rodríguez_2018.pdf` | Saiz-Rodríguez M et al., Effect of ABCB1 C3435T Polymorphism on…, Basic & clinical pharmacolo… (2018) | pgx | 8 | [10.1111/bcpt.13031](https://doi.org/10.1111/bcpt.13031) | [29723928](https://www.ncbi.nlm.nih.gov/pubmed/29723928) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Englisch_2019.pdf` | Englisch S et al., Response to Agomelatine Treatment is In…, Pharmacopsychiatry (2019) | pgx | 7 | [10.1055/a-0606-5240](https://doi.org/10.1055/a-0606-5240) | [29734455](https://www.ncbi.nlm.nih.gov/pubmed/29734455) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Spina_2012.pdf` | Spina E et al., Clinically significant drug interaction…, CNS drugs (2012) | pgx | 7 | [10.2165/11594710-000000000-00000](https://doi.org/10.2165/11594710-000000000-00000) | [22171584](https://www.ncbi.nlm.nih.gov/pubmed/22171584) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |

<sub>queue written 2026-11-23 16:34 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adair_2023 | irrelevant | 0 | 0 | The paper is a clinical efficacy study of vortioxetine where agomelatine serves only as an active comparator, and no pharmacokinetic parameters are reported. |
| PD | Adair_2023 | not_relevant | 0 | 0 | The paper focuses on vortioxetine and only mentions agomelatine as an active comparator in a separate analysis without providing any pharmacodynamic or exposure-response data for agomelatine. |
| popPK | Bertin_2023 | irrelevant | 0 | 0 | This is an in vitro drug-combination synergy screening study with no pharmacokinetic parameters for agomelatine. |
| PD | Bertin_2023 | not_relevant | 0 | 0 | The paper focuses on a machine learning method for identifying synergistic drug combinations in vitro and does not report any pharmacodynamic or exposure-response analysis for agomelatine. |
| popPK | Bhutada_2013 | irrelevant | 0 | 0 | The study is a pharmacological/behavioral assessment in mice, containing no pharmacokinetic parameter reporting. |
| PD | Bhutada_2013 | not_relevant | 3 | 2 | The paper reports qualitative dose-dependent effects and specific dose-response points for agomelatine in a behavioral model, but it does not provide a formal PK/PD model, concentration-effect curve, or derived numeric PD parameters (e.g., EC50, Emax) for the drug itself. |
| PGx | Bhutada_2013 | not_relevant | 0 | 0 | The paper describes pharmacological interactions in a mouse model and does not involve genetic variants or pharmacogenomics. |
| popPK | Bobrov_2010 | irrelevant | 0 | 0 | The paper is a clinical efficacy study regarding depression treatment outcomes and does not report any pharmacokinetic parameters for agomelatine. |
| PGx | Bobrov_2010 | not_relevant | 0 | 0 | The paper analyzes clinical predictors for response to valdoxan (agomelatine) but contains no data on gene variants, genotypes, or pharmacogenomic effects on PK/PD parameters. |
| popPK | Cerou_2019 | irrelevant | 0 | 0 | This is a pharmacodynamic/disease-progression (IRT) model of agomelatine's effect on depression, with no PK disposition parameters (CL, V, ka, etc.) reported. |
| popPK | Chen_2024 | irrelevant | 0 | 0 | This is a population-PK study of quetiapine, not agomelatine; agomelatine does not appear at all. |
| PD | Chen_2024 | not_relevant | 0 | 0 | The paper focuses on population pharmacokinetics (PPK) and drug-drug interactions for quetiapine, reporting no pharmacodynamic (PD) or exposure-response relationship. |
| popPK | Cheng_2020 | irrelevant | 0 | 0 | Model-based meta-analysis of antidepressant efficacy (dose-effect on depression scales), not a PK study; no clearance, volume, or absorption parameters for agomelatine are reported. |
| PD | Cheng_2020 | not_relevant | 2 | 1 | The paper is a meta-analysis that explicitly states no significant dose-response relationship was observed for the antidepressants, and it does not provide specific numeric PD parameters (like Emax or EC50) for agomelatine. |
| popPK | De_2014 | irrelevant | 0 | 0 | The paper is a clinical case report focused on drug-drug interaction management (CYP2D6) and does not report any pharmacokinetic parameters for agomelatine. |
| PGx | De_2014 | not_relevant | 0 | 0 | The paper is a case report focusing on drug-drug interactions between agomelatine and tamoxifen, with no investigation into the effect of specific gene variants or genotypes on agomelatine's pharmacokinetics or pharmacodynamics. |
| popPK | ElKady_2018 | relevant | 5 | 0 | The paper reports a population PK study for agomelatine in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided text. |
| PD | ElKady_2018 | not_relevant | 0 | 0 | The study focuses exclusively on pharmacokinetic (PK) parameter comparison (Cmax, AUC) between genders and does not report any pharmacodynamic (PD) or exposure-response data. |
| PGx | ElKady_2018 | not_relevant | 0 | 0 | The study examines the effect of gender (a demographic factor) on pharmacokinetics, not the effect of a specific gene variant or genotype (pharmacogenomic factor). |
| popPK | Englisch_2019 | irrelevant | 0 | 0 | no_text gate: only 110 chars of text extracted (&lt; 400) |
| PD | Englisch_2019 | not_relevant | 0 | 0 | The paper reports that response is independent of dosage and smoking status, implying a lack of a dose-response relationship, and does not provide numeric PD parameters or concentration-effect curves. |
| PGx | Englisch_2019 | not_relevant | 0 | 0 | The paper investigates the impact of smoking status and dosage on Agomelatine response, not pharmacogenomic variants. |
| popPK | Filippova_2019 | irrelevant | 0 | 0 | The paper is a clinical review discussing efficacy and tolerability of agomelatine, with no reported pharmacokinetic parameter values. |
| PD | Filippova_2019 | not_relevant | 1 | 0 | The text is a qualitative review of agomelatine's mechanism and clinical efficacy, containing no numeric PD parameters, concentration-effect data, or dose-response curves. |
| PGx | Filippova_2019 | not_relevant | 0 | 0 | The paper reviews the general efficacy and safety of agomelatine but does not report on pharmacogenomic effects or genotype-specific PK/PD changes. |
| popPK | Fornaro_2010 | irrelevant | 2 | 3 | The paper is a systematic review that summarizes PK parameters (half-life, Vd) from other sources rather than reporting original quantitative disposition data or population PK models. |
| PD | Fornaro_2010 | not_relevant | 1 | 0 | The paper is a systematic review that summarizes clinical and pre-clinical evidence but does not present original data, perform PK/PD modeling, or report specific numeric PD parameters (e.g., Emax, EC50) for agomelatine. |
| popPK | Gahr_2014 | relevant | 4 | 3 | The paper is a narrative review that reports some quantitative PK parameters (clearance ~1100 ml/min, half-lives 0.2/1.4h, bioavailability 3-4%) for agomelatine, but it lacks a full compartmental or population-PK model with volume and intercompartmental clearance values. |
| PD | Gahr_2014 | not_relevant | 1 | 0 | The paper is a narrative review summarizing efficacy and safety data but does not present original PK/PD modeling or extractable numeric PD parameters (e.g., Emax, EC50) for agomelatine. |
| popPK | Gahr_2014_2 | irrelevant | 0 | 0 | The paper is a safety review focusing on hepatotoxicity and adverse event rates, containing no pharmacokinetic parameter values or models. |
| PGx | Gahr_2014_2 | not_relevant | 0 | 0 | The paper focuses on the safety and hepatotoxicity profile of agomelatine and does not report on pharmacogenomic variants affecting its pharmacokinetics or pharmacodynamics. |
| popPK | Gao_2023 | irrelevant | 0 | 0 | The study evaluates the toxicity and toxicokinetics of GW117, a different drug, with agomelatine mentioned only as a comparative reference. |
| PD | Gao_2023 | not_relevant | 1 | 0 | The study is a 28-day toxicity and toxicokinetics study in beagle dogs that reports qualitative dose-dependent toxicity (GI reactions) and PK parameters, but it does not provide a quantitative pharmacodynamic model or numeric PD parameters (e.g., Emax, EC50) for agomelatine or GW117. |
| PGx | Gao_2023 | not_relevant | 0 | 0 | The paper reports a 28-day toxicity study in beagle dogs for GW117 and does not investigate the impact of any gene variant on the pharmacokinetics or pharmacodynamics of agomelatine. |
| popPK | Günaydın_2019 | irrelevant | 0 | 0 | The study investigates the neurotoxic effects of agomelatine in a Parkinson's disease model and reports behavioral, biochemical, and histopathological outcomes, but provides no pharmacokinetic parameters. |
| PD | Günaydın_2019 | not_relevant | 1 | 0 | The study is a single-dose animal experiment (40 mg/kg) reporting qualitative worsening of symptoms and biochemical markers, without any concentration-effect data, multiple dose levels, or numeric PD parameters. |
| PGx | Günaydın_2019 | not_relevant | 0 | 0 | The paper describes the pharmacodynamic effects of agomelatine in a rat model of Parkinson's disease but does not report any pharmacogenomic data (gene variants/genotypes) or their influence on PK/PD parameters. |
| popPK | Hardeland_2016 | irrelevant | 2 | 0 | The paper is a narrative review comparing properties of various melatoninergic agents and does not provide original quantitative population-PK parameter values for agomelatine. |
| PGx | Hardeland_2016 | not_relevant | 5 | 2 | The paper discusses theoretical limits of agomelatine related to genetic silencing of melatonin receptors and receptor mutants, but it is a review that does not report specific, fitted quantitative pharmacogenomic effects (e.g., genotype-specific AUC or Emax changes). |
| popPK | Hayasaka_2015 | irrelevant | 0 | 0 | The paper is a meta-analysis of dose equivalency for antidepressants and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for agomelatine. |
| PD | Hayasaka_2015 | not_relevant | 1 | 0 | The paper reports dose equivalence ratios derived from clinical trial data but does not provide a pharmacodynamic model, concentration-effect curve, or numeric PD parameters (e.g., Emax, EC50) for agomelatine. |
| PGx | Hayasaka_2015 | not_relevant | 0 | 0 | The paper focuses on dose equivalence calculations for antidepressants based on RCT data and does not contain any pharmacogenomic analysis or gene-variant associations. |
| PGx | He_2018 | not_relevant | 2 | 5 | This is a drug–drug interaction study (celecoxib inhibiting agomelatine metabolism via CYP2C9), not a pharmacogenomic effect of a gene variant/genotype/phenotype on agomelatine PK/PD; CYP2C9*1 is only a recombinant enzyme source, not a genotype comparison. |
| popPK | Hengartner_2020 | irrelevant | 0 | 0 | This is a qualitative/quantitative analysis of forum narratives about antidepressant withdrawal, with no pharmacokinetic parameters for agomelatine. |
| PD | Hengartner_2020 | not_relevant | 0 | 0 | The paper is a descriptive analysis of consumer narratives regarding protracted withdrawal syndrome and does not contain any pharmacokinetic or pharmacodynamic modeling, concentration-effect data, or numeric PD parameters for agomelatine. |
| PGx | Howland_2009 | not_relevant | 0 | 0 | No pharmacogenomic effects on agomelatine PK/PD parameters are reported; only CYP1A2 inhibitor contraindication mentioned. |
| popPK | Jani_2019 | irrelevant | 0 | 0 | The paper focuses on nanoparticle formulation, ex vivo permeability, and pharmacodynamic activity (immobility time), and does not report quantitative pharmacokinetic parameters such as clearance, volume, or half-life for agomelatine. |
| PD | Jani_2019 | not_relevant | 1 | 0 | The paper reports a qualitative pharmacodynamic observation (reduction in immobility time) but provides no numeric PD parameters, concentration-effect data, or dose-response curve. |
| PGx | Jani_2019 | not_relevant | 0 | 0 | The paper focuses on nanoparticle formulation and delivery of agomelatine, reporting no gene variant or pharmacogenomic effect on PK/PD parameters. |
| popPK | Jellimann_1999 | irrelevant | 0 | 0 | The paper is a medicinal chemistry/bioassay study synthesizing melatonin receptor ligands and uses agomelatine only as a reference compound for bioactivity comparison, reporting no pharmacokinetic parameters. |
| PD | Jellimann_1999 | not_relevant | 1 | 0 | The paper focuses on the synthesis and characterization of new melatonin receptor ligands; agomelatine is mentioned only as a reference compound with no specific numeric PD parameters or exposure-response data provided for it. |
| PGx | Jellimann_1999 | not_relevant | 0 | 0 | The paper is a medicinal chemistry study on novel melatonin receptor ligands and does not investigate the influence of genetic variants on the pharmacokinetics or pharmacodynamics of agomelatine. |
| popPK | Konstantakopoulos_2020 | irrelevant | 0 | 0 | The paper is a review of the discovery and development of agomelatine focusing on pharmacodynamics, behavioral preclinical data, and clinical efficacy/safety, with no report of quantitative pharmacokinetic parameters. |
| PD | Konstantakopoulos_2020 | not_relevant | 2 | 1 | The paper is a review of the discovery and development history, providing only a qualitative summary of the pharmacodynamic profile without reporting specific numeric PD parameters or exposure-response curves. |
| PGx | Konstantakopoulos_2020 | not_relevant | 0 | 0 | The paper is a review of the discovery and development of agomelatine, focusing on mechanism of action and clinical efficacy/safety, without reporting pharmacogenomic effects of gene variants on PK/PD parameters. |
| popPK | Lalovic_2020 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for lemborexant, not agomelatine. |
| PD | Lalovic_2020 | not_relevant | 0 | 0 | The paper analyzes lemborexant, not agomelatine, and reports no exposure-response relationship for the target drug. |
| PGx | Lalovic_2020 | not_relevant | 0 | 0 | The paper focuses on lemborexant, not agomelatine. |
| popPK | Leal_2022 | irrelevant | 0 | 0 | This is a drug-drug interaction epidemiology study; agomelatine appears only as part of an interaction pair with no PK parameters reported. |
| PD | Leal_2022 | not_relevant | 0 | 0 | The paper is a large-scale epidemiological study on drug-drug interaction prevalence and adverse outcomes (mortality/readmission), not a pharmacodynamic or exposure-response analysis; it reports hazard ratios for clinical outcomes, not PD parameters like Emax or EC50. |
| popPK | Lee_2019 | irrelevant | 0 | 0 | The paper focuses on the crystallographic and thermodynamic characterization of agomelatine cocrystals, containing no pharmacokinetic data or disposition parameters. |
| PGx | Lee_2019 | not_relevant | 0 | 0 | The paper focuses on the polymorphic forms and thermodynamic properties of agomelatine cocrystals, not on pharmacogenomics or PK/PD parameters. |
| popPK | Li_2017 | relevant | 3 | 8 | The study reports non-compartmental PK parameters (Cmax, AUC, t1/2) for agomelatine in humans, but it is a bioequivalence study rather than a population-PK modeling study that estimates clearance (CL) or volume (V). |
| PGx | Li_2017 | not_relevant | 0 | 0 | The study assesses bioequivalence and PK variability in a general healthy population without analyzing specific gene variants or genotypes. |
| popPK | Liao_2016 | irrelevant | 3 | 0 | The paper describes a formulation study (cyclodextrin complex) and reports relative changes in PK metrics (AUC, Cmax) but does not provide absolute quantitative disposition parameters (CL, V, ka) for agomelatine itself. |
| PGx | Liao_2016 | not_relevant | 0 | 0 | The paper studies the effect of HP-β-cyclodextrin formulation on agomelatine PK parameters, not the effect of gene variants or genotypes. |
| popPK | Lin_2025 | irrelevant | 0 | 0 | The study is a mechanistic/behavioral investigation of agomelatine's neuroprotective effects in a Parkinson's disease rat model and does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life). |
| PD | Lin_2025 | not_relevant | 2 | 1 | The study is a preclinical animal model investigating qualitative effects and correlations, not a pharmacokinetic/pharmacodynamic (PK/PD) analysis with numeric exposure-response parameters. |
| popPK | Liu_2016 | irrelevant | 2 | 0 | The study focuses on in vitro metabolism and metabolite identification in mice, not on quantitative pharmacokinetic parameters like clearance or volume for agomelatine. |
| PGx | Liu_2016 | not_relevant | 0 | 0 | The paper characterizes the metabolic pathways and enzymes of agomelatine but does not report on gene variants/genotypes affecting PK or PD parameters. |
| popPK | Martínez-Águila_2013 | irrelevant | 0 | 0 | The study investigates the intraocular pressure-lowering effect (pharmacodynamics) of agomelatine in rabbits, not its systemic or ocular pharmacokinetic parameters (e.g., clearance, volume, half-life). |
| PGx | Martínez-Águila_2013 | not_relevant | 0 | 0 | The paper reports the pharmacodynamic effect of agomelatine on intraocular pressure in rabbits but does not investigate any gene variants or genotypes. |
| popPK | Naveed_2022 | irrelevant | 2 | 0 | This is a narrative review focused on clinical efficacy and pharmacodynamics; it mentions pharmacokinetics as a search term but provides no quantitative PK parameter values (CL, V, t1/2, etc.) for agomelatine. |
| PD | Naveed_2022 | not_relevant | 1 | 0 | The text is a qualitative review discussing the mechanism of action and general properties of agomelatine without reporting any specific numeric pharmacodynamic parameters, exposure-response data, or dose-effect curves. |
| PGx | Naveed_2022 | not_relevant | 0 | 0 | The paper is a general review of agomelatine's mechanism and efficacy, with no report of pharmacogenomic effects on PK or PD parameters. |
| popPK | Nemr_2022 | irrelevant | 0 | 0 | The study focuses on the formulation and in vitro release of agomelatine bilosomes for ocular delivery, reporting no systemic pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Nemr_2023 | irrelevant | 2 | 0 | The study focuses on in-vivo ocular pharmacodynamics (intraocular pressure) and formulation properties, not systemic population pharmacokinetic parameters (CL, V, etc.). |
| PD | Nemr_2023 | not_relevant | 3 | 2 | The paper reports in vivo pharmacodynamic endpoints (IOP reduction) for a formulation but does not provide a concentration-effect or dose-response model with numeric PD parameters like Emax or EC50. |
| PGx | Nemr_2023 | not_relevant | 0 | 0 | The study focuses on formulation development and pharmacokinetics/pharmacodynamics of agomelatine in animals, with no mention of genetic variants or pharmacogenomics. |
| popPK | Owen_2009 | irrelevant | 2 | 1 | This is a narrative review of clinical trials discussing efficacy and general pharmacological profile, lacking original quantitative population PK parameter estimation (CL, V, ka) for agomelatine. |
| PGx | Owen_2009 | not_relevant | 0 | 0 | The text describes general pharmacokinetics and clinical efficacy of agomelatine but does not mention any gene variants, genotypes, or pharmacogenomic effects on PK or PD parameters. |
| popPK | Perugi_2015 | irrelevant | 2 | 0 | This is a narrative review discussing agomelatine's role in OCD and mentioning its pharmacokinetics generally, but it does not provide original quantitative disposition parameter values. |
| PD | Perugi_2015 | not_relevant | 2 | 0 | The text is a review/expert opinion discussing the pharmacodynamics of agomelatine qualitatively without providing specific numeric PD parameters or concentration-effect data. |
| PGx | Perugi_2015 | not_relevant | 1 | 0 | The paper is a narrative review on agomelatine for OCD and does not report pharmacogenomic studies linking gene variants to pharmacokinetic or pharmacodynamic parameters. |
| popPK | Poleszak_2016 | irrelevant | 0 | 0 | This is a pharmacodynamic study in mice measuring drug levels to rule out pharmacokinetic changes, not a study reporting quantitative PK parameters like clearance or volume. |
| PD | Poleszak_2016 | not_relevant | 1 | 0 | The paper reports qualitative behavioral effects and drug concentrations but does not provide numeric PD parameters or an exposure-response curve. |
| PGx | Poleszak_2016 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (caffeine and agomelatine) in mice, not pharmacogenomic effects involving gene variants. |
| popPK | Prajapati_2018 | relevant | 4 | 2 | The study reports PK parameters (AUC, Cmax) for agomelatine in rats, but lacks compartmental model parameters (CL, V, ka) and the specific numeric values for Cmax/Tmax are in a table not fully provided in the evidence. |
| PD | Prajapati_2018 | not_relevant | 2 | 0 | The paper focuses on formulation and PK (bioavailability enhancement) with only a qualitative mention of pharmacodynamic efficacy, lacking any numeric concentration-effect or dose-response parameters. |
| popPK | Saiz-Rodríguez_2018 | irrelevant | 0 | 0 | The study reports that the ABCB1 polymorphism had no effect on agomelatine pharmacokinetics and provides no quantitative disposition parameter values for the drug in the evidence. |
| PGx | Saiz-Rodríguez_2018 | not_relevant | 0 | 0 | The paper explicitly states that the ABCB1 C3435T polymorphism had no effect on agomelatine pharmacokinetics. |
| popPK | Saiz-Rodríguez_2019 | relevant | 10 | 2 | The study reports pharmacokinetic parameters (clearance, AUC, Tmax) for agomelatine in humans, but the specific numeric values are not listed in the provided evidence. |
| PD | Saiz-Rodríguez_2019 | not_relevant | 1 | 0 | The study focuses on pharmacokinetic parameters (clearance, AUC, Tmax) influenced by genotypes and explicitly states that agomelatine did not produce changes in pharmacodynamic endpoints (blood pressure, heart rate, QT interval), providing no numeric PD parameters or exposure-response relationship. |
| popPK | Shagiakhmetov_2017 | irrelevant | 0 | 0 | The text is a mechanistic review of antidepressive effects and does not contain quantitative pharmacokinetic parameters for agomelatine. |
| PD | Shagiakhmetov_2017 | not_relevant | 1 | 0 | The text is a qualitative review of the mechanism of action and clinical efficacy, containing no numeric PD parameters, concentration-effect curves, or PK/PD modeling data. |
| PGx | Shagiakhmetov_2017 | not_relevant | 0 | 0 | The paper describes the general mechanism of action of agomelatine and its clinical efficacy profile, but does not report any pharmacogenomic effects (gene variants) on its pharmacokinetic or pharmacodynamic parameters. |
| popPK | Socała_2017 | irrelevant | 1 | 0 | The study is a behavioral pharmacology experiment in mice that measures drug concentrations in serum and brain to assess interactions, but it does not report quantitative pharmacokinetic parameters (CL, V, ka, t1/2) or a compartmental model for agomelatine. |
| PD | Socała_2017 | not_relevant | 2 | 1 | The study reports qualitative changes in immobility time and drug concentrations but does not provide numeric PD parameters (e.g., Emax, EC50) or a fitted concentration-effect curve for agomelatine. |
| popPK | Song_2014 | relevant | 7 | 0 | The paper reports a PK study of agomelatine, but the specific numeric parameter values (AUC, Cmax) are not present in the extracted evidence, only statistical comparisons are described. |
| popPK | Souza_2018 | irrelevant | 0 | 0 | The study investigates the behavioral and circadian effects of agomelatine in rats, not its pharmacokinetic disposition parameters. |
| PD | Souza_2018 | not_relevant | 1 | 0 | The study is a qualitative behavioral pharmacology experiment in rats that reports no plasma concentrations, PK data, or quantitative dose-response parameters (e.g., EC50, Emax) for agomelatine. |
| PGx | Souza_2018 | not_relevant | 0 | 0 | The paper evaluates the therapeutic effect of agomelatine on circadian rhythms and depressive behavior in a Parkinson's disease animal model, and contains no data on how genetic variants influence the pharmacokinetics or pharmacodynamics of agomelatine. |
| popPK | Spina_2012 | irrelevant | 0 | 0 | The paper is a review of drug interactions and does not report original quantitative pharmacokinetic parameters for agomelatine. |
| PGx | Spina_2012 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions (CYP inhibition/induction) for newer antidepressants and does not report on pharmacogenomic effects of gene variants on PK/PD parameters. |
| popPK | Sundell_2020 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of ethambutol, not agomelatine. |
| PD | Sundell_2020 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics and pharmacogenetics of ethambutol, not agomelatine, and does not report any pharmacodynamic or exposure-response relationships. |
| PGx | Sundell_2020 | not_relevant | 0 | 0 | The study reports pharmacogenomic effects on ethambutol, not agomelatine. |
| popPK | Tawfik_2025 | irrelevant | 1 | 0 | The study focuses on the formulation and pharmacodynamics (IOP reduction) of agomelatine leciplexes, reporting no quantitative pharmacokinetic disposition parameters (CL, V, ka) for the drug. |
| PD | Tawfik_2025 | not_relevant | 3 | 2 | The paper reports a single maximum effect value (74.2% IOP reduction) and residence time for a specific formulation compared to a control, but lacks concentration-effect data, dose-response curves, or numeric PD parameters (Emax, EC50) required for an extractable PD relationship. |
| popPK | Tu_2014 | irrelevant | 0 | 0 | The paper is a case report on the adverse effect (hypomania) of agomelatine, not a pharmacokinetic study with quantitative disposition parameters. |
| PD | Tu_2014 | not_relevant | 0 | 0 | The paper is a single case report of an adverse event (hypomania) and does not contain any pharmacokinetic data, concentration-effect analysis, or numeric PD parameters. |
| PGx | Tu_2014 | not_relevant | 0 | 0 | The paper is a case report of a clinical adverse event (hypomania) following drug switching and does not report any pharmacogenomic data or genetic variant analysis. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The paper describes a mechanistic study on agomelatine's effect on glymphatic function and aquaporin-4 polarization in Parkinson's disease, reporting no quantitative pharmacokinetic parameters (CL, V, ka, etc.). |
| PD | Wang_2026 | not_relevant | 2 | 1 | The paper reports brain concentrations of agomelatine and qualitative/semi-quantitative effects on pathology and glymphatic function, but does not provide a dose-response curve, Emax/EC50 parameters, or a formal PK/PD model linking exposure to effect. |
| PGx | Wang_2026 | not_relevant | 0 | 0 | The paper investigates the mechanism of agomelatine's effect on glymphatic function in Parkinson's disease and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Wen_2025 | irrelevant | 0 | 0 | The paper is a network meta-analysis of gastrointestinal adverse effects in clinical trials, not a pharmacokinetic study, and contains no PK parameters for agomelatine. |
| PGx | Wen_2025 | not_relevant | 0 | 0 | The paper is a meta-analysis of gastrointestinal side effects and does not report pharmacogenomic effects on PK or PD parameters. |
| popPK | Xie_2019 | relevant | 10 | 3 | The paper reports a population PK model for agomelatine in humans, but only variability metrics (IIV 130.8%) are provided in the text, while specific central estimates for clearance, volume, and half-life are likely in figures or supplementary material not included in the evidence. |
| PD | Xie_2019 | not_relevant | 0 | 0 | The paper focuses exclusively on the population pharmacokinetic (PK) modeling of agomelatine and its metabolites, with no mention of pharmacodynamic (PD) endpoints, exposure-response relationships, or dose-effect analyses. |
| PGx | Xie_2019 | not_relevant | 0 | 0 | The paper characterizes population PK in Chinese healthy volunteers and simulates physiological changes (liver disease/shunting) but does not report effects of specific gene variants or genotypes. |
| popPK | Yang_2016 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study on SCN neurons investigating receptor effects (IC50 for firing rate suppression), not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Yang_2016 | not_relevant | 0 | 0 | The study does not report any gene variant, genotype, or phenotype affecting the pharmacokinetic or pharmacodynamic parameters of agomelatine. |
| popPK | Yao_2025 | irrelevant | 0 | 0 | The paper is a review of insulin resistance mechanisms and does not report any pharmacokinetic parameters for agomelatine. |
| PGx | Yao_2025 | not_relevant | 1 | 0 | The text discusses agomelatine's neutral metabolic profile in the context of diabetes and depression, but it does not report a pharmacogenomic effect (gene variant) on its pharmacokinetic or pharmacodynamic parameters. |
| PGx | Yasar_2018 | not_relevant | 2 | 1 | Letter discusses CYP-mediated metabolism and drug-drug interaction but reports no gene variant/genotype effect on agomelatine PK/PD parameters. |
| popPK | Zangani_2021 | irrelevant | 0 | 0 | This is a systematic review/meta-analysis of amisulpride efficacy for depressive symptoms, with no pharmacokinetic parameters for agomelatine. |
| PD | Zangani_2021 | not_relevant | 0 | 0 | The paper is a meta-analysis of amisulpride (not agomelatine) and reports clinical efficacy outcomes (SMD, OR) rather than pharmacodynamic parameters (Emax, EC50) or exposure-response relationships. |
| popPK | Zeiss_2024 | irrelevant | 0 | 0 | The paper is a pharmacovigilance study analyzing adverse drug reactions (sexual dysfunction) and does not report any pharmacokinetic parameters for agomelatine. |
| PD | Zeiss_2024 | not_relevant | 1 | 0 | The study is a pharmacovigilance disproportionality analysis (RORs) and receptor affinity correlation, not a PK/PD or dose-response study with numeric PD parameters for agomelatine. |
| popPK | Zhou_2014 | irrelevant | 0 | 0 | The study is an in-vitro pre-formulation analysis of polymorphic forms and does not report population PK parameters for agomelatine in vivo. |
| PGx | Zhou_2014 | not_relevant | 0 | 0 | The study investigates physical polymorphs (solid forms) of agomelatine, not genetic variants (pharmacogenomics). |
| popPK | Zhou_2026 | irrelevant | 0 | 0 | Clinical efficacy/EEG biomarker trial of agomelatine augmentation; no pharmacokinetic parameters (CL, V, ka, half-life, PK model) are reported anywhere in the evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bagomelatine%5D&body=Drug%3A%20agomelatine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_agomelatine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
