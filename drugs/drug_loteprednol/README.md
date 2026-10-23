<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01B&quot;,&quot;href&quot;:&quot;atc/S01B.md&quot;},{&quot;label&quot;:&quot;loteprednol&quot;}]"></div>

# loteprednol

- **generic name:** loteprednol
- **ATC codes:** `S01BA14`, `S01CA12`
- **DrugBank:** [DB00873](https://go.drugbank.com/drugs/DB00873) · **PubChem:** not captured
- **molar mass:** 394.889 g/mol (C21H27ClO5) — DrugBank
- **groups:** approved, withdrawn

## About

Loteprednol is a corticosteroid used as an eye drop to treat inflammation of the eye. It is approved but has been withdrawn from use in some places, so it is no longer widely available.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q72487729](https://www.wikidata.org/wiki/Q72487729) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| Delta1-cortienic acid | metabolite | — (mass units only) | — | — | — | — |
| Delta1-cortienic acid etabonate | metabolite | — (mass units only) | — | — | — | — |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Wu_2008_reference](drugs/drug_loteprednol/Loteprednol_Wu2008_reference.md) | — | general linear (no model) | 3 | Wu WM et al., Pharmacokinetics of the sequential meta…, The Journal of pharmacy and… (2008) | [10.1211/jpp.60.3.0003](https://doi.org/10.1211/jpp.60.3.0003) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:35 | 1:20 | 0/1/0 | 0/0/0 | 0/0/0 | 17,771/2,047 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wu_2008.pdf` | Wu WM et al., Pharmacokinetics of the sequential meta…, The Journal of pharmacy and… (2008) | popPK | 10 | [10.1211/jpp.60.3.0003](https://doi.org/10.1211/jpp.60.3.0003) | [18284808](https://pubmed.ncbi.nlm.nih.gov/18284808) | The paper reports quantitative pharmacokinetic parameters (CL, t1/2, K_el) for the sequential metabolites of loteprednol etabonate in rats, with numeric values explicitly provided in the abstract. |

<sub>queue written 2026-10-07T18:35:40.176502+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cechin_2014 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assay measuring NF-κB transrepression potency and does not report pharmacokinetic disposition parameters for loteprednol. |
| PGx | Chen_2024 | not_relevant | 0 | 0 | The paper characterizes loteprednol as a CYP3A5 inhibitor for enzyme studies and does not report pharmacogenomic effects on loteprednol's own PK/PD parameters. |
| popPK | Maeng_2019 | irrelevant | 0 | 0 | The study is a clinical analysis of intraocular pressure changes associated with steroid use and does not report pharmacokinetic parameters for loteprednol. |
| PGx | Sakamuru_2025 | not_relevant | 0 | 0 | The paper reports the inhibition of CYP3A4 by loteprednol in a general chemical screen but does not report any pharmacogenomic effects (gene variant/genotype differences) on PK or PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 18:35 UTC</sub>
