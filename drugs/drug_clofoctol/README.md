<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01X&quot;,&quot;href&quot;:&quot;atc/J01X.md&quot;},{&quot;label&quot;:&quot;clofoctol&quot;}]"></div>

# clofoctol

- **generic name:** clofoctol
- **ATC codes:** `J01XX03`
- **DrugBank:** [DB13237](https://go.drugbank.com/drugs/DB13237) · **PubChem:** not captured
- **molar mass:** 365.34 g/mol (C21H26Cl2O) — DrugBank
- **groups:** experimental

## About

Clofoctol is an antibacterial drug that was used to treat upper respiratory tract infections. It is currently listed only as an experimental compound and does not appear to be an approved medicine today.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3680895](https://www.wikidata.org/wiki/Q3680895) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:54 | 1:55 | 0/0/0 | 0/0/0 | 0/0/0 | 9,798/640 | einfracz / qwen3.8-27b | 1 | 0/0 | 1/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Alessandrì_1986.pdf` | Alessandrì MG et al., The pharmacokinetic profile of clofocto…, Drugs under experimental an… (1986) | popPK | 8 | not captured | [3720520](https://pubmed.ncbi.nlm.nih.gov/3720520) | The paper reports quantitative pharmacokinetic parameters (Cmax, Tmax, T1/2) for clofoctol in rats, though full compartmental model parameters (CL, V) are not explicitly listed. |
| `Scaglione_2012.pdf` | Scaglione F et al., In vitro and in vivo pharmacokinetic/ph…, Journal of chemotherapy (Fl… (2012) | popPK | 6 | [10.1179/1973947812Y.0000000018](https://doi.org/10.1179/1973947812Y.0000000018) | [23040683](https://pubmed.ncbi.nlm.nih.gov/23040683) | The study reports PK/PD relationships and an AUC/MIC ratio but lacks specific quantitative disposition parameters (CL, V, ka) in the provided evidence, which are likely in the full text or figures not included. |
| `del_1983.pdf` | del Tacca M et al., The pharmacokinetics of clofoctol in he…, Biological research in preg… (1983) | popPK | 6 | not captured | [6652171](https://pubmed.ncbi.nlm.nih.gov/6652171) | The paper is a primary PK study of clofoctol in neonates and adults, but the evidence text contains no specific numeric values for parameters (CL, V, Ka, etc.), only qualitative comparisons and timing. |

<sub>queue written 2026-10-07T11:54:32.974278+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Danesi_1988 | irrelevant | 3 | 5 | The study reports only Cmax and AUC values for clofoctol in plasma and lung tissue after rectal dosing, lacking compartmental PK parameters (CL, V, ka, half-life) required for population PK modeling. |
| popPK | Scaglione_2012 | relevant | 6 | 1 | The study reports PK/PD relationships and an AUC/MIC ratio but lacks specific quantitative disposition parameters (CL, V, ka) in the provided evidence, which are likely in the full text or figures not included. |
| popPK | del_1983 | relevant | 6 | 0 | The paper is a primary PK study of clofoctol in neonates and adults, but the evidence text contains no specific numeric values for parameters (CL, V, Ka, etc.), only qualitative comparisons and timing. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
