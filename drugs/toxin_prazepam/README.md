<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Prazepam&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Prazepam_Klle1981_reference&quot;,&quot;label&quot;:&quot;K\u00f6lle_1981_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_prazepam/Prazepam_Klle1981_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# Prazepam

- **generic name:** Prazepam
- **T3DB:** [T3D3054](http://www.t3db.ca/toxins/T3D3054) · **DrugBank:** [DB01588](https://go.drugbank.com/drugs/DB01588) · **PubChem:** [CID 4890](https://pubchem.ncbi.nlm.nih.gov/compound/4890)
- **groups:** approved, illicit

## About

Prazepam is only found in individuals that have used or taken this drug. It is a benzodiazepine that is used in the treatment of anxiety disorders. It is a schedule IV drug in the U.S. …

- **Category:** Drug, Synthetic Toxin
- **Route of exposure:** oral
- **Sources and uses:** For the treatment of anxiety disorders.
- **Mechanism of toxicity:** Prazepam is believed to stimulate GABA receptors in the ascending reticular activating system. Since GABA is inhibitory, receptor stimulation increases inhibition and blocks both cortical and limbic arousal following stimulation of the brain stem reticular formation.
- **Health effects:** They cause slurred speech, disorientation and "drunken" behavior. They are physically and psychologically addictive.
- **Carcinogenicity:** IARC group 3, not classifiable as to its carcinogenicity to humans.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D3054">T3DB T3D3054</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 2955-38-6 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:195969">ChEBI 195969</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| Prazepam | parent | 324.808 | C19H17ClN2O | PubChem | [4890](https://pubchem.ncbi.nlm.nih.gov/compound/4890) | Allen_1980, Kölle_1981 |
| Desmethyldiazepam | metabolite | 270.716 | C15H11ClN2O | PubChem | [2997](https://pubchem.ncbi.nlm.nih.gov/compound/2997) | Allen_1980 |
| Norprazepam | metabolite | — (mass units only) | — | — | — | — |

## Start here

> **Kölle_1981_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> unknown. [Run it in the simulator](drugs/toxin_prazepam/Prazepam_Klle1981_reference.md?tab=Simulation) · [record](drugs/toxin_prazepam/Prazepam_Klle1981_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Kölle_1981_reference](drugs/toxin_prazepam/Prazepam_Klle1981_reference.md) | ▶ model + simulator | retention, 1 pool | 1 | Kölle EU, [Pharmacokinetics of oral prazepam], Fortschritte der Medizin (1981) | — |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Allen_1980_reference](drugs/toxin_prazepam/Prazepam_Allen1980_reference.md) | — | 1-compartment (no model) | 0 | Allen MD et al., Desmethyldiazepam kinetics in the elder…, Clinical pharmacology and t… (1980) | [10.1038/clpt.1980.150](https://doi.org/10.1038/clpt.1980.150) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=prazepam).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: GABRA1 (positive allosteric modulator), GABRA1 (target), TSPO (modulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-12 23:38 | 3:57 | 1/1/0 | 0/0/0 | 0/0/0 | 65,875/4,915 | einfracz / qwen3.8-flash-next | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 26 matched, 26 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dios-Vieitez_1991.pdf` | Dios-Vieitez MC et al., Pharmacokinetic profiles of prazepam an…, European journal of drug me… (1991) | popPK | 10 |  | [1820896](https://pubmed.ncbi.nlm.nih.gov/1820896) | The paper explicitly states it studied pharmacokinetics of prazepam in rats, but the provided evidence contains no numeric kinetic parameters (e.g., half-lives, clearances). |
| `Kölle_1981.pdf` | Kölle EU, [Pharmacokinetics of oral prazepam], Fortschritte der Medizin (1981) | popPK | 9 |  | [6790396](https://pubmed.ncbi.nlm.nih.gov/6790396) | The paper reports quantitative toxicokinetic parameters (elimination half-life, plasma clearance, peak/steady-state levels) for norprazepam, the primary active metabolite of prazepam, in humans. |
| `Allen_1980.pdf` | Allen MD et al., Desmethyldiazepam kinetics in the elder…, Clinical pharmacology and t… (1980) | popPK | 7 | [10.1038/clpt.1980.150](https://doi.org/10.1038/clpt.1980.150) | [6772370](https://pubmed.ncbi.nlm.nih.gov/6772370) | Reports quantitative toxicokinetic parameters (Vd, half-life, clearance) for the major active metabolite desmethyldiazepam following prazepam administration in humans, though values are given as ranges rather than individual subject data. |

<sub>queue written 2026-11-12 23:36 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Altamura_2013 | irrelevant | 2 | 0 | The text is a general review of anxiolytic pharmacokinetics that lists prazepam among many drugs but provides no specific numeric kinetic parameters for it in the extracted evidence. |
| popPK | Ansseau_1984 | irrelevant | 2 | 0 | The paper is a clinical efficacy comparison of dosing schedules and explicitly states that plasma pharmacokinetics alone may not predict activity, providing no specific kinetic parameters or values. |
| popPK | Boukhabza_1991 | irrelevant | 0 | 0 | Prazepam is mentioned only as the source of the internal standard (nor-prazepam) in an analytical method for other benzodiazepines, with no toxicokinetic parameters reported for prazepam itself. |
| popPK | Breimer_1980 | irrelevant | 2 | 0 | The paper is a general review of benzodiazepines where prazepam is only mentioned as having the metabolite N-desmethyldiazepam, with no quantitative kinetic parameters provided in the extracted text. |
| popPK | Dinis-Oliveira_2017 | irrelevant | 1 | 0 | The paper is a review focused on oxazepam kinetics, mentioning prazepam only as a precursor without providing any quantitative kinetic parameters for prazepam. |
| popPK | Dios-Vieitez_1991 | relevant | 10 | 0 | The paper explicitly states it studied pharmacokinetics of prazepam in rats, but the provided evidence contains no numeric kinetic parameters (e.g., half-lives, clearances). |
| popPK | Ruffalo_1981 | irrelevant | 1 | 0 | The paper is a review/discussion of drug interactions mentioning prazepam conceptually without reporting any quantitative toxicokinetic parameters or numeric data. |
| popPK | Smith_1979 | irrelevant | 0 | 0 | no_text gate: only 35 chars of text extracted (&lt; 400) |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bprazepam%5D&body=Drug%3A%20prazepam%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_prazepam/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-12 23:37 UTC</sub>
