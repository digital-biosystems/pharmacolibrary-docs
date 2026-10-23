<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L03A&quot;,&quot;href&quot;:&quot;atc/L03A.md&quot;},{&quot;label&quot;:&quot;peginterferon beta-1a&quot;}]"></div>

# peginterferon beta-1a

- **generic name:** peginterferon beta-1a
- **ATC codes:** `L03AB13`
- **DrugBank:** [DB09122](https://go.drugbank.com/drugs/DB09122) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Peginterferon beta-1a is an interferon immunostimulant used to treat multiple sclerosis. It is authorised in the European Union, where one product is on the market.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q17126885](https://www.wikidata.org/wiki/Q17126885) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Hang_2016_Gd_lesion_count](drugs/drug_peginterferon_beta_1a/pd_Hang_2016_Gd_lesion_count.md) | Gd-enhanced lesion count ← peginterferon_beta_1a · direct linear effect | — | Hang Y et al., Analysis of peginterferon β-1a exposure…, Journal of pharmacokinetics… (2016) | [10.1007/s10928-016-9477-x](https://doi.org/10.1007/s10928-016-9477-x) |
| <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Hang_2016_T2_lesion_count](drugs/drug_peginterferon_beta_1a/pd_Hang_2016_T2_lesion_count.md) | new or newly enlarged T2 hyperintense lesions ← peginterferon_beta_1a · direct linear effect | — | Hang Y et al., Analysis of peginterferon β-1a exposure…, Journal of pharmacokinetics… (2016) | [10.1007/s10928-016-9477-x](https://doi.org/10.1007/s10928-016-9477-x) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=peginterferon_beta_1a).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP1A2` downregulator | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: IFNAR1 (activator), IFNAR1 (downregulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:15 | 0:27 | 0/0/0 | 1/0/0 | 0/0/0 | 48,334/2,098 | einfracz / qwen3.8-27b | 4 | 0/3 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hu_2011.pdf` | Hu X et al., In vivo pharmacology and toxicology eva…, The Journal of pharmacology… (2011) | popPK | 9 | [10.1124/jpet.111.180661](https://doi.org/10.1124/jpet.111.180661) | [21690216](https://pubmed.ncbi.nlm.nih.gov/21690216) | The paper is a PK/PD study of peginterferon_beta_1a in Rhesus monkeys, but the abstract only provides qualitative descriptions (e.g., "greater exposure", "longer half-life") without specific numeric parameter values. |

<sub>queue written 2026-10-06T23:15:38.147604+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Hang_2016 | irrelevant | 2 | 0 | The paper is an exposure-response analysis that references a population PK model developed elsewhere but does not report the specific quantitative PK parameters (CL, V, ka) for peginterferon beta-1a in the provided text. |
| popPK | Hu_2011 | relevant | 9 | 0 | The paper is a PK/PD study of peginterferon_beta_1a in Rhesus monkeys, but the abstract only provides qualitative descriptions (e.g., "greater exposure", "longer half-life") without specific numeric parameter values. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
