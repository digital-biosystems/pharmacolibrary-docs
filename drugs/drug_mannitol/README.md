<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;mannitol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Mannitol_Wei2022_reference&quot;,&quot;label&quot;:&quot;Wei_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mannitol/Mannitol_Wei2022_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# mannitol

- **generic name:** mannitol
- **ATC codes:** `A06AD16`, `B05BC01`, `B05CX04`, `R05CB16`, `V04CX04`
- **DrugBank:** [DB00742](https://go.drugbank.com/drugs/DB00742) · **PubChem:** [CID 6251](https://pubchem.ncbi.nlm.nih.gov/compound/6251)
- **molar mass:** 182.1718 g/mol (C6H14O6) — DrugBank
- **groups:** approved, investigational

## About

Mannitol is an osmotic diuretic used for conditions such as anuria, oliguria, cerebral edema, and ocular hypertension, and is also used as a laxative, irrigating solution, mucolytic in cystic fibrosis, and diagnostic agent. It remains widely used and is included on the WHO essential medicines list, with an authorised product in the European Union for cystic fibrosis.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q407646](https://www.wikidata.org/wiki/Q407646) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| mannitol | parent | 182.172 | C6H14O6 | DrugBank | [6251](https://pubchem.ncbi.nlm.nih.gov/compound/6251) | Noorani_2022 |

## Start here

> **Wei_2022_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> review reference. [Run it in the simulator](drugs/drug_mannitol/Mannitol_Wei2022_reference.md?tab=Simulation) · [record](drugs/drug_mannitol/Mannitol_Wei2022_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL | 7.98 | L/h | 7.98 L/h | review reference | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Wei_2022_reference](drugs/drug_mannitol/Mannitol_Wei2022_reference.md) |
| V | V | 60.2 | L | 60.2 L | review reference | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Wei_2022_reference](drugs/drug_mannitol/Mannitol_Wei2022_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Wei_2022_reference](drugs/drug_mannitol/Mannitol_Wei2022_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Wei S et al., Population pharmacokinetic model of van…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.1005791](https://doi.org/10.3389/fphar.2022.1005791) |
| <span class="pk-rf" hidden data-species="mouse" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Noorani_2022_reference](drugs/drug_mannitol/Mannitol_Noorani2022_reference.md) | — | 1-compartment (no model) | 2 | Noorani B et al., A Semi-Physiological Three-Compartment…, Pharmaceutical research (2022) | [10.1007/s11095-022-03175-4](https://doi.org/10.1007/s11095-022-03175-4) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=mannitol).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 16:25 | 6:25 | 1/1/0 | 0/0/0 | 0/0/0 | 84,508/20,074 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 98 matched, 20 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cloyd_1986.pdf` | Cloyd JC et al., Mannitol pharmacokinetics and serum osm…, The Journal of pharmacology… (1986) | popPK | 10 | not captured | [3080582](https://pubmed.ncbi.nlm.nih.gov/3080582) | The paper reports quantitative pharmacokinetic parameters (half-lives, volume of distribution, clearance) for mannitol in both humans and dogs, with specific numeric values provided in the text. |
| `Noorani_2022.pdf` | Noorani B et al., A Semi-Physiological Three-Compartment…, Pharmaceutical research (2022) | popPK | 9 | [10.1007/s11095-022-03175-4](https://doi.org/10.1007/s11095-022-03175-4) | [35146590](https://pubmed.ncbi.nlm.nih.gov/35146590) | The study reports quantitative pharmacokinetic parameters (uptake clearance Kin and efflux clearance) for mannitol in a three-compartment model in mice. |

<sub>queue written 2026-10-04T16:19:15.832479+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Manta_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of quercetin, with mannitol serving only as an excipient in the formulation. |
| popPK | Wei_2022 | irrelevant | 0 | 0 | The study models the pharmacokinetics of vancomycin, where mannitol is only a covariate affecting clearance, not the subject drug. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-04 16:19 UTC</sub>
