<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Hydrocodone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Hydrocodone_KuKanich2013_reference&quot;,&quot;label&quot;:&quot;KuKanich_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_hydrocodone/Hydrocodone_KuKanich2013_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Hydrocodone_Melhem2013_reference&quot;,&quot;label&quot;:&quot;Melhem_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_hydrocodone/Hydrocodone_Melhem2013_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# Hydrocodone

- **generic name:** Hydrocodone
- **T3DB:** [T3D2941](http://www.t3db.ca/toxins/T3D2941) · **DrugBank:** [DB00956](https://go.drugbank.com/drugs/DB00956) · **PubChem:** [CID 5284569](https://pubchem.ncbi.nlm.nih.gov/compound/5284569)
- **groups:** approved, illicit, investigational

## About

Hydrocodone is only found in individuals that have used or taken this drug. It is a narcotic analgesic related to codeine, but more potent and more addicting by weight. It is used also as cough suppressant. [PubChem]Hydrocodone acts as a weak agonist at OP1, OP2, and OP3 opiate receptors within the central nervous system (CNS). …

- **Category:** Drug, Synthetic Toxin
- **Route of exposure:** oral. Well absorbed from the gastrointestinal tract.
- **Sources and uses:** For relief of moderate to moderately severe pain. Also used for the symptomatic relief of nonproductive cough, alone or in combination with other antitussives or expectorants.
- **Mechanism of toxicity:** Hydrocodone acts as a weak agonist at OP1, OP2, and OP3 opiate receptors within the central nervous system (CNS). Hydrocodone primarily affects OP3 receptors, which are coupled with G-protein receptors and function as modulators, both positive and negative, of synaptic transmission via G-proteins that activate effector proteins. …
- **Health effects:** Medical problems can include congested lungs, liver disease, tetanus, infection of the heart valves, skin abscesses, anemia and pneumonia. Death can occur from overdose.
- **Acute toxicity:** LD50: 85.7mg/kg (Parenteral-subcutaneous, Mouse)
- **Treatment:** Immediate treatment includes support of cardiorespiratory function and measures to reduce drug absorption. …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2941">T3DB T3D2941</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 125-29-1 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:5779">ChEBI 5779</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| Hydrocodone | parent | 299.37 | C18H21NO3 | PubChem | [5284569](https://pubchem.ncbi.nlm.nih.gov/compound/5284569) | KuKanich_2013, Melhem_2013, Ni_2024 |
| Hydromorphone | metabolite | — (mass units only) | — | — | — | — |

## Start here

> **KuKanich_2013_reference** — <span class="pk-badge pk-badge--blue">Simulated</span> healthy Greyhound dogs, n = 6. [Run it in the simulator](drugs/toxin_hydrocodone/Hydrocodone_KuKanich2013_reference.md?tab=Simulation) · [record](drugs/toxin_hydrocodone/Hydrocodone_KuKanich2013_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="dog" data-age="adult" data-status="Simulated" data-sim="yes"></span><span class="pk-badge pk-badge--blue">Simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [KuKanich_2013_reference](drugs/toxin_hydrocodone/Hydrocodone_KuKanich2013_reference.md) | ▶ model + simulator | retention, 1 pool | 3 | KuKanich B et al., Pharmacokinetics of hydrocodone and hyd…, Veterinary journal (London,… (2013) | [10.1016/j.tvjl.2012.09.008](https://doi.org/10.1016/j.tvjl.2012.09.008) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: unreported model parameter default(s): ka</sub> | [Melhem_2013_reference](drugs/toxin_hydrocodone/Hydrocodone_Melhem2013_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Melhem MR et al., Population pharmacokinetic analysis for…, Clinical pharmacokinetics (2013) | [10.1007/s40262-013-0081-6](https://doi.org/10.1007/s40262-013-0081-6) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no kinetic quantity — no half-life, rate constant, volume or clearance (exposur…</sub> | [Ni_2024_reference](drugs/toxin_hydrocodone/Hydrocodone_Ni2024_reference.md) | — | 1-compartment (no model) | 2 (+3 cov.) | Ni L et al., Evaluating Drug Interactions between Ri…, Pharmaceuticals (Basel, Swi… (2024) | [10.3390/ph17050640](https://doi.org/10.3390/ph17050640) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP2D6** | `Q305` · kfm | metabolism | [Armstrong_2025](drugs/toxin_hydrocodone/pgx_Armstrong_2025_CYP2D6_Q305.md) | Armstrong SJ et al., Precision medicine for Defence?, BMJ military health (2025) | [10.1136/military-2024-002721](https://doi.org/10.1136/military-2024-002721) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=hydrocodone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` metabolism/substrate | DrugBank actor |
| metabolism | liver | `CYP2B6` substrate, `CYP2C19` substrate, `CYP2D6` metabolism/substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: OPRD1 (target), OPRM1 (target), SIGMAR1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-15 10:16 | 22:51 | 2/1/0 | 0/0/0 | 0/0/1 | 596,864/63,224 | ollama / glm-5.3-flash | 26 | 4/21 | 26/0 | 0 |

## Coverage

- **PubMed hits:** 912 matched, 173 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 1  ·  needs review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `KuKanich_2013.pdf` | KuKanich B et al., Pharmacokinetics of hydrocodone and hyd…, Veterinary journal (London,… (2013) | popPK | 10 | [10.1016/j.tvjl.2012.09.008](https://doi.org/10.1016/j.tvjl.2012.09.008) | [23098635](https://pubmed.ncbi.nlm.nih.gov/23098635) | Numeric PK parameters (Cmax, Tmax, terminal half-life) for hydrocodone and its metabolite hydromorphone are reported directly in the abstract. |
| `Melhem_2013.pdf` | Melhem MR et al., Population pharmacokinetic analysis for…, Clinical pharmacokinetics (2013) | popPK | 10 | [10.1007/s40262-013-0081-6](https://doi.org/10.1007/s40262-013-0081-6) | [23719682](https://pubmed.ncbi.nlm.nih.gov/23719682) | Population PK model for hydrocodone with numeric parameters (V 714 L, CL 64.4 L/h) directly reported in the abstract. |
| `Cua_2023.pdf` | Cua A et al., Estimates of Drug Metabolism Using Drug…, Annals of clinical and labo… (2023) | popPK | 6 |  | [37437938](https://pubmed.ncbi.nlm.nih.gov/37437938) | The paper develops urine-based kinetic estimates (metabolic ratios, saturating dosages, rate orders) for hydrocodone as subject substance, but the evidence shows no numeric parameter values, only the method and qualitative findings. |

<sub>queue written 2026-11-15 10:08 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahn_1991 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for ibuprofen enantiomers in dogs, not hydrocodone. |
| PGx | Al_2026 | not_relevant | 5 | 3 | Reports acceptance of PGx recommendations (including opioids/CYP2D6), but no PK/PD parameter effect of hydrocodone genotype is reported. |
| popPK | Albert_1984 | irrelevant | 0 | 0 | The paper reports pharmacokinetics of ibuprofen, not hydrocodone, which appears nowhere in the evidence. |
| popPK | Albert_1984_2 | irrelevant | 0 | 0 | The paper reports pharmacokinetics of ibuprofen, not hydrocodone, which is absent entirely. |
| popPK | Allegaert_2008 | irrelevant | 0 | 0 | Hydrocodone is not studied; the paper covers tramadol, paracetamol, ibuprofen and propofol in neonates, with no hydrocodone kinetic parameters. |
| popPK | Anderson_2019 | irrelevant | 0 | 0 | The paper reports kinetic parameters for ibuprofen, not hydrocodone; hydrocodone does not appear at all. |
| popPK | Antal_1986 | irrelevant | 0 | 0 | Paper concerns ibuprofen and its metabolites; hydrocodone does not appear, no kinetic parameters for it. |
| popPK | Atkinson_2015 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters (Cmax, AUC, t½, bioavailability) for ibuprofen and paracetamol only — hydrocodone does not appear as a study substance. |
| popPK | Bachmann_1986 | irrelevant | 0 | 0 | The kinetic parameters (clearance, volume of distribution) belong to phenytoin with ibuprofen as the interaction drug; hydrocodone does not appear at all. |
| popPK | Barkin_2001 | irrelevant | 2 | 0 | A narrative review on combination analgesics mentioning hydrocodone only qualitatively, with no numeric kinetic parameters provided. |
| PGx | Bell_2015 | not_relevant | 3 | 1 | Review abstract explicitly states evidence for hydrocodone genotype–response association is limited and provides no PK/PD effect data. |
| popPK | Birbeck_2024 | irrelevant | 0 | 0 | This is a clinical trial of acetaminophen/ibuprofen in pediatric malaria; hydrocodone is not mentioned and no kinetic parameters of hydrocodone are present. |
| popPK | Boast_2026 | irrelevant | 0 | 0 | The paper reports PK parameters for flucloxacillin (and ibuprofen as covariate), not hydrocodone; hydrocodone is absent entirely. |
| PGx | Boyle_2020 | not_relevant | 3 | 2 | Study compares CYP2D6 phenotype prevalence in overdose decedents; no fitted effect of genotype on hydrocodone PK/PD parameters. |
| popPK | Brazier_2017 | irrelevant | 0 | 0 | The paper reports pharmacokinetics only for cromolyn and ibuprofen, not for hydrocodone, which is never mentioned as the subject substance. |
| popPK | Brune_1986 | irrelevant | 0 | 0 | This is an abstract about NSAID/paracetamol pharmacokinetics; hydrocodone is not mentioned and no numeric parameters are present. |
| PGx | Cavallari_2022 | not_relevant | 0 | 0 |  |
| PGx | Chanfreau-Coffinier_2022 | not_relevant | 6 | 2 | Paper reports predicted CYP2D6 phenotype prevalence and interaction risk categories only, without actual measured PK/PD parameter changes for hydrocodone. |
| popPK | Chen_1994 | irrelevant | 0 | 0 | The paper concerns ibuprofen pharmacokinetics; hydrocodone does not appear as the subject substance. |
| popPK | Chen_2025 | irrelevant | 0 | 0 | The paper's subject substance is ibuprofen, not hydrocodone; no hydrocodone parameters appear. |
| popPK | Chryssafidis_2022 | irrelevant | 0 | 0 | The paper models oral pharmacokinetics of paracetamol, ibuprofen, almotriptan, cyclosporine and niraparib; hydrocodone is not a subject substance and no hydrocodone parameters appear. |
| PGx | Crews_2021 | not_relevant | 0 | 0 |  |
| popPK | Cristea_2019 | irrelevant | 0 | 0 | The paper reports vancomycin (not hydrocodone) PK parameters; hydrocodone never appears, and detailed values reside in supplementary Table S1. |
| popPK | Cristofoletti_2019 | irrelevant | 0 | 0 | The paper concerns ibuprofen, not hydrocodone; hydrocodone is not the subject substance and no kinetic parameters for it appear. |
| popPK | Cua_2023 | relevant | 6 | 2 | The paper develops urine-based kinetic estimates (metabolic ratios, saturating dosages, rate orders) for hydrocodone as subject substance, but the evidence shows no numeric parameter values, only the method and qualitative findings. |
| PGx | Cua_2025 | not_relevant | 3 | 2 | Reports drug-drug interactions on hydrocodone metabolic ratio, not gene variant/genotype effects on PK/PD. |
| popPK | Davies_1998 | irrelevant | 0 | 0 | The paper is a review of ibuprofen's pharmacokinetics; hydrocodone does not appear as the subject substance at all. |
| popPK | Diven_1995 | irrelevant | 0 | 0 | Study is about ibuprofen/ampicillin efficacy in chinchilla otitis media; no hydrocodone kinetic parameters appear. |
| popPK | Escudero-Saiz_2026 | irrelevant | 0 | 0 | Hydrocodone does not appear at all; the kinetic parameters (clearance, reduction ratios) concern ibuprofen, indoxyl sulphate and p-cresyl sulphate in hemodialysis patients, so no hydrocodone toxicokinetics exist here. |
| popPK | Evans_1996 | irrelevant | 0 | 0 | Review of profen NSAIDs (ibuprofen, naproxen etc.); hydrocodone plays no role and no kinetic parameter of hydrocodone appears. |
| popPK | Fink_1984 | irrelevant | 0 | 0 | No hydrocodone data at all; the paper studies NSAID effects on renal function in septic dogs with no kinetic parameters for hydrocodone. |
| popPK | Flint_2018 | irrelevant | 0 | 0 | This paper reports PK parameters and simulations for ibuprofen, not hydrocodone, which appears only in a reference citation. |
| popPK | Furey_1993 | irrelevant | 0 | 0 | Paper is about ibuprofen, aspirin and acetaminophen renovascular effects; hydrocodone does not appear at all. |
| popPK | Gao_2022 | irrelevant | 0 | 0 | The paper studies valproic acid and ibuprofen interaction; hydrocodone does not appear at all, and there are no hydrocodone kinetic parameters. |
| popPK | Gaspari_1987 | irrelevant | 0 | 0 | The paper reports aspirin (ASA) and salicylic acid pharmacokinetics in uremic patients; hydrocodone does not appear at all. |
| popPK | Geisslinger_1993 | irrelevant | 0 | 0 | The paper reports stereoselective pharmacokinetics of ibuprofen in rheumatoid arthritis patients; hydrocodone does not appear as the subject substance at all. |
| popPK | Gola_2013 | irrelevant | 0 | 0 | All kinetic parameters (T½, MRT, clearance) pertain to ibuprofen, not hydrocodone. |
| popPK | Gould_2015 | irrelevant | 3 | 0 | A narrative review, abstract alone mentions hydrocodone pharmacokinetics but no numeric values are present in the evidence. |
| PGx | Graziani_2016 | not_relevant | 3 | 1 | Only suggests future study of gender/CYP3A4/CYP2D6 in hydrocodone PK/PD; no reported pharmacogenomic effect or data. |
| PGx | Grimsrud_2022 | not_relevant | 3 | 1 | Hydrocodone only listed as a drug relying on genotyped pathways; no PK/PD parameter effect reported. |
| popPK | Gugler_1990 | irrelevant | 0 | 0 | Review of antacid interactions with many drugs; hydrocodone is not mentioned and no kinetic parameters for it appear. |
| PGx | Hamilton_2020 | not_relevant | 3 | 2 | Reports gene variant frequencies and grouped clinical outcomes, but no genotype-specific PK/PD parameter effect for hydrocodone is quantified. |
| popPK | Hang_2024 | irrelevant | 0 | 0 | Hydrocodone appears only as a clinical comparator in efficacy trials with no kinetic parameters reported. |
| popPK | Hanif_2024 | irrelevant | 0 | 0 | The paper concerns dexibuprofen pharmacokinetics; hydrocodone does not appear as a study substance and no hydrocodone kinetic parameters are reported. |
| popPK | Harder_2021 | irrelevant | 0 | 0 | The paper concerns RSV and ibuprofen in cotton rats with no hydrocodone kinetic parameters of any kind. |
| popPK | Harris_2019 | irrelevant | 0 | 0 | This is an epidemiological outcomes study of long-term opioid use with no kinetic parameters (no half-life, clearance, Vd, or other TK values) for hydrocodone. |
| popPK | Helmy_2024 | irrelevant | 0 | 0 | The paper concerns paracetamol and ibuprofen pharmacokinetics; hydrocodone does not appear in any capacity. |
| popPK | Hoang_2024 | irrelevant | 0 | 0 | Hydrocodone never appears; the paper studies ibuprofen, halofantrine and albumin in rats, so no kinetic parameters for the subject substance exist. |
| popPK | Hollingworth_1993 | irrelevant | 0 | 0 | Hydrocodone is not mentioned; paper covers NSAIDs in paediatric arthritis with no kinetic parameters for it. |
| popPK | Hua_2023 | irrelevant | 0 | 0 | The paper reports PK parameters for dexibuprofen/ibuprofen only; hydrocodone is not the subject substance. |
| popPK | Idkaidek_2011 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for ibuprofen, not hydrocodone; hydrocodone does not appear as the subject substance. |
| popPK | Ikuta_2017 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for ibuprofen, not hydrocodone, so no hydrocodone kinetic values exist here. |
| popPK | Kammer_2019 | irrelevant | 1 | 0 | This is an analytical assay development paper; hydrocodone is merely an analyte measured in urine, with no kinetic parameters and any PK tracking only as future potential. |
| PGx | Kapil_2016 | not_relevant | 0 | 0 | This is a drug-drug interaction study (paroxetine inhibiting CYP2D6), not a pharmacogenomic variant/genotype/phenotype effect on hydrocodone PK/PD. |
| popPK | Khan_2024 | irrelevant | 0 | 0 | The paper concerns ibuprofen and rabeprazole tablets; hydrocodone does not appear at all. |
| PGx | Kleine-Brueggeney_2010 | not_relevant | 3 | 0 | General narrative mention that CYP2D6 polymorphisms influence hydrocodone metabolism, with no PK/PD parameters or effect sizes reported. |
| popPK | Koller_2020 | irrelevant | 0 | 0 | The paper concerns aripiprazole and prolactin; hydrocodone does not appear as subject substance and no hydrocodone kinetic parameters are reported. |
| popPK | Kopp_2016 | irrelevant | 0 | 0 | This is a clinical trial protocol for ibuprofen in spinal cord injury; hydrocodone does not appear at all, and no kinetic parameters for it are present. |
| popPK | Kowthavarapu_2024 | irrelevant | 0 | 0 | The paper is a tutorial about ibuprofen, a different substance, with no hydrocodone kinetic parameters. |
| popPK | Krasniqi_2016 | irrelevant | 0 | 0 | This is a review of CYP2C8/2C9 effects on ibuprofen and diclofenac kinetics; hydrocodone is never mentioned and no parameter belongs to it. |
| popPK | Krudsood_2010 | irrelevant | 0 | 0 | The paper concerns IV ibuprofen in malaria fever; hydrocodone does not appear at all and no kinetic parameters for it are reported. |
| popPK | Kvapilová_2026 | irrelevant | 0 | 0 | The paper reports ibuprofen pharmacokinetics; hydrocodone nowhere appears, so no hydrocodone kinetic parameters exist. |
| popPK | Lawson_2022 | irrelevant | 0 | 0 | The paper concerns ibuprofen and curcumin delivery via a MOF; hydrocodone is not mentioned at all. |
| popPK | Lewis_2018 | irrelevant | 0 | 0 | The paper is a review about PDA genetics and pharmacogenetics of ibuprofen/paracetamol-type therapies with no hydrocodone kinetic parameters. |
| popPK | Li_2016 | irrelevant | 0 | 0 | The paper concerns ibuprofen in rats; hydrocodone is absent entirely, so no toxicokinetic parameters for the subject substance exist. |
| popPK | Llewelyn_2018 | irrelevant | 0 | 0 | Hydrocodone is not studied; the paper covers percutaneous absorption of benzoic acid, caffeine, and ibuprofen in tree frog skin with no kinetic parameters for hydrocodone. |
| popPK | Lockwood_1983 | irrelevant | 0 | 0 | The paper's substance is ibuprofen, not hydrocodone; no hydrocodone kinetic parameters appear. |
| PGx | Madadi_2012 | not_relevant | 5 | 2 | Discussion of hypothesized CYP2D6 effects on hydrocodone metabolism without any quantitative PK/PD findings. |
| popPK | Manchikanti_2015 | irrelevant | 3 | 1 | A narrative review mentioning hydrocodone pharmacokinetics, but no numeric kinetic parameter values appear in the evidence provided. |
| PGx | Massmann_2026 | not_relevant | 3 | 0 | Review abstract only; no specific hydrocodone PGx effect on PK/PD parameters reported. |
| popPK | Mayer_1990 | irrelevant | 0 | 0 | A review on 2-arylpropionate (profen) chiral inversion with no hydrocodone data or parameters mentioned. |
| PGx | Meyer_2011 | not_relevant | 4 | 2 | Review abstract only; no specific PGx effect sizes on hydrocodone PK/PD parameters are reported. |
| PGx | Meyer_2019 | not_relevant | 3 | 1 | Hydrocodone is reported not to interact with OCT1, so no pharmacogenomic effect on its PK/PD parameters is demonstrated. |
| PGx | Mikus_1991 | not_relevant | 3 | 2 | Only speculates that hydrocodone O-demethylation "might" be under CYP2D6 genetic control; no actual PK/PD data for hydrocodone. |
| popPK | Minocha_1986 | irrelevant | 0 | 0 | The pharmacokinetic parameters reported are for ethanol (with ibuprofen), not hydrocodone, which does not appear at all. |
| PGx | Nahid_2025 | not_relevant | 4 | 5 | Outcome is pain-related ED visits (clinical utilization), not a hydrocodone PK/PD parameter like concentration, clearance, or analgesic measure. |
| popPK | Nakamura_2024 | irrelevant | 0 | 0 | Hydrocodone is not mentioned; the paper evaluates AGP-knockout mouse pharmacokinetics of imatinib, disopyramide, and ibuprofen, with no hydrocodone parameters. |
| PGx | Nimmagadda_2020 | not_relevant | 2 | 1 | Retrospective chart review measuring prevalence of co-prescribed CYP inhibitors/inducers, not gene variants' actual effects on hydrocodone PK/PD; no variant-based effect measured or quantified. |
| popPK | Ouyang_2026 | irrelevant | 0 | 0 | This is a clinical trial of ibuprofen analgesia for IUD insertion pain; hydrocodone does not appear as a subject substance and no kinetic parameters of any kind are reported. |
| PGx | Overholser_2011 | not_relevant | 0 | 0 | Abstract covers pharmacokinetic drug-drug interactions only, with no gene variant/genotype effects on hydrocodone PK/PD reported. |
| popPK | Pacifici_2012 | irrelevant | 0 | 0 | The paper reports kinetics of furosemide and bumetanide, not hydrocodone, which does not appear even as a comparator. |
| popPK | Pacifici_2014 | irrelevant | 0 | 0 | The paper reviews pharmacokinetics of ibuprofen and indomethacin; hydrocodone does not appear. |
| PGx | Parthipan_2019 | not_relevant | 2 | 5 | Effect is SSRI (drug-drug interaction via CYP2D6 inhibition) on pain scores, not a gene variant/genotype/phenotype effect on hydrocodone PK or PD parameters. |
| PGx | Patel_2021 | not_relevant | 5 | 3 | Study only estimates prevalence of actionable CYP2D6 variants and expected altered metabolism of hydrocodone; no fitted effect sizes on actual PK/PD parameters are reported. |
| PGx | Peiró_2018 | not_relevant | 3 | 1 | Abstract-level review mention that CYP2D6 influences hydrocodone metabolism, with no specific PK/PD parameter or effect size reported. |
| PGx | Pesce_2025 | not_relevant | 2 | 1 | Abstract mentions metabolic ratios and genetic variants only as possible confounders; no gene-specific effect on hydrocodone PK/PD reported. |
| popPK | Petito_2018 | irrelevant | 0 | 0 | A review of in-silico PK prediction methods with no hydrocodone-specific parameters; hydrocodone does not even appear in the evidence. |
| popPK | Phleps_2001 | irrelevant | 0 | 0 | The paper concerns dexibuprofen clinical efficacy and tolerability, with hydrocodone not appearing as a subject substance and no kinetic parameters present. |
| popPK | Piirainen_2018 | irrelevant | 0 | 0 | This is an ibuprofen pharmacokinetic study; hydrocodone does not appear as a subject substance, and no hydrocodone kinetic parameters are reported. |
| PGx | Polepally_2016 | not_relevant | 0 | 0 | Hydrocodone PK changes are drug–drug interactions with the 3D regimen, not pharmacogenomic (no gene variant/genotype/phenotype effects reported). |
| popPK | Pons_1993 | irrelevant | 0 | 0 | A review of NSAID pharmacokinetics with no hydrocodone data or numeric parameters of any kind. |
| popPK | Ragheb_1987 | irrelevant | 0 | 0 | The paper concerns lithium–ibuprofen interaction kinetics; hydrocodone does not appear at all. |
| popPK | Ricci_2024 | irrelevant | 0 | 0 | Hydrocodone is only mentioned as a prescribed analgesic in a pemphigus vulgaris case report; no kinetic parameters for it are reported. |
| PGx | Ritchey_2023 | not_relevant | 2 | 3 | This is a claims-based co-prescribing descriptive study; no gene variant/genotype/phenotype effect on hydrocodone PK/PD parameters is reported. |
| popPK | Schoenfeld_1992 | irrelevant | 0 | 0 | This review covers aspirin/NSAID pharmacokinetics in pregnancy; hydrocodone is not the subject substance and no kinetic parameters for it appear. |
| popPK | Schweitzer_2011 | irrelevant | 0 | 0 | Case report of hearing loss after polysubstance overdose with no hydrocodone kinetic parameters reported. |
| PGx | Schweitzer_2011 | not_relevant | 0 | 0 | Case report of hearing loss after polysubstance abuse with only speculative mention of genetic polymorphisms; no reported gene-PK/PD effect for hydrocodone. |
| popPK | Shen_2016 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for ibuprofen, not hydrocodone, so no hydrocodone kinetic values are present. |
| PGx | Skaar_2024 | not_relevant | 3 | 2 | Trial design paper; discusses CYP2D6 phenotype expectations for hydrocodone efficacy but reports no PK/PD parameter results. |
| popPK | Small_1989 | irrelevant | 0 | 0 | The paper is a review of diclofenac sodium, a different substance; hydrocodone does not appear at all. |
| popPK | Smith_2012 | irrelevant | 0 | 0 | The paper reports pharmacokinetics of ibuprofen, not hydrocodone; hydrocodone does not appear at all. |
| popPK | Sordelli_1985 | irrelevant | 0 | 0 | The paper concerns ibuprofen effects on pulmonary inflammation in mice; hydrocodone is not mentioned and no hydrocodone kinetic parameters are reported. |
| PGx | Stamer_2010 | not_relevant | 3 | 1 | Review mentions CYP2D6 influences hydrocodone metabolism only qualitatively, with no PK/PD effect sizes or data. |
| popPK | Su_2023 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for ibuprofen, not hydrocodone; hydrocodone does not appear as the subject substance. |
| popPK | Sun_2023 | irrelevant | 0 | 0 | The paper concerns acetaminophen, aspirin, ibuprofen and naproxen; hydrocodone is not mentioned and no kinetic parameters for it appear. |
| PGx | Susce_2006 | not_relevant | 6 | 3 | Case report of CYP2D6 PM with subjective hydrocodone response; no quantitative PK/PD parameter or fitted effect size reported. |
| popPK | Theken_2019 | irrelevant | 0 | 0 | Hydrocodone appears only as a component of rescue medication; the paper's kinetic parameters concern ibuprofen, not hydrocodone. |
| popPK | Tsagogiorgas_2012 | irrelevant | 0 | 0 | The paper reports pharmacokinetics of ibuprofen in rabbits, not hydrocodone; hydrocodone does not appear as the subject substance. |
| popPK | Van_2001 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for ibuprofen, not hydrocodone, which only appears in the title/context as a different substance. |
| popPK | Vashistha_2024 | irrelevant | 0 | 0 | The paper is a review about ibuprofen, with no kinetic parameters for hydrocodone. |
| popPK | Vieux_2011 | irrelevant | 0 | 0 | Hydrocodone is not mentioned; the study concerns nephrotoxicity of ibuprofen and other drugs in preterm infants with no kinetic parameters for hydrocodone. |
| popPK | Wen_2022 | irrelevant | 1 | 0 | A survey of institutional equianalgesic dosing tools; PK parameters (T1/2, Vd, Cl) are only said to come from FDA labels, with no hydrocodone numeric values presented in the evidence — no original kinetics. |
| popPK | Wening_2017 | irrelevant | 0 | 0 | Hydrocodone is only a formulation subject of in vitro abuse-deterrent tests; the in vivo pharmacokinetics were measured with a different opioid model compound, so no kinetic parameters for hydrocodone itself are reported. |
| popPK | Whitt_2024 | irrelevant | 2 | 2 | A case report with post-mortem concentrations and qualitative half-life discussion, but no measured kinetic parameters (no clearance, Vd, or numeric half-life) for hydrocodone. |
| PGx | Whitt_2024 | not_relevant | 3 | 0 | Drug-drug interaction (diphenhydramine inhibiting CYP2D6), not a genetic variant/genotype effect on hydrocodone PK/PD. |
| popPK | Wilkinson_2012 | irrelevant | 0 | 0 | This paper concerns ibuprofen in Alzheimer's disease mice, with no hydrocodone kinetic parameters of any kind. |
| popPK | Witten_1987 | irrelevant | 0 | 0 | No hydrocodone is mentioned anywhere; the paper is about cigarette smoke exposure, ibuprofen, and 99mTcDTPA lung clearance in rabbits, with no kinetic parameters for hydrocodone. |
| popPK | Wong_2015 | irrelevant | 0 | 0 | The paper concerns phospho-NSAIDs (phospho-sulindac) in mice; hydrocodone is absent entirely, so no kinetic parameters for the subject substance exist. |
| popPK | Xiao_2023 | irrelevant | 0 | 0 | Hydrocodone appears only as a DDI co-medication in an epidemiological outcome study with no kinetic parameters. |
| PGx | Yee_2014 | not_relevant | 3 | 3 | Drug is codeine; hydrocodone is only a metabolite, CYP2D6 inhibition (not genotype) affects metabolite mole fractions with no hydrocodone-specific PK/PD effect quantified. |
| popPK | Ying_2026 | irrelevant | 0 | 0 | The study concerns ibuprofen, not hydrocodone; hydrocodone appears nowhere as subject substance. |
| popPK | Yuan_2023 | irrelevant | 0 | 0 | The substance is ibuprofen, not hydrocodone; parameters belong to a different substance. |
| popPK | Zempsky_2023 | irrelevant | 0 | 0 | Review of paracetamol and ibuprofen in children; hydrocodone is not a subject and its kinetic parameters do not appear. |
| popPK | Zhao_2021 | relevant | 5 | 2 | Hydrocodone PK metrics (Cmax, Tmax, AUC, partial AUCs) are analyzed, but only qualitative references (e.g., Tmax 3h vs 1h) and table headers appear; actual numeric values largely reside in figures/tables not fully provided. |
| popPK | Zheng_2008 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for ibuprofen enantiomers, not hydrocodone; hydrocodone does not appear as a subject substance. |
| popPK | Zhou_2025 | irrelevant | 0 | 0 | The paper concerns FAP-targeting radioligands, not hydrocodone; no hydrocodone kinetic parameters appear. |
| PGx | Zigler_2026 | not_relevant | 3 | 2 | Hydrocodone only appears as a prescription count; no gene-linked PK/PD parameter effects are reported, only estimated metabolizer frequencies. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bhydrocodone%5D&body=Drug%3A%20hydrocodone%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_hydrocodone/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-15 10:09 UTC</sub>
