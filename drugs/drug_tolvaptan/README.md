<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03X&quot;,&quot;href&quot;:&quot;atc/C03X.md&quot;},{&quot;label&quot;:&quot;tolvaptan&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tolvaptan_Lanke2019_reference&quot;,&quot;label&quot;:&quot;Lanke_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tolvaptan/Tolvaptan_Lanke2019_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tolvaptan_Plosker2010_reference&quot;,&quot;label&quot;:&quot;Plosker_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tolvaptan/Tolvaptan_Plosker2010_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tolvaptan_Shoaf2017_reference&quot;,&quot;label&quot;:&quot;Shoaf_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tolvaptan/Tolvaptan_Shoaf2017_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tolvaptan_Van2013_reference&quot;,&quot;label&quot;:&quot;Van_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tolvaptan/Tolvaptan_Van2013_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tolvaptan_Bhatt2014_reference&quot;,&quot;label&quot;:&quot;Bhatt_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tolvaptan/Tolvaptan_Bhatt2014_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# tolvaptan

- **generic name:** tolvaptan
- **ATC codes:** `C03XA01`
- **DrugBank:** [DB06212](https://go.drugbank.com/drugs/DB06212) · **PubChem:** [CID 443894](https://pubchem.ncbi.nlm.nih.gov/compound/443894)
- **molar mass:** 448.941 g/mol (C26H25ClN2O3) — DrugBank
- **groups:** approved, investigational

## About

Tolvaptan is a vasopressin receptor antagonist used to treat low blood sodium (hyponatremia) linked to heart failure, cirrhosis, or inappropriate antidiuretic hormone secretion, and is also authorised for autosomal dominant polycystic kidney disease. It remains in use, with authorised products in the European Union, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q426132](https://www.wikidata.org/wiki/Q426132) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| tolvaptan | parent | 448.941 | C26H25ClN2O3 | DrugBank | [443894](https://pubchem.ncbi.nlm.nih.gov/compound/443894) | Lanke_2019, Van_2013 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 19:58 | 35:35 | 4/0/1 | 0/0/0 | 1/0/5 | 709,298/106,275 | ollama / qwen3.8:27b-mtp-q8_0 | 33 | 25/13 | 16/17 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.133), gpt-oss:120b (not confirmed, agreement 0.5), gpt-5.6-luna (not confirmed, agreement 0.571). Primary extraction retained.">cross-check: disputed 0/3</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Lanke_2019_reference](drugs/drug_tolvaptan/Tolvaptan_Lanke2019_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 (+3 cov.) | Lanke S et al., Population Pharmacokinetic Analyses and…, Journal of clinical pharmac… (2019) | [10.1002/jcph.1370](https://doi.org/10.1002/jcph.1370) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.4), gpt-oss:120b (not confirmed, agreement 0.467). Primary extraction retained.">cross-check: disputed 0/2</span> | [Plosker_2010_reference](drugs/drug_tolvaptan/Tolvaptan_Plosker2010_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Plosker GL, Tolvaptan, Drugs (2010) | [10.2165/11204630-000000000-00000](https://doi.org/10.2165/11204630-000000000-00000) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (partly confirmed, agreement 0.857). Primary extraction retained.">cross-check: partial 1/2</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Shoaf_2017_reference](drugs/drug_tolvaptan/Tolvaptan_Shoaf2017_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Shoaf SE et al., Low-dose tolvaptan PK/PD: comparison of…, European journal of clinica… (2017) | [10.1007/s00228-017-2302-7](https://doi.org/10.1007/s00228-017-2302-7) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.974), gpt-oss:120b (not confirmed, agreement 0.921). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Van_2013_reference](drugs/drug_tolvaptan/Tolvaptan_Van2013_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 (+9 cov.) | Van Wart SA et al., Population pharmacokinetics of tolvapta…, Biopharmaceutics & drug dis… (2013) | [10.1002/bdd.1849](https://doi.org/10.1002/bdd.1849) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.692), gpt-oss:120b (not confirmed, agreement 0.571). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: T6_deviations</sub><br><sub>route_to: `engineer`</sub> | [Bhatt_2014_reference](drugs/drug_tolvaptan/Tolvaptan_Bhatt2014_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Bhatt PR et al., Review of Tolvaptan's Pharmacokinetic a…, Journal of clinical medicine (2014) | [10.3390/jcm3041276](https://doi.org/10.3390/jcm3041276) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Adverse-reaction risk allele; no quantitative PK/PD parameter effect.">safety allele</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓ 2/2</span> | **UGT1A1** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Nguyen_2023](drugs/drug_tolvaptan/pgx_Nguyen_2023_UGT1A1_safety.md) | Nguyen M et al., Tolvaptan-induced isolated elevation of…, SAGE open medical case repo… (2023) | [10.1177/2050313X231169841](https://doi.org/10.1177/2050313X231169841) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25), gpt-oss:120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial 0/2</span> | **CYP3A5** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Hoshikawa_2020](drugs/drug_tolvaptan/pgx_Hoshikawa_2020_CYP3A5_Q100.md) | Hoshikawa K et al., Impact of CYP3A5 genotype on tolvaptan…, Basic & clinical pharmacolo… (2020) | [10.1111/bcpt.13355](https://doi.org/10.1111/bcpt.13355) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓ 2/2</span> | **SVEP1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Kawaratani_2021](drugs/drug_tolvaptan/pgx_Kawaratani_2021_SVEP1_Q100.md) | Kawaratani H et al., A genome-wide association study identif…, Liver international : offic… (2021) | [10.1111/liv.15022](https://doi.org/10.1111/liv.15022) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25), gpt-oss:120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial 0/2</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | **CYP3A5** | `Q27` · CL/F | metabolism | [Mazzarino_2017](drugs/drug_tolvaptan/pgx_Mazzarino_2017_CYP3A5_Q27.md) | Mazzarino M et al., Characterization of the phase I and pha…, Journal of pharmaceutical a… (2017) | [10.1016/j.jpba.2017.06.054](https://doi.org/10.1016/j.jpba.2017.06.054) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25), gpt-oss:120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial 0/2</span> | **PKD1** | `Q335` · slope | target | [Sekine_2020](drugs/drug_tolvaptan/pgx_Sekine_2020_PKD1_Q335.md) | Sekine A et al., Genetics May Predict Effectiveness of T…, American journal of nephrol… (2020) | [10.1159/000509817](https://doi.org/10.1159/000509817) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25), gpt-oss:120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial 0/2</span> | **PKD2** | `Q335` · slope | target | [Sekine_2020](drugs/drug_tolvaptan/pgx_Sekine_2020_PKD2_Q335.md) | Sekine A et al., Genetics May Predict Effectiveness of T…, American journal of nephrol… (2020) | [10.1159/000509817](https://doi.org/10.1159/000509817) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=tolvaptan).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` metabolism | PGx paper |
| metabolism | liver | `CYP3A4` substrate, `CYP3A5` metabolism, `UGT1A1` safety_allele | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` metabolism, `UGT1A1` safety_allele | DrugBank actor |

<sub>Actors without a tissue in the table: AVPR1A (target), AVPR2 (target), PKD1 (target), PKD2 (target), SVEP1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 115 matched, 63 returned
- **screened:** 24  ·  **relevant:** 3
- **records:** 5  ·  extracted 4  ·  needs_review 1  ·  rejected 0  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Akutsu_2020 | not_relevant | 0 | 0 | The paper describes the development and validation of an analytical LC-MS/MS method for measuring tolvaptan enantiomers and does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Aperis_2011 | not_relevant | 0 | 0 | The paper is a general review of tolvaptan's clinical use and metabolism (CYP3A4) but does not report specific pharmacogenomic effects of gene variants on PK or PD parameters. |
| popPK | Beaudoin_2019 | relevant | 8 | 2 | The study reports quantitative clearance parameters for tolvaptan in rat isolated perfused livers, but the specific numeric values are located in Table 1 which is not fully provided in the evidence. |
| PD | Bhatt_2014 | not_relevant | 2 | 1 | The paper is a qualitative review of pharmacokinetic and pharmacodynamic properties and drug interactions, lacking specific numeric PD parameters or extractable concentration-effect curves in the provided text. |
| PGx | Bhatt_2014 | not_relevant | 0 | 0 | The paper is a general review of tolvaptan's PK/PD and drug interactions, with no mention of genetic variants or pharmacogenomic effects. |
| PGx | Bou_2026 | not_relevant | 0 | 0 | The paper is a review of SGLT2 inhibitors in ADPKD and does not report pharmacogenomic effects on tolvaptan PK/PD parameters. |
| popPK | Castro-Suárez_2020 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for nimotuzumab, not tolvaptan. |
| PD | Castro-Suárez_2020 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics (PopPK) of nimotuzumab, not tolvaptan, and does not report a pharmacodynamic (PD) model or numeric PD parameters for the drug of interest. |
| popPK | Chebib_2025 | irrelevant | 0 | 0 | The study is a pooled database analysis of clinical efficacy (eGFR decline) in ADPKD patients and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for tolvaptan. |
| PGx | Chen_2025 | not_relevant | 0 | 0 | The text is a review of emerging therapies for ADPKD and mentions tolvaptan only as background context without reporting any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Cukoski_2023 | irrelevant | 0 | 0 | The study analyzes plasma sodium evolution in hyponatremia patients and does not report pharmacokinetic parameters (CL, V, etc.) for tolvaptan. |
| PGx | Dixon_2008 | not_relevant | 0 | 0 | The paper is a general review of tolvaptan's clinical efficacy and safety, mentioning CYP3A4 metabolism but not reporting any specific pharmacogenomic effects of gene variants on PK or PD parameters. |
| PD | Dumont_2025 | not_relevant | 2 | 1 | The paper reports dose-response data (IC50s) for the novel compound GLPG2737, but for tolvaptan it only provides qualitative comparisons and single-dose effect percentages without deriving specific PD parameters like Emax or EC50. |
| PGx | Fang_2016 | not_relevant | 2 | 5 | The study investigates the role of SULT enzymes in tolvaptan metabolism and cytotoxicity in cell lines, but does not report pharmacogenomic effects of specific gene variants on PK or PD parameters in humans. |
| PD | Golestaneh_2004 | not_relevant | 1 | 0 | The text is a narrative review discussing mechanisms of diuretic resistance and the general efficacy of vaptans, but it does not report any specific numeric PD parameters (e.g., Emax, EC50) or exposure-response data for tolvaptan. |
| PGx | Hadla_2026 | not_relevant | 0 | 0 | The paper investigates a pharmacodynamic interaction between tolvaptan and probenecid (a drug-drug interaction), not a pharmacogenomic effect (gene variant/genotype) on tolvaptan's PK or PD. |
| popPK | Helmlinger_2019 | irrelevant | 0 | 0 | The paper is a review of QSP modeling workflows and case studies for SGLT2 inhibitors and oncology, with tolvaptan mentioned only in passing without any PK parameter data. |
| PD | Helmlinger_2019 | not_relevant | 0 | 0 | The paper is a review of QSP modeling workflows and case studies for SGLT2 inhibitors and immuno-oncology drugs; it does not contain any data, analysis, or parameters for tolvaptan. |
| PD | Hines_2020 | not_relevant | 2 | 1 | The text is a review/case study summary that qualitatively mentions pharmacodynamics but does not provide specific numeric PD parameters or exposure-response data. |
| PGx | Honda_2024 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (rifampicin inducing CYP3A4) affecting tolvaptan, not a pharmacogenomic effect based on a specific gene variant or genotype. |
| popPK | Komatsu_2015 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for digoxin, not tolvaptan; tolvaptan is only mentioned as a co-administered drug that did not significantly affect digoxin clearance. |
| PD | Komatsu_2015 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics of digoxin, not tolvaptan, and does not report any pharmacodynamic or exposure-response relationships. |
| popPK | Kwag_2026 | irrelevant | 0 | 0 | The study is an epidemiological analysis of air pollution and kidney function where tolvaptan is only a covariate, containing no pharmacokinetic parameters. |
| PD | Lanke_2019 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for tolvaptan, including dose-dependent bioavailability, but does not include any pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Marshall_2026 | irrelevant | 0 | 0 | The study is a clinical effectiveness trial measuring eGFR slopes, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Mazzarino_2017 | not_relevant | 3 | 2 | The paper reports in vitro metabolic differences based on CYP3A5 allelic variants, but does not report in vivo pharmacokinetic or pharmacodynamic parameters (e.g., AUC, Cmax, PD response) in humans. |
| PD | Mekahli_2023 | not_relevant | 0 | 0 | The paper is a clinical trial report focusing on efficacy (kidney volume, eGFR) and safety; it does not report a pharmacodynamic model, exposure-response analysis, or numeric PD parameters (e.g., Emax, EC50) for tolvaptan. |
| PGx | Nguyen_2023 | not_relevant | 4 | 5 | The paper reports a clinical case of altered drug safety (isolated hyperbilirubinemia) in a patient with a specific genotype (UGT1A1), but it does not report changes in standard pharmacokinetic (e.g., AUC, Cmax) or pharmacodynamic (e.g., aquaresis, serum osmolality) parameters of tolvaptan. |
| popPK | Oka_2021 | irrelevant | 0 | 0 | This is a clinical outcomes study assessing renal function and diuretic dosing, not a pharmacokinetic study, so no disposition parameters are reported. |
| popPK | Oruc_2026 | irrelevant | 0 | 0 | The study is a clinical retrospective analysis of inflammatory markers and kidney volume progression in ADPKD patients and contains no pharmacokinetic parameters or population-PK modeling for tolvaptan. |
| PD | Perrone_2020 | not_relevant | 2 | 1 | The paper is a clinical trial comparing formulations that reports group-level mean changes in efficacy endpoints (TKV, urine volume) but does not provide individual subject concentration data or fit a pharmacodynamic model to derive numeric PD parameters like Emax or EC50. |
| PD | Plosker_2010 | not_relevant | 0 | 0 | The text describes a safety/tolerability analysis from clinical trials and does not report any pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters. |
| popPK | Saha_2022 | irrelevant | 0 | 0 | The paper is a review on electron crystallography and contains no pharmacokinetic data for tolvaptan. |
| PD | Saha_2022 | not_relevant | 0 | 0 | The paper is a review on electron diffraction crystallography and contains no pharmacodynamic or exposure-response data for tolvaptan. |
| PGx | Shoaf_2005 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction (amiodarone and tolvaptan) and does not report any pharmacogenomic effects on PK/PD parameters. |
| PGx | Shoaf_2012 | not_relevant | 0 | 0 | The study investigates the effects of CYP3A4 inhibitors and inducers (ketoconazole and rifampicin) on tolvaptan PK/PD, not the effects of genetic variants or genotypes. |
| PGx | Shoaf_2012_2 | not_relevant | 0 | 0 | The study investigates the effect of grapefruit juice (a food-drug interaction) on tolvaptan pharmacokinetics, not the effect of a gene variant or genotype. |
| PD | Shoaf_2012_3 | not_relevant | 0 | 0 | The provided text consists of the title, abstract, and methods sections of a PK interaction study, containing no results, data, or numeric PD parameters for tolvaptan. |
| popPK | Utiel_2023 | irrelevant | 0 | 0 | The study analyzes predictors of urine output in ADPKD patients and does not report pharmacokinetic parameters (CL, V, ka, etc.) for tolvaptan. |
| PD | Van_2013 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for tolvaptan but does not include a pharmacodynamic (PD) model or report any numeric exposure-response or dose-response parameters (e.g., Emax, EC50). |
| PGx | Van_2013 | not_relevant | 0 | 10 | The paper investigates the impact of disease states (CHF, hepatic cirrhosis) and body weight on tolvaptan PK, but does not report any pharmacogenomic effects related to gene variants or genotypes. |
| popPK | Van_2013_2 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for hydrochlorothiazide (HCTZ), not tolvaptan, which was only a co-administered agent in a subset of the data. |
| PD | Van_2013_2 | not_relevant | 0 | 0 | The paper focuses exclusively on the population pharmacokinetics of hydrochlorothiazide (HCTZ) and does not contain any data, analysis, or parameters related to tolvaptan or its pharmacodynamics. |
| popPK | Wilk_2023 | irrelevant | 0 | 0 | The paper is an in-silico drug repurposing study for ADPKD that mentions tolvaptan only as background context and does not report any pharmacokinetic parameters. |
| PD | Wilk_2023 | not_relevant | 0 | 0 | The paper is an in-silico transcriptomic analysis for drug repurposing and does not report any pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters for tolvaptan. |
| PGx | Wilk_2023 | not_relevant | 0 | 0 | The paper focuses on drug repurposing for ADPKD using transcriptomic data and does not report pharmacogenomic effects on tolvaptan's PK or PD parameters. |
| popPK | Wilson_2018 | irrelevant | 0 | 0 | The paper is a bioinformatics study on drug safety pathways (PathFX) and mentions tolvaptan only as a benchmark drug for indication identification, containing no pharmacokinetic data. |
| PD | Wilson_2018 | not_relevant | 0 | 0 | The paper describes a computational method (PathFX) for identifying signaling pathways and drug-disease associations; it does not report any pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters for tolvaptan or any other drug. |
| PD | Zhong_2025 | not_relevant | 0 | 0 | The paper focuses on the discovery of a new compound (XYDC2050) and reports in vitro binding/inhibition data (Ki, IC50) and qualitative in vivo efficacy, but does not report a pharmacodynamic exposure-response or dose-response relationship for tolvaptan. |
| popPK | unknown_2021 | irrelevant | 0 | 0 | no_text gate: only 85 chars of text extracted (&lt; 400) |
| PD | unknown_2021 | not_relevant | 0 | 0 | The provided text is only a header for conference abstracts and contains no specific data, models, or parameters for tolvaptan. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 19:25 UTC</sub>
