<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R02A&quot;,&quot;href&quot;:&quot;atc/R02A.md&quot;},{&quot;label&quot;:&quot;ambroxol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ambroxol_Vergin1985_reference&quot;,&quot;label&quot;:&quot;Vergin_1985_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ambroxol/Ambroxol_Vergin1985_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# ambroxol

- **generic name:** ambroxol
- **ATC codes:** `R02AD05`, `R03CC63`, `R05CB06`
- **DrugBank:** [DB06742](https://go.drugbank.com/drugs/DB06742) · **PubChem:** [CID 2132](https://pubchem.ncbi.nlm.nih.gov/compound/2132)
- **molar mass:** 378.108 g/mol (C13H18Br2N2O) — DrugBank
- **groups:** approved, investigational

## About

Ambroxol is a mucolytic and mucokinetic medication used to treat respiratory conditions involving thick or excessive mucus, such as chronic obstructive pulmonary disease. It is given by mouth or by inhalation, with common oral forms including syrup and tablets. It is an approved drug available for medical use.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q221637](https://www.wikidata.org/wiki/Q221637), [Wikipedia](https://en.wikipedia.org/wiki/Ambroxol?oldid=1369610425) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ambroxol | parent | 378.108 | C13H18Br2N2O | DrugBank | [2132](https://pubchem.ncbi.nlm.nih.gov/compound/2132) | Vergin_1985 |

## Start here

> **Vergin_1985_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> healthy volunteers, n = 12. [Run it in the simulator](drugs/drug_ambroxol/Ambroxol_Vergin1985_reference.md?tab=Simulation) · [record](drugs/drug_ambroxol/Ambroxol_Vergin1985_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: unreported model parameter default(s): ka</sub> | [Vergin_1985_reference](drugs/drug_ambroxol/Ambroxol_Vergin1985_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Vergin H et al., [The pharmacokinetics and bioequivalenc…, Arzneimittel-Forschung (1985) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Bocci_2020_CPE](drugs/drug_ambroxol/pd_Bocci_2020_CPE.md) | SARS-CoV-2 cytopathic effect (percent protection from CPE) ← ambroxol · inhibition effect | — | Bocci G et al., Virtual and In Vitro Antiviral Screenin…, ACS pharmacology & translat… (2020) | [10.1021/acsptsci.0c00131](https://doi.org/10.1021/acsptsci.0c00131) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 0.50).">human + animal</span> | [Hefner_2025_TTX_S_Na_block](drugs/drug_ambroxol/pd_Hefner_2025_TTX_S_Na_block.md) | tonic inhibition of TTX-sensitive Na+ channels ← ambroxol · direct sigmoid Emax (Hill) effect | — | Hefner S et al., Nav1.8, TRPV1 and TRPA1 as possible tar…, The journal of pain (2025) | [10.1016/j.jpain.2025.105563](https://doi.org/10.1016/j.jpain.2025.105563) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 0.50).">human + animal</span> | [Hefner_2025_hNav1_8_tonic_block](drugs/drug_ambroxol/pd_Hefner_2025_hNav1_8_tonic_block.md) | tonic inhibition of hNav1.8 ← ambroxol · direct sigmoid Emax (Hill) effect | — | Hefner S et al., Nav1.8, TRPV1 and TRPA1 as possible tar…, The journal of pain (2025) | [10.1016/j.jpain.2025.105563](https://doi.org/10.1016/j.jpain.2025.105563) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 0.50).">human + animal</span> | [Hefner_2025_hTRPA1_activation](drugs/drug_ambroxol/pd_Hefner_2025_hTRPA1_activation.md) | activation of hTRPA1 ← ambroxol · direct sigmoid Emax (Hill) effect | — | Hefner S et al., Nav1.8, TRPV1 and TRPA1 as possible tar…, The journal of pain (2025) | [10.1016/j.jpain.2025.105563](https://doi.org/10.1016/j.jpain.2025.105563) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 0.50).">human + animal</span> | [Hefner_2025_hTRPA1_current_block](drugs/drug_ambroxol/pd_Hefner_2025_hTRPA1_current_block.md) | inhibition of mustard oil- or carvacrol-induced currents on hTRPA1 ← ambroxol · direct sigmoid Emax (Hill) effect | — | Hefner S et al., Nav1.8, TRPV1 and TRPA1 as possible tar…, The journal of pain (2025) | [10.1016/j.jpain.2025.105563](https://doi.org/10.1016/j.jpain.2025.105563) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 0.50).">human + animal</span> | [Hefner_2025_hTRPV1_activation](drugs/drug_ambroxol/pd_Hefner_2025_hTRPV1_activation.md) | activation of hTRPV1 ← ambroxol · direct sigmoid Emax (Hill) effect | — | Hefner S et al., Nav1.8, TRPV1 and TRPA1 as possible tar…, The journal of pain (2025) | [10.1016/j.jpain.2025.105563](https://doi.org/10.1016/j.jpain.2025.105563) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 0.50).">human + animal</span> | [Hefner_2025_hTRPV1_capsaicin_current_block](drugs/drug_ambroxol/pd_Hefner_2025_hTRPV1_capsaicin_current_block.md) | inhibition of capsaicin-induced currents on hTRPV1 ← ambroxol · direct sigmoid Emax (Hill) effect | — | Hefner S et al., Nav1.8, TRPV1 and TRPA1 as possible tar…, The journal of pain (2025) | [10.1016/j.jpain.2025.105563](https://doi.org/10.1016/j.jpain.2025.105563) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 0.50).">human + animal</span> | [Hefner_2025_rNav1_8_tonic_block](drugs/drug_ambroxol/pd_Hefner_2025_rNav1_8_tonic_block.md) | tonic inhibition of rNav1.8 ← ambroxol · direct sigmoid Emax (Hill) effect | — | Hefner S et al., Nav1.8, TRPV1 and TRPA1 as possible tar…, The journal of pain (2025) | [10.1016/j.jpain.2025.105563](https://doi.org/10.1016/j.jpain.2025.105563) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **GBA** | `Q320` · Emax | target | [Lipiński_2022](drugs/drug_ambroxol/pgx_Lipi_ski_2022_GBA_Q320.md) | Lipiński P et al., [Pharmacological chaperone therapy for…, Postepy biochemii (2022) | [10.18388/pb.2021_451](https://doi.org/10.18388/pb.2021_451) |

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
| 2026-11-23 17:37 | 0:03 | 1/0/0 | 8/0/0 | 0/0/1 | 4,518/162 | einfracz / qwen3.8-27b | 23 | 3/15 | 22/1 | 0 |

## Coverage

- **PubMed hits:** 68 matched, 63 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zhou_2021.pdf` | Zhou H et al., A simple LC-MS/MS method for simultaneo…, Journal of chromatography.… (2021) | popPK | 9 | [10.1016/j.jchromb.2021.122766](https://doi.org/10.1016/j.jchromb.2021.122766) | [34247102](https://pubmed.ncbi.nlm.nih.gov/34247102) | The study is a pharmacokinetic investigation of ambroxol in rats, but the evidence provided contains only the abstract and method details, lacking the specific numeric PK parameter values (CL, V, etc.). |

<sub>queue written 2026-11-23 17:37 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Assmus_2022 | irrelevant | 0 | 0 | Ambroxol is only mentioned as one of many sourced test compounds in a COVID-19 drug-repurposing platform; no PK parameters for ambroxol are reported, and the PK modeling shown concerns molnupiravir. |
| popPK | Bocci_2020 | irrelevant | 0 | 0 | This is an in vitro antiviral drug-repurposing study; ambroxol is only a screened compound with EC50-type activity data, no PK disposition parameters for ambroxol are reported. |
| popPK | Chen_2023 | irrelevant | 0 | 0 | This is a population PK study of nemonoxacin, not ambroxol; ambroxol is not mentioned at all. |
| popPK | Couet_1989 | relevant | 8 | 0 | The study reports quantitative pharmacokinetic parameters for ambroxol in humans, but the specific numeric values are not present in the provided abstract or evidence. |
| PGx | Couet_1989 | not_relevant | 0 | 0 | The study evaluates PK parameters in healthy volunteers without analyzing any gene variants, genotypes, or pharmacogenomic factors. |
| popPK | Darling_2021 | irrelevant | 0 | 0 | This is a clinical case report on Gaucher disease where ambroxol is only mentioned as a co-administered treatment, with no pharmacokinetic data provided. |
| PGx | Darling_2021 | not_relevant | 0 | 0 | The paper describes a case of Gaucher disease and mentions ambroxol as a treatment, but it does not report any pharmacogenomic effect of a gene variant on the pharmacokinetic or pharmacodynamic parameters of ambroxol. |
| popPK | Dhanush_2026 | irrelevant | 0 | 0 | This is a narrative review of Parkinson's disease therapeutics that mentions ambroxol's mechanism (GCase chaperone) and brain penetration percentage, but does not report quantitative population pharmacokinetic parameters (CL, V, ka, etc.) for ambroxol. |
| PGx | Dhanush_2026 | not_relevant | 0 | 0 | The paper reviews repurposing strategies for Parkinson's disease and mentions ambroxol but does not report any pharmacogenomic effect on its pharmacokinetics or pharmacodynamics. |
| popPK | Disse_1987 | irrelevant | 0 | 0 | The paper investigates pharmacodynamic mechanisms (mucociliary transport) in animals and contains no quantitative pharmacokinetic parameters. |
| PGx | Disse_1987 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamic mechanism of ambroxol in animal models and does not mention any gene variants or pharmacogenomic factors affecting PK/PD parameters. |
| popPK | Disse_1987_2 | irrelevant | 0 | 0 | The study reports pharmacodynamic effects (airway resistance) in rats, not quantitative pharmacokinetic parameters (CL, V, etc.) for ambroxol. |
| PGx | Disse_1987_2 | not_relevant | 0 | 0 | The paper describes the pharmacodynamics of ambroxol in animal models but contains no genetic variation or pharmacogenomic analysis. |
| popPK | El-Gendy_2025 | irrelevant | 0 | 0 | This is a therapeutic efficacy study of bromhexine plus tiamulin against S. aureus infection in dogs, with no PK parameters (CL, V, ka, half-life, or PK model) for ambroxol or any drug reported. |
| popPK | Faroongsarng_2004 | relevant | 5 | 1 | The study reports PK parameters (mean transit time, dissolution rate constant) for ambroxol, but lacks standard quantitative disposition parameters like CL, V, or Ka for the parent drug, and values are limited to specific constants. |
| PGx | Faroongsarng_2004 | not_relevant | 0 | 0 | The paper investigates the bioavailability difference between lozenges and tablets, not the effect of a specific gene variant on pharmacokinetics or pharmacodynamics. |
| popPK | Furgała-Wojas_2020 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic effects (pain attenuation) and molecular docking, not pharmacokinetic parameters like clearance or volume for ambroxol. |
| PGx | Furgała-Wojas_2020 | not_relevant | 0 | 0 | The study investigates the pharmacodynamic effects of ambroxol on pain in mice and molecular docking, but contains no data on genetic variants or pharmacogenomics. |
| PGx | Higashi_2024 | not_relevant | 4 | 3 | GBA1 genotype is associated with clinical response rates to ambroxol, but no PK or PD parameter (e.g., GCase activity change, exposure) is quantitatively linked to genotype. |
| popPK | Hull_2018 | irrelevant | 0 | 0 | The study reports in vitro pharmacology (receptor binding and IC50 values), not pharmacokinetic disposition parameters (CL, V, ka, t1/2). |
| PGx | Hull_2018 | not_relevant | 0 | 0 | The paper investigates in vitro receptor pharmacology of ambroxol and does not involve genetic variants or pharmacogenomics. |
| popPK | Ishiguro_2000 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of CYP3A4 metabolism in microsomes and does not report in vivo population pharmacokinetic parameters such as clearance or volume of distribution. |
| popPK | Ivanova_2018 | irrelevant | 0 | 0 | The study focuses on the in vitro chaperone activity of ambroxol in Gaucher disease cells, not its pharmacokinetic disposition parameters. |
| PGx | Ivanova_2018 | not_relevant | 7 | 5 | The paper describes pharmacogenomic differences in the pharmacodynamic response (GCase activity) to ambroxol in patient-derived cells but does not report quantitative PK/PD parameters from an in vivo clinical or preclinical PK/PD study. |
| PGx | Lin_2023 | not_relevant | 0 | 0 | Paper tests ambroxol as a therapeutic in INAD models; no gene variant effect on ambroxol PK/PD parameters reported. |
| PGx | Lipiński_2026 | not_relevant | 3 | 2 | Systematic review of ambroxol in GD/GBA1-PD; discusses genotype-dependent GCase response qualitatively but reports no fitted pharmacogenomic effect on a PK/PD parameter. |
| PGx | Menozzi_2023 | not_relevant | 2 | 3 | Review of GBA1 variants and Parkinson disease pathogenesis; ambroxol discussed only as a GCase chaperone concept, with no gene-variant effects on ambroxol PK/PD parameters. |
| popPK | Metta_2025 | irrelevant | 0 | 0 | The paper is a review on personalized medicine in Parkinson's disease that mentions ambroxol only in the context of genetic therapy targets, without reporting any pharmacokinetic parameters. |
| PGx | Metta_2025 | not_relevant | 0 | 0 | The text mentions ambroxol in the context of glucocerebrosidase mutation-linked Parkinson's disease but does not report any pharmacokinetic or pharmacodynamic parameter changes resulting from genetic variants. |
| popPK | Mishra_2020 | irrelevant | 0 | 0 | This is a neuropharmacological study focusing on behavioral and histological outcomes in a Parkinson's disease rat model, with no pharmacokinetic parameters reported. |
| PGx | Mishra_2020 | not_relevant | 0 | 0 | The study investigates the neurorestorative efficacy of ambroxol in a Parkinson's disease rat model and does not report any pharmacogenomic effects or genetic variants influencing PK/PD parameters. |
| PGx | Mohamed_2024 | not_relevant | 4 | 3 | Review discusses GBA1 genotype-dependent variability in ambroxol response qualitatively, but reports no fitted PK/PD effect sizes. |
| popPK | Nahata_1995 | irrelevant | 1 | 2 | The evidence is a collection of abstracts, and while one abstract mentions "concentrations of ambroxol in plasma," it reports AUC values and other PK parameters (likely for a different drug or comparator, as the text is fragmented and mixed with other drugs like amikacin) without clear, extractable ambroxol-specific CL, V, or ka parameters. |
| PGx | Nahata_1995 | not_relevant | 0 | 0 | The text is a table of contents for a symposium without specific data on ambroxol pharmacogenomics. |
| popPK | Oosterhuis_1993 | relevant | 8 | 2 | The study is a pharmacokinetic/pharmacodynamic trial of ambroxol in humans reporting steady-state concentrations, but specific numeric PK parameter values (CL, V, etc.) are not present in the provided text, only qualitative trends. |
| PGx | Oosterhuis_1993 | not_relevant | 0 | 0 | The paper describes the dose-dependent pharmacodynamic effect of ambroxol (uricosuric action) but does not report any genetic variants or pharmacogenomic data. |
| popPK | Pai_2026 | irrelevant | 0 | 0 | A narrative review of pediatric extemporaneous compounding with no ambroxol PK parameters or numeric disposition values. |
| popPK | Peroni_2013 | irrelevant | 0 | 0 | The study investigates the anti-oxidant mechanism of ambroxol in vitro (neutrophil respiratory burst) and does not report pharmacokinetic parameters. |
| PGx | Peroni_2013 | not_relevant | 0 | 0 | The study investigates the pharmacodynamic effect of ambroxol on neutrophil oxidative stress but does not report any influence of genetic variants or genotypes on PK or PD parameters. |
| popPK | Piatakova_2012 | irrelevant | 0 | 0 | The paper investigates the in vitro molecular mechanism of action of ambroxol (guanylate cyclase inhibition), not its pharmacokinetics (disposition parameters like CL, V, half-life). |
| PGx | Piatakova_2012 | not_relevant | 0 | 0 | The paper investigates the biochemical mechanism of action (inhibition of soluble guanylate cyclase) but does not report any pharmacogenomic effects (gene variant/genotype influence) on PK or PD parameters. |
| popPK | Qi_2023 | relevant | 8 | 2 | The study reports pharmacokinetics for ambroxol in a combination inhalation formulation, but specific quantitative parameters (CL, V, Ka) are not present in the provided text. |
| PGx | Qi_2023 | not_relevant | 0 | 0 | The paper describes the formulation and general PK/PD of a drug combination without reporting any genetic or pharmacogenomic influences. |
| popPK | Rojpibulstit_2003 | irrelevant | 2 | 0 | This is a bioequivalence study comparing formulations; it reports AUC and Cmax ratios but does not provide the absolute disposition parameters (CL, V, ka, half-life) for ambroxol. |
| PGx | Rojpibulstit_2003 | not_relevant | 0 | 0 | The study compares formulation bioavailability (lozenge vs. tablet) in a general healthy population and does not report any pharmacogenomic effects or genetic variants. |
| popPK | Rouaz_2021 | irrelevant | 0 | 0 | A review of excipient safety in paediatric formulations with no ambroxol PK parameters; no quantitative disposition values present. |
| popPK | Severina_2000 | irrelevant | 0 | 0 | The paper investigates the in-vitro mechanism of action (enzyme inhibition) of ambroxol, not its pharmacokinetic disposition parameters. |
| PGx | Severina_2000 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamic mechanism of ambroxol (inhibition of soluble guanylate cyclase) but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | Shanmuganathan_2011 | irrelevant | 0 | 0 | The paper focuses on enzyme inhibition (IC50) of β-glucocerebrosidase by ambroxol in vitro, not on pharmacokinetic parameters like clearance or volume of distribution. |
| PGx | Shanmuganathan_2011 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition of GCase by ambroxol, not the effect of a gene variant on ambroxol's PK or PD. |
| PGx | Spedding_2025 | not_relevant | 0 | 0 | Ambroxol is only mentioned as a GBA2 inhibitor in phase II for ALS; no gene variant/genotype effect on its PK or PD parameters is reported. |
| popPK | Suleymanov_2026 | irrelevant | 0 | 0 | This is a UV-Vis analytical method validation for levofloxacin in rat plasma; ambroxol is only mentioned as a co-analyte in cited TLC methods, with no PK parameters for ambroxol. |
| PGx | Tejera_2021 | not_relevant | 0 | 0 | Paper is an in silico drug repurposing study for preeclampsia; ambroxol only appears as a virtual screening hit with no gene variant effects on PK/PD parameters. |
| popPK | Tripathi_2022 | irrelevant | 0 | 0 | The study is an in-vitro and in-silico mechanistic investigation of ambroxol as a chaperone for glucocerebrosidase, not a pharmacokinetic study, and reports no disposition parameters (CL, V, t1/2) for ambroxol. |
| PGx | Tripathi_2022 | not_relevant | 0 | 0 | The paper investigates the mechanism of ambroxol as a chaperone for GCase using homology modeling and in-vitro assays, but does not report any pharmacogenomic study (genotype effect) on PK or PD parameters in humans. |
| PGx | Vergin_1985 | not_relevant | 0 | 0 | The paper describes population-level pharmacokinetics and bioequivalence in healthy volunteers, without reporting any genetic variants or genotypes. |
| popPK | Weiser_2002 | irrelevant | 0 | 0 | The study investigates the pharmacological mechanism of ambroxol on neuronal sodium channels using voltage-clamp experiments, not its pharmacokinetics. |
| PGx | Weiser_2002 | not_relevant | 0 | 0 | The paper describes the direct pharmacodynamic effect of ambroxol on sodium channels, but does not report any pharmacogenomic analysis linking gene variants to PK/PD parameters of the drug. |
| popPK | Weiser_2006 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study on sodium channel block, not a pharmacokinetic study, and reports no disposition parameters (CL, V, etc.). |
| PGx | Weiser_2006 | not_relevant | 0 | 0 | The paper studies the electrophysiological mechanism of ambroxol in vitro and does not report any pharmacogenomic effects (gene variants altering PK/PD). |
| popPK | Yang_2015 | relevant | 7 | 2 | The study reports that a two-compartment model was fitted to ambroxol data, but the specific quantitative parameter values (CL, V, t1/2, etc.) are not present in the provided evidence text. |
| PGx | Yang_2015 | not_relevant | 0 | 0 | The study investigates pharmacokinetics in healthy volunteers but does not report any analysis based on gene variants, genotypes, or phenotypes. |
| PGx | Yang_2022 | not_relevant | 3 | 5 | Reports GBA1 genotype effects on GCase/tau/α-syn biomarkers and ambroxol's pharmacodynamic chaperone response in vitro, but no PK parameter or drug-level PD endpoint of ambroxol itself. |
| PGx | Zhan_2023 | not_relevant | 2 | 3 | Reports ambroxol efficacy in Gaucher disease stratified by age and severity, not by gene variant/genotype effects on ambroxol PK or PD parameters. |
| popPK | Zhang_2025 | irrelevant | 1 | 0 | The study focuses on the anti-biofilm efficacy and synergistic effects of ambroxol hydrochloride with antibiotics, reporting only half-lives for compatibility/dosing optimization without full quantitative disposition parameters (CL, V) or population PK models. |
| PGx | Zhang_2025 | not_relevant | 0 | 0 | The paper investigates the synergistic antibiotic efficacy of ambroxol against biofilm-forming bacteria and does not report any pharmacogenomic effects or gene-variant interactions. |
| popPK | Zhou_2021 | relevant | 9 | 0 | The study is a pharmacokinetic investigation of ambroxol in rats, but the evidence provided contains only the abstract and method details, lacking the specific numeric PK parameter values (CL, V, etc.). |
| PGx | Zhou_2021 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (DDI) study in rats, not a pharmacogenomic study involving gene variants or genotypes. |
| popPK | Zhou_2022 | irrelevant | 0 | 0 | This is a population PK study of cefoperazone/sulbactam; ambroxol is only mentioned as a concomitant medication, with no ambroxol PK parameters reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bambroxol%5D&body=Drug%3A%20ambroxol%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ambroxol/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 17:36 UTC</sub>
