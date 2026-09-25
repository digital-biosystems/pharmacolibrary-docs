<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B06A&quot;,&quot;href&quot;:&quot;atc/B06A.md&quot;},{&quot;label&quot;:&quot;garadacimab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Garadacimab_Pawaskar2022_reference&quot;,&quot;label&quot;:&quot;Pawaskar_2022_reference&quot;,&quot;href&quot;:&quot;drugs/drug_garadacimab/Garadacimab_Pawaskar2022_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# garadacimab

- **generic name:** garadacimab
- **ATC codes:** `B06AC07`
- **DrugBank:** [DB15629](https://go.drugbank.com/drugs/DB15629)
- **groups:** approved, investigational

## About

**Description.** Garadacimab is a fully human monoclonal antibody targeted against activated factor XII.[L53283] It was developed by CSL Behring for use as a prophylactic agent in patients with hereditary angioedema (HAE), a rare autosomal dominant disorder that results in acute episodes of angioedema.[A273993,A273998] As opposed to [lanadelumab], another prophylactic agent for HAE that targets kallikrein, garadacimab targets activated factor XII, the first factor in the contact system responsible for the signalling cascade that results in angioedema.[L53283,A273998]

Garadacimab received its first approval in Australia and the UK in January 2025, and has since been approved in a number of other jurisdictions, including the EU and Japan.[A273993] In June 2025, garadacimab was approved by the US FDA for the prophylaxis of HAE episodes in patients ≥12 years of age.[L53303,L53283] It is the first inhibitor of factor XIIa to receive market approval.[L53303]

**Indication.** Garadacimab is indicated for the prophylaxis hereditary angioedema (HAE) attacks in adult and pediatric patients aged 12 years and older.[L53283]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-19 11:43 | 2:05 | 0/1/0 | 2/0/0 | 0/0/0 | 77,424/3,684 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 1 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.8). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Pawaskar_2022_reference](drugs/drug_garadacimab/Garadacimab_Pawaskar2022_reference.md) | Pawaskar D et al., Pharmacokinetic/pharmacodynamic modelin…, Clinical and translational… (2022) | [10.1111/cts.13192](https://doi.org/10.1111/cts.13192) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Garcia_2025](drugs/drug_garadacimab/pd_Garcia_2025_FXIIa_KA.md) | Garcia R et al., Population Pharmacokinetic/Pharmacodyna…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70009](https://doi.org/10.1002/psp4.70009) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Garcia_2025](drugs/drug_garadacimab/pd_Garcia_2025_HAE.md) | Garcia R et al., Population Pharmacokinetic/Pharmacodyna…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70009](https://doi.org/10.1002/psp4.70009) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Pawaskar_2022](drugs/drug_garadacimab/pd_Pawaskar_2022_FXIIa.md) | Pawaskar D et al., Pharmacokinetic/pharmacodynamic modelin…, Clinical and translational… (2022) | [10.1111/cts.13192](https://doi.org/10.1111/cts.13192) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.737). The first reading is what the record holds.">cross-check: disputed</span> | [Pawaskar_2022](drugs/drug_garadacimab/pd_Pawaskar_2022_aPTT.md) | Pawaskar D et al., Pharmacokinetic/pharmacodynamic modelin…, Clinical and translational… (2022) | [10.1111/cts.13192](https://doi.org/10.1111/cts.13192) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=garadacimab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: F12 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Garcia_2025 | relevant | 10 | 2 | The paper is a definitive population PK study for garadacimab, but the specific numeric parameter estimates (CL, V, Q, ka) are located in Supplementary Tables S4 and S5, which are not included in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-19 11:41 UTC</sub>
