<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B06A&quot;,&quot;href&quot;:&quot;atc/B06A.md&quot;},{&quot;label&quot;:&quot;lanadelumab&quot;}]"></div>

# lanadelumab

- **generic name:** lanadelumab
- **ATC codes:** `B06AC05`
- **DrugBank:** [DB14597](https://go.drugbank.com/drugs/DB14597) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Lanadelumab, a monoclonal antibody, is used to treat hereditary angioedema. It is authorised in the European Union and is an approved medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q25326708](https://www.wikidata.org/wiki/Q25326708) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 01:21 | 5:35 | 0/0/2 | 1/0/0 | 0/0/0 | 103,006/14,827 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q18 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Wang_2020_base](drugs/drug_lanadelumab/Lanadelumab_Wang2020_base.md) | — | 1-compartment (no model) | 9 | Wang Y et al., Pharmacokinetics, Pharmacodynamics, and…, Clinical and translational… (2020) | [10.1111/cts.12806](https://doi.org/10.1111/cts.12806) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q18 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Wang_2020_final](drugs/drug_lanadelumab/Lanadelumab_Wang2020_final.md) | — | 1-compartment (no model) | 10 | Wang Y et al., Pharmacokinetics, Pharmacodynamics, and…, Clinical and translational… (2020) | [10.1111/cts.12806](https://doi.org/10.1111/cts.12806) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Wang_2020_HAE_Attack_FreeDays](drugs/drug_lanadelumab/pd_Wang_2020_HAE_Attack_FreeDays.md) | HAE Attack FreeDays ← lanadelumab · direct sigmoid Emax (Hill) effect | — | Wang Y et al., Pharmacokinetics, Pharmacodynamics, and…, Clinical and translational… (2020) | [10.1111/cts.12806](https://doi.org/10.1111/cts.12806) |
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.78). The first reading is what the record holds.">cross-check: disputed</span> | [Wang_2020_cHMWK](drugs/drug_lanadelumab/pd_Wang_2020_cHMWK.md) | cHMWK ← lanadelumab · indirect response — drug inhibits the production of cHMWK | — | Wang Y et al., Pharmacokinetics, Pharmacodynamics, and…, Clinical and translational… (2020) | [10.1111/cts.12806](https://doi.org/10.1111/cts.12806) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Wang_2020_HAE_attack_rate](drugs/drug_lanadelumab/pd_Wang_2020_HAE_attack_rate.md) | HAE attack rate ← lanadelumab · direct Emax (saturable) effect | — | Wang Y et al., Pharmacokinetics, Pharmacodynamics, and…, Clinical and translational… (2020) | [10.1111/cts.12806](https://doi.org/10.1111/cts.12806) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Wang_2020_Time_to_first_HAE_attack](drugs/drug_lanadelumab/pd_Wang_2020_Time_to_first_HAE_attack.md) | Time to first HAE attack ← lanadelumab · time-to-event model | — | Wang Y et al., Pharmacokinetics, Pharmacodynamics, and…, Clinical and translational… (2020) | [10.1111/cts.12806](https://doi.org/10.1111/cts.12806) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=lanadelumab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: KLKB1 (inhibitor), KLKB1 (regulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs_review 2  ·  rejected 0  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Marceau_2020 | not_relevant | 0 | 0 | The paper investigates bradykinin kinetics in hereditary angioedema and mentions lanadelumab only to note a lack of effect on KLK-1-induced bradykinin formation in a specific patient group, without reporting a pharmacogenomic effect on lanadelumab's PK or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 01:16 UTC</sub>
