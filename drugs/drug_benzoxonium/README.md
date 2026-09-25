<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A01A&quot;,&quot;href&quot;:&quot;atc/A01A.md&quot;},{&quot;label&quot;:&quot;Benzoxonium&quot;}]"></div>

# Benzoxonium

- **generic name:** Benzoxonium
- **ATC codes:** `A01AB14`, `D08AJ05`
- **DrugBank:** [DB13565](https://go.drugbank.com/drugs/DB13565)
- **groups:** experimental

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-18 01:15 | 3:25 | 0/0/0 | 1/0/0 | 0/0/0 | 124,726/1,808 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 1/4 | 5/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Hakimi_2019](drugs/drug_benzoxonium/pd_Hakimi_2019_IL_10_expression.md) | Hakimi Parizi M et al., Antileishmanial activity and immune mod…, Journal of parasitic diseas… (2019) | [10.1007/s12639-019-01105-7](https://doi.org/10.1007/s12639-019-01105-7) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Hakimi_2019](drugs/drug_benzoxonium/pd_Hakimi_2019_IL_12_expression.md) | Hakimi Parizi M et al., Antileishmanial activity and immune mod…, Journal of parasitic diseas… (2019) | [10.1007/s12639-019-01105-7](https://doi.org/10.1007/s12639-019-01105-7) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Hakimi_2019](drugs/drug_benzoxonium/pd_Hakimi_2019_amastigote_inhibition.md) | Hakimi Parizi M et al., Antileishmanial activity and immune mod…, Journal of parasitic diseas… (2019) | [10.1007/s12639-019-01105-7](https://doi.org/10.1007/s12639-019-01105-7) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Hakimi_2019](drugs/drug_benzoxonium/pd_Hakimi_2019_apoptosis_rate.md) | Hakimi Parizi M et al., Antileishmanial activity and immune mod…, Journal of parasitic diseas… (2019) | [10.1007/s12639-019-01105-7](https://doi.org/10.1007/s12639-019-01105-7) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Hakimi_2019](drugs/drug_benzoxonium/pd_Hakimi_2019_promastigote_inhibition.md) | Hakimi Parizi M et al., Antileishmanial activity and immune mod…, Journal of parasitic diseas… (2019) | [10.1007/s12639-019-01105-7](https://doi.org/10.1007/s12639-019-01105-7) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Apgar_2018 | irrelevant | 0 | 0 | The paper studies hUGT1A1-modRNA (an mRNA therapeutic) for Crigler-Najjar syndrome, not benzoxonium. |
| popPK | Belenichev_2025 | irrelevant | 0 | 0 | The paper studies the neuroprotective effects of Angiolin gel in rats and does not report pharmacokinetic parameters for benzoxonium. |
| PD | Belenichev_2025 | not_relevant | 0 | 0 | The paper reports a comparative efficacy study of Angiolin gel (not Benzoxonium) in a rat model, providing group-level mean effects without any concentration-effect or dose-response modeling or numeric PD parameters. |
| popPK | EFSA_2023 | irrelevant | 0 | 0 | The paper is a risk assessment of N-nitrosamines in food and does not involve the drug benzoxonium or report any pharmacokinetic parameters. |
| PD | EFSA_2023 | not_relevant | 0 | 0 | The paper is a risk assessment of N-nitrosamines in food and does not mention Benzoxonium or report any pharmacodynamic or exposure-response data. |
| popPK | Futane_2023 | irrelevant | 0 | 0 | The paper is a review on aptamer-based biosensors for point-of-care diagnostics and does not contain any pharmacokinetic data or parameters for benzoxonium. |
| PD | Futane_2023 | not_relevant | 0 | 0 | The paper is a review on aptamer-based biosensors for point-of-care diagnosis and does not contain any pharmacodynamic or exposure-response data for Benzoxonium. |
| popPK | Hakimi_2019 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of antileishmanial activity and immune modulation, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Kayukova_2026 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis and in vitro biological activity of new amidoxime derivatives, not a pharmacokinetic study of benzoxonium. |
| PD | Kayukova_2026 | not_relevant | 0 | 0 | The paper reports the synthesis and qualitative screening of new compounds for antimicrobial, antifungal, and antidiabetic activity, but does not mention Benzoxonium or provide any numeric pharmacodynamic parameters (e.g., MIC, IC50, Emax) or exposure-response relationships. |
| popPK | Mertes_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of transcrocetin (TC) in a liposomal formulation, not benzoxonium. |
| PD | Mertes_2022 | not_relevant | 0 | 0 | The paper reports clinical outcomes (PaO2/FiO2, SOFA) and dose-limiting toxicity for a liposomal formulation (LEAF-4L6715), but does not report pharmacokinetic data, exposure-response relationships, or numeric PD parameters for Benzoxonium. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
