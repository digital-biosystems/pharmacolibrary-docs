<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;selexipag&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Selexipag_Ruehs2021_reference&quot;,&quot;label&quot;:&quot;Ruehs_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_selexipag/Selexipag_Ruehs2021_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# selexipag

- **generic name:** selexipag
- **ATC codes:** `B01AC27`
- **DrugBank:** [DB11362](https://go.drugbank.com/drugs/DB11362) · **PubChem:** [CID 9913767](https://pubchem.ncbi.nlm.nih.gov/compound/9913767)
- **molar mass:** 496.63 g/mol (C26H32N4O4S) — DrugBank
- **groups:** approved, investigational

## About

Selexipag is a drug used to treat pulmonary hypertension. It is an approved antithrombotic medicine and is authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q15424759](https://www.wikidata.org/wiki/Q15424759) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| selexipag | parent | 496.63 | C26H32N4O4S | DrugBank | [9913767](https://pubchem.ncbi.nlm.nih.gov/compound/9913767) | Axelsen_2021, Axelsen_2024, Krause_2017 |
| ACT-333679 | metabolite | 419.525 | C25H29N3O3 | PubChem | [9931891](https://pubchem.ncbi.nlm.nih.gov/compound/9931891) | Axelsen_2021, Krause_2017 |
| JNJ-68006861 | metabolite | — (mass units only) | — | — | — | — |

## Start here

> **Ruehs_2021_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> review reference. [Run it in the simulator](drugs/drug_selexipag/Selexipag_Ruehs2021_reference.md?tab=Simulation) · [record](drugs/drug_selexipag/Selexipag_Ruehs2021_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 1.3 | L/h | 1.3 L/h | review reference |  | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Ruehs_2021_reference](drugs/drug_selexipag/Selexipag_Ruehs2021_reference.md) |
| CL | CL/F | 19.1 | L/h | 19.10 L/h | patients with pulmonary arterial hypertension | , 512 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Krause_2017_reference](drugs/drug_selexipag/Selexipag_Krause2017_reference.md) |
| V | V/F | 38.9 | L | 38.9 L | review reference |  | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Ruehs_2021_reference](drugs/drug_selexipag/Selexipag_Ruehs2021_reference.md) |
| ka | kabs | 0.71 | 1/h | 0.71 1/h | patients with pulmonary arterial hypertension | , 512 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Krause_2017_reference](drugs/drug_selexipag/Selexipag_Krause2017_reference.md) |
| ka | kabs | 1.5 | 1/h | 1.5 1/h | review reference |  | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Ruehs_2021_reference](drugs/drug_selexipag/Selexipag_Ruehs2021_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">1</text><line x1="365.0" y1="18" x2="365.0" y2="58" stroke="#ddd"/><text x="365.0" y="72" font-size="10" text-anchor="middle">10</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">100</text><text x="184" y="34.0" font-size="11" text-anchor="end">Ruehs_2021 · CL/F</text><circle cx="209.9" cy="30.0" r="4" fill="#2e7d32"><title>Ruehs_2021 · CL/F: 1.3 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Krause_2017 · CL/F</text><circle cx="414.2" cy="46.0" r="4" fill="#ef6c00"><title>Krause_2017 · CL/F: 19.1 L/h</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Ruehs_2021_reference](drugs/drug_selexipag/Selexipag_Ruehs2021_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Ruehs H et al., Population Pharmacokinetics and Pharmac…, Clinical pharmacokinetics (2021) | [10.1007/s40262-021-01024-y](https://doi.org/10.1007/s40262-021-01024-y) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q30, Q99, Q30, Q99, Q1 — no SI valu…</sub> | [Krause_2017_reference](drugs/drug_selexipag/Selexipag_Krause2017_reference.md) | — | parent + metabolite (no model) | 12 (+5 cov.) | Krause A et al., Population Modeling of Selexipag Pharma…, CPT: pharmacometrics & syst… (2017) | [10.1002/psp4.12202](https://doi.org/10.1002/psp4.12202) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Axelsen_2021_reference](drugs/drug_selexipag/Selexipag_Axelsen2021_reference.md) | — | 1-compartment (no model) | 0 | Axelsen LN et al., Clopidogrel, a CYP2C8 inhibitor, causes…, British journal of clinical… (2021) | [10.1111/bcp.14365](https://doi.org/10.1111/bcp.14365) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper (the values present come f…</sub> | [Axelsen_2024_reference](drugs/drug_selexipag/Selexipag_Axelsen2024_reference.md) | — | parent + metabolite (no model) | 3 | Axelsen LN et al., Population pharmacokinetics of selexipa…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13231](https://doi.org/10.1002/psp4.13231) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Gatfield_2017_arrestin_recruitment](drugs/drug_selexipag/pd_Gatfield_2017_arrestin_recruitment.md) | β-arrestin recruitment biomarker turnover ← ACT-333679 | — | Gatfield J et al., Selexipag Active Metabolite ACT-333679…, The Journal of pharmacology… (2017) | [10.1124/jpet.116.239665](https://doi.org/10.1124/jpet.116.239665) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Gatfield_2017_cAMP](drugs/drug_selexipag/pd_Gatfield_2017_cAMP.md) | cytosolic cAMP levels biomarker turnover ← ACT-333679 | — | Gatfield J et al., Selexipag Active Metabolite ACT-333679…, The Journal of pharmacology… (2017) | [10.1124/jpet.116.239665](https://doi.org/10.1124/jpet.116.239665) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Gatfield_2017_cell_proliferation](drugs/drug_selexipag/pd_Gatfield_2017_cell_proliferation.md) | cell proliferation biomarker turnover ← ACT-333679 | — | Gatfield J et al., Selexipag Active Metabolite ACT-333679…, The Journal of pharmacology… (2017) | [10.1124/jpet.116.239665](https://doi.org/10.1124/jpet.116.239665) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Gatfield_2017_cellular_relaxation](drugs/drug_selexipag/pd_Gatfield_2017_cellular_relaxation.md) | cellular relaxation biomarker turnover ← ACT-333679 | — | Gatfield J et al., Selexipag Active Metabolite ACT-333679…, The Journal of pharmacology… (2017) | [10.1124/jpet.116.239665](https://doi.org/10.1124/jpet.116.239665) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Gatfield_2017_extracellular_matrix_synthesis](drugs/drug_selexipag/pd_Gatfield_2017_extracellular_matrix_synthesis.md) | extracellular matrix synthesis biomarker turnover ← ACT-333679 | — | Gatfield J et al., Selexipag Active Metabolite ACT-333679…, The Journal of pharmacology… (2017) | [10.1124/jpet.116.239665](https://doi.org/10.1124/jpet.116.239665) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Adverse-reaction risk allele; no quantitative PK/PD parameter effect.">safety allele</span> | **CYP2C9** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Lattanzio_2022](drugs/drug_selexipag/pgx_Lattanzio_2022_CYP2C9_safety.md) | Lattanzio M et al., Pharmacological counseling in hepatotox…, Journal of medical case rep… (2022) | [10.1186/s13256-022-03571-9](https://doi.org/10.1186/s13256-022-03571-9) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP2C8** | `Q27` · CL/F | metabolism | [Lattanzio_2022](drugs/drug_selexipag/pgx_Lattanzio_2022_CYP2C8_Q27.md) | Lattanzio M et al., Pharmacological counseling in hepatotox…, Journal of medical case rep… (2022) | [10.1186/s13256-022-03571-9](https://doi.org/10.1186/s13256-022-03571-9) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=selexipag).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| distribution | placenta | `ABCB1` substrate | DrugBank actor |
| distribution | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | liver | `CES1` substrate, `CYP2C8` metabolism/substrate, `CYP2C9` safety_allele, `CYP3A4` substrate, `SLCO1B1` substrate, `SLCO1B3` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` substrate | DrugBank actor |
| excretion | liver | `ABCB1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: PTGIR (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:22 | 2:15 | 2/2/0 | 1/0/0 | 1/0/1 | 144,754/13,017 | einfracz / qwen3.8-27b | 6 | 2/7 | 6/0 | 1 |

## Coverage

- **PubMed hits:** 33 matched, 33 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 4  ·  extracted 1  ·  needs review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gnerre_2018.pdf` | Gnerre C et al., The metabolism and drug-drug interactio…, Xenobiotica; the fate of fo… (2018) | pgx | 7 | [10.1080/00498254.2017.1357088](https://doi.org/10.1080/00498254.2017.1357088) | [28737453](https://www.ncbi.nlm.nih.gov/pubmed/28737453) | metadata signals extractable PGX data (CYP2C8, PK/PD-context) |
| `Juif_2017.pdf` | Juif PE et al., A pharmacokinetic drug-drug interaction…, European journal of clinica… (2017) | pgx | 7 | [10.1007/s00228-017-2282-7](https://doi.org/10.1007/s00228-017-2282-7) | [28639119](https://www.ncbi.nlm.nih.gov/pubmed/28639119) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Kaufmann_2015.pdf` | Kaufmann P et al., Effect of lopinavir/ritonavir on the ph…, British journal of clinical… (2015) | pgx | 7 | [10.1111/bcp.12650](https://doi.org/10.1111/bcp.12650) | [25851691](https://www.ncbi.nlm.nih.gov/pubmed/25851691) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07 18:20 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Axelsen_2021 | not_relevant | 0 | 0 | The study reports only pharmacokinetic (PK) parameters (AUC, Cmax) and drug-drug interaction ratios; it does not report any pharmacodynamic (PD) or exposure-response relationship for selexipag. |
| PGx | Axelsen_2021 | not_relevant | 4 | 9 | The study assesses a drug-drug interaction (clopidogrel) and reports that the effect on PK is comparable across CYP2C8 genotypes, implying no significant pharmacogenomic effect. |
| PD | Axelsen_2024 | not_relevant | 0 | 0 | The paper focuses exclusively on population pharmacokinetics (PK) and dose selection based on exposure matching, with no pharmacodynamic (PD) or exposure-response modeling or numeric PD parameters reported. |
| popPK | Bruderer_2014 | relevant | 8 | 4 | The study reports quantitative PK parameters (half-life) for selexipag, but lacks other key disposition parameters like clearance or volume of distribution. |
| PD | Bruderer_2014 | not_relevant | 2 | 1 | The study reports PK parameters and qualitative safety data, but explicitly states that platelet aggregation effects were variable without an obvious dose-dependent pattern, providing no numeric PD parameters or extractable exposure-response relationship. |
| popPK | Bruderer_2016 | irrelevant | 2 | 0 | The study is a drug-drug interaction trial that reports only geometric mean ratios and qualitative statements about steady-state AUC, lacking specific quantitative PK parameter values (e.g., CL, V, t1/2) for selexipag. |
| PD | Bruderer_2016 | not_relevant | 0 | 0 | The study reports a lack of interaction (GMRs for INR and PK parameters) but does not provide a concentration-effect or dose-response model with numeric PD parameters (e.g., Emax, EC50) for selexipag. |
| popPK | Gatfield_2017 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of pharmacodynamic effects (receptor binding, cAMP, cell proliferation) and does not report quantitative pharmacokinetic disposition parameters like clearance or volume. |
| popPK | Genecand_2021 | irrelevant | 2 | 0 | The paper is a review article that discusses selexipag's pharmacokinetics but does not provide original quantitative disposition parameters or numeric values in the provided evidence. |
| PD | Genecand_2021 | not_relevant | 2 | 1 | The text is a review article summary that mentions pharmacodynamics qualitatively but does not provide specific numeric PD parameters or exposure-response data. |
| popPK | Ghosh_2017 | irrelevant | 2 | 0 | The paper is a review summarizing existing studies and does not present original quantitative pharmacokinetic parameter values for selexipag in the provided evidence. |
| PD | Ghosh_2017 | not_relevant | 2 | 1 | The text is a review summary that qualitatively describes efficacy outcomes (e.g., 6-minute walk distance, mortality) but does not provide specific numeric PD parameters (Emax, EC50) or concentration-effect curves. |
| PGx | Gnerre_2018 | not_relevant | 0 | 0 | The paper describes the metabolic pathways and enzyme interactions of selexipag but does not report any pharmacogenomic effects (gene variant/genotype) on its PK or PD parameters. |
| popPK | Hoch_2015 | irrelevant | 1 | 0 | The paper is a thorough QT study focused on cardiac repolarization and does not report quantitative pharmacokinetic disposition parameters (CL, V, etc.) for selexipag. |
| PD | Hoch_2015 | not_relevant | 3 | 2 | The paper reports a qualitative conclusion that no exposure-response relationship was demonstrated for selexipag, without providing numeric PD parameters or a derivable concentration-effect curve. |
| popPK | Honorato_2017 | irrelevant | 1 | 0 | The paper is a pharmacology review that discusses selexipag's pharmacokinetics qualitatively but does not provide original quantitative disposition parameters or numeric values. |
| PD | Honorato_2017 | not_relevant | 2 | 1 | The text is a qualitative pharmacology review summary that discusses general pharmacodynamic properties and safety but does not provide specific numeric PD parameters (e.g., EC50, Emax) or exposure-response data for selexipag. |
| PGx | Juif_2017 | not_relevant | 0 | 10 | This study evaluates a drug-drug interaction between selexipag and midazolam, not a pharmacogenomic effect. |
| PGx | Kaufmann_2015 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (lopinavir/ritonavir) and does not report any effects of gene variants, genotypes, or pharmacogenomic phenotypes. |
| PGx | Lattanzio_2022 | not_relevant | 4 | 1 | The paper is a case report that hypothesizes a link between CYP2C8/9 genotypes and hepatotoxicity but lacks quantitative PK data or fitted effect sizes. |
| popPK | Lindegaard_2020 | irrelevant | 0 | 0 | The paper is a review focused on treprostinil, and selexipag is only mentioned as a comparator drug without any quantitative pharmacokinetic parameters provided. |
| PD | Lindegaard_2020 | not_relevant | 1 | 0 | The paper is a mini-review of treprostinil and only mentions selexipag as a comparator without providing any specific pharmacodynamic data or exposure-response parameters for it. |
| popPK | Najjar_2020 | irrelevant | 0 | 0 | The paper is a review of prodrugs and does not report quantitative pharmacokinetic parameters for selexipag. |
| PD | Najjar_2020 | not_relevant | 0 | 0 | The paper is a general review of prodrugs and does not contain specific pharmacodynamic or exposure-response data for selexipag. |
| popPK | Oriaku_2020 | irrelevant | 0 | 0 | This is a clinical case report describing a drug transition and hemodynamic changes, not a pharmacokinetic study, and it contains no quantitative PK parameters (CL, V, ka, etc.) for selexipag. |
| PD | Oriaku_2020 | not_relevant | 1 | 0 | The paper is a single case report describing a drug transition with qualitative and percentage-based hemodynamic improvements, but it does not report any concentration-effect data, dose-response curves, or numeric PD parameters (e.g., Emax, EC50) for selexipag. |
| popPK | Ruehs_2021 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of vericiguat, not selexipag. |
| popPK | Sardana_2016 | irrelevant | 2 | 0 | The paper is a review article discussing the development and clinical trials of selexipag, but the provided evidence contains no original quantitative pharmacokinetic parameter values (e.g., CL, V, t1/2). |
| PD | Sardana_2016 | not_relevant | 2 | 1 | The text is an abstract of a review article that discusses the pharmacodynamics of selexipag qualitatively but does not provide specific numeric PD parameters or exposure-response data. |
| popPK | Skoro-Sajer_2014 | irrelevant | 0 | 0 | The paper is a Phase 3 clinical efficacy and safety trial (GRIPHON) reporting clinical endpoints, not a pharmacokinetic study with disposition parameters. |
| PD | Skoro-Sajer_2014 | not_relevant | 0 | 0 | The paper is a Phase 3 clinical trial (GRIPHON) reporting clinical efficacy and safety outcomes (time-to-event, 6MWD) but does not contain pharmacokinetic data, concentration-effect modeling, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Varian_2024 | irrelevant | 0 | 0 | The paper is a clinical trial protocol for pulmonary arterial hypertension that uses selexipag as a therapeutic agent but does not report any pharmacokinetic parameters or disposition data. |
| PD | Varian_2024 | not_relevant | 0 | 0 | The text is a study protocol for a clinical trial comparing therapeutic strategies and does not report any pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters. |
| PGx | Wu_2022 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions and metabolism, reporting on CYP2C8 inhibitor effects on selexipag levels, but it does not report on gene variants (pharmacogenomics) affecting PK or PD. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | The study is a pharmacovigilance analysis of adverse events (hearing impairment) for PDE5 inhibitors and contains no pharmacokinetic data for selexipag. |
| PD | Zhang_2024 | not_relevant | 0 | 0 | The paper is a pharmacovigilance study analyzing adverse event reports (hearing impairment) for PDE5 inhibitors using disproportionality analysis; it does not report any pharmacodynamic, exposure-response, or dose-response relationships or numeric PD parameters for selexipag. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bselexipag%5D&body=Drug%3A%20selexipag%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_selexipag/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 18:20 UTC</sub>
