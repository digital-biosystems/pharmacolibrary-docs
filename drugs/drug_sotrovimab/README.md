<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J06B&quot;,&quot;href&quot;:&quot;atc/J06B.md&quot;},{&quot;label&quot;:&quot;sotrovimab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sotrovimab_Sager2023_reference&quot;,&quot;label&quot;:&quot;Sager_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sotrovimab/Sotrovimab_Sager2023_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sotrovimab_SnchezPearson2025_reference&quot;,&quot;label&quot;:&quot;S\u00e1nchez-Pearson_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sotrovimab/Sotrovimab_SnchezPearson2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# sotrovimab

- **generic name:** sotrovimab
- **ATC codes:** `J06BD05`
- **DrugBank:** [DB16355](https://go.drugbank.com/drugs/DB16355) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Sotrovimab is a monoclonal antibody used to treat COVID-19. It has been approved and used against COVID-19, though its marketing authorisation in the European Union has been withdrawn.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q106943333](https://www.wikidata.org/wiki/Q106943333) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 14:55 | 1:35 | 2/0/0 | 1/0/1 | 0/0/0 | 90,753/3,669 | einfracz / qwen3.8-27b | 3 | 0/3 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.722). Primary extraction retained.">cross-check: disputed</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub> | [Sager_2023_reference](drugs/drug_sotrovimab/Sotrovimab_Sager2023_reference.md) | ▶ model + simulator | 2-compartment, IV | 5 (+5 cov.) | Sager JE et al., Population pharmacokinetics and exposur…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.12958](https://doi.org/10.1002/psp4.12958) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.643). Primary extraction retained.">cross-check: disputed</span> | [Sánchez-Pearson_2025_reference](drugs/drug_sotrovimab/Sotrovimab_SnchezPearson2025_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Sánchez-Pearson Y et al., Safety, Tolerability and Pharmacokineti…, Drugs in R&D (2025) | [10.1007/s40268-025-00530-9](https://doi.org/10.1007/s40268-025-00530-9) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Wang_2026_Inhibition](drugs/drug_sotrovimab/pd_Wang_2026_Inhibition.md) | %Inhibition ← sotrovimab · direct Emax (saturable) effect | — | Wang P et al., Optimizing drug combinations to resurre…, Frontiers in digital health (2026) | [10.3389/fdgth.2026.1744623](https://doi.org/10.3389/fdgth.2026.1744623) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.714). Primary extraction retained.">cross-check: disputed</span> | [Sager_2023_Progression_of_COVID_19_through_day_29](drugs/drug_sotrovimab/pd_Sager_2023_Progression_of_COVID_19_through_day_29.md) | Progression of COVID-19 ← sotrovimab · time-to-event model | — | Sager JE et al., Population pharmacokinetics and exposur…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.12958](https://doi.org/10.1002/psp4.12958) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 2  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Wang_2026 | irrelevant | 0 | 0 | The study is an in-vitro virology study assessing drug combinations for antiviral efficacy against SARS-CoV-2, and does not report pharmacokinetic disposition parameters for sotrovimab. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 14:54 UTC</sub>
