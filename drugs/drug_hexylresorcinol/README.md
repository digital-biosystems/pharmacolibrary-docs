<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R02A&quot;,&quot;href&quot;:&quot;atc/R02A.md&quot;},{&quot;label&quot;:&quot;hexylresorcinol&quot;}]"></div>

# hexylresorcinol

- **generic name:** hexylresorcinol
- **ATC codes:** `R02AA12`
- **DrugBank:** [DB11254](https://go.drugbank.com/drugs/DB11254) · **PubChem:** [CID 3610](https://pubchem.ncbi.nlm.nih.gov/compound/3610)
- **molar mass:** 194.2701 g/mol (C12H18O2) — DrugBank
- **groups:** approved

## About

Hexylresorcinol is an antiseptic used in throat preparations for sore throat, and has also been used as an anthelmintic. It is an approved drug, used mainly in throat lozenges and similar products.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q229969](https://www.wikidata.org/wiki/Q229969) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 13:49 | 0:09 | 0/0/0 | 0/1/0 | 0/0/0 | 18,897/531 | ollama / glm-5.3-flash | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Buchholz_2009_INa_block](drugs/drug_hexylresorcinol/pd_Buchholz_2009_INa_block.md) | depolarisation-induced whole-cell sodium inward current block (NaV1.2) ← hexylresorcinol · direct Emax (saturable) effect | — | Buchholz V et al., Topical antiseptics for the treatment o…, Naunyn-Schmiedeberg's archi… (2009) | [10.1007/s00210-009-0416-x](https://doi.org/10.1007/s00210-009-0416-x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=hexylresorcinol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: TGM2 (inhibitor), TOP1 (inhibitor), TYR (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Arteaga_2012 | irrelevant | 0 | 0 | In vitro electrochemical/DPPH antioxidant assay; hexylresorcinol is only one of many tested compounds, no PK parameters. |
| popPK | Buchholz_2009 | irrelevant | 0 | 0 | In-vitro electrophysiology study of sodium channel blockade; no pharmacokinetic disposition parameters for hexylresorcinol. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | Hexylresorcinol appears only as an endogenous/exhaled metabolite biomarker in an air-pollution study, with no pharmacokinetic parameters or dosing. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
