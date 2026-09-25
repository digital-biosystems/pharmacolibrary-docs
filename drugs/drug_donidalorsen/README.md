<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B06A&quot;,&quot;href&quot;:&quot;atc/B06A.md&quot;},{&quot;label&quot;:&quot;donidalorsen&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Donidalorsen_Diep2026_reference&quot;,&quot;label&quot;:&quot;Diep_2026_reference&quot;,&quot;href&quot;:&quot;drugs/drug_donidalorsen/Donidalorsen_Diep2026_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# donidalorsen

- **generic name:** donidalorsen
- **ATC codes:** `B06AC09`
- **DrugBank:** [DB18751](https://go.drugbank.com/drugs/DB18751)
- **groups:** approved, investigational

## About

**Description.** Hereditary angioedema (HAE) is a rare genetic disease characterized by recurrent episodes of severe swelling induced by excessive production of bradykinin.[A274308] Donidalorsen is a ligand-conjugated antisense oligonucleotide that reduces plasma prekallikrein production, thereby reducing bradykinin production and preventing the initiation of attacks.[L53788]

Donidalorsen was approved by the FDA in August 2025 for prophylactic use to prevent HAE attacks.[L53783,L53788] It is the first RNA-targeted therapy approved for HAE.[L53783]

**Indication.** Donidalorsen is indicated for prophylaxis to prevent attacks of hereditary angioedema (HAE) in adult and pediatric patients 12 years of age and older.[L53788]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-19 11:37 | 2:42 | 1/0/0 | 2/0/0 | 0/0/0 | 115,880/3,686 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub><br><sub>blocking: model_quarantined: Cl, Vd, ka, Tlag, k12, k21 left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Diep_2026_reference](drugs/drug_donidalorsen/Donidalorsen_Diep2026_reference.md) | Diep JK et al., Population Pharmacokinetic/Pharmacodyna…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70206](https://doi.org/10.1002/psp4.70206) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.591). The first reading is what the record holds.">cross-check: disputed</span> | [Diep_2026](drugs/drug_donidalorsen/pd_Diep_2026_PKK.md) | Diep JK et al., Population Pharmacokinetic/Pharmacodyna…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70206](https://doi.org/10.1002/psp4.70206) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.643). The first reading is what the record holds.">cross-check: disputed</span> | [Singh_2025](drugs/drug_donidalorsen/pd_Singh_2025_HAE_attack_rate.md) | Singh P et al., Exposure-Response Analysis of Donidalor…, Clinical and translational… (2025) | [10.1111/cts.70388](https://doi.org/10.1111/cts.70388) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=donidalorsen) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | <sub>“…short oligonucleotide fragments of varying sizes within the liver. _In vitro_ studies indi…”</sub> | prose |
| excretion | kidney | <sub>“…The mean fraction of unchanged ASO eliminated in urine is less than 1% of the administered…”</sub> | prose |

<sub>Actors without a tissue in the table: KLKB1 (antisense oligonucleotide), KLKB1 (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Singh_2025 | irrelevant | 2 | 0 | The paper is an exposure-response analysis that references a separate population PK model but does not report quantitative PK parameters (CL, V, etc.) for donidalorsen in the provided text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-19 11:35 UTC</sub>
