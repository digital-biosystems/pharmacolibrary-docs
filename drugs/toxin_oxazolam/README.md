<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Oxazolam&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Oxazolam_Ochs1984_reference&quot;,&quot;label&quot;:&quot;Ochs_1984_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_oxazolam/Oxazolam_Ochs1984_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

# Oxazolam

- **generic name:** Oxazolam
- **T3DB:** [T3D4651](http://www.t3db.ca/toxins/T3D4651) · **PubChem:** [CID 62779](https://pubchem.ncbi.nlm.nih.gov/compound/62779)
- **groups:** experimental

## About

Oxazolam is a drug which is a benzodiazepine derivative. It possesses anxiolytic, anticonvulsant, sedative and skeletal muscle relaxant properties. It is a prodrug for desmethyldiazepam.

- **Category:** Drug, Synthetic Toxin
- **Mechanism of toxicity:** Benzodiazepines bind nonspecifically to benzodiazepine receptors BNZ1, which mediates sleep, and BNZ2, which affects affects muscle relaxation, anticonvulsant activity, motor coordination, and memory. As benzodiazepine receptors are thought to be coupled to gamma-aminobutyric acid-A (GABAA) receptors, this enhances the effects of GABA by increasing GABA affinity for the GABA receptor. …
- **Treatment:** General supportive measures should be employed, along with intravenous fluids, and an adequate airway maintained. …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4651">T3DB T3D4651</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 24143-17-7</small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| Oxazolam | parent | 328.8 | C18H17ClN2O2 | PubChem | [62779](https://pubchem.ncbi.nlm.nih.gov/compound/62779) | Ochs_1984 |
| Desmethyldiazepam (DMDZ/nordiazepam) | metabolite | — (mass units only) | — | — | — | — |

## Start here

> **Ochs_1984_reference** — <span class="pk-badge pk-badge--blue">Simulated</span> healthy adult volunteers, n = 12. [Run it in the simulator](drugs/toxin_oxazolam/Oxazolam_Ochs1984_reference.md?tab=Simulation) · [record](drugs/toxin_oxazolam/Oxazolam_Ochs1984_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Simulated" data-sim="yes"></span><span class="pk-badge pk-badge--blue">Simulated</span> | [Ochs_1984_reference](drugs/toxin_oxazolam/Oxazolam_Ochs1984_reference.md) | ▶ model + simulator | retention, 1 pool | 2 | Ochs HR et al., Comparative single-dose kinetics of oxa…, Journal of clinical pharmac… (1984) | [10.1002/j.1552-4604.1984.tb01817.x](https://doi.org/10.1002/j.1552-4604.1984.tb01817.x) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-14 11:55 | 1:32 | 1/0/0 | 0/0/0 | 0/0/0 | 37,960/8,816 | ollama / glm-5.3-flash | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 2 matched, 2 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ochs_1984.pdf` | Ochs HR et al., Comparative single-dose kinetics of oxa…, Journal of clinical pharmac… (1984) | popPK | 9 | [10.1002/j.1552-4604.1984.tb01817.x](https://doi.org/10.1002/j.1552-4604.1984.tb01817.x) | [6150943](https://pubmed.ncbi.nlm.nih.gov/6150943) | Human single-dose study reporting quantitative kinetics of the DMDZ metabolite after oxazolam dosing (Cmax 115 ng/ml, Tmax 8.6 h, half-life 61 h, AUC ratios) with values in the abstract. |

<sub>queue written 2026-11-14 11:54 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fernandes_2014 | irrelevant | 0 | 0 | This is a clinical efficacy review of mexazolam; oxazolam appears only as a comparator drug, and no quantitative kinetic parameters for oxazolam itself are reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Boxazolam%5D&body=Drug%3A%20oxazolam%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_oxazolam/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-14 11:54 UTC</sub>
