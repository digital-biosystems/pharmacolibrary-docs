<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B03A&quot;,&quot;href&quot;:&quot;atc/B03A.md&quot;},{&quot;label&quot;:&quot;ferric hydroxide&quot;}]"></div>

# ferric hydroxide

- **generic name:** ferric hydroxide
- **ATC codes:** `B03AB04`
- **DrugBank:** [DB13423](https://go.drugbank.com/drugs/DB13423) · **PubChem:** not captured
- **molar mass:** 106.866 g/mol (FeH3O3) — DrugBank
- **groups:** investigational

## About

Ferric hydroxide is a trivalent iron compound classified as an oral iron preparation, a class of medicines used to treat anaemia. It appears to be investigational rather than an established marketed medicine, with no authorisation record found in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q15491377](https://www.wikidata.org/wiki/Q15491377) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 19:58 | 0:38 | 0/0/0 | 0/0/0 | 0/0/0 | 23,350/859 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/4 | 3/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 2  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Geisser_1984.pdf` | Geisser P et al., Iron pharmacokinetics after administrat…, Arzneimittel-Forschung (1984) | popPK | 9 | not captured | [6543131](https://pubmed.ncbi.nlm.nih.gov/6543131) | The study reports pharmacokinetic parameters (clearance, volume, elimination constants) for ferric-hydroxide-polymaltose complex in rats, but the specific numeric values are not present in the provided evidence text. |
| `Geisser_1987.pdf` | Geisser P et al., Pharmacokinetics of iron salts and ferr…, Arzneimittel-Forschung (1987) | popPK | 8 | not captured | [3566862](https://pubmed.ncbi.nlm.nih.gov/3566862) | The study reports pharmacokinetic parameters (invasion/elimination constants, distribution volumes) for ferric hydroxide-polymaltose complex in rats, but the specific numeric values are not present in the provided evidence. |

<sub>queue written 2026-10-05T19:58:36.255078+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cao_2025 | irrelevant | 2 | 1 | The study models the pharmacokinetics of ferric carboxymaltose (FCM), not ferric hydroxide, and while FCM contains a ferric hydroxide core, the reported parameters (Kpt, clearance rates) are for the FCM formulation/iron distribution, not the specific drug entity ferric hydroxide. |
| popPK | Geisser_1984 | relevant | 9 | 2 | The study reports pharmacokinetic parameters (clearance, volume, elimination constants) for ferric-hydroxide-polymaltose complex in rats, but the specific numeric values are not present in the provided evidence text. |
| popPK | Geisser_1987 | relevant | 8 | 0 | The study reports pharmacokinetic parameters (invasion/elimination constants, distribution volumes) for ferric hydroxide-polymaltose complex in rats, but the specific numeric values are not present in the provided evidence. |
| popPK | Parrot_2026 | irrelevant | 0 | 0 | The paper is a general review of pharmacokinetic modeling for nanoparticles and does not report specific quantitative PK parameters for ferric hydroxide. |
| PD | Parrot_2026 | not_relevant | 0 | 0 | The text is a review of pharmacokinetic modeling frameworks for nanoparticles and does not report any specific pharmacodynamic or exposure-response data for ferric hydroxide. |
| popPK | Stefanelli_1984 | irrelevant | 2 | 0 | The study uses ferric hydroxide phosphate colloid as a tracer to label reticuloendothelial iron pools, reporting iron pool sizes (mumol) rather than pharmacokinetic disposition parameters (CL, V, ka) for the drug itself. |
| popPK | Takada_2022 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for roxadustat, not ferric hydroxide. |
| PD | Takada_2022 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for roxadustat, not ferric hydroxide, and contains no pharmacodynamic (PD) or exposure-response analysis. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
