<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Reserpine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Reserpine_Gilbertie2019_reference&quot;,&quot;label&quot;:&quot;Gilbertie_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_reserpine/Reserpine_Gilbertie2019_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Reserpine_Zhang2018_reference&quot;,&quot;label&quot;:&quot;Zhang_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_reserpine/Reserpine_Zhang2018_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

# Reserpine

- **generic name:** Reserpine
- **T3DB:** [T3D2713](http://www.t3db.ca/toxins/T3D2713) · **DrugBank:** [DB00206](https://go.drugbank.com/drugs/DB00206) · **PubChem:** [CID 5770](https://pubchem.ncbi.nlm.nih.gov/compound/5770)
- **groups:** approved, withdrawn

## About

An alkaloid found in the roots of Rauwolfia serpentina and R. vomitoria. Reserpine inhibits the uptake of norepinephrine into storage vesicles resulting in depletion of catecholamines and serotonin from central and peripheral axon terminals. It has been used as an antihypertensive and an antipsychotic as well as a research tool, but its adverse effects limit its clinical use.

- **Category:** Drug, Natural Toxin
- **Route of exposure:** oral
- **Sources and uses:** Foe the treatment of hypertension
- **Mechanism of toxicity:** Reserpine's mechanism of action is through inhibition of the ATP/Mg<sup>2+</sup> pump responsible for the sequestering of neurotransmitters into storage vesicles located in the presynaptic neuron. The neurotransmitters that are not sequestered in the storage vesicle are readily metabolized by monoamine oxidase (MAO) causing a reduction in catecholamines.
- **Carcinogenicity:** IARC group 3, not classifiable as to its carcinogenicity to humans.
- **Acute toxicity:** LD50: 420 mg/kg (Oral, Rat)
LD50: 44 mg/kg (Intraperitoneal(parenteral), Rat)
LD50: 15 mg/kg (Intravenous(parenteral), Rat)
LD50: 200 mg/kg (Oral, Mouse)
LD50: 52 mg/kg (Subcutaneous(parenteral), Mouse)
LD50: 7 mg/kg (Intraperitoneal(parenteral), Rabbit)

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2713">T3DB T3D2713</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 50-55-5 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:28487">ChEBI 28487</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| reserpine | parent | 608.688 | C33H40N2O9 | PubChem | [5770](https://pubchem.ncbi.nlm.nih.gov/compound/5770) | Alfosea-Cuadrado_2024, Gilbertie_2019 |

## Start here

> **Gilbertie_2019_reference** — <span class="pk-badge pk-badge--neutral">Not simulated</span> six healthy adult horses, n = 6. [Run it in the simulator](drugs/toxin_reserpine/Reserpine_Gilbertie2019_reference.md?tab=Simulation) · [record](drugs/toxin_reserpine/Reserpine_Gilbertie2019_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="horse" data-age="adult" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span> | [Gilbertie_2019_reference](drugs/toxin_reserpine/Reserpine_Gilbertie2019_reference.md) | ▶ model + simulator | retention, 1 pool | 2 | Gilbertie JM et al., Oral reserpine administration in horses…, Equine veterinary journal (2019) | [10.1111/evj.13048](https://doi.org/10.1111/evj.13048) |
| <span class="pk-rf" hidden data-species="bird" data-age="unknown" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">bird</span> | [Zhang_2018_reference](drugs/toxin_reserpine/Reserpine_Zhang2018_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Zhang N et al., Relationship between danofloxacin PK/PD…, PloS one (2018) | [10.1371/journal.pone.0202070](https://doi.org/10.1371/journal.pone.0202070) |
| <span class="pk-rf" hidden data-species="rat" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub> | [Alfosea-Cuadrado_2024_population_pkpd_model_estimates_fixed_effects_value](drugs/toxin_reserpine/Reserpine_AlfoseaCuadrado2024_population_pkpd_model_estimate.md) | — | 1-compartment (no model) | 5 | Alfosea-Cuadrado GM et al., Population Pharmacokinetic-Pharmacodyna…, Pharmaceutics (2024) | [10.3390/pharmaceutics16081101](https://doi.org/10.3390/pharmaceutics16081101) |
| <span class="pk-rf" hidden data-species="rat" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [↳ population_pkpd_model_estimates_inter_animal_variability](drugs/toxin_reserpine/Reserpine_AlfoseaCuadrado2024_population_pkpd_model_estimate.md) | — | 1-compartment (no model) | 7 |  |  |
| <span class="pk-rf" hidden data-species="rat" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [↳ population_pkpd_model_estimates_inter_animal_variability_rse](drugs/toxin_reserpine/Reserpine_AlfoseaCuadrado2024_population_pkpd_model_estimate.md) | — | 1-compartment (no model) | 6 |  |  |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Alfosea-Cuadrado_2024_MA](drugs/toxin_reserpine/pd_Alfosea_Cuadrado_2024_MA.md) | Monoamines (5-HT, DA, NE) biomarker turnover ← reserpine | — | Alfosea-Cuadrado GM et al., Population Pharmacokinetic-Pharmacodyna…, Pharmaceutics (2024) | [10.3390/pharmaceutics16081101](https://doi.org/10.3390/pharmaceutics16081101) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Finch_1975_SBP](drugs/toxin_reserpine/pd_Finch_1975_SBP.md) | systolic blood pressure biomarker turnover ← reserpine | — | Finch L, An increased reactivity in hypertensive…, British journal of pharmaco… (1975) | [10.1111/j.1476-5381.1975.tb07589.x](https://doi.org/10.1111/j.1476-5381.1975.tb07589.x) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Finch_1975_mesenteric_artery_reactivity](drugs/toxin_reserpine/pd_Finch_1975_mesenteric_artery_reactivity.md) | mesenteric artery reactivity biomarker turnover ← reserpine | — | Finch L, An increased reactivity in hypertensive…, British journal of pharmaco… (1975) | [10.1111/j.1476-5381.1975.tb07589.x](https://doi.org/10.1111/j.1476-5381.1975.tb07589.x) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Meltzer_1992_Clinical_response](drugs/toxin_reserpine/pd_Meltzer_1992_Clinical_response.md) | Clinical response · model not identified | — | Meltzer HY, Treatment of the neuroleptic-nonrespons…, Schizophrenia bulletin (1992) | [10.1093/schbul/18.3.515](https://doi.org/10.1093/schbul/18.3.515) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=reserpine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` inducer/inhibitor/substrate, `ABCC2` inhibitor, `SLCO2B1` inhibitor | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` inducer/inhibitor/substrate | DrugBank actor |
| distribution | placenta | `ABCB1` inducer/inhibitor/substrate | DrugBank actor |
| distribution | testis | `ABCB1` inducer/inhibitor/substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` inducer | DrugBank actor |
| metabolism | liver | `CYP3A5` inducer, `SLC22A1` inhibitor, `SLCO1B1` inhibitor, `SLCO2B1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A5` inducer | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` inducer/inhibitor/substrate, `ABCC2` inhibitor, `SLC22A2` substrate | DrugBank actor |
| excretion | liver | `ABCB1` inducer/inhibitor/substrate, `ABCB11` inhibitor, `ABCC2` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: BIRC5 (binder), SLC18A1 (inhibitor), SLC18A2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-13 08:11 | 27:44 | 2/3/0 | 2/1/0 | 0/0/0 | 807,366/45,926 | einfracz / qwen3.8-flash-next | 19 | 4/12 | 18/1 | 0 |

## Coverage

- **PubMed hits:** 391 matched, 181 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 5  ·  extracted 2  ·  needs review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gilbertie_2019.pdf` | Gilbertie JM et al., Oral reserpine administration in horses…, Equine veterinary journal (2019) | popPK | 10 | [10.1111/evj.13048](https://doi.org/10.1111/evj.13048) | [30465727](https://pubmed.ncbi.nlm.nih.gov/30465727) | The abstract explicitly reports the plasma half-life (23.6 ± 6.24 h) and Cmax for reserpine in horses. |
| `Ghosh_2001.pdf` | Ghosh B et al., Effect of physicochemical parameters on…, Indian journal of experimen… (2001) | popPK | 8 |  | [12019767](https://pubmed.ncbi.nlm.nih.gov/12019767) | The paper reports dermal permeability and flux for reserpine in an in vitro skin permeation study, which is a relevant toxicokinetic parameter, but the specific numeric values are not included in the provided text summary. |
| `Wang_2021.pdf` | Wang N et al., Simultaneous determination of five alka…, Journal of separation scien… (2021) | popPK | 7 | [10.1002/jssc.202000914](https://doi.org/10.1002/jssc.202000914) | [33470534](https://pubmed.ncbi.nlm.nih.gov/33470534) | The paper reports pharmacokinetic parameters for reserpine in rats, but the specific numeric values (t1/2, AUC, etc.) are not present in the provided evidence, likely residing in tables or supplementary data. |
| `Watanabe_1990.pdf` | Watanabe T et al., Placental and blood-brain barrier trans…, Toxicology and applied phar… (1990) | popPK | 5 | [10.1016/0041-008x(90)90359-3](https://doi.org/10.1016/0041-008x(90)90359-3) | [1975464](https://pubmed.ncbi.nlm.nih.gov/1975464) | The paper reports partition coefficients (log Pcorr) for reserpine, which are kinetic parameters, but the specific numeric values are not included in the text snippet (only rankings are given). |

<sub>queue written 2026-11-13 07:59 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abdelfatah_2015 | not_relevant | 1 | 0 | The study investigates cytotoxicity and transporter interactions in cell lines (in vitro), not pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters in vivo. |
| popPK | Antonaccio_1990 | irrelevant | 0 | 0 | The paper focuses on sotalol pharmacokinetics and mentions reserpine only as a pretreatment agent to block receptors, with no kinetic parameters for reserpine. |
| popPK | Arbab_1996 | irrelevant | 0 | 0 | The paper investigates the kinetics of I-123-MIBG in rat hearts, using reserpine only as a pretreatment agent to deplete catecholamine stores and inhibit uptake, with no kinetic parameters reported for reserpine itself. |
| popPK | Battaglino_2004 | irrelevant | 1 | 0 | The paper studies 5-HTT regulation of osteoclast differentiation, using reserpine only as a mechanistic inhibitor to potentiate differentiation, with no toxicokinetic parameters reported. |
| popPK | Bauer_1985 | irrelevant | 1 | 0 | The paper is a review of renal effects and pharmacology with no quantitative toxicokinetic parameters for reserpine. |
| popPK | Benneh_2025 | irrelevant | 0 | 0 | The paper investigates xylopic acid derivatives and uses reserpine only as a monoamine-depleting agent to test mechanisms, reporting no toxicokinetic parameters for reserpine itself. |
| PGx | Bessho_2006 | not_relevant | 0 | 0 |  |
| PGx | Burkert_2008 | not_relevant | 0 | 0 | Reserpine is used as an experimental tool to block efflux pump activity in cell assays, not as a therapeutic drug undergoing pharmacokinetic or pharmacodynamic evaluation in humans. |
| popPK | Büch_1980 | irrelevant | 0 | 0 | Reserpine appears only as a pretreatment agent to alter blood pressure/sympathetic tone for studying phenazone and barbituric acid distribution; no kinetic parameters for reserpine are reported. |
| popPK | Chacha_2025 | irrelevant | 0 | 0 | Reserpine is used solely as a comparator/control efflux inhibitor in an in vitro antibacterial study; no toxicokinetic parameters (ADME, half-life, clearance) are reported. |
| popPK | Chapman_1991 | relevant | 3 | 0 | The paper reports plasma concentrations and detection windows but does not provide explicit numeric kinetic parameters (e.g., half-life, clearance) in the text; such data are likely in the unprovided tables or figures. |
| PGx | Chen_2014_2 | not_relevant | 2 | 0 | The study reports a statistical association between FBN1 genotypes and clinical response to compound reserpine (a PD endpoint), but it does not quantify the effect on specific PK or PD parameters, nor does it establish a mechanistic pharmacogenomic interaction. |
| popPK | Döring_1988 | irrelevant | 1 | 0 | The paper reports bacterial clearance in rats treated with reserpine, but reserpine is used only as a pretreatment/vehicle to induce physiological changes, with no kinetic parameters reported for reserpine itself. |
| PGx | Englund_2014 | not_relevant | 0 | 0 | The paper investigates cytochrome P450 inhibition by reserpine, not the effect of gene variants on reserpine's PK/PD. |
| popPK | Fonteles_1976 | irrelevant | 0 | 0 | Reserpine is used solely as a pharmacological tool to deplete catecholamines in an isolated organ perfusion study; no toxicokinetic parameters for reserpine are reported. |
| popPK | Futrakul_2004 | irrelevant | 0 | 0 | Reserpine is mentioned only as a failed antihypertensive treatment agent, with no pharmacokinetic parameters reported. |
| popPK | Garber_2001 | irrelevant | 0 | 0 | The paper discusses reserpine only as a component of an antihypertensive cocktail comparator in a study of renal disease, reporting no kinetic parameters for reserpine. |
| popPK | Ghosh_2001 | relevant | 8 | 2 | The paper reports dermal permeability and flux for reserpine in an in vitro skin permeation study, which is a relevant toxicokinetic parameter, but the specific numeric values are not included in the provided text summary. |
| popPK | Gibbs_1988 | irrelevant | 0 | 0 | Reserpine is used only as a pre-treatment agent to deplete serotonin; no toxicokinetic parameters for reserpine itself are reported. |
| popPK | Gin_1996 | irrelevant | 0 | 0 | Reserpine is merely a component of a triple therapy regimen used for treatment; the study measures albumin clearance and excretion rates, not reserpine kinetic parameters. |
| PGx | Granado_2011 | not_relevant | 1 | 0 | The paper investigates the role of the D2 receptor genotype in methamphetamine/MDMA neurotoxicity, using reserpine only as a pharmacological tool to modulate body temperature and dopamine stores, not as a substrate to measure its own PK/PD changes based on genotype. |
| popPK | Gray_1999 | irrelevant | 0 | 0 | The paper is a review of drug-induced cognitive disorders where reserpine is only mentioned as an older antihypertensive agent with no quantitative toxicokinetic data reported. |
| popPK | Guay_2010 | irrelevant | 0 | 0 | The paper is a review of Tetrabenazine (TBZ), and reserpine is mentioned only as a historical comparator and for drug-interaction context, with no toxicokinetic parameters for reserpine reported. |
| PGx | Guay_2010 | not_relevant | 1 | 1 | The paper focuses on tetrabenazine, not reserpine; reserpine is only mentioned as a historical reference for chemical simplicity and as a drug-interaction agent. |
| popPK | Halbrügge_1993 | irrelevant | 0 | 0 | Reserpine is used only as a pretreatment agent to deplete catecholamines, not as the subject substance whose kinetics are measured. |
| popPK | Henry_1986 | irrelevant | 0 | 0 | The paper describes in vitro binding kinetics and dissociation constants (KD) of reserpine to chromaffin granule membranes, not in vivo toxicokinetic parameters (such as half-life, clearance, or volume of distribution). |
| popPK | Hirayama_1993 | irrelevant | 0 | 0 | no_text gate: only 103 chars of text extracted (&lt; 400) |
| PGx | Hong_2016 | not_relevant | 0 | 0 | The paper discusses pharmacodynamic mechanisms (epigenetic regulation of Nrf2) in cell lines, not the effect of gene variants on PK/PD parameters in humans or animals. |
| PGx | Hu_2020 | not_relevant | 0 | 0 | The paper uses reserpine solely as a tool to induce a depressive disorder model in mice; it does not study pharmacogenomic effects on reserpine's PK or PD parameters. |
| PGx | Ingram_2013 | not_relevant | 0 | 0 | The paper uses reserpine as an ABC transporter inhibitor to study radiation resistance in cancer cells; it does not report the effect of a human gene variant on the pharmacokinetics or pharmacodynamics of reserpine itself. |
| popPK | Inoue_1990 | irrelevant | 0 | 0 | Reserpine is used as a pretreatment/co-exposure to alter the uptake of other substances (methamphetamine and deprenyl), not as the substance whose kinetic parameters are being reported. |
| popPK | Jo_2017 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of bakuchicin, using reserpine only as an internal standard for the LC-MS/MS analysis. |
| popPK | Jovanović_2002 | irrelevant | 0 | 0 | The paper studies captopril and adriamycin effects on renal failure; reserpine is only mentioned once as part of a "triple therapy" comparator in cited previous studies, with no toxicokinetic parameters reported for reserpine itself. |
| popPK | Kau_1991 | irrelevant | 0 | 0 | Reserpine is used solely as a pharmacological pretreatment to deplete catecholamines for a study on ANF renal effects, with no toxicokinetic parameters reported for reserpine. |
| PGx | Kawanabe_2006 | not_relevant | 0 | 0 | The paper investigates the presence of stem cells using reserpine as a tool to block ABCG2-mediated dye efflux; it does not study gene variants affecting reserpine's pharmacokinetics or pharmacodynamics in humans. |
| popPK | Kiso_2018 | irrelevant | 0 | 0 | Reserpine is only used as an induction agent for a myalgia pain model, with no toxicokinetic parameters reported for reserpine itself. |
| popPK | Kiso_2020 | irrelevant | 0 | 0 | The paper reports pharmacokinetics for ASP8477, a different substance, while reserpine is mentioned only as an agent to induce myalgia in rats (a model setup), with no kinetic data for reserpine itself. |
| popPK | Konishi_1996 | irrelevant | 0 | 0 | The paper reports on electrophysiological changes in ion channel density, not reserpine toxicokinetic parameters, and no numeric kinetic values are present. |
| PGx | Konstandi_2006 | not_relevant | 0 | 0 | The paper uses reserpine as a pharmacological tool for catecholamine depletion in an animal study to study CYP1A2 regulation, not as a drug with a studied genotype-dependent PK/PD response in humans. |
| PGx | Konstandi_2008 | not_relevant | 0 | 0 | Reserpine is used as a pharmacological tool to deplete catecholamines to study CYP1A2 regulation by stress, not as the target drug for a pharmacogenomic analysis. |
| PGx | Kubota_2010 | not_relevant | 0 | 0 | The paper investigates the role of ABCG2 in corneal epithelial cells and its interaction with mitoxantrone; reserpine is used merely as a chemical inhibitor of ABCG2, not as the drug whose pharmacokinetics or pharmacodynamics are being studied in relation to genetic variation. |
| popPK | LOVE_1965 | irrelevant | 0 | 0 | no_text gate: only 82 chars of text extracted (&lt; 400) |
| popPK | Lehnert_1987 | irrelevant | 2 | 0 | The substance is a reserpine derivative (diethylaminoethylreserpine), not reserpine, and no specific numeric kinetic parameters are reported in the text. |
| PGx | Li_2026 | not_relevant | 0 | 0 | The paper reports reserpine as an inhibitor of ABCG2, not how a genetic variant affects reserpine's own PK or PD parameters. |
| popPK | Linderman_2026 | irrelevant | 1 | 0 | Reserpine is used merely as a pharmacological tool (VMAT inhibitor) to deplete vesicles, and the kinetic parameters (clearance rates) are for dopamine and ATP, not reserpine. |
| popPK | Ludwig_2025 | irrelevant | 0 | 0 | The paper is a historical analysis of pharmacology textbooks focusing on pilocarpine and physostigmine, with no toxicokinetic parameters for reserpine. |
| PGx | Luo_2012 | not_relevant | 0 | 0 | The paper discusses cancer stem cell characteristics and mentions reserpine only as a tool to identify side population cells via dye efflux, not as a study of pharmacogenomic effects on reserpine's PK/PD parameters. |
| popPK | Madaras-Kelly_2002 | irrelevant | 0 | 0 | Reserpine is used solely as an analytical reagent to inhibit efflux pumps, with no toxicokinetic parameters reported for reserpine itself. |
| popPK | Makarov_1978 | irrelevant | 0 | 0 | The paper studies the effect of reserpine on the pharmacokinetics of a different substance (norsulfazole), rather than reporting kinetic parameters for reserpine itself. |
| popPK | Manda_2016 | irrelevant | 0 | 0 | The paper focuses on fascaplysin; reserpine is mentioned only as a comparator P-gp inducer, with no toxicokinetic parameters for reserpine reported. |
| PGx | Martsinkevich_1977 | not_relevant | 1 | 2 | The paper discusses serotonin metabolism in children with mental retardation (oligophrenia) and uses reserpine as a probe for adaptive mechanisms, but it does not analyze genetic variants or report specific PK/PD parameters influenced by genotype. |
| popPK | Massol_1988 | irrelevant | 0 | 0 | The paper studies triiodothyroacetic acid (TA3) in mice, with reserpine mentioned only as a challenge agent for a hypothermia test, reporting no kinetic parameters for reserpine. |
| popPK | Min_1989 | irrelevant | 0 | 0 | Reserpine is used as a pharmacological agent to increase blood flow in a skin flap study, but no toxicokinetic parameters for reserpine are reported. |
| popPK | Mokhtarian_1984 | irrelevant | 0 | 0 | Reserpine is used here as a pharmacological agent to deplete mast cell amines, with no quantitative toxicokinetic parameters (e.g., half-life, clearance, volume of distribution) reported for reserpine itself. |
| popPK | Morsi_1992 | irrelevant | 1 | 0 | The paper reports pharmacodynamic outcomes (blood pressure) and pharmacodynamic biomarkers (catecholamines) but does not report any quantitative toxicokinetic parameters such as half-life, clearance, or partition coefficients for reserpine. |
| popPK | Mukherjee_1997 | irrelevant | 0 | 0 | The paper focuses on 18F-fallypride and d-amphetamine; reserpine is mentioned only as a pre-treatment to deplete dopamine in monkeys, with no kinetic parameters reported for reserpine itself. |
| popPK | Nakano_1996 | irrelevant | 0 | 0 | Reserpine is used solely as a pharmacodynamic comparator/co-administered drug to assess interactions with MPC-1304, with no toxicokinetic parameters reported for reserpine itself. |
| popPK | Odum_1994 | irrelevant | 0 | 0 | Reserpine is used as a pharmacological agent in a treatment regimen (HHR) and is not the subject of toxicokinetic analysis; the kinetic data pertains to iodinated albumin. |
| popPK | Ozawa_1976 | irrelevant | 0 | 0 | The paper studies lithium kinetics, using reserpine only as a pharmacological agent to induce hypothermia/ptosis to test lithium's antagonistic effects, with no toxicokinetic parameters for reserpine. |
| popPK | Paleacu_2007 | irrelevant | 0 | 0 | The paper is a review of tetrabenazine, mentioning reserpine only as a qualitative comparator regarding half-life and mechanism, with no quantitative kinetic parameters for reserpine reported. |
| popPK | Phung-Ba_1995 | irrelevant | 1 | 0 | Reserpine is mentioned only as a known P-glycoprotein inhibitor/co-exposure; the paper does not report kinetic parameters for reserpine itself. |
| popPK | Raffel_1999 | irrelevant | 1 | 2 | The kinetic parameters belong to [11C]phenylephrine, not reserpine; reserpine is used only as a pharmacological inhibitor/tool. |
| PGx | Ritz_1999 | not_relevant | 0 | 0 | The paper discusses okadaic acid resistance mechanisms in rat cells and mentions reserpine only as a chemosensitizer (reversal agent) for P-glycoprotein, without reporting any pharmacokinetic or pharmacodynamic parameters of reserpine itself. |
| popPK | Rovere_1977 | irrelevant | 1 | 0 | The paper studies the pharmacodynamic effect of reserpine on renal autoregulation, reporting no toxicokinetic parameters such as half-life, clearance, or volume of distribution. |
| popPK | SMITH_1965 | irrelevant | 0 | 0 | no_text gate: only 117 chars of text extracted (&lt; 400) |
| popPK | Saini_2026 | irrelevant | 0 | 0 | The paper uses reserpine as a model agent to induce depression in rats and studies the pharmacology of mustard honey, reporting no toxicokinetic parameters for reserpine itself. |
| popPK | Schaefer_1984 | irrelevant | 0 | 0 | The paper focuses on the synthesis and physicochemical properties of budipine; reserpine is mentioned only as a comparator/agonist in pharmacological antagonism tests (reserpine antagonism), with no kinetic parameters reported for reserpine. |
| popPK | Scherman_1988 | irrelevant | 1 | 0 | Reserpine is only mentioned as an inhibitor tested in an in vitro binding assay; the reported values are intrinsic affinities for a receptor site, not quantitative toxicokinetic parameters. |
| PGx | Schuetz_1996 | not_relevant | 0 | 0 | The paper describes drug-induced up-regulation of CYP3A and P-glycoprotein proteins in cell lines, but does not study human genetic variants or report pharmacokinetic/pharmacodynamic parameter changes for reserpine. |
| popPK | Shafi_2000 | irrelevant | 2 | 2 | The paper measures the effect of reserpine on LDL/cholesterol kinetics and catecholamine levels, not reserpine's own toxicokinetic parameters (half-life, clearance, etc.). |
| popPK | Shafi_2000_2 | irrelevant | 2 | 0 | The paper studies reserpine's effect on LDL receptor expression and plasma lipids, reporting no quantitative toxicokinetic parameters for reserpine itself. |
| popPK | Shafi_2002 | irrelevant | 1 | 0 | The paper reports on lipid lowering and LDL clearance effects in rabbits, not reserpine pharmacokinetics. |
| popPK | Shahidi-Latham_2012 | irrelevant | 0 | 0 | The paper describes a mass spectrometric imaging technique and mentions a single dose/time point but reports no quantitative kinetic parameters (such as half-life, clearance, or partition coefficients). |
| popPK | Sharaf_2016 | irrelevant | 4 | 0 | The paper describes an analytical method and mentions its application to a pharmacokinetic study, but no specific quantitative kinetic parameters (such as half-life, clearance, or volume of distribution) for reserpine are reported in the provided text. |
| popPK | Shou_1997 | irrelevant | 0 | 0 | Reserpine is used only as a comparator in a triple therapy regimen to study antioxidant enzyme activity, with no kinetic parameters reported. |
| popPK | Shou_1997_2 | irrelevant | 0 | 0 | Reserpine is merely a component of a triple-drug treatment regimen evaluated for its downstream pharmacodynamic effects on renal function and enzymes; no pharmacokinetic parameters for reserpine are reported. |
| popPK | Slavnov_1981 | irrelevant | 0 | 0 | The kinetic parameters reported are for corticosteroids, not reserpine, which is used only as a treatment agent. |
| popPK | Smyth_1998 | irrelevant | 0 | 0 | The paper uses reserpine solely as a tool for chemical sympathectomy to block sympathetic nerve activity, and reports no quantitative kinetic parameters for reserpine itself. |
| popPK | Soldati_1993 | irrelevant | 0 | 0 | Reserpine is only mentioned as a pharmacological antagonist/pre-treatment in a study focused on ibopamine kinetics; no reserpine kinetic parameters are reported. |
| popPK | Solomon_1975 | irrelevant | 0 | 0 | Reserpine is used only as a pharmacological pretreatment tool to study mercury mechanisms, with no toxicokinetic parameters for reserpine reported. |
| popPK | Song_2013 | irrelevant | 0 | 0 | Reserpine is used solely as an internal standard for the LC-MS/MS analysis of leelamine, with no kinetic parameters reported for reserpine itself. |
| popPK | Sordelli_1979 | irrelevant | 0 | 0 | no_text gate: only 109 chars of text extracted (&lt; 400) |
| PGx | Spengler_2009 | not_relevant | 0 | 0 | The paper describes a methodology to test P-glycoprotein inhibition by reserpine, without investigating genetic variants or their effect on reserpine's pharmacokinetics or pharmacodynamics. |
| popPK | Stríbrnă_1976 | irrelevant | 0 | 0 | The paper studies sodium excretion rhythms in humans, mentioning reserpine only as one of several antihypertensive drugs used without reporting any kinetic parameters for it. |
| popPK | Sutherland_1966 | irrelevant | 0 | 0 | Reserpine is used as a pretreatment to study capillary permeability changes in isolated perfused rat hearts, but no toxicokinetic parameters for reserpine itself are reported or derived. |
| popPK | Szemerédi_2026 | irrelevant | 0 | 0 | The paper uses reserpine as an efflux pump inhibitor in an in vitro microbiology study and reports no quantitative toxicokinetic parameters (such as half-lives, clearance, or partition coefficients) for reserpine itself. |
| popPK | Tanaka_1986 | irrelevant | 1 | 0 | Reserpine is used merely as a pharmacological pretreatment to deplete catecholamines in order to study the mechanism of budralazine's effect on cerebral blood flow; no kinetic parameters for reserpine itself are reported. |
| popPK | Tang_1997 | irrelevant | 0 | 0 | Reserpine is used only as a co-administered drug in a triple therapy regimen to treat hypertension, and the study reports antioxidant enzyme activities, not kinetic parameters for reserpine. |
| popPK | Todorov_1996 | irrelevant | 1 | 0 | Reserpine is used only as a pharmacological tool to deplete noradrenaline, not as the subject of toxicokinetic characterization. |
| popPK | Tranova_2025 | irrelevant | 0 | 0 | Reserpine is used solely as a transport inhibitor in an in vitro assay for other substrates; no kinetic parameters for reserpine are reported. |
| PGx | Tsinkalovsky_2007 | not_relevant | 0 | 0 | The paper uses reserpine as a tool to inhibit ABCG2 in a cell biology assay, but does not study the pharmacokinetics or pharmacodynamics of reserpine itself in relation to human gene variants. |
| popPK | Ukai_1983 | irrelevant | 0 | 0 | Reserpine is used as a pharmacological agent to modulate mucociliary clearance, with no toxicokinetic parameters of reserpine itself reported. |
| PGx | Wang_2001 | not_relevant | 0 | 0 | The paper describes in vitro biochemical inhibition of P-glycoprotein and CYP3A4 by reserpine, without any reference to human gene variants, genotypes, or pharmacogenomic effects on PK/PD parameters. |
| PGx | Wang_2017 | not_relevant | 0 | 1 | The paper does not study reserpine as a therapeutic drug with pharmacokinetic/pharmacodynamic parameters; it uses reserpine as a chemical inhibitor of ABCG2 in a cell biology assay for glioma stem cells, and no gene variants affecting reserpine are analyzed. |
| popPK | Wang_2021 | relevant | 7 | 2 | The paper reports pharmacokinetic parameters for reserpine in rats, but the specific numeric values (t1/2, AUC, etc.) are not present in the provided evidence, likely residing in tables or supplementary data. |
| popPK | Watanabe_1990 | relevant | 5 | 0 | The paper reports partition coefficients (log Pcorr) for reserpine, which are kinetic parameters, but the specific numeric values are not included in the text snippet (only rankings are given). |
| popPK | Wei_2013 | irrelevant | 0 | 0 | Reserpine is used only as a pharmacological agent to induce hypothermia in rats, with no toxicokinetic parameters measured for reserpine itself. |
| popPK | Wejman_1983 | irrelevant | 0 | 0 | Reserpine is a co-treatment variable used to assess its effect on the clearance of a different substance (I125 hippurate), and no kinetic parameters for reserpine itself are reported. |
| popPK | Wieland_1981 | irrelevant | 0 | 0 | Reserpine is used only as a pharmacological blocker to study the mechanism of M-IBG localization, with no kinetic parameters reported for reserpine itself. |
| PGx | Wierdl_2003 | not_relevant | 1 | 2 | Reserpine is mentioned only as an ABCG2 inhibitor tool to overcome drug resistance, with no investigation of how genetic variants affect reserpine's own pharmacokinetics or pharmacodynamics. |
| popPK | Wils_1994 | irrelevant | 0 | 0 | Reserpine is mentioned only as a P-glycoprotein inhibitor/comparator, and no kinetic parameters for reserpine are reported. |
| popPK | Xiang_2015 | irrelevant | 0 | 0 | Reserpine is used solely as a pharmacological tool to induce a Pi deficiency syndrome model in rats; the kinetic data reported are for aristolochic acid-I, not reserpine. |
| PGx | Yaguchi_2018 | not_relevant | 0 | 0 | The paper uses reserpine as a pharmacological inhibitor of ABCG2 to study cell proliferation mechanisms, but does not report any pharmacogenomic (gene variant) effects on reserpine's own pharmacokinetics or pharmacodynamics. |
| PGx | Zhanel_2003 | not_relevant | 0 | 0 | The paper discusses bacterial resistance mechanisms in Streptococcus pneumoniae where reserpine is used as an efflux inhibitor, not as a drug administered to humans with pharmacogenomic interactions. |
| popPK | Zhang_2018 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for danofloxacin, not reserpine; reserpine is mentioned only as an efflux pump inhibitor in an in vitro assay. |
| popPK | Zhao_2020 | irrelevant | 0 | 0 | Reserpine is mentioned only as a BCRP inhibitor used to study the pharmacokinetics of phloretin, not as the subject of the kinetic study. |
| PGx | Zong_2019 | not_relevant | 0 | 0 | The paper investigates the effect of a TCM formula (Si-Ni-San) on CYP450 enzyme activity in a reserpine-induced depression model, not the effect of genetic variants on reserpine PK/PD. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Breserpine%5D&body=Drug%3A%20reserpine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_reserpine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-13 07:59 UTC</sub>
