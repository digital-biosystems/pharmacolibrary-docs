<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Secobarbital&quot;}]"></div>

# Secobarbital

- **generic name:** Secobarbital
- **T3DB:** [T3D2784](http://www.t3db.ca/toxins/T3D2784) · **DrugBank:** [DB00418](https://go.drugbank.com/drugs/DB00418) · **PubChem:** [CID 5193](https://pubchem.ncbi.nlm.nih.gov/compound/5193)
- **groups:** approved, vet_approved

## About

Secobarbital is only found in individuals that have used or taken this drug. It is a barbiturate derivative drug. It possesses anaesthetic, anticonvulsant, sedative and hypnotic properties. …

- **Category:** Drug, Synthetic Toxin
- **Route of exposure:** oral, parenteral, rectal.
- **Sources and uses:** For the Short-term treatment of intractable insomnia for patients habituated to barbiturates
- **Mechanism of toxicity:** Secobarbital binds at a distinct binding site associated with a Cl<sup>-</sup> ionopore at the GABA<sub>A</sub> receptor, increasing the duration of time for which the Cl<sup>-</sup> ionopore is open. The post-synaptic inhibitory effect of GABA in the thalamus is, therefore, prolonged.
- **Health effects:** Secobarbital causes slurred speech, disorientation and "drunken" behavior. It is physically and psychologically addictive.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2784">T3DB T3D2784</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 76-73-3 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:9073">ChEBI 9073</a></small></p>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [De_1981_reference](drugs/toxin_secobarbital/Secobarbital_De1981_reference.md) | — | 1-compartment (no model) | 0 | De Broe ME et al., Clinical experience with prolonged comb…, Artificial organs (1981) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=secobarbital).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP1A2` inducer, `CYP2C19` inducer, `CYP2C8` inducer, `CYP2C9` inducer | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: CHRNA4 (target), CHRNA7 (target), GABRA1 (potentiator), GABRA2 (potentiator), GABRA3 (potentiator), GABRA4 (potentiator), GABRA5 (potentiator), GABRA6 (potentiator), GRIA2 (target), GRIK2 (target), GRIN1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-13 19:15 | 4:24 | 0/1/0 | 0/0/0 | 0/0/0 | 88,888/3,690 | einfracz / qwen3.8-flash-next | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 39 matched, 38 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `De_1981.pdf` | De Broe ME et al., Clinical experience with prolonged comb…, Artificial organs (1981) | popPK | 10 |  | [7247757](https://pubmed.ncbi.nlm.nih.gov/7247757) | The paper reports the hemoperfusion clearance of secobarbital (125 +/- 4 ml per min), which is a quantitative toxicokinetic parameter measured in humans. |
| `Somani_1975.pdf` | Somani SM et al., Pharmacokinetics of secobarbital in rab…, Archives internationales de… (1975) | popPK | 10 |  | [1164094](https://pubmed.ncbi.nlm.nih.gov/1164094) | The paper reports quantitative pharmacokinetic parameters (half-lives, partition coefficients, compartmental model) for secobarbital in rabbits, but no specific numeric values are present in the provided evidence text. |
| `Duncan_1991.pdf` | Duncan CC et al., Correlation of sedative effects with br…, Alcohol (Fayetteville, N.Y.) (1991) | popPK | 6 | [10.1016/s0741-8329(91)90136-k](https://doi.org/10.1016/s0741-8329(91)90136-k) | [1781923](https://pubmed.ncbi.nlm.nih.gov/1781923) | The paper describes kinetic differences (brain clearance rates) for secobarbital in mice, but the specific numeric parameter values (half-lives, clearance rates) are not present in the provided abstract text. |

<sub>queue written 2026-11-13 19:14 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chan_1994 | irrelevant | 1 | 0 | Secobarbital is mentioned only as a pharmacokinetic inducer (co-exposure) to study warfarin interactions, with no kinetic parameters reported for secobarbital itself. |
| popPK | Churchill_1976 | irrelevant | 0 | 0 | The paper reports methoxyflurane metabolism and toxicity outcomes where secobarbital is merely a co-exposure/comparator with no kinetic parameters for secobarbital itself reported. |
| popPK | Clifford_1974 | irrelevant | 0 | 0 | no_text gate: only 85 chars of text extracted (&lt; 400) |
| popPK | Cook_1987 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of pentobarbital enantiomers, with secobarbital mentioned only as a cross-reactant in the assay development. |
| popPK | Duncan_1991 | relevant | 6 | 0 | The paper describes kinetic differences (brain clearance rates) for secobarbital in mice, but the specific numeric parameter values (half-lives, clearance rates) are not present in the provided abstract text. |
| popPK | Khanna_1997 | irrelevant | 0 | 0 | The paper reports on pharmacological tolerance and cross-tolerance effects, not quantitative toxicokinetic parameters like half-life, clearance, or volume of distribution. |
| popPK | OReilly_1980 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters (clearance) for warfarin enantiomers, with secobarbital used only as a co-administered interacting agent, not as the subject of kinetic analysis. |
| popPK | Paladino_1983 | irrelevant | 1 | 0 | The paper reports kinetic parameters (clearance) for theophylline, the victim drug, not for secobarbital, the perpetrator; secobarbital is merely the co-administered agent causing the interaction. |
| popPK | Pan_2011 | irrelevant | 0 | 0 | The paper identifies secobarbital as an hPXR activator but reports no toxicokinetic parameters such as clearance, volume of distribution, or rate constants. |
| PGx | Sakuma_1999 | not_relevant | 0 | 0 | The paper reports that secobarbital induces CYP1A2 expression in mice; it does not report how a human gene variant affects secobarbital PK/PD. |
| popPK | Somani_1975 | relevant | 10 | 0 | The paper reports quantitative pharmacokinetic parameters (half-lives, partition coefficients, compartmental model) for secobarbital in rabbits, but no specific numeric values are present in the provided evidence text. |
| popPK | Verpooten_1982 | irrelevant | 2 | 0 | The paper mentions secobarbital follows a two-compartment model but provides no specific numeric toxicokinetic parameters (e.g., Vd, CL, t1/2) in the provided text. |
| popPK | Wehner_1992 | irrelevant | 0 | 0 | The paper focuses on genetic correlations of sleep-time responses and lipid solubility, reporting no quantitative toxicokinetic parameters (such as half-life, clearance, or volume of distribution) for secobarbital. |
| popPK | Yih_1976 | irrelevant | 1 | 1 | The study focuses on the pharmacokinetics of brallobarbital, with secobarbital appearing only as a co-exposed component that affects brallobarbital's half-life, without reporting kinetic parameters for secobarbital itself. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsecobarbital%5D&body=Drug%3A%20secobarbital%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_secobarbital/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-13 19:14 UTC</sub>
