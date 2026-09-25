<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03A&quot;,&quot;href&quot;:&quot;atc/A03A.md&quot;},{&quot;label&quot;:&quot;tiropramide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tiropramide_Arigoni1986_reference&quot;,&quot;label&quot;:&quot;Arigoni_1986_reference&quot;,&quot;href&quot;:&quot;drugs/drug_tiropramide/Tiropramide_Arigoni1986_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tiropramide_Jeong2020_reference&quot;,&quot;label&quot;:&quot;Jeong_2020_reference&quot;,&quot;href&quot;:&quot;drugs/drug_tiropramide/Tiropramide_Jeong2020_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# tiropramide

- **generic name:** tiropramide
- **ATC codes:** `A03AC05`
- **DrugBank:** [DB13091](https://go.drugbank.com/drugs/DB13091)
- **groups:** investigational

## About

**Description.** Tiropramide is under investigation in clinical trial NCT01629212 (Comparison of the Efficacy and Safety of Tiropramide and Octylonium in the Treatment of Irritable Bowel Syndrome).

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-18 10:17 | 1:27 | 0/0/2 | 0/0/0 | 0/0/0 | 43,448/3,345 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Arigoni_1986_reference](drugs/drug_tiropramide/Tiropramide_Arigoni1986_reference.md) | Arigoni R et al., Pharmacokinetics of tiropramide after s…, Arzneimittel-Forschung (1986) | — |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.588). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Jeong_2020_reference](drugs/drug_tiropramide/Tiropramide_Jeong2020_reference.md) | Jeong SH et al., Population Pharmacokinetic Analysis of…, Pharmaceutics (2020) | [10.3390/pharmaceutics12040374](https://doi.org/10.3390/pharmaceutics12040374) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Arigoni_1986.pdf` | Arigoni R et al., Pharmacokinetics of tiropramide after s…, Arzneimittel-Forschung (1986) | popPK | 10 | not captured | [3718598](https://pubmed.ncbi.nlm.nih.gov/3718598) | The abstract explicitly reports quantitative pharmacokinetic parameters for tiropramide, including volume of distribution (221 l), elimination constants, and half-lives for multiple routes of administration. |

<sub>queue written 2026-09-18T10:15:53.177013+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Jeong_2020 | not_relevant | 0 | 0 | The study explicitly reports that the tested genetic variants (ABCB1, CYP2D6, OCT2, PEPT1) did not show any significant association with the pharmacokinetic parameters of tiropramide. |
| popPK | Kim_2016 | irrelevant | 2 | 0 | The study uses tiropramide data only to compare bioequivalence analysis methods (NCA vs. compartmental) and does not report specific quantitative PK parameter values (CL, V, etc.) for the drug. |
| PD | Tidke_2023 | not_relevant | 0 | 0 | The paper focuses on the forced degradation and structural characterization of tiropramide using HPLC-MS/MS and NMR, containing no pharmacodynamic or exposure-response data. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-18 10:16 UTC</sub>
