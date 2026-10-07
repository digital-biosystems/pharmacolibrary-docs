<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;patritumab deruxtecan&quot;}]"></div>

# patritumab deruxtecan

- **generic name:** patritumab deruxtecan
- **ATC codes:** `L01FX36`
- **DrugBank:** [DB21996](https://go.drugbank.com/drugs/DB21996) · **PubChem:** not captured
- **groups:** investigational

## About

Patritumab deruxtecan is an investigational antibody-drug conjugate being studied as an anticancer treatment. It is not yet approved; it remains in clinical development and is not authorised for routine use.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| deruxtecan | metabolite | 493.5 | — | the paper | — | Lu_2023 |
| DXd | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:17 | 4:52 | 0/3/0 | 0/0/0 | 0/0/0 | 76,657/7,230 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 1/2 | 2/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Lu_2023_iiv_of_mean](drugs/drug_patritumab_deruxtecan/PatritumabDeruxtecan_Lu2023_iiv_of_mean.md) | — | parent + metabolite (no model) | 0 | Lu Y et al., Population Pharmacokinetics of Patritum…, Journal of clinical pharmac… (2023) | [10.1002/jcph.2137](https://doi.org/10.1002/jcph.2137) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Lu_2023_mean](drugs/drug_patritumab_deruxtecan/PatritumabDeruxtecan_Lu2023_mean.md) | — | parent + metabolite (no model) | 9 (+3 cov.) | Lu Y et al., Population Pharmacokinetics of Patritum…, Journal of clinical pharmac… (2023) | [10.1002/jcph.2137](https://doi.org/10.1002/jcph.2137) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Xu_2025_reference](drugs/drug_patritumab_deruxtecan/PatritumabDeruxtecan_Xu2025_reference.md) | — | parent + metabolite (no model) | 0 | Xu Y et al., Integrated Two-Analyte Population Pharm…, Clinical pharmacokinetics (2025) | [10.1007/s40262-025-01521-4](https://doi.org/10.1007/s40262-025-01521-4) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 0  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Li_2025 | irrelevant | 2 | 0 | The paper is an exposure-response analysis that uses PK exposure metrics (Cmax, Ctrough, Cavg) derived from a previously developed population PK model, but it does not report the underlying quantitative disposition parameters (CL, V, Q, ka) for patritumab_deruxtecan. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 18:14 UTC</sub>
