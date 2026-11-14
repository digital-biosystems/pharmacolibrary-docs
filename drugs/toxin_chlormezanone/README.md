<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Chlormezanone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Chlormezanone_Bernard1991_reference&quot;,&quot;label&quot;:&quot;Bernard_1991_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_chlormezanone/Chlormezanone_Bernard1991_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Chlormezanone_Gautier1990_reference&quot;,&quot;label&quot;:&quot;Gautier_1990_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_chlormezanone/Chlormezanone_Gautier1990_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

# Chlormezanone

- **generic name:** Chlormezanone
- **T3DB:** [T3D3009](http://www.t3db.ca/toxins/T3D3009) · **DrugBank:** [DB01178](https://go.drugbank.com/drugs/DB01178) · **PubChem:** [CID 2717](https://pubchem.ncbi.nlm.nih.gov/compound/2717)
- **groups:** approved, withdrawn

## About

Chlormezanone is only found in individuals that have used or taken this drug. It is a non-benzodiazepine that is used in the management of anxiety. It has been suggested for use in the treatment of muscle spasm. [PubChem]Chlormezanone binds to central benzodiazepine receptors which interact allosterically with GABA receptors. …

- **Category:** Drug, Synthetic Toxin
- **Sources and uses:** Used in the management of anxiety and in the treatment of muscle spasm.
- **Mechanism of toxicity:** Chlormezanone binds to central benzodiazepine receptors which interact allosterically with GABA receptors. This potentiates the effects of the inhibitory neurotransmitter GABA, increasing the inhibition of the ascending reticular activating system and blocking the cortical and limbic arousal that occurs following stimulation of the reticular pathways.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D3009">T3DB T3D3009</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 80-77-3 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:3619">ChEBI 3619</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| chlormezanone | parent | 273.731 | C11H12ClNO3S | PubChem | [2717](https://pubchem.ncbi.nlm.nih.gov/compound/2717) | Bernard_1991, Gautier_1990 |

## Start here

> **Bernard_1991_reference** — <span class="pk-badge pk-badge--neutral">Not simulated</span> young volunteers and elderly patients, n = 13. [Run it in the simulator](drugs/toxin_chlormezanone/Chlormezanone_Bernard1991_reference.md?tab=Simulation) · [record](drugs/toxin_chlormezanone/Chlormezanone_Bernard1991_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> | [Bernard_1991_reference](drugs/toxin_chlormezanone/Chlormezanone_Bernard1991_reference.md) | ▶ model + simulator | retention, 1 pool | 2 | Bernard N et al., Pharmacokinetics of chlormezanone in el…, European journal of clinica… (1991) | [10.1007/BF00314993](https://doi.org/10.1007/BF00314993) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> | [Gautier_1990_reference](drugs/toxin_chlormezanone/Chlormezanone_Gautier1990_reference.md) | ▶ model + simulator | retention, 1 pool | 4 | Gautier V et al., [Pharmacokinetics of chlormezanone in h…, Therapie (1990) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=chlormezanone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: TSPO (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-13 04:36 | 1:15 | 2/0/0 | 0/0/0 | 0/0/0 | 36,801/10,235 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 2  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gautier_1990.pdf` | Gautier V et al., [Pharmacokinetics of chlormezanone in h…, Therapie (1990) | popPK | 10 |  | [2399514](https://pubmed.ncbi.nlm.nih.gov/2399514) | Human pharmacokinetic parameters (Cmax, Tmax, AUC, terminal half-life, accumulation, T1/2β) for chlormezanone are reported numerically in full. |
| `Bernard_1991.pdf` | Bernard N et al., Pharmacokinetics of chlormezanone in el…, European journal of clinica… (1991) | popPK | 9 | [10.1007/BF00314993](https://doi.org/10.1007/BF00314993) | [1815974](https://pubmed.ncbi.nlm.nih.gov/1815974) | Human pharmacokinetic study of chlormezanone itself with half-lives (38 h young, 54 h elderly), renal excretion, and AUC/Cmax reported directly in the abstract. |

<sub>queue written 2026-11-13 04:35 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Saano_1990 | irrelevant | 2 | 1 | Chlormezanone appears only as a co-administered drug affecting paracetamol kinetics; no chlormezanone kinetic parameters are reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bchlormezanone%5D&body=Drug%3A%20chlormezanone%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_chlormezanone/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-13 04:35 UTC</sub>
