<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;pexidartinib&quot;}]"></div>

# pexidartinib

- **generic name:** pexidartinib
- **ATC codes:** `L01EX15`, `L01XE`
- **DrugBank:** [DB12978](https://go.drugbank.com/drugs/DB12978) · **PubChem:** [CID 25151352](https://pubchem.ncbi.nlm.nih.gov/compound/25151352)
- **molar mass:** 417.82 g/mol (C20H15ClF3N5) — DrugBank
- **groups:** approved, investigational

## About

Pexidartinib is a protein kinase inhibitor used to treat tenosynovial giant cell tumour of the tendon sheath (pigmented villonodular synovitis). It is approved in the United States but its use is restricted, carrying a boxed warning for liver injury; a marketing application in the European Union was refused.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q25100640](https://www.wikidata.org/wiki/Q25100640) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| pexidartinib | parent | 417.82 | C20H15ClF3N5 | DrugBank | [25151352](https://pubchem.ncbi.nlm.nih.gov/compound/25151352) | Yin_2021 |
| ZAAD | metabolite | — (mass units only) | — | — | — | — |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 1.8 | L/h | 1.8 L/h | healthy subjects and patients with TGCT or other solid tumors | 375 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Yin_2021_zaad](drugs/drug_pexidartinib/Pexidartinib_Yin2021_zaad.md) |
| CL | CL/F | 5.6 | L/h | 5.6 L/h | healthy subjects and patients with TGCT or other solid tumors | 375 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Yin_2021_pexidartinib](drugs/drug_pexidartinib/Pexidartinib_Yin2021_pexidartinib.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">1</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">10</text><text x="184" y="34.0" font-size="11" text-anchor="end">Yin_2021 · CL/F</text><circle cx="279.3" cy="30.0" r="4" fill="#ef6c00"><title>Yin_2021 · CL/F: 1.8 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Yin_2021 · CL/F</text><circle cx="451.9" cy="46.0" r="4" fill="#ef6c00"><title>Yin_2021 · CL/F: 5.6 L/h</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Yin_2021_pexidartinib](drugs/drug_pexidartinib/Pexidartinib_Yin2021_pexidartinib.md) | — | parent + metabolite (no model) | 3 | Yin O et al., Population Pharmacokinetic Analysis of…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1753](https://doi.org/10.1002/jcph.1753) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C2_base_Q27 failed (ratio 3.2389)</sub> | [↳ zaad](drugs/drug_pexidartinib/Pexidartinib_Yin2021_zaad.md) | — | parent + metabolite (no model) | 3 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [↳ estimate_a](drugs/drug_pexidartinib/Pexidartinib_Yin2021_estimate_a.md) | — | parent + metabolite (no model) | 3 |  |  |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Yin_2021_2_TVS](drugs/drug_pexidartinib/pd_Yin_2021_2_TVS.md) | Longitudinal tumor volume score ← pexidartinib · direct Emax (saturable) effect | — | Yin O et al., Exposure-response analysis of efficacy…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12712](https://doi.org/10.1002/psp4.12712) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Yin_2021_2_ALT_3_ULN](drugs/drug_pexidartinib/pd_Yin_2021_2_ALT_3_ULN.md) | Time to first ALT &gt;3× ULN ← pexidartinib · time-to-event model | — | Yin O et al., Exposure-response analysis of efficacy…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12712](https://doi.org/10.1002/psp4.12712) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Yin_2021_2_AST_3_ULN](drugs/drug_pexidartinib/pd_Yin_2021_2_AST_3_ULN.md) | Time to first AST &gt;3× ULN ← pexidartinib · time-to-event model | — | Yin O et al., Exposure-response analysis of efficacy…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12712](https://doi.org/10.1002/psp4.12712) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Yin_2021_2_ORR](drugs/drug_pexidartinib/pd_Yin_2021_2_ORR.md) | Overall response rate by RECIST ← pexidartinib · categorical (graded) response model | — | Yin O et al., Exposure-response analysis of efficacy…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12712](https://doi.org/10.1002/psp4.12712) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Yin_2021_2_ORR_TVS](drugs/drug_pexidartinib/pd_Yin_2021_2_ORR_TVS.md) | Overall response rate by TVS ← pexidartinib · categorical (graded) response model | — | Yin O et al., Exposure-response analysis of efficacy…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12712](https://doi.org/10.1002/psp4.12712) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Yin_2021_2_RECIST](drugs/drug_pexidartinib/pd_Yin_2021_2_RECIST.md) | Longitudinal tumor size by RECIST ← pexidartinib · direct Emax (saturable) effect | — | Yin O et al., Exposure-response analysis of efficacy…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12712](https://doi.org/10.1002/psp4.12712) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Yin_2021_2_TBIL_2_baseline](drugs/drug_pexidartinib/pd_Yin_2021_2_TBIL_2_baseline.md) | Time to first TBIL &gt;2× baseline ← pexidartinib · time-to-event model | — | Yin O et al., Exposure-response analysis of efficacy…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12712](https://doi.org/10.1002/psp4.12712) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Yin_2021_2_TBIL_ULN](drugs/drug_pexidartinib/pd_Yin_2021_2_TBIL_ULN.md) | Time to first TBIL &gt;ULN ← pexidartinib · time-to-event model | — | Yin O et al., Exposure-response analysis of efficacy…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12712](https://doi.org/10.1002/psp4.12712) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 05:23 | 4:39 | 0/1/2 | 1/0/0 | 0/0/0 | 83,429/23,850 | openai / gpt-6-luna | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 3  ·  extracted 0  ·  needs_review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Boal_2020.pdf` | Boal LH et al., Pediatric PK/PD Phase I Trial of Pexida…, Clinical cancer research :… (2020) | popPK | 9 | [10.1158/1078-0432.CCR-20-1696](https://doi.org/10.1158/1078-0432.CCR-20-1696) | [32943455](https://pubmed.ncbi.nlm.nih.gov/32943455) | Pediatric human PK and population-PK modeling are reported, but no numeric disposition parameter values appear in the provided evidence. |

<sub>queue written 2026-10-07T05:19:00.295581+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Boal_2020 | relevant | 9 | 0 | Pediatric human PK and population-PK modeling are reported, but no numeric disposition parameter values appear in the provided evidence. |
| popPK | Yin_2021_2 | irrelevant | 1 | 0 | The analysis uses a previously described population-PK model but reports no pexidartinib disposition parameter values. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 05:19 UTC</sub>
