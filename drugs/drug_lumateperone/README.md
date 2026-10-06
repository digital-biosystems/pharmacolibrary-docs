<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;lumateperone&quot;}]"></div>

# lumateperone

- **generic name:** lumateperone
- **ATC codes:** `N05AD10`
- **DrugBank:** [DB06077](https://go.drugbank.com/drugs/DB06077) · **PubChem:** [CID 21302490](https://pubchem.ncbi.nlm.nih.gov/compound/21302490)
- **molar mass:** 393.506 g/mol (C24H28FN3O) — DrugBank
- **groups:** approved, investigational

## About

Lumateperone is an antipsychotic drug used to treat schizophrenia. It is approved in the United States, but not authorised in the European Union.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 16:50 | 0:20 | 0/0/0 | 0/0/0 | 0/0/0 | 26,359/636 | ollama / glm-5.3-flash | 3 | 0/3 | 3/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=lumateperone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | brain | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP1A2` substrate, `CYP2C8` substrate, `CYP3A4` substrate, `UGT1A1` substrate, `UGT1A4` substrate, `UGT2B15` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `UGT1A1` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| — | brain | `SLC6A4` inhibitor | DrugBank actor |
| — | platelet | `SLC6A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: AKR1B10 (substrate), AKR1C1 (substrate), AKR1C4 (substrate), AKR1E2 (substrate), DRD1 (partial agonist), DRD2 (partial agonist), HTR2A (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chen_2025 | irrelevant | 0 | 0 | This is a dose-response efficacy/safety meta-analysis of RCTs with no PK disposition parameters (CL, V, half-life, or PK model) for lumateperone. |
| popPK | Chen_2026 | irrelevant | 0 | 0 | no_text gate: only 197 chars of text extracted (&lt; 400) |
| popPK | Furukawa_2026 | irrelevant | 0 | 0 | This is a dose-response efficacy meta-analysis of antipsychotics; no PK parameters (CL, V, ka, half-life) for lumateperone are reported. |
| popPK | Hsu_2025 | irrelevant | 0 | 0 | This is a dose-response efficacy/safety meta-analysis of lumateperone in bipolar depression with no PK parameters (CL, V, ka, half-life, or population-PK model) reported. |
| popPK | Lin_2025 | irrelevant | 0 | 0 | This is a dose–response meta-analysis of prolactin changes, not a PK study; no lumateperone disposition parameters (CL, V, ka, half-life) are reported. |
| popPK | Mishra_2026 | irrelevant | 2 | 1 | This is a quantitative systems pharmacology efficacy/receptor-binding model, not a PK disposition study; no CL, V, ka, or half-life parameters for lumateperone are reported, and any concentration details would live in supplementary material. |
| popPK | Tan_2024 | irrelevant | 0 | 0 | In-vitro screening of ferroptosis inhibitors in HT22 cells; no PK parameters for lumateperone reported. |
| popPK | Terao_2026 | irrelevant | 0 | 0 | no_text gate: only 190 chars of text extracted (&lt; 400) |
| popPK | Tian_2025 | irrelevant | 0 | 0 | This is a dose-response meta-analysis of discontinuation outcomes, not a PK study reporting clearance, volume, or population-PK parameters for lumateperone. |
| popPK | Wu_2022 | irrelevant | 0 | 0 | This is a dose-response meta-analysis of weight gain, not a PK study, and contains no pharmacokinetic parameters for lumateperone. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
