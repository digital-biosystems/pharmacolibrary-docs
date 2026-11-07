<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;catumaxomab&quot;}]"></div>

# catumaxomab

- **generic name:** catumaxomab
- **ATC codes:** `L01FX03`, `L01XC09`
- **DrugBank:** [DB06607](https://go.drugbank.com/drugs/DB06607) · **PubChem:** none
- **groups:** approved, withdrawn

## About

Catumaxomab is a monoclonal antibody anticancer drug that was used to treat ascites caused by cancer. It was authorised in the European Union but its marketing authorisation was later withdrawn, so it is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q408155](https://www.wikidata.org/wiki/Q408155) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Schroeder_2011_Tumour_cell_killing](drugs/drug_catumaxomab/pd_Schroeder_2011_Tumour_cell_killing.md) | Tumour cell killing ← catumaxomab · direct sigmoid Emax (Hill) effect | — | Schroeder P et al., Trifunctional antibodies induce efficie…, Clinical & translational on… (2011) | [10.1007/s12094-011-0751-5](https://doi.org/10.1007/s12094-011-0751-5) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Zaïr_2025_Toxicity](drugs/drug_catumaxomab/pd_Za_r_2025_Toxicity.md) | Toxicity ← catumaxomab · model not identified | — | Zaïr ZM et al., T-cell engager toxicity in clinical pha…, Cancer treatment reviews (2025) | [10.1016/j.ctrv.2025.102991](https://doi.org/10.1016/j.ctrv.2025.102991) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=catumaxomab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: CD3E (target), EPCAM (target), FCGR1A (target), FCGR2A (target), FCGR3A (target), FCGR3B (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-13 12:53 | 3:44 | 0/0/0 | 2/0/0 | 0/0/0 | 113,199/4,400 | einfracz / qwen3.8-27b | 7 | 1/6 | 7/0 | 0 |

## Coverage

- **PubMed hits:** 14 matched, 14 returned
- **screened:** 4  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ammouri_2010 | irrelevant | 0 | 0 | The paper is a review of palliative treatments for malignant ascites and reports only adverse events and efficacy, containing no pharmacokinetic parameters (CL, V, etc.) for catumaxomab. |
| popPK | Bender_2024 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of mosunetuzumab, not catumaxomab. |
| popPK | Chen_2023 | irrelevant | 0 | 0 | The paper is a bioinformatic analysis identifying catumaxomab as a potential drug target for CD3E, containing no pharmacokinetic data. |
| popPK | Dienstmann_2012 | irrelevant | 0 | 0 | This is a general review of monoclonal antibodies in cancer therapy that mentions catumaxomab only as an approved agent without providing any specific pharmacokinetic parameters or models. |
| popPK | Gevertz_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetic modeling of teclistamab, and catumaxomab is only mentioned in the introduction as historical context for the first approved bispecific antibody. |
| popPK | Rathi_2015 | irrelevant | 0 | 0 | This is a general review of bispecific antibodies that mentions catumaxomab but provides no original quantitative pharmacokinetic parameters or models for the drug. |
| popPK | Ruf_2021 | irrelevant | 2 | 1 | Human patients’ plasma catumaxomab concentrations are monitored, but no quantitative disposition parameters or PK model are reported. |
| popPK | Schroeder_2011 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of cytotoxicity and cytokine release, not a pharmacokinetic study reporting disposition parameters for catumaxomab. |
| popPK | Sebastian_2009 | irrelevant | 0 | 0 | The study is a Phase 1/2 clinical trial focused on safety and efficacy (pharmacodynamics) for malignant pleural effusion, and the provided text does not report any quantitative pharmacokinetic parameters (e.g., clearance, volume of distribution). |
| popPK | Strop_2012 | irrelevant | 0 | 0 | This antibody-engineering study mentions catumaxomab but reports no catumaxomab pharmacokinetic parameters. |
| popPK | Zaïr_2025 | irrelevant | 0 | 0 | This is a systematic review and meta-analysis of toxicity profiles, not a pharmacokinetic study reporting quantitative disposition parameters for catumaxomab. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcatumaxomab%5D&body=Drug%3A%20catumaxomab%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_catumaxomab/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
