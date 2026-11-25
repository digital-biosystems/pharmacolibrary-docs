<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08A&quot;,&quot;href&quot;:&quot;atc/V08A.md&quot;},{&quot;label&quot;:&quot;metrizamide&quot;}]"></div>

# metrizamide

- **generic name:** metrizamide
- **ATC codes:** `V08AB01`
- **DrugBank:** [DB01578](https://go.drugbank.com/drugs/DB01578) · **PubChem:** [CID 20056604](https://pubchem.ncbi.nlm.nih.gov/compound/20056604)
- **molar mass:** 789.1 g/mol (C18H22I3N3O8) — DrugBank
- **groups:** experimental

## About

Metrizamide is a water-soluble iodinated contrast agent historically used for myelography. It is administered via lumbar puncture to examine the spinal column. The drug is classified as experimental in current databases.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q6824399](https://www.wikidata.org/wiki/Q6824399), [Wikipedia](https://en.wikipedia.org/wiki/Metrizamide?oldid=1365016755) (CC BY-SA 4.0) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 03:56 | 0:02 | 0/0/0 | 0/0/0 | 0/0/0 | 3,121/151 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Elliott_1999.pdf` | Elliott P et al., Ionic mechanisms underlying excitatory…, Neuroscience (1999) | pd | 4 | [10.1016/s0306-4522(98)00534-x](https://doi.org/10.1016/s0306-4522(98)00534-x) | [10338299](https://www.ncbi.nlm.nih.gov/pubmed/10338299) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-11-24 03:56 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cortijo_1997 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study of the PDE inhibitor SCA40, where metrizamide is mentioned only as a density medium for cell isolation (density gradients) and not as the subject drug for pharmacokinetic analysis. |
| PGx | Cortijo_1997 | not_relevant | 0 | 0 | The study investigates the pharmacodynamic effects of SCA40 in asthma models and uses metrizamide only as a medium for cell separation, with no pharmacogenomic analysis or effect of gene variants on metrizamide parameters. |
| popPK | Elliott_1999 | irrelevant | 0 | 0 | Metrizamide is used as a cell separation agent in a neurophysiology study, not as a drug subject to pharmacokinetic analysis. |
| PGx | Elliott_1999 | not_relevant | 0 | 0 | The paper describes the use of metrizamide as a laboratory reagent for cell isolation (density gradient centrifugation), not as a therapeutic drug whose pharmacokinetics or pharmacodynamics are being analyzed in relation to genetic variants. |
| popPK | Golman_1975 | relevant | 9 | 2 | The paper describes a pharmacokinetic study of metrizamide in humans using a one-compartment model, but the abstract only provides qualitative findings (e.g., "&gt;50% disappeared") and lacks specific numeric values for rate constants or volumes. |
| PGx | Golman_1975 | not_relevant | 0 | 0 | The study reports general pharmacokinetics in humans without investigating any specific gene variant or genotype. |
| popPK | Turner_1994 | irrelevant | 0 | 0 | Metrizamide is used only as a density gradient medium for cell isolation, and the study focuses on granulocyte activation, not metrizamide pharmacokinetics. |
| PGx | Turner_1994 | not_relevant | 0 | 0 | The paper investigates granulocyte function; metrizamide is only used as a density gradient reagent, and no pharmacokinetic or pharmacodynamic effects of a gene variant on metrizamide are reported. |
| popPK | Winkler_1980 | irrelevant | 0 | 0 | The paper is a review of the mechanism of brain penetration of metrizamide and does not report quantitative pharmacokinetic parameters such as clearance or volume of distribution. |
| PGx | Winkler_1980 | not_relevant | 0 | 0 | The paper reviews the mechanism of metrizamide brain penetration based on fluid dynamics and does not mention any genetic variants or pharmacogenomic effects. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmetrizamide%5D&body=Drug%3A%20metrizamide%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_metrizamide/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
