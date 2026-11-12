<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;beta-Bungarotoxin&quot;}]"></div>

# beta-Bungarotoxin

- **generic name:** beta-Bungarotoxin
- **T3DB:** [T3D2538](http://www.t3db.ca/toxins/T3D2538) · **PubChem:** [CID 2432](https://pubchem.ncbi.nlm.nih.gov/compound/2432)

## About

beta-Bungarotoxin is a peptide toxin produced by the Many-banded krait (Bungarus multicinctus). It is a neurotoxin and acts at the presynaptic terminal, where it causes release of acetylcholine and subsequent exhaustion of acetylcholine stores in the nerve terminal.

- **Category:** Protein, Animal Toxin, Natural Toxin
- **Route of exposure:** injection (sting/bite)
- **Sources and uses:** beta-Bungarotoxin is a peptide toxin produced by the Many-banded krait (Bungarus multicinctus).
- **Mechanism of toxicity:** beta-Bungarotoxin acts at the presynaptic terminal, where it causes release of acetylcholine and subsequent exhaustion of acetylcholine stores in the nerve terminal by binding to proteins, most commonly actin. It can also block voltage-gated potassium channels.
- **Health effects:** Many-banded krait bites can cause paralysis, respiratory failure and death.
- **Acute toxicity:** LD50: 0.108 mg/kg (Subcutaneous, Mouse)
LD50: 0.113 mg/kg (Intravenous, Mouse)
LD50: 0.08 (Intraperitoneal, Mouse)

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2538">T3DB T3D2538</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 12778-32-4</small></p>

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
| 2026-11-09 22:41 | 7:28 | 0/0/0 | 0/0/0 | 0/0/0 | 150,374/5,075 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 38 matched, 38 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Othman_1982.pdf` | Othman IB et al., Preparation of neurotoxic 3H-beta-bunga…, European journal of biochem… (1982) | popPK | 8 | [10.1111/j.1432-1033.1982.tb06961.x](https://doi.org/10.1111/j.1432-1033.1982.tb06961.x) | [7173209](https://pubmed.ncbi.nlm.nih.gov/7173209) | The paper reports quantitative binding and dissociation rate constants (kinetic parameters) for beta-bungarotoxin, though measured in vitro on rat synaptosomes. |

<sub>queue written 2026-11-09 22:41 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bon_1982 | irrelevant | 0 | 0 | The paper focuses on the isolation and characterization of ceruleotoxin from Bungarus fasciatus, with no quantitative toxicokinetic parameters provided for beta-bungarotoxin. |
| popPK | Caratsch_1981 | irrelevant | 0 | 0 | The paper investigates the electrophysiological mechanism of action (phospholipase-independent vs dependent) at the frog neuromuscular junction and does not report quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for beta-bungarotoxin. |
| popPK | Chang_1976 | irrelevant | 0 | 0 | The paper describes a mechanistic study of carbachol and toxin effects on neuromuscular preparation, reporting no quantitative toxicokinetic parameters (half-life, clearance, etc.) for beta-bungarotoxin. |
| popPK | Chu_1994 | irrelevant | 0 | 0 | The paper focuses on the purification, characterization, and neurotoxic potency (LD50) of beta-bungarotoxin isotoxins, but does not report any quantitative toxicokinetic parameters such as half-life, clearance, or partition coefficients. |
| popPK | Crosland_1988 | irrelevant | 0 | 0 | The paper reports LD50 values (toxicity potency) rather than quantitative toxicokinetic parameters such as half-life, clearance, or volume of distribution. |
| popPK | Crosland_1989 | irrelevant | 0 | 0 | The paper reports on the effect of drugs on lethality (LD50) but contains no quantitative toxicokinetic parameters (e.g., half-life, clearance, distribution) for beta-bungarotoxin. |
| popPK | Danse_1989 | irrelevant | 0 | 0 | The paper describes the preparation of monoclonal antibodies against beta-bungarotoxin and does not report quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for the toxin itself. |
| popPK | Duregotti_2015 | irrelevant | 1 | 0 | The paper describes a functional recovery assay (DAS score) and morphological changes in mice, but reports no quantitative toxicokinetic parameters (such as half-life, clearance, or distribution volume) for beta-bungarotoxin itself. |
| popPK | Gaion_1983 | irrelevant | 0 | 0 | The paper uses beta-bungarotoxin as an analytical reagent to modulate neurotransmission in an in vitro preparation, reporting no kinetic parameters for the toxin itself. |
| popPK | Hia_2020 | irrelevant | 0 | 0 | The paper reports comparative proteomics, LD50 lethality, and antivenom neutralization data, but contains no toxicokinetic parameters (half-life, clearance, etc.) for beta-bungarotoxin. |
| popPK | Kondo_1982 | irrelevant | 0 | 0 | The paper reports the amino acid sequence and neurotoxic potency (LD50) of beta 2-bungarotoxin, but contains no quantitative toxicokinetic parameters (such as half-life, clearance, or partition coefficients). |
| popPK | Kondo_1982_2 | irrelevant | 0 | 0 | The paper reports amino acid sequences, LD50 values, and enzyme activities, but contains no toxicokinetic parameters such as half-life, clearance, or partition coefficients. |
| popPK | Kudryashova_2025 | irrelevant | 0 | 0 | The paper reports binding affinities (Kd) and electrophysiological blocking data for beta-bungarotoxin on in vitro human Kv channels, which are pharmacodynamic/mechanistic parameters, not toxicokinetic parameters (absorption, distribution, metabolism, or elimination). |
| popPK | Lee_1976 | irrelevant | 0 | 0 | The paper describes a pharmacological study on the site of action of acetylcholine using beta-bungarotoxin as a presynaptic blocker, but contains no quantitative toxicokinetic parameters (half-life, clearance, etc.) for beta-bungarotoxin. |
| popPK | Lee_1978 | irrelevant | 0 | 0 | The study focuses on neuromuscular pharmacological interactions and muscle response dynamics, not quantitative toxicokinetic parameters like half-life, clearance, or volume of distribution. |
| popPK | Lee_1982 | irrelevant | 0 | 0 | The paper studies caudoxin as the subject substance, with beta-bungarotoxin mentioned only as a comparator for binding site interaction, and no kinetic parameters are reported for either. |
| popPK | Lin_2020 | irrelevant | 0 | 0 | The paper reports LD50 and neutralization (ED50) data, which are toxicity/efficacy parameters, not toxicokinetic parameters like half-life, clearance, or volume of distribution. |
| popPK | McQueen_1977 | irrelevant | 0 | 0 | The paper reports pharmacological dose-response effects of beta-bungarotoxin on chemoreceptors, not toxicokinetic parameters (half-life, clearance, etc.). |
| popPK | Newton_1983 | irrelevant | 0 | 0 | The paper reports pharmacodynamic changes in tissue acetylcholine and choline levels rather than quantitative toxicokinetic parameters (e.g., half-life, clearance, distribution volume) for beta-bungarotoxin. |
| popPK | Ochillo_1981 | irrelevant | 0 | 0 | The paper is a pharmacological study on the mechanism of action of muscarine where beta-bungarotoxin is used as a pharmacological tool (presynaptic blocker) in an in vitro guinea-pig ileum preparation, reporting no toxicokinetic parameters. |
| popPK | Oh_2019 | irrelevant | 0 | 0 | The paper describes venom proteomics and acute lethality (LD50) in mice, but contains no quantitative toxicokinetic parameters (half-life, clearance, etc.) for beta-bungarotoxin. |
| popPK | Rugolo_1986 | irrelevant | 0 | 0 | The paper describes the mechanism of action of beta-bungarotoxin at the cellular level using a functional assay (86Rb+ efflux) but reports no quantitative pharmacokinetic or toxicokinetic parameters (such as half-life, clearance, or distribution volume). |
| popPK | Sen_1976 | irrelevant | 0 | 0 | The paper investigates the mechanism of action (choline uptake inhibition, transmitter release) in rat synaptosomes (in vitro) and does not report any quantitative toxicokinetic parameters such as half-life, clearance, or distribution volume. |
| popPK | Sen_1978 | irrelevant | 0 | 0 | no_text gate: only 84 chars of text extracted (&lt; 400) |
| popPK | Shina_1994 | irrelevant | 0 | 0 | The paper investigates the mechanism of action of beta-bungarotoxin on membrane phospholipid asymmetry in vitro and does not report any toxicokinetic parameters such as half-life, clearance, or distribution volumes. |
| popPK | Tseng_2003 | irrelevant | 0 | 0 | The paper reports mechanistic data on cytotoxicity and receptor binding in vitro, but contains no quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for beta-bungarotoxin. |
| popPK | Ueno_1995 | irrelevant | 0 | 0 | The paper describes the molecular mechanism of action (phosphorylation inhibition) in vitro and does not report any quantitative toxicokinetic parameters such as half-life, clearance, or partition coefficients. |
| popPK | Ueno_1996 | irrelevant | 0 | 0 | The paper investigates the molecular mechanism of action (protein phosphorylation) in rat brain synaptosomes and does not report any quantitative toxicokinetic parameters (e.g., half-life, clearance, volume of distribution) for beta-bungarotoxin. |
| popPK | Wernicke_1975 | irrelevant | 0 | 0 | no_text gate: only 44 chars of text extracted (&lt; 400) |
| popPK | Yates_1990 | irrelevant | 0 | 0 | The study examines the mechanism of action (eicosanoid production) in an in vitro synaptosome preparation and does not report any quantitative toxicokinetic parameters (e.g., half-life, clearance, volume of distribution) for beta-bungarotoxin. |
| popPK | Yates_1991 | irrelevant | 0 | 0 | The study reports mechanistic data on Na+/K+ ATPase activity and membrane potential in rat brain synaptosomes, not toxicokinetic parameters such as half-life, clearance, or distribution. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbeta_bungarotoxin%5D&body=Drug%3A%20beta_bungarotoxin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_beta_bungarotoxin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
