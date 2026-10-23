<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08D&quot;,&quot;href&quot;:&quot;atc/V08D.md&quot;},{&quot;label&quot;:&quot;perflenapent&quot;}]"></div>

# perflenapent

- **generic name:** perflenapent
- **ATC codes:** `V08DA03`
- **DrugBank:** [DB11625](https://go.drugbank.com/drugs/DB11625) · **PubChem:** not captured
- **molar mass:** 288.036 g/mol (C5F12) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Perflenapent (dodecafluoropentane) is a perfluorocarbon used as an ultrasound contrast agent, notably for echocardiography. Its European product has been withdrawn, so it is no longer available in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7168152](https://www.wikidata.org/wiki/Q7168152) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| perflenapent | parent | 288.036 | C5F12 | DrugBank | — | Correas_2001 |
| dodecafluoropentane (DDFP; perflenapent) | metabolite | 288.031 | C5F12 | PubChem | [12675](https://pubchem.ncbi.nlm.nih.gov/compound/12675) | Correas_2001 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Correas_2001_reference](drugs/drug_perflenapent/Perflenapent_Correas2001_reference.md) | — | 1-compartment (no model) | 0 | Correas JM et al., Human pharmacokinetics of a perfluoroca…, Ultrasound in medicine & bi… (2001) | [10.1016/s0301-5629(00)00363-x](https://doi.org/10.1016/s0301-5629(00)00363-x) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:08 | 0:42 | 0/1/0 | 0/0/0 | 0/0/0 | 20,000/3,212 | openai / gpt-6-luna | 2 | 0/1 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Correas_2001.pdf` | Correas JM et al., Human pharmacokinetics of a perfluoroca…, Ultrasound in medicine & bi… (2001) | popPK | 10 | [10.1016/s0301-5629(00)00363-x](https://doi.org/10.1016/s0301-5629(00)00363-x) | [11368867](https://pubmed.ncbi.nlm.nih.gov/11368867) | Human DDFP pharmacokinetic parameters are reported numerically in the evidence. |

<sub>queue written 2026-10-07T19:08:22.335514+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Mosier_2023 | irrelevant | 1 | 0 | The mouse study reports oxygenation and lung-injury outcomes, not quantitative pharmacokinetic disposition parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 19:08 UTC</sub>
