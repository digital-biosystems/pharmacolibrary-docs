<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;tarlatamab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tarlatamab_Kong2025_reference&quot;,&quot;label&quot;:&quot;Kong_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tarlatamab/Tarlatamab_Kong2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# tarlatamab

- **generic name:** tarlatamab
- **ATC codes:** `L01FX33`
- **DrugBank:** [DB17256](https://go.drugbank.com/drugs/DB17256) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Tarlatamab is a bispecific monoclonal antibody used to treat small cell lung cancer. It is an approved anticancer medicine and is authorised in the European Union, with further uses still under investigation.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:05 | 4:29 | 1/0/0 | 1/0/0 | 0/0/0 | 116,437/6,422 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 0/6 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: partial</span> | [Kong_2025_reference](drugs/drug_tarlatamab/Tarlatamab_Kong2025_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Kong S et al., Population Pharmacokinetics of Tarlatam…, Clinical pharmacokinetics (2025) | [10.1007/s40262-025-01499-z](https://doi.org/10.1007/s40262-025-01499-z) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> | [Chen_2025_BTSR](drugs/drug_tarlatamab/pd_Chen_2025_BTSR.md) | best tumor size response ← tarlatamab · direct Emax (saturable) effect | — | Chen PW et al., Tarlatamab Exposure-Efficacy and Exposu…, Clinical cancer research :… (2025) | [10.1158/1078-0432.CCR-25-2134](https://doi.org/10.1158/1078-0432.CCR-25-2134) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> | [Chen_2025_DCR](drugs/drug_tarlatamab/pd_Chen_2025_DCR.md) | disease control rate ← tarlatamab · direct Emax (saturable) effect | — | Chen PW et al., Tarlatamab Exposure-Efficacy and Exposu…, Clinical cancer research :… (2025) | [10.1158/1078-0432.CCR-25-2134](https://doi.org/10.1158/1078-0432.CCR-25-2134) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> | [Chen_2025_ORR](drugs/drug_tarlatamab/pd_Chen_2025_ORR.md) | objective response rate ← tarlatamab · direct Emax (saturable) effect | — | Chen PW et al., Tarlatamab Exposure-Efficacy and Exposu…, Clinical cancer research :… (2025) | [10.1158/1078-0432.CCR-25-2134](https://doi.org/10.1158/1078-0432.CCR-25-2134) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Chen_2025_neutropenia](drugs/drug_tarlatamab/pd_Chen_2025_neutropenia.md) | neutropenia ← tarlatamab · direct linear effect | — | Chen PW et al., Tarlatamab Exposure-Efficacy and Exposu…, Clinical cancer research :… (2025) | [10.1158/1078-0432.CCR-25-2134](https://doi.org/10.1158/1078-0432.CCR-25-2134) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | [Chen_2025_OS](drugs/drug_tarlatamab/pd_Chen_2025_OS.md) | overall survival ← tarlatamab · time-to-event model | — | Chen PW et al., Tarlatamab Exposure-Efficacy and Exposu…, Clinical cancer research :… (2025) | [10.1158/1078-0432.CCR-25-2134](https://doi.org/10.1158/1078-0432.CCR-25-2134) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | [Chen_2025_PFS](drugs/drug_tarlatamab/pd_Chen_2025_PFS.md) | progression-free survival ← tarlatamab · time-to-event model | — | Chen PW et al., Tarlatamab Exposure-Efficacy and Exposu…, Clinical cancer research :… (2025) | [10.1158/1078-0432.CCR-25-2134](https://doi.org/10.1158/1078-0432.CCR-25-2134) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=tarlatamab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CD3D (antibody), CD3D (binder), DLL3 (antibody), DLL3 (binder).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kong_2025.pdf` | Kong S et al., Population Pharmacokinetics of Tarlatam…, Clinical pharmacokinetics (2025) | popPK | 10 | [10.1007/s40262-025-01499-z](https://doi.org/10.1007/s40262-025-01499-z) | [40261494](https://pubmed.ncbi.nlm.nih.gov/40261494) | The paper reports a population PK model for tarlatamab with explicit numeric values for clearance (0.649 L/day), central volume (3.44 L), and half-life (11.2 days) in the abstract. |
| `Minocha_2024.pdf` | Minocha M et al., Pharmacokinetics of Tarlatamab, a Delta…, Clinical pharmacokinetics (2024) | popPK | 8 | [10.1007/s40262-024-01451-7](https://doi.org/10.1007/s40262-024-01451-7) | [39589690](https://pubmed.ncbi.nlm.nih.gov/39589690) | The study reports quantitative PK parameters (half-life) for tarlatamab in humans, but specific values for clearance and volume are not explicitly listed in the provided text. |

<sub>queue written 2026-10-07T21:02:07.870223+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chen_2025 | irrelevant | 2 | 0 | The paper reports exposure-response relationships for efficacy and safety, but does not provide quantitative population pharmacokinetic parameters (CL, V, Q, ka) for tarlatamab, which are referenced as being in a separate publication (ref 7). |
| popPK | Choi_2026 | irrelevant | 0 | 0 | The paper is a clinical safety and efficacy study focusing on CRS/ICANS and survival outcomes, containing no pharmacokinetic parameters (CL, V, etc.) for tarlatamab. |
| popPK | Elloumi_2026 | irrelevant | 0 | 0 | The paper is a genomics platform tutorial for small cell lung cancer and does not report any pharmacokinetic parameters for tarlatamab. |
| popPK | Leithner_2025 | irrelevant | 0 | 0 | The paper is a structural and mechanistic study of bispecific T cell engagers (Her2/CD3) and does not report pharmacokinetic parameters for tarlatamab. |
| popPK | Ma_2025 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of YL201 (a B7H3-targeting ADC), not tarlatamab. |
| popPK | Minocha_2024 | relevant | 8 | 4 | The study reports quantitative PK parameters (half-life) for tarlatamab in humans, but specific values for clearance and volume are not explicitly listed in the provided text. |
| popPK | Paz-Ares_2023 | relevant | 4 | 2 | The paper reports a terminal elimination half-life of 5.7 days for tarlatamab in humans, but lacks other quantitative disposition parameters like clearance or volume of distribution. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 21:02 UTC</sub>
