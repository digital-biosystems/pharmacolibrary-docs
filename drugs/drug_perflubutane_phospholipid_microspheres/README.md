<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08D&quot;,&quot;href&quot;:&quot;atc/V08D.md&quot;},{&quot;label&quot;:&quot;perflubutane, phospholipid microspheres&quot;}]"></div>

# perflubutane, phospholipid microspheres

- **generic name:** perflubutane, phospholipid microspheres
- **ATC codes:** `V08DA06`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Perflubutane phospholipid microspheres are an ultrasound contrast agent used to improve imaging of the body during ultrasound scans. It is classified as an ultrasound contrast medium and remains in use as a diagnostic imaging agent.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:11 | 2:02 | 0/0/0 | 0/0/0 | 0/0/0 | 11,738/4,979 | openai / gpt-6-luna | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 15 matched, 9 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Landmark_2008.pdf` | Landmark KE et al., Pharmacokinetics of perfluorobutane fol…, Ultrasound in medicine & bi… (2008) | popPK | 8 | [10.1016/j.ultrasmedbio.2007.09.019](https://doi.org/10.1016/j.ultrasmedbio.2007.09.019) | [18096304](https://pubmed.ncbi.nlm.nih.gov/18096304) | The study reports numeric perfluorobutane half-lives, though no numeric clearance or compartmental model values are provided. |
| `Melich_2024.pdf` | Melich R et al., In Vitro and In Vivo Behavioral Evaluat…, Ultrasound in medicine & bi… (2024) | popPK | 8 | [10.1016/j.ultrasmedbio.2024.03.009](https://doi.org/10.1016/j.ultrasmedbio.2024.03.009) | [38637170](https://pubmed.ncbi.nlm.nih.gov/38637170) | Rat in-vivo persistence and half-life are studied, but no numeric disposition values are present in the provided evidence. |

<sub>queue written 2026-10-07T19:10:52.832866+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bijland_2011 | irrelevant | 0 | 0 | This is a mouse study of perfluorobutane sulfonate, a different compound, and reports no disposition parameters for the subject drug. |
| popPK | Dixon_2013 | irrelevant | 0 | 0 | This in-vitro study uses perfluorobutane microbubbles as a delivery aid, not the subject drug, and reports no pharmacokinetic parameters for it. |
| popPK | Kindberg_2003 | irrelevant | 1 | 0 | Rat cellular uptake study reports no numeric pharmacokinetic disposition parameters. |
| popPK | Lau_2020 | irrelevant | 0 | 0 | The numeric pharmacokinetic values are for perfluorobutane sulfonate, not perflubutane phospholipid microspheres. |
| popPK | Li_2017 | irrelevant | 2 | 2 | It reports numeric Cmax and AUC, but no quantitative disposition parameters or compartmental/population-PK model. |
| popPK | Li_2026 | irrelevant | 0 | 0 | Sonazoid is used as a macrophage-blocking agent, with no quantitative pharmacokinetic parameters reported. |
| popPK | Melich_2024 | relevant | 8 | 0 | Rat in-vivo persistence and half-life are studied, but no numeric disposition values are present in the provided evidence. |
| popPK | Zhao_2015 | irrelevant | 0 | 0 | The evidence concerns different compounds (PFASs), not perflubutane_phospholipid_microspheres, and reports in-vitro transporter kinetics. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
