<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;sodium zirconium cyclosilicate&quot;}]"></div>

# sodium zirconium cyclosilicate

- **generic name:** sodium zirconium cyclosilicate
- **ATC codes:** `V03AE10`
- **DrugBank:** [DB14048](https://go.drugbank.com/drugs/DB14048) · **PubChem:** not captured
- **molar mass:** 365.452 g/mol (Na2O9Si3Zr) — DrugBank
- **groups:** approved, investigational

## About

Sodium zirconium cyclosilicate is a potassium binder used to treat hyperkalemia (high blood potassium). It is authorised in the European Union and is an approved medicine, used for the treatment of hyperkalemia.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q17091153](https://www.wikidata.org/wiki/Q17091153) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Penland_2024_serum_K](drugs/drug_sodium_zirconium_cyclosilicate/pd_Penland_2024_serum_K.md) | serum potassium concentration ← sodium zirconium cyclosilicate (virtual exposure) · indirect response — drug inhibits the production of serum potassium concentration | — | Penland RC et al., Population Pharmacodynamic Dose-Respons…, Clinical pharmacokinetics (2024) | [10.1007/s40262-024-01360-9](https://doi.org/10.1007/s40262-024-01360-9) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:40 | 0:27 | 0/0/0 | 1/0/0 | 0/0/0 | 21,882/902 | ollama / glm-5.3-flash | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 2 matched, 2 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Någård_2023 | irrelevant | 2 | 1 | SZC is the co-administered interaction agent (not systemically absorbed); PK parameters reported are for tacrolimus/cyclosporin, not SZC itself. |
| popPK | Penland_2024 | irrelevant | 3 | 4 | This is a population pharmacodynamic (serum K+) model of SZC, not a PK disposition study; SZC is not absorbed so no CL/V/ka parameters exist, only PD parameters (EC50 32.8 g, Hill 1.36) with some values in supplementary material. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
