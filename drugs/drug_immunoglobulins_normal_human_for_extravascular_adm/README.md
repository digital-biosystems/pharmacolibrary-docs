<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J06B&quot;,&quot;href&quot;:&quot;atc/J06B.md&quot;},{&quot;label&quot;:&quot;immunoglobulins, normal human, for extravascular adm.&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;ImmunoglobulinsNormalHumanForExtravascularAdm_Zhang2020_refe&quot;,&quot;label&quot;:&quot;Zhang_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_immunoglobulins_normal_human_for_extravascular_adm/ImmunoglobulinsNormalHumanForExtravascularAdm_Zhang2020_refe.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# immunoglobulins, normal human, for extravascular adm.

- **generic name:** immunoglobulins, normal human, for extravascular adm.
- **ATC codes:** `J06BA01`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Hizentra is a pharmaceutical product containing normal human immunoglobulin, a class of medicines used for immune-related conditions. It is classified in the ATC system under normal human immunoglobulins for systemic antiinfective use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q57266522](https://www.wikidata.org/wiki/Q57266522) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 14:37 | 3:10 | 1/0/0 | 0/0/0 | 0/0/0 | 37,624/1,708 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.167). The first reading is what the record holds.">cross-check: disputed</span> | [Zhang_2020_reference](drugs/drug_immunoglobulins_normal_human_for_extravascular_adm/ImmunoglobulinsNormalHumanForExtravascularAdm_Zhang2020_refe.md) | ▶ model + simulator | 2-compartment, IV | 4 | Zhang Y et al., Population pharmacokinetic analysis of…, International immunopharmac… (2020) | [10.1016/j.intimp.2019.106005](https://doi.org/10.1016/j.intimp.2019.106005) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Landersdorfer_2013.pdf` | Landersdorfer CB et al., Pharmacokinetic modeling and simulation…, Postgraduate medicine (2013) | popPK | 10 | [10.3810/pgm.2013.11.2712](https://doi.org/10.3810/pgm.2013.11.2712) | [24200761](https://pubmed.ncbi.nlm.nih.gov/24200761) | The paper describes a population PK model for IgG (Hizentra) suitable for extraction, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text, only the study design and simulation conclusions. |
| `Zhang_2020.pdf` | Zhang Y et al., Population pharmacokinetic analysis of…, International immunopharmac… (2020) | popPK | 10 | [10.1016/j.intimp.2019.106005](https://doi.org/10.1016/j.intimp.2019.106005) | [31806567](https://pubmed.ncbi.nlm.nih.gov/31806567) | The paper provides specific numeric population pharmacokinetic parameters (CL, Vc, Q, Vp) for IgPro20 (subcutaneous human immunoglobulin) in the main text. |

<sub>queue written 2026-10-07T14:34:42.471414+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Landersdorfer_2013 | relevant | 10 | 2 | The paper describes a population PK model for IgG (Hizentra) suitable for extraction, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text, only the study design and simulation conclusions. |
| popPK | Sidhu_2014 | relevant | 8 | 4 | The paper uses a population PK model for subcutaneous immunoglobulin (IgG) and reports simulation results (AUC, Cmax, Cmin ratios), but the specific numeric estimates for the model parameters (CL, V, Q, ka) are derived from a previously published model [36] and are not explicitly listed as values in the current text, appearing instead in figures or external references. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 14:37 UTC</sub>
