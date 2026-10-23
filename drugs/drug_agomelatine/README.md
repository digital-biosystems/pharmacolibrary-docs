<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;agomelatine&quot;}]"></div>

# agomelatine

- **generic name:** agomelatine
- **ATC codes:** `N06AX22`
- **DrugBank:** [DB06594](https://go.drugbank.com/drugs/DB06594) · **PubChem:** [CID 82148](https://pubchem.ncbi.nlm.nih.gov/compound/82148)
- **molar mass:** 243.301 g/mol (C15H17NO2) — DrugBank
- **groups:** approved, investigational

## About

Agomelatine is an antidepressant used to treat major depressive disorder. It is authorised in the European Union, though some marketing applications were refused or withdrawn, so its availability there is limited.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q395229](https://www.wikidata.org/wiki/Q395229) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span> | [Martínez-Águila_2013_IOP](drugs/drug_agomelatine/pd_Mart_nez_guila_2013_IOP.md) | intraocular pressure reduction ← agomelatine · direct sigmoid Emax (Hill) effect | — | Martínez-Águila A et al., Melatonin analogue agomelatine reduces…, European journal of pharmac… (2013) | [10.1016/j.ejphar.2012.12.009](https://doi.org/10.1016/j.ejphar.2012.12.009) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">rat</span> | [Yang_2016_SCN_neuron_firing_rate_suppression](drugs/drug_agomelatine/pd_Yang_2016_SCN_neuron_firing_rate_suppression.md) | SCN neuron firing rate suppression ← agomelatine · direct Emax (saturable) effect | — | Yang J et al., Agomelatine affects rat suprachiasmatic…, Life sciences (2016) | [10.1016/j.lfs.2016.04.035](https://doi.org/10.1016/j.lfs.2016.04.035) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Adverse-reaction risk allele; no quantitative PK/PD parameter effect.">safety allele</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | **CYP2C9** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Fang_2026](drugs/drug_agomelatine/pgx_Fang_2026_CYP2C9_safety.md) | Fang P et al., Effect of Cytochrome P450 2C9 genetic p…, PeerJ (2026) | [10.7717/peerj.20973](https://doi.org/10.7717/peerj.20973) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP1A2** | `Q88` · AUC | metabolism | [Wang_2021](drugs/drug_agomelatine/pgx_Wang_2021_CYP1A2_Q88.md) | Wang S et al., CYP1A2 polymorphism may contribute to a…, Medicine (2021) | [10.1097/MD.0000000000027736](https://doi.org/10.1097/MD.0000000000027736) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=agomelatine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP1A2` metabolism/substrate, `CYP2C9` inhibitor/safety_allele | DrugBank actor |

<sub>Actors without a tissue in the table: HTR2C (target), MTNR1A (target), MTNR1B (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 21:37 | 0:59 | 0/0/0 | 2/0/0 | 1/0/1 | 80,572/3,301 | ollama / glm-5.3-flash | 11 | 4/15 | 11/0 | 0 |

## Coverage

- **PubMed hits:** 89 matched, 78 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Xie_2019.pdf` | Xie F et al., A semiphysiological population pharmaco…, British journal of clinical… (2019) | popPK | 10 | [10.1111/bcp.13902](https://doi.org/10.1111/bcp.13902) | [30761579](https://pubmed.ncbi.nlm.nih.gov/30761579) | Population PK model of agomelatine in humans, but only IIV percentages appear in the abstract; main parameter values likely in tables/supplementary not provided. |
| `Yang_2016.pdf` | Yang J et al., Agomelatine affects rat suprachiasmatic…, Life sciences (2016) | pd | 4 | [10.1016/j.lfs.2016.04.035](https://doi.org/10.1016/j.lfs.2016.04.035) | [27269050](https://www.ncbi.nlm.nih.gov/pubmed/27269050) | metadata signals extractable PD data (IC50) |
| `Saiz-Rodríguez_2018.pdf` | Saiz-Rodríguez M et al., Effect of ABCB1 C3435T Polymorphism on…, Basic & clinical pharmacolo… (2018) | pgx | 8 | [10.1111/bcpt.13031](https://doi.org/10.1111/bcpt.13031) | [29723928](https://www.ncbi.nlm.nih.gov/pubmed/29723928) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Englisch_2019.pdf` | Englisch S et al., Response to Agomelatine Treatment is In…, Pharmacopsychiatry (2019) | pgx | 7 | [10.1055/a-0606-5240](https://doi.org/10.1055/a-0606-5240) | [29734455](https://www.ncbi.nlm.nih.gov/pubmed/29734455) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Spina_2012.pdf` | Spina E et al., Clinically significant drug interaction…, CNS drugs (2012) | pgx | 7 | [10.2165/11594710-000000000-00000](https://doi.org/10.2165/11594710-000000000-00000) | [22171584](https://www.ncbi.nlm.nih.gov/pubmed/22171584) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |

<sub>queue written 2026-10-06 21:36 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adair_2023 | irrelevant | 0 | 0 | The paper is a clinical efficacy study of vortioxetine where agomelatine serves only as an active comparator, and no pharmacokinetic parameters are reported. |
| PD | Adair_2023 | not_relevant | 0 | 0 | The paper focuses on vortioxetine and only mentions agomelatine as an active comparator in a separate analysis without providing any pharmacodynamic or exposure-response data for agomelatine. |
| popPK | Bertin_2023 | irrelevant | 0 | 0 | This is an in vitro drug-combination synergy screening study with no pharmacokinetic parameters for agomelatine. |
| PD | Bertin_2023 | not_relevant | 0 | 0 | The paper focuses on a machine learning method for identifying synergistic drug combinations in vitro and does not report any pharmacodynamic or exposure-response analysis for agomelatine. |
| popPK | Bhutada_2013 | irrelevant | 0 | 0 | The study is a behavioral pharmacology investigation in mice and does not report any pharmacokinetic parameters for agomelatine. |
| PD | Bhutada_2013 | not_relevant | 3 | 2 | The paper reports qualitative dose-dependent effects and specific dose-response points for agomelatine in a behavioral model, but it does not provide a formal PK/PD model, concentration-effect curve, or derived numeric PD parameters (e.g., EC50, Emax) for the drug itself. |
| PGx | Bobrov_2010 | not_relevant | 0 | 0 | Study reports only clinical predictors of response to agomelatine; no gene variant or PK/PD parameter effects. |
| popPK | Cerou_2019 | irrelevant | 0 | 0 | This is a pharmacodynamic/disease-progression (IRT) model of agomelatine's effect on depression, with no PK disposition parameters (CL, V, ka, etc.) reported. |
| popPK | Chen_2024 | irrelevant | 0 | 0 | This is a population-PK study of quetiapine, not agomelatine; agomelatine does not appear at all. |
| PD | Chen_2024 | not_relevant | 0 | 0 | The paper focuses on population pharmacokinetics (PPK) and drug-drug interactions for quetiapine, reporting no pharmacodynamic (PD) or exposure-response relationship. |
| popPK | Cheng_2020 | irrelevant | 0 | 0 | Model-based meta-analysis of antidepressant efficacy (dose-effect on depression scales), not a PK study; no clearance, volume, or absorption parameters for agomelatine are reported. |
| PD | Cheng_2020 | not_relevant | 2 | 1 | The paper is a meta-analysis that explicitly states no significant dose-response relationship was observed for the antidepressants, and it does not provide specific numeric PD parameters (like Emax or EC50) for agomelatine. |
| PGx | De_2014 | not_relevant | 2 | 1 | Case report abstract only discusses CYP2D6 inhibition by antidepressants affecting tamoxifen, not a gene variant effect on agomelatine PK/PD. |
| popPK | ElKady_2018 | relevant | 8 | 0 | The study reports pharmacokinetic parameters for agomelatine in humans, but the specific numeric values are not present in the provided evidence text. |
| PD | ElKady_2018 | not_relevant | 0 | 0 | The study focuses exclusively on pharmacokinetic (PK) parameter comparison (Cmax, AUC) between genders and does not report any pharmacodynamic (PD) or exposure-response data. |
| popPK | Englisch_2019 | irrelevant | 0 | 0 | no_text gate: only 110 chars of text extracted (&lt; 400) |
| PD | Englisch_2019 | not_relevant | 0 | 0 | The paper reports that response is independent of dosage and smoking status, implying a lack of a dose-response relationship, and does not provide numeric PD parameters or concentration-effect curves. |
| PGx | Englisch_2019 | not_relevant | 2 | 3 | Study examines smoking status and dosage effects on agomelatine response, not gene variant/genotype/phenotype effects on PK or PD parameters. |
| popPK | Filippova_2019 | irrelevant | 0 | 0 | The paper is a clinical review of efficacy and tolerability with no pharmacokinetic parameters or quantitative disposition data for agomelatine. |
| PD | Filippova_2019 | not_relevant | 1 | 0 | The text is a qualitative review of agomelatine's mechanism and clinical efficacy, containing no numeric PD parameters, concentration-effect data, or dose-response curves. |
| popPK | Fornaro_2010 | irrelevant | 2 | 3 | The paper is a systematic review that summarizes PK parameters (half-life, Vd) from other sources rather than reporting original quantitative disposition data or population PK models. |
| PD | Fornaro_2010 | not_relevant | 1 | 0 | The paper is a systematic review that summarizes clinical and pre-clinical evidence but does not present original data, perform PK/PD modeling, or report specific numeric PD parameters (e.g., Emax, EC50) for agomelatine. |
| popPK | Gahr_2014 | relevant | 4 | 3 | The paper is a narrative review that reports some quantitative PK parameters (clearance ~1100 ml/min, half-lives 0.2/1.4h, bioavailability 3-4%) for agomelatine, but it lacks a full compartmental or population-PK model with volume and intercompartmental clearance values. |
| PD | Gahr_2014 | not_relevant | 1 | 0 | The paper is a narrative review summarizing efficacy and safety data but does not present original PK/PD modeling or extractable numeric PD parameters (e.g., Emax, EC50) for agomelatine. |
| PGx | Gahr_2014_2 | not_relevant | 2 | 3 | Review of agomelatine hepatotoxicity; no gene variant effect on PK/PD parameters reported. |
| popPK | Gao_2023 | irrelevant | 0 | 0 | The study focuses on the toxicokinetics of GW117, a new drug, with agomelatine mentioned only as a comparator in the introduction. |
| PD | Gao_2023 | not_relevant | 1 | 0 | The study is a 28-day toxicity and toxicokinetics study in beagle dogs that reports qualitative dose-dependent toxicity (GI reactions) and PK parameters, but it does not provide a quantitative pharmacodynamic model or numeric PD parameters (e.g., Emax, EC50) for agomelatine or GW117. |
| popPK | Günaydın_2019 | irrelevant | 0 | 0 | The study is a mechanistic/behavioral investigation of agomelatine's effects on Parkinson's disease pathology in rats and does not report any pharmacokinetic parameters. |
| PD | Günaydın_2019 | not_relevant | 1 | 0 | The study is a single-dose animal experiment (40 mg/kg) reporting qualitative worsening of symptoms and biochemical markers, without any concentration-effect data, multiple dose levels, or numeric PD parameters. |
| PGx | Hardeland_2016 | not_relevant | 3 | 2 | Review discusses genetic influences on melatonin receptor/clock genes generally, but no gene variant effect on agomelatine PK/PD parameters is reported. |
| popPK | Hayasaka_2015 | irrelevant | 0 | 0 | The paper is a meta-analysis of dose equivalence in clinical trials and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for agomelatine. |
| PD | Hayasaka_2015 | not_relevant | 1 | 0 | The paper reports dose equivalence ratios derived from clinical trial data but does not provide a pharmacodynamic model, concentration-effect curve, or numeric PD parameters (e.g., Emax, EC50) for agomelatine. |
| PGx | He_2018 | not_relevant | 2 | 5 | This is a drug–drug interaction study (celecoxib inhibiting agomelatine metabolism via CYP2C9), not a pharmacogenomic effect of a gene variant/genotype/phenotype on agomelatine PK/PD; CYP2C9*1 is only a recombinant enzyme source, not a genotype comparison. |
| popPK | Hengartner_2020 | irrelevant | 0 | 0 | This is a qualitative/quantitative analysis of forum narratives about antidepressant withdrawal, with no pharmacokinetic parameters for agomelatine. |
| PD | Hengartner_2020 | not_relevant | 0 | 0 | The paper is a descriptive analysis of consumer narratives regarding protracted withdrawal syndrome and does not contain any pharmacokinetic or pharmacodynamic modeling, concentration-effect data, or numeric PD parameters for agomelatine. |
| PGx | Howland_2009 | not_relevant | 0 | 0 | No pharmacogenomic effects on agomelatine PK/PD parameters are reported; only CYP1A2 inhibitor contraindication mentioned. |
| popPK | Jani_2019 | irrelevant | 1 | 0 | The study focuses on formulation development and pharmacodynamics (antidepressant activity) without reporting quantitative pharmacokinetic parameters such as clearance or volume of distribution. |
| PD | Jani_2019 | not_relevant | 1 | 0 | The paper reports a qualitative pharmacodynamic observation (reduction in immobility time) but provides no numeric PD parameters, concentration-effect data, or dose-response curve. |
| popPK | Jellimann_1999 | irrelevant | 0 | 0 | Chemistry/binding study; agomelatine is only a reference compound, no PK parameters reported. |
| PD | Jellimann_1999 | not_relevant | 1 | 0 | The paper focuses on the synthesis and characterization of new melatonin receptor ligands; agomelatine is mentioned only as a reference compound with no specific numeric PD parameters or exposure-response data provided for it. |
| popPK | Konstantakopoulos_2020 | irrelevant | 0 | 0 | The paper is a review of the discovery and development of agomelatine focusing on pharmacodynamics and clinical efficacy, with no quantitative pharmacokinetic parameters reported. |
| PD | Konstantakopoulos_2020 | not_relevant | 2 | 1 | The paper is a review of the discovery and development history, providing only a qualitative summary of the pharmacodynamic profile without reporting specific numeric PD parameters or exposure-response curves. |
| popPK | Lalovic_2020 | irrelevant | 0 | 0 | This is a population PK study of lemborexant, a different drug; agomelatine is not mentioned. |
| PD | Lalovic_2020 | not_relevant | 0 | 0 | The paper analyzes lemborexant, not agomelatine, and reports no exposure-response relationship for the target drug. |
| popPK | Leal_2022 | irrelevant | 0 | 0 | This is a drug-drug interaction epidemiology study; agomelatine appears only as part of an interaction pair with no PK parameters reported. |
| PD | Leal_2022 | not_relevant | 0 | 0 | The paper is a large-scale epidemiological study on drug-drug interaction prevalence and adverse outcomes (mortality/readmission), not a pharmacodynamic or exposure-response analysis; it reports hazard ratios for clinical outcomes, not PD parameters like Emax or EC50. |
| PGx | Lee_2019 | not_relevant | 0 | 0 | Paper concerns cocrystal polymorphism and thermodynamics of agomelatine-hydroquinone; no gene variant or PK/PD pharmacogenomic effect reported. |
| PGx | Liao_2016 | not_relevant | 0 | 0 | Study evaluates a cyclodextrin formulation effect on agomelatine PK; no gene variant/genotype/phenotype is involved. |
| popPK | Lin_2025 | irrelevant | 0 | 0 | The study is a mechanistic/behavioral investigation of agomelatine's neuroprotective effects in a Parkinson's disease rat model and does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life). |
| PD | Lin_2025 | not_relevant | 2 | 1 | The study is a preclinical animal model investigating qualitative effects and correlations, not a pharmacokinetic/pharmacodynamic (PK/PD) analysis with numeric exposure-response parameters. |
| PGx | Liu_2016 | not_relevant | 2 | 3 | Study characterizes agomelatine metabolic pathways and CYP enzymes in vitro, but reports no gene variant/genotype effect on PK or PD parameters. |
| popPK | Martínez-Águila_2013 | irrelevant | 1 | 1 | Pharmacodynamic ocular hypotension study in rabbits; no PK disposition parameters (CL, V, ka, half-life, or PK model) for agomelatine are reported. |
| popPK | Naveed_2022 | irrelevant | 0 | 0 | The paper is a narrative review discussing the mechanism of action and clinical efficacy of agomelatine without reporting any original quantitative pharmacokinetic parameters. |
| PD | Naveed_2022 | not_relevant | 1 | 0 | The text is a qualitative review discussing the mechanism of action and general properties of agomelatine without reporting any specific numeric pharmacodynamic parameters, exposure-response data, or dose-effect curves. |
| popPK | Nemr_2022 | irrelevant | 0 | 0 | The study focuses on the formulation and in vitro release of agomelatine bilosomes for ocular delivery, reporting no systemic pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Nemr_2023 | irrelevant | 1 | 0 | The study focuses on formulation development and in vivo pharmacodynamics (intraocular pressure) rather than reporting quantitative systemic pharmacokinetic parameters (CL, V, ka) for agomelatine. |
| PD | Nemr_2023 | not_relevant | 3 | 2 | The paper reports in vivo pharmacodynamic endpoints (IOP reduction) for a formulation but does not provide a concentration-effect or dose-response model with numeric PD parameters like Emax or EC50. |
| PGx | Owen_2009 | not_relevant | 2 | 1 | Mentions CYP1A2 metabolism but reports no gene variant effect on any PK/PD parameter. |
| popPK | Perugi_2015 | irrelevant | 1 | 0 | The paper is a review/expert opinion discussing the role of agomelatine in OCD and does not report original quantitative pharmacokinetic parameter values. |
| PD | Perugi_2015 | not_relevant | 2 | 0 | The text is a review/expert opinion discussing the pharmacodynamics of agomelatine qualitatively without providing specific numeric PD parameters or concentration-effect data. |
| popPK | Poleszak_2016 | irrelevant | 1 | 0 | The study is a pharmacodynamic investigation in mice using behavioral tests, and while it mentions HPLC measurement of drug levels, it does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for agomelatine. |
| PD | Poleszak_2016 | not_relevant | 1 | 0 | The paper reports qualitative behavioral effects and drug concentrations but does not provide numeric PD parameters or an exposure-response curve. |
| popPK | Prajapati_2018 | relevant | 4 | 2 | The study reports PK parameters (AUC, Cmax) for agomelatine in rats, but lacks compartmental model parameters (CL, V, ka) and the specific numeric values for Cmax/Tmax are in a table not fully provided in the evidence. |
| PD | Prajapati_2018 | not_relevant | 2 | 0 | The paper focuses on formulation and PK (bioavailability enhancement) with only a qualitative mention of pharmacodynamic efficacy, lacking any numeric concentration-effect or dose-response parameters. |
| PGx | Saiz-Rodríguez_2018 | not_relevant | 10 | 5 | Paper reports no effect of ABCB1 C3435T on agomelatine pharmacokinetics, only a null finding without fitted effect sizes. |
| popPK | Saiz-Rodríguez_2019 | relevant | 8 | 2 | The study is a relevant pharmacokinetic investigation of agomelatine, but the provided evidence contains only qualitative descriptions of parameter changes (e.g., "lower clearance") without specific numeric values for CL, V, or other PK parameters. |
| PD | Saiz-Rodríguez_2019 | not_relevant | 1 | 0 | The study focuses on pharmacokinetic parameters (clearance, AUC, Tmax) influenced by genotypes and explicitly states that agomelatine did not produce changes in pharmacodynamic endpoints (blood pressure, heart rate, QT interval), providing no numeric PD parameters or exposure-response relationship. |
| popPK | Shagiakhmetov_2017 | irrelevant | 0 | 0 | The paper is a review of the mechanism of action and efficacy of agomelatine, containing no pharmacokinetic data or quantitative disposition parameters. |
| PD | Shagiakhmetov_2017 | not_relevant | 1 | 0 | The text is a qualitative review of the mechanism of action and clinical efficacy, containing no numeric PD parameters, concentration-effect curves, or PK/PD modeling data. |
| popPK | Socała_2017 | irrelevant | 1 | 0 | The study is a behavioral pharmacology experiment in mice that measures drug concentrations in serum and brain to assess interactions, but it does not report quantitative pharmacokinetic parameters (CL, V, ka, t1/2) or a compartmental model for agomelatine. |
| PD | Socała_2017 | not_relevant | 2 | 1 | The study reports qualitative changes in immobility time and drug concentrations but does not provide numeric PD parameters (e.g., Emax, EC50) or a fitted concentration-effect curve for agomelatine. |
| popPK | Souza_2018 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment in rats investigating circadian rhythms and depressive-like behavior, with no pharmacokinetic parameters reported. |
| PD | Souza_2018 | not_relevant | 1 | 0 | The study is a qualitative behavioral pharmacology experiment in rats that reports no plasma concentrations, PK data, or quantitative dose-response parameters (e.g., EC50, Emax) for agomelatine. |
| PGx | Spina_2012 | not_relevant | 2 | 1 | Review of drug interactions with antidepressants; no gene variant/genotype effects on agomelatine PK/PD parameters reported. |
| popPK | Sundell_2020 | irrelevant | 0 | 0 | The paper is a population-PK study of ethambutol, not agomelatine; no agomelatine parameters are present. |
| PD | Sundell_2020 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics and pharmacogenetics of ethambutol, not agomelatine, and does not report any pharmacodynamic or exposure-response relationships. |
| popPK | Tawfik_2025 | irrelevant | 1 | 0 | The study focuses on the formulation and pharmacodynamics (IOP reduction) of agomelatine leciplexes, reporting no quantitative pharmacokinetic disposition parameters (CL, V, ka) for the drug. |
| PD | Tawfik_2025 | not_relevant | 3 | 2 | The paper reports a single maximum effect value (74.2% IOP reduction) and residence time for a specific formulation compared to a control, but lacks concentration-effect data, dose-response curves, or numeric PD parameters (Emax, EC50) required for an extractable PD relationship. |
| popPK | Tu_2014 | irrelevant | 0 | 0 | The paper is a case report describing a psychiatric adverse event (hypomania) and contains no pharmacokinetic data or quantitative disposition parameters for agomelatine. |
| PD | Tu_2014 | not_relevant | 0 | 0 | The paper is a single case report of an adverse event (hypomania) and does not contain any pharmacokinetic data, concentration-effect analysis, or numeric PD parameters. |
| popPK | Wang_2026 | irrelevant | 1 | 1 | The study focuses on neuroprotection and glymphatic function in a PD model, reporting only single-point brain concentrations rather than quantitative pharmacokinetic disposition parameters (CL, V, ka). |
| PD | Wang_2026 | not_relevant | 2 | 1 | The paper reports brain concentrations of agomelatine and qualitative/semi-quantitative effects on pathology and glymphatic function, but does not provide a dose-response curve, Emax/EC50 parameters, or a formal PK/PD model linking exposure to effect. |
| popPK | Wen_2025 | irrelevant | 0 | 0 | The paper is a meta-analysis of gastrointestinal adverse effects and does not report pharmacokinetic parameters for agomelatine. |
| popPK | Xie_2019 | relevant | 10 | 4 | Population PK model of agomelatine in humans, but only IIV percentages appear in the abstract; main parameter values likely in tables/supplementary not provided. |
| PD | Xie_2019 | not_relevant | 0 | 0 | The paper focuses exclusively on the population pharmacokinetic (PK) modeling of agomelatine and its metabolites, with no mention of pharmacodynamic (PD) endpoints, exposure-response relationships, or dose-effect analyses. |
| popPK | Yang_2016 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor effects on neurons and does not report pharmacokinetic disposition parameters. |
| PGx | Yao_2025 | not_relevant | 0 | 0 | Agomelatine is only mentioned as having a neutral metabolic profile; no gene variant effect on its PK/PD parameters is reported. |
| PGx | Yasar_2018 | not_relevant | 2 | 1 | Letter discusses CYP-mediated metabolism and drug-drug interaction but reports no gene variant/genotype effect on agomelatine PK/PD parameters. |
| popPK | Zangani_2021 | irrelevant | 0 | 0 | This is a systematic review/meta-analysis of amisulpride efficacy for depressive symptoms, with no pharmacokinetic parameters for agomelatine. |
| PD | Zangani_2021 | not_relevant | 0 | 0 | The paper is a meta-analysis of amisulpride (not agomelatine) and reports clinical efficacy outcomes (SMD, OR) rather than pharmacodynamic parameters (Emax, EC50) or exposure-response relationships. |
| popPK | Zeiss_2024 | irrelevant | 0 | 0 | The paper is a pharmacovigilance study analyzing adverse drug reactions (sexual dysfunction) and does not report any pharmacokinetic parameters for agomelatine. |
| PD | Zeiss_2024 | not_relevant | 1 | 0 | The study is a pharmacovigilance disproportionality analysis (RORs) and receptor affinity correlation, not a PK/PD or dose-response study with numeric PD parameters for agomelatine. |
| PGx | Zhou_2014 | not_relevant | 0 | 0 | Polymorphism here refers to crystal forms affecting dissolution, not genetic variants affecting PK/PD. |
| popPK | Zhou_2026 | irrelevant | 0 | 0 | Clinical efficacy/EEG biomarker trial of agomelatine augmentation; no pharmacokinetic parameters (CL, V, ka, half-life, PK model) are reported anywhere in the evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bagomelatine%5D&body=Drug%3A%20agomelatine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_agomelatine/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
