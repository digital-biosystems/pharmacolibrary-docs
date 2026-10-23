<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H02A&quot;,&quot;href&quot;:&quot;atc/H02A.md&quot;},{&quot;label&quot;:&quot;deflazacort&quot;}]"></div>

# deflazacort

- **generic name:** deflazacort
- **ATC codes:** `H02AB13`
- **DrugBank:** [DB11921](https://go.drugbank.com/drugs/DB11921) · **PubChem:** [CID 189821](https://pubchem.ncbi.nlm.nih.gov/compound/189821)
- **molar mass:** 441.524 g/mol (C25H31NO6) — DrugBank
- **groups:** approved

## About

Deflazacort is a glucocorticoid (anti-inflammatory and immunosuppressive) used to treat Duchenne muscular dystrophy. It is an approved medicine and is used in clinical practice, mainly for this condition.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q779118](https://www.wikidata.org/wiki/Q779118) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| deflazacort | parent | 441.524 | C25H31NO6 | DrugBank | [189821](https://pubchem.ncbi.nlm.nih.gov/compound/189821) | Möllmann_1995 |
| 21-desacetyldeflazacort | metabolite | 399.487 | C23H29NO5 | PubChem | [3081431](https://pubchem.ncbi.nlm.nih.gov/compound/3081431) | Möllmann_1995 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Möllmann_1995_reference](drugs/drug_deflazacort/Deflazacort_Mllmann1995_reference.md) | — | 1-compartment (no model) | 2 | Möllmann H et al., Pharmacokinetic/pharmacodynamic evaluat…, Pharmaceutical research (1995) | [10.1023/a:1016287104656](https://doi.org/10.1023/a:1016287104656) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:31 | 0:31 | 0/1/0 | 0/0/0 | 0/0/0 | 30,209/1,960 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Möllmann_1995.pdf` | Möllmann H et al., Pharmacokinetic/pharmacodynamic evaluat…, Pharmaceutical research (1995) | popPK | 9 | [10.1023/a:1016287104656](https://doi.org/10.1023/a:1016287104656) | [7494809](https://pubmed.ncbi.nlm.nih.gov/7494809) | The study reports quantitative PK parameters (Cmax, AUC, t1/2) for the active metabolite 21-desacetyldeflazacort following deflazacort dosing in humans, which constitutes the pharmacokinetics of deflazacort. |

<sub>queue written 2026-10-07T09:30:45.682319+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Lamb_2016 | irrelevant | 0 | 0 | This is a clinical study analyzing the effects of corticosteroid treatment on growth patterns in Duchenne muscular dystrophy patients, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Pagano_1984 | irrelevant | 0 | 0 | no_text gate: only 103 chars of text extracted (&lt; 400) |
| popPK | Schiava_2026 | irrelevant | 0 | 0 | The study analyzes anthropometric outcomes (height, weight, BMI) in DMD patients treated with deflazacort, but does not report pharmacokinetic parameters. |
| popPK | Soundarrajan_2026 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the efficacy of deflazacort for pain management and does not report any pharmacokinetic parameters. |
| popPK | Vandenburgh_2009 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study testing the effect of deflazacort on muscle force, not a pharmacokinetic study. |
| popPK | Yao_2020 | irrelevant | 2 | 0 | The study measures the metabolite 21-hydroxy deflazacort and describes a PK model, but no numeric parameter values (CL, V, etc.) are provided in the evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 09:30 UTC</sub>
