<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;ivosidenib&quot;}]"></div>

# ivosidenib

- **generic name:** ivosidenib
- **ATC codes:** `L01XM02`, `L01XX62`
- **DrugBank:** [DB14568](https://go.drugbank.com/drugs/DB14568) · **PubChem:** not captured
- **molar mass:** 582.97 g/mol (C28H22ClF3N6O3) — DrugBank
- **groups:** approved, investigational

## About

Ivosidenib is an anticancer medicine (an IDH inhibitor) used to treat acute myeloid leukemia and cholangiocarcinoma. It is approved and authorised in the European Union, though some marketing applications there were withdrawn.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27895417](https://www.wikidata.org/wiki/Q27895417) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ivosidenib | parent | 582.97 | C28H22ClF3N6O3 | DrugBank | — | Jiang_2021 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | — | L/h | 1.66 | patients with IDH1-mutant advanced hematologic malignancies | 253 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Jiang_2021_reference](drugs/drug_ivosidenib/Ivosidenib_Jiang2021_reference.md) |
| CL | CL/F | 5.39 | L/h | 5.39 L/h | patients with IDH1-mutant advanced hematologic malignancies | 253 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Jiang_2021_reference](drugs/drug_ivosidenib/Ivosidenib_Jiang2021_reference.md) |
| V | V1/F | 234 | L | 234 L | patients with IDH1-mutant advanced hematologic malignancies | 253 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Jiang_2021_reference](drugs/drug_ivosidenib/Ivosidenib_Jiang2021_reference.md) |
| ka | kabs | 1.38 | 1/h | 1.38 1/h | patients with IDH1-mutant advanced hematologic malignancies | 253 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Jiang_2021_reference](drugs/drug_ivosidenib/Ivosidenib_Jiang2021_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. — the reported unit did not convert; the value is listed as reported. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22 — no SI value to build from</sub> | [Jiang_2021_reference](drugs/drug_ivosidenib/Ivosidenib_Jiang2021_reference.md) | — | 2-compartment (no model) | 8 (+6 cov.) | Jiang X et al., Population pharmacokinetic and exposure…, Clinical and translational… (2021) | [10.1111/cts.12959](https://doi.org/10.1111/cts.12959) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Jiang_2021_QTcF](drugs/drug_ivosidenib/pd_Jiang_2021_QTcF.md) | mean change in corrected QT interval using Fridericia's method (ΔQTcF) ← ivosidenib · direct linear effect | — | Jiang X et al., Population pharmacokinetic and exposure…, Clinical and translational… (2021) | [10.1111/cts.12959](https://doi.org/10.1111/cts.12959) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 20:48 | 1:24 | 0/0/1 | 0/0/1 | 0/0/0 | 151,985/9,564 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yue_2024.pdf` | Yue Z et al., Clinical pharmacokinetics and pharmacod…, European journal of clinica… (2024) | popPK | 10 | [10.1007/s00228-023-03591-4](https://doi.org/10.1007/s00228-023-03591-4) | [37917187](https://pubmed.ncbi.nlm.nih.gov/37917187) | The paper describes a clinical PK study of ivosidenib, but the extracted evidence (abstract) does not contain specific numeric parameter values (CL, V, etc.), only qualitative conclusions. |

<sub>queue written 2026-10-06T20:47:32.951428+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fan_2022 | irrelevant | 2 | 0 | The study reports non-compartmental PK parameters (Cmax, AUC, accumulation ratio) and pharmacodynamic effects (2-HG reduction) rather than quantitative population-PK disposition parameters like clearance (CL), volume of distribution (V), or intercompartmental clearance (Q). |
| popPK | Yue_2024 | relevant | 10 | 0 | The paper describes a clinical PK study of ivosidenib, but the extracted evidence (abstract) does not contain specific numeric parameter values (CL, V, etc.), only qualitative conclusions. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 20:47 UTC</sub>
