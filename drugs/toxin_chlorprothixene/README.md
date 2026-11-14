<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Chlorprothixene&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Chlorprothixene_Bagli1996_reference&quot;,&quot;label&quot;:&quot;Bagli_1996_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_chlorprothixene/Chlorprothixene_Bagli1996_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# Chlorprothixene

- **generic name:** Chlorprothixene
- **T3DB:** [T3D3031](http://www.t3db.ca/toxins/T3D3031) · **DrugBank:** [DB01239](https://go.drugbank.com/drugs/DB01239) · **PubChem:** [CID 667466](https://pubchem.ncbi.nlm.nih.gov/compound/667466)
- **groups:** approved, investigational, withdrawn

## About

Chlorprothixene is only found in individuals that have used or taken this drug. It is a typical antipsychotic drug of the thioxanthene (tricyclic) class. Chlorprothixene exerts strong blocking effects by blocking the 5-HT2 D1, D2, D3, histamine H1, muscarinic and alpha1 adrenergic receptors. …

- **Category:** Drug, Synthetic Toxin
- **Route of exposure:** oral, intramuscular injection. Incomplete bioavailability.
- **Sources and uses:** For treatment of psychotic disorders (e.g. schizophrenia) and of acute mania occuring as part of bipolar disorders.
- **Mechanism of toxicity:** Chlorprothixene blocks postsynaptic mesolimbic dopaminergic D1 and D2 receptors in the brain; depresses the release of hypothalamic and hypophyseal hormones and is believed to depress the reticular activating system thus affecting basal metabolism, body temperature, wakefulness, vasomotor tone, and emesis.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D3031">T3DB T3D3031</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 113-59-7 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:3651">ChEBI 3651</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| chlorprothixene | parent | 315.859 | C18H18ClNS | PubChem | [667466](https://pubchem.ncbi.nlm.nih.gov/compound/667466) | Bagli_1996 |

## Start here

> **Bagli_1996_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> healthy male volunteers, n = 8. [Run it in the simulator](drugs/toxin_chlorprothixene/Chlorprothixene_Bagli1996_reference.md?tab=Simulation) · [record](drugs/toxin_chlorprothixene/Chlorprothixene_Bagli1996_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub> | [Bagli_1996_reference](drugs/toxin_chlorprothixene/Chlorprothixene_Bagli1996_reference.md) | ▶ model + simulator | 1-compartment, IV | 4 | Bagli M et al., Pharmacokinetics of chlorprothixene aft…, Arzneimittel-Forschung (1996) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=chlorprothixene).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| distribution | placenta | `ABCB1` inhibitor | DrugBank actor |
| distribution | testis | `ABCB1` inhibitor | DrugBank actor |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` inhibitor | DrugBank actor |
| excretion | liver | `ABCB1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CHRM1 (target), CHRM2 (target), CHRM3 (target), CHRM4 (target), CHRM5 (target), DRD1 (target), DRD2 (target), DRD3 (target), HRH1 (target), HTR1A (inhibitor), HTR2A (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-13 06:44 | 2:33 | 1/0/0 | 0/0/0 | 0/0/0 | 62,679/5,983 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 30 matched, 30 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bagli_1996.pdf` | Bagli M et al., Pharmacokinetics of chlorprothixene aft…, Arzneimittel-Forschung (1996) | popPK | 10 |  | [8901143](https://pubmed.ncbi.nlm.nih.gov/8901143) | Reported numeric PK parameters for chlorprothixene in healthy male volunteers, including terminal half-life, clearance, Vss, and absolute/relative oral bioavailability percentages, are fully present and readable in the provided evidence text. |
| `Zilberstein_1990.pdf` | Zilberstein D et al., Tricyclic drugs reduce proton motive fo…, Biochemical pharmacology (1990) | pd | 4 | [10.1016/0006-2952(90)90210-c](https://doi.org/10.1016/0006-2952(90)90210-c) | [1968745](https://www.ncbi.nlm.nih.gov/pubmed/1968745) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-11-13 06:43 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abernathy_1978 | irrelevant | 3 | 2 | Rat perfused-liver mechanistic study of CPX effects on BSP/ICG kinetics, but the numerically reported kinetic parameters (BSP clearance constants, Km) belong to BSP, not chlorprothixene disposition itself, and no numeric values appear in the evidence. |
| popPK | Akimova_2024 | irrelevant | 0 | 0 | Chlorprothixene appears only as a co-detected substance in a phenazepam poisoning case series, with no toxicokinetic parameters for it. |
| popPK | Ciszowski_2011 | irrelevant | 1 | 3 | The kinetic parameters (t1/2, kel) belong to sulpiride; chlorprothixene appears only as a qualitative urine finding with one serum concentration, no kinetic parameters. |
| popPK | Daniel_1992 | irrelevant | 1 | 0 | Chlorprothixene appears only as a co-administered drug altering carbamazepine kinetics; no kinetic parameters for chlorprothixene itself are reported or numerically present. |
| popPK | Kolade_2006 | irrelevant | 0 | 0 | Chlorprothixene is used only as an analytical internal standard; all kinetic parameters concern halofantrine, not chlorprothixene. |
| popPK | Li_1979 | irrelevant | 1 | 0 | This is an HPLC analytical method paper for isomer separation of thioxanthene neuroleptics, with no quantitative toxicokinetic parameters for chlorprothixene reported. |
| popPK | Paulzen_2017 | irrelevant | 1 | 0 | Chlorprothixene appears only as a co-medication in a study of risperidone's pharmacokinetics; no kinetic parameter of chlorprothixene itself is reported. |
| popPK | Raaflaub_1975 | irrelevant | 0 | 0 | no_text gate: only 49 chars of text extracted (&lt; 400) |
| popPK | Shalev_1987 | irrelevant | 0 | 0 | This is a clinical effect study measuring serum uric acid, creatinine and uric acid clearance under chlorprothixene treatment, with no kinetic parameters for chlorprothixene itself. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bchlorprothixene%5D&body=Drug%3A%20chlorprothixene%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_chlorprothixene/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-13 06:43 UTC</sub>
