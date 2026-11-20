<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Fungal toxins&quot;,&quot;href&quot;:&quot;toxins/FUNG.md&quot;},{&quot;label&quot;:&quot;Enniatin A&quot;}]"></div>

# Enniatin A

- **generic name:** Enniatin A
- **T3DB:** [T3D3756](http://www.t3db.ca/toxins/T3D3756) · **PubChem:** [CID 16727691](https://pubchem.ncbi.nlm.nih.gov/compound/16727691)

## About

Enniatins are mycotoxins that appear in nature as a mixture of cyclohexadepsipeptides produced by bacteria, fungi, and plants. They may be found in contaminated cereal crops. Enniatins have various biological activities and can act as enzyme inhibitors, antifungal and antibacterial agents, and immunomodulatory substances.

- **Category:** Fungal Toxin, Natural Toxin
- **Route of exposure:** oral, dermal, inhalation, and parenteral (contaminated drugs).
- **Sources and uses:** Enniatins are mycotoxins that appear in nature as a mixture of cyclohexadepsipeptides produced by bacteria, fungi, and plants. They may be found in contaminated cereal crops.
- **Mechanism of toxicity:** Enniatins are toxic due to their ability to act as ionophores, changing ion transport across membranes and disrupting the ionic selectivity of cell walls. In the membrane, enniatins form a dimeric structure and are able to transport monovalent ions (especially K+, Mg2+,Ca2+ and Na+) across the membranes. …
- **Health effects:** Enniatins are cytotoxic. They may also act as antifungal and antibacterial agents, and immunomodulatory substances.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D3756">T3DB T3D3756</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 2503-13-1</small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| Enniatin A | parent | 681.912 | C36H63N3O9 | PubChem | [57339252](https://pubchem.ncbi.nlm.nih.gov/compound/57339252) | Bhateria_2022 |
| enniatin_a | metabolite | 681.9 | C36H63N3O9 | PubChem | [16727691](https://pubchem.ncbi.nlm.nih.gov/compound/16727691) | Bhateria_2022 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Bhateria_2022_reference](drugs/toxin_enniatin_a/EnniatinA_Bhateria2022_reference.md) | held back | 1-compartment, IV | 5 | Bhateria M et al., Cytochrome P450 isoforms contribution,…, Food and chemical toxicolog… (2022) | [10.1016/j.fct.2022.112988](https://doi.org/10.1016/j.fct.2022.112988) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-18 23:08 | 7:58 | 1/0/0 | 0/0/0 | 0/0/0 | 211,541/13,170 | einfracz / qwen3.8-flash-next | 4 | 1/3 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bhateria_2022.pdf` | Bhateria M et al., Cytochrome P450 isoforms contribution,…, Food and chemical toxicolog… (2022) | popPK | 10 | [10.1016/j.fct.2022.112988](https://doi.org/10.1016/j.fct.2022.112988) | [35398446](https://pubmed.ncbi.nlm.nih.gov/35398446) | The paper reports specific quantitative toxicokinetic parameters for enniatin A, including hepatic clearance in rats and humans, absolute oral bioavailability, Tmax, and plasma protein binding. |

<sub>queue written 2026-11-18 23:03 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Bhateria_2022 | not_relevant | 0 | 0 | The paper reports standard toxicokinetic parameters and metabolic pathway (CYP3A4 involvement) but does not investigate the impact of any specific gene variants, genotypes, or phenotypes on PK/PD parameters. |
| popPK | Dasí-Navarro_2022 | irrelevant | 1 | 0 | The paper describes an analytical method for detecting enniatins in human urine but reports no toxicokinetic parameters (half-life, clearance, PBPK, etc.) for enniatin_a; it is an exposure/biomonitoring study. |
| popPK | Dasí-Navarro_2024 | irrelevant | 0 | 0 | The paper is an epidemiological biomonitoring study reporting urinary concentrations of mycotoxins as markers of exposure, with no toxicokinetic parameters (half-lives, clearance, partition coefficients, etc.) for enniatin A. |
| popPK | Devreese_2013 | irrelevant | 4 | 0 | The paper validates an analytical method and mentions applicability to TK studies but reports no actual kinetic parameters (half-life, clearance, etc.) or concentration-time data in the evidence. |
| popPK | Gao_2026 | irrelevant | 1 | 0 | The paper describes an analytical method for detecting mycotoxins in food and urine, reporting only method validation parameters (LOD/LOQ/recovery) and occurrence data, with no toxicokinetic parameters (e.g., clearance, half-life, volume of distribution) for enniatin_a. |
| popPK | Liu_2020 | irrelevant | 0 | 0 | The paper is an analytical method development and human biomonitoring study reporting method validation parameters (LOD, LOQ, recovery) and exposure concentrations, but contains no quantitative toxicokinetic parameters (such as half-life, clearance, or absorption rates) for enniatin_a. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Benniatin_a%5D&body=Drug%3A%20enniatin_a%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_enniatin_a/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-18 23:03 UTC</sub>
