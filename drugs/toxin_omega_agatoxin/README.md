<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;omega-Agatoxin&quot;}]"></div>

# omega-Agatoxin

- **generic name:** omega-Agatoxin
- **T3DB:** [T3D2494](http://www.t3db.ca/toxins/T3D2494) · **PubChem:** none

## About

Agatoxins are a class of chemically diverse polyamine and peptide toxins which are isolated from the venom of various spiders, in particular the North American funnel-web spider (Agelenopsis aperta), after which agatoxins are named. omega-Agatoxins are subdivided in four classes based on their primary structures, biochemical properties and calcium channels specificity. They block the calcium channels in the presynaptic terminals of the neuromuscular junction in insects and vertebrates.

- **Category:** Protein, Natural Toxin, Animal Toxin
- **Route of exposure:** injection (sting/bite)
- **Sources and uses:** Agatoxins are a class of chemically diverse polyamine and peptide toxins which are isolated from the venom of various spiders, in particular the North American funnel-web spider (Agelenopsis aperta).
- **Mechanism of toxicity:** omega-Agatoxins block the calcium channels in the presynaptic terminals of the neuromuscular junction in insects and vertebrates. This reduces calcium influx, resulting in a decreased release of neurotransmitters in the synaptic cleft.
- **Health effects:** omega-Agatoxin causes spasms leading to a progressive paralysis which will eventually lead to death in insects.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2494">T3DB T3D2494</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 145017-83-0</small></p>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-10 14:50 | 8:02 | 0/0/0 | 0/0/0 | 0/0/0 | 126,799/4,845 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 34 matched, 34 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Stefani_1996.pdf` | Stefani A et al., Felbamate inhibits dihydropyridine-sens…, The Journal of pharmacology… (1996) | pd | 4 |  | [8613908](https://www.ncbi.nlm.nih.gov/pubmed/8613908) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-11-10 14:49 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aas_1996 | irrelevant | 0 | 0 | The paper investigates the mechanism of action of homoanatoxin-a, and omega-agatoxin IV-A is used only as an analytical reagent/channel blocker, not as the subject substance. |
| popPK | Bertrand_2003 | irrelevant | 0 | 0 | The paper is an electrophysiological study of gabapentin's mechanism of action, and omega-agatoxin IVA is used only as a pharmacological tool to block calcium channels, not as the subject of toxicokinetic analysis. |
| popPK | Buczek_2005 | irrelevant | 0 | 0 | The paper discusses the structural modification (D-amino acid isomerization) of r11a and merely cites omega-agatoxin as a comparative example, reporting no toxicokinetic parameters. |
| popPK | Cheng_2006 | irrelevant | 0 | 0 | The paper studies the mechanism of gabapentin using omega-agatoxin IVA as a comparator antagonist, not as the subject substance for which kinetic parameters are reported. |
| popPK | Chuhma_2001 | irrelevant | 0 | 0 | The paper uses omega-agatoxin-IVA as a pharmacological tool to characterize presynaptic calcium channel dynamics in rat brain slices, reporting functional effects (EPSC reduction) rather than toxicokinetic parameters like clearance or half-life for the substance itself. |
| popPK | Chuhma_2002 | irrelevant | 0 | 0 | The paper uses omega-agatoxin IVA as a pharmacological tool to block calcium channels in a neurophysiology study, reporting no toxicokinetic parameters (half-life, clearance, etc.). |
| PGx | Currò_2010 | not_relevant | 0 | 0 | The study investigates the pharmacology of omega-agatoxin IVA on calcium channels in a rat model, not a pharmacogenomic effect of a gene variant on the drug's PK or PD. |
| popPK | Galindo_2004 | irrelevant | 0 | 0 | The paper investigates the mechanism of action of dihydropiridines using omega-agatoxin IVA only as a pharmacological tool/comparator to block specific channels, reporting no toxicokinetic parameters for the toxin itself. |
| popPK | Gompf_2005 | irrelevant | 0 | 0 | The paper studies the neurophysiological mechanism of nociceptin/orphanin FQ, and omega-agatoxin TK is used only as a pharmacological tool (channel blocker) to probe calcium channels, not as the subject of toxicokinetic analysis. |
| popPK | Huston_1995 | irrelevant | 0 | 0 | The paper uses omega-agatoxin IVA solely as an experimental tool (calcium channel blocker) to study glutamate release mechanisms, not as the subject of toxicokinetic investigation. |
| popPK | Kortus_2016 | irrelevant | 0 | 0 | The paper uses omega-agatoxin IVA as a pharmacological tool to block P/Q-type calcium channels in neuronal calcium signaling studies, rather than reporting toxicokinetic parameters for the substance itself. |
| popPK | Lambe_2001 | irrelevant | 0 | 0 | The paper investigates the mechanism of glutamate release in rat brain slices using omega-agatoxin-IVA solely as a pharmacological tool to block P-type calcium channels, reporting no toxicokinetic parameters for the substance. |
| popPK | Leenders_2002 | irrelevant | 0 | 0 | The paper uses omega-agatoxin IVA as a pharmacological tool to block calcium channels and study neurotransmitter release, not as the subject of toxicokinetic analysis. |
| popPK | Lu_2023 | irrelevant | 0 | 0 | The paper studies the mechanism of action of cynarin in rat synaptomes, using omega_agatoxin IVa only as a tool compound to block calcium channels, and contains no toxicokinetic parameters for omega_agatoxin. |
| popPK | Markram_1995 | irrelevant | 0 | 0 | The paper uses omega-agatoxin IVA solely as a pharmacological blocker to characterize calcium channel subtypes in neurons, not as the subject substance for toxicokinetic analysis. |
| popPK | Moriguchi_2012 | irrelevant | 0 | 0 | omega_agatoxin is used only as a selective P/Q-type calcium channel inhibitor (an analytical reagent/control) to differentiate channel subtypes, and no kinetic parameters are reported for it. |
| popPK | Nishio_1993 | irrelevant | 0 | 0 | The paper focuses on the chemical synthesis and structural determination of omega-agatoxin IVA and reports pharmacological potency (blocking calcium currents) but provides no toxicokinetic parameters such as half-life, clearance, or distribution. |
| popPK | Pal_2013 | irrelevant | 0 | 0 | The paper reports toxicity (LD50) and efficacy of neurotoxins on aphids but contains no toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for omega_agatoxin. |
| popPK | Palma_2011 | irrelevant | 0 | 0 | The paper studies the mechanism of action of CGS-21680 on acetylcholine release, using ω-Agatoxin IVA only as a pharmacological blocker/comparator, and reports no toxicokinetic parameters for omega_agatoxin. |
| popPK | Pluzhnikov_2007 | irrelevant | 0 | 0 | The paper is a mechanistic electrophysiology study describing the effect of the toxin on calcium channels, with no toxicokinetic or disposition parameters reported. |
| popPK | Reid_1998 | irrelevant | 0 | 0 | The paper uses omega-agatoxin as a pharmacological blocker to study calcium channel cooperativity, not as the subject of toxicokinetic analysis. |
| popPK | Selim_2006 | irrelevant | 0 | 0 | The paper studies parathyroid hormone receptor signaling in cell lines and uses omega-agatoxin IVA merely as a pharmacological tool to block calcium channels, not as a subject for kinetic analysis. |
| popPK | Silinsky_2004 | irrelevant | 0 | 0 | The paper uses omega-agatoxin-IVA solely as a pharmacological tool to block calcium channels, reporting no toxicokinetic parameters for the substance. |
| popPK | Stefani_1996 | irrelevant | 0 | 0 | The paper studies felbamate and uses omega-agatoxin IVA only as a pharmacological tool/blocker, reporting no toxicokinetic parameters for omega-agatoxin itself. |
| popPK | Stefani_1998 | irrelevant | 0 | 0 | The paper investigates the neuroprotective agent 619C89, using omega-agatoxin-IVA only as a pharmacological tool to block specific calcium channel subtypes. |
| popPK | Timpe_2014 | irrelevant | 0 | 0 | The paper studies the mechanism of action of omega-agatoxin TK as a P/Q-type calcium channel blocker in vitro, providing no toxicokinetic parameters for omega_agatoxin itself. |
| popPK | Tottene_1996 | irrelevant | 0 | 0 | The paper reports pharmacological sensitivity (IC50) and biophysical properties of calcium channels, not toxicokinetic parameters (disposition, metabolism, clearance) for omega-agatoxin. |
| popPK | Wang_2001 | irrelevant | 0 | 0 | The paper reports the discovery and structure of a new insect-selective toxin, comparing it to omega-agatoxin-IVA/B only structurally/functionalhly, with no kinetic data for omega-agatoxin. |
| popPK | Waters_2000 | irrelevant | 0 | 0 | The paper uses omega-agatoxin IVA as a pharmacological tool (calcium channel blocker) to investigate presynaptic mechanisms in neurons, rather than reporting toxicokinetic parameters for omega-agatoxin itself. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bomega_agatoxin%5D&body=Drug%3A%20omega_agatoxin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_omega_agatoxin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
