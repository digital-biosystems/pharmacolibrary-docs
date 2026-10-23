<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;vismodegib&quot;}]"></div>

# vismodegib

- **generic name:** vismodegib
- **ATC codes:** `L01XJ01`, `L01XX43`
- **DrugBank:** [DB08828](https://go.drugbank.com/drugs/DB08828) · **PubChem:** [CID 24776445](https://pubchem.ncbi.nlm.nih.gov/compound/24776445)
- **molar mass:** 421.297 g/mol (C19H14Cl2N2O3S) — DrugBank
- **groups:** approved, investigational

## About

Vismodegib is an anticancer medicine used to treat basal-cell carcinoma, a type of skin cancer. It is authorised in the European Union and carries a boxed warning because it can harm reproduction and fetal development.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2070286](https://www.wikidata.org/wiki/Q2070286) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| vismodegib | parent | 421.297 | C19H14Cl2N2O3S | DrugBank | [24776445](https://pubchem.ncbi.nlm.nih.gov/compound/24776445) | Lu_2015 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Lu_2015_reference](drugs/drug_vismodegib/Vismodegib_Lu2015_reference.md) | — | 1-compartment (no model) | 1 | Lu T et al., Semi-Mechanism-Based Population Pharmac…, CPT: pharmacometrics & syst… (2015) | [10.1002/psp4.12039](https://doi.org/10.1002/psp4.12039) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Wong_2011_Gli1](drugs/drug_vismodegib/pd_Wong_2011_Gli1.md) | Gli1 ← vismodegib · direct Emax (saturable) effect | — | Wong H et al., Pharmacokinetic-pharmacodynamic analysi…, Clinical cancer research :… (2011) | [10.1158/1078-0432.CCR-11-0975](https://doi.org/10.1158/1078-0432.CCR-11-0975) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 21:55 | 1:12 | 0/1/0 | 1/0/0 | 0/0/0 | 177,094/11,865 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Wong_2011 | irrelevant | 3 | 0 | The paper describes a preclinical PK/PD study in mice but the provided evidence contains no quantitative disposition parameters (CL, V, etc.) for vismodegib. |
| popPK | Yang_2020 | irrelevant | 0 | 0 | The paper is an in-vitro antiviral screening study reporting EC50 values for vismodegib, not a pharmacokinetic study. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 21:54 UTC</sub>
