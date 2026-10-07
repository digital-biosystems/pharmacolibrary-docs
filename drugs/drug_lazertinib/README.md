<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;lazertinib&quot;}]"></div>

# lazertinib

- **generic name:** lazertinib
- **ATC codes:** `L01EB09`
- **DrugBank:** [DB16216](https://go.drugbank.com/drugs/DB16216) · **PubChem:** not captured
- **molar mass:** 554.655 g/mol (C30H34N8O3) — DrugBank
- **groups:** approved, investigational

## About

Lazertinib is a protein kinase inhibitor used to treat non-small-cell lung carcinoma. It is an authorised medicine in the European Union for this cancer indication.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q105337288](https://www.wikidata.org/wiki/Q105337288) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| lazertinib | parent | 554.655 | C30H34N8O3 | DrugBank | — | Ter_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 02:37 | 1:12 | 0/3/0 | 0/0/0 | 0/0/0 | 21,537/5,490 | openai / gpt-6-luna | 3 | 0/1 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Ter_2025_gstm1_non_nullapproved_dose](drugs/drug_lazertinib/Lazertinib_Ter2025_gstm1_non_nullapproved_dose.md) | — | 1-compartment (no model) | 0 | Ter Heine R et al., Optimizing lazertinib therapy through G…, Cancer chemotherapy and pha… (2025) | [10.1007/s00280-025-04828-y](https://doi.org/10.1007/s00280-025-04828-y) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Ter_2025_gstm1_nullalternative_dose](drugs/drug_lazertinib/Lazertinib_Ter2025_gstm1_nullalternative_dose.md) | — | 1-compartment (no model) | 1 (+1 cov.) | Ter Heine R et al., Optimizing lazertinib therapy through G…, Cancer chemotherapy and pha… (2025) | [10.1007/s00280-025-04828-y](https://doi.org/10.1007/s00280-025-04828-y) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Ter_2025_gstm1_nullapproved_dose](drugs/drug_lazertinib/Lazertinib_Ter2025_gstm1_nullapproved_dose.md) | — | 1-compartment (no model) | 0 | Ter Heine R et al., Optimizing lazertinib therapy through G…, Cancer chemotherapy and pha… (2025) | [10.1007/s00280-025-04828-y](https://doi.org/10.1007/s00280-025-04828-y) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=lazertinib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCG2` inhibitor | DrugBank actor |
| absorption | liver | `ABCG2` inhibitor | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCG2` inhibitor | DrugBank actor |
| absorption | testis | `ABCG2` inhibitor | DrugBank actor |
| metabolism | liver | `CYP3A4` inhibitor/substrate, `GSTM1` substrate, `SLC22A1` inhibitor, `UGT1A1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `UGT1A1` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: EGFR (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 3  ·  extracted 0  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Huh_2023.pdf` | Huh KY et al., Effects of food and race on the pharmac…, Lung cancer (Amsterdam, Net… (2023) | popPK | 8 | [10.1016/j.lungcan.2022.11.021](https://doi.org/10.1016/j.lungcan.2022.11.021) | [36495784](https://pubmed.ncbi.nlm.nih.gov/36495784) | This is an original human lazertinib PK study, but numeric disposition parameter values are not shown in the evidence. |

<sub>queue written 2026-10-07T02:36:09.138992+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Huh_2023 | relevant | 8 | 1 | This is an original human lazertinib PK study, but numeric disposition parameter values are not shown in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 02:36 UTC</sub>
