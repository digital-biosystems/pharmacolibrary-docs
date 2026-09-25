<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B06A&quot;,&quot;href&quot;:&quot;atc/B06A.md&quot;},{&quot;label&quot;:&quot;crizanlizumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Crizanlizumab_Sy2023_reference&quot;,&quot;label&quot;:&quot;Sy_2023_reference&quot;,&quot;href&quot;:&quot;drugs/drug_crizanlizumab/Crizanlizumab_Sy2023_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# crizanlizumab

- **generic name:** crizanlizumab
- **ATC codes:** `B06AX01`
- **DrugBank:** [DB15271](https://go.drugbank.com/drugs/DB15271)
- **groups:** approved, investigational

## About

**Description.** Crizanlizumab is a humanized IgG2 monoclonal antibody used to reduce the frequency of vaso-occlusive crises in patients with sickle cell disease.[L10097] Sickle cell disease is a genetically inherited condition prevalent in the Middle East, Africa, and certain parts of India. The genetic mutation associated with this disease leads to the formation of abnormal, sickle shaped red blood cells that aggregate and block blood vessels throughout the body, causing vaso-occlusive crises. Sickle cell disease can lead to excruciating pain, stroke, infection, and various other complications arising from the blockage of blood vessels.[T734]

Currently, patients are prescribed [hydroxyurea] to raise levels of fetal hemoglobin as a method of reducing morbidity and mortality.[A187904] Though hydroxyurea has been shown to reduce the frequency of vaso-occlusive crises, adherence to this therapy is difficult due to adverse effects and the high variability of response to the drug between patients.[A187907] Crizanlizumab, or SEG101, is given once every 4 weeks and may improve patient adherence. It was developed by Novartis and was granted FDA approval on November 15, 2019.[L10097] While crizanlizumab received conditional marketing authorization from the EMA in October 2020, this approval was revoked in August 2023 due to concerns over the efficacy and safety of the drug.[L47750]

**Indication.** Crizanlizumab is indicated to reduce the frequency of vaso-occlusive crisis in patients with sickle cell diseases who are ≥16 years old.[L10097]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-19 11:03 | 2:13 | 0/1/0 | 1/0/0 | 0/0/0 | 41,376/7,617 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 1/2 | 2/1 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Sy_2023_reference](drugs/drug_crizanlizumab/Crizanlizumab_Sy2023_reference.md) | Sy SKB et al., Population Pharmacokinetics and Pharmac…, Clinical pharmacokinetics (2023) | [10.1007/s40262-022-01193-4](https://doi.org/10.1007/s40262-022-01193-4) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span> | [Sy_2023](drugs/drug_crizanlizumab/pd_Sy_2023_sP_selectin.md) | Sy SKB et al., Population Pharmacokinetics and Pharmac…, Clinical pharmacokinetics (2023) | [10.1007/s40262-022-01193-4](https://doi.org/10.1007/s40262-022-01193-4) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=crizanlizumab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | bile duct | <sub>“…inated in the urine, and only a small amount is excreted in bile.[A40006]…”</sub> | prose |
| excretion | kidney | <sub>“…] Monoclonal antibodies are generally not eliminated in the urine, and only a small amount…”</sub> | prose |

<sub>Actors without a tissue in the table: SELP (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Egesa_2022 | not_relevant | 0 | 0 | The paper is a general review of sickle cell disease epidemiology and treatment options, mentioning crizanlizumab only as an approved therapy without reporting any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Rivenbark_2026 | irrelevant | 0 | 0 | The paper is a claims analysis of prescription rates for sickle cell disease medications and does not report any pharmacokinetic parameters for crizanlizumab. |
| PGx | Ross_2025 | not_relevant | 0 | 0 | The paper reports a clinical trial of ruxolitinib combinations (including crizanlizumab) but does not report pharmacogenomic effects on PK/PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-19 11:01 UTC</sub>
