<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B05X&quot;,&quot;href&quot;:&quot;atc/B05X.md&quot;},{&quot;label&quot;:&quot;magnesium phosphate&quot;}]"></div>

# magnesium phosphate

- **generic name:** magnesium phosphate
- **ATC codes:** `B05XA10`
- **DrugBank:** [DB13862](https://go.drugbank.com/drugs/DB13862)
- **groups:** investigational

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-19 11:17 | 2:57 | 0/0/0 | 0/0/0 | 0/0/0 | 45,380/2,026 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 0/1 | 7/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 19 matched, 17 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Luan_2020.pdf` | Luan RY et al., [Effect of Different Passivating Agents…, Huan jing ke xue= Huanjing… (2020) | pd | 4 | [10.13227/j.hjkx.201906121](https://doi.org/10.13227/j.hjkx.201906121) | [31854950](https://www.ncbi.nlm.nih.gov/pubmed/31854950) | metadata signals extractable PD data (concentrationeffect) |

<sub>queue written 2026-09-19T11:17:05.522460+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aro_1984 | irrelevant | 0 | 0 | The study investigates the effects of guar gum on cholesterol levels and does not report pharmacokinetic parameters for magnesium phosphate. |
| PD | Aro_1984 | not_relevant | 0 | 0 | The paper studies the effect of guar gum on cholesterol and explicitly states that serum magnesium and phosphate levels were unaffected; it does not report a pharmacodynamic or exposure-response relationship for magnesium phosphate. |
| popPK | Branson_2011 | irrelevant | 0 | 0 | no_text gate: only 39 chars of text extracted (&lt; 400) |
| PD | Branson_2011 | not_relevant | 0 | 0 | The paper discusses oxygen toxicity and does not contain any pharmacodynamic or exposure-response data for magnesium phosphate. |
| popPK | Clarke_2014 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of recombinant parathyroid hormone (rhPTH 1-84), not magnesium phosphate, which is only measured as a biomarker. |
| popPK | Duss_1993 | irrelevant | 0 | 0 | The study investigates the renal handling of electrolytes (including magnesium and phosphate) in response to albuterol, not the pharmacokinetics of magnesium phosphate as a drug. |
| popPK | Hou_2024 | irrelevant | 0 | 0 | The paper describes the development of a magnesium phosphate bone cement material for bone repair and does not report any pharmacokinetic parameters for magnesium phosphate as a drug. |
| popPK | Islam_2022 | irrelevant | 0 | 0 | The paper is a review on immune system rejuvenation and does not contain any pharmacokinetic data or quantitative disposition parameters for magnesium phosphate. |
| PD | Islam_2022 | not_relevant | 0 | 0 | The paper is a general review on immune system rejuvenation and dietary supplements; it does not report any pharmacokinetic or pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for magnesium phosphate. |
| popPK | Kumar_2019 | irrelevant | 0 | 0 | The paper is a radiation dosimetry study using lithium magnesium phosphate as a dosimeter material, not a pharmacokinetic study of magnesium phosphate as a drug. |
| PD | Kumar_2019 | not_relevant | 0 | 0 | The paper evaluates radiation dosimeters (LiMgPO4:Tb,B) for dental imaging, not the pharmacodynamics of magnesium phosphate as a drug. |
| popPK | Luan_2020 | irrelevant | 0 | 0 | no_text gate: only 139 chars of text extracted (&lt; 400) |
| PD | Luan_2020 | not_relevant | 0 | 0 | The paper discusses heavy metal stabilization in compost, not pharmacodynamics or drug exposure-response relationships. |
| popPK | Maren_1992 | irrelevant | 0 | 0 | The paper is a renal physiology study in fish where magnesium phosphate is mentioned only as a bladder precipitate, not as a subject drug for PK analysis. |
| popPK | Patnaik_2013 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of EZN-2208 (a PEG-SN38 conjugate), not magnesium phosphate. |
| PD | Patnaik_2013 | not_relevant | 0 | 0 | The paper describes a Phase I PK/safety study of EZN-2208 (PEG-SN38), not magnesium phosphate, and does not report any pharmacodynamic or exposure-response modeling. |
| popPK | Raimundo_2013 | irrelevant | 0 | 0 | The study focuses on parathyroid hormone levels during citrate-based renal replacement therapy and does not report pharmacokinetic parameters for magnesium phosphate. |
| popPK | Skinner_1991 | irrelevant | 0 | 0 | The paper is a review of nephrotoxicity assessment protocols and does not report pharmacokinetic parameters for magnesium phosphate. |
| popPK | Trinchieri_2014 | irrelevant | 0 | 0 | The paper discusses the pathophysiology and treatment of urinary stones (struvite/carbonate apatite) and does not report any pharmacokinetic parameters for magnesium phosphate. |
| popPK | Walker_1972 | irrelevant | 0 | 0 | no_text gate: only 99 chars of text extracted (&lt; 400) |
| popPK | Wehl_2022 | irrelevant | 0 | 0 | The paper describes magnesium phosphate as a nanocarrier material for drug delivery in an in-vitro study, not as a subject drug for pharmacokinetic analysis. |
| popPK | unknown_2010 | irrelevant | 0 | 0 | no_text gate: only 39 chars of text extracted (&lt; 400) |
| PD | unknown_2010 | not_relevant | 0 | 0 | The provided text is only a header for a poster session and contains no scientific content, data, or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
