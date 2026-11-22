<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Methyprylon&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Methyprylon_Contos1991_reference&quot;,&quot;label&quot;:&quot;Contos_1991_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_methyprylon/Methyprylon_Contos1991_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methyprylon_Gwilt1985_reference&quot;,&quot;label&quot;:&quot;Gwilt_1985_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_methyprylon/Methyprylon_Gwilt1985_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# Methyprylon

- **generic name:** Methyprylon
- **T3DB:** [T3D2987](http://www.t3db.ca/toxins/T3D2987) · **DrugBank:** [DB01107](https://go.drugbank.com/drugs/DB01107) · **PubChem:** [CID 4162](https://pubchem.ncbi.nlm.nih.gov/compound/4162)
- **groups:** approved, illicit, withdrawn

## About

Methyprylon is a sedative of the piperidinedione derivative family. This medicine was used for treating insomnia, but is now rarely used as it has been replaced by newer drugs with less side effects, such as benzodiazepines. Methyprylon was withdrawn from the US market in June 1965 and the Canadian market in September 1990. [Wikipedia]

- **Category:** Drug, Synthetic Toxin
- **Sources and uses:** For the treatment of insomnia.
- **Mechanism of toxicity:** Methyprylon binds at a distinct binding site associated with a Cl<sup>-</sup> ionopore at the GABA<sub>A</sub> receptor, increasing the duration of time for which the Cl<sup>-</sup> ionopore is open. The post-synaptic inhibitory effect of GABA in the thalamus is, therefore, prolonged.
- **Health effects:** They cause slurred speech, disorientation and "drunken" behavior. They are physically and psychologically addictive.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2987">T3DB T3D2987</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 125-64-4 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:774741">ChEBI 774741</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| Methyprylon | parent | 183.251 | C10H17NO2 | PubChem | [4162](https://pubchem.ncbi.nlm.nih.gov/compound/4162) | Contos_1991, Gwilt_1982, Gwilt_1985 |
| 5-methylpyrithyldione | metabolite | 181.235 | C10H15NO2 | PubChem | [68842](https://pubchem.ncbi.nlm.nih.gov/compound/68842) | Contos_1991 |

## Start here

> **Contos_1991_reference** — <span class="pk-badge pk-badge--blue">Simulated</span> overdosed patient, n = 1. [Run it in the simulator](drugs/toxin_methyprylon/Methyprylon_Contos1991_reference.md?tab=Simulation) · [record](drugs/toxin_methyprylon/Methyprylon_Contos1991_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Simulated" data-sim="yes"></span><span class="pk-badge pk-badge--blue">Simulated</span> | [Contos_1991_reference](drugs/toxin_methyprylon/Methyprylon_Contos1991_reference.md) | ▶ model + simulator | retention, 1 pool | 5 | Contos DA et al., Nonlinear elimination of methyprylon (n…, Journal of pharmaceutical s… (1991) | [10.1002/jps.2600800813](https://doi.org/10.1002/jps.2600800813) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: unreported model parameter default(s): ka</sub> | [Gwilt_1985_reference](drugs/toxin_methyprylon/Methyprylon_Gwilt1985_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Gwilt PR et al., Pharmacokinetics of methyprylon followi…, Journal of pharmaceutical s… (1985) | [10.1002/jps.2600740920](https://doi.org/10.1002/jps.2600740920) |
| <span class="pk-rf" hidden data-species="dog" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Gwilt_1982_reference](drugs/toxin_methyprylon/Methyprylon_Gwilt1982_reference.md) | — | 2-compartment (no model) | 9 | Gwilt PR et al., The effect of oral castor oil on the di…, Canadian Anaesthetists' Soc… (1982) | [10.1007/BF03007530](https://doi.org/10.1007/BF03007530) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-15 08:27 | 2:01 | 2/1/0 | 0/0/0 | 0/0/0 | 39,742/5,205 | einfracz / qwen3.8-flash-next | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 1  ·  needs review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gwilt_1985.pdf` | Gwilt PR et al., Pharmacokinetics of methyprylon followi…, Journal of pharmaceutical s… (1985) | popPK | 10 | [10.1002/jps.2600740920](https://doi.org/10.1002/jps.2600740920) | [2866242](https://pubmed.ncbi.nlm.nih.gov/2866242) | The paper reports quantitative pharmacokinetic parameters (half-life, clearance, volume of distribution) for methyprylon in human subjects. |
| `Contos_1991.pdf` | Contos DA et al., Nonlinear elimination of methyprylon (n…, Journal of pharmaceutical s… (1991) | popPK | 9 | [10.1002/jps.2600800813](https://doi.org/10.1002/jps.2600800813) | [1686463](https://pubmed.ncbi.nlm.nih.gov/1686463) | The abstract explicitly reports quantitative half-lives for methyprylon (4.4 h) and its metabolite (8 h) in a human overdose case. |
| `Chang_1973.pdf` | Chang TM et al., Microcapsule artificial kidney: treatme…, Canadian Medical Associatio… (1973) | popPK | 6 |  | [4405716](https://pubmed.ncbi.nlm.nih.gov/4405716) | The paper reports clearance values for methyprylon in humans, which is a quantitative toxicokinetic parameter, but the specific numerical values are not present in the provided text. |

<sub>queue written 2026-11-15 08:26 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chang_1973 | relevant | 6 | 0 | The paper reports clearance values for methyprylon in humans, which is a quantitative toxicokinetic parameter, but the specific numerical values are not present in the provided text. |
| popPK | Chang_1973_2 | irrelevant | 0 | 0 | no_text gate: only 146 chars of text extracted (&lt; 400) |
| popPK | Koffler_1978 | irrelevant | 4 | 0 | The paper reports on hemoperfusion clearance rates generally but provides no specific numeric kinetic parameters for methyprylon in the evidence, nor does it distinguish its kinetic data from other drugs. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmethyprylon%5D&body=Drug%3A%20methyprylon%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_methyprylon/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-15 08:26 UTC</sub>
