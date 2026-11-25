<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07A&quot;,&quot;href&quot;:&quot;atc/N07A.md&quot;},{&quot;label&quot;:&quot;pilocarpine&quot;}]"></div>

# pilocarpine

- **generic name:** pilocarpine
- **ATC codes:** `N07AX01`, `S01EB01`
- **DrugBank:** [DB01085](https://go.drugbank.com/drugs/DB01085) · **PubChem:** [CID 5910](https://pubchem.ncbi.nlm.nih.gov/compound/5910)
- **molar mass:** 208.2569 g/mol (C11H16N2O2) — DrugBank
- **groups:** approved, investigational

## About

Pilocarpine is a muscarinic agonist used to treat glaucoma, angle-closure glaucoma, and dry mouth. It is given as eye drops for glaucoma and as tablets for dry mouth. It is widely used and listed on the WHO essential medicines list.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q411461](https://www.wikidata.org/wiki/Q411461), [Wikipedia](https://en.wikipedia.org/wiki/Pilocarpine?oldid=1363378330) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| pilocarpine | parent | 208.257 | C11H16N2O2 | DrugBank | [5910](https://pubchem.ncbi.nlm.nih.gov/compound/5910) | Conrad_1977 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rabbit" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub> | [Conrad_1977_reference](drugs/drug_pilocarpine/Pilocarpine_Conrad1977_reference.md) | — | 1-compartment (no model) | 1 | Conrad JM et al., Aqueous chamber drug distribution volum…, Journal of pharmaceutical s… (1977) | [10.1002/jps.2600660222](https://doi.org/10.1002/jps.2600660222) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 02:46 | 0:03 | 0/1/0 | 0/0/0 | 0/0/0 | 4,567/169 | einfracz / qwen3.8-27b | 6 | 4/2 | 4/2 | 0 |

## Coverage

- **PubMed hits:** 73 matched, 19 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Clinckers_2008 | irrelevant | 0 | 0 | The study characterizes the pharmacokinetics of MHD (metabolite of oxcarbazepine), using pilocarpine only as a chemoconvulsant to induce seizures, not as the subject drug. |
| PGx | Clinckers_2008 | not_relevant | 0 | 0 | The study investigates oxcarbazepine metabolite PK and does not report pharmacogenomic effects on pilocarpine. |
| PGx | Conrad_1977 | not_relevant | 0 | 0 | The paper measures PK parameters (volume of distribution) in rabbits but does not investigate gene variants or genotypes (pharmacogenomics). |
| popPK | Cook_1987 | irrelevant | 0 | 0 | The study investigates cholinoreceptor pharmacodynamics in rat muscle and does not report any pharmacokinetic parameters for pilocarpine. |
| PGx | Cook_1987 | not_relevant | 0 | 0 | The study examines cholinoreceptor pharmacology in isolated rat uterine muscle and does not investigate any gene variants or pharmacogenomic effects on the PK/PD of pilocarpine. |
| popPK | Eldefrawi_1977 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding study where pilocarpine is used only as a labeled probe ligand, not as a subject drug for pharmacokinetic parameter estimation. |
| PGx | Eldefrawi_1977 | not_relevant | 0 | 0 | The paper investigates the interaction between organic mercury compounds and acetylcholine receptors, not the effect of gene variants on the pharmacokinetics or pharmacodynamics of pilocarpine. |
| popPK | Falenski_2007 | irrelevant | 0 | 0 | This study investigates CB1 receptor expression and function in the rat pilocarpine model of epilepsy; pilocarpine is used as a tool to induce status epilepticus, not as the subject of a pharmacokinetic analysis. |
| PGx | Falenski_2007 | not_relevant | 0 | 0 | The paper investigates the effect of status epilepticus on CB1 receptor expression in a rat model and does not report on human pharmacogenomics or genetic variants affecting pilocarpine PK/PD. |
| popPK | Goodman_2025 | irrelevant | 0 | 0 | Pilocarpine is only used to induce epilepsy in mice; no PK parameters (CL, V, ka, half-life) are reported. |
| popPK | Lai_2018 | irrelevant | 0 | 0 | The study investigates the electrophysiological effects of sodium metabisulfite and excitotoxicity, using pilocarpine only as an agent to induce seizures in rats rather than as the subject of pharmacokinetic analysis. |
| PGx | Lai_2018 | not_relevant | 0 | 0 | The study investigates the interaction between sodium metabisulfite and pilocarpine-induced toxicity, not the effect of a gene variant on pilocarpine's pharmacokinetics or pharmacodynamics. |
| popPK | Liberman_1989 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of TRH in dogs, with pilocarpine used only as a non-pharmacokinetic stimulus for prostatic fluid collection. |
| PGx | Liberman_1989 | not_relevant | 0 | 0 | The study investigates the pharmacokinetics of TRH (thyrotropin-releasing hormone), not pilocarpine, and does not report on genetic variants. |
| popPK | López-Meraz_2014 | irrelevant | 0 | 0 | The study investigates the behavioral effects of pilocarpine-induced seizures on vocalizations in rat pups and does not report any pharmacokinetic parameters (CL, V, ka, etc.). |
| PGx | López-Meraz_2014 | not_relevant | 0 | 0 | The paper investigates the behavioral effects of status epilepticus in rats and does not report any pharmacogenomic variation or genetic effects on the pharmacokinetics or pharmacodynamics of pilocarpine. |
| popPK | Mawasi_2016 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for sec-butylpropylacetamide (SPD), while pilocarpine is used only as an agent to induce the disease model (status epilepticus). |
| PGx | Mawasi_2016 | not_relevant | 0 | 0 | The paper reports PK/PD parameters for the drug sec-Butylpropylacetamide, not pilocarpine, and contains no pharmacogenomic data. |
| popPK | Mayer_2016 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study of anticholinergic activity (receptor binding/assay) and does not report pharmacokinetic disposition parameters (CL, V, t1/2) for pilocarpine. |
| PGx | Mayer_2016 | not_relevant | 0 | 0 | The paper studies receptor binding interactions and combination indices, not pharmacogenomic effects (gene variants) on pharmacokinetics or pharmacodynamics. |
| popPK | Metzler-Wilson_2023 | irrelevant | 0 | 0 | The study investigates pilocarpine as a pharmacological tool to induce sweating for thermoregulation research, not as a subject for pharmacokinetic parameter estimation (no CL, V, or ka reported). |
| PGx | Metzler-Wilson_2023 | not_relevant | 0 | 0 | The paper investigates the effect of skin perfusion and heat stress on eccrine sweating, not the pharmacogenomic effects on pilocarpine PK/PD. |
| popPK | Müllauer_2012 | irrelevant | 0 | 0 | Pilocarpine is only used to induce status epilepticus; the PK model and all quantitative parameters concern (R)-[11C]verapamil, not pilocarpine. |
| popPK | Pimentel-Silva_2026 | irrelevant | 0 | 0 | This is a neuroimaging (MRI) study of epilepsy pathophysiology where pilocarpine is used only as an agent to induce seizures, not for pharmacokinetic analysis. |
| PGx | Pimentel-Silva_2026 | not_relevant | 0 | 0 | The paper studies the neurobiology of the pilocarpine seizure model in rats and contains no data on human pharmacogenomics or genetic effects on drug metabolism or response. |
| popPK | Reynaerts_2022 | irrelevant | 0 | 0 | Pilocarpine is used as a cholinergic stimulant for a sweat test, not as the subject of pharmacokinetic analysis; no PK parameters (CL, V, etc.) for pilocarpine are reported. |
| PGx | Reynaerts_2022 | not_relevant | 0 | 0 | The paper focuses on a diagnostic sweat test using pilocarpine and isoproterenol to assess CFTR function, not on how genetic variants alter the pharmacokinetics or pharmacodynamics of pilocarpine itself. |
| popPK | Salo_2017 | irrelevant | 0 | 0 | This is a neuroimaging (DTI) study using pilocarpine as a chemical inducer for status epilepticus, not a pharmacokinetic study. |
| PGx | Salo_2017 | not_relevant | 0 | 0 | The paper investigates DTI changes in the hippocampus after pilocarpine-induced status epilepticus and contains no information on pharmacogenomics or PK/PD parameters of the drug. |
| popPK | Tian_2025 | irrelevant | 0 | 0 | The study focuses on the development of GABAAR positive allosteric modulators for epilepsy, using pilocarpine only as a tool to induce seizures in mouse models, with no pharmacokinetic data for pilocarpine reported. |
| PGx | Tian_2025 | not_relevant | 0 | 0 | The paper reports preclinical efficacy of a novel GABAAR modulator in a pilocarpine-seizure model; it does not investigate the pharmacokinetics or pharmacodynamics of pilocarpine itself, nor any pharmacogenomic effects on pilocarpine. |
| popPK | Unno_2003 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study on receptor signaling in guinea-pig ileum, not a pharmacokinetic study of pilocarpine. |
| PGx | Unno_2003 | not_relevant | 0 | 0 | The paper investigates receptor signaling mechanisms of pilocarpine in guinea-pig ileum but does not involve human gene variants or pharmacogenomic effects on PK/PD. |
| popPK | Wu_2024 | irrelevant | 0 | 0 | The study investigates Schisandrin B as a treatment for pilocarpine-induced seizures and does not report any pharmacokinetic parameters (clearance, volume, etc.) for pilocarpine. |
| PGx | Wu_2024 | not_relevant | 0 | 0 | The paper reports pharmacological effects of a different drug (Schisandrin B) using pilocarpine as a seizure-inducing agent, with no analysis of genetic variants affecting pilocarpine's PK or PD. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpilocarpine%5D&body=Drug%3A%20pilocarpine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pilocarpine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 02:42 UTC</sub>
