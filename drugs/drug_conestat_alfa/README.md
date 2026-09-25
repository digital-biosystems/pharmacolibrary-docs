<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B06A&quot;,&quot;href&quot;:&quot;atc/B06A.md&quot;},{&quot;label&quot;:&quot;conestat alfa&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;ConestatAlfa_Farrell2013_reference&quot;,&quot;label&quot;:&quot;Farrell_2013_reference&quot;,&quot;href&quot;:&quot;drugs/drug_conestat_alfa/ConestatAlfa_Farrell2013_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# conestat alfa

- **generic name:** conestat alfa
- **ATC codes:** `B06AC04`, `B06C`
- **DrugBank:** [DB09228](https://go.drugbank.com/drugs/DB09228)
- **groups:** approved

## About

**Description.** C1 Esterase Inhibitor (Recombinant) is a recombinant analogue of endogenous complement component-1 esterase inhibitor (rhC1INH), purified from the milk of transgenic rabbits. The primary function of endogenous C1INH is to regulate the activation of the complement and contact system pathways. It does this through inhibition of several target proteases within these pathways including activated C1s, kallikrein, factor XIIa and factor XIa. C1 esterase inhibitor has also been shown to inhibit the action of thrombin within the coagulation pathway, and tPA and plasmin within the fibrinolytic pathway. Deficiency of C1-inhibitor allows for increased plasma kallikrein activation and subsequent production of bradykinin. Additionally, C4 and C2 cleavage occurs resulting in auto-activation of the complement system. Down-stream effects of the lack of enzyme inhibition by C1 esterase inhibitor results in swelling due to leakage of fluid from blood vessels into connective tissue and consequently the presentation of hereditary angioedema (HAE). 

Marketed as the product Ruconest (FDA), this drug is indicated for the treatment of acute attacks of hereditary angioedema (HAE) due to C1 esterase inhibitor deficiency in adults. Intravenous replacement of C1 esterase inhibitor results in reversal of acute symptoms of HAE.

**Indication.** For the treatment of acute attacks of hereditary angioedema (HAE) due to C1 esterase inhibitor deficiency in adults.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-19 11:01 | 0:38 | 0/0/1 | 0/0/0 | 0/0/0 | 24,355/578 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/1 | 2/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.833). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs both; the m…</sub><br><sub>route_to: `human_review`</sub> | [Farrell_2013_reference](drugs/drug_conestat_alfa/ConestatAlfa_Farrell2013_reference.md) | Farrell C et al., Population pharmacokinetics of recombin…, British journal of clinical… (2013) | [10.1111/bcp.12132](https://doi.org/10.1111/bcp.12132) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=conestat_alfa) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: C1R (inhibitor), C1S (inhibitor), F11 (inhibitor), F12 (inhibitor), F2 (inhibitor), KLKB1 (inhibitor), PLAT (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Goggs_2019 | not_relevant | 0 | 0 | The paper is a study protocol for a randomized controlled trial and does not report any results, concentration-effect data, or numeric PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-19 11:01 UTC</sub>
