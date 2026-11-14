<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Spironolactone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Spironolactone_Manson2025_reference&quot;,&quot;label&quot;:&quot;Manson_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_spironolactone/Spironolactone_Manson2025_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

# Spironolactone

- **generic name:** Spironolactone
- **T3DB:** [T3D4753](http://www.t3db.ca/toxins/T3D4753) · **DrugBank:** [DB00421](https://go.drugbank.com/drugs/DB00421) · **PubChem:** [CID 5833](https://pubchem.ncbi.nlm.nih.gov/compound/5833)
- **groups:** approved, investigational

## About

A potassium sparing diuretic that acts by antagonism of aldosterone in the distal renal tubules. It is used mainly in the treatment of refractory edema in patients with congestive heart failure, nephrotic syndrome, or hepatic cirrhosis. Its effects on the endocrine system are utilized in the treatments of hirsutism and acne but they can lead to adverse effects. (From Martindale, The Extra Pharmacopoeia, 30th ed, p827)

- **Category:** Drug, Synthetic Toxin
- **Route of exposure:** fairly rapidly absorbed from the gastrointestinal tract. Food increases the bioavailability of unmetabolized spironolactone by almost 100%.
- **Sources and uses:** Used primarily to treat low-renin hypertension, hypokalemia, and Conn's syndrome.
- **Mechanism of toxicity:** Spironolactone is a specific pharmacologic antagonist of aldosterone, acting primarily through competitive binding of receptors at the aldosterone-dependent sodium-potassium exchange site in the distal convoluted renal tubule. Spironolactone causes increased amounts of sodium and water to be excreted, while potassium is retained. …
- **Carcinogenicity:** IARC group 3, not classifiable as to its carcinogenicity to humans.
- **Acute toxicity:** The oral LD<sub>50</sub> of spironolactone is greater than 1,000 mg/kg in mice, rats, and rabbits.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4753">T3DB T3D4753</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 52-01-7 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:9241">ChEBI 9241</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| spironolactone | parent | 416.576 | C24H32O4S | PubChem | [5833](https://pubchem.ncbi.nlm.nih.gov/compound/5833) | Cattani_2023, Krause_1983, Lass_2023, Lass_2024, Manson_2025, Pilkova_2024, Soliman_2025, Tatipalli_2021 |
| 6 beta-hydroxy-7 alpha-thiomethylspirolactone | metabolite | — (mass units only) | — | — | — | — |
| 7 alpha-thiomethylspirolactone | metabolite | — (mass units only) | — | — | — | — |
| 7 alpha-thiomethylspironolactone (TMS) | metabolite | — (mass units only) | — | — | — | — |
| 7-alpha-thiomethylspironolactone (TMS) | metabolite | — (mass units only) | — | — | — | — |
| 7alpha thio-methyl spironolactone (TMS) | metabolite | — (mass units only) | — | — | — | — |
| canrenone | metabolite | — (mass units only) | — | — | — | — |
| Canrenone (CAN) | metabolite | 340.5 | — | the paper | — | Soliman_2025 |

## Start here

> **Manson_2025_reference** — <span class="pk-badge pk-badge--neutral">Not simulated</span> purpose-bred healthy beagle dogs, n = 18. [Run it in the simulator](drugs/toxin_spironolactone/Spironolactone_Manson2025_reference.md?tab=Simulation) · [record](drugs/toxin_spironolactone/Spironolactone_Manson2025_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="dog" data-age="adult" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Manson_2025_reference](drugs/toxin_spironolactone/Spironolactone_Manson2025_reference.md) | ▶ model + simulator | retention, 1 pool | 4 | Manson E et al., Dose-exposure-response of CARDALIS® (be…, Journal of veterinary inter… (2025) | [10.1111/jvim.17255](https://doi.org/10.1111/jvim.17255) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q27 — no SI value to build from</sub> | [Cattani_2023_reference](drugs/toxin_spironolactone/Spironolactone_Cattani2023_reference.md) | held back | 1-compartment, oral | 1 | Cattani VB et al., Estradiol and Spironolactone Plasma Pha…, Clinical pharmacokinetics (2023) | [10.1007/s40262-023-01248-0](https://doi.org/10.1007/s40262-023-01248-0) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Krause_1983_reference](drugs/toxin_spironolactone/Spironolactone_Krause1983_reference.md) | held back | 1-compartment, oral | 4 | Krause W et al., Pharmacokinetics of canrenone after ora…, European journal of clinica… (1983) | [10.1007/BF00542109](https://doi.org/10.1007/BF00542109) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q54, Q22 — no SI value to build from</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub> | [Soliman_2025_7_thiomethyl_spironolactone_tms_model_value](drugs/toxin_spironolactone/Spironolactone_Soliman2025_7_thiomethyl_spironolactone_tms_m.md) | held back | 1-compartment general linear | 6 | Soliman A et al., Model-Informed Dose Optimization of Spi…, Pharmaceuticals (Basel, Swi… (2025) | [10.3390/ph18030355](https://doi.org/10.3390/ph18030355) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q32, Q22 — no SI value to build from</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub> | [↳ canrenone_can_model_value](drugs/toxin_spironolactone/Spironolactone_Soliman2025_canrenone_can_model_value.md) | held back | 1-compartment general linear | 6 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22 — no SI value to build from</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub> | [↳ spironolactone_sp_model_value](drugs/toxin_spironolactone/Spironolactone_Soliman2025_spironolactone_sp_model_value.md) | held back | 1-compartment general linear | 6 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q83 — no SI value to build from</sub> | [Tatipalli_2021_reference](drugs/toxin_spironolactone/Spironolactone_Tatipalli2021_reference.md) | model (no simulator) | 2-compartment general linear | 8 | Tatipalli M et al., Model-Informed Optimization of a Pediat…, Pharmaceutics (2021) | [10.3390/pharmaceutics13060849](https://doi.org/10.3390/pharmaceutics13060849) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Lass_2023_reference](drugs/toxin_spironolactone/Spironolactone_Lass2023_reference.md) | — | general linear (no model) | 2 | Lass J et al., Pharmacokinetics of Oral Spironolactone… (2023) | [10.21203/rs.3.rs-3095864/v1](https://doi.org/10.21203/rs.3.rs-3095864/v1) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Lass_2024_reference](drugs/toxin_spironolactone/Spironolactone_Lass2024_reference.md) | — | general linear (no model) | 2 | Lass J et al., Pharmacokinetics of oral spironolactone…, European journal of clinica… (2024) | [10.1007/s00228-023-03599-w](https://doi.org/10.1007/s00228-023-03599-w) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no kinetic quantity — no half-life, rate constant, volume or clearance (exposur…</sub> | [Pilkova_2024_group_1_males_12_57](drugs/toxin_spironolactone/Spironolactone_Pilkova2024_group_1_males_12_57.md) | — | 1-compartment (no model) | 1 | Pilkova A et al., Novel approach to adherence assessment…, Biomedical papers of the Me… (2024) | [10.5507/bp.2022.048](https://doi.org/10.5507/bp.2022.048) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no kinetic quantity — no half-life, rate constant, volume or clearance (exposur…</sub> | [↳ group_2_males_37_52](drugs/toxin_spironolactone/Spironolactone_Pilkova2024_group_2_males_37_52.md) | — | 1-compartment (no model) | 1 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Sungaila_1992_reference](drugs/toxin_spironolactone/Spironolactone_Sungaila1992_reference.md) | — | 1-compartment (no model) | 0 | Sungaila I et al., Spironolactone pharmacokinetics and pha…, Gastroenterology (1992) | [10.1016/0016-5085(92)91730-r](https://doi.org/10.1016/0016-5085(92)91730-r) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **ADD1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [Hou_2024](drugs/toxin_spironolactone/pgx_Hou_2024_ADD1_Q100.md) | Hou T et al., Pharmacogenomics assists in controlling…, Frontiers in pharmacology (2024) | [10.3389/fphar.2024.1424683](https://doi.org/10.3389/fphar.2024.1424683) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP3A5** | `Q22` · CL | metabolism | [Hou_2024](drugs/toxin_spironolactone/pgx_Hou_2024_CYP3A5_Q22.md) | Hou T et al., Pharmacogenomics assists in controlling…, Frontiers in pharmacology (2024) | [10.3389/fphar.2024.1424683](https://doi.org/10.3389/fphar.2024.1424683) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **NEDD4L** | `Q38` · E | unknown | [Hou_2024](drugs/toxin_spironolactone/pgx_Hou_2024_NEDD4L_Q38.md) | Hou T et al., Pharmacogenomics assists in controlling…, Frontiers in pharmacology (2024) | [10.3389/fphar.2024.1424683](https://doi.org/10.3389/fphar.2024.1424683) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=spironolactone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` inducer, `ABCC2` inducer, `SLCO1A2` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` inducer, `SLCO1A2` inhibitor | DrugBank actor |
| distribution | placenta | `ABCB1` inducer | DrugBank actor |
| distribution | testis | `ABCB1` inducer | DrugBank actor |
| metabolism | kidney | `CYP3A5` metabolism | PGx paper |
| metabolism | liver | `CYP2C8` inhibitor, `CYP3A5` metabolism | DrugBank actor |
| metabolism | small intestine | `CYP3A5` metabolism | PGx paper |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` inducer, `ABCC2` inducer | DrugBank actor |
| excretion | liver | `ABCB1` inducer, `ABCB11` substrate, `ABCC2` inducer | DrugBank actor |
| — | adrenal gland | `CYP11B1` inducer | DrugBank actor |
| — | prostate gland | `AR` target | DrugBank actor |

<sub>Actors without a tissue in the table: ADD1 (unknown), CACNA1C (inhibitor), CYP11B2 (inhibitor), ESR1 (target), NEDD4L (unknown), NR1I2 (target), NR3C1 (target), NR3C2 (target), PGR (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-12 19:47 | 41:16 | 7/5/0 | 0/0/0 | 0/0/3 | 1,461,919/192,879 | ollama / glm-5.3-flash | 39 | 5/25 | 39/0 | 0 |

## Coverage

- **PubMed hits:** 350 matched, 182 returned
- **screened:** 10  ·  **relevant:** 10
- **records:** 12  ·  extracted 1  ·  needs review 6  ·  rejected 5  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_8 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Krause_1983.pdf` | Krause W et al., Pharmacokinetics of canrenone after ora…, European journal of clinica… (1983) | popPK | 9 | [10.1007/BF00542109](https://doi.org/10.1007/BF00542109) | [6653638](https://pubmed.ncbi.nlm.nih.gov/6653638) | Quantitative pharmacokinetic parameters (half-lives, clearance, Cmax, bioavailability, urinary excretion) for canrenone, the active metabolite of spironolactone, are fully reported with numeric values in the abstract. |
| `Dahmana_2020.pdf` | Dahmana N et al., Ocular Biodistribution of Spironolacton…, Molecular pharmaceutics (2020) | popPK | 8 | [10.1021/acs.molpharmaceut.9b00707](https://doi.org/10.1021/acs.molpharmaceut.9b00707) | [31751144](https://pubmed.ncbi.nlm.nih.gov/31751144) | Rat in vivo biodistribution with ocular tissue and plasma concentrations of SPL and metabolites over time, but numeric values appear in the full article/figures, not in the abstract evidence provided. |
| `Sungaila_1992.pdf` | Sungaila I et al., Spironolactone pharmacokinetics and pha…, Gastroenterology (1992) | popPK | 8 | [10.1016/0016-5085(92)91730-r](https://doi.org/10.1016/0016-5085(92)91730-r) | [1568578](https://pubmed.ncbi.nlm.nih.gov/1568578) | Reports numeric half-lives and elimination rate constants for spironolactone and its metabolites directly in the abstract. |
| `Beloqui_2014.pdf` | Beloqui A et al., Fate of nanostructured lipid carriers (…, Journal of microencapsulati… (2014) | popPK | 7 | [10.3109/02652048.2013.788090](https://doi.org/10.3109/02652048.2013.788090) | [23631381](https://pubmed.ncbi.nlm.nih.gov/23631381) | PK of spironolactone metabolites (absolute bioavailability values) in rabbits, but most numeric PK parameters likely in figures/tables not fully provided in evidence. |
| `Jiang_2015.pdf` | Jiang Q et al., In-vitro and in-vivo study of amorphous…, Drug development and indust… (2015) | popPK | 6 | [10.3109/03639045.2013.858731](https://doi.org/10.3109/03639045.2013.858731) | [24369091](https://pubmed.ncbi.nlm.nih.gov/24369091) | Dog pharmacokinetic crossover study of spironolactone formulations reports relative AUC0-t and Cmax values (1.61- and 1.52-fold), but the underlying absolute numeric parameters appear to live in figures/tables not provided. |
| `Mu_2016.pdf` | Mu S et al., Spironolactone nanocrystals for oral ad…, Colloids and surfaces. B, B… (2016) | popPK | 6 | [10.1016/j.colsurfb.2016.07.051](https://doi.org/10.1016/j.colsurfb.2016.07.051) | [27490456](https://pubmed.ncbi.nlm.nih.gov/27490456) | Reports in vivo oral pharmacokinetics (AUC fold-changes) of spironolactone nanocrystals, but absolute parameter values and figures are not included in the evidence; the study is almost certainly in rats (typical for such PK studies) though species is not stated in the abstract. |
| `Platt_1984.pdf` | Platt D et al., The influence of age and multimorbidity…, Archives of gerontology and… (1984) | popPK | 6 | [10.1016/0167-4943(84)90006-2](https://doi.org/10.1016/0167-4943(84)90006-2) | [6476975](https://pubmed.ncbi.nlm.nih.gov/6476975) | Human steady-state pharmacokinetics of spironolactone metabolites (canrenone) in geriatric patients, but actual numeric parameter values (AUC, concentrations) are not given in the abstract text. |
| `Willi_2018.pdf` | Willi RA et al., Interaction of environmental steroids w…, Environmental toxicology an… (2018) | popPK | 5 | [10.1002/etc.4231](https://doi.org/10.1002/etc.4231) | [30055005](https://pubmed.ncbi.nlm.nih.gov/30055005) | Spironolactone is a subject substance whose Oatp1d1 interaction (IC50) was measured, but the numeric IC50 values are only ranked in the text, not reported in the provided evidence. |

<sub>queue written 2026-11-12 19:24 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdel_2020 | irrelevant | 0 | 0 | The kinetic parameters (clearance, volume of distribution) belong to digoxin; spironolactone appears only as a co-administered covariate with no kinetic parameters of its own. |
| popPK | Abshagen_1973 | irrelevant | 0 | 0 | no_text gate: only 93 chars of text extracted (&lt; 400) |
| popPK | Abshagen_1977 | irrelevant | 0 | 0 | no_text gate: only 84 chars of text extracted (&lt; 400) |
| PGx | Adamidis_2019 | not_relevant | 3 | 3 | Discusses possible failure of spironolactone PD response due to 11β-HSD2 genotype but reports no quantitative PK/PD parameter effect. |
| PGx | Amin_2023 | not_relevant | 0 | 0 | Spironolactone is only mentioned as a therapy context; NR3C2 variants are linked to PCOS risk, not to any PK/PD parameter of spironolactone. |
| popPK | Anderson_2016 | irrelevant | 1 | 1 | Spironolactone appears only as a discussed co-medication in a review of hormone–PrEP drug interactions; the numeric kinetic values given (e.g., tenofovir Cmax/AUC, TFV-DP half-life) belong to other substances, and no quantitative spironolactone parameters are reported. |
| popPK | Barnes_2005 | irrelevant | 0 | 0 | Spironolactone appears only as a comparator in a review focused on eplerenone, with no kinetic parameters for spironolactone. |
| PGx | Barsheshet_2014 | not_relevant | 0 | 0 | Review only mentions spironolactone as therapy for LQT2 with no pharmacogenomic effect on PK/PD parameters. |
| popPK | Bauersachs_2003 | irrelevant | 0 | 0 | Narrative review of spironolactone pharmacodynamics in heart failure with no kinetic parameters reported. |
| popPK | Bell_2014 | irrelevant | 0 | 0 | Spironolactone is a therapeutic intervention in a cardiac imaging outcome study; the kmono clearance rate belongs to [11C]acetate, not spironolactone, and no spironolactone kinetic parameters are reported. |
| popPK | Beloqui_2014 | relevant | 7 | 4 | PK of spironolactone metabolites (absolute bioavailability values) in rabbits, but most numeric PK parameters likely in figures/tables not fully provided in evidence. |
| popPK | Benagiano_2004 | irrelevant | 0 | 0 | Spironolactone appears only as a chemical-family descriptor ("a spironolactone derivative" — drospirenone); no kinetic parameters for spironolactone itself are reported. |
| popPK | Brater_2000 | irrelevant | 4 | 1 | This is a qualitative review of diuretic pharmacodynamics; no quantitative kinetic parameters for spironolactone are reported or accessible here. |
| popPK | Brater_2011 | irrelevant | 2 | 0 | This is a narrative review of diuretic clinical pharmacology with no numeric kinetic parameters for spironolactone reported in the evidence. |
| PGx | Buckley_2009 | not_relevant | 0 | 0 | Spironolactone is only used as a PXR activator to induce mouse Ugt mRNA; no variant/genotype effect on its PK/PD is reported. |
| popPK | Buss_2006 | irrelevant | 0 | 0 | No quantitative toxicokinetic parameters for spironolactone; it is a mechanistic pharmacodynamic/outcome study in rats with no kinetic values provided. |
| popPK | Carruthers_1980 | irrelevant | 2 | 2 | Spironolactone is only an intervention affecting digitoxin kinetics; the half-lives reported belong to digitoxin, not spironolactone. |
| PGx | Catania_2003 | not_relevant | 2 | 3 | Drug (spironolactone) is the inducer affecting UGT enzymes, not gene variants altering spironolactone PK/PD. |
| PGx | Celander_1996 | not_relevant | 1 | 5 | Spironolactone is only used as a non-GR-agonist control in fish cells; no gene variant effect on its PK/PD is reported. |
| PGx | Chaccour_2020 | not_relevant | 0 | 0 | Ivermectin COVID-19 trial protocol; spironolactone only mentioned as excluded comedrug, no pharmacogenomic PK/PD effects. |
| popPK | Chalasani_2001 | irrelevant | 1 | 1 | Spironolactone is only background co-medication; the kinetic parameters reported are for furosemide, not spironolactone. |
| PGx | Charron_2001 | not_relevant | 2 | 0 | Review abstract mentioning spironolactone only as a future pharmacogenomic challenge, with no gene-variant effect on any PK/PD parameter reported. |
| popPK | Chen_2013 | irrelevant | 0 | 0 | The kinetic parameters (CL/F, V/F) belong to digoxin; spironolactone appears only as a co-medication covariate with no kinetic parameters of its own. |
| popPK | Chiara_2020 | irrelevant | 0 | 0 | The paper reviews drospirenone, with spironolactone mentioned only as the structural analogue, and no kinetic parameters for spironolactone itself are reported. |
| popPK | Colussi_1994 | irrelevant | 1 | 3 | This is a therapeutic outcome study of spironolactone in Gitelman's syndrome with physiological/clinical measurements (K, Mg clearance), not any kinetic parameter (half-life, clearance, Vd, rate constants) for spironolactone itself. |
| PGx | Dalila_2015 | not_relevant | 3 | 6 | MR rs3857080 affects electrolyte excretion with diuretics, but spironolactone is only mentioned as a future candidate—no drug effect on its PK/PD is reported. |
| PGx | Dec_2003 | not_relevant | 0 | 0 | Paper discusses digoxin for heart failure; spironolactone appears only as a drug interaction raising digoxin levels, with no gene variant effect on any PK/PD parameter. |
| popPK | Decaux_1986 | irrelevant | 0 | 0 | Spironolactone appears only as co-medication dosing; no kinetic parameters of spironolactone reported. |
| popPK | Delanaye_2022 | irrelevant | 4 | 0 | Spironolactone is only mentioned as a comparator (half-life/Vd comparison) with no numeric kinetic values; numbers appear absent entirely. |
| popPK | Ding_2023 | irrelevant | 0 | 0 | Clinical efficacy/safety meta-analysis of MRAs with no kinetic parameters for spironolactone. |
| popPK | Doucet_1980 | irrelevant | 0 | 0 | Spironolactone is used only as a pharmacologic tool in a kidney physiology study with no kinetic parameters of spironolactone. |
| PGx | Du_2020 | not_relevant | 0 | 0 | The paper reports genetic (SLCO4C1) and spironolactone effects on digoxin PK, not on spironolactone's own PK/PD parameters. |
| PGx | Du_2021 | not_relevant | 2 | 6 | Spironolactone is only a covariate on digoxin PK (interaction, not PGx), and no pharmacogenomic variant alters spironolactone's own PK/PD parameters. |
| PGx | Du_2021_2 | not_relevant | 4 | 0 | Corrigendum only; spironolactone is a covariate in a digoxin PK study, not a PGx effect on spironolactone itself, and no effect data are contained here. |
| popPK | Elzinga_2026 | irrelevant | 0 | 0 | Spironolactone appears only as a covariate associated with tacrolimus PK variability; no kinetic parameters for spironolactone itself. |
| popPK | Fiaccadori_1993 | irrelevant | 0 | 0 | Spironolactone appears only as fixed co-medication (200 mg/day); no kinetic parameters of spironolactone are reported and no numeric values are present. |
| popPK | Fiaccadori_1994 | irrelevant | 0 | 0 | Spironolactone appears only as prior comparator therapy; no kinetic parameters for it are reported. |
| popPK | Fülöp_2016 | irrelevant | 1 | 2 | Cross-sectional utilization/outcome study; spironolactone only as therapy with dose range, no kinetic parameters. |
| PGx | Garcia_2021 | not_relevant | 0 | 0 | Paper is an ivermectin COVID-19 trial protocol; spironolactone only appears as an excluded concomitant CYP3A4/P-gp inhibitor, with no gene variant effect on its PK/PD. |
| popPK | Garg_2021 | irrelevant | 0 | 0 | Clinical outcome case series with no kinetic parameters for spironolactone. |
| PGx | Grube_2006 | not_relevant | 2 | 4 | Spironolactone is only characterized as an OCTN2 inhibitor/substrate in vitro; no genotype effect on spironolactone PK/PD parameters is reported. |
| popPK | Haddow_1976 | irrelevant | 0 | 1 | Spironolactone is only a pretreatment modulating copper kinetics; no quantitative TK parameters for spironolactone itself are reported. |
| popPK | Hanlon_2009 | irrelevant | 0 | 0 | A dosing consensus survey mentioning spironolactone only as a renally cleared drug to avoid; no kinetic parameters of any kind. |
| PGx | He_2020 | not_relevant | 3 | 3 | SLC12A3 variants relate to Gitelman syndrome disease pathogenesis, not to altered spironolactone PK/PD; spironolactone dosing/outcomes are not stratified by genotype. |
| PGx | Hirai_2026 | not_relevant | 2 | 3 | Narrative review of MRAs discusses clinical hyperkalemia risk and CYP-mediated drug–drug interactions but reports no gene variant/genotype effect on spironolactone PK or PD parameters. |
| popPK | Homeida_1977 | irrelevant | 0 | 0 | Spironolactone is only a pretreatment modulator of furosemide kinetics; no kinetic parameters are reported for spironolactone itself. |
| popPK | Horisberger_1983 | irrelevant | 0 | 0 | Spironolactone is mentioned only as a prior experimental manipulation with no kinetic parameters for it; all quantitative values concern lithium in rats. |
| popPK | Iqbal_2014 | irrelevant | 2 | 1 | Review comparing spironolactone and eplerenone clinically, with no numeric kinetic parameters present in the evidence. |
| popPK | Jiang_2015 | relevant | 6 | 4 | Dog pharmacokinetic crossover study of spironolactone formulations reports relative AUC0-t and Cmax values (1.61- and 1.52-fold), but the underlying absolute numeric parameters appear to live in figures/tables not provided. |
| popPK | Juruena_2013 | irrelevant | 2 | 1 | This is an endocrine challenge/outcome study in depression patients; no numeric kinetic parameters for spironolactone (e.g., clearance, half-life, Vmax/Km) appear in the evidence. |
| PGx | Knights_2010 | not_relevant | 0 | 0 | Reports a drug-drug (spironolactone) inhibition of UGT2B7-mediated aldosterone metabolism, not any gene variant/genotype effect on spironolactone PK/PD. |
| popPK | Kolkhof_2017 | irrelevant | 2 | 0 | Review focused on pharmacology/efficacy of MRAs with no numeric toxicokinetic parameters for spironolactone present in the evidence. |
| popPK | Kourounakis_1995 | irrelevant | 1 | 0 | Spironolactone is an inducer modulating glucuronidase activity in rats; no quantitative kinetic parameters for spironolactone itself are reported and none appear in the evidence. |
| popPK | Kvedar_1985 | irrelevant | 0 | 0 | Spironolactone is mentioned only as an empiric treatment for hirsutism with no kinetic parameters reported. |
| popPK | Laffi_1993 | irrelevant | 2 | 0 | A narrative review/discussion of diuretic therapy in cirrhosis with no quantitative kinetic parameters for spironolactone presented. |
| popPK | Laffi_1993_2 | irrelevant | 0 | 0 | Clinical review of refractory ascites treatment; spironolactone appears only as a therapeutic dose reference with no kinetic parameters. |
| popPK | Lal_2023 | irrelevant | 0 | 2 | Spironolactone appears only as a combination agent modulating LP-184 efficacy; no kinetic parameters are reported for spironolactone itself. |
| popPK | Lam_2024 | irrelevant | 2 | 3 | Spironolactone is a co-exposure; the reported PK parameters (AUC, CL/F, t½) are for doravirine, tenofovir and estradiol, with spironolactone's own PK parameters not quantified in the evidence. |
| popPK | Langaa_2025 | irrelevant | 1 | 2 | The kinetic parameters (82Rb, MAG3 clearances for renal perfusion) do not belong to spironolactone pharmacokinetics/disposition; spironolactone only serves as an intervention, and no spironolactone itself disposition parameters are present. |
| popPK | Lava_2023 | irrelevant | 0 | 0 | Review of diuretics in pediatrics with no spironolactone kinetic parameters provided. |
| popPK | Lessner_2014 | irrelevant | 0 | 0 | Clinical efficacy study with no kinetic parameters, only dose and outcome data. |
| popPK | Li_2026 | irrelevant | 1 | 1 | A narrative review of therapeutic efficacy with no kinetic parameters for spironolactone; only dosing regimens and clinical outcome rates appear, and retinal concentration data are explicitly unavailable. |
| popPK | Lilius_2014 | irrelevant | 1 | 0 | Spironolactone is a co-administered modulator; all kinetic parameters (morphine concentrations and tissue distribution) belong to morphine, with no spironolactone kinetic values reported. |
| PGx | Liu_2016 | not_relevant | 1 | 1 | Paper only mentions spironolactone might help hypokalemia in GS; no gene variant effect on spironolactone PK/PD parameters reported. |
| popPK | Lovisi_2011 | irrelevant | 0 | 0 | Outcome/efficacy study of spironolactone treatment with no kinetic parameters of the substance itself; only creatinine clearance is reported. |
| popPK | Manjaly_2023 | irrelevant | 1 | 0 | The paper's subject is clascoterone; spironolactone only appears as a comparator, and no numeric kinetic values for spironolactone are present in the evidence. |
| popPK | Mann_2011 | irrelevant | 0 | 0 | A clinical review on resistant hypertension treatment with no kinetic parameters for spironolactone. |
| popPK | Mantle_1980 | irrelevant | 0 | 0 | Spironolactone appears only as a clinical treatment for edema, with no kinetic parameters. |
| popPK | Marqués-Miñana_2010 | irrelevant | 0 | 0 | Spironolactone appears only as a covariate/concomitant drug affecting vancomycin kinetics; all reported kinetic parameters belong to vancomycin, not spironolactone. |
| popPK | Marrs_2010 | irrelevant | 2 | 0 | The paper is a review discussing pharmacokinetics generally, but no numeric kinetic parameters for spironolactone are present in the provided evidence. |
| popPK | Marzolla_2022 | irrelevant | 0 | 0 | Review about finerenone; spironolactone appears only as a comparator with no kinetic parameters. |
| popPK | Masters_2024 | relevant | 4 | 3 | A dog PK/exposure study of spironolactone, but the paper's own data are metabolite (canrenone/TMS) concentrations as fold-changes; kinetic values (26 h elimination half-life, &lt;2 h prodrug half-life, 15–20 h metabolite half-life, bioavailability 80–90% vs 50%) are quoted with sparse numeric context and partly from cited references. |
| popPK | Meid_2024 | relevant | 5 | 3 | A QSP model applied in nine human patients includes a classical PK submodel of spironolactone/canrenone, but kinetic parameter values largely live in figures/appendices; only a bioavailability value (0.91097) appears in the extracted evidence. |
| popPK | Merkus_1983 | irrelevant | 0 | 0 | no_text gate: only 125 chars of text extracted (&lt; 400) |
| popPK | Montaperto_2016 | irrelevant | 0 | 0 | Spironolactone is only a co-administered RAASi whose dose was titrated; no kinetic parameters for spironolactone are reported. |
| PGx | Moore_2003 | not_relevant | 0 | 0 | Review of eplerenone (not spironolactone PK/PD); no gene variant effects on spironolactone pharmacokinetic or pharmacodynamic parameters reported. |
| popPK | Mountokalakis_1975 | irrelevant | 0 | 0 | Spironolactone is an intervention in a renal excretion (magnesium/potassium clearance) study; no kinetic parameters of spironolactone itself are reported. |
| popPK | Mu_2016 | relevant | 6 | 3 | Reports in vivo oral pharmacokinetics (AUC fold-changes) of spironolactone nanocrystals, but absolute parameter values and figures are not included in the evidence; the study is almost certainly in rats (typical for such PK studies) though species is not stated in the abstract. |
| popPK | Naseralallah_2024 | irrelevant | 1 | 0 | Review of aprocitentan's pharmacokinetics; spironolactone appears only as a comparator therapy with no kinetic parameters for it. |
| popPK | Nielsen_2006 | irrelevant | 0 | 0 | Spironolactone is used as a treatment intervention; only urine production/creatinine clearance outcomes are reported, no toxicokinetic parameters of spironolactone itself. |
| PGx | Panfili_2012 | not_relevant | 0 | 0 | Paper concerns ranolazine-induced bladder hypotonia with CYP phenotyping; spironolactone is only concomitant medication with no pharmacogenomic PK/PD effect reported. |
| popPK | Pieper_2015 | irrelevant | 0 | 0 | A narrative review mentioning spironolactone only qualitatively, with no kinetic parameters. |
| popPK | Platt_1984 | relevant | 6 | 3 | Human steady-state pharmacokinetics of spironolactone metabolites (canrenone) in geriatric patients, but actual numeric parameter values (AUC, concentrations) are not given in the abstract text. |
| popPK | Puschett_1981 | irrelevant | 0 | 0 | Spironolactone appears only as an example diuretic in a pharmacological review of renal mechanisms; no kinetic parameters of any kind are reported. |
| popPK | Pérez-Rojas_2007 | irrelevant | 1 | 0 | This is a rat efficacy/outcome study; spironolactone dose is given but no kinetic parameters (half-life, clearance, etc.) are reported. |
| popPK | Ramadan_2005 | irrelevant | 1 | 1 | This is an epidemiological case-control outcome study where spironolactone use is only an odds ratio for hyperkalemia; no kinetic parameter of spironolactone is reported. |
| popPK | Ramadan_2025 | irrelevant | 0 | 0 | The paper is a review of finerenone with spironolactone as a comparator; no quantitative kinetic parameters for spironolactone itself are reported (only its qualitative role in comparisons). |
| popPK | Rapp_1979 | irrelevant | 1 | 0 | Spironolactone is only a pretreatment/co-exposure modifier studied for its effect on cocaine kinetics; no kinetic parameters for spironolactone itself are reported, and no numeric values appear in the evidence. |
| popPK | Regidor_2023 | irrelevant | 1 | 2 | The subject substance is drospirenone (a spironolactone derivative); spironolactone appears only as comparator/analogue (e.g., 20–25 mg equivalence) with no toxicokinetic parameters for spironolactone itself. |
| PGx | Rigalli_2011 | not_relevant | 0 | 0 | In vitro study of spironolactone inducing P-gp via PXR in HepG2 cells; no gene variant/genotype/phenotype effect on spironolactone PK/PD reported. |
| popPK | Roberts_1979 | irrelevant | 0 | 0 | Clinical outcome/effect study comparing antihypertensive drugs with no kinetic parameters (no clearance, half-life, or model) reported for spironolactone. |
| popPK | Rodriguez_2025 | irrelevant | 0 | 0 | Case report of spironolactone treatment with no kinetic parameters of any kind. |
| popPK | Sabina_2024 | irrelevant | 0 | 0 | Review focused on finerenone; spironolactone is only a comparator (IC50 24.2 nM and qualitative half-life mention), with no spironolactone kinetic parameters of its own. |
| PGx | Satoh_2003 | not_relevant | 0 | 0 | In vitro drug-drug/estrogen metabolism study; spironolactone's enzyme inhibition reported, but no gene variant/genotype effect on PK/PD parameters. |
| PGx | Schurman_2001 | not_relevant | 1 | 1 | Spironolactone mentioned only as background therapy in Bartter syndrome; no genotype effect on any PK/PD parameter reported. |
| PGx | Sehgal_2023 | not_relevant | 3 | 2 | Review mentions possible pharmacogenomic influence only generally; no specific gene variant effect on spironolactone PK/PD parameters reported. |
| PGx | Sehgal_2024 | not_relevant | 0 | 0 | Corrigendum only corrects a sentence about infertility; no spironolactone pharmacogenomic PK/PD effects reported. |
| popPK | Sica_2005 | relevant | 4 | 1 | Review discussing spironolactone pharmacokinetics (half-lives of metabolites) but no numeric values present in the evidence text. |
| PGx | Soliman_2025 | not_relevant | 2 | 0 | PBPK dosing study in neonates/infants using age-based enzyme ontogeny; no gene variants/genotypes linked to PK or PD changes in spironolactone. |
| PGx | Soto_2026 | not_relevant | 2 | 0 | Study examines marine toxins altering murine CYP enzyme expression; no gene variant/genotype effect on spironolactone (or any drug's) PK/PD parameter is reported—only speculation that Aldactone toxicity might be augmented. |
| popPK | Srivastava_2016 | irrelevant | 0 | 0 | Clinical trial of lipid/albuminuria outcomes with spironolactone as a treatment arm; no kinetic parameters (half-life, clearance, Vd, etc.) are reported. |
| popPK | Suematsu_2001 | irrelevant | 0 | 0 | Kinetic parameters (digoxin clearance) belong to digoxin; spironolactone appears only as a covariate affecting clearance. |
| popPK | Sugarman_1988 | irrelevant | 1 | 3 | Spironolactone is used as a pharmacological comparator for potassium handling in anephric humans; no spironolactone TK parameters (half-life, clearance, etc.) are reported, and the "volumes of distribution" refer to potassium. |
| popPK | Suzuki_2001 | irrelevant | 0 | 0 | Spironolactone is only a pharmacological blocker of aldosterone in a rat physiology study; no kinetic parameters of spironolactone are reported. |
| popPK | Takkis_2017 | irrelevant | 0 | 0 | This is an LC-MS/MS analytical method validation paper; no pharmacokinetic or toxicokinetic parameters of spironolactone are reported, and the actual clinical PK samples come from trials described elsewhere. |
| PGx | Tang_2023 | not_relevant | 1 | 1 | Spironolactone is only listed as a suspected cause of hypertension; pharmacogenomic findings (ABCB1, CYP3A5) relate to dexamethasone/amlodipine, not spironolactone PK/PD. |
| popPK | Tato_1980 | irrelevant | 0 | 0 | no_text gate: only 117 chars of text extracted (&lt; 400) |
| popPK | Thomas_1981 | irrelevant | 0 | 0 | Review on spironolactone's effect on digoxin pharmacokinetics, with digoxin as the measured substance and no spironolactone kinetic parameters reported. |
| popPK | Tocchetti_2016 | irrelevant | 1 | 0 | A review mentioning spironolactone only as an example of an MRP2/PXR inducer, with no kinetic parameters of spironolactone. |
| popPK | Toffolo_1997 | irrelevant | 0 | 0 | Spironolactone is mentioned only as a co-administered drug in a clinical outcome study of renal calcifications, with no kinetic parameters of any kind. |
| PGx | Ulick_1989 | not_relevant | 0 | 0 | Paper describes a cortisol metabolism disorder; spironolactone is only mentioned as a corrective agent, no gene variant effect on its PK/PD. |
| popPK | Vardeny_2019 | irrelevant | 0 | 0 | Clinical outcome/safety analysis by age with hazard ratios only; no kinetic parameters for spironolactone are reported. |
| popPK | Waanders_2009 | irrelevant | 0 | 0 | This is a pharmacodynamic efficacy study in a rat transplant model with no kinetic parameters (no half-life, clearance, or concentrations) reported. |
| popPK | Waldorff_1978 | irrelevant | 1 | 1 | All kinetic parameters (clearances, volumes of distribution) belong to digoxin, with spironolactone only as the interacting co-treatment, and no spironolactone numbers appear. |
| PGx | Wang_2017 | not_relevant | 4 | 4 | Reports spironolactone's effect on serum potassium (PD outcome) in GS patients generally, but does not link genotype/variant to any PK/PD parameter of spironolactone. |
| popPK | Willi_2018 | relevant | 5 | 3 | Spironolactone is a subject substance whose Oatp1d1 interaction (IC50) was measured, but the numeric IC50 values are only ranked in the text, not reported in the provided evidence. |
| popPK | Wirth_1976 | irrelevant | 1 | 2 | Spironolactone is only a co-treatment modulating digitoxin's kinetics; the reported half-life and volume of distribution belong to digitoxin, not spironolactone itself. |
| popPK | Wise_2018 | irrelevant | 0 | 0 | Spironolactone appears only as a co-administered diuretic in an outcome study of metolazone, with no kinetic parameters for spironolactone. |
| popPK | Wu_2006 | irrelevant | 0 | 0 | Spironolactone is only mentioned as an example drug causing thyroid tumors in rats; no kinetic parameters or numbers reported. |
| popPK | Yager_2022 | irrelevant | 1 | 1 | Spironolactone appears only as a co-administered gender-affirming hormone; all reported PK parameters belong to emtricitabine and tenofovir, not spironolactone. |
| popPK | Yukawa_1995 | irrelevant | 0 | 0 | Spironolactone appears only as a covariate affecting metildigoxin clearance; no kinetic parameters for spironolactone itself are reported. |
| popPK | Yukawa_1997 | irrelevant | 1 | 0 | Spironolactone appears only as a covariate in a population PK analysis of digoxin; no kinetic parameters of spironolactone itself are reported, and the digoxin estimates are not given numerically in the evidence. |
| popPK | Yukawa_2001 | irrelevant | 1 | 2 | Spironolactone appears only as a binary covariate (0.77 factor lowering digoxin clearance) in a digoxin population PK model; no kinetic parameter of spironolactone itself is reported. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | This is a cryo-EM structural biology paper on the hOCT1 transporter; spironolactone is only an inhibitor ligand in structures, with no kinetic or toxicokinetic parameters for spironolactone reported. |
| popPK | Zhou_2010 | irrelevant | 1 | 0 | The kinetic parameters (Cl/F, Vd/F, Ka) belong to digoxin as the subject substance; spironolactone appears only as a covariate (co-medication) modifying digoxin clearance, with no kinetic parameters of spironolactone itself. |
| popPK | Zillich_2002 | irrelevant | 0 | 0 | This is a review of eplerenone that only mentions spironolactone qualitatively as a comparator, with no spironolactone kinetic parameters. |
| popPK | Zipser_1981 | irrelevant | 0 | 0 | Spironolactone is used only as a mineralocorticoid inhibitor in a physiological outcome study; no kinetic parameters for it are reported. |
| popPK | van_2006 | irrelevant | 1 | 0 | Review on pediatric diuretics mentioning spironolactone only qualitatively, with no numeric kinetic parameters provided. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bspironolactone%5D&body=Drug%3A%20spironolactone%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_spironolactone/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-12 19:24 UTC</sub>
