<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01A&quot;,&quot;href&quot;:&quot;atc/L01A.md&quot;},{&quot;label&quot;:&quot;treosulfan&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Treosulfan_Gwka2008_1309_921&quot;,&quot;label&quot;:&quot;G\u0142\u00f3wka_2008_1309_921&quot;,&quot;href&quot;:&quot;drugs/drug_treosulfan/Treosulfan_Gwka2008_1309_921.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Treosulfan_Gwka2008_1960&quot;,&quot;label&quot;:&quot;G\u0142\u00f3wka_2008_1960&quot;,&quot;href&quot;:&quot;drugs/drug_treosulfan/Treosulfan_Gwka2008_1960.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Treosulfan_Gwka2008_735&quot;,&quot;label&quot;:&quot;G\u0142\u00f3wka_2008_735&quot;,&quot;href&quot;:&quot;drugs/drug_treosulfan/Treosulfan_Gwka2008_735.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# treosulfan

- **generic name:** treosulfan
- **ATC codes:** `L01AB02`
- **DrugBank:** [DB11678](https://go.drugbank.com/drugs/DB11678)
- **groups:** approved, investigational

## About

**Description.** Treosulfan is a prodrug alternative to [busulfan] for myeloablative conditioning prior to hematopoietic stem cell transplantation.[L52245] 

It was approved by the EMA in June 2019[L16965] and by the FDA in January 2025 for use in combination with [fludarabine].[L52575]

**Indication.** Treosulfan is indicated in combination with [fludarabine] as a preparative regimen for allogeneic hematopoietic stem cell transplantation (alloHSCT) in adult and pediatric patients 1 year of age and older with acute myeloid leukemia or myelodysplastic syndrome.[L52245]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-15 04:38 | 2:25 | 0/3/0 | 0/0/0 | 0/0/0 | 29,327/3,896 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: split column '1309 ± 921' is a table statistic/structure column, not a study po…</sub><br><sub>route_to: `human_review`</sub> | [Główka_2008_1309_921](drugs/drug_treosulfan/Treosulfan_Gwka2008_1309_921.md) | Główka FK et al., Pharmacokinetics of high-dose i.v. treo…, Bone marrow transplantation (2008) | [10.1038/bmt.2008.287](https://doi.org/10.1038/bmt.2008.287) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: split column '1960' is a table statistic/structure column, not a study populati…</sub><br><sub>route_to: `human_review`</sub> | [Główka_2008_1960](drugs/drug_treosulfan/Treosulfan_Gwka2008_1960.md) | Główka FK et al., Pharmacokinetics of high-dose i.v. treo…, Bone marrow transplantation (2008) | [10.1038/bmt.2008.287](https://doi.org/10.1038/bmt.2008.287) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: split column '735' is a table statistic/structure column, not a study populatio…</sub><br><sub>route_to: `human_review`</sub> | [Główka_2008_735](drugs/drug_treosulfan/Treosulfan_Gwka2008_735.md) | Główka FK et al., Pharmacokinetics of high-dose i.v. treo…, Bone marrow transplantation (2008) | [10.1038/bmt.2008.287](https://doi.org/10.1038/bmt.2008.287) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=treosulfan) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2C19` inhibitor, `CYP2C8` substrate, `CYP2D6` substrate, `CYP3A4` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor | DrugBank actor |
| excretion | kidney | <sub>“…f administered treosulfan dose is excreted unchanged in the urine within 24 hours, and 89%…”</sub> | prose |

<sub>Actors without a tissue in the table: DNA (cross-linking/alkylation).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 20 matched, 18 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Li_2023.pdf` | Li X et al., Population pharmacokinetic modeling of…, Drug metabolism and pharmac… (2023) | popPK | 10 | [10.1016/j.dmpk.2023.100515](https://doi.org/10.1016/j.dmpk.2023.100515) | [37481830](https://pubmed.ncbi.nlm.nih.gov/37481830) | The paper describes a population PK model for treosulfan but the specific numeric parameter values (CL, V, Q) are not present in the provided evidence. |
| `Rosser_2023.pdf` | Rosser SPA et al., Evaluation of treosulfan cumulative exp…, British journal of clinical… (2023) | popPK | 10 | [10.1111/bcp.15599](https://doi.org/10.1111/bcp.15599) | [36369677](https://pubmed.ncbi.nlm.nih.gov/36369677) | The paper is a population PK study for treosulfan and explicitly reports numeric values for clearance (16.3 L/h) and volume of distribution (41.9 L) in the text. |
| `Ten_2014.pdf` | Ten Brink MH et al., Pharmacokinetics of treosulfan in pedia…, Therapeutic drug monitoring (2014) | popPK | 10 | [10.1097/FTD.0000000000000047](https://doi.org/10.1097/FTD.0000000000000047) | [24487253](https://pubmed.ncbi.nlm.nih.gov/24487253) | The paper reports a population PK model for treosulfan with explicit numeric values for clearance (6.85 L/h) and volume of distribution (13.2 L) in the text. |
| `van_2019.pdf` | van der Stoep MYEC et al., Population pharmacokinetics of treosulf…, British journal of clinical… (2019) | popPK | 10 | [10.1111/bcp.13995](https://doi.org/10.1111/bcp.13995) | [31144349](https://pubmed.ncbi.nlm.nih.gov/31144349) | The paper is a population PK study for treosulfan, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |

<sub>queue written 2026-09-15T04:36:27.316035+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Li_2023 | relevant | 10 | 0 | The paper describes a population PK model for treosulfan but the specific numeric parameter values (CL, V, Q) are not present in the provided evidence. |
| popPK | van_2019 | relevant | 10 | 2 | The paper is a population PK study for treosulfan, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-15 04:37 UTC</sub>
