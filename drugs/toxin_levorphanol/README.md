<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Levorphanol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Levorphanol_Dixon1983_reference&quot;,&quot;label&quot;:&quot;Dixon_1983_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_levorphanol/Levorphanol_Dixon1983_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

# Levorphanol

- **generic name:** Levorphanol
- **T3DB:** [T3D2914](http://www.t3db.ca/toxins/T3D2914) · **DrugBank:** [DB00854](https://go.drugbank.com/drugs/DB00854) · **PubChem:** [CID 5359272](https://pubchem.ncbi.nlm.nih.gov/compound/5359272)
- **groups:** approved

## About

Levorphanol is only found in individuals that have used or taken this drug. It is a narcotic analgesic that may be habit-forming. It is nearly as effective orally as by injection. [PubChem]Like other mu-agonist opioids it is believed to act at receptors in the periventricular and periaqueductal gray matter in both the brain and spinal cord to alter the transmission and perception of pain.

- **Category:** Drug, Synthetic Toxin
- **Route of exposure:** subcutaneous, Intravenous, or Intramuscular injection, oral. Levorphanol is well absorbed after PO administration with peak plasma concentrations occurring approximately 1 hour after dosing.
- **Sources and uses:** For the management of moderate to severe pain or as a preoperative medication where an opioid analgesic is appropriate
- **Mechanism of toxicity:** Like other mu-agonist opioids it is believed to act at receptors in the periventricular and periaqueductal gray matter in both the brain and spinal cord to alter the transmission and perception of pain.
- **Health effects:** Medical problems can include congested lungs, liver disease, tetanus, infection of the heart valves, skin abscesses, anemia and pneumonia. Death can occur from overdose.
- **Acute toxicity:** LD50: 150 mg/kg (Oral, Rat)
- **Treatment:** The specific treatment of suspected levorphanol tartrate overdosage is immediate establishment of an adequate airway and ventilation, followed (if necessary) by intravenous naloxone. …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2914">T3DB T3D2914</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 77-07-6 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:119572">ChEBI 119572</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| levorphanol | parent | 257.377 | C17H23NO | PubChem | [5359272](https://pubchem.ncbi.nlm.nih.gov/compound/5359272) | Dixon_1983 |

## Start here

> **Dixon_1983_reference** — <span class="pk-badge pk-badge--blue">Simulated</span> patients with pain. [Run it in the simulator](drugs/toxin_levorphanol/Levorphanol_Dixon1983_reference.md?tab=Simulation) · [record](drugs/toxin_levorphanol/Levorphanol_Dixon1983_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Simulated" data-sim="yes"></span><span class="pk-badge pk-badge--blue">Simulated</span> | [Dixon_1983_reference](drugs/toxin_levorphanol/Levorphanol_Dixon1983_reference.md) | ▶ model + simulator | retention, 1 pool | 1 | Dixon R et al., Levorphanol: pharmacokinetics and stead…, Research communications in… (1983) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by qwen3.8-flash-next, p(non-human) 1.00).">rat</span> | [Grosman_1982_histamine_release](drugs/toxin_levorphanol/pd_Grosman_1982_histamine_release.md) | histamine release ← levorphanol · model not identified | — | Grosman N et al., Histamine release from isolated rat mas…, Agents and actions (1982) | [10.1007/BF01965920](https://doi.org/10.1007/BF01965920) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by qwen3.8-flash-next, p(non-human) 0.95).">mouse</span> | [Hughes_1975_inhibition](drugs/toxin_levorphanol/pd_Hughes_1975_inhibition.md) | inhibition of electrically evoked contraction ← levorphanol · inhibition effect | — | Hughes J et al., Effect of morphine on adrenergic transm…, British journal of pharmaco… (1975) | [10.1111/j.1476-5381.1975.tb07373.x](https://doi.org/10.1111/j.1476-5381.1975.tb07373.x) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-15 08:44 | 2:48 | 1/0/0 | 2/0/0 | 0/0/0 | 82,915/2,408 | einfracz / qwen3.8-flash-next | 1 | 0/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 45 matched, 44 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dixon_1983.pdf` | Dixon R et al., Levorphanol: pharmacokinetics and stead…, Research communications in… (1983) | popPK | 10 |  | [6194546](https://pubmed.ncbi.nlm.nih.gov/6194546) | The paper reports quantitative pharmacokinetic parameters including terminal half-lives and protein binding percentages for levorphanol in humans. |

<sub>queue written 2026-11-15 08:43 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Bonn_2010 | not_relevant | 2 | 0 | The study investigates the in vitro catalytic properties and metabolic pathways of CYP2D6 and CYP3A4 enzymes, but does not report on human genotype/phenotype variations or their effect on PK/PD parameters. |
| PGx | Cook_2000 | not_relevant | 2 | 0 | The study compares sex and strain differences (F344 vs Lewis) rather than specific gene variants/genotypes affecting pharmacokinetics or pharmacodynamics of levorphanol. |
| PGx | DePriest_2015 | not_relevant | 0 | 0 | The paper mentions levorphanol only in the context of UGT metabolism and disposition matrices, without reporting any specific gene variant effects on its PK/PD parameters. |
| popPK | Ling_1981 | irrelevant | 0 | 0 | Levorphanol is mentioned only as a substance tested for cross-reactivity in the assay, with no kinetic parameters reported. |
| popPK | Prommer_2012 | irrelevant | 0 | 0 | The paper is a general review of pain management in the elderly where levorphanol is merely listed as an example of a Step 3 opioid, with no quantitative kinetic parameters reported. |
| popPK | Trescot_2008 | irrelevant | 0 | 0 | The provided text is the abstract of a review article discussing opioid pharmacology generally, with no specific numeric kinetic parameters for levorphanol reported in the evidence. |
| popPK | Wen_2022 | irrelevant | 2 | 0 | The paper compares equianalgesic tools and notes that levorphanol pharmacokinetic data were obtained from labels, but no actual numeric parameters for levorphanol are presented in the text or evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blevorphanol%5D&body=Drug%3A%20levorphanol%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_levorphanol/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-15 08:43 UTC</sub>
