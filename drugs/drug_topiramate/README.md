<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A08A&quot;,&quot;href&quot;:&quot;atc/A08A.md&quot;},{&quot;label&quot;:&quot;topiramate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Topiramate_Lee2024_reference&quot;,&quot;label&quot;:&quot;Lee_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_topiramate/Topiramate_Lee2024_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Lim_2016_SDMT&quot;,&quot;label&quot;:&quot;Lim_2016 \u00b7 SDMT&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_topiramate/pd_Lim_2016_SDMT.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# topiramate

- **generic name:** topiramate
- **ATC codes:** `A08AA51`, `N03AX11`
- **DrugBank:** [DB00273](https://go.drugbank.com/drugs/DB00273) · **PubChem:** [CID 5284627](https://pubchem.ncbi.nlm.nih.gov/compound/5284627)
- **molar mass:** 339.362 g/mol (C12H21NO8S) — DrugBank
- **groups:** approved, investigational

## About

Topiramate is an anticonvulsant used to treat epilepsy and seizures, and also migraine; it has additionally been used for pain, bipolar disorder, and other conditions. It is an approved medicine used widely for epilepsy and migraine prevention, and is also classed as a centrally acting antiobesity product.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q221174](https://www.wikidata.org/wiki/Q221174) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| topiramate | parent | 339.362 | C12H21NO8S | DrugBank | [5284627](https://pubchem.ncbi.nlm.nih.gov/compound/5284627) | Elewa_2023, Lee_2024, Marques_2020, Wei_2023 |

## Start here

> **Lee_2024_reference** — <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> adults with epilepsy, n = &gt;=389. [Run it in the simulator](drugs/drug_topiramate/Topiramate_Lee2024_reference.md?tab=Simulation) · [record](drugs/drug_topiramate/Topiramate_Lee2024_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 2.11 | L/h | 2.11 L/h | patients with epilepsy |  | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Elewa_2023_reference](drugs/drug_topiramate/Topiramate_Elewa2023_reference.md) |
| CL | CL | 3.65 | L/h | 3.65 l h −1 | patients with refractory partial-onset seizures | 226 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Majid_2016_reference](drugs/drug_topiramate/Topiramate_Majid2016_reference.md) |
| CL | CL/F | 2.1 | L/h | 2.1 L/h | adults with epilepsy | &gt;=389 | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Lee_2024_reference](drugs/drug_topiramate/Topiramate_Lee2024_reference.md) |
| V | V/F | 82.4 | L | 82.4 L | adults with epilepsy | &gt;=389 | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Lee_2024_reference](drugs/drug_topiramate/Topiramate_Lee2024_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="96" viewBox="0 0 560 96" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="74" stroke="#ddd"/><text x="190.0" y="88" font-size="10" text-anchor="middle">1</text><line x1="540.0" y1="18" x2="540.0" y2="74" stroke="#ddd"/><text x="540.0" y="88" font-size="10" text-anchor="middle">10</text><text x="184" y="34.0" font-size="11" text-anchor="end">Elewa_2023 · CL</text><circle cx="303.5" cy="30.0" r="4" fill="#ef6c00"><title>Elewa_2023 · CL: 2.11 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Majid_2016 · CL</text><circle cx="386.8" cy="46.0" r="4" fill="#ef6c00"><title>Majid_2016 · CL: 3.65 L/h</title></circle><text x="184" y="66.0" font-size="11" text-anchor="end">Lee_2024 · CL/F</text><circle cx="302.8" cy="62.0" r="4" fill="#78909c"><title>Lee_2024 · CL/F: 2.1 L/h</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Not simulated</sub> | [Lee_2024_reference](drugs/drug_topiramate/Topiramate_Lee2024_reference.md) | ▶ model + simulator | 1-compartment, oral | 5 | Lee S et al., Topiramate dosage optimization for effe…, Annals of clinical and tran… (2024) | [10.1002/acn3.51962](https://doi.org/10.1002/acn3.51962) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Elewa_2023_reference](drugs/drug_topiramate/Topiramate_Elewa2023_reference.md) | — | 1-compartment (no model) | 1 | Elewa M et al., Population Pharmacokinetics of Topirama…, Therapeutic drug monitoring (2023) | [10.1097/FTD.0000000000001143](https://doi.org/10.1097/FTD.0000000000001143) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q23 — no SI value to build from</sub> | [Majid_2016_reference](drugs/drug_topiramate/Topiramate_Majid2016_reference.md) | — | 1-compartment (no model) | 2 | Majid O et al., Impact of perampanel on pharmacokinetic…, British journal of clinical… (2016) | [10.1111/bcp.12951](https://doi.org/10.1111/bcp.12951) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Marques_2020_reference](drugs/drug_topiramate/Topiramate_Marques2020_reference.md) | — | 1-compartment (no model) | 3 | Marques MR et al., Topiramate pharmacokinetics in neonates…, Acta paediatrica (Oslo, Nor… (2020) | [10.1111/apa.14944](https://doi.org/10.1111/apa.14944) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Wei_2023_reference](drugs/drug_topiramate/Topiramate_Wei2023_reference.md) | — | 1-compartment (no model) | 0 | Wei S et al., Population pharmacokinetics of topirama…, European journal of clinica… (2023) | [10.1007/s00228-023-03549-6](https://doi.org/10.1007/s00228-023-03549-6) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Sun_2007_persistent_Na_current](drugs/drug_topiramate/pd_Sun_2007_persistent_Na_current.md) | persistent Na(+) current ← topiramate · direct Emax (saturable) effect | — | Sun GC et al., Carbamazepine and topiramate modulation…, Epilepsia (2007) | [10.1111/j.1528-1167.2007.01001.x](https://doi.org/10.1111/j.1528-1167.2007.01001.x) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Sun_2007_steady_state_inactivation_of_the_transient_Na_current](drugs/drug_topiramate/pd_Sun_2007_steady_state_inactivation_of_the_transient_Na_curre.md) | steady-state inactivation of the transient Na(+) current ← topiramate · direct Emax (saturable) effect | — | Sun GC et al., Carbamazepine and topiramate modulation…, Epilepsia (2007) | [10.1111/j.1528-1167.2007.01001.x](https://doi.org/10.1111/j.1528-1167.2007.01001.x) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Ahmed_2015_COWA](drugs/drug_topiramate/pd_Ahmed_2015_COWA.md) | phonemic generative fluency scores as measured by the Controlled Oral Word Association (COWA) test ← topiramate · direct linear effect | model (no simulator) | Ahmed GF et al., Pharmacokinetic-pharmacodynamic modelli…, British journal of clinical… (2015) | [10.1111/bcp.12556](https://doi.org/10.1111/bcp.12556) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Lim_2016_SDMT](drugs/drug_topiramate/pd_Lim_2016_SDMT.md) | Symbol-Digit Modalities Test score ← topiramate · direct Emax (saturable) effect | ▶ model + simulator | Lim CN et al., Pharmacokinetic-Pharmacodynamic Modelin…, Journal of clinical pharmac… (2016) | [10.1002/jcph.646](https://doi.org/10.1002/jcph.646) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **DPW_PGS** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Kranzler_2025](drugs/drug_topiramate/pgx_Kranzler_2025_DPW_PGS_Q100.md) | Kranzler HR et al., Moderation of treatment outcomes by pol…, Alcohol, clinical & experim… (2025) | [10.1111/acer.70052](https://doi.org/10.1111/acer.70052) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **GRIK1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Kranzler_2025](drugs/drug_topiramate/pgx_Kranzler_2025_GRIK1_Q100.md) | Kranzler HR et al., Moderation of treatment outcomes by pol…, Alcohol, clinical & experim… (2025) | [10.1111/acer.70052](https://doi.org/10.1111/acer.70052) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **PAU_PGS** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Kranzler_2025](drugs/drug_topiramate/pgx_Kranzler_2025_PAU_PGS_Q100.md) | Kranzler HR et al., Moderation of treatment outcomes by pol…, Alcohol, clinical & experim… (2025) | [10.1111/acer.70052](https://doi.org/10.1111/acer.70052) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **THR_PGS** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Kranzler_2025](drugs/drug_topiramate/pgx_Kranzler_2025_THR_PGS_Q100.md) | Kranzler HR et al., Moderation of treatment outcomes by pol…, Alcohol, clinical & experim… (2025) | [10.1111/acer.70052](https://doi.org/10.1111/acer.70052) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **TR_PGS** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Kranzler_2025](drugs/drug_topiramate/pgx_Kranzler_2025_TR_PGS_Q100.md) | Kranzler HR et al., Moderation of treatment outcomes by pol…, Alcohol, clinical & experim… (2025) | [10.1111/acer.70052](https://doi.org/10.1111/acer.70052) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=topiramate).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| distribution | placenta | `ABCB1` substrate | DrugBank actor |
| distribution | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | liver | `CYP2C19` inhibitor, `CYP3A4` inducer | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer | DrugBank actor |
| excretion | kidney | `ABCB1` substrate | DrugBank actor |
| excretion | liver | `ABCB1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CA1 (inhibitor), CA2 (inhibitor), CA3 (inhibitor), CA4 (inhibitor), CACNA1C (target), CACNA1E (target), DPW_PGS (target), GABRA1 (target), GRIK1 (target), PAU_PGS (target), PRKAA1 (inducer), SCN1A (inhibitor), THR_PGS (target), TR_PGS (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 21:27 | 14:31 | 3/2/0 | 3/0/0 | 0/0/5 | 242,653/40,432 | ollama / qwen3.8:27b-mtp-q8_0 | 12 | 2/8 | 12/0 | 0 |

## Coverage

- **PubMed hits:** 171 matched, 62 returned
- **screened:** 11  ·  **relevant:** 4
- **records:** 5  ·  extracted 1  ·  needs_review 2  ·  rejected 2  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full-text requests

_14 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Elewa_2023.pdf` | Elewa M et al., Population Pharmacokinetics of Topirama…, Therapeutic drug monitoring (2023) | popPK | 10 | [10.1097/FTD.0000000000001143](https://doi.org/10.1097/FTD.0000000000001143) | [37798835](https://pubmed.ncbi.nlm.nih.gov/37798835) | The study reports a population PK model for topiramate with a specific mean clearance value (2.11 L/h) and qualitative covariate effects, but lacks explicit numeric values for volume of distribution or other parameters. |
| `Wei_2023.pdf` | Wei S et al., Population pharmacokinetics of topirama…, European journal of clinica… (2023) | popPK | 10 | [10.1007/s00228-023-03549-6](https://doi.org/10.1007/s00228-023-03549-6) | [37597080](https://pubmed.ncbi.nlm.nih.gov/37597080) | The paper reports a population pharmacokinetic model for topiramate with explicit numeric formulas for clearance and volume of distribution in the abstract. |
| `Ahmed_2015.pdf` | Ahmed GF et al., Pharmacokinetic-pharmacodynamic modelli…, British journal of clinical… (2015) | popPK | 9 | [10.1111/bcp.12556](https://doi.org/10.1111/bcp.12556) | [25403343](https://pubmed.ncbi.nlm.nih.gov/25403343) | The study is a population PK/PD modeling study of topiramate in humans, but the specific numeric PK parameter values (CL, V, etc.) are not listed in the provided abstract text. |
| `Girgis_2010.pdf` | Girgis IG et al., Pharmacokinetic-pharmacodynamic assessm…, Epilepsia (2010) | popPK | 9 | [10.1111/j.1528-1167.2010.02598.x](https://doi.org/10.1111/j.1528-1167.2010.02598.x) | [20880232](https://pubmed.ncbi.nlm.nih.gov/20880232) | The paper describes a population PK model for topiramate in children, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Lim_2016.pdf` | Lim CN et al., Pharmacokinetic-Pharmacodynamic Modelin…, Journal of clinical pharmac… (2016) | popPK | 8 | [10.1002/jcph.646](https://doi.org/10.1002/jcph.646) | [26395889](https://pubmed.ncbi.nlm.nih.gov/26395889) | The study reports a PK-PD model for topiramate in humans, but the specific quantitative PK parameters (CL, V, ka) are not listed in the provided abstract, only the PD parameter EC50. |
| `Falcão_2012.pdf` | Falcão A et al., Pharmacokinetics, drug interactions and…, CNS drugs (2012) | pd | 5 | [10.2165/11596290-000000000-00000](https://doi.org/10.2165/11596290-000000000-00000) | [22171585](https://www.ncbi.nlm.nih.gov/pubmed/22171585) | metadata signals extractable PD data (exposure-response) |
| `Morgan_2004.pdf` | Morgan PE et al., Carbonic anhydrase inhibitors that dire…, Molecular membrane biology (2004) | pd | 5 | [10.1080/09687860400014872](https://doi.org/10.1080/09687860400014872) | [15764372](https://www.ncbi.nlm.nih.gov/pubmed/15764372) | metadata signals extractable PD data (EC50) |
| `Narayanasamy_2019.pdf` | Narayanasamy S et al., An alternating polarity switching assay…, Journal of chromatography.… (2019) | pd | 5 | [10.1016/j.jchromb.2019.04.044](https://doi.org/10.1016/j.jchromb.2019.04.044) | [31030106](https://www.ncbi.nlm.nih.gov/pubmed/31030106) | metadata signals extractable PD data (PK/PD) |
| `Wei_2024.pdf` | Wei S et al., UGT1A polymorphism rs4148324 associated…, Seizure (2024) | pgx | 8 | [10.1016/j.seizure.2023.10.004](https://doi.org/10.1016/j.seizure.2023.10.004) | [37858371](https://www.ncbi.nlm.nih.gov/pubmed/37858371) | metadata signals extractable PGX data (UGT1A1, PK/PD-context) |
| `Nallani_2003.pdf` | Nallani SC et al., Dose-dependent induction of cytochrome…, Epilepsia (2003) | pgx | 7 | [10.1111/j.0013-9580.2003.06203.x](https://doi.org/10.1111/j.0013-9580.2003.06203.x) | [14636322](https://www.ncbi.nlm.nih.gov/pubmed/14636322) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Sachdeo_2002.pdf` | Sachdeo RC et al., Topiramate and phenytoin pharmacokineti…, Epilepsia (2002) | pgx | 7 | [10.1046/j.1528-1157.2002.41701.x](https://doi.org/10.1046/j.1528-1157.2002.41701.x) | [12102670](https://www.ncbi.nlm.nih.gov/pubmed/12102670) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Stöllberger_2016.pdf` | Stöllberger C et al., Interactions between non-vitamin K oral…, Epilepsy research (2016) | pgx | 7 | [10.1016/j.eplepsyres.2016.06.003](https://doi.org/10.1016/j.eplepsyres.2016.06.003) | [27450623](https://www.ncbi.nlm.nih.gov/pubmed/27450623) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Atasayar_2016.pdf` | Atasayar G et al., Association of MDR1, CYP2D6, and CYP2C1…, Journal of the neurological… (2016) | pgx | 5 | [10.1016/j.jns.2016.05.019](https://doi.org/10.1016/j.jns.2016.05.019) | [27288795](https://www.ncbi.nlm.nih.gov/pubmed/27288795) | metadata signals extractable PGX data (CYP2D6) |
| `Jogamoto_2017.pdf` | Jogamoto T et al., Add-on stiripentol elevates serum valpr…, Epilepsy research (2017) | pgx | 5 | [10.1016/j.eplepsyres.2016.12.014](https://doi.org/10.1016/j.eplepsyres.2016.12.014) | [28081475](https://www.ncbi.nlm.nih.gov/pubmed/28081475) | metadata signals extractable PGX data (CYP2C9) |

<sub>queue written 2026-10-04T21:14:59.953131+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahmed_2015 | relevant | 9 | 2 | The study is a population PK/PD modeling study of topiramate in humans, but the specific numeric PK parameter values (CL, V, etc.) are not listed in the provided abstract text. |
| PGx | Belcastro_2010 | not_relevant | 0 | 0 | The study investigates the effect of topiramate on homocysteine levels and mentions MTHFR polymorphisms, but it does not report how a gene variant changes the pharmacokinetic or pharmacodynamic parameters of topiramate itself. |
| popPK | Citraro_2016 | irrelevant | 0 | 0 | The study is a pharmacodynamic interaction study in mice where topiramate is a co-administered comparator, and no quantitative PK parameters for topiramate are reported. |
| PD | Citraro_2016 | not_relevant | 1 | 0 | The paper reports qualitative potentiation of topiramate's anticonvulsant effect by cannabinoid agonists and confirms it is pharmacodynamic (no PK change), but it does not provide numeric PD parameters (e.g., EC50, Emax) or quantitative exposure-response curves for topiramate. |
| popPK | Falcão_2012 | irrelevant | 0 | 0 | no_text gate: only 216 chars of text extracted (&lt; 400) |
| PD | Falcão_2012 | not_relevant | 0 | 0 | The paper focuses on eslicarbazepine acetate, not topiramate. |
| popPK | Girgis_2010 | relevant | 9 | 0 | The paper describes a population PK model for topiramate in children, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| PD | Girgis_2010 | not_relevant | 0 | 0 | The provided text contains only the title of the paper and lacks the full text, abstract, or data required to verify the presence of numeric pharmacodynamic parameters or exposure-response relationships. |
| PGx | Guzman_2014 | not_relevant | 0 | 0 | The text is a general review introduction summarizing the field of pharmacogenetics for obesity drugs and does not report specific gene-variant effects on topiramate PK/PD parameters. |
| popPK | Honybun_2026 | irrelevant | 0 | 0 | The study reports neurocognitive outcomes in children exposed to topiramate in utero, not pharmacokinetic parameters. |
| PGx | Jaisupa_2025 | not_relevant | 0 | 0 | The study investigates the effect of topiramate on cannabidiol (CBD) metabolism, not the effect of a gene variant on topiramate's pharmacokinetics or pharmacodynamics. |
| PGx | Jogamoto_2017 | not_relevant | 2 | 5 | The paper reports a pharmacogenomic effect (CYP2C19) on the PK of valproate, not topiramate. |
| popPK | Klein_2026 | irrelevant | 0 | 0 | The study is a clinical trial analyzing psychotherapy outcomes (PTSD/AUD symptoms) and does not report any pharmacokinetic parameters for topiramate. |
| PGx | Kotake_2025 | not_relevant | 0 | 0 | The paper reports on pharmacodynamic outcomes (alcohol consumption) rather than pharmacokinetic parameters, and concludes there is insufficient evidence to confirm a pharmacogenetic effect. |
| PGx | Kranzler_2016 | not_relevant | 0 | 0 | The paper reports a pharmacogenomic effect on a behavioral outcome (drinking) and a psychological mediator (self-efficacy), not on a pharmacokinetic or pharmacodynamic parameter of topiramate. |
| PGx | Kranzler_2018 | not_relevant | 0 | 0 | The paper is a general review of alcohol use disorder treatment and explicitly states there is insufficient evidence for pharmacogenetics in this context, without reporting specific PK/PD effects of topiramate. |
| PGx | Kranzler_2021 | not_relevant | 0 | 0 | The paper reports a non-significant pharmacogenomic effect on clinical outcomes (drinking behavior), not on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Kranzler_2025 | not_relevant | 2 | 8 | The paper reports pharmacogenomic moderation of clinical efficacy (heavy drinking days, SIP scores) rather than pharmacokinetic or pharmacodynamic parameters. |
| popPK | Kumar_2020 | irrelevant | 0 | 0 | The study is a preclinical pharmacodynamic and neurochemical investigation in mice where topiramate is used only as a test drug to assess seizure resistance, with no quantitative pharmacokinetic parameters (CL, V, etc.) reported for topiramate. |
| PD | Kumar_2020 | not_relevant | 1 | 0 | The paper reports a binary resistance response to a single fixed dose of topiramate (300 mg/kg) in an animal model, without providing concentration-effect data, dose-response curves, or numeric PD parameters. |
| PGx | Lee_2019 | not_relevant | 0 | 0 | The paper is a computational drug repositioning study for Alzheimer's disease and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of topiramate. |
| popPK | Lim_2016 | relevant | 8 | 2 | The study reports a PK-PD model for topiramate in humans, but the specific quantitative PK parameters (CL, V, ka) are not listed in the provided abstract, only the PD parameter EC50. |
| PGx | Lin_2019 | not_relevant | 0 | 0 | The study investigates the pharmacokinetics of oxcarbazepine (MHD), not topiramate, and reports that topiramate co-administration did not significantly influence MHD clearance. |
| PGx | Louveau_2023 | not_relevant | 4 | 5 | The paper reports differences in clinical treatment response (efficacy/tolerability) based on genetic subtype, but does not report specific pharmacokinetic (PK) or pharmacodynamic (PD) parameters (e.g., AUC, Cmax, receptor binding). |
| PGx | Majid_2016 | not_relevant | 0 | 0 | The paper investigates the impact of perampanel on the pharmacokinetics of concomitant antiepileptics (including topiramate) but does not report any pharmacogenomic effects (gene variants/genotypes) on these parameters. |
| popPK | Methaneethorn_2022 | irrelevant | 2 | 0 | The study is a simulation using parameters from other published models and does not report original quantitative PK parameter values for topiramate in the evidence provided. |
| popPK | Morgan_2004 | irrelevant | 0 | 0 | no_text gate: only 105 chars of text extracted (&lt; 400) |
| PD | Morgan_2004 | not_relevant | 0 | 0 | The paper focuses on the mechanism of carbonic anhydrase inhibitors on the AE1 exchanger and does not report pharmacokinetic or pharmacodynamic modeling or exposure-response relationships for topiramate. |
| PGx | Morley_2018 | not_relevant | 0 | 0 | The paper is a study protocol for a clinical trial and does not report results or fitted effect sizes for pharmacokinetic or pharmacodynamic parameters. |
| PGx | Morley_2024 | not_relevant | 0 | 0 | The study reports that the examined polymorphisms had no effect on treatment response, and the outcomes measured were clinical efficacy endpoints (drinking days, BMI) rather than pharmacokinetic or pharmacodynamic parameters. |
| popPK | Nakashima_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of valproic acid (VPA), with topiramate mentioned only as a co-administered covariate affecting VPA clearance. |
| PD | Nakashima_2015 | not_relevant | 0 | 0 | The paper reports a population PK/PD model for valproic acid (VPA), not topiramate; topiramate is only mentioned as a covariate in the VPA model. |
| PGx | Nakashima_2015 | not_relevant | 0 | 0 | The study focuses on the pharmacogenomics of valproic acid (VPA), not topiramate; topiramate is only mentioned as a co-administered covariate. |
| PGx | Nallani_2003 | not_relevant | 0 | 0 | The paper investigates the mechanism of topiramate-induced CYP3A4 induction in vitro but does not report any pharmacogenomic effects (gene variants) on topiramate's PK or PD parameters. |
| popPK | Narayanasamy_2019 | irrelevant | 0 | 0 | no_text gate: only 158 chars of text extracted (&lt; 400) |
| PD | Narayanasamy_2019 | not_relevant | 0 | 0 | The paper describes an analytical method (LC-MS/MS) for quantifying topiramate and oxycodone, not a pharmacodynamic or exposure-response analysis. |
| PGx | Perucca_2008 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of rufinamide and its drug-drug interactions, reporting no pharmacogenomic effects on topiramate. |
| PGx | Pisano_2015 | not_relevant | 0 | 0 | The paper reports clinical efficacy (seizure control) of topiramate in KCNQ2 encephalopathy but does not report pharmacokinetic or pharmacodynamic parameter changes linked to genotype. |
| PGx | Sabers_2008 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions between antiepileptics and contraceptives, not pharmacogenomic effects of gene variants on topiramate PK/PD. |
| PGx | Sachdeo_2002 | not_relevant | 0 | 0 | The study investigates drug-drug interactions between topiramate and phenytoin, not the effect of genetic variants on pharmacokinetics. |
| PGx | Sakamoto_2017 | not_relevant | 0 | 0 | The paper reports a clinical case of therapeutic response to topiramate in a patient with a GNAO1 mutation, but it does not report changes in pharmacokinetic or pharmacodynamic parameters (e.g., AUC, Cmax, receptor binding) caused by the genotype. |
| PGx | Sarayani_2023 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction between topiramate and oral contraceptives, not a pharmacogenomic effect. |
| PGx | Shinn_2010 | not_relevant | 0 | 0 | The paper is a clinical review of topiramate's efficacy in substance use disorders and does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Soyka_2015 | not_relevant | 0 | 0 | The paper is a narrative review of alcoholism pharmacotherapy that mentions topiramate and pharmacogenetics generally, but does not report specific gene-variant effects on topiramate PK or PD parameters. |
| PGx | Stöllberger_2016 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions between NOACs and AEDs, not pharmacogenomic effects of gene variants on topiramate PK/PD. |
| popPK | Sun_2007 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of sodium channel modulation, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Tompson_2014 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of retigabine, with topiramate serving only as a co-administered comparator agent. |
| popPK | Vashi_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of cenobamate, with topiramate mentioned only as a co-administered drug that did not significantly affect cenobamate's disposition. |
| PGx | Yorns_2013 | not_relevant | 0 | 0 | The paper discusses the relationship between mitochondrial dysfunction and migraine, mentioning topiramate only as a therapeutic agent, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| popPK | van_2018 | relevant | 8 | 2 | The paper is a supplement to a PK study that includes a topiramate model with numeric parameters, but the specific topiramate section and its parameter table are truncated in the provided evidence. |
| PGx | Łukawski_2021 | not_relevant | 0 | 0 | The paper is a general review of drug resistance mechanisms in epilepsy and does not report specific pharmacogenomic effects on topiramate PK/PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-04 21:15 UTC</sub>
