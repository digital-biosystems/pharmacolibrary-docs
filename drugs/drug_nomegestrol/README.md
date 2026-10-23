<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G03A&quot;,&quot;href&quot;:&quot;atc/G03A.md&quot;},{&quot;label&quot;:&quot;nomegestrol&quot;}]"></div>

# nomegestrol

- **generic name:** nomegestrol
- **ATC codes:** `G03AA14`, `G03DB04`, `G03FB12`
- **DrugBank:** [DB11636](https://go.drugbank.com/drugs/DB11636) · **PubChem:** not captured
- **molar mass:** 328.452 g/mol (C21H28O3) — DrugBank
- **groups:** approved

## About

Nomegestrol is a progestogen used in hormonal contraceptives and in combined progestogen–estrogen preparations, such as oral contraceptives and hormone therapy. It is an approved drug, though it appears to be used only in a limited number of countries rather than worldwide.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1722024](https://www.wikidata.org/wiki/Q1722024) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| nomegestrol | parent | 328.452 | C21H28O3 | DrugBank | — | Huang_2015 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Huang_2015_reference](drugs/drug_nomegestrol/Nomegestrol_Huang2015_reference.md) | — | 1-compartment (no model) | 1 | Huang Q et al., Pharmacokinetics, tissue distribution,…, European journal of drug me… (2015) | [10.1007/s13318-014-0224-7](https://doi.org/10.1007/s13318-014-0224-7) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=nomegestrol).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:53 | 0:18 | 0/1/0 | 0/0/0 | 0/0/0 | 10,890/716 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Huang_2015.pdf` | Huang Q et al., Pharmacokinetics, tissue distribution,…, European journal of drug me… (2015) | popPK | 10 | [10.1007/s13318-014-0224-7](https://doi.org/10.1007/s13318-014-0224-7) | [25168884](https://pubmed.ncbi.nlm.nih.gov/25168884) | Study reports quantitative PK parameters (CL 5.58 L/h/kg, t1/2 10.8 h, two-compartment model) for nomegestrol acetate in rats, though some specific values like ka and volumes are referenced via formulas not fully expanded in the text snippet. |
| `Post_2016.pdf` | Post TM et al., Prediction of nomegestrol acetate pharm…, Contraception (2016) | popPK | 9 | [10.1016/j.contraception.2015.08.017](https://doi.org/10.1016/j.contraception.2015.08.017) | [26365792](https://pubmed.ncbi.nlm.nih.gov/26365792) | The study reports nomegestrol acetate PK parameters (Cmax, AUC, t1/2) in humans, but specific numeric values are not listed in the provided abstract text. |

<sub>queue written 2026-10-07T08:53:27.502071+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Dorai_1991 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of lipolytic activity on adipocytes, not a pharmacokinetic study of nomegestrol. |
| popPK | Post_2016 | relevant | 9 | 2 | The study reports nomegestrol acetate PK parameters (Cmax, AUC, t1/2) in humans, but specific numeric values are not listed in the provided abstract text. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 08:53 UTC</sub>
