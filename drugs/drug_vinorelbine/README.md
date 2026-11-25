<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01C&quot;,&quot;href&quot;:&quot;atc/L01C.md&quot;},{&quot;label&quot;:&quot;vinorelbine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Vinorelbine_Levque1996_reference&quot;,&quot;label&quot;:&quot;Lev\u00eaque_1996_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vinorelbine/Vinorelbine_Levque1996_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# vinorelbine

- **generic name:** vinorelbine
- **ATC codes:** `L01CA04`
- **DrugBank:** [DB00361](https://go.drugbank.com/drugs/DB00361) · **PubChem:** [CID 44424639](https://pubchem.ncbi.nlm.nih.gov/compound/44424639)
- **molar mass:** 778.947 g/mol (C45H54N4O8) — DrugBank
- **groups:** approved, investigational

## About

Vinorelbine is a vinca alkaloid chemotherapy agent used to treat breast cancer, ovarian cancer, non-small-cell lung carcinoma, and Hodgkin's lymphoma. It is administered intravenously or orally, with good absorption when taken by mouth.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q420532](https://www.wikidata.org/wiki/Q420532), [Wikipedia](https://en.wikipedia.org/wiki/Vinorelbine?oldid=1368466305) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| vinorelbine | parent | 778.947 | C45H54N4O8 | DrugBank | [44424639](https://pubchem.ncbi.nlm.nih.gov/compound/44424639) | Gauvin_2002, Levêque_1996, Nguyen_2002, Puisset_2005, Pétain_2019, Variol_2002 |

## Start here

> **Levêque_1996_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> adults with cancer. [Run it in the simulator](drugs/drug_vinorelbine/Vinorelbine_Levque1996_reference.md?tab=Simulation) · [record](drugs/drug_vinorelbine/Vinorelbine_Levque1996_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">10</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">100</text><text x="184" y="34.0" font-size="11" text-anchor="end">Levêque_1996 · CL</text><circle cx="422.6" cy="30.0" r="4" fill="#ef6c00"><title>Levêque_1996 · CL: 46.2 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Gauvin_2002 · CL ·/kg</text><circle cx="433.7" cy="46.0" r="4" fill="#ef6c00"><title>Gauvin_2002 · CL ·/kg: 49.7 L/h</title></circle></svg></div>

<sub>One dot per record, coloured by status; values converted from the record's SI value to one unit per parameter. ·/kg: given per kg in the paper, shown for a 70 kg adult. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Gauvin_2002_reference](drugs/drug_vinorelbine/Vinorelbine_Gauvin2002_reference.md) | — | 1-compartment (no model) | 2 | Gauvin A et al., Blood and plasma pharmacokinetics of vi…, Cancer chemotherapy and pha… (2002) | [10.1007/s00280-001-0378-2](https://doi.org/10.1007/s00280-001-0378-2) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: cross_check_disputed</sub> | [Levêque_1996_reference](drugs/drug_vinorelbine/Vinorelbine_Levque1996_reference.md) | ▶ model + simulator | 1-compartment, IV | 4 | Levêque D et al., Clinical pharmacokinetics of vinorelbine, Clinical pharmacokinetics (1996) | [10.2165/00003088-199631030-00003](https://doi.org/10.2165/00003088-199631030-00003) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Puisset_2005_reference](drugs/drug_vinorelbine/Vinorelbine_Puisset2005_reference.md) | — | 1-compartment (no model) | 1 | Puisset F et al., Dexamethasone as a probe for vinorelbin…, British journal of clinical… (2005) | [10.1111/j.1365-2125.2005.02384.x](https://doi.org/10.1111/j.1365-2125.2005.02384.x) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q27, Q22 — no SI value to build from</sub> | [Pétain_2019_intravenous_vinorelbine](drugs/drug_vinorelbine/Vinorelbine_Ptain2019_intravenous_vinorelbine.md) | — | 1-compartment (no model) | 2 | Pétain A et al., Effect of ethnicity on vinorelbine phar…, Cancer chemotherapy and pha… (2019) | [10.1007/s00280-019-03872-9](https://doi.org/10.1007/s00280-019-03872-9) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q27, Q22 — no SI value to build from</sub> | [↳ oral_vinorelbine](drugs/drug_vinorelbine/Vinorelbine_Ptain2019_oral_vinorelbine.md) | — | 1-compartment (no model) | 2 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Deporte-Fety_2004_reference](drugs/drug_vinorelbine/Vinorelbine_DeporteFety2004_reference.md) | — | 1-compartment (no model) | 0 | Deporte-Fety R et al., Population pharmacokinetics of short in…, Cancer chemotherapy and pha… (2004) | [10.1007/s00280-003-0729-2](https://doi.org/10.1007/s00280-003-0729-2) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Nguyen_2002_reference](drugs/drug_vinorelbine/Vinorelbine_Nguyen2002_reference.md) | — | 1-compartment (no model) | 0 | Nguyen L et al., Population pharmacokinetics model and l…, British journal of clinical… (2002) | [10.1046/j.1365-2125.2002.01581.x](https://doi.org/10.1046/j.1365-2125.2002.01581.x) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Variol_2002_reference](drugs/drug_vinorelbine/Vinorelbine_Variol2002_reference.md) | — | 1-compartment (no model) | 1 | Variol P et al., A simultaneous oral/intravenous populat…, European journal of clinica… (2002) | [10.1007/s00228-002-0506-x](https://doi.org/10.1007/s00228-002-0506-x) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | **TP53** | `Q322` · IC50 | unknown | [Chiu_2019](drugs/drug_vinorelbine/pgx_Chiu_2019_TP53_Q322.md) | Chiu YC et al., Predicting drug response of tumors from…, BMC medical genomics 12(Sup… (2019) | [10.1186/s12920-018-0460-9](https://doi.org/10.1186/s12920-018-0460-9) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | **TTN** | `Q322` · IC50 | unknown | [Chiu_2019](drugs/drug_vinorelbine/pgx_Chiu_2019_TTN_Q322.md) | Chiu YC et al., Predicting drug response of tumors from…, BMC medical genomics 12(Sup… (2019) | [10.1186/s12920-018-0460-9](https://doi.org/10.1186/s12920-018-0460-9) |

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
| 2026-11-24 06:23 | 0:03 | 5/3/0 | 0/0/0 | 0/0/2 | 4,308/157 | einfracz / qwen3.8-27b | 9 | 4/5 | 7/2 | 0 |

## Coverage

- **PubMed hits:** 122 matched, 56 returned
- **screened:** 9  ·  **relevant:** 8
- **records:** 8  ·  extracted 0  ·  needs review 5  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ferrero_2002.pdf` | Ferrero JM et al., The raltitrexed-vinorelbine combination…, Cancer chemotherapy and pha… (2002) | pd | 5 | [10.1007/s00280-002-0519-2](https://doi.org/10.1007/s00280-002-0519-2) | [12451472](https://www.ncbi.nlm.nih.gov/pubmed/12451472) | metadata signals extractable PD data (Emax) |
| `Tan_2008.pdf` | Tan SH et al., Pharmacogenetics in breast cancer thera…, Clinical cancer research :… (2008) | pgx | 8 | [10.1158/1078-0432.CCR-08-0993](https://doi.org/10.1158/1078-0432.CCR-08-0993) | [19088019](https://www.ncbi.nlm.nih.gov/pubmed/19088019) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Wong_2006.pdf` | Wong M et al., Predictors of vinorelbine pharmacokinet…, Journal of clinical oncolog… (2006) | pgx | 8 | [10.1200/JCO.2005.02.1295](https://doi.org/10.1200/JCO.2005.02.1295) | [16651648](https://www.ncbi.nlm.nih.gov/pubmed/16651648) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Topletz_2013.pdf` | Topletz AR et al., The relative contributions of CYP3A4 an…, Drug metabolism and disposi… (2013) | pgx | 7 | [10.1124/dmd.113.051094](https://doi.org/10.1124/dmd.113.051094) | [23780963](https://www.ncbi.nlm.nih.gov/pubmed/23780963) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-11-24 06:23 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aapro_2010 | irrelevant | 0 | 0 | The paper is a review of aprepitant drug-drug interactions and does not report quantitative pharmacokinetic parameters for vinorelbine. |
| PGx | Aapro_2010 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving aprepitant and mentions vinorelbine, but it does not report pharmacogenomic effects (gene variants) on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Abbasfard_2025 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study investigating drug resistance and cell viability, not a pharmacokinetic study reporting quantitative disposition parameters for vinorelbine. |
| PGx | Abbasfard_2025 | not_relevant | 0 | 1 | The paper describes an experimental in vitro study using siRNA to knock down ABCB1, not a study on how a specific human gene variant or genotype naturally affects the PK or PD of vinorelbine. |
| PGx | Banchi_2025 | not_relevant | 0 | 0 | The paper reports no gene variant, genotype, or phenotype effect on vinorelbine PK or PD; treatment-related changes in gene expression are not pharmacogenomic effects. |
| popPK | Bessho_2009 | irrelevant | 0 | 0 | The study is an in-vitro investigation of drug resistance mechanisms (ABCB1/ABCC10 expression and IC50 changes) in cancer cell lines, not a pharmacokinetic study reporting disposition parameters like clearance, volume, or half-life. |
| PGx | Bessho_2009 | not_relevant | 2 | 2 | The study reports an association between the expression of ABCC10/MRP7 and drug resistance, but it does not report a specific gene variant/genotype effect on a pharmacokinetic (PK) or pharmacodynamic (PD) parameter of vinorelbine. |
| popPK | Celik_2023 | irrelevant | 0 | 0 | The paper focuses on computational chemistry (DFT, vibrational analysis) and molecular docking, containing no pharmacokinetic or disposition parameters. |
| PGx | Celik_2023 | not_relevant | 0 | 0 | The paper describes in silico structural and docking studies of vinorelbine, containing no clinical data on gene variants or pharmacokinetic parameters. |
| popPK | Charasson_2002 | irrelevant | 0 | 0 | The study investigates in-vitro drug-drug interactions on irinotecan metabolism and does not report pharmacokinetic parameters for vinorelbine. |
| PGx | Charasson_2002 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction where vinorelbine inhibits irinotecan metabolism in vitro, not a pharmacogenomic effect on vinorelbine itself. |
| PGx | Deporte-Fety_2004 | not_relevant | 0 | 0 | The paper analyzes population pharmacokinetics based on clinical covariates (LBW, BSA, alkaline phosphatases) but does not investigate or report any genetic variants, genotypes, or pharmacogenomic factors. |
| popPK | Di_2020 | irrelevant | 0 | 0 | The study investigates pharmacological effects and intracellular concentrations in cell lines and xenografts, but does not report population pharmacokinetic parameters (CL, V, Q, t1/2) for vinorelbine. |
| PGx | Di_2020 | not_relevant | 0 | 0 | The paper reports on the pharmacodynamic interaction between two drugs (vinorelbine and lenvatinib) in cell lines and mice, but does not investigate the impact of any specific gene variant, genotype, or patient phenotype on vinorelbine PK/PD. |
| popPK | Fanelli_2016 | irrelevant | 0 | 0 | The study is an in vitro investigation of drug resistance mechanisms in cell lines, not a pharmacokinetic study reporting disposition parameters for vinorelbine. |
| PGx | Fanelli_2016 | not_relevant | 2 | 0 | The paper reports on pharmacodynamic changes (reversal of drug resistance) mediated by transporter inhibition, but does not report specific pharmacokinetic or pharmacodynamic parameters (like AUC, Cmax, or EC50) correlated with specific gene variants or genotypes in a population context. |
| popPK | Ferrero_2002 | irrelevant | 0 | 0 | no_text gate: only 118 chars of text extracted (&lt; 400) |
| PD | Ferrero_2002 | not_relevant | 0 | 0 | The provided text is only the title of a paper and does not contain the full text, data, or numeric PD parameters required to assess the pharmacodynamic relationship. |
| PGx | Ferrero_2002 | not_relevant | 0 | 0 | The paper reports pharmacokinetic and pharmacodynamic interactions of raltitrexed and vinorelbine but does not investigate the impact of genetic variants or genotypes on these parameters. |
| popPK | Gaurav_2024 | irrelevant | 2 | 0 | The paper describes a nanocarrier/drug delivery system study using in vitro and in vivo models, with no evidence of quantitative pharmacokinetic parameter estimation (CL, V, etc.) for vinorelbine. |
| PGx | Gaurav_2024 | not_relevant | 0 | 0 | The paper focuses on a novel drug delivery system (extracellular vesicles) and does not report genetic variants or their effect on the PK/PD of vinorelbine. |
| PGx | Gauvin_2002 | not_relevant | 0 | 0 | The study investigates pharmacokinetics in elderly patients and correlations with platelet counts, but does not report on the impact of any genetic variant or genotype on PK parameters. |
| popPK | Ge_2022 | irrelevant | 0 | 0 | The study is a bioinformatics/pharmacogenomics analysis of lung adenocarcinoma subtypes that mentions vinorelbine only as a recommended therapeutic agent for one subtype, without reporting any pharmacokinetic parameters. |
| popPK | Gusella_2019 | irrelevant | 3 | 2 | The study reports correlations between drug concentrations and toxicity outcomes (cutoffs like 1.57 ng/mL) rather than quantitative disposition parameters (CL, V, T1/2) or a compartmental/population PK model. |
| PGx | Gusella_2019 | not_relevant | 3 | 8 | The study found no significant association between MDR1 genotypes and pharmacokinetic parameters (VNR/dVNR concentrations) or clinical outcomes. |
| popPK | Hahn_2006 | irrelevant | 1 | 0 | This is a clinical efficacy and pharmacogenetic study that does not report quantitative pharmacokinetic parameters (such as clearance, volume, or half-life) for vinorelbine. |
| PGx | Hahn_2006 | not_relevant | 2 | 1 | The pharmacogenetic analysis is specifically for docetaxel metabolism/transport (ABCG2) and survival, not for vinorelbine PK or PD parameters. |
| PGx | Hamimed_2022 | not_relevant | 0 | 0 | The study investigates the impact of demographic covariates (Body Surface Area) on vinorelbine pharmacokinetics but does not report any pharmacogenomic effects (gene variants or genotypes). |
| popPK | Hamimed_2022_2 | relevant | 9 | 0 | The text describes the methodology for a vinorelbine population PK model but contains no numeric parameter estimates or values. |
| PGx | Hamimed_2022_2 | not_relevant | 0 | 0 | The provided text consists entirely of methods describing model development and covariate screening procedures, and contains no results or data regarding the specific impact of gene variants on vinorelbine PK parameters. |
| popPK | Kajita_2000 | irrelevant | 1 | 0 | The study is an in vitro mechanistic investigation of CYP3A4 metabolism and does not report population pharmacokinetic parameters like clearance or volume. |
| PGx | Kajita_2000 | not_relevant | 1 | 0 | The paper reports in vitro metabolic kinetics (Km, Vmax, IC50) and the identification of CYP3A4 as the metabolizing enzyme, but it does not report any gene variant or genotype associated with changes in these parameters in human subjects. |
| popPK | Le_1993 | irrelevant | 0 | 0 | The study reports in vitro enzyme inhibition constants (Ki) for CYP2D6, not pharmacokinetic disposition parameters (CL, V, etc.) for vinorelbine. |
| PGx | Le_1993 | not_relevant | 3 | 0 | The paper reports the inhibition of CYP2D6 by vinorelbine in vitro, not the effect of a patient's genotype/phenotype on vinorelbine's PK or PD parameters. |
| PGx | Leveque_2003 | not_relevant | 0 | 0 | The study investigates the effect of a drug-drug interaction (rifampin on vinorelbine) in animals, not the impact of a human gene variant, genotype, or phenotype on pharmacokinetics or pharmacodynamics. |
| PGx | Levêque_1996 | not_relevant | 1 | 0 | The paper describes general pharmacokinetic parameters and the effect of liver disease but does not report any effects of genetic variants or genotypes on vinorelbine pharmacokinetics or pharmacodynamics. |
| popPK | Loos_2007 | relevant | 7 | 2 | Study reports PK for vinorelbine, but specific quantitative disposition parameters (CL, V, t1/2) are not provided in the evidence, only AUC ratios. |
| PGx | Loos_2007 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction (aprepitant vs. vinorelbine), not a pharmacogenomic effect involving gene variants. |
| popPK | Mamot_2005 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of the immunoliposome delivery vehicle (t1/2 = 21 hours), not the systemic disposition parameters (CL, V) of vinorelbine itself. |
| PGx | Mamot_2005 | not_relevant | 0 | 0 | The paper reports on the efficacy of a targeted delivery vehicle (immunoliposomes) for vinorelbine but does not investigate the impact of genetic variants on pharmacokinetics or pharmacodynamics. |
| popPK | Michaelis_2016 | irrelevant | 0 | 0 | The study investigates the effect of pirinixic acid derivatives on ABCB1-mediated transport of vinorelbine in vitro, rather than reporting pharmacokinetic disposition parameters for vinorelbine. |
| PGx | Michaelis_2016 | not_relevant | 0 | 0 | The paper investigates the effect of pirinixic acid derivatives on ABCB1 transporters and does not report pharmacogenomic effects (gene variants) on the PK/PD of vinorelbine. |
| PGx | Nguyen_2002 | not_relevant | 0 | 0 | The paper describes a population pharmacokinetic model based on clinical covariates (BSA, weight, etc.) and does not investigate any genetic variants or pharmacogenomic factors. |
| popPK | Osawa_2009 | irrelevant | 0 | 0 | The paper is a review on pharmacogenetics and gene polymorphisms in NSCLC treatment, mentioning vinorelbine only as a chemotherapy agent without providing any pharmacokinetic data. |
| PGx | Osawa_2009 | not_relevant | 0 | 0 | The paper mentions vinorelbine only in the context of standard combination therapy regimens and discusses pharmacogenomics for irinotecan, platinum agents, and EGFR inhibitors, but does not report any genetic effects on vinorelbine PK or PD. |
| popPK | Pan_2008 | irrelevant | 0 | 0 | The study is a pharmacogenetic analysis of chemotherapy response based on MDR1 genotypes and does not report quantitative pharmacokinetic parameters (e.g., clearance, volume) for vinorelbine. |
| PGx | Puisset_2005 | not_relevant | 3 | 5 | The paper explicitly states that vinorelbine clearance was not associated with CYP3A5 and ABCB1 genotype, thus no pharmacogenomic effect is reported. |
| PGx | Rugo_2022 | not_relevant | 0 | 0 | UGT1A1 genotype associations are reported for sacituzumab govitecan adverse events, not for vinorelbine pharmacokinetic or pharmacodynamic parameters. |
| popPK | Schott_2006 | irrelevant | 8 | 0 | The paper mentions vinorelbine clearance in the abstract but provides no numeric quantitative parameters or tables with values. |
| PGx | Schott_2006 | not_relevant | 1 | 1 | The study investigated a potential pharmacogenomic effect of CYP3A5 on vinorelbine clearance but found no relationship. |
| popPK | Sertel_2011 | irrelevant | 0 | 0 | The paper focuses on molecular docking and pharmacogenomics (mechanistic/cytotoxicity), not pharmacokinetic parameter estimation. |
| PGx | Sertel_2011 | not_relevant | 3 | 5 | The paper reports in vitro molecular docking, tubulin binding, and cellular cross-resistance to multidrug resistance (P-gp), but does not report in vivo pharmacokinetic or pharmacodynamic parameters altered by specific human gene variants (pharmacogenomics). |
| popPK | Sun_2024 | irrelevant | 0 | 0 | The paper is a bioinformatic analysis of lncRNAs in renal cell carcinoma and only lists vinorelbine as a candidate drug for sensitivity, containing no PK data. |
| PGx | Sun_2024 | not_relevant | 0 | 0 | The paper reports lncRNA prognostic markers and in silico drug sensitivity predictions for ccRCC, not the effect of a specific gene variant on the pharmacokinetics or pharmacodynamics of vinorelbine. |
| popPK | Takigawa_2008 | irrelevant | 1 | 0 | The paper is a general review discussing MDR1 polymorphisms and their potential effects on pharmacokinetics/toxicity, without reporting specific quantitative PK parameter values (e.g., CL, V) for vinorelbine. |
| popPK | Tamari_2022 | irrelevant | 0 | 0 | The study focuses on the molecular mechanisms of vinorelbine resistance (Nrf2/p-Fyn/ABCB1 axis) in cell lines and tissue samples, not on pharmacokinetic parameters. |
| PGx | Tamari_2022 | not_relevant | 3 | 1 | The study focuses on the molecular mechanism of acquired drug resistance via the Nrf2/p-Fyn/ABCB1 axis rather than a specific pharmacogenomic variant's effect on PK/PD parameters. |
| popPK | Tan_2008 | irrelevant | 0 | 0 | This is a review of pharmacogenetics that mentions vinorelbine only in the context of genetic polymorphisms affecting its disposition, without reporting any original quantitative PK parameters. |
| PGx | Tan_2008 | not_relevant | 5 | 2 | The paper is a review that mentions vinorelbine only in a general list of reviewed drugs without reporting specific pharmacogenomic effect sizes or quantitative PK/PD data. |
| popPK | Tang_2026 | irrelevant | 0 | 0 | This is a bioinformatics and in-vitro gene expression study; vinorelbine is only mentioned as a potential chemotherapeutic agent in a drug sensitivity prediction, with no pharmacokinetic data or parameters reported. |
| PGx | Tang_2026 | not_relevant | 0 | 0 | The paper discusses drug sensitivity predictions in hepatocellular carcinoma but does not report on how specific gene variants affect the pharmacokinetics or pharmacodynamics of vinorelbine. |
| popPK | Tiwari_2022 | irrelevant | 0 | 0 | The study is a pharmacogenomics analysis of clinical response to chemotherapy, not a pharmacokinetic study, and vinorelbine is only mentioned as a standard drug in the introduction while the actual patients received different agents (carboplatin, gemcitabine, paclitaxel, etoposide). |
| PGx | Tiwari_2022 | not_relevant | 1 | 2 | The study focuses on carboplatin-based chemotherapy response in lung cancer and does not report pharmacokinetic or pharmacodynamic parameters for vinorelbine. |
| popPK | Topletz_2013 | irrelevant | 1 | 1 | The study is an in-vitro mechanistic investigation of CYP enzyme contributions to metabolism, lacking in vivo pharmacokinetic parameters like clearance (CL), volume (V), or half-life. |
| PGx | Topletz_2013 | not_relevant | 5 | 8 | The study reports in vitro kinetic parameters (Km, Vmax, intrinsic clearance) and notes that CYP3A5 polymorphism likely has minimal effect on systemic clearance, but it does not report fitted effect sizes for in vivo PK/PD parameters. |
| popPK | Toso_1995 | irrelevant | 4 | 0 | The paper is a review that qualitatively describes the three-compartment model and high clearance but provides no specific quantitative PK parameter values. |
| PGx | Toso_1995 | not_relevant | 0 | 0 | The text is a general review of vinorelbine's pharmacology and clinical efficacy, containing no mention of gene variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | Variol_2002 | relevant | 10 | 3 | The paper reports a population PK model with specific numeric estimates for bioavailability and variability, but primary disposition parameters like absolute clearance and volumes are not explicitly provided in the text. |
| PGx | Variol_2002 | not_relevant | 0 | 0 | The paper analyzes population pharmacokinetics of vinorelbine and identifies clinical covariates (e.g., body surface area, platelet count) but does not report any pharmacogenomic effects or gene variants. |
| popPK | Wang_2022 | irrelevant | 0 | 0 | no_text gate: extracted text is mostly non-alphabetic (garbled or binary) |
| PGx | Wang_2022 | not_relevant | 0 | 0 | The paper reports a pharmacoepidemiological study (propensity score matching) on bleeding risk with DOACs and chemotherapy, containing no pharmacogenomic data or specific PK/PD parameters for vinorelbine. |
| popPK | Washio_2019 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of drug resistance mechanisms (EC50) in cell lines, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Washio_2019 | not_relevant | 4 | 5 | The study describes in vitro pharmacodynamic effects of endogenous P-gp expression on vinorelbine efficacy in cell lines, but it is a cellular mechanistic study rather than a clinical pharmacogenomic study of a human genetic variant (genotype). |
| popPK | Wong_2006 | irrelevant | 0 | 0 | no_text gate: only 87 chars of text extracted (&lt; 400) |
| popPK | Zhou-Pan_1993 | irrelevant | 0 | 0 | The study investigates vinblastine metabolism in vitro, not vinorelbine pharmacokinetics, and contains no PK parameters for vinorelbine. |
| PGx | Zhou-Pan_1993 | not_relevant | 0 | 0 | The paper studies vinblastine, not vinorelbine, and focuses on protein expression/correlation rather than specific gene variants. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvinorelbine%5D&body=Drug%3A%20vinorelbine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_vinorelbine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 06:22 UTC</sub>
