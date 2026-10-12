<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;belzutifan&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Belzutifan_Marathe2023_arithmetic_mean&quot;,&quot;label&quot;:&quot;Marathe_2023_arithmetic_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_belzutifan/Belzutifan_Marathe2023_arithmetic_mean.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Belzutifan_Marathe2023_geometric_mean&quot;,&quot;label&quot;:&quot;Marathe_2023_geometric_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_belzutifan/Belzutifan_Marathe2023_geometric_mean.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# belzutifan

- **generic name:** belzutifan
- **ATC codes:** `L01XX74`
- **DrugBank:** [DB15463](https://go.drugbank.com/drugs/DB15463) · **PubChem:** not captured
- **molar mass:** 383.34 g/mol (C17H12F3NO4S) — DrugBank
- **groups:** approved, investigational

## About

Belzutifan is an anticancer medicine used to treat von Hippel-Lindau disease, including kidney cancer associated with it. It is authorised in the European Union and is also under investigation for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27456641](https://www.wikidata.org/wiki/Q27456641) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| belzutifan | parent | 383.34 | C17H12F3NO4S | DrugBank | — | Marathe_2023 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 23:26 | 2:31 | 0/1/3 | 0/0/0 | 0/0/0 | 64,927/2,710 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.444). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Marathe_2023_absolute_parameter_value](drugs/drug_belzutifan/Belzutifan_Marathe2023_absolute_parameter_value.md) | — | 1-compartment (no model) | 2 | Marathe DD et al., Population pharmacokinetic analyses for…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.13028](https://doi.org/10.1002/psp4.13028) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.706). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: T1_cmax</sub><br><sub>route_to: `scholar`</sub> | [Marathe_2023_arithmetic_mean](drugs/drug_belzutifan/Belzutifan_Marathe2023_arithmetic_mean.md) | ▶ model + simulator | 1-compartment, oral | 10 | Marathe DD et al., Population pharmacokinetic analyses for…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.13028](https://doi.org/10.1002/psp4.13028) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.815). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: T1_cmax</sub><br><sub>route_to: `scholar`</sub> | [Marathe_2023_geometric_mean](drugs/drug_belzutifan/Belzutifan_Marathe2023_geometric_mean.md) | ▶ model + simulator | 1-compartment, oral | 10 | Marathe DD et al., Population pharmacokinetic analyses for…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.13028](https://doi.org/10.1002/psp4.13028) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.476). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub><br><sub>route_to: `human_review`</sub> | [Marathe_2023_estimate](drugs/drug_belzutifan/Belzutifan_Marathe2023_estimate.md) | — | 1-compartment (no model) | 7 (+4 cov.) | Marathe DD et al., Population pharmacokinetic analyses for…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.13028](https://doi.org/10.1002/psp4.13028) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 4  ·  extracted 0  ·  needs_review 3  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Marathe_2024.pdf` | Marathe DD et al., Exposure-Response Analyses for Belzutif…, Journal of clinical pharmac… (2024) | popPK | 8 | [10.1002/jcph.2459](https://doi.org/10.1002/jcph.2459) | [38752556](https://pubmed.ncbi.nlm.nih.gov/38752556) | The paper describes a population pharmacokinetic model for belzutifan used for exposure-response analysis, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |

<sub>queue written 2026-10-07T23:24:06.751842+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Marathe_2024 | relevant | 8 | 0 | The paper describes a population pharmacokinetic model for belzutifan used for exposure-response analysis, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 23:24 UTC</sub>
