<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;rosiglitazone&quot;}]"></div>

# rosiglitazone

- **generic name:** rosiglitazone
- **ATC codes:** `A10BD03`, `A10BD04`, `A10BG02`
- **DrugBank:** [DB00412](https://go.drugbank.com/drugs/DB00412) · **PubChem:** [CID 77999](https://pubchem.ncbi.nlm.nih.gov/compound/77999)
- **molar mass:** 357.427 g/mol (C18H19N3O3S) — DrugBank
- **groups:** approved, investigational

## About

Rosiglitazone is an anti-diabetic medicine of the thiazolidinedione class that was used to lower blood sugar in people with type 2 diabetes.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q424771](https://www.wikidata.org/wiki/Q424771) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| rosiglitazone | parent | 357.427 | C18H19N3O3S | DrugBank | [77999](https://pubchem.ncbi.nlm.nih.gov/compound/77999) | Kirchheiner_2006 |
| desmethylrosiglitazone | metabolite | 343.401 | C17H17N3O3S | PubChem | [12000328](https://pubchem.ncbi.nlm.nih.gov/compound/12000328) | Kirchheiner_2006 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 0.033 | L/h | 0.033 L/h | healthy volunteers | &gt;=31 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Kirchheiner_2006_reference](drugs/drug_rosiglitazone/Rosiglitazone_Kirchheiner2006_reference.md) |
| V | V/F | 23.94 ‡ | L | 342 ml/kg | type 2 diabetic Goto-Kakizaki rats |  | rat | <span class="pk-badge pk-badge--orange">Needs review</span> | [Gao_2012_estimate_cv](drugs/drug_rosiglitazone/Rosiglitazone_Gao2012_estimate_cv.md) |
| ka | kabs | 2.01 | 1/h | 2.01 h Ϫ1 | type 2 diabetic Goto-Kakizaki rats |  | rat | <span class="pk-badge pk-badge--orange">Needs review</span> | [Gao_2012_estimate_cv](drugs/drug_rosiglitazone/Rosiglitazone_Gao2012_estimate_cv.md) |
| t½ | t1/2z | 4.3 | h | 4.3 hours | healthy volunteers | &gt;=31 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Kirchheiner_2006_reference](drugs/drug_rosiglitazone/Rosiglitazone_Kirchheiner2006_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. ‡ given per kg in the paper; shown for a 70 kg adult. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub> | [Gao_2012_estimate_cv](drugs/drug_rosiglitazone/Rosiglitazone_Gao2012_estimate_cv.md) | — | 1-compartment (no model) | 2 | Gao W et al., Modeling disease progression and rosigl…, The Journal of pharmacology… (2012) | [10.1124/jpet.112.192419](https://doi.org/10.1124/jpet.112.192419) |
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span><br><sub>blocking: split column 'definition' is a table statistic/structure column, not a study po…</sub> | [↳ definition](drugs/drug_rosiglitazone/Rosiglitazone_Gao2012_definition.md) | — | 1-compartment (no model) | 2 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Kirchheiner_2006_reference](drugs/drug_rosiglitazone/Rosiglitazone_Kirchheiner2006_reference.md) | — | parent + metabolite (no model) | 3 | Kirchheiner J et al., Pharmacokinetics and pharmacodynamics o…, Clinical pharmacology and t… (2006) | [10.1016/j.clpt.2006.09.008](https://doi.org/10.1016/j.clpt.2006.09.008) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=rosiglitazone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor, `CYP2B6` inducer, `CYP2C8` inhibitor/substrate, `CYP2C9` inhibitor/substrate, `CYP2D6` inhibitor, `CYP2E1` substrate, `CYP3A4` inducer/substrate, `SLC10A1` inhibitor, `SLCO1B1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | liver | `ABCB11` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ACSL4 (inhibitor), PPARG (target), PTGS1 (substrate), RXRA (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 03:09 | 2:36 | 2/1/0 | 0/0/0 | 0/0/0 | 31,988/7,914 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 63 matched, 17 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 0  ·  needs review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kirchheiner_2006.pdf` | Kirchheiner J et al., Pharmacokinetics and pharmacodynamics o…, Clinical pharmacology and t… (2006) | popPK | 10 | [10.1016/j.clpt.2006.09.008](https://doi.org/10.1016/j.clpt.2006.09.008) | [17178266](https://pubmed.ncbi.nlm.nih.gov/17178266) | The study reports quantitative population PK parameters (clearance, half-life) for rosiglitazone in humans, with specific numeric values provided in the text. |
| `Kulkarni_2016.pdf` | Kulkarni NM et al., Altered pharmacokinetics of rosiglitazo…, Drug metabolism and persona… (2016) | popPK | 9 | [10.1515/dmpt-2016-0008](https://doi.org/10.1515/dmpt-2016-0008) | [27522101](https://pubmed.ncbi.nlm.nih.gov/27522101) | The study reports quantitative PK parameters (AUC, clearance, half-life) for rosiglitazone in mice, but specific numeric values for clearance and half-life are not explicitly listed in the provided text, only relative changes (2.5-fold AUC). |

<sub>queue written 2026-10-05 03:07 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kulkarni_2016 | relevant | 9 | 2 | The study reports quantitative PK parameters (AUC, clearance, half-life) for rosiglitazone in mice, but specific numeric values for clearance and half-life are not explicitly listed in the provided text, only relative changes (2.5-fold AUC). |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Brosiglitazone%5D&body=Drug%3A%20rosiglitazone%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_rosiglitazone/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-05 03:07 UTC</sub>
