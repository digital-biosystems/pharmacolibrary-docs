<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R01B&quot;,&quot;href&quot;:&quot;atc/R01B.md&quot;},{&quot;label&quot;:&quot;pseudoephedrine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pseudoephedrine_Palamanda2010_reference&quot;,&quot;label&quot;:&quot;Palamanda_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pseudoephedrine/Pseudoephedrine_Palamanda2010_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# pseudoephedrine

- **generic name:** pseudoephedrine
- **ATC codes:** `R01BA02`
- **DrugBank:** [DB00852](https://go.drugbank.com/drugs/DB00852) · **PubChem:** [CID 7028](https://pubchem.ncbi.nlm.nih.gov/compound/7028)
- **molar mass:** 165.2322 g/mol (C10H15NO) — DrugBank
- **groups:** approved, investigational

## About

Pseudoephedrine is a sympathomimetic decongestant used to treat nasal congestion, sinusitis, and asthma. It is administered orally in forms such as tablets and syrups. The drug is widely available over-the-counter, though its availability has been restricted due to its potential use in illicit drug synthesis.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q263958](https://www.wikidata.org/wiki/Q263958), [Wikipedia](https://en.wikipedia.org/wiki/Pseudoephedrine?oldid=1378286228) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| pseudoephedrine | parent | 165.232 | C10H15NO | DrugBank | [7028](https://pubchem.ncbi.nlm.nih.gov/compound/7028) | Palamanda_2010 |

## Start here

> **Palamanda_2010_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> rats, dogs, monkeys, and cats. [Run it in the simulator](drugs/drug_pseudoephedrine/Pseudoephedrine_Palamanda2010_reference.md?tab=Simulation) · [record](drugs/drug_pseudoephedrine/Pseudoephedrine_Palamanda2010_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: cross_check_disputed</sub> | [Palamanda_2010_reference](drugs/drug_pseudoephedrine/Pseudoephedrine_Palamanda2010_reference.md) | ▶ model + simulator | 1-compartment, IV | 4 | Palamanda JR et al., Pharmacokinetics of pseudoephedrine in…, Drug metabolism letters (2010) | [10.2174/187231210791292762](https://doi.org/10.2174/187231210791292762) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Palamanda_2010_nasal_congestion](drugs/drug_pseudoephedrine/pd_Palamanda_2010_nasal_congestion.md) | nasal congestion ← pseudoephedrine · direct sigmoid Emax (Hill) effect | — | Palamanda JR et al., Pharmacokinetics of pseudoephedrine in…, Drug metabolism letters (2010) | [10.2174/187231210791292762](https://doi.org/10.2174/187231210791292762) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Vansal_1999_adenylyl_cyclase_stimulation_associated_with_cyclic_AMP_accumulations](drugs/drug_pseudoephedrine/pd_Vansal_1999_adenylyl_cyclase_stimulation_associated_with_cyc.md) | adenylyl cyclase stimulation associated with cyclic AMP accumulations ← 1S,2S-pseudoephedrine · direct sigmoid Emax (Hill) effect | model (no simulator) | Vansal SS et al., Direct effects of ephedrine isomers on…, Biochemical pharmacology (1999) | [10.1016/s0006-2952(99)00152-5](https://doi.org/10.1016/s0006-2952(99)00152-5) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 03:53 | 0:03 | 1/0/0 | 2/0/0 | 0/0/0 | 3,960/176 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Atsumi_2026 | relevant | 5 | 0 | The study reports pharmacokinetic parameters (ka) for pseudoephedrine in humans, but the specific numeric values are not present in the provided evidence, which only contains descriptive qualitative findings. |
| PGx | Atsumi_2026 | not_relevant | 0 | 0 | The paper studies the effect of food (pre- vs postprandial) on PK, not a pharmacogenomic effect. |
| popPK | Bantle_1990 | irrelevant | 0 | 0 | The study is a developmental toxicity/teratogenicity assay using frog embryos and does not report pharmacokinetic parameters. |
| PGx | Bantle_1990 | not_relevant | 0 | 0 | The paper reports developmental toxicity of pseudoephedrine in a frog model, not pharmacogenomic effects on PK or PD parameters. |
| popPK | Graves_1990 | relevant | 8 | 0 | The study reports a population PK model for pseudoephedrine, but no specific numeric parameter values (CL, V, ka, etc.) are present in the provided evidence, appearing only as a summary of the analysis. |
| PGx | Graves_1990 | not_relevant | 0 | 0 | The paper describes the application of NONMEM software to pseudoephedrine bioavailability data for formulation comparison and contains no genetic or pharmacogenomic information. |
| popPK | He_2005 | relevant | 9 | 1 | The study describes a human PK study of pseudoephedrine but the abstract provides only qualitative statements about statistical significance and model type without reporting specific numeric parameter values. |
| PGx | He_2005 | not_relevant | 0 | 0 | The study investigates herb-herb drug interactions in Mahuang decoction, not pharmacogenomic effects (gene variants). |
| popPK | Jing_2010 | irrelevant | 0 | 0 | The paper focuses on the electrophysiological mechanism of ephedrine on cardiac potassium channels, noting that pseudoephedrine had no effect, and does not report pharmacokinetic parameters for pseudoephedrine. |
| PGx | Jing_2010 | not_relevant | 0 | 0 | The paper investigates the direct pharmacodynamic effects of ephedrine and pseudoephedrine on cardiac ion channels without any analysis of gene variants or genotypes. |
| popPK | Pade_1995 | relevant | 7 | 2 | The study describes a one-compartment model for pseudoephedrine in humans but does not provide the specific numeric values for clearance, volume, or half-life in the provided text. |
| PGx | Pade_1995 | not_relevant | 0 | 0 | The study compares the bioavailability of two formulations of pseudoephedrine and does not involve any gene variants, genotypes, or pharmacogenomic analysis. |
| PGx | Palamanda_2010 | not_relevant | 0 | 0 | The study characterizes pseudoephedrine pharmacokinetics in animal models but does not investigate gene variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | Rothman_2003 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of transporter substrate affinity and receptor binding, not a pharmacokinetic study reporting disposition parameters like clearance or volume of distribution. |
| PGx | Rothman_2003 | not_relevant | 0 | 0 | The paper characterizes in vitro interactions with transporters and receptors but does not report pharmacogenomic effects on PK/PD parameters. |
| popPK | Van_2004 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of garenoxacin; pseudoephedrine is only mentioned as a concomitant medication covariate affecting garenoxacin clearance. |
| PGx | Van_2004 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (pseudoephedrine) affecting garenoxacin pharmacokinetics, not a pharmacogenomic effect (gene variant/genotype) on pseudoephedrine pharmacokinetics or pharmacodynamics. |
| popPK | Vansal_1999 | irrelevant | 0 | 0 | This is an in vitro pharmacodynamic study measuring receptor potency (EC50) and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| PGx | Vansal_1999 | not_relevant | 0 | 0 | The paper studies the direct pharmacodynamic effects of ephedrine isomers on beta-adrenergic receptors in cell lines, but it does not report a pharmacogenomic effect (gene variant/genotype) on a PK or PD parameter of pseudoephedrine. |
| popPK | Wan_2019 | irrelevant | 4 | 0 | Pseudoephedrine is a co-administered component of a herbal mixture, and no specific numeric PK parameter values are provided in the text. |
| PGx | Wan_2019 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics of pseudoephedrine in febrile rats to study the compatibility effects of Mahuang Decoction components, but it does not report any pharmacogenomic effects or analysis based on gene variants/genotypes. |
| popPK | Zhang_2008 | irrelevant | 0 | 0 | Pseudoephedrine is used strictly as an internal standard for the quantification of matrine, oxymatrine, and oxysophocarpine; no pharmacokinetic parameters are reported for pseudoephedrine itself. |
| PGx | Zhang_2008 | not_relevant | 0 | 0 | The paper studies the pharmacokinetics of matrine and related compounds, using pseudoephedrine only as an internal standard for analysis, and contains no genetic or pharmacogenomic data. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpseudoephedrine%5D&body=Drug%3A%20pseudoephedrine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pseudoephedrine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 03:49 UTC</sub>
