<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Pinazepam&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pinazepam_Pacifici1983_reference&quot;,&quot;label&quot;:&quot;Pacifici_1983_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_pinazepam/Pinazepam_Pacifici1983_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# Pinazepam

- **generic name:** Pinazepam
- **T3DB:** [T3D4586](http://www.t3db.ca/toxins/T3D4586) · **PubChem:** [CID 40391](https://pubchem.ncbi.nlm.nih.gov/compound/40391)
- **groups:** investigational

## About

Pinazepam (marketed under the brand name Domar and Duna) is a drug which is a benzodiazepine. It possesses anxiolytic, anticonvulsant, sedative and skeletal muscle relaxant properties.

- **Category:** Drug, Synthetic Toxin
- **Mechanism of toxicity:** Benzodiazepines bind nonspecifically to benzodiazepine receptors BNZ1, which mediates sleep, and BNZ2, which affects affects muscle relaxation, anticonvulsant activity, motor coordination, and memory. As benzodiazepine receptors are thought to be coupled to gamma-aminobutyric acid-A (GABAA) receptors, this enhances the effects of GABA by increasing GABA affinity for the GABA receptor. …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4586">T3DB T3D4586</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 52463-83-9</small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| Pinazepam | parent | 308.765 | C18H13ClN2O | PubChem | [40391](https://pubchem.ncbi.nlm.nih.gov/compound/40391) | Pacifici_1983, Pacifici_1983_2 |
| N-desmethyldiazepam | metabolite | 270.716 | C15H11ClN2O | PubChem | [2997](https://pubchem.ncbi.nlm.nih.gov/compound/2997) | Pacifici_1983 |

## Start here

> **Pacifici_1983_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> rat. [Run it in the simulator](drugs/toxin_pinazepam/Pinazepam_Pacifici1983_reference.md?tab=Simulation) · [record](drugs/toxin_pinazepam/Pinazepam_Pacifici1983_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="adult" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Pacifici_1983_reference](drugs/toxin_pinazepam/Pinazepam_Pacifici1983_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Pacifici GM et al., Disposition, distribution, plasma prote…, European journal of drug me… (1983) | [10.1007/BF03188750](https://doi.org/10.1007/BF03188750) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no kinetic quantity — no half-life, rate constant, volume or clearance (exposur…</sub> | [Pacifici_1983_2_reference](drugs/toxin_pinazepam/Pinazepam_Pacifici1983v2_reference.md) | — | 1-compartment (no model) | 2 | Pacifici GM et al., Pharmacokinetics of pinazepam in health…, International journal of cl… (1983) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-12 19:55 | 2:46 | 1/1/0 | 0/0/0 | 0/0/0 | 20,284/3,857 | einfracz / qwen3.8-flash-next | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Pacifici_1983.pdf` | Pacifici GM et al., Disposition, distribution, plasma prote…, European journal of drug me… (1983) | popPK | 10 | [10.1007/BF03188750](https://doi.org/10.1007/BF03188750) | [6418547](https://pubmed.ncbi.nlm.nih.gov/6418547) | The text explicitly reports quantitative toxicokinetic parameters for pinazepam including clearance (7.23 ml/min), volume of distribution (1315 ml), and mentions Kel and half-life values, though the specific half-life numbers are not listed in this abstract snippet, the primary PK parameters are present and readable. |
| `Pacifici_1983_2.pdf` | Pacifici GM et al., Pharmacokinetics of pinazepam in health…, International journal of cl… (1983) | popPK | 10 |  | [6147314](https://pubmed.ncbi.nlm.nih.gov/6147314) | The paper provides explicit quantitative pharmacokinetic parameters for pinazepam (absorption rate constant, elimination rate constants, peak plasma levels) derived from a human study, with values directly present in the text. |

<sub>queue written 2026-11-12 19:53 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Boselli_1977 | irrelevant | 0 | 0 | no_text gate: only 49 chars of text extracted (&lt; 400) |
| popPK | Dinis-Oliveira_2017 | irrelevant | 0 | 0 | The paper is a review of oxazepam and related benzodiazepines where pinazepam is mentioned only as a parent drug that metabolizes to oxazepam, without reporting specific quantitative toxicokinetic parameters for pinazepam itself. |
| popPK | Jabor_1989 | irrelevant | 0 | 0 | The paper is about renal function prognosis in ICU patients and does not mention pinazepam or any toxicokinetic parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpinazepam%5D&body=Drug%3A%20pinazepam%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_pinazepam/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-12 19:53 UTC</sub>
