<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;phenobarbital&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Phenobarbital_TeixeiradaSilva2022_reference&quot;,&quot;label&quot;:&quot;Teixeira-da-Silva_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_phenobarbital/Phenobarbital_TeixeiradaSilva2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# phenobarbital

- **generic name:** phenobarbital
- **ATC codes:** `N03AA02`
- **DrugBank:** [DB01174](https://go.drugbank.com/drugs/DB01174) · **PubChem:** [CID 4763](https://pubchem.ncbi.nlm.nih.gov/compound/4763)
- **molar mass:** 232.2353 g/mol (C12H12N2O3) — DrugBank
- **groups:** approved, investigational

## About

Phenobarbital is a barbiturate anticonvulsant used to treat epilepsy and seizures, including status epilepticus and neonatal seizures, and has also been used for sleep problems and anxiety. It remains in use, is listed as an essential medicine by the WHO, and is approved, though today it is used relatively sparingly for epilepsy.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q407241](https://www.wikidata.org/wiki/Q407241) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| phenobarbital | parent | 232.235 | C12H12N2O3 | DrugBank | [4763](https://pubchem.ncbi.nlm.nih.gov/compound/4763) | Stoschus_2025, Teixeira-da-Silva_2020 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 19:44 | 3:43 | 1/3/1 | 0/0/0 | 1/0/2 | 167,797/10,152 | einfracz / qwen3.8-27b | 23 | 4/18 | 21/2 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.7), gpt-oss:120b (partly confirmed, agreement 0.429). Primary extraction retained.">cross-check: partial 0/2</span> | [Teixeira-da-Silva_2022_reference](drugs/drug_phenobarbital/Phenobarbital_TeixeiradaSilva2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Teixeira-da-Silva P et al., Population Pharmacokinetics of Valproic…, Pharmaceutics (2022) | [10.3390/pharmaceutics14040811](https://doi.org/10.3390/pharmaceutics14040811) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q95 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Stoschus_2025_reference](drugs/drug_phenobarbital/Phenobarbital_Stoschus2025_reference.md) | — | 1-compartment (no model) | 3 | Stoschus M et al., Optimizing phenobarbital dosing in crit…, Epilepsia (2025) | [10.1111/epi.18517](https://doi.org/10.1111/epi.18517) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.667). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Methaneethorn_2021_reference](drugs/drug_phenobarbital/Phenobarbital_Methaneethorn2021_reference.md) | — | 1-compartment (no model) | 0 | Methaneethorn J et al., Pharmacokinetic variability of phenobar…, European journal of clinica… (2021) | [10.1007/s00228-020-03011-x](https://doi.org/10.1007/s00228-020-03011-x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Moffett_2018_reference](drugs/drug_phenobarbital/Phenobarbital_Moffett2018_reference.md) | — | 1-compartment (no model) | 0 | Moffett BS et al., Phenobarbital population pharmacokineti…, Epilepsia (2018) | [10.1111/epi.14447](https://doi.org/10.1111/epi.14447) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.714). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Teixeira-da-Silva_2020_reference](drugs/drug_phenobarbital/Phenobarbital_TeixeiradaSilva2020_reference.md) | — | 1-compartment (no model) | 0 | Teixeira-da-Silva P et al., Population pharmacokinetics of phenobar…, European journal of pharmac… (2020) | [10.1016/j.ejps.2020.105484](https://doi.org/10.1016/j.ejps.2020.105484) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Adverse-reaction risk allele; no quantitative PK/PD parameter effect.">safety allele</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | **CYP2C9** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Saruwatari_2010](drugs/drug_phenobarbital/pgx_Saruwatari_2010_CYP2C9_safety.md) | Saruwatari J et al., Update on the Genetic Polymorphisms of…, Pharmaceuticals (Basel, Swi… (2010) | [10.3390/ph3082709](https://doi.org/10.3390/ph3082709) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | **CYP2C19** | `Q27` · CL/F | metabolism | [Saruwatari_2010](drugs/drug_phenobarbital/pgx_Saruwatari_2010_CYP2C19_Q27.md) | Saruwatari J et al., Update on the Genetic Polymorphisms of…, Pharmaceuticals (Basel, Swi… (2010) | [10.3390/ph3082709](https://doi.org/10.3390/ph3082709) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | **UGT2B7** | `Q27` · CL/F | metabolism | [Saruwatari_2010](drugs/drug_phenobarbital/pgx_Saruwatari_2010_UGT2B7_Q27.md) | Saruwatari J et al., Update on the Genetic Polymorphisms of…, Pharmaceuticals (Basel, Swi… (2010) | [10.3390/ph3082709](https://doi.org/10.3390/ph3082709) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=phenobarbital).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inducer/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inducer/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inducer/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inducer/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inducer/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inducer/substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCC1` inducer | DrugBank actor |
| distribution | lung | `ABCC1` inducer | DrugBank actor |
| metabolism | kidney | `CYP3A5` inducer, `UGT2B7` inducer/metabolism | DrugBank actor |
| metabolism | liver | `CYP1A2` inducer, `CYP2A6` inducer, `CYP2B6` inducer, `CYP2C19` inducer/metabolism/substrate, `CYP2C8` inducer, `CYP2C9` inducer/safety_allele/substrate, `CYP2E1` inducer/substrate, `CYP3A4` inducer, `CYP3A5` inducer, `CYP3A7` inducer, `UGT1A1` inducer, `UGT2B7` inducer/metabolism | DrugBank actor |
| metabolism | lung | `CYP1A1` inducer | DrugBank actor |
| metabolism | small intestine | `CYP1A1` inducer, `CYP3A4` inducer, `CYP3A5` inducer, `UGT1A1` inducer, `UGT2B7` inducer/metabolism | DrugBank actor |
| excretion | kidney | `ABCC2` inducer | DrugBank actor |
| excretion | liver | `ABCB11` inducer, `ABCC2` inducer, `ABCC3` inducer | DrugBank actor |
| excretion | small intestine | `ABCC2` inducer, `ABCC3` inducer | DrugBank actor |

<sub>Actors without a tissue in the table: CHRNA4 (target), CHRNA7 (target), CYP2C18 (substrate), CYP4B1 (inducer), GABRA1 (potentiator), GRIA2 (target), GRIK2 (target), GRIN1 (target), NR1I2 (activator), SLCO2A1 (inducer).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 1038 matched, 88 returned
- **screened:** 4  ·  **relevant:** 3
- **records:** 5  ·  extracted 1  ·  needs_review 1  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_20 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Moffett_2018.pdf` | Moffett BS et al., Phenobarbital population pharmacokineti…, Epilepsia (2018) | popPK | 10 | [10.1111/epi.14447](https://doi.org/10.1111/epi.14447) | [29897629](https://pubmed.ncbi.nlm.nih.gov/29897629) | The study is a population PK analysis of phenobarbital in humans that identifies specific covariates and a one-compartment model, but the specific numeric parameter estimates (CL, V values) are not explicitly listed in the abstract or evidence provided. |
| `Teixeira-da-Silva_2020.pdf` | Teixeira-da-Silva P et al., Population pharmacokinetics of phenobar…, European journal of pharmac… (2020) | popPK | 10 | [10.1016/j.ejps.2020.105484](https://doi.org/10.1016/j.ejps.2020.105484) | [32707172](https://pubmed.ncbi.nlm.nih.gov/32707172) | The abstract provides the specific quantitative equation for apparent clearance (CL/F) derived from the population PK model, including specific coefficients for BSA and drug interactions. |
| `Dingemanse_1989.pdf` | Dingemanse J et al., Pharmacokinetic modeling of the anticon…, The Journal of pharmacology… (1989) | popPK | 5 | not captured | [2724142](https://pubmed.ncbi.nlm.nih.gov/2724142) | The paper reports a PK parameter (elimination half-life) for phenobarbital in rats, but lacks other standard disposition parameters (CL, Vd) and is primarily a concentration-effect modeling study. |
| `Ryu_2021.pdf` | Ryu S et al., External evaluation of the predictive p…, British journal of clinical… (2021) | popPK | 5 | [10.1111/bcp.14803](https://doi.org/10.1111/bcp.14803) | [33638184](https://pubmed.ncbi.nlm.nih.gov/33638184) | The paper is an external evaluation of existing models and does not report original quantitative population pharmacokinetic parameter values (CL, V, etc.) for phenobarbital in the provided evidence. |
| `Falcão_2012.pdf` | Falcão A et al., Pharmacokinetics, drug interactions and…, CNS drugs (2012) | pd | 5 | [10.2165/11596290-000000000-00000](https://doi.org/10.2165/11596290-000000000-00000) | [22171585](https://www.ncbi.nlm.nih.gov/pubmed/22171585) | metadata signals extractable PD data (exposure-response) |
| `Schoemaker_2016.pdf` | Schoemaker R et al., Brivaracetam Population Pharmacokinetic…, Journal of clinical pharmac… (2016) | pd | 5 | [10.1002/jcph.761](https://doi.org/10.1002/jcph.761) | [27146213](https://www.ncbi.nlm.nih.gov/pubmed/27146213) | metadata signals extractable PD data (Exposure-Response) |
| `Yang_2024.pdf` | Yang J et al., A pharmacokinetic-pharmacodynamic model…, Biotechnology & genetic eng… (2024) | pd | 5 | [10.1080/02648725.2023.2199232](https://doi.org/10.1080/02648725.2023.2199232) | [37018446](https://www.ncbi.nlm.nih.gov/pubmed/37018446) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Leppik_1979.pdf` | Leppik IE et al., Intravenous phenytoin and phenobarbital…, Epilepsia (1979) | pd | 4 | [10.1111/j.1528-1157.1979.tb04796.x](https://doi.org/10.1111/j.1528-1157.1979.tb04796.x) | [446431](https://www.ncbi.nlm.nih.gov/pubmed/446431) | metadata signals extractable PD data (EC50) |
| `Hagos_2019.pdf` | Hagos FT et al., Factors Contributing to Fentanyl Pharma…, Clinical pharmacokinetics (2019) | pgx | 8 | [10.1007/s40262-019-00773-1](https://doi.org/10.1007/s40262-019-00773-1) | [31168770](https://www.ncbi.nlm.nih.gov/pubmed/31168770) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Lee_2012.pdf` | Lee SM et al., Effects of cytochrome P450 (CYP)2C19 po…, Archives of disease in chil… (2012) | pgx | 8 | [10.1136/archdischild-2011-300538](https://doi.org/10.1136/archdischild-2011-300538) | [22331680](https://www.ncbi.nlm.nih.gov/pubmed/22331680) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Saruwatari_2014.pdf` | Saruwatari J et al., Effects of CYP2C19 and P450 oxidoreduct…, Therapeutic drug monitoring (2014) | pgx | 8 | [10.1097/FTD.0000000000000015](https://doi.org/10.1097/FTD.0000000000000015) | [24345815](https://www.ncbi.nlm.nih.gov/pubmed/24345815) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Van_2021.pdf` | Van Daele R et al., Concomitant use of isavuconazole and CY…, Mycoses (2021) | pgx | 8 | [10.1111/myc.13300](https://doi.org/10.1111/myc.13300) | [33963620](https://www.ncbi.nlm.nih.gov/pubmed/33963620) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Yukawa_2006.pdf` | Yukawa E et al., Effect of CYP2C19 genetic polymorphism…, Journal of clinical pharmac… (2006) | pgx | 8 | [10.1111/j.1365-2710.2006.00712.x](https://doi.org/10.1111/j.1365-2710.2006.00712.x) | [16789993](https://www.ncbi.nlm.nih.gov/pubmed/16789993) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Magnusson_2006.pdf` | Magnusson MO et al., A mechanism-based integrated pharmacoki…, Pharmaceutical research (2006) | pgx | 7 | [10.1007/s11095-005-9571-z](https://doi.org/10.1007/s11095-005-9571-z) | [16525862](https://www.ncbi.nlm.nih.gov/pubmed/16525862) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Manis_2023.pdf` | Manis MM et al., Managing the Drug-Drug Interaction With…, Hospital pharmacy (2023) | pgx | 7 | [10.1177/00185787221150928](https://doi.org/10.1177/00185787221150928) | [37360203](https://www.ncbi.nlm.nih.gov/pubmed/37360203) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Reidenberg_1995.pdf` | Reidenberg P et al., Effects of felbamate on the pharmacokin…, Clinical pharmacology and t… (1995) | pgx | 7 | [10.1016/0009-9236(95)90244-9](https://doi.org/10.1016/0009-9236(95)90244-9) | [7554701](https://www.ncbi.nlm.nih.gov/pubmed/7554701) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Tolbert_2016.pdf` | Tolbert D et al., Drug-metabolism mechanism: Knowledge-ba…, Journal of clinical pharmac… (2016) | pgx | 7 | [10.1002/jcph.603](https://doi.org/10.1002/jcph.603) | [26224203](https://www.ncbi.nlm.nih.gov/pubmed/26224203) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Walzer_2012.pdf` | Walzer M et al., Pharmacokinetic drug interactions betwe…, Pharmacotherapy (2012) | pgx | 7 | [10.1002/j.1875-9114.2012.01028.x](https://doi.org/10.1002/j.1875-9114.2012.01028.x) | [22422635](https://www.ncbi.nlm.nih.gov/pubmed/22422635) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Wiemann_2023.pdf` | Wiemann C et al., Boscalid shows increased thyroxin-glucu…, Journal of applied toxicolo… (2023) | pgx | 7 | [10.1002/jat.4427](https://doi.org/10.1002/jat.4427) | [36549901](https://www.ncbi.nlm.nih.gov/pubmed/36549901) | metadata signals extractable PGX data (CYP1A, PK/PD-context) |
| `Chiddarwar_2017.pdf` | Chiddarwar AS et al., Genetic Variations in Bilirubin Metabol…, Annals of human genetics (2017) | pgx | 5 | [10.1111/ahg.12179](https://doi.org/10.1111/ahg.12179) | [27943244](https://www.ncbi.nlm.nih.gov/pubmed/27943244) | metadata signals extractable PGX data (UGT1A1) |

<sub>queue written 2026-10-14T19:41:08.878679+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abdul_2021 | not_relevant | 3 | 1 | The paper reports a rare case of Crigler-Najjar syndrome and mentions phenobarbital as a treatment, but it does not evaluate how a specific gene variant changes the PK or PD parameters of phenobarbital in a pharmacogenomic context. |
| PGx | Acikgöz_2009 | not_relevant | 0 | 0 | The paper investigates the biotransformation of diazepam and the inducing effect of phenobarbital in human hepatocytes, but does not report pharmacogenomic effects of gene variants on phenobarbital's PK/PD parameters. |
| PGx | Almond_2016 | not_relevant | 0 | 0 | The paper models the pharmacokinetic induction of other drugs (CYP3A4 substrates) by phenobarbital, but does not investigate the effect of genetic variants on phenobarbital's own pharmacokinetics or pharmacodynamics. |
| popPK | Asai_2017 | irrelevant | 0 | 0 | The study characterizes UGT-mediated beta-estradiol glucuronidation in rat brain, using phenobarbital only as an enzyme inducer, not as the subject drug for PK parameter extraction. |
| PD | Asai_2017 | not_relevant | 0 | 0 | The paper characterizes the metabolism of beta-estradiol in rat brain; phenobarbital is only mentioned as an inducer that did not significantly affect the reaction, with no exposure-response or dose-response PD analysis for phenobarbital itself. |
| PGx | Bai_2021 | not_relevant | 2 | 1 | The paper describes a UGT1A1 genotype causing disease (CNS2) and notes clinical response to phenobarbital, but it does not quantify changes in phenobarbital PK/PD parameters based on genotype. |
| PGx | Breznock_1975 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (phenobarbital inducing elimination of digoxin/digitoxin), not a pharmacogenomic effect involving genetic variants. |
| PGx | Burns_2016 | not_relevant | 1 | 0 | The paper focuses on Clobazam pharmacokinetics and mentions phenobarbital only as a comedication causing drug-drug interactions, not as the subject of pharmacogenomic analysis. |
| PGx | Chiddarwar_2017 | not_relevant | 2 | 2 | The study investigates genetic variants affecting bilirubin levels (a physiological biomarker), not the pharmacokinetics or pharmacodynamics of phenobarbital itself, despite mentioning a phenobarbital-responsive element in the gene promoter. |
| PGx | Cokley_2022 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions between Paxlovid and phenobarbital involving CYP3A4, rather than pharmacogenomic gene variants affecting phenobarbital PK/PD. |
| PGx | Cozzi_2022 | not_relevant | 2 | 0 | The paper reports the effect of phenobarbital on bilirubin levels in patients with a specific genotype, but it does not report how the genotype modifies the pharmacokinetics (e.g., clearance) or pharmacodynamics of phenobarbital itself. |
| PGx | Cribb_1995 | not_relevant | 0 | 0 | The paper focuses on the N4-hydroxylation of sulfamethoxazole, not phenobarbital; phenobarbital is only mentioned as an inducer in rat models. |
| PGx | Dashti_2024 | not_relevant | 2 | 5 | The paper reports the prevalence of HLA-B alleles associated with adverse drug reactions (hypersensitivity/PD safety) in a population cohort, but it does not report quantitative pharmacokinetic or pharmacodynamic parameter changes (e.g., clearance, AUC, effect magnitude) resulting from the genotype in a mechanistic pharmacogenomic study. |
| popPK | Deshpande_2007 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of endocannabinoids on seizures where phenobarbital is only used as a comparator agent, and no pharmacokinetic parameters are reported. |
| PD | Deshpande_2007 | not_relevant | 0 | 0 | The paper reports dose-response parameters (EC50) for endocannabinoids (methanandamide and 2-AG), not for phenobarbital, which is only mentioned as a refractory control agent. |
| popPK | Dingemanse_1989 | relevant | 5 | 3 | The paper reports a PK parameter (elimination half-life) for phenobarbital in rats, but lacks other standard disposition parameters (CL, Vd) and is primarily a concentration-effect modeling study. |
| PD | Dingemanse_1989 | not_relevant | 0 | 0 | The provided text is only the title of the paper and does not contain the full text, abstract, or results necessary to determine if numeric PD parameters or exposure-response relationships are reported. |
| PGx | Dubey_2003 | not_relevant | 0 | 0 | The paper uses phenobarbital as a tool compound to induce CYP450 enzymes in a cellular assay, not as a study drug for pharmacogenomic analysis. |
| popPK | Falcão_2012 | irrelevant | 0 | 0 | no_text gate: only 216 chars of text extracted (&lt; 400) |
| PD | Falcão_2012 | not_relevant | 0 | 0 | The paper focuses on eslicarbazepine acetate, not phenobarbital. |
| PGx | Foti_2008 | not_relevant | 0 | 0 | The paper studies the metabolism and hepatotoxicity of usnic acid, not the pharmacokinetics or pharmacodynamics of phenobarbital. |
| PGx | Hagos_2019 | not_relevant | 0 | 0 | The paper analyzes fentanyl pharmacokinetics, not phenobarbital, and phenobarbital is only mentioned as a potential inducer of fentanyl clearance. |
| PGx | Hall_1987 | not_relevant | 0 | 0 | The paper focuses on the metabolism of mephenytoin and inhibition by other compounds; phenobarbital is only mentioned as a non-inhibitor and no pharmacogenomic data on phenobarbital PK/PD is reported. |
| PGx | Hedrich_2016 | not_relevant | 0 | 0 | The paper is a review of CYP2B6-mediated drug interactions and mentions phenobarbital only in the context of enzyme regulation (PBREM), not as a substrate with pharmacogenomic PK/PD data. |
| PGx | Iba_1995 | not_relevant | 0 | 0 | The paper studies the effect of 3,3-dichlorobenzidine on gene expression and oxidant stress, using phenobarbital only as a negative control for induction, and does not report pharmacogenomic effects on phenobarbital PK or PD parameters. |
| PGx | Kanno_2019 | not_relevant | 0 | 0 | The paper investigates a molecular mechanism of gene transcription (CCAR1 coactivating CAR for UGT1A1) rather than reporting pharmacogenomic changes in PK/PD parameters of phenobarbital. |
| PGx | Kapelyukh_2025 | not_relevant | 0 | 0 | The paper investigates peptide-drug interactions in a humanized mouse model and uses phenobarbital as a positive control inducer, but it does not report a pharmacogenomic effect of a gene variant on phenobarbital's pharmacokinetics or pharmacodynamics. |
| popPK | Lee_2019 | irrelevant | 0 | 0 | The study is a population pharmacodynamic model of respiratory rate vs ETCO2 in children, where phenobarbital is merely a covariate/comparator for antiepileptic drug use, not the subject of PK parameter estimation. |
| popPK | Leppik_1979 | irrelevant | 0 | 0 | no_text gate: only 104 chars of text extracted (&lt; 400) |
| PD | Leppik_1979 | not_relevant | 0 | 0 | The paper focuses on pharmacokinetics (brain content, plasma binding) and qualitative anticonvulsant action, without reporting quantitative exposure-response or dose-response PD parameters for phenobarbital. |
| PGx | Li_2020 | not_relevant | 0 | 0 | The paper discusses pharmacokinetic drug-drug interactions of DOACs, but does not report any pharmacogenomic effects (gene variants) on PK/PD parameters. |
| PGx | Magnusson_2006 | not_relevant | 0 | 0 | The study focuses on mechanism-based enzyme induction in rats and does not investigate the impact of genetic variants or genotypes on phenobarbital pharmacokinetics. |
| PGx | Majid_2016 | not_relevant | 0 | 0 | The paper reports drug-drug interaction (perampanel effect on phenobarbital PK) but contains no genetic or pharmacogenomic data. |
| PGx | Manis_2023 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction between primidone and apixaban, not a pharmacogenomic effect on phenobarbital. |
| PGx | Marx-Stoelting_2017 | not_relevant | 0 | 0 | The study examines hepatotoxicity and gene expression changes caused by fungicides in transgenic mice, using phenobarbital only as a reference substance; it does not report pharmacogenomic effects on the PK/PD parameters of phenobarbital itself. |
| PGx | McNary_2025 | not_relevant | 0 | 0 | The paper studies drug-drug interactions (CYP3A4 induction) and clinical outcomes, not the impact of human gene variants/genotypes on PK/PD parameters. |
| PGx | Meirinho_2022 | not_relevant | 0 | 0 | The paper uses phenobarbital as a CYP450 inducer to test for drug-drug interactions with other antiepileptics, rather than investigating a pharmacogenomic effect on phenobarbital's own PK or PD parameters. |
| PGx | Menard_2000 | not_relevant | 0 | 0 | The paper investigates the metabolism of cicletanine (an antihypertensive), not phenobarbital, and does not report pharmacogenomic effects on phenobarbital PK/PD. |
| popPK | Methaneethorn_2021 | irrelevant | 2 | 2 | This is a systematic review summarizing population PK parameters; while it reports ranges (0.0034-0.0104 L/h/kg), it lacks original, specific quantitative disposition parameters for a defined cohort required for direct extraction. |
| PGx | Mori_1995 | not_relevant | 0 | 0 | The paper focuses on the effect of cigarette smoke and phenobarbital pretreatment on mutagenic activation of carcinogens in hamsters, not on pharmacogenomic variations affecting the PK/PD of phenobarbital. |
| PGx | Murphy_2003 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction between phenytoin and diazepam, not a pharmacogenomic effect on phenobarbital. |
| PGx | Nerurkar_1993 | not_relevant | 0 | 0 | The paper investigates the specific metabolic substrates (MTR and BZR) for CYP1A2 and CYP2B isozymes and does not report pharmacogenomic effects of gene variants on phenobarbital PK/PD parameters. |
| PGx | Nessler_2020 | not_relevant | 0 | 0 | The paper describes a genetic etiology for a neuromuscular disorder and notes that phenobarbital was ineffective in treating the symptoms, but it does not report a pharmacogenomic analysis where a specific gene variant alters the pharmacokinetic or pharmacodynamic parameters of phenobarbital itself. |
| PGx | Okada_2008 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on zonisamide clearance, not phenobarbital. |
| PGx | Perucca_2008 | not_relevant | 0 | 0 | The paper describes the PK/PD of rufinamide and drug-drug interactions, but does not report pharmacogenomic effects (gene variants) on phenobarbital PK/PD parameters. |
| PGx | Reidenberg_1995 | not_relevant | 2 | 5 | The study investigates a drug-drug interaction (felbamate) rather than a pharmacogenomic effect (gene variant/genotype) on phenobarbital PK. |
| PGx | Reik_1985 | not_relevant | 0 | 0 | The paper investigates monoclonal antibody recognition of cytochrome P-450 isozymes in rats and their inhibitory effects on substrate metabolism, rather than reporting human pharmacogenomic variants affecting phenobarbital PK or PD. |
| PGx | Rost_1994 | not_relevant | 0 | 0 | The study focuses on omeprazole and caffeine metabolism, mentioning phenobarbital only as a contrast for enzyme induction type, not as the subject drug for pharmacogenomic analysis. |
| popPK | Ryu_2021 | irrelevant | 5 | 0 | The paper is an external evaluation of existing models and does not report original quantitative population pharmacokinetic parameter values (CL, V, etc.) for phenobarbital in the provided evidence. |
| PGx | Saruwatari_2014 | not_relevant | 0 | 0 | The paper reports pharmacokinetic parameter changes for clobazam (CLB) and N-desmethylclobazam (N-CLB), not for phenobarbital. |
| popPK | Schoemaker_2016 | irrelevant | 0 | 0 | no_text gate: only 117 chars of text extracted (&lt; 400) |
| PD | Schoemaker_2016 | not_relevant | 0 | 0 | The paper focuses on brivaracetam, not phenobarbital, and does not report PD parameters for the specified drug. |
| PGx | Schutzman_2017 | not_relevant | 0 | 0 | The study examines genetic variants' effect on endogenous bilirubin metabolism, not the pharmacokinetics or pharmacodynamics of exogenous phenobarbital administration. |
| popPK | Shareef_2018 | relevant | 4 | 0 | The paper describes a population PK study for phenobarbital but acts as a commentary/news piece without providing the specific numeric parameter values (CL, V, etc.) in the provided text. |
| popPK | Sharpe_2024 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for levetiracetam, while phenobarbital is only mentioned as a prior therapy or rescue medication in the clinical protocol. |
| PGx | Shimura_2019 | not_relevant | 2 | 5 | The paper reports an association between a genetic variant and a psychiatric side effect (PD), but does not provide quantitative data on how the genotype changes specific pharmacokinetic parameters or standard pharmacodynamic metrics of phenobarbital. |
| PGx | Sidhu_1995 | not_relevant | 0 | 0 | The paper studies in vitro gene expression modulation by dexamethasone on phenobarbital-inducible enzymes, not a human pharmacogenomic effect on PK/PD parameters. |
| PGx | Sonnichsen_1995 | not_relevant | 0 | 0 | The paper investigates paclitaxel metabolism, not phenobarbital. |
| popPK | Stijnen_1992 | relevant | 4 | 0 | The study addresses the pharmacokinetic-pharmacodynamic relationship of phenobarbital in rats, but the provided evidence contains only qualitative abstract conclusions without specific numeric PK parameter values (CL, V, t1/2, etc.). |
| PGx | Sueyoshi_2025 | not_relevant | 1 | 0 | The paper is a review of the discovery and biological mechanisms of the CAR nuclear receptor, not a study reporting specific pharmacogenomic effects of gene variants on phenobarbital pharmacokinetic or pharmacodynamic parameters. |
| PGx | Suvichapanich_2015 | not_relevant | 0 | 0 | The study investigates the association between CYP2C9*3 and severe cutaneous adverse reactions (SCARs) for phenytoin and phenobarbital, but it does not report changes in pharmacokinetic or pharmacodynamic parameters (e.g., AUC, clearance, potency). |
| popPK | Teixeira-da-Silva_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of valproic acid (VPA), with phenobarbital only acting as a covariate for drug-drug interactions. |
| popPK | Todorovic_1998 | irrelevant | 0 | 0 | The study is an in-vitro patch-clamp experiment measuring pharmacological effects (EC50 values for channel blockade) on T-type calcium currents in rat neurons, not in-vivo pharmacokinetic parameters such as clearance, volume, or half-life. |
| PGx | Tolbert_2016 | not_relevant | 0 | 0 | The paper focuses on pharmacokinetic drug-drug interactions involving clobazam and does not report pharmacogenomic effects (gene variants) on the PK or PD of phenobarbital. |
| PGx | Unterberger_2014 | not_relevant | 0 | 0 | The paper investigates molecular and metabolic changes in mouse liver tumors promoted by phenobarbital, not pharmacogenomic variations affecting phenobarbital's PK or PD. |
| PGx | Van_2021 | not_relevant | 1 | 5 | The paper reports pharmacogenomic effects of CYP3A4/5 genotypes on isavuconazole pharmacokinetics in the context of phenobarbital induction, but does not report how genetic variants affect the pharmacokinetics of phenobarbital itself. |
| PGx | Voznesensky_1994 | not_relevant | 0 | 0 | The paper studies electrostatic interactions in P450 systems using phenobarbital-induced microsomes as a model, but does not report pharmacogenomic effects on PK or PD parameters for the drug phenobarbital itself. |
| PGx | Walzer_2012 | not_relevant | 0 | 0 | The paper investigates pharmacokinetic drug-drug interactions, not pharmacogenomic effects. |
| PGx | Wiemann_2023 | not_relevant | 0 | 0 | The paper studies the toxicological effects of the fungicide boscalid and uses phenobarbital only as a reference inducer, rather than evaluating pharmacogenomic effects on phenobarbital's PK or PD parameters. |
| PGx | Wolff_1992 | not_relevant | 1 | 1 | The paper studies the activity of CYP enzymes (specifically aldrin epoxidase) in human liver and mentions phenobarbital as an inducer, but it does not measure PK/PD parameters of phenobarbital itself as the drug of interest, nor does it report pharmacogenomic effects on phenobarbital clearance or response. |
| popPK | Yalcin_2022 | irrelevant | 1 | 0 | This is a literature review that qualitatively summarizes findings from other studies without providing specific numeric PK parameter values for phenobarbital in the provided text. |
| popPK | Yang_2024 | irrelevant | 0 | 0 | no_text gate: only 111 chars of text extracted (&lt; 400) |
| PD | Yang_2024 | not_relevant | 0 | 0 | The paper describes a methodological framework (SSA-1DCNN-Attention) for PK/PD modeling but does not report specific numeric PD parameters or exposure-response relationships for phenobarbital. |
| PGx | Yuan_2017 | not_relevant | 1 | 0 | The paper reports a UGT1A1 genotype associated with Gilbert syndrome and the clinical efficacy of phenobarbital on jaundice, but it does not report pharmacogenomic changes to phenobarbital's PK or PD parameters. |
| PGx | Yueh_2007 | not_relevant | 0 | 0 | The paper discusses phenobarbital only as a reference for a genomic enhancer region (PB-REM) in UGT1A1 regulation, not as the study drug subject to pharmacogenomic analysis. |
| PGx | Zhang_2003 | not_relevant | 0 | 0 | The paper characterizes CYP450 expression and induction by phenobarbital in mice but does not report genetic variants affecting phenobarbital's pharmacokinetics or pharmacodynamics. |
| PGx | Zhu_2022 | not_relevant | 0 | 0 | The paper focuses on the pharmacogenomics (CYP2C19) and pharmacokinetics of valproic acid (VPA), not phenobarbital. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 19:41 UTC</sub>
