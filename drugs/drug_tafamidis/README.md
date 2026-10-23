<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07X&quot;,&quot;href&quot;:&quot;atc/N07X.md&quot;},{&quot;label&quot;:&quot;tafamidis&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tafamidis_Parkinson2013_reference&quot;,&quot;label&quot;:&quot;Parkinson_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tafamidis/Tafamidis_Parkinson2013_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# tafamidis

- **generic name:** tafamidis
- **ATC codes:** `N07XX08`
- **DrugBank:** [DB11644](https://go.drugbank.com/drugs/DB11644) · **PubChem:** [CID 11001318](https://pubchem.ncbi.nlm.nih.gov/compound/11001318)
- **molar mass:** 308.116 g/mol (C14H7Cl2NO3) — DrugBank
- **groups:** approved, investigational

## About

Tafamidis is a nervous system drug used to treat amyloidosis. It is authorised in the European Union and is also being investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q519447](https://www.wikidata.org/wiki/Q519447) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| tafamidis | parent | 308.116 | C14H7Cl2NO3 | DrugBank | [11001318](https://pubchem.ncbi.nlm.nih.gov/compound/11001318) | Ulaszek_2026 |

## Start here

> **Parkinson_2013_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> review reference. [Run it in the simulator](drugs/drug_tafamidis/Tafamidis_Parkinson2013_reference.md?tab=Simulation) · [record](drugs/drug_tafamidis/Tafamidis_Parkinson2013_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL | 8.4 ‡ | L/h | 0.12 l/h/kg | review reference | mouse | <span class="pk-badge pk-badge--orange">Needs review</span> | [Parkinson_2013_reference](drugs/drug_tafamidis/Tafamidis_Parkinson2013_reference.md) |
| V | V | 7.675 | L | 7.6751 L | review reference | mouse | <span class="pk-badge pk-badge--orange">Needs review</span> | [Parkinson_2013_reference](drugs/drug_tafamidis/Tafamidis_Parkinson2013_reference.md) |
| ka | kabs | 0.41 | 1/h | 0.41 1/h | review reference | mouse | <span class="pk-badge pk-badge--orange">Needs review</span> | [Parkinson_2013_reference](drugs/drug_tafamidis/Tafamidis_Parkinson2013_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. ‡ given per kg in the paper; shown for a 70 kg adult. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="mouse" data-age="unknown" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: unreported model parameter default(s): F</sub> | [Parkinson_2013_reference](drugs/drug_tafamidis/Tafamidis_Parkinson2013_reference.md) | ▶ model + simulator | 2-compartment, oral | 5 | Parkinson J et al., Modeling of age-dependent amyloid accum…, Pharmacology research & per… (2013) | [10.1002/prp2.12](https://doi.org/10.1002/prp2.12) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub> | [Scala_2018_reference](drugs/drug_tafamidis/Tafamidis_Scala2018_reference.md) | — | 2-compartment (no model) | 3 | Scala M et al., A Pharmacokinetics, Efficacy, and Safet…, Investigative radiology (2018) | [10.1097/rli.0000000000000412](https://doi.org/10.1097/rli.0000000000000412) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Ulaszek_2026_dosing_regimen](drugs/drug_tafamidis/Tafamidis_Ulaszek2026_dosing_regimen.md) | — | general linear (no model) | 0 | Ulaszek S et al., Exploring Tafamidis Effects Through PBP…, Pharmaceutics (2026) | [10.3390/pharmaceutics18030367](https://doi.org/10.3390/pharmaceutics18030367) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [↳ value](drugs/drug_tafamidis/Tafamidis_Ulaszek2026_value.md) | — | general linear (no model) | 4 (+3 cov.) |  |  |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Tess_2023_TTR](drugs/drug_tafamidis/pd_Tess_2023_TTR.md) | unbound TTR tetramer (TTR stabilisation) ← tafamidis · inhibition effect | — | Tess DA et al., Relationship of binding-site occupancy,…, Amyloid : the international… (2023) | [10.1080/13506129.2022.2145876](https://doi.org/10.1080/13506129.2022.2145876) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Ulaszek_2026_TTR](drugs/drug_tafamidis/pd_Ulaszek_2026_TTR.md) | Total transthyretin (TTR) concentration in plasma biomarker turnover ← tafamidis | — | Ulaszek S et al., Exploring Tafamidis Effects Through PBP…, Pharmaceutics (2026) | [10.3390/pharmaceutics18030367](https://doi.org/10.3390/pharmaceutics18030367) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Vong_2021_All_cause_mortality_survival](drugs/drug_tafamidis/pd_Vong_2021_All_cause_mortality_survival.md) | All-cause mortality (survival) ← tafamidis · time-to-event model | — | Vong C et al., Modeling of Survival and Frequency of C…, American journal of cardiov… (2021) | [10.1007/s40256-021-00464-y](https://doi.org/10.1007/s40256-021-00464-y) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Vong_2021_Cardiovascular_related_hospitalization](drugs/drug_tafamidis/pd_Vong_2021_Cardiovascular_related_hospitalization.md) | Cardiovascular-related hospitalization ← tafamidis · time-to-event model | — | Vong C et al., Modeling of Survival and Frequency of C…, American journal of cardiov… (2021) | [10.1007/s40256-021-00464-y](https://doi.org/10.1007/s40256-021-00464-y) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Tess_2023_6MWT](drugs/drug_tafamidis/pd_Tess_2023_6MWT.md) | rate of change in six-minute walk test disease progression measure ← TTR stabilisation (tafamidis-bound TTR tetramer) · disease-progression model | — | Tess DA et al., Relationship of binding-site occupancy,…, Amyloid : the international… (2023) | [10.1080/13506129.2022.2145876](https://doi.org/10.1080/13506129.2022.2145876) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Tess_2023_KCCQ_OS](drugs/drug_tafamidis/pd_Tess_2023_KCCQ_OS.md) | rate of change in KCCQ-OS disease progression measure ← TTR stabilisation (tafamidis-bound TTR tetramer) · disease-progression model | — | Tess DA et al., Relationship of binding-site occupancy,…, Amyloid : the international… (2023) | [10.1080/13506129.2022.2145876](https://doi.org/10.1080/13506129.2022.2145876) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Tess_2023_NT_proBNP](drugs/drug_tafamidis/pd_Tess_2023_NT_proBNP.md) | rate of change in NT-proBNP disease progression measure ← TTR stabilisation (tafamidis-bound TTR tetramer) · disease-progression model | — | Tess DA et al., Relationship of binding-site occupancy,…, Amyloid : the international… (2023) | [10.1080/13506129.2022.2145876](https://doi.org/10.1080/13506129.2022.2145876) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **TTR** | `Q321` · EC50 | target | [Judge_2026](drugs/drug_tafamidis/pgx_Judge_2026_TTR_Q321.md) | Judge DP et al., Differential Transthyretin Stabilizatio…, JACC. CardioOncology (2026) | [10.1016/j.jaccao.2026.04.006](https://doi.org/10.1016/j.jaccao.2026.04.006) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 04:59 | 13:55 | 0/3/1 | 2/0/1 | 0/0/1 | 511,337/31,208 | ollama / glm-5.3-flash | 27 | 10/11 | 27/0 | 0 |

## Coverage

- **PubMed hits:** 57 matched, 50 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 4  ·  extracted 0  ·  needs_review 1  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Huh_2021.pdf` | Huh Y et al., Population pharmacokinetic modelling an…, British journal of clinical… (2021) | popPK | 10 | [10.1111/bcp.14773](https://doi.org/10.1111/bcp.14773) | [33586186](https://pubmed.ncbi.nlm.nih.gov/33586186) | A population PK model of tafamidis is clearly the subject, but the abstract only gives covariate effect percentages; the actual CL/V/Q parameter values are not shown in the provided evidence. |
| `Tess_2023.pdf` | Tess DA et al., Relationship of binding-site occupancy,…, Amyloid : the international… (2023) | popPK | 7 | [10.1080/13506129.2022.2145876](https://doi.org/10.1080/13506129.2022.2145876) | [36399070](https://pubmed.ncbi.nlm.nih.gov/36399070) | Population PK-PD modelling of tafamidis in ATTR-CM patients, but the evidence shows only PD effect percentages, not numeric PK parameters (CL/V), which likely reside in supplementary material. |

<sub>queue written 2026-10-07T04:51:39.378880+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Amass_2018 | irrelevant | 0 | 0 | This is a disease-progression (MMRM) efficacy analysis of neurologic scores, not a pharmacokinetic study; no CL, V, ka, half-life, or PK model parameters for tafamidis are reported. |
| PGx | Ando_2016 | not_relevant | 3 | 0 | Study compares Val30Met vs non-Val30Met genotypes only for efficacy/safety outcomes, not for any PK or PD parameter of tafamidis. |
| popPK | Conceição_2018 | irrelevant | 0 | 0 | Clinical outcomes study of tafamidis efficacy with no pharmacokinetic parameters reported. |
| popPK | Fontana_2026 | irrelevant | 0 | 0 | This is a PK/PD study of vutrisiran (TTR knockdown), not tafamidis; tafamidis appears only as a concomitant-therapy subgroup with no tafamidis PK parameters reported. |
| PGx | Fontana_2026 | not_relevant | 2 | 3 | The paper examines vutrisiran (not tafamidis) TTR knockdown; TTR genotype was only a subgroup covariate with no meaningful effect reported, and tafamidis use was merely a baseline characteristic, not a pharmacogenomic effect on tafamidis PK/PD. |
| PGx | Fontana_2026_2 | not_relevant | 0 | 0 | Paper reports coramitug trial results in ATTR-CM; tafamidis is only background therapy with no gene variant effect on its PK/PD. |
| popPK | Gundapaneni_2018 | irrelevant | 0 | 0 | This is a clinical efficacy (NIS-LL neurological progression) post hoc analysis with no PK parameters for tafamidis. |
| popPK | Gómez-Perales_2021 | irrelevant | 0 | 0 | no_text gate: only 59 chars of text extracted (&lt; 400) |
| popPK | Gómez_2025 | irrelevant | 0 | 0 | This is a transcriptomic study of cutaneous leishmaniasis treatment with meglumine antimoniate; tafamidis is not mentioned and no PK parameters for it appear. |
| popPK | Huh_2021 | relevant | 10 | 3 | A population PK model of tafamidis is clearly the subject, but the abstract only gives covariate effect percentages; the actual CL/V/Q parameter values are not shown in the provided evidence. |
| PGx | Ji_2025 | not_relevant | 2 | 3 | In vitro drug–TTR binding comparison; T119M variant mentioned only as design rationale, no genotype effect on tafamidis PK/PD parameters reported. |
| popPK | Kittrell_2020 | irrelevant | 0 | 0 | This is a population PK study of flunixin meglumine in piglets, not tafamidis; tafamidis is not mentioned at all. |
| PGx | Laird_2020 | not_relevant | 2 | 3 | Case report of tafamidis–statin–amiodarone DDI via BCRP inhibition; no gene variant/genotype effect on tafamidis PK/PD parameters reported. |
| popPK | Liu_2026 | irrelevant | 1 | 1 | This is a PET tracer kinetic imaging study; tafamidis is only the treatment intervention, and no tafamidis PK parameters (CL, V, ka, half-life) are reported. |
| popPK | Lomoio_2025 | irrelevant | 0 | 0 | In silico structural/docking study of TTR variants; tafamidis is only a docked ligand, no PK parameters (CL, V, ka, half-life, population-PK model) reported. |
| popPK | Madelain_2017 | irrelevant | 0 | 0 | The paper models favipiravir PK in cynomolgus macaques; tafamidis is not the subject drug and no tafamidis parameters appear. |
| PGx | Merlini_2013 | not_relevant | 5 | 5 | Reports tafamidis PD (TTR stabilization) across various TTR genotypes but does not compare pharmacodynamic effects by genotype/phenotype; no genotype-stratified effect estimates. |
| popPK | Parkinson_2013 | irrelevant | 0 | 0 | This is a PKPD model of MRK-560 and amyloid-beta in Tg2576 mice; tafamidis is not mentioned at all. |
| popPK | Santos_2026 | irrelevant | 0 | 0 | This is an in silico ADMET/docking study of clomiphene, not tafamidis; no PK disposition parameters for tafamidis appear. |
| popPK | Scala_2018 | irrelevant | 0 | 0 | This is a population PK study of gadoterate meglumine (a gadolinium contrast agent), not tafamidis; tafamidis is not mentioned at all. |
| PGx | Sha_2024 | not_relevant | 0 | 0 |  |
| popPK | Tess_2023 | relevant | 7 | 3 | Population PK-PD modelling of tafamidis in ATTR-CM patients, but the evidence shows only PD effect percentages, not numeric PK parameters (CL/V), which likely reside in supplementary material. |
| popPK | Testani_2026 | irrelevant | 0 | 0 | Study of acoramidis effects on kidney function; tafamidis is only a co-administered drop-in comparator with no PK parameters (CL, V, half-life, or PK model) reported for it. |
| PGx | Vong_2021 | not_relevant | 3 | 5 | TTR genotype (wild-type vs variant) is a disease-genotype prognostic factor for clinical outcomes (mortality/hospitalization hazard), not a pharmacogenomic effect on tafamidis PK or a drug-specific PD parameter. |
| popPK | Wang_2025 | irrelevant | 0 | 0 | This is a review of silibinin combined with EGFR-TKIs in NSCLC; tafamidis is not the subject drug and no PK parameters for it appear. |
| PGx | Witteles_2024 | not_relevant | 0 | 0 | Paper examines AF/AFL as prognostic factor for mortality and tafamidis efficacy; no gene variant effect on PK/PD parameters reported. |
| PGx | Xiao_2026 | not_relevant | 2 | 3 | Reports tafamidis clinical efficacy in a TTR p.Val40Ile genotype case, but no PK/PD parameter (e.g., AUC, clearance, response biomarker effect size) is quantified by genotype. |
| popPK | unknown_2017 | irrelevant | 0 | 0 | no_text gate: only 20 chars of text extracted (&lt; 400) |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 04:51 UTC</sub>
