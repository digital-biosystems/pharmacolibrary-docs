<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A05B&quot;,&quot;href&quot;:&quot;atc/A05B.md&quot;},{&quot;label&quot;:&quot;ornithine oxoglurate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;OrnithineOxoglurate_Wang2022_reference&quot;,&quot;label&quot;:&quot;Wang_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ornithine_oxoglurate/OrnithineOxoglurate_Wang2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# ornithine oxoglurate

- **generic name:** ornithine oxoglurate
- **ATC codes:** `A05BA06`
- **DrugBank:** [DB00129](https://go.drugbank.com/drugs/DB00129) · **PubChem:** [CID 6262](https://pubchem.ncbi.nlm.nih.gov/compound/6262)
- **molar mass:** 132.161 g/mol (C5H12N2O2) — DrugBank
- **groups:** approved, investigational, nutraceutical

## About

Ornithine oxoglurate is a liver therapy drug used for liver conditions. It is approved and also considered a nutraceutical, but detailed information on how widely it is used is lacking.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q410198](https://www.wikidata.org/wiki/Q410198) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ornithine (ornithine_oxoglurate) | parent | 132.161 | C5H12N2O2 | DrugBank | [6262](https://pubchem.ncbi.nlm.nih.gov/compound/6262) | Le_1997 |

## Start here

> **Wang_2022_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> review reference. [Run it in the simulator](drugs/drug_ornithine_oxoglurate/OrnithineOxoglurate_Wang2022_reference.md?tab=Simulation) · [record](drugs/drug_ornithine_oxoglurate/OrnithineOxoglurate_Wang2022_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 14.9 | L/h | 14.9 L/h | review reference | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Wang_2022_reference](drugs/drug_ornithine_oxoglurate/OrnithineOxoglurate_Wang2022_reference.md) |
| V | V | 33.2 | L | 33.2 L | review reference | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Wang_2022_reference](drugs/drug_ornithine_oxoglurate/OrnithineOxoglurate_Wang2022_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: unreported model parameter default(s): ka</sub> | [Wang_2022_reference](drugs/drug_ornithine_oxoglurate/OrnithineOxoglurate_Wang2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Wang X et al., Population Pharmacokinetic Analysis to…, Clinical pharmacokinetics (2022) | [10.1007/s40262-021-01075-1](https://doi.org/10.1007/s40262-021-01075-1) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Le_1997_reference](drugs/drug_ornithine_oxoglurate/OrnithineOxoglurate_Le1997_reference.md) | — | general linear (no model) | 4 | Le Bricon T et al., Ornithine alpha-ketoglutarate metabolis…, The American journal of cli… (1997) | [10.1093/ajcn/65.2.512](https://doi.org/10.1093/ajcn/65.2.512) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=ornithine_oxoglurate).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ARG1 (unknown), ARG2 (unknown), GATM (unknown), OAT (unknown), OAZ1 (unknown), OTC (unknown), SLC25A15 (unknown), SLC25A2 (unknown), SLC7A1 (unknown), SLC7A2 (unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 15:34 | 4:51 | 1/1/0 | 0/0/0 | 0/0/0 | 56,467/16,498 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 73 matched, 20 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Le_1997.pdf` | Le Bricon T et al., Ornithine alpha-ketoglutarate metabolis…, The American journal of cli… (1997) | popPK | 9 | [10.1093/ajcn/65.2.512](https://doi.org/10.1093/ajcn/65.2.512) | [9022538](https://pubmed.ncbi.nlm.nih.gov/9022538) | The study reports quantitative pharmacokinetic parameters (absorption constant, elimination half-life) and metabolite AUCs for ornithine alpha-ketoglutarate in human burn patients. |

<sub>queue written 2026-10-04 15:29 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Wang_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of L-Ornithine Phenylacetate (L-OPA), not ornithine oxoglurate. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bornithine_oxoglurate%5D&body=Drug%3A%20ornithine_oxoglurate%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ornithine_oxoglurate/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-04 15:30 UTC</sub>
