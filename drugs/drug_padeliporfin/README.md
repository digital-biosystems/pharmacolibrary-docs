<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;padeliporfin&quot;}]"></div>

# padeliporfin

- **generic name:** padeliporfin
- **ATC codes:** `L01XD07`
- **DrugBank:** [DB15575](https://go.drugbank.com/drugs/DB15575) · **PubChem:** not captured
- **molar mass:** 840.26 g/mol (C37H43N5O9PdS) — DrugBank
- **groups:** approved, investigational

## About

Padeliporfin is a photosensitising anticancer agent used in photodynamic therapy for prostate cancer. It is authorised in the European Union, with one approved product, and remains investigational for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27277134](https://www.wikidata.org/wiki/Q27277134) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:34 | 0:06 | 0/0/0 | 0/0/0 | 0/0/0 | 13,598/513 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=padeliporfin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | liver | `SLCO1B1` inhibitor, `SLCO1B3` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Azzouzi_2015 | irrelevant | 0 | 0 | The paper is a clinical efficacy study focused on treatment outcomes (biopsy and necrosis rates) rather than pharmacokinetic parameters, and no PK data are reported. |
| popPK | Bugaj_2016 | irrelevant | 2 | 0 | The paper is a clinical review describing methodological aspects and physicochemical properties, but the evidence provided does not contain specific quantitative PK parameter values (CL, V, Q, ka) for padeliporfin. |
| popPK | Chen_2002 | irrelevant | 0 | 0 | The study focuses on photodynamic therapy efficacy and histopathology in dogs, not on the pharmacokinetics of padeliporfin. |
| popPK | Ong_2018 | irrelevant | 0 | 0 | The study focuses on reactive oxygen species dosimetry and photodynamic therapy outcomes using Tookad (padeliporfin) in mice, but does not report quantitative pharmacokinetic disposition parameters like clearance or volume. |
| popPK | Trachtenberg_2007 | irrelevant | 1 | 0 | The study focuses on the different drug Tookad (palladium-bacteriopheophorbide) for prostate cancer, not padeliporfin. |
| popPK | Tremblay_2003 | irrelevant | 0 | 0 | The study focuses on the endobronchial phototoxicity of WST 09 (not padeliporfin) in pigs and does not report pharmacokinetic parameters for padeliporfin. |
| popPK | Weersink_2005 | irrelevant | 0 | 0 | The paper focuses on delivery techniques and monitoring practicalities for photodynamic therapy and does not report quantitative pharmacokinetic parameters like clearance or volume of distribution. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
