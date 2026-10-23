<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;tiaprofenic acid&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;TiaprofenicAcid_Nilsen1985v2_reference&quot;,&quot;label&quot;:&quot;Nilsen_1985_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tiaprofenic_acid/TiaprofenicAcid_Nilsen1985v2_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# tiaprofenic acid

- **generic name:** tiaprofenic acid
- **ATC codes:** `M01AE11`
- **DrugBank:** [DB01600](https://go.drugbank.com/drugs/DB01600) · **PubChem:** [CID 5468](https://pubchem.ncbi.nlm.nih.gov/compound/5468)
- **molar mass:** 260.308 g/mol (C14H12O3S) — DrugBank
- **groups:** approved

## About

It is an approved medicine, though it is not widely used today and has largely been superseded by other NSAIDs.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q419926](https://www.wikidata.org/wiki/Q419926) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| tiaprofenic_acid (tiaprofenic acid) | metabolite | 260.308 | C14H12O3S | DrugBank | [5468](https://pubchem.ncbi.nlm.nih.gov/compound/5468) | Nilsen_1985_2 |

## Start here

> **Nilsen_1985_2_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> elderly patients, n = &gt;=8. [Run it in the simulator](drugs/drug_tiaprofenic_acid/TiaprofenicAcid_Nilsen1985v2_reference.md?tab=Simulation) · [record](drugs/drug_tiaprofenic_acid/TiaprofenicAcid_Nilsen1985v2_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 1.8 | L/h | 30.0 ml/min | elderly patients | &gt;=8 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Nilsen_1985_2_reference](drugs/drug_tiaprofenic_acid/TiaprofenicAcid_Nilsen1985v2_reference.md) |
| V | V/F | 11.8 | L | 11.8 l | elderly patients | &gt;=8 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Nilsen_1985_2_reference](drugs/drug_tiaprofenic_acid/TiaprofenicAcid_Nilsen1985v2_reference.md) |
| ka | kabs | 4.32 | 1/h | 4.32 h-1 | elderly patients | &gt;=8 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Nilsen_1985_2_reference](drugs/drug_tiaprofenic_acid/TiaprofenicAcid_Nilsen1985v2_reference.md) |
| t½ | t1/2z | 4.66 | h | 4.66 h | elderly patients | &gt;=8 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Nilsen_1985_2_reference](drugs/drug_tiaprofenic_acid/TiaprofenicAcid_Nilsen1985v2_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: T3_param_coverage</sub> | [Nilsen_1985_2_reference](drugs/drug_tiaprofenic_acid/TiaprofenicAcid_Nilsen1985v2_reference.md) | ▶ model + simulator | 1-compartment, oral | 6 | Nilsen OG et al., Steady state pharmacokinetics of tiapro…, Arzneimittel-Forschung (1985) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=tiaprofenic_acid).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: PTGS1 (inhibitor), PTGS2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:25 | 0:32 | 1/0/0 | 0/0/0 | 0/0/0 | 11,362/1,114 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Nilsen_1985_2.pdf` | Nilsen OG et al., Steady state pharmacokinetics of tiapro…, Arzneimittel-Forschung (1985) | popPK | 10 |  | [4026913](https://pubmed.ncbi.nlm.nih.gov/4026913) | The paper reports steady-state pharmacokinetic parameters for tiaprofenic acid in humans, including numeric values for clearance, volume of distribution, absorption rate, and half-life in the abstract. |
| `Knights_2009.pdf` | Knights KM et al., Aldosterone glucuronidation by human li…, British journal of clinical… (2009) | pgx | 7 | [10.1111/j.1365-2125.2009.03469.x](https://doi.org/10.1111/j.1365-2125.2009.03469.x) | [19740398](https://www.ncbi.nlm.nih.gov/pubmed/19740398) | metadata signals extractable PGX data (UGT1A10, PK/PD-context) |

<sub>queue written 2026-10-07 01:25 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Jin_1993 | not_relevant | 0 | 0 | The paper describes in vitro enzyme cloning and substrate screening, reporting relative activity rankings but no genetic variation, pharmacokinetic parameters, or pharmacodynamic effects in humans. |
| PGx | Knights_2009 | not_relevant | 0 | 0 | The paper studies the inhibition of aldosterone glucuronidation by tiaprofenic acid, not the pharmacokinetics or pharmacodynamics of tiaprofenic acid itself, and contains no pharmacogenomic data. |
| popPK | Vakily_1999 | irrelevant | 4 | 0 | The study focuses on pharmacokinetic-pharmacodynamic modeling of GI toxicity and notes that specific pharmacokinetic data for powder and INC formulations were "previously reported," implying no original quantitative PK parameter values (CL, V, etc.) for tiaprofenic acid are provided in this text. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btiaprofenic_acid%5D&body=Drug%3A%20tiaprofenic_acid%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tiaprofenic_acid/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 01:25 UTC</sub>
