<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Protriptyline&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Protriptyline_Moody1977_reference&quot;,&quot;label&quot;:&quot;Moody_1977_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_protriptyline/Protriptyline_Moody1977_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Protriptyline_Ziegler1978_reference&quot;,&quot;label&quot;:&quot;Ziegler_1978_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_protriptyline/Protriptyline_Ziegler1978_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

# Protriptyline

- **generic name:** Protriptyline
- **T3DB:** [T3D2759](http://www.t3db.ca/toxins/T3D2759) · **DrugBank:** [DB00344](https://go.drugbank.com/drugs/DB00344) · **PubChem:** [CID 4976](https://pubchem.ncbi.nlm.nih.gov/compound/4976)
- **groups:** approved

## About

Protriptyline hydrochloride is a dibenzocycloheptene-derivative tricyclic antidepressant (TCA). TCAs are structurally similar to phenothiazines. They contain a tricyclic ring system with an alkyl amine substituent on the central ring. …

- **Category:** Drug, Synthetic Toxin
- **Route of exposure:** oral
- **Sources and uses:** For the treatment of depression.
- **Mechanism of toxicity:** Protriptyline acts by decreasing the reuptake of norepinephrine and serotonin (5-HT).
- **Health effects:** Protriptyline shares side effects common to all tricyclic antidepressants. The most frequent of these are dry mouth, constipation, urinary retention, increased heart rate, sedation, irritability, dizziness, decreased coordination, anxiety, blood disorders, confusion, decreased libido, dizziness, flushing, headache, impotence, insomnia, low blood pressure, nightmares, rapid or irregular heartbeat, rash, seizures, sensitivity to sunlight, stomach and intestinal problems. …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2759">T3DB T3D2759</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 438-60-8 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:8597">ChEBI 8597</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| protriptyline | parent | 263.384 | C19H21N | PubChem | [4976](https://pubchem.ncbi.nlm.nih.gov/compound/4976) | Moody_1977, Ziegler_1978 |

## Start here

> **Moody_1977_reference** — <span class="pk-badge pk-badge--neutral">Not simulated</span> patients undergoing antidepressant therapy; volunteers, n = 35. [Run it in the simulator](drugs/toxin_protriptyline/Protriptyline_Moody1977_reference.md?tab=Simulation) · [record](drugs/toxin_protriptyline/Protriptyline_Moody1977_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> | [Moody_1977_reference](drugs/toxin_protriptyline/Protriptyline_Moody1977_reference.md) | ▶ model + simulator | retention, 1 pool | 1 | Moody JP et al., Pharmacokinetic aspects of protriptylin…, European journal of clinica… (1977) | [10.1007/BF00561788](https://doi.org/10.1007/BF00561788) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> | [Ziegler_1978_reference](drugs/toxin_protriptyline/Protriptyline_Ziegler1978_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Ziegler VE et al., Protriptyline kinetics, Clinical pharmacology and t… (1978) | [10.1002/cpt1978235580](https://doi.org/10.1002/cpt1978235580) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=protriptyline).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| distribution | placenta | `ABCB1` inhibitor | DrugBank actor |
| distribution | testis | `ABCB1` inhibitor | DrugBank actor |
| excretion | kidney | `ABCB1` inhibitor | DrugBank actor |
| excretion | liver | `ABCB1` inhibitor | DrugBank actor |
| — | brain | `SLC6A4` inhibitor | DrugBank actor |
| — | platelet | `SLC6A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: SLC6A2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-13 03:32 | 2:10 | 2/0/0 | 0/0/0 | 0/0/0 | 51,800/2,874 | einfracz / qwen3.8-flash-next | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 21 matched, 21 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 2  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ziegler_1978.pdf` | Ziegler VE et al., Protriptyline kinetics, Clinical pharmacology and t… (1978) | popPK | 10 | [10.1002/cpt1978235580](https://doi.org/10.1002/cpt1978235580) | [639433](https://pubmed.ncbi.nlm.nih.gov/639433) | The text explicitly reports quantitative toxicokinetic parameters (half-life, volume of distribution, first-pass metabolism) for protriptyline in human subjects. |
| `Moody_1977.pdf` | Moody JP et al., Pharmacokinetic aspects of protriptylin…, European journal of clinica… (1977) | popPK | 9 | [10.1007/BF00561788](https://doi.org/10.1007/BF00561788) | [832658](https://pubmed.ncbi.nlm.nih.gov/832658) | The paper reports quantitative human kinetic parameters for protriptyline, including a half-life range (54-198 h) and plasma concentration ranges, with numeric values clearly present in the abstract. |

<sub>queue written 2026-11-13 03:32 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Amsterdam_1980 | irrelevant | 1 | 0 | The paper is a review that mentions protriptyline only to state that more studies are needed for its plasma levels, providing no quantitative kinetic parameters. |
| popPK | Anderson_1981 | irrelevant | 0 | 0 | The paper reports pharmacokinetics for bretylium, not protriptyline; protriptyline is mentioned only as a co-administered drug for side effects. |
| popPK | Daws_1998 | irrelevant | 0 | 0 | Protriptyline is used as a pharmacological tool (NET inhibitor) to study serotonin clearance kinetics, but no toxicokinetic parameters (e.g., half-life, clearance, volume of distribution) of protriptyline itself are reported. |
| popPK | Frazer_1998 | irrelevant | 0 | 0 | Protriptyline is used as a pharmacological tool to inhibit norepinephrine uptake and assess 5-HT clearance kinetics, with no quantitative toxicokinetic parameters (e.g., half-life, clearance, Vd) reported for protriptyline itself. |
| popPK | Furlanut_1990 | irrelevant | 2 | 0 | The paper is a review summarizing available data for several TCAs including protriptyline, providing no original quantitative kinetic parameters or numeric values in the evidence. |
| popPK | Johnson-Davis_2012 | irrelevant | 0 | 0 | The paper describes an analytical method for quantifying tricyclic antidepressants (including protriptyline) but reports no toxicokinetic parameters or numeric disposition data. |
| popPK | Risch_1979 | irrelevant | 1 | 0 | The paper is a review of clinical efficacy relationships, does not provide original quantitative toxicokinetic parameters for protriptyline, and protriptyline is only mentioned as needing further study. |
| popPK | Rudorfer_1999 | irrelevant | 1 | 0 | The text is a review article summarizing general pharmacokinetics and mentions protriptyline's half-life qualitatively but provides no quantitative parameters or original data. |
| popPK | Sung_1990 | irrelevant | 0 | 0 | The paper reports physicochemical properties (polymer partition coefficients and in vitro release rates) of protriptyline for drug delivery applications, not biological toxicokinetic parameters in organisms. |
| popPK | Viala_1980 | irrelevant | 2 | 0 | The paper is a review summarizing other studies without providing specific numerical kinetic parameters or a model for protriptyline in the provided text. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bprotriptyline%5D&body=Drug%3A%20protriptyline%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_protriptyline/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-13 03:32 UTC</sub>
