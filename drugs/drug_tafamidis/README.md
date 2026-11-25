<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07X&quot;,&quot;href&quot;:&quot;atc/N07X.md&quot;},{&quot;label&quot;:&quot;tafamidis&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tafamidis_Parkinson2013_reference&quot;,&quot;label&quot;:&quot;Parkinson_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tafamidis/Tafamidis_Parkinson2013_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# tafamidis

- **generic name:** tafamidis
- **ATC codes:** `N07XX08`
- **DrugBank:** [DB11644](https://go.drugbank.com/drugs/DB11644) · **PubChem:** [CID 11001318](https://pubchem.ncbi.nlm.nih.gov/compound/11001318)
- **molar mass:** 308.116 g/mol (C14H7Cl2NO3) — DrugBank
- **groups:** approved, investigational

## About

Tafamidis is a medication used to delay the progression of certain forms of transthyretin amyloidosis in adults. It is given orally in capsule forms. The drug is approved for use and has authorized products in the European Union.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q519447](https://www.wikidata.org/wiki/Q519447), [Wikipedia](https://en.wikipedia.org/wiki/Tafamidis?oldid=1385040657) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| tafamidis | parent | 308.116 | C14H7Cl2NO3 | DrugBank | [11001318](https://pubchem.ncbi.nlm.nih.gov/compound/11001318) | Lisowski_2026, Ulaszek_2026 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Lisowski_2026_reference](drugs/drug_tafamidis/Tafamidis_Lisowski2026_reference.md) | — | 1-compartment (no model) | 4 | Lisowski B et al., Phenomenological model of transthyretin…, Scientific reports (2026) | [10.1038/s41598-026-35000-y](https://doi.org/10.1038/s41598-026-35000-y) |
| <span class="pk-rf" hidden data-species="mouse" data-age="unknown" data-status="Rejected" data-sim="yes"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: paper_subject_is_other_drug</sub> | [Parkinson_2013_reference](drugs/drug_tafamidis/Tafamidis_Parkinson2013_reference.md) | ▶ model + simulator | 2-compartment, oral | 5 | Parkinson J et al., Modeling of age-dependent amyloid accum…, Pharmacology research & per… (2013) | [10.1002/prp2.12](https://doi.org/10.1002/prp2.12) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub> | [Scala_2018_reference](drugs/drug_tafamidis/Tafamidis_Scala2018_reference.md) | — | 2-compartment (no model) | 3 | Scala M et al., A Pharmacokinetics, Efficacy, and Safet…, Investigative radiology (2018) | [10.1097/rli.0000000000000412](https://doi.org/10.1097/rli.0000000000000412) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Ulaszek_2026_dosing_regimen](drugs/drug_tafamidis/Tafamidis_Ulaszek2026_dosing_regimen.md) | — | general linear (no model) | 0 | Ulaszek S et al., Exploring Tafamidis Effects Through PBP…, Pharmaceutics (2026) | [10.3390/pharmaceutics18030367](https://doi.org/10.3390/pharmaceutics18030367) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [↳ value](drugs/drug_tafamidis/Tafamidis_Ulaszek2026_value.md) | — | general linear (no model) | 4 (+3 cov.) |  |  |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Sha_2024_TTR](drugs/drug_tafamidis/pd_Sha_2024_TTR.md) | TTR tetramer concentration biomarker turnover ← Tafamidis | — | Sha Q et al., Biochemical and biophysical properties…, ESC heart failure (2024) | [10.1002/ehf2.14543](https://doi.org/10.1002/ehf2.14543) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Ulaszek_2026_TTR](drugs/drug_tafamidis/pd_Ulaszek_2026_TTR.md) | Total transthyretin (TTR) concentration in plasma biomarker turnover ← tafamidis | — | Ulaszek S et al., Exploring Tafamidis Effects Through PBP…, Pharmaceutics (2026) | [10.3390/pharmaceutics18030367](https://doi.org/10.3390/pharmaceutics18030367) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Vong_2021_All_cause_mortality_survival](drugs/drug_tafamidis/pd_Vong_2021_All_cause_mortality_survival.md) | All-cause mortality (survival) ← tafamidis · time-to-event model | — | Vong C et al., Modeling of Survival and Frequency of C…, American journal of cardiov… (2021) | [10.1007/s40256-021-00464-y](https://doi.org/10.1007/s40256-021-00464-y) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Vong_2021_Cardiovascular_related_hospitalization](drugs/drug_tafamidis/pd_Vong_2021_Cardiovascular_related_hospitalization.md) | Cardiovascular-related hospitalization ← tafamidis · time-to-event model | — | Vong C et al., Modeling of Survival and Frequency of C…, American journal of cardiov… (2021) | [10.1007/s40256-021-00464-y](https://doi.org/10.1007/s40256-021-00464-y) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Lisowski_2026_kd](drugs/drug_tafamidis/pd_Lisowski_2026_kd.md) | transthyretin tetramer dissociation rate ← tafamidis · direct linear effect | — | Lisowski B et al., Phenomenological model of transthyretin…, Scientific reports (2026) | [10.1038/s41598-026-35000-y](https://doi.org/10.1038/s41598-026-35000-y) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **TTR** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Gundapaneni_2018](drugs/drug_tafamidis/pgx_Gundapaneni_2018_TTR_Q100.md) | Gundapaneni BK et al., Tafamidis delays neurological progressi…, European journal of neurolo… (2018) | [10.1111/ene.13510](https://doi.org/10.1111/ene.13510) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **TTR** | `Q321` · EC50 | target | [Judge_2026](drugs/drug_tafamidis/pgx_Judge_2026_TTR_Q321.md) | Judge DP et al., Differential Transthyretin Stabilizatio…, JACC. CardioOncology (2026) | [10.1016/j.jaccao.2026.04.006](https://doi.org/10.1016/j.jaccao.2026.04.006) |

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
| 2026-11-24 05:05 | 0:03 | 1/4/0 | 4/1/0 | 0/0/2 | 194/63 | einfracz / qwen3.8-27b | 27 | 13/14 | 27/0 | 0 |

## Coverage

- **PubMed hits:** 57 matched, 50 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 5  ·  extracted 0  ·  needs review 1  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agarwal_2024 | irrelevant | 1 | 0 | This is a systematic review of chemistry and bioanalysis methods, and no original quantitative PK parameter values (CL, V, etc.) are reported in the provided evidence. |
| PGx | Agarwal_2024 | not_relevant | 0 | 0 | The paper is a systematic review of chemistry and bio-analysis methods for tafamidis and does not report pharmacogenomic effects on PK or PD parameters. |
| popPK | Alossaimi_2025 | irrelevant | 0 | 0 | The study investigates in vitro DNA binding interactions (binding constants, thermodynamics) and does not report pharmacokinetic parameters like clearance or volume of distribution. |
| PGx | Alossaimi_2025 | not_relevant | 0 | 0 | The paper investigates the binding of tafamidis to DNA in vitro and does not report on gene variants or their effects on PK/PD parameters. |
| popPK | Amass_2018 | irrelevant | 0 | 0 | This is a disease-progression (MMRM) efficacy analysis of neurologic scores, not a pharmacokinetic study; no CL, V, ka, half-life, or PK model parameters for tafamidis are reported. |
| popPK | Ando_2016 | irrelevant | 0 | 0 | The paper reports clinical efficacy and safety outcomes (TTR stabilization, NIS-LL scores) rather than quantitative pharmacokinetic parameters. |
| PGx | Ando_2016 | not_relevant | 2 | 5 | The study describes clinical efficacy and safety in TTR-FAP patients but does not analyze how specific gene variants (like Val30Met vs non-Val30Met) alter the pharmacokinetic or pharmacodynamic profile of tafamidis. |
| popPK | Chen_2025 | irrelevant | 0 | 0 | The study is an in-vitro fragment-based drug discovery assay using tafamidis only as a positive control comparator for binding affinity, with no pharmacokinetic parameters reported. |
| PGx | Chen_2025 | not_relevant | 0 | 0 | The paper focuses on the in vitro development of a drug screening method and novel TTR stabilizers; it contains no study of genetic variants, pharmacogenomics, or in vivo PK/PD parameters for tafamidis. |
| popPK | Conceição_2018 | irrelevant | 0 | 0 | The study evaluates clinical disease progression and efficacy (neurophysiological scores) rather than pharmacokinetic parameters for tafamidis. |
| PGx | Conceição_2018 | not_relevant | 0 | 0 | The paper evaluates the clinical efficacy of tafamidis in patients with hereditary transthyretin amyloidosis but does not report any pharmacogenomic analysis or genotype-based changes in pharmacokinetic or pharmacodynamic parameters. |
| popPK | Cotrina_2020 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on TTR protein stabilization and binding affinity (Kd), not a pharmacokinetic study reporting disposition parameters for tafamidis. |
| PGx | Cotrina_2020 | not_relevant | 0 | 0 | The paper focuses on in vitro characterization of a new TTR stabilizer (benzbromarone) and does not report pharmacogenomic effects on tafamidis PK/PD. |
| popPK | Fontana_2026 | irrelevant | 0 | 0 | This is a PK/PD study of vutrisiran (TTR knockdown), not tafamidis; tafamidis appears only as a concomitant-therapy subgroup with no tafamidis PK parameters reported. |
| PGx | Fontana_2026 | not_relevant | 2 | 3 | The paper examines vutrisiran (not tafamidis) TTR knockdown; TTR genotype was only a subgroup covariate with no meaningful effect reported, and tafamidis use was merely a baseline characteristic, not a pharmacogenomic effect on tafamidis PK/PD. |
| PGx | Fontana_2026_2 | not_relevant | 0 | 0 | Paper reports coramitug trial results in ATTR-CM; tafamidis is only background therapy with no gene variant effect on its PK/PD. |
| popPK | Gundapaneni_2018 | irrelevant | 0 | 0 | The paper reports neurological efficacy outcomes (NIS-LL scores) in humans, not pharmacokinetic parameters for tafamidis. |
| popPK | Gómez-Perales_2021 | irrelevant | 0 | 0 | no_text gate: only 59 chars of text extracted (&lt; 400) |
| PGx | Gómez-Perales_2021 | not_relevant | 0 | 0 | The paper discusses iodine allergy in nuclear medicine and does not mention tafamidis or pharmacogenomics. |
| popPK | Gómez_2025 | irrelevant | 0 | 0 | The paper focuses on transcriptomic biomarkers for leishmaniasis treatment and does not report pharmacokinetic parameters for tafamidis. |
| PGx | Gómez_2025 | not_relevant | 0 | 0 | The paper is about cutaneous leishmaniasis and treatment failure biosignatures, not tafamidis pharmacogenomics. |
| popPK | Huh_2021 | relevant | 10 | 2 | The paper describes a population PK model for tafamidis in humans with quantitative covariate effects, but the central parameter estimates (e.g., base CL, V) are not explicitly listed in the provided text. |
| PGx | Huh_2021 | not_relevant | 0 | 0 | The study analyzes population PK covariates such as body weight, age, and hepatic impairment, but does not report any pharmacogenomic effects (gene variants) on PK parameters. |
| popPK | Ji_2025 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic comparison of TTR binding affinity and stabilization kinetics (SPR/MST), not a pharmacokinetic study of tafamidis disposition (CL, V, etc.). |
| PGx | Ji_2025 | not_relevant | 0 | 0 | The paper compares the in vitro binding affinities and stabilization kinetics of two drugs (acoramidis and tafamidis) on purified TTR, but it does not report how a patient's genotype or gene variant alters the PK or PD of tafamidis. |
| popPK | Judge_2026 | irrelevant | 0 | 0 | The study evaluates pharmacodynamic TTR stabilization (Western blot, fluorescent probe exclusion, sTTR levels) rather than quantitative pharmacokinetic disposition parameters (CL, V, ka) for tafamidis. |
| popPK | Kim_2016 | irrelevant | 0 | 0 | The study focuses on the design and evaluation of new quinoline derivatives, with tafamidis used only as a reference comparator for potency, and no quantitative PK parameters for tafamidis are reported. |
| PGx | Kim_2016 | not_relevant | 0 | 0 | The paper studies the effect of TTR gene variants on the potency of a novel quinoline compound, not how gene variants affect the PK or PD parameters of tafamidis. |
| popPK | Kittrell_2020 | irrelevant | 0 | 0 | This is a population PK study of flunixin meglumine in piglets, not tafamidis; tafamidis is not mentioned at all. |
| popPK | Laird_2020 | irrelevant | 1 | 1 | This is a clinical case report regarding rhabdomyolysis and drug interactions, lacking original quantitative pharmacokinetic disposition parameters (CL, V, etc.) for tafamidis. |
| PGx | Laird_2020 | not_relevant | 0 | 0 | The paper describes a case of drug-drug interaction involving protein transporters and enzymes, not a genetic variant (pharmacogenomic effect) influencing PK or PD. |
| popPK | Lin_2020 | irrelevant | 0 | 0 | The paper focuses on the safety and efficacy of patisiran and only mentions transthyretin stabilizers (like tafamidis) as concomitant therapies without reporting any pharmacokinetic parameters for tafamidis. |
| PGx | Lin_2020 | not_relevant | 0 | 0 | The paper focuses on patisiran and clinical outcomes with stabilizers, not tafamidis pharmacogenomics. |
| PGx | Lisowski_2026 | not_relevant | 0 | 0 | The paper presents a phenomenological model of TTR stabilization using population-level or single-subject data without analyzing any gene variants, genotypes, or pharmacogenomic effects on PK/PD. |
| popPK | Liu_2026 | irrelevant | 0 | 0 | The study investigates pharmacokinetics of the PET tracer 18F-flutemetamol to measure amyloid burden in patients treated with tafamidis, rather than reporting PK parameters for tafamidis itself. |
| PGx | Liu_2026 | not_relevant | 0 | 0 | The paper evaluates the effect of tafamidis on PET imaging parameters in ATTR-CA patients but does not report any pharmacogenomic effects (gene variants influencing PK/PD). |
| PGx | Lockwood_2020 | not_relevant | 0 | 0 | The study is a bioequivalence trial comparing two formulations of tafamidis in healthy volunteers and does not investigate the impact of genetic variants on pharmacokinetics or pharmacodynamics. |
| popPK | Lomoio_2025 | irrelevant | 0 | 0 | The paper is an in silico structural and docking study of TTR variants and drug binding, not a pharmacokinetic study reporting disposition parameters like CL or V. |
| PGx | Lomoio_2025 | not_relevant | 4 | 5 | The paper reports in silico binding affinities (structural/PD proxy) for TTR variants but does not report human PK parameters or clinical PD outcomes for tafamidis. |
| popPK | Madelain_2017 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for favipiravir, not tafamidis. |
| PGx | Madelain_2017 | not_relevant | 0 | 0 | The paper investigates favipiravir pharmacokinetics in non-human primates, not tafamidis pharmacogenomics. |
| PGx | Merlini_2013 | not_relevant | 5 | 5 | Reports tafamidis PD (TTR stabilization) across various TTR genotypes but does not compare pharmacodynamic effects by genotype/phenotype; no genotype-stratified effect estimates. |
| popPK | Parkinson_2013 | irrelevant | 0 | 0 | This is a PKPD model of MRK-560 and amyloid-beta in Tg2576 mice; tafamidis is not mentioned at all. |
| popPK | Santos_2026 | irrelevant | 0 | 0 | This is an in silico ADMET/docking study of clomiphene, not tafamidis; no PK disposition parameters for tafamidis appear. |
| popPK | Scala_2018 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for gadoterate meglumine (a gadolinium-based MRI contrast agent), not tafamidis. |
| PGx | Scala_2018 | not_relevant | 0 | 0 | The paper studies the pharmacokinetics of gadoterate meglumine in pediatric patients and contains no data regarding tafamidis or any pharmacogenomic variants. |
| popPK | Sha_2024 | irrelevant | 0 | 0 | The study investigates the biochemical and biophysical properties of the TTR A81V mutation (protein stability and fibril formation) and tafamidis acts only as an in-vitro inhibitor, with no human pharmacokinetic parameters (CL, Vd, etc.) reported. |
| PGx | Sha_2024 | not_relevant | 1 | 1 | The paper reports in vitro biophysical stability of the TTR variant and serum TTR levels, but does not report a pharmacokinetic or pharmacodynamic effect of tafamidis on the patient's clinical outcomes or standard PK parameters. |
| popPK | Tess_2023 | relevant | 8 | 0 | The paper explicitly states the development of population pharmacokinetic-pharmacodynamic models for tafamidis, but no numeric PK parameter values (e.g., clearance, volume) are present in the provided text. |
| PGx | Tess_2023 | not_relevant | 0 | 0 | The paper describes population PK/PD modeling of tafamidis and TTR stabilisation but does not investigate or report the impact of any gene variant or genotype on these parameters. |
| popPK | Testani_2026 | irrelevant | 0 | 0 | The study focuses on the effects of acoramidis on kidney function, with tafamidis only mentioned as a co-administered drug (drop-in) without any pharmacokinetic parameter reporting. |
| PGx | Testani_2026 | not_relevant | 0 | 0 | The paper investigates the effects of acoramidis on kidney function and does not report any pharmacogenomic data (gene variants) influencing the PK or PD of tafamidis. |
| PGx | Vong_2021 | not_relevant | 3 | 5 | TTR genotype (wild-type vs variant) is a disease-genotype prognostic factor for clinical outcomes (mortality/hospitalization hazard), not a pharmacogenomic effect on tafamidis PK or a drug-specific PD parameter. |
| popPK | Waddington_2015 | irrelevant | 1 | 0 | The paper is a clinical review focused on efficacy (TTR stabilization, neuropathy scores) and safety, containing no quantitative pharmacokinetic parameters (CL, V, t1/2) for tafamidis. |
| PGx | Waddington_2015 | not_relevant | 0 | 0 | The paper is a general review of tafamidis efficacy and safety in ATTR, lacking any pharmacogenomic analysis or data on how genetic variants influence drug PK/PD. |
| popPK | Wang_2024 | irrelevant | 0 | 0 | The study focuses on clinical profiles and molecular stability of the A97S variant in TTR, with tafamidis mentioned only qualitatively regarding TTR tetramer concentration, without providing any quantitative pharmacokinetic parameters. |
| PGx | Wang_2024 | not_relevant | 4 | 5 | The paper compares TTR levels between tafamidis-treated and untreated/patient groups rather than stratifying PK/PD parameters by specific gene variants (pharmacogenomics) within a treated population. |
| popPK | Wang_2025 | irrelevant | 0 | 0 | This is a review of silibinin combined with EGFR-TKIs in NSCLC; tafamidis is not the subject drug and no PK parameters for it appear. |
| popPK | Witteles_2024 | irrelevant | 0 | 0 | The paper is a post-hoc prognostic analysis of a clinical trial focusing on mortality and atrial fibrillation, and contains no pharmacokinetic parameters (CL, V, ka, etc.) for tafamidis. |
| PGx | Witteles_2024 | not_relevant | 0 | 0 | The paper examines the impact of atrial fibrillation and TTR genotype on mortality and other clinical outcomes in ATTR-CM patients, but does not report how a gene variant changes a PK or PD parameter of tafamidis. |
| PGx | Xiao_2026 | not_relevant | 2 | 3 | Reports tafamidis clinical efficacy in a TTR p.Val40Ile genotype case, but no PK/PD parameter (e.g., AUC, clearance, response biomarker effect size) is quantified by genotype. |
| popPK | unknown_2017 | irrelevant | 0 | 0 | no_text gate: only 20 chars of text extracted (&lt; 400) |
| PGx | unknown_2017 | not_relevant | 0 | 0 | The provided text is only a title ('2017 Annual Meetings') and contains no information regarding tafamidis, gene variants, or pharmacokinetic/pharmacodynamic parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btafamidis%5D&body=Drug%3A%20tafamidis%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tafamidis/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 17:28 UTC</sub>
