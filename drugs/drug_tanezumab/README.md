<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;tanezumab&quot;}]"></div>

# tanezumab

- **generic name:** tanezumab
- **ATC codes:** `N02BG12`
- **DrugBank:** [DB12335](https://go.drugbank.com/drugs/DB12335) · **PubChem:** not captured
- **groups:** investigational

## About

Tanezumab is an investigational monoclonal antibody analgesic studied for osteoarthritis and chronic pain. It has not been approved; the European Medicines Agency refused a marketing application, so it remains investigational.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3980782](https://www.wikidata.org/wiki/Q3980782) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Jonsson_2016_reference](drugs/drug_tanezumab/Tanezumab_Jonsson2016_reference.md) | — | 2-compartment (no model) | 6 (+5 cov.) | Jonsson EN et al., Population pharmacokinetics of tanezuma…, British journal of clinical… (2016) | [10.1111/bcp.12850](https://doi.org/10.1111/bcp.12850) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Shoji_2022_reference](drugs/drug_tanezumab/Tanezumab_Shoji2022_reference.md) | — | 2-compartment (no model) | 5 | Shoji S et al., Population pharmacokinetics of tanezuma…, British journal of clinical… (2022) | [10.1111/bcp.15259](https://doi.org/10.1111/bcp.15259) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 06:18 | 0:45 | 0/2/0 | 0/0/0 | 0/0/0 | 60,267/2,174 | einfracz / qwen3.8-27b | 3 | 0/3 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 3  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Shoji_2022.pdf` | Shoji S et al., Population pharmacokinetics of tanezuma…, British journal of clinical… (2022) | popPK | 10 | [10.1111/bcp.15259](https://doi.org/10.1111/bcp.15259) | [35112378](https://pubmed.ncbi.nlm.nih.gov/35112378) | The paper reports a population PK model with explicit numeric values for clearance, central volume, peripheral volume, and bioavailability in humans. |

<sub>queue written 2026-10-07T06:17:47.831419+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Lian_2022 | not_relevant | 1 | 0 | The paper is a meta-analysis of clinical trials reporting aggregate efficacy outcomes (mean differences in pain scores) and safety, but it does not report any pharmacokinetic data, exposure-response relationships, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Shoji_2023 | irrelevant | 2 | 1 | The study focuses on target-mediated drug disposition (TMDD) modeling of NGF, and the specific population PK parameters for tanezumab (CL, V, etc.) are explicitly stated to be fixed from a previous reference and provided in Table S1, which is not included in the evidence. |
| PD | Tahir_2023 | not_relevant | 2 | 1 | The paper is a meta-analysis of clinical trial outcomes (dose-response in terms of fixed doses vs placebo) but does not report pharmacokinetic data, concentration-effect relationships, or formal PD model parameters (Emax, EC50, etc.). |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 06:17 UTC</sub>
