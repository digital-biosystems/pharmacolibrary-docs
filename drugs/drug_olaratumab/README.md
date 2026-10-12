<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;olaratumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Olaratumab_Mo2018_base&quot;,&quot;label&quot;:&quot;Mo_2018_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_olaratumab/Olaratumab_Mo2018_base.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Olaratumab_Mo2018_final&quot;,&quot;label&quot;:&quot;Mo_2018_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_olaratumab/Olaratumab_Mo2018_final.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# olaratumab

- **generic name:** olaratumab
- **ATC codes:** `L01FX10`, `L01XC27`
- **DrugBank:** [DB06043](https://go.drugbank.com/drugs/DB06043) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Olaratumab is a monoclonal antibody anticancer drug that was used to treat soft-tissue sarcoma.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7083108](https://www.wikidata.org/wiki/Q7083108) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:06 | 10:18 | 2/0/0 | 0/0/1 | 0/0/0 | 76,580/38,283 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed 1/2</span> | [Mo_2018_base](drugs/drug_olaratumab/Olaratumab_Mo2018_base.md) | ▶ model + simulator | 2-compartment, IV | 4 | Mo G et al., Population Pharmacokinetic Modeling of…, Clinical pharmacokinetics (2018) | [10.1007/s40262-017-0562-0](https://doi.org/10.1007/s40262-017-0562-0) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed 1/2</span> | [Mo_2018_final](drugs/drug_olaratumab/Olaratumab_Mo2018_final.md) | ▶ model + simulator | 2-compartment, IV | 4 | Mo G et al., Population Pharmacokinetic Modeling of…, Clinical pharmacokinetics (2018) | [10.1007/s40262-017-0562-0](https://doi.org/10.1007/s40262-017-0562-0) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.444). Primary extraction retained.">cross-check: disputed</span> | [Jones_2019_OS](drugs/drug_olaratumab/pd_Jones_2019_OS.md) | overall survival ← olaratumab · time-to-event model | — | Jones RL et al., Exposure-response relationship of olara…, Cancer chemotherapy and pha… (2019) | [10.1007/s00280-018-3723-4](https://doi.org/10.1007/s00280-018-3723-4) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.444). Primary extraction retained.">cross-check: disputed</span> | [Jones_2019_PFS](drugs/drug_olaratumab/pd_Jones_2019_PFS.md) | progression-free survival ← olaratumab · time-to-event model | — | Jones RL et al., Exposure-response relationship of olara…, Cancer chemotherapy and pha… (2019) | [10.1007/s00280-018-3723-4](https://doi.org/10.1007/s00280-018-3723-4) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 2 matched, 2 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 2  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Jones_2019 | irrelevant | 2 | 0 | The paper reports exposure-response (efficacy/safety) parameters (EC50, Emax) rather than quantitative pharmacokinetic disposition parameters (CL, V, Q, ka) for olaratumab. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 18:57 UTC</sub>
