<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Butabarbital&quot;}]"></div>

# Butabarbital

- **generic name:** Butabarbital
- **T3DB:** [T3D2721](http://www.t3db.ca/toxins/T3D2721) · **DrugBank:** [DB00237](https://go.drugbank.com/drugs/DB00237) · **PubChem:** [CID 2479](https://pubchem.ncbi.nlm.nih.gov/compound/2479)
- **groups:** approved, illicit, withdrawn

## About

Butabarbital (trade name Butisol) is a prescription barbiturate sleep aid. Butabarbital has a particularly fast onset of effects and short duration of action compared to other barbiturates, which makes it useful for certain applications such as treating severe insomnia and relieving anxiety before surgical procedures; however it is also relatively dangerous particularly when combined with alcohol, and so is now rarely used, although it is still prescribed in some Eastern European and South American countries. Its short duration of action gives butabarbital a high abuse potential, comparable to secobarbital.

- **Category:** Drug, Synthetic Toxin
- **Sources and uses:** Useful for certain applications such as treating severe insomnia and relieving anxiety before surgical procedures;
- **Mechanism of toxicity:** Butabarbital binds at a distinct binding site associated with a Cl<sup>-</sup> ionopore at the GABA<sub>A</sub> receptor, increasing the duration of time for which the Cl<sup>-</sup> ionopore is open. The post-synaptic inhibitory effect of GABA in the thalamus is, therefore, prolonged. …
- **Health effects:** They cause slurred speech, disorientation and "drunken" behavior. They are physically and psychologically addictive. …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2721">T3DB T3D2721</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 125-40-6 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:3228">ChEBI 3228</a></small></p>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=butabarbital).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` binder | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: CHRNA10 (inhibitor), GABRA1 (positive allosteric modulator), GABRA1 (target), GRIA1 (target), GRIA2 (target), GRIA3 (target), GRIA4 (target), GRIK1 (target), GRIK2 (target), GRIK3 (target), GRIK4 (target), GRIK5 (target), SLC2A1 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-13 17:13 | 1:22 | 0/0/0 | 0/0/0 | 0/0/0 | 26,702/1,384 | einfracz / qwen3.8-flash-next | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Barkan_1977 | irrelevant | 0 | 0 | The paper describes an analytical chemistry method for separating barbiturates from parabens using column chromatography and reports extraction recovery percentages, but contains no toxicokinetic parameters or in vivo/in vitro disposition data for butabarbital. |
| popPK | Frederiksen_1983 | irrelevant | 1 | 0 | Butabarbital is used solely as an internal standard for the analysis of pentobarbital; no kinetic parameters for butabarbital are reported. |
| popPK | Inkster_2007 | irrelevant | 0 | 0 | Butabarbital is used solely as an anesthetic agent for the procedure, not as the subject of toxicokinetic study. |
| popPK | Popa_1977 | irrelevant | 0 | 0 | Butabarbital is used solely as a negative control/comparator for bronchodilating activity, and no toxicokinetic parameters are reported. |
| popPK | Tang-Liu_1983 | irrelevant | 2 | 0 | The paper mentions butabarbital only as one example in a list of compounds for which literature data exists, but no specific numeric kinetic parameters or data for butabarbital are present in the text. |
| popPK | Zawertailo_2003 | irrelevant | 0 | 0 | The paper reports behavioral and abuse liability outcomes (dose-response, subjective scores) with no quantitative toxicokinetic parameters such as half-life, clearance, or partition coefficients. |
| popPK | unknown_1992 | irrelevant | 0 | 0 | no_text gate: only 56 chars of text extracted (&lt; 400) |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbutabarbital%5D&body=Drug%3A%20butabarbital%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_butabarbital/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
