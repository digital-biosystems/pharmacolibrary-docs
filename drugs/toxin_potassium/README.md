<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Potassium&quot;}]"></div>

# Potassium

- **generic name:** Potassium
- **T3DB:** [T3D4344](http://www.t3db.ca/toxins/T3D4344) · **DrugBank:** [DB01345](https://go.drugbank.com/drugs/DB01345) · **PubChem:** none
- **groups:** approved

## About

Potassium is an essential electrolyte. Potassium balance is crucial for regulating the excitability of nerves and muscles and so critical for regulating contractility of cardiac muscle. Although the most important changes seen in the presence of deranged potassium are cardiac, smooth muscle is also affected with increasing muscle weakness, a feature of both hyperkalaemia and hypokalaemia. …

- **Category:** Industrial/Workplace Toxin, Food Toxin, Natural Toxin, Animal Toxin
- **Sources and uses:** This is an endogenously produced metabolite found in the human body. It is used in metabolic reactions, catabolic reactions or waste generation.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4344">T3DB T3D4344</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 7440-09-7 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:26216">ChEBI 26216</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| potassium | parent | 39.098 | K | PubChem | [5462222](https://pubchem.ncbi.nlm.nih.gov/compound/5462222) | Penland_2024 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no kinetic quantity — no half-life, rate constant, volume or clearance (exposur…</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Penland_2024_base](drugs/toxin_potassium/Potassium_Penland2024_base.md) | — | general linear (no model) | 1 | Penland RC et al., Population Pharmacodynamic Dose-Respons…, Clinical pharmacokinetics (2024) | [10.1007/s40262-024-01360-9](https://doi.org/10.1007/s40262-024-01360-9) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no kinetic quantity — no half-life, rate constant, volume or clearance (exposur…</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [↳ full](drugs/toxin_potassium/Potassium_Penland2024_full.md) | — | general linear (no model) | 1 (+4 cov.) |  |  |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.">Not simulated</span> <span class="pk-badge pk-badge--neutral" title="Adverse-reaction risk allele; no quantitative PK/PD parameter effect.">safety allele</span> | **CYP2C9** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Geng_2024](drugs/toxin_potassium/pgx_Geng_2024_CYP2C9_safety.md) | Geng K et al., A physiologically-based pharmacokinetic…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13123](https://doi.org/10.1002/psp4.13123) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **NAT2** | `Q27` · CL/F | formation | [Chen_2022](drugs/toxin_potassium/pgx_Chen_2022_NAT2_Q27.md) | Chen B et al., Population Pharmacokinetics and Pharmac…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.932686](https://doi.org/10.3389/fphar.2022.932686) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **VKORC1** | `Q322` · IC50 | target | [Geng_2024](drugs/toxin_potassium/pgx_Geng_2024_VKORC1_Q322.md) | Geng K et al., A physiologically-based pharmacokinetic…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13123](https://doi.org/10.1002/psp4.13123) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **ABCB1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Sun_2017](drugs/toxin_potassium/pgx_Sun_2017_ABCB1_Q100.md) | Sun LN et al., Impact of Gastric H+/K+-ATPase rs273374…, Frontiers in pharmacology (2017) | [10.3389/fphar.2017.00670](https://doi.org/10.3389/fphar.2017.00670) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **ATP4A** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Sun_2017](drugs/toxin_potassium/pgx_Sun_2017_ATP4A_Q100.md) | Sun LN et al., Impact of Gastric H+/K+-ATPase rs273374…, Frontiers in pharmacology (2017) | [10.3389/fphar.2017.00670](https://doi.org/10.3389/fphar.2017.00670) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP2C19** | `Q27` · CL/F | metabolism | [Sun_2017](drugs/toxin_potassium/pgx_Sun_2017_CYP2C19_Q27.md) | Sun LN et al., Impact of Gastric H+/K+-ATPase rs273374…, Frontiers in pharmacology (2017) | [10.3389/fphar.2017.00670](https://doi.org/10.3389/fphar.2017.00670) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP2C19** | `Q27` · CL/F | formation | [Yano_2019](drugs/toxin_potassium/pgx_Yano_2019_CYP2C19_Q27.md) | Yano I, [Clinical Pharmacometrics for Rational…, Yakugaku zasshi : Journal o… (2019) | [10.1248/yakushi.19-00124](https://doi.org/10.1248/yakushi.19-00124) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP3A5** | `Q27` · CL/F | metabolism | [Yano_2019](drugs/toxin_potassium/pgx_Yano_2019_CYP3A5_Q27.md) | Yano I, [Clinical Pharmacometrics for Rational…, Yakugaku zasshi : Journal o… (2019) | [10.1248/yakushi.19-00124](https://doi.org/10.1248/yakushi.19-00124) |
| <span class="pk-badge pk-badge--red" title="not accepted.">rejected</span> | **CYP2D6** | `Q22` · CL | formation | [Yang_2024](drugs/toxin_potassium/pgx_Yang_2024_CYP2D6_Q22.md) | Yang Y et al., Physiologically based pharmacokinetic m…, Frontiers in pharmacology (2024) | [10.3389/fphar.2024.1342515](https://doi.org/10.3389/fphar.2024.1342515) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=potassium).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` transport | PGx paper |
| distribution | blood-brain barrier | `ABCB1` transport | PGx paper |
| distribution | placenta | `ABCB1` transport | PGx paper |
| distribution | testis | `ABCB1` transport | PGx paper |
| metabolism | brain | `CYP2D6` formation | PGx paper |
| metabolism | kidney | `CYP3A5` metabolism | PGx paper |
| metabolism | liver | `CYP2C19` metabolism, `CYP2C9` safety_allele, `CYP2D6` formation, `CYP3A5` metabolism, `NAT2` formation | PGx paper |
| metabolism | small intestine | `CYP3A5` metabolism, `NAT2` formation | PGx paper |
| excretion | kidney | `ABCB1` transport | PGx paper |
| excretion | liver | `ABCB1` transport | PGx paper |
| excretion | skin | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ATP1A1 (unknown), ATP4A (target), VKORC1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-11 07:22 | 1:21:27 | 0/2/0 | 0/0/0 | 1/1/7 | 1,920,606/88,223 | ollama / glm-5.3-flash | 109 | 14/82 | 109/0 | 0 |

## Coverage

- **PubMed hits:** 15207 matched, 311 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdullah_2022 | irrelevant | 0 | 0 | This is an epidemiological exposure-response study of brevetoxins from K. brevis blooms with no kinetic parameters for potassium; "K." refers to Karenia, not potassium. |
| PGx | Ahmed_2022 | not_relevant | 0 | 0 | Paper compares UGT enzyme kinetics across tissues, not pharmacogenomic variants affecting PK/PD parameters. |
| PGx | Akarid_1995 | not_relevant | 0 | 0 | Paper studies nitric oxide effects on retroviral replication; no gene variant-drug PK/PD relationship. |
| popPK | Akkaş_2025 | irrelevant | 0 | 0 | Potassium appears only as a radionuclide concentration in granite building materials, not as a substance with any toxicokinetic parameter. |
| popPK | Alghamdi_2026 | irrelevant | 0 | 0 | This is an activated-carbon adsorption/remediation study of pharmaceuticals; potassium appears only as a minor elemental component of the carbon (4.32 wt% by EDX) and as the reagent KNO3, with no kinetic parameters for potassium as a subject substance. |
| popPK | Antle_2024 | irrelevant | 0 | 0 | The paper concerns PFAS partition coefficients computationally, not potassium; no potassium kinetic parameters. |
| popPK | Apell_1987 | irrelevant | 0 | 0 | Potassium is used only to create a diffusion potential with valinomycin as an analytical/experimental tool in a membrane-dye study; no toxicokinetic parameter for potassium itself is reported, and no numeric potassium kinetic values appear. |
| popPK | Araújo_2020 | irrelevant | 0 | 0 | Potassium appears only as KCl used to induce osmotic stress in fungal germination assays; no mammalian or human toxicokinetic parameters are reported. |
| popPK | Arevalo_2026 | irrelevant | 0 | 0 | This is a scoping review of ENA-001 (a BK potassium-channel blocker drug), so potassium appears only as the channel target, not as the subject substance with kinetic parameters of its own; the reported half-lives and concentrations belong to ENA-001. |
| PGx | Argueta_2022 | not_relevant | 4 | 1 | Abstract only; no pharmacokinetic/pharmacodynamic parameter values or fitted effect sizes reported. |
| PGx | Barbetta_2025 | not_relevant | 0 | 0 | Reports pesticide (penconazole) inhibition of CYP450 enzymes, not a genetic variant effect on potassium PK/PD. |
| popPK | Barros-Rodríguez_2024 | irrelevant | 0 | 0 | Paper on Bacillus plant biofertilizers; potassium appears only as an analytical reagent (KCl, KH2PO4, potassium ferricyanide) and plant nutrient solubilization, with no kinetic parameters for potassium. |
| popPK | Basu_2001 | irrelevant | 0 | 0 | No potassium kinetic parameters; the paper is about PAH mixture EROD induction in trout with no potassium data. |
| PGx | Bharti_2021 | not_relevant | 1 | 3 | Population-level allele frequency cataloging of pharmacogenes with no PK/PD effect estimates on any drug parameter. |
| PGx | Bloch_1989 | not_relevant | 0 | 0 | Paper describes E. coli sodA gene deletion and virulence in rats, with no drug, gene variant effect on PK/PD parameters, or pharmacogenomic content. |
| popPK | Bordeau_2022 | irrelevant | 0 | 0 | No potassium kinetic parameters anywhere; the paper models gadobutrol/cetuximab (mAb) tumor disposition in mice, not potassium toxicokinetics. |
| popPK | Briki_2026 | irrelevant | 0 | 0 | The paper is a population PK study of 5-fluorouracil in cancer patients; potassium does not appear as the subject substance, and all kinetic parameters (CL, Vmax, Km, Q, AUC) belong to 5-FU. |
| popPK | Brockway_2018 | irrelevant | 0 | 0 | The half-lives reported belong to dofetilide, quinidine, ranolazine and verapamil; potassium appears only as the hERG ion channel blocked, with no toxicokinetic parameters for potassium itself. |
| PGx | Brown_2022 | not_relevant | 0 | 0 |  |
| PGx | Bui_2024 | not_relevant | 0 | 0 | Reports drug-drug interactions with CYP inhibitors in rats, not gene/genotype-based effects. |
| PGx | Cacabelos_2020 | not_relevant | 0 | 0 | This is a PGx review of cholinesterase inhibitors in Alzheimer's disease with no pharmacokinetic or pharmacodynamic parameters of potassium. |
| popPK | Cao_2026 | irrelevant | 0 | 0 | All reported parameters (partition coefficients, kmet) belong to bongkrekic acid, not potassium; no numeric potassium values appear. |
| PGx | Cao_2026_2 | not_relevant | 1 | 0 | Study reports CYP3A-mediated metabolism and drug–drug interaction effects on zastaprazan PK, but no gene variant/genotype/phenotype effects on PK or PD parameters. |
| popPK | Cavaco_2014 | irrelevant | 0 | 0 | Epidemiological obesity study with no potassium kinetic parameters. |
| PGx | Chaloupka_1995 | not_relevant | 0 | 0 | Paper examines PAH mixture induction of Cyp1a gene expression; no gene variant effect on PK/PD parameter of potassium reported. |
| PGx | Chan_2018 | not_relevant | 0 | 0 | Study measures CYP3A4/CYP2B6 degradation rate constants via siRNA, not a pharmacogenomic variant effect on a drug's PK/PD parameter; no potassium drug involved. |
| PGx | Chanteux_2024 | not_relevant | 5 | 3 | Pharmacogenomics concerns padsevonil's CYP2C19-mediated clearance itself, not potassium PK/PD parameters. |
| popPK | Chavan_2023 | irrelevant | 0 | 0 | The subject substance is fosfomycin, not potassium; potassium does not appear as a study substance. |
| popPK | Chen_2020 | irrelevant | 0 | 0 | Substance is organophosphate flame retardants, not potassium; no potassium kinetic parameters reported. |
| popPK | Chen_2024 | irrelevant | 0 | 0 | The paper concerns PD-1/PD-L1 monoclonal antibodies, not potassium; potassium is entirely absent. |
| popPK | Chen_2024_2 | irrelevant | 0 | 0 | This is an epidemiological health-poverty survey with no potassium kinetic parameters of any kind; all numeric content concerns poverty indices and odds ratios. |
| popPK | Cheng_2025 | irrelevant | 0 | 0 | This is a dengue fever epidemiological prediction study involving meteorological factors; potassium is not mentioned at all, and no toxicokinetic parameters for any substance are reported — the "lag times" discussed are disease-incidence lags, not kinetic half-lives or rate constants. |
| PGx | Cheong_2022 | not_relevant | 0 | 0 | PBPK drug-drug-disease interaction study of rivaroxaban with kinase inhibitors; no gene variant/genotype effect on PK/PD parameters. |
| PGx | Ching_1995 | not_relevant | 0 | 0 | No gene variant/genotype effect on PK/PD; paper examines drug-drug inhibition of CYP2D6 by quinidine, not pharmacogenomics, and no potassium parameter. |
| popPK | Cho_2022 | irrelevant | 0 | 0 | The paper is a PBPK model of piroxicam; potassium does not appear as the subject substance and no potassium kinetic parameters are reported. |
| PGx | Chong_1989 | not_relevant | 0 | 0 | Paper concerns macrophage-induced DNA damage in tumor cells; no pharmacogenomic effects on PK/PD parameters of any drug. |
| popPK | Chow_1995 | irrelevant | 0 | 0 | Paper is about cloning the human secretin receptor; potassium appears only as a physiologic effect of secretin, with no kinetic parameters. |
| popPK | Cicchetti_2026 | irrelevant | 0 | 0 | This is a radiotherapy dose-response model for rectal tumor response, with no potassium toxicokinetic parameters of any kind; potassium does not appear as a subject substance. |
| PGx | Coates_2025 | not_relevant | 0 | 5 | The paper concerns UGT2B7 genetic variant effects on hydromorphone (not potassium) glucuronidation/kinetics, so no potassium PK/PD pharmacogenomic effect is reported. |
| popPK | Crawford_2011 | irrelevant | 0 | 0 | Paper concerns seed longevity in Banksia plants; no kinetic parameters for the substance potassium. |
| popPK | Cuello_2012 | irrelevant | 0 | 0 | The paper reports PBPK parameters (Vmax, Km, kGST, CL2) for bromochloromethane in rats, not for potassium; potassium appears nowhere as the subject substance. |
| popPK | Cui_2022 | irrelevant | 0 | 0 | This is a human epidemiological mortality study of vitamins (A, D, E, C, B12, B9) with no kinetic parameters for potassium; potassium is not even the subject. |
| PGx | Daly_2003 | not_relevant | 0 | 0 | Paper concerns CYP2C9 effects on warfarin dose/anticoagulant response and VKOR, not any pharmacokinetic or pharmacodynamic parameter of potassium. |
| PGx | Daly_2007 | not_relevant | 3 | 2 | General narrative on pharmacogenetics (warfarin dosing, CYPs) with no quantitative PK/PD effect on potassium or its drugs. |
| popPK | Darwish_2026 | irrelevant | 0 | 0 | The paper reports PK parameters for remlifanserin, not for potassium, which does not appear as the subject substance. |
| popPK | De_1995 | irrelevant | 0 | 0 | Paper is about the cDNA sequence and tissue distribution of human GABA transaminase, with no potassium kinetic parameters of any kind. |
| popPK | Del_2023 | irrelevant | 0 | 0 | No potassium kinetic parameters; hyperkalemia is only a clinical outcome rate with no uptake, elimination, or model parameters, and no numeric PK values in the evidence. |
| popPK | Deutsch-Wenzel_1983 | irrelevant | 0 | 0 | The paper is a rat lung carcinogenicity dose-response study of PAHs with no potassium kinetic parameters of any kind. |
| popPK | Diaz_2019 | irrelevant | 0 | 0 | An epidemiological exposure-response study of brevetoxin blooms with no potassium kinetic parameters of any kind. |
| popPK | Ding_2022 | irrelevant | 0 | 0 | This is an exposure/biomagnification study of PCBs and PBDEs in amphibians; potassium is not the subject substance and no kinetic parameters for potassium appear. |
| PGx | Dong_2022 | not_relevant | 3 | 3 | The paper reports CYP2C19 genotype effects on voriconazole exposure and venetoclax DDI fold-changes, but nowhere mentions potassium or any potassium-related PK/PD parameter. |
| PGx | Doohan_2021 | not_relevant | 3 | 3 | In vitro cannabinoid-CYP inhibition DDI study; no gene variant/genotype effect on PK/PD of a drug reported. |
| popPK | Duarte_2025 | irrelevant | 0 | 0 | The paper is about optimal experimental design for phase I efficacy-toxicity trials; no potassium parameters or kinetic data appear at all. |
| popPK | Edache_2026 | irrelevant | 0 | 0 | Computational docking/ADMET study of drug candidates against gastric H+/K+-ATPase; potassium appears only as an ion transported by the enzyme, with no potassium toxicokinetic parameters. |
| popPK | Eissing_2024 | irrelevant | 2 | 2 | Potassium is only a PD endpoint (serum concentrations) of finerenone exposure—no kinetic parameters (half-life, clearance, rate constants) for potassium itself are modeled or reported. |
| popPK | Eissing_2026 | irrelevant | 1 | 1 | The kinetic parameters (clearance 23.3 L/h, Vd 192.8 L, half-life 2–3 h) belong to finerenone, with potassium appearing only as a pharmacodynamic biomarker/outcome, not the subject substance of a kinetic model; detailed estimates are in supplementary tables anyway. |
| popPK | Elalem_2026 | irrelevant | 0 | 0 | The paper models DPP-IV inhibitors, not potassium; potassium appears nowhere in the evidence. |
| popPK | Elenjickal_2025 | irrelevant | 0 | 0 | This is a population PK study of canagliflozin, not potassium; potassium is not the subject substance. |
| popPK | Ellison_2020 | irrelevant | 0 | 0 | Paper reports partition and diffusion coefficients for 50 cosmetic compounds; potassium is not among the substances studied or mentioned. |
| popPK | Emond_2021 | irrelevant | 0 | 0 | The PBPK model and its parameters concern γ-HBCD, not potassium; potassium does not appear at all. |
| PGx | Eriksson_1986 | not_relevant | 2 | 3 | Rat line differences in neuronal enzyme activities after ethanol; no pharmacogenomic effect on PK/PD parameters of potassium reported. |
| popPK | Faquetti_2024 | irrelevant | 0 | 0 | The paper concerns baricitinib/tofacitinib PBPK modeling and off-target binding; potassium does not appear as a subject substance anywhere in the evidence. |
| PGx | Fawzy_2019 | not_relevant | 3 | 1 | Abstract only mentions pharmacogenomics as a future focus with no reported gene effects on PK/PD parameters; potassium is not addressed. |
| popPK | Feng_2016 | irrelevant | 0 | 0 | This is a review on renal transporter-mediated drug-drug interactions for various drugs, with no potassium kinetic parameters reported. |
| popPK | Fostvedt_2022 | irrelevant | 0 | 0 | The paper is a tumor growth inhibition / exposure-response model for dacomitinib in NSCLC patients; potassium is never the subject substance and no potassium kinetic parameters appear. |
| PGx | Gangl_2025 | not_relevant | 0 | 0 | Paper describes camizestrant PK via species ADME/PBPK modeling; no gene variant/genotype effect on any PK or PD parameter is reported. |
| popPK | Geng_2024 | irrelevant | 0 | 0 | The paper models S-warfarin (and its metabolites) kinetics; potassium is not the subject substance and no potassium kinetic parameters are reported. |
| popPK | Goulooze_2022 | irrelevant | 4 | 5 | Potassium is the PD biomarker, not the subject substance (finerenone is); only a turnover/Emax description exists, and the full parameter estimates (Table 1) plus covariate equations appear to live in tables/ESM not fully provided. |
| popPK | Gudi_1995 | irrelevant | 0 | 0 | Paper describes pyruvate dehydrogenase kinase gene family sequences and tissue mRNA distribution; potassium is not a subject substance and no kinetic parameters of potassium appear. |
| PGx | Gulseth_2009 | not_relevant | 0 | 0 | The paper discusses warfarin pharmacogenomics (CYP2C9, VKORC1) affecting warfarin clearance and sensitivity, with no mention of potassium PK/PD. |
| PGx | Gómez-Martín_2015 | not_relevant | 1 | 1 | Study reports only allele frequencies and genotype combinations with no measured effect on any pharmacokinetic or pharmacodynamic parameter (potassium or otherwise). |
| PGx | Hafner_2016 | not_relevant | 3 | 1 | This is a review of pharmacogenetic prescribing guidelines; potassium is not a drug and no fitted PK/PD effect sizes are reported. |
| popPK | Hasegawa_2014 | irrelevant | 0 | 0 | The paper concerns ONO-5334 PK/PD modeling; potassium is not the subject and no kinetic parameters for potassium appear in the evidence. |
| popPK | Hattori_1995 | irrelevant | 0 | 0 | The paper reports enzyme purification kinetics for PAF acetylhydrolase, not potassium toxicokinetic parameters. |
| PGx | Hirai_2019 | not_relevant | 3 | 3 | Review about warfarin (CYP4F2/CYP2C9/VKORC1) effects, not potassium; mentions PK/PD effects qualitatively without fitted numbers, and no potassium drug/gene data. |
| popPK | Hoagland_2014 | irrelevant | 0 | 0 | This is an epidemiological/exposure-response and cost study of brevetoxins with no kinetic parameters for potassium. |
| PGx | Hou_2024 | not_relevant | 0 | 0 | In vitro enzyme characterization and DDI prediction with no gene variant/genotype or pharmacogenomic effect on ciprofol PK/PD. |
| popPK | Hwang_2020 | irrelevant | 0 | 0 | The kinetic parameters are for DWP14012 (fexuprazan), not potassium; potassium appears only in its drug-class name. |
| PGx | Hügl_2023 | not_relevant | 0 | 0 | Paper discusses drug–drug interactions (rivaroxaban with amiodarone/dronedarone) via CYP3A4/P-gp inhibition; no gene variant/genotype/phenotype effects on PK or PD parameters. |
| popPK | Ide_2022 | irrelevant | 0 | 0 | The paper reports population PK parameters for elotuzumab (a monoclonal antibody drug), not potassium; potassium is not the subject substance anywhere in the data. |
| PGx | Imamura_1980 | not_relevant | 0 | 0 | Murine MHC alloantigen immunogenicity study with no drug, PK/PD parameters, or pharmacogenomic effects. |
| PGx | Imbrici_2016 | not_relevant | 2 | 2 | Review on ion channelopathies; mentions pharmacogenetic concepts but no gene variants altering PK/PD parameters of a potassium drug. |
| PGx | Izumi_1993 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype pharmacogenomic effects on potassium PK/PD parameters are reported. |
| popPK | Jairam_2024 | irrelevant | 0 | 0 | The paper reports PBPK parameters for protein therapeutics (IgG, Fab, Fc) in rabbits; potassium does not appear as the subject substance in any kinetic parameter. |
| popPK | Jeon_2026 | irrelevant | 0 | 0 | The paper reports carboplatin pharmacokinetic parameters; potassium does not appear as the subject substance anywhere in the evidence. |
| popPK | Jeon_2026_2 | irrelevant | 0 | 0 | This is a PK modeling methods paper about TMDD approximations for biologics (anti-PD-L1, anakinra, etc.), not potassium; potassium nowhere appears as a subject substance. |
| PGx | Johnson_2015 | not_relevant | 0 | 0 | Paper covers warfarin pharmacogenetics, not potassium PK/PD parameters, with no genotype–parameter effects reported. |
| PGx | Kamali_2010 | not_relevant | 6 | 3 | Narrative review qualitatively describes CYP2C9/VKORC1 effects on warfarin dose, no fitted effect sizes or potassium PK/PD parameters reported. |
| PGx | Kampouraki_2019 | not_relevant | 3 | 2 | Abstract-level review on warfarin/NOACs; no PK/PD parameter data for potassium-related drugs and no quantitative effect sizes. |
| popPK | Kanai_1993 | irrelevant | 0 | 0 | This is a review of cloned glutamate transporters; potassium appears only as a co-transported ion, with no kinetic parameters for potassium as a subject substance. |
| popPK | Kang_2021 | irrelevant | 0 | 0 | This paper is about botulinum neurotoxin A1, not potassium; potassium does not appear as the subject substance and no potassium kinetic parameters are reported. |
| popPK | Kang_2024 | irrelevant | 0 | 0 | This is a social-science study of academic performance in Chinese students; potassium does not appear as a study substance and no kinetic parameters are reported. |
| popPK | Karri_2016 | irrelevant | 0 | 0 | A review of heavy metal mixture mechanisms (Pb, Cd, As, MeHg) with potassium appearing only indirectly via Na+/K+-ATPase mention, no kinetic parameters for potassium and only a future aim of PBPK modeling. |
| popPK | Kawata_2024 | irrelevant | 0 | 0 | The paper's kinetic parameters (Kp, k, ke0) all belong to propofol, with potassium appearing only as the substance name "potassium" not at all — no potassium toxicokinetic data are present. |
| PGx | Kim_2019 | not_relevant | 0 | 0 | No pharmacogenomic effect on potassium or any gene-variant PK/PD relationship is reported. |
| popPK | Kim_2020 | irrelevant | 0 | 0 | The study measures sorption partition coefficients of hydrophobic organic chemicals in soil, with no potassium kinetic parameters at all. |
| popPK | Kir_2025 | irrelevant | 0 | 0 | The paper's kinetic parameters (clearance, bioavailability, partition coefficients) belong to atenolol and metoprolol, not potassium; potassium is not the subject substance. |
| popPK | Knaak_2012 | irrelevant | 0 | 0 | This is a review of pyrethroid PBPK/PD parameters; potassium appears only as an ion current in mode-of-action discussion, with no kinetic parameters for potassium as subject substance. |
| popPK | Korzekwa_2022 | irrelevant | 0 | 0 | This is a PBPK modeling methodology paper for 24 pharmaceutical drugs; potassium is not the subject substance and no kinetic parameters for potassium are reported. |
| PGx | Kováčik_2023 | not_relevant | 0 | 0 | Study of mercury toxicity and nitric oxide effects on potassium in lichens; no gene variant/genotype/pharmacogenomic effect on drug PK/PD is reported. |
| PGx | Kumar_2022 | not_relevant | 0 | 0 | Paper characterizes THC metabolism by CYP/UGT enzymes in extrahepatic tissues; no genetic variant/genotype effect on potassium or any PK parameter is reported. |
| popPK | Kuo_2022 | irrelevant | 0 | 0 | The paper develops a method for biotransformation rate constants (kM) of organic compounds in biota; potassium does not appear as the subject substance. |
| popPK | Kuo_2024 | irrelevant | 0 | 0 | Paper models bioaccumulation of organic chemicals in worms/fish; potassium is not the subject substance and no numeric potassium kinetic parameters are given. |
| popPK | Kuo_2025 | irrelevant | 1 | 1 | A generic bioaccumulation/TK framework paper about organic chemicals with no numeric potassium kinetic parameters; potassium is not the subject substance. |
| popPK | Kurokawa_1986 | irrelevant | 2 | 2 | Carcinogenicity dose-response study of potassium bromate in rats with model-derived risk values, but no kinetic parameters (half-life, clearance, partition coefficients) for potassium itself. |
| PGx | Lal_2006 | not_relevant | 3 | 0 | Warfarin pharmacogenetics, not potassium; no quantitative PK/PD effects. |
| PGx | Landrigan_1991 | not_relevant | 2 | 1 | Speculates that ALAD polymorphism may affect lead pharmacokinetics; no potassium PK/PD drug effect is reported. |
| PGx | Larsen_1994 | not_relevant | 0 | 0 | Bacterial TonB/ExbB mutation study in E. coli; no drug, no pharmacokinetic/pharmacodynamic parameters of potassium or any medication. |
| popPK | Le_2021 | irrelevant | 0 | 0 | The kinetic parameters (uptake/elimination constants, K_I, binding rate constants) all describe copper in zebra mussels; potassium appears only as part of the Na+/K+-ATPase enzyme name, not as a subject substance. |
| PGx | Lee_2021 | not_relevant | 0 | 0 | Paper reports a drug–drug interaction (voriconazole–tofacitinib) on PK in rats; no gene variant/genotype/phenotype effect is studied, and potassium is not involved. |
| popPK | Li_2022 | irrelevant | 0 | 0 | The kinetic parameters (CL, Ka, half-life) belong to AK111, an IL-17A monoclonal antibody, not to potassium; potassium appears only as a bystander word unrelated to the substance of interest. |
| popPK | Li_2023 | irrelevant | 0 | 0 | No potassium kinetic data; potassium is not the subject substance or mentioned at all. |
| popPK | Li_2023_2 | irrelevant | 0 | 0 |  |
| popPK | Li_2023_4 | irrelevant | 0 | 0 | Paper on driver information demand and crash risk; no potassium kinetic parameters of any kind. |
| popPK | Li_2024 | irrelevant | 0 | 0 | The paper concerns rare earth elements, not potassium; potassium appears only as Na+/K+-ATPase assay reagents, with no kinetic parameters for potassium as subject substance. |
| popPK | Liao_2022 | irrelevant | 0 | 0 | The paper is a clinical PK review of rucaparib; potassium is not the subject substance and no potassium kinetic parameters are reported. |
| popPK | Lienhart_1985 | irrelevant | 1 | 1 | Potassium appears only as a monitored plasma electrolyte in the normal range; the kinetic parameters belong to atracurium, not potassium. |
| PGx | Limdi_2008 | not_relevant | 6 | 2 | Review of warfarin pharmacogenetics (CYP2C9/VKORC1) with no PK/PD parameter for potassium and no effect sizes reported. |
| popPK | Lobet_2024 | irrelevant | 0 | 0 | This is a bevacizumab PK/PD study; potassium is not the subject substance and no potassium kinetic parameters appear. But wait — potassium is not mentioned; the substance is bevacizumab. Hmm, but species is human. |
| popPK | Lou_2025 | irrelevant | 0 | 0 | Kinetic parameters are for a drug (efsubaglutide alfa), not for potassium; potassium does not appear at all. |
| PGx | Lötsch_2011 | not_relevant | 3 | 1 | Narrative review of candidate genes for new analgesics; no specific gene-variant effects on PK/PD parameters reported. |
| popPK | Ma_2021 | irrelevant | 0 | 0 | Epidemiological time-series study of air pollution and COVID-19 with no potassium kinetic parameters of any kind. |
| popPK | Ma_2025 | irrelevant | 0 | 0 | Kinetic parameters (ku, ke, half-lives, BCF) are for thallium in snails, not potassium. |
| PGx | Maier_2023 | not_relevant | 0 | 0 | The study examines chemical co-administration (Phe) effects on BaP toxicokinetics, with no gene/genotype/pharmacogenomic effects reported. |
| PGx | Mandla_1990 | not_relevant | 0 | 0 | No pharmacokinetic or pharmacodynamic effect of potassium is studied; paper concerns vitamin D metabolism regulation by PKC in mice. |
| PGx | Mansour_2022 | not_relevant | 0 | 0 | Study reports only a drug–drug interaction (sildenafil–saxagliptin) on PK/PD; no gene variant, genotype, or pharmacogenomic effect on potassium is examined. |
| PGx | Martyn_1995 | not_relevant | 0 | 5 | Changes in potassium response to succinylcholine are attributed to acquired AChR upregulation from pathological states (burns, denervation, immobilization), not gene variants; the paper explicitly excludes pharmacogenetic factors from its scope. |
| popPK | Mason_2023 | irrelevant | 0 | 0 | This is an epidemiological study of mental health reporting agreement between survey and administrative data, with no potassium or kinetic parameters of any kind. |
| popPK | Matsusue_1988 | irrelevant | 0 | 0 | Clinical prognostic study using serum potassium only as a covariate in a mortality scoring system; no kinetic parameters of any kind. |
| popPK | McDonald_1985 | irrelevant | 0 | 0 | This is an epidemiological review of asbestos pollution and cancer risk; potassium appears nowhere and no kinetic parameters are reported. |
| popPK | McElroy_2017 | irrelevant | 0 | 0 | Potassium appears only as venom potassium-channel-modulating toxins in scorpions/crickets; no kinetic parameter (half-life, clearance, partition coefficient, etc.) for potassium as a subject substance is reported. |
| PGx | McGraw_2019 | not_relevant | 3 | 5 | In-vitro enzyme kinetics of metabolite formation by recombinant enzymes; no genetic variant effect on in-vivo PK/PD parameters. |
| popPK | Miles_2017 | irrelevant | 1 | 1 | Potassium appears only as a serum electrolyte covariate explaining QTc prolongation; no kinetic parameters (half-life, clearance, rates) for potassium are reported, and no numeric potassium values appear in the evidence. |
| popPK | Mochizuki_2022 | irrelevant | 0 | 0 | The paper reports PBPK parameters for cyclosporin A, coproporphyrin I, pitavastatin, and rosuvastatin; potassium appears only as the physiological ion K/CLint notation, never as the subject substance with kinetic parameters. |
| PGx | Mondon_1988 | not_relevant | 0 | 0 | No pharmacogenomic variant studied; effects are of GH peptides on glucose metabolism, not gene variants on PK/PD. |
| popPK | Moore_1983 | irrelevant | 0 | 0 | This is a radiation dose-response (D50, probit width) analysis with no potassium kinetic parameters of any kind; potassium does not appear as the subject substance. |
| popPK | Morath_2025 | irrelevant | 0 | 0 | All kinetic parameters (CL/F, Vd/F, ka) belong to apixaban, not potassium; potassium appears only as a generic term (CrCL is renal function, not potassium kinetics). |
| popPK | Motohashi_2013 | irrelevant | 1 | 0 | Review on transporters with no quantitative kinetic parameters for potassium in the evidence. species: unknown |
| popPK | Mukker_2026 | irrelevant | 1 | 3 | Potassium appears only as the hERG potassium channel context; all kinetic parameters (IC50, Cmax, C-QTc slope) belong to tuvusertib, not potassium as a substance. |
| popPK | Mulford_2026 | irrelevant | 0 | 0 | Kinetic parameters (AUC, CL/F) belong to vonoprazan, a potassium-competitive drug; potassium appears only mechanistically at the pump binding site, as subject substance it is absent. |
| popPK | Muller_2023 | irrelevant | 0 | 0 | The paper reports PK parameters for temocillin (an antibiotic), not for potassium, which does not appear as the subject substance. |
| popPK | Murarka_2017 | irrelevant | 0 | 0 | The paper concerns K-Ras/PDEδ inhibitor chemotypes; potassium is not the subject substance and no kinetic parameter values for potassium appear in the evidence. |
| popPK | Murray_1988 | irrelevant | 0 | 0 | The kinetic parameters (Vd, plasma t1/2) belong to an indium-111-labeled monoclonal antibody, not potassium, which appears only as the chemical element in "K" (kidney) ratio abbreviation. |
| popPK | Muthukrishnan_2025 | irrelevant | 0 | 0 | Paper reports population PK of clazakizumab (a monoclonal antibody) and hs-CRP PD, not potassium kinetics; potassium appears nowhere as subject substance. |
| popPK | Nagpure_2015 | irrelevant | 0 | 3 | Substance is hexavalent chromium (potassium dichromate as vehicle/counter-ion), not potassium; only an LC50 toxicity endpoint, no kinetic parameters, though the LC50 number itself is present in the abstract. |
| PGx | Nakayama_2023 | not_relevant | 0 | 0 | The paper examines simeprevir DDI effects on CP-I and drug exposures via enzyme/transporter inhibition with no gene variant, genotype, or pharmacogenomic effect on PK/PD parameters. |
| popPK | Natale_2021 | irrelevant | 0 | 0 | Structural biology review of K2P potassium channels; potassium is the permeant ion, not a substance with toxicokinetic parameters measured; no kinetic numbers present. |
| popPK | Naware_2024 | irrelevant | 0 | 0 | The PBPK model and all kinetic parameters (Kdeg, reflection coefficients, PS products) pertain to monoclonal antibodies, not potassium; potassium does not appear at all. |
| popPK | Naßwetter_2021 | irrelevant | 0 | 0 | The paper reports membrane-water partition coefficients for the drug Lapatinib in DMSO buffers, not for potassium as a subject substance. |
| popPK | Neetha_2023 | irrelevant | 0 | 0 | Potassium is not the subject; this is a triclosan toxicity (LC50) study in fish with no potassium kinetic parameters. |
| popPK | Nguyen_2026 | irrelevant | 0 | 0 | The paper reports population PK parameters for amikacin in humans; potassium does not appear as the subject substance. |
| popPK | Nielsen_2012 | irrelevant | 0 | 0 | The paper is a K-PD dose-response model for inhaled beta agonists (PF-00610355, salmeterol) in COPD patients with no potassium kinetic parameters. |
| PGx | Nielsen_2017 | not_relevant | 0 | 5 | Study is about morphine PK/PD with genetic variants, not potassium; no potassium PK/PD parameters reported. |
| PGx | Nomura_1967 | not_relevant | 0 | 0 | Bacterial colicin tolerance mutations, not a pharmacogenomic effect on a PK/PD parameter of potassium. |
| popPK | Oh_2023 | irrelevant | 1 | 5 | The kinetic parameters (AUC, Cmax, t1/2) belong to fexuprazan and aspirin; potassium appears only as a "potassium-competitive acid blocker" description and potassium oxalate tubes, with no potassium-element toxicokinetic data. |
| popPK | Olofsen_2026 | irrelevant | 0 | 0 | Kinetic parameters concern morphine and hydromorphone, not potassium. |
| PGx | Ording_1989 | not_relevant | 2 | 3 | Narrative pathophysiology of malignant hyperthermia mentioning hyperkalemia as a consequence, with no gene variant effect on potassium PK/PD parameters. |
| PGx | Pan_2025 | not_relevant | 2 | 3 | No gene variant/genotype/phenotype effect present; potassium oxonate is a disease-model inducer, not a drug with PGx-altered PK/PD. |
| PGx | Pedersen_2018 | not_relevant | 6 | 2 | Paper reports drug (metformin, not a potassium agent) PD/genotype associations, and none were significant; no potassium PK/PD parameter is involved. |
| popPK | Petitcollin_2021 | irrelevant | 0 | 0 | The paper reports population pharmacokinetics of trastuzumab and bevacizumab with no potassium parameters of any kind. |
| popPK | Philibert_2023 | irrelevant | 0 | 0 | The paper reports toxicity (LC50/CTLBB) of aromatic compounds in Artemia; potassium does not appear as a subject substance in the evidence. |
| popPK | Pilkis_1990 | irrelevant | 0 | 0 | A review of hepatic gluconeogenesis regulation; potassium plays no role as subject substance, and no kinetic parameters for it appear. |
| popPK | Pillai_2004 | irrelevant | 0 | 0 | Potassium only appears as calcium/vitamin D supplementation context; no kinetic parameters for potassium itself are reported. |
| popPK | Pouillot_2022 | irrelevant | 2 | 0 | PBPK model parameters pertain to cadmium; potassium appears only incidentally (e.g., K-Cd kidney measures), with no numeric kinetic values for potassium in the evidence. |
| popPK | Prior_2021 | irrelevant | 0 | 0 | The paper models tumor control probability for radiotherapy of skin cancer; potassium plays no role and no kinetic parameters of potassium appear. |
| popPK | Pétermann_2026 | irrelevant | 0 | 0 | The paper's kinetic parameters (half-lives, AUC, Vc, CL) belong to encorafenib and binimetinib, not potassium; potassium does not appear as a subject substance. |
| PGx | Qian_2021 | not_relevant | 0 | 0 | The paper describes a drug-drug/protein interaction (berberine inhibiting ABC transporters in resistant cells), with no gene variant/genotype/phenotype effect on a PK or PD parameter. |
| popPK | Ramesh_2014 | irrelevant | 0 | 0 | This is a human biomonitoring study of PAHs in serum; potassium appears only as potassium oxalate anticoagulant, with no kinetic parameters for potassium. |
| popPK | Rao_2025 | irrelevant | 0 | 0 | Cross-sectional physical fitness study with no potassium kinetic parameters of any kind (potassium not even discussed). |
| popPK | Rodríguez-Ochoa_2025 | irrelevant | 0 | 0 | The subject substance is temocillin (an antibiotic) tested in a hollow-fiber in vitro model; potassium never appears as a study substance and no potassium kinetic parameters are reported. |
| PGx | Ryu_2024 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype studied; only in vitro CYP modulation by perillyl alcohol, with potassium phosphate buffer unrelated as a PK/PD parameter. |
| PGx | Rüdesheim_2022 | not_relevant | 0 | 0 | Paper reports CYP2D6 genotype effects on dextromethorphan PK, not potassium. |
| popPK | Saeed_2026 | irrelevant | 0 | 0 | All kinetic parameters (CL, Vss, Kp, ka, F) belong to butorphanol, not potassium; potassium does not appear as the subject substance anywhere in the evidence. |
| popPK | Saleh_2023 | irrelevant | 0 | 0 | This is a PBPK model for 10 drugs (cyclophosphamide, methotrexate, etc.) in mouse brain; potassium does not appear as a subject substance anywhere. |
| popPK | Salerno_2021 | irrelevant | 0 | 0 | The paper is a PBPK model of sildenafil/fluconazole; potassium appears only as a buffer/analytical reagent (potassium phosphate), with no kinetic parameters for potassium as subject substance. |
| popPK | Sato_2023 | irrelevant | 0 | 0 | The paper models TfR-mediated antibody delivery to the brain; potassium is not the subject substance and no potassium kinetic parameters appear. |
| popPK | Serkland_2025 | irrelevant | 0 | 0 | The paper reports PK parameters for rituximab, not for potassium, which does not appear as the study substance. |
| popPK | Shah_2012 | irrelevant | 0 | 0 | The paper is a PBPK model of monoclonal antibodies; potassium does not appear as the subject substance and no potassium kinetic parameters are reported. |
| popPK | Shakoor_2018 | irrelevant | 0 | 0 | The paper evaluates antimicrobial, antioxidant, cytotoxic and antitumor activities of plant extracts; potassium is not the subject substance and no potassium kinetic parameters appear anywhere. |
| popPK | Sharma_2020 | irrelevant | 0 | 0 | The kinetic parameters (half-life, partition coefficients, clearance) all pertain to SHetA2, not potassium, which does not appear as the subject substance. |
| popPK | Sharma_2024 | irrelevant | 0 | 0 | Potassium appears only as potassium phosphate in a biochemical separation reagent (ATPS); the partition coefficient is for laccase, not potassium toxicokinetics. |
| popPK | Sibarov_2025 | irrelevant | 0 | 0 | This is an electrophysiology study of SK channels and Na/K-ATPase signaling in rat neuronal cultures; potassium appears only as an ion in buffers/channel physiology, with no kinetic parameters (half-life, clearance, partition coefficients, etc.) measured. |
| popPK | Sipos-Szabó_2026 | irrelevant | 0 | 0 | The paper benchmarks computational pKa prediction algorithms for drug-like molecules; potassium is not the subject and no kinetic parameters of any kind are reported. |
| popPK | Sparrow_1983 | irrelevant | 0 | 0 | Paper is about a human cell surface antigen and contains no potassium kinetic data of any kind. |
| PGx | Spielmann_1980 | not_relevant | 0 | 0 | Paternity testing case study; no drug, no PK/PD parameters, not pharmacogenomic. |
| PGx | Stehle_2008 | not_relevant | 0 | 5 | Paper concerns CYP2C9/VKORC1 effects on coumarin anticoagulant dosing/PD, not potassium PK/PD. |
| popPK | Stiteler_1993 | irrelevant | 0 | 0 | This is a statistical paper on combining dose-response data sets for cancer risk extrapolation with no potassium kinetic parameters of any kind. |
| popPK | Su_2024 | irrelevant | 0 | 0 | The paper's kinetic parameters concern ochratoxin A, not potassium; the substance of interest does not appear as a subject here. |
| PGx | Sunder-Plassmann_2010 | not_relevant | 9 | 0 | Abstract-only review on anticoagulant pharmacogenetics; no drug/parameter for potassium or quantitative effects available. |
| PGx | Suthers_2019 | not_relevant | 0 | 0 | Letter reply discussing pharmacogenetic RCT meta-analysis commentary, no PK/PD parameters reported. |
| popPK | Tadesse_2025 | irrelevant | 0 | 0 | Paper reports larvicidal/adulticidal LC50/LC90 values of Ethiopian medicinal plant extracts against mosquitoes; potassium is not a subject substance and no kinetic parameters for potassium appear. |
| popPK | Takahashi_1992 | irrelevant | 0 | 0 | Electrophysiology study of chloride IPSCs in neonatal rat spinal cord; potassium appears only as a manipulated ion gradient, with no toxicokinetic parameters for potassium. |
| PGx | Tanna_2023 | not_relevant | 2 | 3 | CYP2D6 phenotype frequencies were only used to match simulations; no gene variant effect on PK/PD of potassium (or any drug) is reported. |
| popPK | Thomas_2026 | irrelevant | 0 | 0 | The paper reports population PK/PD parameters for risankizumab (a monoclonal antibody drug), not for potassium; potassium does not appear as the subject substance anywhere. |
| popPK | Thresher_1983 | irrelevant | 0 | 0 | The paper concerns immobilized Cibacron blue affinity chromatography and lactate dehydrogenase binding constants; potassium is not the subject substance and no potassium kinetic parameters appear. |
| popPK | Tsuchitani_2024 | irrelevant | 0 | 1 | The paper is a PBPK/pharmacokinetic study of telmisartan (a drug), not potassium — potassium appears only as an electrolyte reagent (KHB buffer) in unrelated context; no potassium kinetic parameters are reported or present. |
| popPK | Turesson_1991 | irrelevant | 0 | 0 | This is a radiation therapy dose-response study of skin telangiectasia; potassium plays no role and no kinetic parameters for potassium appear. |
| popPK | Tuttle_2013 | irrelevant | 0 | 0 | Potassium appears only as part of the enzyme name KAT II; no toxicokinetic parameters for potassium as a substance. |
| popPK | Van_2025 | irrelevant | 0 | 0 | The paper reports PK/PD parameters for rifampicin and polymyxin B in mice; potassium appears only indirectly (e.g. K3E EDTA, K. pneumoniae), with no potassium kinetic parameters. |
| popPK | Verdon-Roe_2006 | irrelevant | 0 | 0 | A psychophysical vision study on motion displacement thresholds in glaucoma with no potassium toxicokinetic data whatsoever. |
| popPK | Vicente_2016 | irrelevant | 0 | 0 | Potassium refers to the hERG/KCNH2 ion channel in drug proarrhythmia assessment, not potassium as a study substance; no potassium kinetic parameters and no numeric values. |
| PGx | Villapalos-García_2023 | not_relevant | 0 | 5 | The paper reports NAT2 effects on rivaroxaban PK, not on any pharmacokinetic or pharmacodynamic parameter of potassium, so it does not match the queried drug. |
| popPK | Wang_2022 | irrelevant | 0 | 0 | The kinetic parameters (depletion rate constants, bioconcentration factors) belong to PCDD/Fs/dioxins, not potassium, which does not appear as the subject substance anywhere in the evidence. |
| PGx | Wang_2023 | not_relevant | 0 | 0 | Study reports CYP/transporter-mediated DDI effects on ocedurenone PK, not a gene variant/genotype/phenotype effect on potassium PK/PD. |
| popPK | Wang_2024 | irrelevant | 0 | 0 | The study concerns phenanthrene toxicokinetics in springtails; potassium is never the subject substance. |
| popPK | Wang_2024_2 | irrelevant | 0 | 0 | The paper concerns abiraterone and coproporphyrin I disposition; potassium appears only as a counterion in abiraterone acetate salts, with no kinetic parameters for potassium itself. |
| PGx | Wei_2023 | not_relevant | 0 | 0 | Study examines drug-drug interactions (CYP3A4 inhibition) on tegoprazan PK/PD, not gene variants/genotypes; no pharmacogenomic effect reported. |
| PGx | Westphal_1994 | not_relevant | 1 | 1 | Review of antibiotic hepatotoxicity with no gene variant effects on potassium PK/PD parameters reported. |
| popPK | Whang_2022 | irrelevant | 0 | 0 | The paper is a PBPK model of flurbiprofen; potassium is not the subject substance and no potassium parameters appear. |
| popPK | Williams_1979 | irrelevant | 1 | 2 | Potassium appears only as serum/urine electrolyte measurements and dietary intake in a hypertension study of angiotensin-aldosterone responses — no kinetic parameters (half-life, clearance, rates) for potassium are reported. |
| PGx | Xu_2022 | not_relevant | 0 | 0 |  |
| popPK | Xu_2024 | irrelevant | 0 | 0 | The paper models TKIs (afatinib, etc.), not potassium; potassium is not the subject substance and no potassium kinetic parameters appear. |
| popPK | Xue_2023 | irrelevant | 0 | 0 | The paper models warfarin and vitamin K PK/PD in cardiac surgery patients; potassium does not appear as the subject substance and no potassium kinetic parameters are present. |
| PGx | Yalçin_2022 | not_relevant | 1 | 2 | Systematic review methods text; no potassium drug or PGx effect on its PK/PD parameters is reported. |
| popPK | Yamamoto_2025 | irrelevant | 1 | 3 | The substance is methylmercury (measured as mercury), not potassium; only tissue:plasma Kp values for Hg are reported in mice, so potassium is not the subject. |
| popPK | Yamazaki_2019 | irrelevant | 0 | 0 | This is a PBPK/DDI study of drugs (digoxin, talinolol, quinidine, dabigatran) as Pgp substrates; potassium only appears incidentally (e.g., potassium channels, K+ supplementation to correct hypokalemia) and is never the subject substance with kinetic parameters of its own. |
| PGx | Yamazaki_2022 | not_relevant | 0 | 0 | Reports Pgp-mediated drug-drug interaction PBPK modeling for potassium-independent PK of digoxin/dabigatran/quinidine; no gene variant or genotype effect on any PK/PD parameter. |
| PGx | Yang_2014 | not_relevant | 3 | 0 | Abstract mentions gene variants affecting warfarin dosing (PD), but potassium is not involved and no potassium PK/PD parameters are reported. |
| popPK | Yang_2021 | irrelevant | 0 | 0 | All kinetic parameters (AUC, Cmax, clearance, PBPK constants) belong to metformin and its perpetrators; potassium does not appear as the subject substance. |
| popPK | Yang_2022 | irrelevant | 0 | 0 | The paper models brivaracetam (an antiepileptic drug), not potassium; potassium does not appear as a subject substance and no potassium parameters are reported. |
| popPK | Yang_2025 | irrelevant | 0 | 0 | The paper reports a population PK model of the drug iruplinalkib (WX-0593); potassium does not appear as a subject substance and no potassium kinetic parameters are reported. |
| PGx | Yang_2025_2 | not_relevant | 0 | 5 | Study reports only allele frequency differences in the Pumi population; no effect of any genotype on a PK or PD parameter of a drug is measured or reported. |
| popPK | Yaseen_2025 | irrelevant | 0 | 0 | Potassium appears only as a serum electrolyte biomarker in a pesticide toxicity study, with no kinetic parameters for potassium. |
| popPK | Ye_2025 | irrelevant | 0 | 0 | The paper's subject substance is aztreonam (PBPK model for the antibiotic), and potassium does not appear as the substance of any kinetic parameter. |
| PGx | Yoon_2021 | not_relevant | 0 | 0 | Study reports PBPK model/DIII effects of CYP3A4 perpetrators on tegoprazan PK; no gene variant/genotype/phenotype effect on potassium or tegoprazan PK/PD is reported. |
| popPK | Zaneti_2021 | irrelevant | 0 | 0 | This is a QMRA study of SARS-CoV-2 infection risk in wastewater; potassium plays no role and no kinetic parameters for potassium are reported. |
| popPK | Zhai_2026 | irrelevant | 0 | 0 | This is an ML method paper predicting Km (Michaelis constant) for arbitrary enzyme-substrate pairs; potassium is not the subject substance (any potassium ions are incidental), and no potassium-specific kinetic values are reported. |
| PGx | Zhang_2019 | not_relevant | 0 | 0 | Reports in vitro CYP inhibition by sophocarpine, not a gene variant/genotype effect on PK or PD. |
| popPK | Zhang_2021 | irrelevant | 0 | 0 | The paper models benzotriazole UV stabilizers in zebrafish; potassium appears nowhere as the subject substance and no potassium kinetic parameters are reported. |
| popPK | Zhang_2022 | irrelevant | 0 | 0 | The kinetic parameters (k02, k03) belong to arsenate, not potassium; potassium does not appear as subject. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | The PBPK model and kinetic parameters concern betamethasone, not potassium; potassium does not appear as subject substance. |
| popPK | Zhang_2025_2 | irrelevant | 0 | 0 | Kinetic parameters (uptake constants, DT50) are for cadmium, not potassium. |
| popPK | Zhao_2002 | irrelevant | 0 | 0 | This is a luminescence dating paper using K-feldspar minerals, not a study of potassium toxicokinetics; no kinetic parameters of potassium as a substance are reported. |
| popPK | Zheng_2026 | irrelevant | 0 | 0 | The paper is a digitized pKa dataset with no toxicokinetic parameters for potassium; potassium appears at most incidentally and no numeric kinetic values are present. |
| popPK | Zheng_2026_2 | irrelevant | 0 | 0 | A SARS-CoV-2 antiviral screening study with no potassium kinetic parameters; potassium does not appear as the subject substance. |
| popPK | Zheng_2026_3 | irrelevant | 1 | 0 | This is a review of drug metabolite effects on QT prolongation; potassium appears only as an ion current modulated by drugs, with no kinetic parameters for potassium as a substance. |
| popPK | Zhu_2023 | irrelevant | 0 | 0 | The paper models liposome/water partition coefficients for generic pollutants via QSPR; potassium is not the subject substance and no potassium-specific kinetic values appear. |
| popPK | Zhu_2026 | irrelevant | 0 | 5 | The PK/PD model and kinetic parameters (V, CL, Ke0) belong entirely to ciprofol, not potassium; potassium is not the subject substance. |
| PGx | Šimičević_2023 | not_relevant | 0 | 5 | Paper examines rivaroxaban pharmacogenetics and bleeding risk, not potassium PK/PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpotassium%5D&body=Drug%3A%20potassium%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_potassium/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-11 07:04 UTC</sub>
