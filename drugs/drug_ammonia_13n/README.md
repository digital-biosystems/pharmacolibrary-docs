<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09G&quot;,&quot;href&quot;:&quot;atc/V09G.md&quot;},{&quot;label&quot;:&quot;ammonia (13N)&quot;}]"></div>

# ammonia (13N)

- **generic name:** ammonia (13N)
- **ATC codes:** `V09GX05`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Ammonia labelled with a radioactive isotope of nitrogen is a diagnostic radiopharmaceutical used in imaging of the heart. It is classified as a cardiovascular diagnostic tracer, used in nuclear medicine procedures to assess blood flow to the heart muscle.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:40 | 2:16 | 0/0/0 | 0/0/0 | 0/0/0 | 19,647/4,809 | openai / gpt-6-luna | 2 | 1/1 | 2/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 32 matched, 14 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Phelps_1981.pdf` | Phelps ME et al., Cerebral extraction of N-13 ammonia: it…, Stroke (1981) | popPK | 8 | [10.1161/01.str.12.5.607](https://doi.org/10.1161/01.str.12.5.607) | [7303045](https://pubmed.ncbi.nlm.nih.gov/7303045) | The study models ammonia extraction and reports numeric extraction fractions, though specific PS estimates are not provided. |

<sub>queue written 2026-10-07T19:40:07.741791+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alessio_2010 | irrelevant | 1 | 0 | This is a review of cardiac PET imaging and provides no numeric disposition parameters for 13N-ammonia. |
| popPK | Hashimoto_1994 | irrelevant | 0 | 0 | [13N] ammonia is only used as an imaging agent, with no quantitative disposition parameters reported. |
| popPK | Litvinova_2000 | irrelevant | 0 | 0 | [N-13]-ammonia is only a perfusion tracer; the reported kinetic values are for [C-11]-acetate. |
| popPK | Nickles_1993 | irrelevant | 0 | 0 | 13N-ammonia is only a visual comparator; quantitative clearance data are for 94mTc-teboroxime. |
| popPK | Schelbert_1982 | irrelevant | 0 | 0 | N-13 ammonia is used as a blood-flow tracer, with no quantitative pharmacokinetic disposition parameters reported. |
| popPK | Schröter_1994 | irrelevant | 0 | 0 | This review mentions N-13 ammonia only as a perfusion tracer and reports no quantitative disposition parameters. |
| popPK | Schwaiger_1985 | irrelevant | 0 | 0 | N-13 ammonia is only a blood-flow tracer; no quantitative pharmacokinetic parameters are reported. |
| popPK | Torizuka_1985 | irrelevant | 0 | 0 | The supplied evidence contains no study details or numeric pharmacokinetic parameters. |
| popPK | Vanoverschelde_1992 | irrelevant | 0 | 0 | 13N-ammonia is used as a PET perfusion tracer, and no ammonia disposition parameters are reported. |
| popPK | Wu_1995 | irrelevant | 1 | 0 | Canine ammonia PET blood curves are studied, but no quantitative disposition parameters are reported. |
| popPK | Yoshida_1986 | irrelevant | 1 | 0 | The study describes tracer clearance qualitatively but reports no numeric pharmacokinetic parameters. |
| popPK | van_2000 | irrelevant | 0 | 0 | Nitrogen-13 ammonia is only a PET tracer, and no ammonia disposition parameters are reported. |
| popPK | vom_2001 | irrelevant | 0 | 0 | This is a review of ammonia-13 imaging, not a study reporting quantitative disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
