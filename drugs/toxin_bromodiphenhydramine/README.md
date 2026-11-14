<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Bromodiphenhydramine&quot;}]"></div>

# Bromodiphenhydramine

- **generic name:** Bromodiphenhydramine
- **T3DB:** [T3D3030](http://www.t3db.ca/toxins/T3D3030) · **DrugBank:** [DB01237](https://go.drugbank.com/drugs/DB01237) · **PubChem:** [CID 2444](https://pubchem.ncbi.nlm.nih.gov/compound/2444)
- **groups:** approved

## About

Bromodiphenhydramine is only found in individuals that have used or taken this drug. It is an ethanolamine antihistamine with antimicrobial property. Bromodiphenhydramine is used in the control of cutaneous allergies. …

- **Category:** Drug, Synthetic Toxin
- **Route of exposure:** well absorbed in the digestive tract.
- **Sources and uses:** For management of symptoms related to hay fever and other types of allergy and used to help bring up phlegm, thin secretions, and make a cough productive.
- **Mechanism of toxicity:** Bromodiphenhydramine competes with free histamine for binding at HA-receptor sites. This antagonizes the effects of histamine on HA-receptors, leading to a reduction of the negative symptoms brought on by histamine HA-receptor binding.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D3030">T3DB T3D3030</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 118-23-0 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:59177">ChEBI 59177</a></small></p>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=bromodiphenhydramine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `SLC22A6` unknown | DrugBank actor |

<sub>Actors without a tissue in the table: HRH1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-13 10:09 | 1:05 | 0/0/0 | 0/0/0 | 0/0/0 | 5,261/742 | einfracz / qwen3.8-flash-next | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 2 matched, 2 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Parry_1982.pdf` | Parry R et al., The disposition of diphenhydramine and…, Biopharmaceutics & drug dis… (1982) | popPK | 9 | [10.1002/bdd.2510030308](https://doi.org/10.1002/bdd.2510030308) | [7139065](https://pubmed.ncbi.nlm.nih.gov/7139065) | The paper reports clearance, volume of distribution, and elimination rate constant for 4-bromodiphenhydramine in rabbits, but the abstract only lists relative rankings (e.g., II &gt; III) without providing the actual numeric values, which are likely in the full text or tables not included in the evidence. |

<sub>queue written 2026-11-13 10:09 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Parry_1982 | relevant | 9 | 2 | The paper reports clearance, volume of distribution, and elimination rate constant for 4-bromodiphenhydramine in rabbits, but the abstract only lists relative rankings (e.g., II &gt; III) without providing the actual numeric values, which are likely in the full text or tables not included in the evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbromodiphenhydramine%5D&body=Drug%3A%20bromodiphenhydramine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_bromodiphenhydramine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
