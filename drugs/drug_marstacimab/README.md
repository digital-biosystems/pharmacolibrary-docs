<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;marstacimab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Marstacimab_Nayak2026_reference&quot;,&quot;label&quot;:&quot;Nayak_2026_reference&quot;,&quot;href&quot;:&quot;drugs/drug_marstacimab/Marstacimab_Nayak2026_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# marstacimab

- **generic name:** marstacimab
- **ATC codes:** `B02BX11`
- **DrugBank:** [DB17725](https://go.drugbank.com/drugs/DB17725)
- **groups:** approved, investigational

## About

**Description.** Marstacimab is a human monoclonal immunoglobulin G Type 1 (IgG1) antibody produced by Chinese hamster ovary (CHO) cells by recombinant DNA technology.[L51803] It is a tissue factor pathway inhibitor (TFPI) antagonist, which is an endogenous anticoagulant.[A264608] Marstacimab is used to prevent bleeding episodes in patients with hemophilia,[L51803] which is an X‐linked bleeding disorder characterized by coagulation clotting factor deficiency.[A264613] Marstacimab promotes hemostasis via the extrinsic pathway.[A264613]

**Indication.** Marstacimab is indicated for routine prophylaxis to prevent or reduce the frequency of bleeding episodes in adult and pediatric patients 12 years of age and older with:

- hemophilia A (congenital factor VIII deficiency) without factor VIII inhibitors, or [L51803]
- hemophilia B (congenital factor IX deficiency) without factor IX inhibitors.[L51803]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-18 21:35 | 5:15 | 1/0/0 | 2/0/0 | 0/0/0 | 142,208/11,008 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 1/3 | 5/1 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: T3_param_coverage</sub><br><sub>route_to: `engineer`</sub> | [Nayak_2026_reference](drugs/drug_marstacimab/Marstacimab_Nayak2026_reference.md) | Nayak S et al., Clinical Pharmacokinetics and Pharmacod…, Clinical pharmacokinetics (2026) | [10.1007/s40262-026-01695-5](https://doi.org/10.1007/s40262-026-01695-5) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> | [Jin_2026](drugs/drug_marstacimab/pd_Jin_2026_Inh_EFF.md) | Jin M et al., Discovery and optimization of marstacim…, mAbs (2026) | [10.1080/19420862.2026.2685362](https://doi.org/10.1080/19420862.2026.2685362) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.0). The first reading is what the record holds.">cross-check: disputed</span> | [Jin_2026](drugs/drug_marstacimab/pd_Jin_2026_RO.md) | Jin M et al., Discovery and optimization of marstacim…, mAbs (2026) | [10.1080/19420862.2026.2685362](https://doi.org/10.1080/19420862.2026.2685362) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.9). The first reading is what the record holds.">cross-check: disputed</span> | [Nayak_2026](drugs/drug_marstacimab/pd_Nayak_2026_peak_thrombin.md) | Nayak S et al., Clinical Pharmacokinetics and Pharmacod…, Clinical pharmacokinetics (2026) | [10.1007/s40262-026-01695-5](https://doi.org/10.1007/s40262-026-01695-5) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=marstacimab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: TFPI (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 8 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Jin_2026 | irrelevant | 0 | 0 | not captured |
| popPK | Mahlangu_2023 | irrelevant | 0 | 0 | not captured |
| popPK | Mahlangu_2025_2 | irrelevant | 0 | 0 | not captured |
| popPK | Ozelo_2026 | irrelevant | 0 | 0 | not captured |
| popPK | Peraza_2025 | irrelevant | 0 | 0 | not captured |
| popPK | Sun_2023 | irrelevant | 0 | 0 | not captured |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-18 21:30 UTC</sub>
