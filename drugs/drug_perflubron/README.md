<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08C&quot;,&quot;href&quot;:&quot;atc/V08C.md&quot;},{&quot;label&quot;:&quot;perflubron&quot;}]"></div>

# perflubron

- **generic name:** perflubron
- **ATC codes:** `V08CX01`
- **DrugBank:** [DB05791](https://go.drugbank.com/drugs/DB05791) · **PubChem:** [CID 9873](https://pubchem.ncbi.nlm.nih.gov/compound/9873)
- **molar mass:** 498.962 g/mol (C8BrF17) — DrugBank
- **groups:** investigational

## About

Perflubron is a fluorinated contrast agent investigated for use as an imaging contrast medium, and it has also been studied as a radiosensitizer and anti-obesity medication. It remains investigational and is not an approved medicine in the European Union or elsewhere.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2190150](https://www.wikidata.org/wiki/Q2190150) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:07 | 0:20 | 0/0/0 | 0/0/0 | 0/0/0 | 20,373/1,149 | openai / gpt-6-luna | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ni_1996.pdf` | Ni Y et al., Recent developments in pharmacokinetic…, Artificial cells, blood sub… (1996) | popPK | 8 | [10.3109/10731199609118876](https://doi.org/10.3109/10731199609118876) | [8907688](https://pubmed.ncbi.nlm.nih.gov/8907688) | Perflubron disposition is modeled using animal excretion data, but no numeric parameter values are provided in the evidence. |

<sub>queue written 2026-10-07T19:07:39.228480+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bartusik_2010 | irrelevant | 0 | 0 | This in vitro cell study reports no quantitative pharmacokinetic disposition parameters for perflubron. |
| popPK | Gherase_2006 | irrelevant | 0 | 0 | This is an in-vitro xenon exchange study, and its droplet-size and membrane-permeability values are not perflubron pharmacokinetic parameters. |
| popPK | Ni_1996 | relevant | 8 | 0 | Perflubron disposition is modeled using animal excretion data, but no numeric parameter values are provided in the evidence. |
| popPK | Schrader_1999 | irrelevant | 1 | 0 | This is a dose-maintenance device study, not a quantitative PK study, and no disposition parameter values are reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
