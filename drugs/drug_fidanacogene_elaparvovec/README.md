<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;fidanacogene elaparvovec&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;FidanacogeneElaparvovec_Wojciechowski2025_reference&quot;,&quot;label&quot;:&quot;Wojciechowski_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_fidanacogene_elaparvovec/FidanacogeneElaparvovec_Wojciechowski2025_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# fidanacogene elaparvovec

- **generic name:** fidanacogene elaparvovec
- **ATC codes:** `B02BD17`
- **DrugBank:** [DB16783](https://go.drugbank.com/drugs/DB16783)
- **groups:** approved, investigational

## About

**Description.** Fidanacogene elaparvovec is a liver-specific adeno-associated virus (AAV) vector containing a codon-optimized human coagulation FIX gene that was investigated as a potential treatment for hemophilia B.[L46691] Hemophilia B is a rare X-linked genetic disorder characterized by abnormal coagulation due to dysfunctional coagulation factor IX with a male incidence estimated to be 1 in 30,000 male births worldwide.[A32552] Disease severity is linked to the level of factor IX activity in the blood plasma, ranging from increased bleeding after injuries and surgical operations to spontaneous bleeding, hemorrhages in soft tissues or joints, and severe subcutaneous hematomas. Current available treatments include substitution therapy involving the intravenous administration of standard factor IX once a week for bleeding or as prophylaxis and 2–3 times a week for severe hemophilia, although this carries a significant financial burden to the healthcare system. Other more radical approaches like liver transplants have also been considered.[A262929]

On January 3, 2024, fidanacogene elaparvovec was approved by Health Canada under the brand name BEQVEZ for the treatment of adults with moderately severe to severe hemophilia B (congenital Factor IX (FIX) deficiency) who are negative for neutralizing antibodies to variant AAV serotype Rh74.[L49469] This approval was based on positive results demonstrated in the open-label, single-arm Phase 3 BENEGENE-2 study, where the annualized bleeding rate (ABR) was observed to be 1.3 for the 12 months from week 12 to month 15 compared to an ABR of 4.43 for the pre-treatment period.[L49469,L46691] Fidanacogene elaparvovec was also approved by the FDA on April 26, 2024.[L50577]

**Indication.** In Canada and the US, fidanacogene elaparvovec is indicated for the treatment of adults (aged 18 years or older) with moderately severe to severe Hemophilia B (congenital Factor IX deficiency) who are negative for neutralizing antibodies to variant AAV serotype Rh74.[L49444,L50572]

In the US, it is also approved for use in adults who currently use factor IX prophylaxis therapy, have current or historical life-threatening hemorrhage, or have repeated, serious spontaneous bleeding episodes.[L50572]

In the EU, it is approved for a similar but slightly different indication, for the treatment of severe and moderately severe haemophilia B (congenital factor IX deficiency) in adult patients without a history of factor IX inhibitors and without detectable
antibodies to variant AAV serotype Rh74. [L52845]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-18 22:19 | 1:17 | 0/1/0 | 0/1/0 | 0/0/0 | 52,900/624 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 1 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Wojciechowski_2025_reference](drugs/drug_fidanacogene_elaparvovec/FidanacogeneElaparvovec_Wojciechowski2025_reference.md) | Wojciechowski J et al., Population Modeling of Factor IX Activi…, Clinical pharmacokinetics (2025) | [10.1007/s40262-025-01535-y](https://doi.org/10.1007/s40262-025-01535-y) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | [Cao_2025](drugs/drug_fidanacogene_elaparvovec/pd_Cao_2025_IgG.md) | Cao M et al., Safety, efficacy, and immunogenicity of…, Gene therapy (2025) | [10.1038/s41434-025-00512-1](https://doi.org/10.1038/s41434-025-00512-1) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=fidanacogene_elaparvovec) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | <sub>“…serum/plasma compared to the other liquid matrices (saliva, urine, semen).[L49444]…”</sub> | prose |
| excretion | kidney | <sub>“…shed in peripheral blood mononuclear cells (PBMC), saliva, urine, semen, and serum/plasma.…”</sub> | prose |

<sub>Actors without a tissue in the table: Coagulation factor IX (F9) (gene replacement).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 4 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cao_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for KJ103 (an IgG-degrading enzyme), not for fidanacogene_elaparvovec. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-18 22:18 UTC</sub>
