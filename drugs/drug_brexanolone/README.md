<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;brexanolone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Brexanolone_Wald2022_reference&quot;,&quot;label&quot;:&quot;Wald_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_brexanolone/Brexanolone_Wald2022_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# brexanolone

- **generic name:** brexanolone
- **ATC codes:** `N06AX29`
- **DrugBank:** [DB11859](https://go.drugbank.com/drugs/DB11859) · **PubChem:** [CID 92786](https://pubchem.ncbi.nlm.nih.gov/compound/92786)
- **molar mass:** 318.4935 g/mol (C21H34O2) — DrugBank
- **groups:** approved, investigational

## About

Brexanolone is an antidepressant used to treat postpartum depression in adult women. It is approved but restricted to hospital or supervised settings, where patients must be monitored during the infusion, and it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2482223](https://www.wikidata.org/wiki/Q2482223) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-23 19:49 | 3:33 | 0/0/1 | 0/0/0 | 0/0/0 | 44,771/9,221 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: T1_cmax</sub><br><sub>blocking: T1_tmax</sub><br><sub>route_to: `scholar`</sub> | [Wald_2022_reference](drugs/drug_brexanolone/Brexanolone_Wald2022_reference.md) | ▶ model + simulator | 1-compartment, IV | 10 | Wald J et al., Allopregnanolone Concentrations in Brea…, Clinical pharmacokinetics (2022) | [10.1007/s40262-022-01155-w](https://doi.org/10.1007/s40262-022-01155-w) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=brexanolone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: AKR1B1 (substrate), GABRA1 (inhibitor), GABRA1 (positive allosteric modulator), GABRB2 (inhibitor), GABRD (inhibitor), GABRG2 (inhibitor), GABRG3 (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 50 matched, 15 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Machado_2019 | irrelevant | 0 | 0 | The study focuses on the behavioral effects of fluoxetine in rats and does not report pharmacokinetic parameters for brexanolone. |
| popPK | Sherer_2023 | irrelevant | 0 | 0 | The paper is a protocol for a study on biological mechanisms of anxiety in pregnancy and does not involve brexanolone or report any pharmacokinetic parameters. |
| popPK | Wenzel_2021 | irrelevant | 0 | 0 | The study focuses on neuroactive steroid ratios and depression in pregnancy, not the pharmacokinetics of brexanolone. |
| popPK | Zolkowska_2018 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for allopregnanolone and ganaxolone, not brexanolone. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-23 19:46 UTC</sub>
